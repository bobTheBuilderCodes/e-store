import { Package, ShoppingBag } from 'lucide-react';
import type { Store } from '../../types';

interface StoreStatsProps {
  stats: Store['stats'];
}

export function StoreStats({ stats }: StoreStatsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <Package className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-slate-900">
              {stats.totalProducts.toLocaleString()}
            </p>
            <p className="text-sm text-slate-600">Products</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
            <ShoppingBag className="w-5 h-5 text-emerald-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-slate-900">
              {stats.totalSales.toLocaleString()}+
            </p>
            <p className="text-sm text-slate-600">Sales</p>
          </div>
        </div>
      </div>

      

      
    </div>
  );
}
