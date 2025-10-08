import { Star, ShoppingCart } from 'lucide-react';
import type { StoreProduct } from '../../types';

interface StoreProductsProps {
  products: StoreProduct[];
}

export function StoreProducts({ products }: StoreProductsProps) {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-slate-900">Products</h2>
        <button className="px-4 py-2 text-slate-700 hover:text-slate-900 font-medium transition-colors">
          View All →
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative aspect-square overflow-hidden bg-slate-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {!product.inStock && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <span className="bg-white px-4 py-2 rounded-lg font-semibold text-slate-900">
                    Out of Stock
                  </span>
                </div>
              )}
              {product.originalPrice && (
                <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Sale
                </div>
              )}
            </div>

            <div className="p-4">
              <h3 className="font-semibold text-slate-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                {product.name}
              </h3>

              <div className="flex items-center gap-1 mb-3">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="text-sm font-medium text-slate-900">{product.rating}</span>
                <span className="text-sm text-slate-500">({product.reviewCount})</span>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xl font-bold text-slate-900">${product.price}</p>
                  {product.originalPrice && (
                    <p className="text-sm text-slate-400 line-through">${product.originalPrice}</p>
                  )}
                </div>
                <button
                  disabled={!product.inStock}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    product.inStock
                      ? 'bg-slate-900 text-white hover:bg-slate-800 hover:scale-110'
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  <ShoppingCart className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
