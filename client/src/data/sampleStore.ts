// data/sampleStores.ts
import type { IStore } from "../types";

export const stores: IStore[] = [
  {
    id: 1,
    name: "TechWorld Electronics",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/LEGO_logo.svg",
    banner: "https://images.unsplash.com/photo-1607083203179-fa93ecbfed56?w=1200&q=80",
    description:
      "TechWorld Electronics is your trusted partner for quality gadgets and electronics. We offer the latest phones, accessories, and smart devices at unbeatable prices.",
    location: "Accra, Ghana",
    phone: "+233 55 123 4567",
    rating: 4.8,
    products: [
      {
        id: 1,
        name: "Wireless Headphones",
        price: 320,
        image: "https://images.unsplash.com/photo-1585386959984-a41552231693?w=800&q=80",
        rating: 4.6,
        sold: 540,
      },
      {
        id: 2,
        name: "Smart Watch Series 7",
        price: 280,
        image: "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?w=800&q=80",
        rating: 4.4,
        sold: 230,
      },
      {
        id: 3,
        name: "Bluetooth Speaker Mini",
        price: 150,
        image: "https://images.unsplash.com/photo-1616628188460-0a7c59b9b2e3?w=800&q=80",
        rating: 4.5,
        sold: 410,
      },
    ],
  },
];
