import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { products, productCategories, reviews } from '@/data/products';

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find(p => p.id === params.id);
  
  if (!product) {
    notFound();
  }

  const productReviews = reviews.filter(r => r.productId === product.id);
  const relatedProducts = products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 3);

  const categoryInfo = productCategories.find(c => c.name === product.category);

  const renderStars = (rating: number, size: 'sm' | 'md' | 'lg' = 'md') => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const sizeClass = size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-2xl' : 'text-base';
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={`full-${i}`} className={`text-yellow-400 ${sizeClass}`}>★</span>
      );
    }
    
    if (hasHalfStar) {
      stars.push(
        <span key="half" className={`text-yellow-400 ${sizeClass}`}>☆</span>
      );
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className={`text-gray-300 ${sizeClass}`}>★</span>
      );
    }
    
    return stars;
  };

  return (
    <div className="py-8 bg-white">
      <div className="container-custom">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-500">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-primary-600">Products</Link>
          <span className="mx-2">/</span>
          <Link href={`/products/category/${categoryInfo?.slug}`} className="hover:text-primary-600">
            {product.category}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="relative h-96 mb-4 rounded-xl overflow-hidden">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {product.gallery.slice(0, 3).map((image, index) => (
                <div key={index} className="relative h-24 rounded-lg overflow-hidden cursor-pointer">
                  <Image
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-200"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                {product.category}
              </span>
              <div className="flex items-center">
                {renderStars(product.rating)}
                <span className="ml-2 text-sm text-gray-600">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {product.description}
            </p>

            <div className="flex items-center mb-8">
              <div className="text-4xl font-bold text-primary-600">
                ${product.price}
              </div>
              <div className="ml-4 text-gray-500">
                <span className="line-through">${Math.round(product.price * 1.2)}</span>
                <span className="ml-2 bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">
                  Save {Math.round(((product.price * 1.2) - product.price) / (product.price * 1.2) * 100)}%
                </span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <button className="w-full btn-primary text-lg py-4">
                Add to Cart
              </button>
              <div className="flex gap-4">
                <button className="flex-1 btn-secondary">
                  Add to Wishlist
                </button>
                <button className="flex-1 btn-secondary">
                  Compare
                </button>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Key Features</h3>
              <ul className="space-y-2">
                {product.features.slice(0, 6).map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 hover:bg-primary-100 text-gray-700 hover:text-primary-700 px-3 py-1 rounded-full text-sm font-medium transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button className="border-b-2 border-primary-600 text-primary-600 py-4 px-1 text-sm font-medium">
                Specifications
              </button>
              <button className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-b-2 py-4 px-1 text-sm font-medium">
                Features
              </button>
              <button className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-b-2 py-4 px-1 text-sm font-medium">
                Reviews ({productReviews.length})
              </button>
            </nav>
          </div>

          {/* Specifications Tab */}
          <div className="py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between py-3 border-b border-gray-100">
                  <span className="font-medium text-gray-900">{key}:</span>
                  <span className="text-gray-600">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Customer Reviews</h2>
            <button className="btn-primary">
              Write a Review
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Review Summary */}
            <div className="card p-6">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-600 mb-2">
                  {product.rating}
                </div>
                <div className="flex justify-center mb-2">
                  {renderStars(product.rating, 'lg')}
                </div>
                <p className="text-gray-600 mb-4">
                  Based on {product.reviewCount} reviews
                </p>
                
                {/* Rating Breakdown */}
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((star) => {
                    const percentage = Math.random() * 60 + 20; // Mock data
                    return (
                      <div key={star} className="flex items-center text-sm">
                        <span className="w-3">{star}</span>
                        <span className="text-yellow-400 mx-1">★</span>
                        <div className="flex-1 mx-2 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-yellow-400 h-2 rounded-full" 
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                        <span className="w-8 text-right">{Math.round(percentage)}%</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Individual Reviews */}
            <div className="lg:col-span-2 space-y-6">
              {productReviews.map((review) => (
                <div key={review.id} className="card p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center mb-2">
                        {renderStars(review.rating, 'sm')}
                        <span className="ml-2 font-bold text-gray-900">{review.title}</span>
                      </div>
                      <div className="text-sm text-gray-600">
                        By {review.author} • {new Date(review.publishedAt).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {review.content}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-500">
                      <button className="flex items-center hover:text-primary-600 transition-colors">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L9.5 6M7 20L5.5 21.5M7 20l.5-1.5m6.5-13.5L15 4m0 0L13.5 2.5M15 4L16.5 5.5" />
                        </svg>
                        Helpful ({review.helpful})
                      </button>
                    </div>
                    <button className="text-gray-500 hover:text-primary-600 transition-colors">
                      Reply
                    </button>
                  </div>
                </div>
              ))}

              {productReviews.length === 0 && (
                <div className="text-center py-12 text-gray-500">
                  <p>No reviews yet. Be the first to review this product!</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 pt-16 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Link key={relatedProduct.id} href={`/products/${relatedProduct.id}`} className="group">
                  <div className="card overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src={relatedProduct.imageUrl}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-2">
                        {renderStars(relatedProduct.rating, 'sm')}
                        <span className="ml-2 text-sm text-gray-600">
                          ({relatedProduct.reviewCount})
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors mb-2 line-clamp-2">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                        {relatedProduct.description}
                      </p>
                      <div className="text-xl font-bold text-primary-600">
                        ${relatedProduct.price}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}