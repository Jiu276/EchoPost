import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-primary-400 mb-4">EchoPost</h3>
            <p className="text-gray-400">
              Discover insightful articles and honest product reviews to make informed decisions.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Articles</h4>
            <ul className="space-y-2">
              <li><Link href="/articles/technology" className="text-gray-400 hover:text-white transition-colors">Technology</Link></li>
              <li><Link href="/articles/lifestyle" className="text-gray-400 hover:text-white transition-colors">Lifestyle</Link></li>
              <li><Link href="/articles/business" className="text-gray-400 hover:text-white transition-colors">Business</Link></li>
              <li><Link href="/articles/health" className="text-gray-400 hover:text-white transition-colors">Health</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li><Link href="/products/electronics" className="text-gray-400 hover:text-white transition-colors">Electronics</Link></li>
              <li><Link href="/products/home" className="text-gray-400 hover:text-white transition-colors">Home & Garden</Link></li>
              <li><Link href="/products/fashion" className="text-gray-400 hover:text-white transition-colors">Fashion</Link></li>
              <li><Link href="/products/sports" className="text-gray-400 hover:text-white transition-colors">Sports</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 EchoPost. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;