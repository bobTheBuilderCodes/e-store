import { Star, Check, Truck, Shield, RefreshCw } from 'lucide-react';
import { useState } from 'react';
import type { Product } from '../types';

interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]?.name || '');
  const [quantity, setQuantity] = useState(1);

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 text-sm text-slate-600 mb-2">
          <span className="font-medium">{product.category}</span>
          <span>•</span>
          <span className={product.inStock ? 'text-emerald-600 font-medium' : 'text-red-600'}>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>

        <h1 className="text-4xl font-bold text-slate-900 leading-tight mb-3">
          {product.name}
        </h1>

        <div className="flex items-center gap-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < Math.floor(product.rating)
                    ? 'fill-amber-400 text-amber-400'
                    : 'text-slate-300'
                }`}
              />
            ))}
          </div>
          <span className="text-lg font-semibold text-slate-900">{product.rating}</span>
          <span className="text-slate-500">({product.reviewCount.toLocaleString()} reviews)</span>
        </div>
      </div>

      <div className="flex items-baseline gap-3">
        <span className="text-5xl font-bold text-slate-900">${product.price}</span>
        {product.originalPrice && (
          <>
            <span className="text-2xl text-slate-400 line-through">${product.originalPrice}</span>
            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-semibold rounded-full">
              Save {discount}%
            </span>
          </>
        )}
      </div>

      <p className="text-lg text-slate-600 leading-relaxed">
        {product.description}
      </p>

      {product.colors && product.colors.length > 0 && (
        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-3">
            Color: <span className="font-normal text-slate-600">{selectedColor}</span>
          </label>
          <div className="flex gap-3">
            {product.colors.map((color) => (
              <button
                key={color.name}
                onClick={() => setSelectedColor(color.name)}
                className={`w-12 h-12 rounded-full transition-all duration-200 ${
                  selectedColor === color.name
                    ? 'ring-2 ring-slate-900 ring-offset-2 scale-110'
                    : 'ring-1 ring-slate-300 hover:scale-105'
                }`}
                style={{ backgroundColor: color.value }}
                title={color.name}
              />
            ))}
          </div>
        </div>
      )}

      <div>
        <label className="block text-sm font-semibold text-slate-900 mb-3">Quantity</label>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-12 h-12 rounded-lg border-2 border-slate-300 hover:border-slate-900 hover:bg-slate-50 transition-all duration-200 font-semibold text-lg"
          >
            −
          </button>
          <span className="w-16 text-center text-2xl font-semibold">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-12 h-12 rounded-lg border-2 border-slate-300 hover:border-slate-900 hover:bg-slate-50 transition-all duration-200 font-semibold text-lg"
          >
            +
          </button>
        </div>
      </div>

      <div className="flex gap-3">
        <button className="flex-1 bg-slate-900 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:bg-slate-800 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02]">
          Add to Cart
        </button>
        <button className="flex-1 bg-white text-slate-900 py-4 px-8 rounded-xl font-semibold text-lg border-2 border-slate-900 hover:bg-slate-50 transition-all duration-200 hover:scale-[1.02]">
          Buy Now
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
            <Truck className="w-5 h-5 text-slate-700" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">Free Shipping</p>
            <p className="text-xs text-slate-600">On orders over $50</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
            <Shield className="w-5 h-5 text-slate-700" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">2 Year Warranty</p>
            <p className="text-xs text-slate-600">Full coverage</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
            <RefreshCw className="w-5 h-5 text-slate-700" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">30-Day Returns</p>
            <p className="text-xs text-slate-600">Hassle-free</p>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 rounded-xl p-6">
        <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
          <Check className="w-5 h-5 text-emerald-600" />
          Key Features
        </h3>
        <ul className="space-y-3">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 text-slate-700">
              <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span className="leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
