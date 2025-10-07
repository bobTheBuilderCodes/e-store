import React from "react";

const promos = [
  {
    id: 1,
    image:
"https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",    title: "Tech Deals",
  },
  {
    id: 2,
    image:
"https://plus.unsplash.com/premium_photo-1670152411569-7cbc00946857?q=80&w=2215&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",    title: "Fashion Sale",
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", // Colorful shoes
    title: "Limited Edition",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80", // Bright watch on table
    title: "New Arrivals",
  },
];

const Promotions: React.FC = () => {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-bold mb-4">🎉 Today's Promotions</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {promos.map((promo) => (
          <div
            key={promo.id}
            className="relative overflow-hidden rounded-xl shadow-sm hover:shadow-md transition"
          >
            <img
              src={promo.image}
              alt={promo.title}
              className="w-full h-40 object-cover"
            />
            {/* Gradient overlay with text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
              <h3 className="text-white text-sm md:text-base font-semibold drop-shadow-md">
                {promo.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Promotions;
