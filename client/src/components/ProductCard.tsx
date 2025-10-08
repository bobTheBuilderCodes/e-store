import React from "react";
import type { IProduct } from "../types";
import RatingStars from "./RatingStars";
import { useNavigate } from "react-router-dom";


const ProductCard: React.FC<{ product: IProduct }> = ({ product }) => {

  const navigate = useNavigate()

  return (
    <div onClick={()=>navigate(`product/${product.id}`)}
    className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 cursor-pointer"
  >
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-48 object-cover rounded-lg mb-3"
    />
    <h3 className="text-lg font-semibold text-gray-800  line-clamp-2 mb-1">
      {product.name}
    </h3>
    <RatingStars rating={product.rating} />
    <p className="text-blue-600 font-bold mt-2">
      ${product.price}
    </p>
    <p className="text-sm text-gray-500 ">
      {product.sold} sold
    </p>
  </div>
  )
}

export default ProductCard