import { ArrowLeft } from 'lucide-react';

import { StoreHeader } from '../../components/store/StoreHeader';
;
import { mockStore, mockStoreProducts, mockStoreReviews } from '../../data/mockStore';
import { StoreStats } from '../../components/store/StoreStats';
import { StoreContact } from '../../components/store/StoreContact';
import { StoreProducts } from '../../components/store/StoreProducts';
import { StoreReviews } from '../../components/store/StoreReviews';
import { useNavigate } from 'react-router-dom';

export default function StorePage() {
    const navigate  = useNavigate()
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <button onClick={()=>navigate(-1)} className="flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors duration-200">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Stores</span>
            </button>
          </div>
        </div>
      </header>

      <StoreHeader store={mockStore} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <StoreStats stats={mockStore.stats} />

        <StoreContact store={mockStore} />

        <StoreProducts products={mockStoreProducts} />

        <StoreReviews reviews={mockStoreReviews} />
      </main>

      <footer className="bg-white border-t border-slate-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-slate-600">
            <p>© 2025 Premium Audio Electronics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
