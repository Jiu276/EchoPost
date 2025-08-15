import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const featuredArticles = [
    {
      id: '1',
      title: 'The Future of Artificial Intelligence in Web Development',
      excerpt: 'Explore how AI is transforming the way we build and design websites, from automated coding to intelligent user experiences.',
      author: 'Sarah Johnson',
      publishedAt: '2024-01-15',
      category: 'Technology',
      imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
      readTime: 8
    },
    {
      id: '2',
      title: 'Sustainable Living: Simple Changes for a Better Tomorrow',
      excerpt: 'Discover practical ways to reduce your environmental impact and create a more sustainable lifestyle without breaking the bank.',
      author: 'Michael Chen',
      publishedAt: '2024-01-12',
      category: 'Lifestyle',
      imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=400&fit=crop',
      readTime: 6
    },
    {
      id: '3',
      title: 'Digital Marketing Strategies for Small Businesses',
      excerpt: 'Learn effective digital marketing techniques that can help small businesses compete with larger companies in the online space.',
      author: 'Emily Rodriguez',
      publishedAt: '2024-01-10',
      category: 'Business',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
      readTime: 10
    }
  ];

  const featuredProducts = [
    {
      id: '1',
      name: 'Sony WH-1000XM5 Wireless Headphones',
      description: 'Industry-leading noise canceling with exceptional sound quality',
      price: 399,
      rating: 4.8,
      reviewCount: 1247,
      category: 'Electronics',
      imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop'
    },
    {
      id: '2',
      name: 'Ergonomic Office Chair Pro',
      description: 'Premium comfort and support for all-day productivity',
      price: 299,
      rating: 4.6,
      reviewCount: 892,
      category: 'Home & Office',
      imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop'
    },
    {
      id: '3',
      name: 'Smart Fitness Tracker X1',
      description: 'Advanced health monitoring with 14-day battery life',
      price: 199,
      rating: 4.7,
      reviewCount: 2103,
      category: 'Health & Fitness',
      imageUrl: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=400&fit=crop'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative hero-gradient text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl floating-animation" style={{'animationDelay': '2s'}}></div>
        
        <div className="relative container-custom section-padding">
          <div className="max-w-5xl mx-auto text-center fade-in">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              Discover.{' '}
              <span className="bg-gradient-to-r from-accent-300 to-accent-500 bg-clip-text text-transparent">
                Review.
              </span>{' '}
              Decide.
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl mb-12 text-white/90 leading-relaxed max-w-4xl mx-auto">
              Your trusted source for insightful articles and honest product reviews that help you make informed decisions
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/articles" className="btn-primary bg-white/20 glass-effect text-white hover:bg-white/30 border-0 text-lg px-8 py-4">
                <span className="flex items-center">
                  📚 Explore Articles
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
              <Link href="/products" className="btn-secondary bg-white/10 glass-effect text-white border-white/30 hover:bg-white/20 text-lg px-8 py-4">
                <span className="flex items-center">
                  🛍️ Browse Products
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16 pt-16 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
                <div className="text-white/80 text-sm md:text-base">Articles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">200+</div>
                <div className="text-white/80 text-sm md:text-base">Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">50K+</div>
                <div className="text-white/80 text-sm md:text-base">Readers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50/30 via-white to-accent-50/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold">
                ✨ Latest Content
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-6">
              Featured Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stay informed with our latest insights and expert analysis on trending topics across technology, lifestyle, and business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {featuredArticles.map((article, index) => (
              <article key={article.id} className={`card card-hover overflow-hidden group ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
                <div className={`relative overflow-hidden ${index === 0 ? 'h-64 md:h-80' : 'h-56'}`}>
                  <Image
                    src={article.imageUrl}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-primary-500 to-accent-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                      {article.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                      {article.readTime} min read
                    </span>
                  </div>
                </div>
                <div className={`p-6 ${index === 0 ? 'md:p-8' : ''}`}>
                  <h3 className={`font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors duration-200 ${index === 0 ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
                    <Link href={`/articles/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className={`text-gray-600 mb-6 line-clamp-3 leading-relaxed ${index === 0 ? 'text-lg' : ''}`}>
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-primary-400 to-accent-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">
                          {article.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">{article.author}</div>
                        <div className="text-gray-500 text-xs">
                          {new Date(article.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </div>
                      </div>
                    </div>
                    <Link 
                      href={`/articles/${article.id}`}
                      className="text-primary-600 hover:text-primary-700 font-semibold text-sm flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    >
                      Read More
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/articles" className="btn-primary text-lg px-10 py-4">
              <span className="flex items-center">
                View All Articles
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="section-padding bg-gradient-to-br from-accent-50/30 via-white to-primary-50/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold">
                🛍️ Top Picks
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-6">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Honest reviews and detailed analysis to help you make informed purchasing decisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className="card card-hover overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-primary-500 to-accent-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                      {product.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex items-center bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                    <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-semibold text-gray-800">{product.rating}</span>
                    <span className="text-xs text-gray-600 ml-1">({product.reviewCount})</span>
                  </div>
                  
                  {/* Favorite button */}
                  <button className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-white hover:scale-110">
                    <svg className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors duration-200">
                    <Link href={`/products/${product.id}`}>
                      {product.name}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                        ${product.price}
                      </div>
                      <div className="text-sm text-gray-500 mt-1">Free shipping</div>
                    </div>
                    <Link 
                      href={`/products/${product.id}`} 
                      className="bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/products" className="btn-primary text-lg px-10 py-4">
              <span className="flex items-center">
                View All Products
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative section-padding hero-gradient text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-secondary-400/20 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl floating-animation" style={{'animationDelay': '3s'}}></div>
        
        <div className="relative container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="bg-white/20 glass-effect text-white px-4 py-2 rounded-full text-sm font-semibold">
                📧 Stay Connected
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Never Miss an{' '}
              <span className="bg-gradient-to-r from-accent-300 to-accent-500 bg-clip-text text-transparent">
                Update
              </span>
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-white/90 leading-relaxed max-w-3xl mx-auto">
              Subscribe to our newsletter and get the latest articles, product reviews, and exclusive insights delivered straight to your inbox
            </p>
            
            <div className="max-w-lg mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-4 bg-white/10 glass-effect p-2 rounded-2xl">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 bg-transparent text-white placeholder-white/70 border-0 focus:outline-none text-lg"
                />
                <button className="bg-gradient-to-r from-accent-400 to-accent-600 hover:from-accent-500 hover:to-accent-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200">
                  Subscribe Now
                </button>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Weekly digest</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>No spam, ever</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Unsubscribe anytime</span>
              </div>
            </div>
            
            <div className="mt-12 pt-12 border-t border-white/20">
              <p className="text-white/80 mb-6">Join 50,000+ readers who trust EchoPost</p>
              <div className="flex justify-center items-center space-x-4">
                <div className="flex -space-x-2">
                  {[1,2,3,4,5].map((i) => (
                    <div key={i} className="w-10 h-10 bg-gradient-to-r from-primary-400 to-accent-500 rounded-full border-2 border-white flex items-center justify-center">
                      <span className="text-white font-bold text-sm">U</span>
                    </div>
                  ))}
                </div>
                <span className="text-white/90">and thousands more...</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}