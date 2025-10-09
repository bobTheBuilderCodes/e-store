import { useState, useMemo } from 'react';

import { Store as StoreIcon, Clock, CheckCircle, XCircle, DollarSign, Package } from 'lucide-react';
import type { Store, StoreStats, StoreStatus } from '../../types/admin';
import { mockStores } from '../../data/mockStores';
import { StatsCard } from '../../components/admin/StatsCard';
import { StoreCard } from '../../components/admin/StoreCard';
import { StoreDetailsModal } from '../../components/admin/StoreDetailsModal';
import { FilterBar } from '../../components/admin/FilterBar';

function Dashboard() {
  const [stores, setStores] = useState<Store[]>(mockStores);
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<StoreStatus | 'all'>('all');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const stats = useMemo<StoreStats>(() => {
    const approved = stores.filter(s => s.status === 'approved');
    return {
      totalStores: stores.length,
      pendingApplications: stores.filter(s => s.status === 'pending').length,
      approvedStores: approved.length,
      rejectedStores: stores.filter(s => s.status === 'rejected').length,
      totalRevenue: approved.reduce((sum, s) => sum + (s.revenue || 0), 0),
      totalProducts: approved.reduce((sum, s) => sum + (s.productsCount || 0), 0)
    };
  }, [stores]);

  const categories = useMemo(() => {
    return Array.from(new Set(stores.map(s => s.category))).sort();
  }, [stores]);

  const filteredStores = useMemo(() => {
    return stores.filter(store => {
      const matchesSearch =
        store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        store.ownerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        store.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        store.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStatus = statusFilter === 'all' || store.status === statusFilter;
      const matchesCategory = categoryFilter === 'all' || store.category === categoryFilter;

      return matchesSearch && matchesStatus && matchesCategory;
    });
  }, [stores, searchQuery, statusFilter, categoryFilter]);

  const handleApprove = (storeId: string) => {
    setStores(stores.map(store =>
      store.id === storeId
        ? { ...store, status: 'approved' as StoreStatus }
        : store
    ));
    setSelectedStore(null);
  };

  const handleReject = (storeId: string) => {
    setStores(stores.map(store =>
      store.id === storeId
        ? { ...store, status: 'rejected' as StoreStatus }
        : store
    ));
    setSelectedStore(null);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center">
                <StoreIcon size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Store Admin Dashboard</h3>
                <p className="text-sm text-slate-600">Manage and review store applications</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <StatsCard
            title="Total Stores"
            value={stats.totalStores}
            icon={StoreIcon}
            color="slate"
            trend={{ value: 12, isPositive: true }}
          />
          <StatsCard
            title="Pending Applications"
            value={stats.pendingApplications}
            icon={Clock}
            color="orange"
          />
          <StatsCard
            title="Approved Stores"
            value={stats.approvedStores}
            icon={CheckCircle}
            color="green"
            trend={{ value: 8, isPositive: true }}
          />
          <StatsCard
            title="Rejected Applications"
            value={stats.rejectedStores}
            icon={XCircle}
            color="red"
          />
          <StatsCard
            title="Total Platform Revenue"
            value={formatCurrency(stats.totalRevenue)}
            icon={DollarSign}
            color="green"
            trend={{ value: 23, isPositive: true }}
          />
          <StatsCard
            title="Total Products"
            value={stats.totalProducts.toLocaleString()}
            icon={Package}
            color="blue"
            trend={{ value: 15, isPositive: true }}
          />
        </div>

        <FilterBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          statusFilter={statusFilter}
          onStatusFilterChange={setStatusFilter}
          categoryFilter={categoryFilter}
          onCategoryFilterChange={setCategoryFilter}
          categories={categories}
        />

        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">
            Store Applications
            <span className="ml-3 text-base font-normal text-slate-600">
              ({filteredStores.length} {filteredStores.length === 1 ? 'result' : 'results'})
            </span>
          </h2>
        </div>

        {filteredStores.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-12 text-center">
            <StoreIcon size={48} className="mx-auto text-slate-300 mb-4" />
            <h3 className="text-lg font-semibold text-slate-900 mb-2">No stores found</h3>
            <p className="text-slate-600">
              Try adjusting your filters or search query
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStores.map((store) => (
              <StoreCard
                key={store.id}
                store={store}
                onViewDetails={setSelectedStore}
              />
            ))}
          </div>
        )}
      </main>

      {selectedStore && (
        <StoreDetailsModal
          store={selectedStore}
          onClose={() => setSelectedStore(null)}
          onApprove={handleApprove}
          onReject={handleReject}
        />
      )}
    </div>
  );
}

export default Dashboard;
