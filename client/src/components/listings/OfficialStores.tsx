import React from "react";

const stores = [
  {
    id: 1,
    name: "Apple Store",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    id: 2,
    name: "Samsung",
    logo: "https://1000logos.net/wp-content/uploads/2017/06/Samsung-Logo-500x281.png",
  },
  {
    id: 3,
    name: "Nike",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
  },
  {
    id: 4,
    name: "Adidas",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
  },
  {
    id: 5,
    name: "Sony",
    logo: "https://1000logos.net/wp-content/uploads/2017/08/Sony-Logo-500x281.png",
  },
  {
    id: 6,
    name: "Canon",
    logo: "https://1000logos.net/wp-content/uploads/2017/06/Canon-logo-500x281.png",
  },
  {
    id: 7,
    name: "Dell",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg",
  },
  {
    id: 8,
    name: "Puma",
    logo: "https://1000logos.net/wp-content/uploads/2017/05/Puma-logo-500x281.png",
  },
];

const OfficialStores: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-lg font-bold mb-4">🏬 Official Stores</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
        {stores.map((store) => (
          <div
            key={store.id}
            className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition"
          >
            <div className="w-16 h-16 flex items-center justify-center">
              <img
                src={store.logo}
                alt={store.name}
                className="w-12 h-12 object-contain"
              />
            </div>
            <p className="mt-2 text-sm font-medium text-gray-700">
              {store.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OfficialStores;
