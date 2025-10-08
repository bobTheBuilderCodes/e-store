export interface IProduct {
    id: number;
    name: string;
    price: number;
    image: string;
    rating: number;
    sold: number;
  }

  export interface IListing {
    _id: string;
    title: string;
    description: string;
    price: number;
    category: string;
    location: string;
    images: string[];
    seller: string;
    isFeatured?: boolean;
    createdAt: string;
  }

  export interface IStore {
    id: number;
    name: string;
    logo: string;
    banner: string;
    description: string;
    location: string;
    phone: string;
    rating: number;
    products: IProduct[];
  }
  

  export interface Product {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    rating: number;
    reviewCount: number;
    description: string;
    features: string[];
    images: string[];
    inStock: boolean;
    category: string;
    colors?: Color[];
    sizes?: Size[];
  }
  
  export interface Color {
    name: string;
    value: string;
  }
  
  export interface Size {
    name: string;
    available: boolean;
  }
  
  export interface Review {
    id: string;
    author: string;
    rating: number;
    date: string;
    comment: string;
    verified: boolean;
  }
  

  export interface Store {
    id: string;
    name: string;
    description: string;
    logo: string;
    coverImage: string;
    rating: number;
    reviewCount: number;
    verified: boolean;
    yearEstablished: number;
    categories: string[];
    contact: {
      email: string;
      phone: string;
      website?: string;
    };
    location: {
      address: string;
      city: string;
      state: string;
      zipCode: string;
      country: string;
      coordinates?: {
        lat: number;
        lng: number;
      };
    };
    hours: {
      monday: string;
      tuesday: string;
      wednesday: string;
      thursday: string;
      friday: string;
      saturday: string;
      sunday: string;
    };
    socialMedia?: {
      instagram?: string;
      facebook?: string;
      twitter?: string;
    };
    stats: {
      totalProducts: number;
      totalSales: number;
    };
  }
  
  export interface StoreProduct {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    rating: number;
    reviewCount: number;
    inStock: boolean;
  }
  
  export interface StoreReview {
    id: string;
    author: string;
    rating: number;
    date: string;
    comment: string;
    verified: boolean;
  }
  