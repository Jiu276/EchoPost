import { Product, Review } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Sony WH-1000XM5 Wireless Headphones',
    description: 'Industry-leading noise canceling with exceptional sound quality and 30-hour battery life. Perfect for travel, work, and everyday listening.',
    price: 399,
    rating: 4.8,
    reviewCount: 1247,
    category: 'Electronics',
    tags: ['Wireless', 'Noise Canceling', 'Premium', 'Travel'],
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=600&fit=crop'
    ],
    features: [
      'Industry-leading noise canceling',
      '30-hour battery life',
      'Quick charge: 3 minutes for 3 hours of playback',
      'Crystal clear hands-free calling',
      'Multipoint connection',
      'Touch sensor controls',
      'Speak-to-chat technology',
      'Premium comfort and sound'
    ],
    specifications: {
      'Driver Unit': '30mm',
      'Frequency Response': '4 Hz-40,000 Hz',
      'Battery Life': '30 hours (NC ON), 40 hours (NC OFF)',
      'Charging Time': '3.5 hours',
      'Weight': '250g',
      'Connectivity': 'Bluetooth 5.2, NFC, 3.5mm jack',
      'Microphone': 'Built-in',
      'Voice Assistant': 'Google Assistant, Alexa compatible'
    }
  },
  {
    id: '2',
    name: 'Ergonomic Office Chair Pro',
    description: 'Premium comfort and support for all-day productivity. Features adjustable lumbar support, breathable mesh back, and ergonomic design.',
    price: 299,
    rating: 4.6,
    reviewCount: 892,
    category: 'Home & Office',
    tags: ['Ergonomic', 'Office', 'Comfort', 'Adjustable'],
    imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1541558869434-2840d308329a?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop'
    ],
    features: [
      'Adjustable lumbar support',
      'Breathable mesh back',
      'Height-adjustable armrests',
      'Seat height adjustment',
      'Tilt lock mechanism',
      'Smooth-rolling casters',
      '360-degree swivel',
      'Weight capacity: 300 lbs'
    ],
    specifications: {
      'Dimensions': '26"W x 28"D x 42-46"H',
      'Seat Height': '18"-22" adjustable',
      'Weight Capacity': '300 lbs',
      'Materials': 'Mesh, steel frame, plastic',
      'Assembly': 'Required (30-45 minutes)',
      'Warranty': '5 years',
      'Color Options': 'Black, Gray, White',
      'Certification': 'GREENGUARD Gold certified'
    }
  },
  {
    id: '3',
    name: 'Smart Fitness Tracker X1',
    description: 'Advanced health monitoring with 14-day battery life. Track workouts, monitor heart rate, sleep patterns, and stress levels.',
    price: 199,
    rating: 4.7,
    reviewCount: 2103,
    category: 'Health & Fitness',
    tags: ['Fitness', 'Health', 'Smart Watch', 'Waterproof'],
    imageUrl: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=600&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1544117519-31a4b719223d?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop'
    ],
    features: [
      '14-day battery life',
      '24/7 heart rate monitoring',
      'Sleep and stress tracking',
      '90+ workout modes',
      'GPS tracking',
      '5ATM water resistance',
      'Smart notifications',
      'Health insights and coaching'
    ],
    specifications: {
      'Display': '1.62" AMOLED, 326 PPI',
      'Battery': '14 days typical use',
      'Water Resistance': '5ATM (50 meters)',
      'Sensors': 'Heart rate, SpO2, accelerometer, gyroscope, GPS',
      'Connectivity': 'Bluetooth 5.2, Wi-Fi',
      'Compatibility': 'iOS 10+, Android 6+',
      'Weight': '32g (without strap)',
      'Strap Material': 'Silicone, leather options available'
    }
  },
  {
    id: '4',
    name: 'Professional DSLR Camera Kit',
    description: 'Complete photography kit for enthusiasts and professionals. Includes 24MP camera body, versatile lens, and essential accessories.',
    price: 1299,
    rating: 4.9,
    reviewCount: 567,
    category: 'Electronics',
    tags: ['Photography', 'Professional', 'DSLR', 'Kit'],
    imageUrl: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1617005082133-8b98edd3952f?w=600&h=600&fit=crop'
    ],
    features: [
      '24.2MP APS-C CMOS sensor',
      '18-55mm versatile zoom lens',
      '4K video recording',
      'Built-in Wi-Fi and Bluetooth',
      'Vari-angle touchscreen LCD',
      'Eye detection autofocus',
      'Creative filters and effects',
      'Complete accessory kit included'
    ],
    specifications: {
      'Sensor': '24.2MP APS-C CMOS',
      'Lens Mount': 'EF-M mount',
      'ISO Range': '100-25600 (expandable)',
      'Video': '4K 24fps, 1080p 60fps',
      'Display': '3.0" vari-angle touchscreen',
      'Storage': 'SD/SDHC/SDXC cards',
      'Battery Life': '305 shots per charge',
      'Weight': '387g (body only)'
    }
  },
  {
    id: '5',
    name: 'Premium Coffee Maker Pro',
    description: 'Brew café-quality coffee at home with precise temperature control, programmable settings, and thermal carafe.',
    price: 249,
    rating: 4.5,
    reviewCount: 1834,
    category: 'Home & Kitchen',
    tags: ['Coffee', 'Kitchen', 'Premium', 'Programmable'],
    imageUrl: 'https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?w=600&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1442975631115-c4f7b05b8a2c?w=600&h=600&fit=crop'
    ],
    features: [
      'Precise temperature control (195°F-205°F)',
      '10-cup thermal carafe',
      'Programmable 24-hour timer',
      'Auto shut-off safety feature',
      'Permanent gold-tone filter',
      'Brew strength selector',
      'Water level indicator',
      'Easy-pour thermal carafe'
    ],
    specifications: {
      'Capacity': '10 cups (50 oz)',
      'Carafe': 'Double-wall thermal',
      'Water Reservoir': 'Removable',
      'Filter': 'Permanent gold-tone',
      'Power': '1400 watts',
      'Dimensions': '13.8" x 9.1" x 14.1"',
      'Weight': '8.5 lbs',
      'Warranty': '3 years limited'
    }
  },
  {
    id: '6',
    name: 'Wireless Gaming Keyboard & Mouse',
    description: 'High-performance wireless gaming combo with RGB backlighting, mechanical switches, and precision optical sensor.',
    price: 179,
    rating: 4.4,
    reviewCount: 756,
    category: 'Electronics',
    tags: ['Gaming', 'Wireless', 'RGB', 'Mechanical'],
    imageUrl: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=600&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1527814050087-3793815479db?w=600&h=600&fit=crop'
    ],
    features: [
      'Mechanical blue switches',
      'RGB backlighting with effects',
      '2.4GHz wireless connection',
      '12000 DPI optical sensor',
      'Programmable keys and macros',
      'Anti-ghosting technology',
      '40-hour battery life',
      'Gaming-grade build quality'
    ],
    specifications: {
      'Keyboard Type': 'Mechanical (Blue switches)',
      'Connection': '2.4GHz wireless + USB receiver',
      'Battery Life': '40 hours (backlight off)',
      'Mouse DPI': '800-12000 adjustable',
      'Polling Rate': '1000 Hz',
      'Key Layout': 'Full-size 104 keys',
      'Compatibility': 'Windows 10/11, macOS',
      'Dimensions': 'Keyboard: 17.3" x 5.1" x 1.4"'
    }
  }
];

export const reviews: Review[] = [
  {
    id: '1',
    productId: '1',
    author: 'Alex Thompson',
    rating: 5,
    title: 'Exceptional noise cancellation and sound quality',
    content: 'I\'ve been using these headphones for 6 months now, and they\'ve exceeded all my expectations. The noise cancellation is truly industry-leading - I can barely hear my surroundings even in noisy environments. The sound quality is crisp and balanced across all frequencies. Battery life easily lasts through long flights and work sessions. Highly recommended!',
    publishedAt: '2024-01-08',
    helpful: 156
  },
  {
    id: '2',
    productId: '1',
    author: 'Sarah Martinez',
    rating: 4,
    title: 'Great headphones, minor comfort issues',
    content: 'Sound quality and noise cancellation are fantastic. However, after wearing them for more than 3 hours, they can become a bit uncomfortable around the ears. Overall still a great purchase for the features you get.',
    publishedAt: '2024-01-05',
    helpful: 89
  },
  {
    id: '3',
    productId: '2',
    author: 'Michael Chen',
    rating: 5,
    title: 'Perfect for long work days',
    content: 'As someone who works from home 8+ hours a day, this chair has been a game-changer. The lumbar support is excellent, and the mesh back keeps me cool. Assembly was straightforward, and build quality feels solid. Worth every penny for the comfort it provides.',
    publishedAt: '2024-01-12',
    helpful: 134
  },
  {
    id: '4',
    productId: '2',
    author: 'Jennifer Wu',
    rating: 4,
    title: 'Good chair with minor assembly challenges',
    content: 'The chair itself is very comfortable and well-designed. My only complaint is that the assembly instructions could be clearer - took me longer than expected to put together. Once assembled, it\'s been great for daily use.',
    publishedAt: '2024-01-09',
    helpful: 67
  },
  {
    id: '5',
    productId: '3',
    author: 'David Kim',
    rating: 5,
    title: 'Impressive battery life and accuracy',
    content: 'The 14-day battery life is no exaggeration - I\'ve been getting consistently long usage between charges. The fitness tracking is very accurate compared to other devices I\'ve used. The sleep tracking insights have been particularly helpful for improving my sleep quality.',
    publishedAt: '2024-01-11',
    helpful: 201
  }
];

export const productCategories = [
  { id: '1', name: 'Electronics', slug: 'electronics', description: 'Latest gadgets and electronic devices', type: 'product' as const },
  { id: '2', name: 'Home & Office', slug: 'home', description: 'Furniture and office equipment', type: 'product' as const },
  { id: '3', name: 'Health & Fitness', slug: 'fitness', description: 'Fitness and wellness products', type: 'product' as const },
  { id: '4', name: 'Home & Kitchen', slug: 'kitchen', description: 'Kitchen appliances and home goods', type: 'product' as const },
  { id: '5', name: 'Fashion', slug: 'fashion', description: 'Clothing and fashion accessories', type: 'product' as const },
  { id: '6', name: 'Sports', slug: 'sports', description: 'Sports and outdoor equipment', type: 'product' as const },
];