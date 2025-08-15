import Link from 'next/link';
import Image from 'next/image';
import { articles, categories } from '@/data/articles';

export default function ArticlesPage() {
  return (
    <div className="py-12 bg-gradient-to-br from-primary-50/30 via-white to-accent-50/20 min-h-screen">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Latest Articles
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover insights, trends, and expert advice across various topics
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-1/4">
            <div className="card p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Categories</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="/articles" className="flex items-center justify-between text-primary-600 hover:text-primary-700 font-medium">
                    All Articles
                    <span className="bg-primary-100 text-primary-600 text-sm px-2 py-1 rounded">
                      {articles.length}
                    </span>
                  </Link>
                </li>
                {categories.map((category) => {
                  const categoryArticles = articles.filter(article => article.category === category.name);
                  return (
                    <li key={category.id}>
                      <Link 
                        href={`/articles/category/${category.slug}`}
                        className="flex items-center justify-between text-gray-700 hover:text-primary-600 transition-colors"
                      >
                        {category.name}
                        <span className="bg-gray-100 text-gray-600 text-sm px-2 py-1 rounded">
                          {categoryArticles.length}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {['AI', 'Technology', 'Business', 'Sustainability', 'Health', 'Travel'].map((tag) => (
                    <Link
                      key={tag}
                      href={`/articles/tag/${tag.toLowerCase()}`}
                      className="bg-gray-100 hover:bg-primary-100 text-gray-700 hover:text-primary-700 px-3 py-1 rounded-full text-sm transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {articles.map((article, index) => (
                <article key={article.id} className={`card overflow-hidden ${index === 0 ? 'md:col-span-2' : ''}`}>
                  <div className={`relative ${index === 0 ? 'h-64' : 'h-48'}`}>
                    <Image
                      src={article.imageUrl}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                    {article.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Link
                        href={`/articles/category/${categories.find(c => c.name === article.category)?.slug}`}
                        className="text-sm font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded hover:bg-primary-100 transition-colors"
                      >
                        {article.category}
                      </Link>
                      <span className="text-sm text-gray-500">{article.readTime} min read</span>
                    </div>
                    
                    <h2 className={`font-bold text-gray-900 mb-3 ${index === 0 ? 'text-2xl' : 'text-lg'} line-clamp-2`}>
                      <Link href={`/articles/${article.id}`} className="hover:text-primary-600 transition-colors">
                        {article.title}
                      </Link>
                    </h2>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm text-gray-500">
                          By <span className="font-medium text-gray-700">{article.author}</span> • {new Date(article.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </div>
                      </div>
                      <Link 
                        href={`/articles/${article.id}`}
                        className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                      >
                        Read more →
                      </Link>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex flex-wrap gap-2">
                        {article.tags.slice(0, 3).map((tag) => (
                          <Link
                            key={tag}
                            href={`/articles/tag/${tag.toLowerCase().replace(' ', '-')}`}
                            className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-600 px-2 py-1 rounded transition-colors"
                          >
                            {tag}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="btn-primary">
                Load More Articles
              </button>
            </div>
          </main>
        </div>

        {/* Newsletter Section */}
        <section className="mt-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 text-center text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Get the latest articles and insights delivered straight to your inbox. No spam, just quality content.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-400"
            />
            <button className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Subscribe
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}