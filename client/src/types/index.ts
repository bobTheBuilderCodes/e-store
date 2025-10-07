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
  