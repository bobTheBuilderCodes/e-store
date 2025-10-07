import React, { useEffect, useState } from "react";

interface FlashSaleItem {
  id: number;
  name: string;
  image: string;
  price: number;
  oldPrice: number;
}

const items: FlashSaleItem[] = [
  {
    id: 1,
    name: "Wireless Earbuds",
    image:
      "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=600&q=80",
    price: 85,
    oldPrice: 120,
  },
  {
    id: 2,
    name: "Smartphone Pro X",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
    price: 950,
    oldPrice: 1200,
  },
  {
    id: 3,
    name: "Fitness Smartwatch",
    image:
      "https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?auto=format&fit=crop&w=600&q=80",
    price: 210,
    oldPrice: 320,
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    image:
      "https://images.unsplash.com/photo-1616596874281-3b68987b4e09?auto=format&fit=crop&w=600&q=80",
    price: 150,
    oldPrice: 220,
  },
];

const FlashSale: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<number>(3600); // 1 hour in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <section className="my-12">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold flex items-center gap-2">
          ⚡ Flash Sale
        </h2>
        <div className="text-sm font-medium text-red-600 bg-red-50 px-3 py-1 rounded-lg">
          Ends in: {hours}h {minutes}m {seconds}s
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-3">
              <h3 className="text-sm font-semibold mb-1">{item.name}</h3>
              <div className="flex items-center gap-2">
                <span className="text-red-600 font-bold">
                  ${item.price.toFixed(2)}
                </span>
                <span className="text-gray-400 line-through text-xs">
                  ${item.oldPrice.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FlashSale;
