import React from "react";
import { FaStar } from "react-icons/fa";
import type { IProduct } from "../types";

const ProductCard: React.FC<{ product: IProduct }> = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden cursor-pointer">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-3">
        <p className="text-sm font-semibold line-clamp-2">{product.name}</p>
        <p className="text-blue-600 font-bold mt-1">₵{product.price}</p>
        <div className="flex items-center text-xs text-gray-500 mt-1">
          <FaStar className="text-yellow-400 mr-1" /> {product.rating} | {product.sold}+ sold
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
