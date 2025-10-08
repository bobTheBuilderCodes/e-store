import type { Store, StoreProduct, StoreReview } from "../types";

export const mockStore: Store = {
  id: 'store-1',
  name: 'Premium Audio Electronics',
  description: 'Your trusted destination for high-quality audio equipment and electronics. We specialize in premium headphones, speakers, and audio accessories from the world\'s leading brands. With over 15 years of experience, we pride ourselves on exceptional customer service and expert product knowledge.',
  logo: 'https://images.pexels.com/photos/6224/hands-people-woman-working.jpg',
  coverImage: 'https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg',
  rating: 4.9,
  reviewCount: 3247,
  verified: true,
  yearEstablished: 2009,
  categories: ['Audio Equipment', 'Headphones', 'Speakers', 'Accessories'],
  contact: {
    email: 'support@premiumaudio.com',
    phone: '+1 (555) 123-4567',
  },
  location: {
    address: '742 Evergreen Terrace',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94102',
    country: 'United States',
    coordinates: {
      lat: 37.7749,
      lng: -122.4194
    }
  },
  hours: {
    monday: '9:00 AM - 8:00 PM',
    tuesday: '9:00 AM - 8:00 PM',
    wednesday: '9:00 AM - 8:00 PM',
    thursday: '9:00 AM - 8:00 PM',
    friday: '9:00 AM - 9:00 PM',
    saturday: '10:00 AM - 9:00 PM',
    sunday: '11:00 AM - 6:00 PM'
  },
  socialMedia: {
    instagram: '@premiumaudio',
    facebook: 'PremiumAudioElectronics',
    twitter: '@premiumaudio'
  },
  stats: {
    totalProducts: 247,
    totalSales: 12847,
  }
};

export const mockStoreProducts: StoreProduct[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299.99,
    originalPrice: 399.99,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
    rating: 4.8,
    reviewCount: 2847,
    inStock: true
  },
  {
    id: '2',
    name: 'Studio Monitor Speakers',
    price: 599.99,
    image: 'https://images.pexels.com/photos/3394664/pexels-photo-3394664.jpeg',
    rating: 4.9,
    reviewCount: 1432,
    inStock: true
  },
  {
    id: '3',
    name: 'USB-C Audio Cable',
    price: 29.99,
    originalPrice: 39.99,
    image: 'https://images.pexels.com/photos/4226881/pexels-photo-4226881.jpeg',
    rating: 4.7,
    reviewCount: 892,
    inStock: true
  },
  {
    id: '4',
    name: 'Portable Bluetooth Speaker',
    price: 149.99,
    image: 'https://images.pexels.com/photos/8000589/pexels-photo-8000589.jpeg',
    rating: 4.6,
    reviewCount: 2134,
    inStock: true
  },
  {
    id: '5',
    name: 'Noise Cancelling Earbuds',
    price: 199.99,
    originalPrice: 249.99,
    image: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg',
    rating: 4.8,
    reviewCount: 3456,
    inStock: false
  },
  {
    id: '6',
    name: 'Professional DJ Headphones',
    price: 449.99,
    image: 'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg',
    rating: 4.9,
    reviewCount: 1876,
    inStock: true
  },
  {
    id: '7',
    name: 'Desktop Amplifier',
    price: 799.99,
    image: 'https://images.pexels.com/photos/6045244/pexels-photo-6045244.jpeg',
    rating: 4.7,
    reviewCount: 543,
    inStock: true
  },
  {
    id: '8',
    name: 'Wireless Gaming Headset',
    price: 179.99,
    originalPrice: 229.99,
    image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg',
    rating: 4.5,
    reviewCount: 2987,
    inStock: true
  }
];

export const mockStoreReviews: StoreReview[] = [
  {
    id: '1',
    author: 'David Martinez',
    rating: 5,
    date: '2025-09-20',
    comment: 'Outstanding store! The customer service is exceptional and the product quality is top-notch. I\'ve been a loyal customer for 3 years and they never disappoint.',
    verified: true
  },
  {
    id: '2',
    author: 'Rachel Kim',
    rating: 5,
    date: '2025-09-15',
    comment: 'Fast shipping and excellent communication. The team really knows their products and helped me choose the perfect headphones for my needs.',
    verified: true
  },
  {
    id: '3',
    author: 'Marcus Johnson',
    rating: 4,
    date: '2025-09-10',
    comment: 'Great selection of audio equipment. Prices are competitive and the quality is fantastic. Only wish they had more sales throughout the year.',
    verified: true
  },
  {
    id: '4',
    author: 'Sophie Anderson',
    rating: 5,
    date: '2025-09-05',
    comment: 'This store is my go-to for all audio needs. Professional, reliable, and they stand behind their products. Highly recommend!',
    verified: true
  }
];
