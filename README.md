# EchoPost - English Blog & Product Review Website

A comprehensive English blog and product review website built with Next.js 14, featuring modern design, responsive layout, and rich content presentation.

## Features

### 🏠 Homepage
- Hero section with call-to-action
- Featured articles showcase
- Featured products section
- Newsletter subscription

### 📖 Articles Section
- Article listing page with categories
- Detailed article pages with rich content
- Category-based filtering
- Tag-based navigation
- Reading time estimation
- Author information
- Related articles

### 🛍️ Products Section
- Product listing page with filtering
- Detailed product review pages
- Product specifications
- Customer reviews and ratings
- Related products
- Category-based organization
- Price comparison and ratings

### 📱 Responsive Design
- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly navigation
- Adaptive layouts

### 🎨 Modern UI/UX
- Clean, professional design
- Intuitive navigation
- Smooth animations and transitions
- Card-based layouts
- Consistent color scheme

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Image Optimization**: Next.js Image component
- **Font**: Inter (Google Fonts)
- **Icons**: Heroicons (SVG)

## Project Structure

```
src/
├── app/                    # Next.js 14 App Router
│   ├── articles/          # Articles section
│   │   ├── [id]/         # Dynamic article pages
│   │   └── page.tsx      # Articles listing
│   ├── products/          # Products section
│   │   ├── [id]/         # Dynamic product pages
│   │   └── page.tsx      # Products listing
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   ├── not-found.tsx     # 404 page
│   └── page.tsx          # Homepage
├── components/            # Reusable components
│   ├── Navigation.tsx    # Main navigation
│   └── Footer.tsx        # Site footer
├── data/                 # Static data files
│   ├── articles.ts       # Articles data
│   └── products.ts       # Products data
└── types/                # TypeScript type definitions
    └── index.ts          # Global types
```

## Content Features

### Articles
- **Technology**: AI, web development, software trends
- **Lifestyle**: Sustainable living, wellness, productivity
- **Business**: Digital marketing, entrepreneurship
- **Health**: Fitness, nutrition, mental health
- **Travel**: Guides, tips, experiences

### Products
- **Electronics**: Headphones, cameras, gadgets
- **Home & Office**: Furniture, appliances
- **Health & Fitness**: Wearables, equipment
- **Home & Kitchen**: Appliances, tools
- **Fashion**: Clothing, accessories
- **Sports**: Equipment, gear

## Key Components

### Article Features
- Rich text content with HTML formatting
- Image integration with captions
- Blockquotes and highlights
- Table of contents
- Author bio sections
- Related articles
- Social sharing buttons
- Newsletter signup

### Product Features
- Image galleries
- Specifications tables
- Feature lists
- Customer reviews
- Rating systems
- Price comparison
- Related products
- Add to cart/wishlist

### Navigation & UX
- Sticky header navigation
- Mobile hamburger menu
- Breadcrumb navigation
- Category filters
- Search functionality
- Pagination
- Loading states

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd EchoPost
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Adding New Articles
Edit `src/data/articles.ts` to add new articles with the following structure:
- Title, excerpt, and full content
- Author information
- Category and tags
- Featured image and gallery
- Publication date and reading time

### Adding New Products
Edit `src/data/products.ts` to add new products with:
- Product details and descriptions
- Pricing and ratings
- Feature lists and specifications
- Image galleries
- Category and tags

### Styling
- Modify `src/app/globals.css` for global styles
- Use Tailwind CSS classes for component styling
- Customize colors in `tailwind.config.ts`

## SEO Features

- Meta tags optimization
- Open Graph tags
- Structured data markup
- Image optimization
- Fast loading times
- Mobile-friendly design

## Performance

- Next.js Image optimization
- Code splitting and lazy loading
- Optimized bundle size
- Fast page transitions
- Caching strategies

## Future Enhancements

- [ ] Search functionality
- [ ] User comments system
- [ ] Social login
- [ ] Advanced filtering
- [ ] Email newsletter integration
- [ ] Content management system
- [ ] Multi-language support
- [ ] PWA features

## License

This project is for educational and demonstration purposes.

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.