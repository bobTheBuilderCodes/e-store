import type { Store } from '../../types/admin';
import { StatusBadge } from './StatusBadge';
import { MapPin, Mail, Phone, Calendar, Globe, Package, DollarSign } from 'lucide-react';

interface StoreCardProps {
  store: Store;
  onViewDetails: (store: Store) => void;
}

export function StoreCard({ store, onViewDetails }: StoreCardProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-lg transition-all hover:border-slate-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start space-x-4 flex-1">
          <div className="w-14 h-14 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center flex-shrink-0">
            <span className="text-xl font-bold text-slate-700">
              {store.name.charAt(0)}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-slate-900 mb-1 truncate">
              {store.name}
            </h3>
            <p className="text-sm text-slate-600 mb-2">{store.ownerName}</p>
            <StatusBadge status={store.status} />
          </div>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center text-sm text-slate-600">
          <Mail size={16} className="mr-2 text-slate-400" />
          <span className="truncate">{store.email}</span>
        </div>
        <div className="flex items-center text-sm text-slate-600">
          <Phone size={16} className="mr-2 text-slate-400" />
          <span>{store.phone}</span>
        </div>
        <div className="flex items-center text-sm text-slate-600">
          <MapPin size={16} className="mr-2 text-slate-400" />
          <span className="truncate">{store.city}, {store.state}</span>
        </div>
        <div className="flex items-center text-sm text-slate-600">
          <Calendar size={16} className="mr-2 text-slate-400" />
          <span>Applied {formatDate(store.registrationDate)}</span>
        </div>
        {store.website && (
          <div className="flex items-center text-sm text-slate-600">
            <Globe size={16} className="mr-2 text-slate-400" />
            <span className="truncate text-blue-600">{store.website}</span>
          </div>
        )}
      </div>

      <div className="pt-4 border-t border-slate-100">
        <div className="flex items-center justify-between text-sm mb-3">
          <span className="text-slate-600 font-medium">Category</span>
          <span className="text-slate-900 font-semibold">{store.category}</span>
        </div>

        {store.status === 'approved' && (
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-slate-50 rounded-lg p-3">
              <div className="flex items-center text-slate-600 mb-1">
                <DollarSign size={14} className="mr-1" />
                <span className="text-xs font-medium">Revenue</span>
              </div>
              <p className="text-base font-bold text-slate-900">
                {formatCurrency(store.revenue || 0)}
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-3">
              <div className="flex items-center text-slate-600 mb-1">
                <Package size={14} className="mr-1" />
                <span className="text-xs font-medium">Products</span>
              </div>
              <p className="text-base font-bold text-slate-900">
                {store.productsCount || 0}
              </p>
            </div>
          </div>
        )}

        <button
          onClick={() => onViewDetails(store)}
          className="w-full bg-slate-900 text-white px-4 py-2.5 rounded-lg hover:bg-slate-800 transition-colors font-medium text-sm"
        >
          View Details
        </button>
      </div>
    </div>
  );
}
