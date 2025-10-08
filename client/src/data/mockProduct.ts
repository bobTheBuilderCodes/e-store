import type { Product, Review } from "../types";

export const mockProduct: Product = {
  id: '1',
  name: 'Premium Wireless Headphones',
  price: 299.99,
  originalPrice: 399.99,
  rating: 4.8,
  reviewCount: 2847,
  description: 'Experience unparalleled audio quality with our Premium Wireless Headphones. Featuring advanced noise cancellation technology, 40-hour battery life, and premium comfort padding for all-day wear. Perfect for music enthusiasts, professionals, and travelers.',
  features: [
    'Active Noise Cancellation with Transparency Mode',
    '40-hour battery life with quick charge (5 min = 3 hours)',
    'Premium acoustic drivers for rich, balanced sound',
    'Adaptive EQ automatically tunes music to your ears',
    'Multi-device connectivity (connect to 2 devices simultaneously)',
    'Foldable design with premium carrying case included',
    'Touch controls for music, calls, and voice assistant',
    'Premium memory foam cushions with breathable fabric'
  ],
  images: [
    'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
    'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg',
    'https://images.pexels.com/photos/3587479/pexels-photo-3587479.jpeg',
    'https://images.pexels.com/photos/8000618/pexels-photo-8000618.jpeg'
  ],
  inStock: true,
  category: 'Audio',
  colors: [
    { name: 'Midnight Black', value: '#1a1a1a' },
    { name: 'Silver', value: '#c0c0c0' },
    { name: 'Navy Blue', value: '#001f3f' },
    { name: 'Rose Gold', value: '#b76e79' }
  ],
  sizes: []
};

export const mockReviews: Review[] = [
  {
    id: '1',
    author: 'Sarah Mitchell',
    rating: 5,
    date: '2025-09-15',
    comment: 'Absolutely phenomenal sound quality! The noise cancellation is incredible and the battery lasts for days. Worth every penny.',
    verified: true
  },
  {
    id: '2',
    author: 'James Chen',
    rating: 5,
    date: '2025-09-10',
    comment: 'Best headphones I\'ve ever owned. The comfort level is outstanding for long listening sessions, and the audio clarity is exceptional.',
    verified: true
  },
  {
    id: '3',
    author: 'Emily Rodriguez',
    rating: 4,
    date: '2025-09-05',
    comment: 'Great headphones overall. Sound is fantastic and the build quality feels premium. Only wish the carrying case was slightly smaller for travel.',
    verified: true
  },
  {
    id: '4',
    author: 'Michael Thompson',
    rating: 5,
    date: '2025-08-28',
    comment: 'These headphones transformed my daily commute. The noise cancellation blocks out everything and the sound is crystal clear.',
    verified: true
  }
];


