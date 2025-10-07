import { FaGamepad, FaTshirt, FaLaptop, FaHeartbeat } from "react-icons/fa";

const categories = [
  { name: "Toys & Hobby", icon: <FaTshirt /> },
  { name: "Gaming", icon: <FaGamepad /> },
  { name: "Computer", icon: <FaLaptop /> },
  { name: "Health", icon: <FaHeartbeat /> },
];

const PopularCategories = () => {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-bold mb-4">🏆 Popular Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="flex flex-col items-center bg-white rounded-xl py-5 shadow-sm hover:shadow-md cursor-pointer"
          >
            <div className="text-2xl text-blue-600 mb-2">{cat.icon}</div>
            <p className="text-sm font-medium">{cat.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCategories;
