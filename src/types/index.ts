export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  readTime: number;
  category: string;
  tags: string[];
  imageUrl: string;
  featured: boolean;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  reviewCount: number;
  category: string;
  tags: string[];
  imageUrl: string;
  gallery: string[];
  features: string[];
  specifications: Record<string, string>;
}

export interface Review {
  id: string;
  productId: string;
  author: string;
  rating: number;
  title: string;
  content: string;
  publishedAt: string;
  helpful: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  type: 'article' | 'product';
}