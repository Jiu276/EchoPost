import Link from 'next/link';
import Image from 'next/image';
import { products, productCategories } from '@/data/products';

export default function ProductsPage() {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={`full-${i}`} className="text-yellow-400">★</span>
      );
    }
    
    if (hasHalfStar) {
      stars.push(
        <span key="half" className="text-yellow-400">☆</span>
      );
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="text-gray-300">★</span>
      );
    }
    
    return stars;
  };

  return (
    <div className="py-12 bg-gradient-to-br from-accent-50/30 via-white to-primary-50/20 min-h-screen">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Product Reviews
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Honest reviews and detailed analysis to help you make informed purchasing decisions
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-1/4">
            <div className="card p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Categories</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="/products" className="flex items-center justify-between text-primary-600 hover:text-primary-700 font-medium">
                    All Products
                    <span className="bg-primary-100 text-primary-600 text-sm px-2 py-1 rounded">
                      {products.length}
                    </span>
                  </Link>
                </li>
                {productCategories.map((category) => {
                  const categoryProducts = products.filter(product => product.category === category.name);
                  return (
                    <li key={category.id}>
                      <Link 
                        href={`/products/category/${category.slug}`}
                        className="flex items-center justify-between text-gray-700 hover:text-primary-600 transition-colors"
                      >
                        {category.name}
                        <span className="bg-gray-100 text-gray-600 text-sm px-2 py-1 rounded">
                          {categoryProducts.length}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Price Range</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 rounded" />
                    <span className="text-gray-700">Under $100</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 rounded" />
                    <span className="text-gray-700">$100 - $300</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 rounded" />
                    <span className="text-gray-700">$300 - $500</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 rounded" />
                    <span className="text-gray-700">$500+</span>
                  </label>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Rating</h3>
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <label key={rating} className="flex items-center">
                      <input type="checkbox" className="mr-2 rounded" />
                      <div className="flex items-center">
                        {renderStars(rating)}
                        <span className="ml-2 text-gray-700">& up</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:w-3/4">
            <div className="flex items-center justify-between mb-8">
              <p className="text-gray-600">
                Showing {products.length} products
              </p>
              <select className="bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500">
                <option>Most Popular</option>
                <option>Highest Rated</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div key={product.id} className="card overflow-hidden group">
                  <div className="relative h-64">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-green-600 text-white text-sm font-medium px-2 py-1 rounded">
                        {product.category}
                      </span>
                    </div>
                    <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <svg className="w-5 h-5 text-gray-600 hover:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        {renderStars(product.rating)}
                        <span className="ml-2 text-sm font-medium text-gray-900">{product.rating}</span>
                      </div>
                      <span className="ml-2 text-sm text-gray-500">({product.reviewCount} reviews)</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                      <Link href={`/products/${product.id}`} className="hover:text-primary-600 transition-colors">
                        {product.name}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-primary-600">
                        ${product.price}
                      </div>
                      <Link 
                        href={`/products/${product.id}`}
                        className="btn-primary text-sm"
                      >
                        View Details
                      </Link>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex flex-wrap gap-1">
                        {product.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                        {product.tags.length > 3 && (
                          <span className="text-xs text-gray-500">
                            +{product.tags.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="btn-primary">
                Load More Products
              </button>
            </div>
          </main>
        </div>

        {/* Featured Section */}
        <section className="mt-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 text-white text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Request a product review and we'll research it for you. Get expert insights on any product you're considering.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="text"
              placeholder="Enter product name"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-400"
            />
            <button className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Request Review
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}