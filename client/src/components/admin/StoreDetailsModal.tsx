import type { Store } from '../../types/admin';
import { StatusBadge } from './StatusBadge';
import {
  X,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Globe,
  Package,
  DollarSign,
  User,
  Building2,
  FileText,
  CheckCircle,
  XCircle
} from 'lucide-react';

interface StoreDetailsModalProps {
  store: Store;
  onClose: () => void;
  onApprove: (storeId: string) => void;
  onReject: (storeId: string) => void;
}

export function StoreDetailsModal({ store, onClose, onApprove, onReject }: StoreDetailsModalProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-slate-200 px-8 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center">
              <span className="text-2xl font-bold text-slate-700">
                {store.name.charAt(0)}
              </span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">{store.name}</h2>
              <div className="mt-1">
                <StatusBadge status={store.status} />
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X size={24} className="text-slate-600" />
          </button>
        </div>

        <div className="px-8 py-6 space-y-6">
          <section>
            <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
              <Building2 size={20} className="mr-2 text-slate-600" />
              Store Information
            </h3>
            <div className="bg-slate-50 rounded-xl p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-slate-600 mb-1">Store Name</p>
                  <p className="text-base font-semibold text-slate-900">{store.name}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600 mb-1">Category</p>
                  <p className="text-base font-semibold text-slate-900">{store.category}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600 mb-1">Registration Date</p>
                  <div className="flex items-center text-base font-semibold text-slate-900">
                    <Calendar size={16} className="mr-2 text-slate-400" />
                    {formatDate(store.registrationDate)}
                  </div>
                </div>
                {store.website && (
                  <div>
                    <p className="text-sm text-slate-600 mb-1">Website</p>
                    <div className="flex items-center text-base font-semibold text-blue-600">
                      <Globe size={16} className="mr-2 text-blue-400" />
                      {store.website}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
              <User size={20} className="mr-2 text-slate-600" />
              Owner Information
            </h3>
            <div className="bg-slate-50 rounded-xl p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-slate-600 mb-1">Full Name</p>
                  <p className="text-base font-semibold text-slate-900">{store.ownerName}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600 mb-1">Email</p>
                  <div className="flex items-center text-base font-semibold text-slate-900">
                    <Mail size={16} className="mr-2 text-slate-400" />
                    {store.email}
                  </div>
                </div>
                <div className="md:col-span-2">
                  <p className="text-sm text-slate-600 mb-1">Phone</p>
                  <div className="flex items-center text-base font-semibold text-slate-900">
                    <Phone size={16} className="mr-2 text-slate-400" />
                    {store.phone}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
              <MapPin size={20} className="mr-2 text-slate-600" />
              Location
            </h3>
            <div className="bg-slate-50 rounded-xl p-6">
              <p className="text-base font-semibold text-slate-900 mb-2">{store.address}</p>
              <p className="text-base text-slate-700">
                {store.city}, {store.state} {store.zipCode}
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
              <FileText size={20} className="mr-2 text-slate-600" />
              Description
            </h3>
            <div className="bg-slate-50 rounded-xl p-6">
              <p className="text-base text-slate-700 leading-relaxed">{store.description}</p>
            </div>
          </section>

          {store.status === 'approved' && (
            <section>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Performance Metrics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                  <div className="flex items-center text-green-700 mb-2">
                    <DollarSign size={20} className="mr-2" />
                    <span className="text-sm font-medium">Total Revenue</span>
                  </div>
                  <p className="text-3xl font-bold text-green-900">
                    {formatCurrency(store.revenue || 0)}
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                  <div className="flex items-center text-blue-700 mb-2">
                    <Package size={20} className="mr-2" />
                    <span className="text-sm font-medium">Products Listed</span>
                  </div>
                  <p className="text-3xl font-bold text-blue-900">
                    {store.productsCount || 0}
                  </p>
                </div>
              </div>
            </section>
          )}

          {store.status === 'pending' && (
            <section className="pt-4 border-t border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Application Review</h3>
              <div className="flex space-x-4">
                <button
                  onClick={() => onApprove(store.id)}
                  className="flex-1 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition-colors font-semibold flex items-center justify-center space-x-2"
                >
                  <CheckCircle size={20} />
                  <span>Approve Store</span>
                </button>
                <button
                  onClick={() => onReject(store.id)}
                  className="flex-1 bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700 transition-colors font-semibold flex items-center justify-center space-x-2"
                >
                  <XCircle size={20} />
                  <span>Reject Application</span>
                </button>
              </div>
            </section>
          )}

          {store.status === 'rejected' && (
            <section className="pt-4 border-t border-slate-200">
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <p className="text-red-800 font-medium">
                  This application has been rejected.
                </p>
              </div>
            </section>
          )}

          {store.status === 'approved' && (
            <section className="pt-4 border-t border-slate-200">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="text-green-800 font-medium">
                  This store has been approved and is actively selling on the platform.
                </p>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
