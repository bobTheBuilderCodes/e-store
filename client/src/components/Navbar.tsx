import { Search, ShoppingCart, User, Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['Electronics', 'Fashion', 'Home & Garden', 'Sports', 'Beauty', 'Books'];

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-8 h-8 text-slate-900" />
              <span className="text-2xl font-bold text-slate-900">e-store</span>
            </div>

            <div className="hidden lg:flex items-center gap-6">
              {categories.map((category) => (
                <button
                  key={category}
                  className="text-slate-700 hover:text-slate-900 font-medium transition-colors duration-200"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search for products, stores, or brands..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-slate-200 focus:border-slate-900 focus:outline-none transition-colors duration-200"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden md:flex items-center gap-2 p-2 hover:bg-slate-100 rounded-lg transition-colors duration-200">
              <Heart className="w-5 h-5 text-slate-700" />
            </button>
            <button className="hidden md:flex items-center gap-2 p-2 hover:bg-slate-100 rounded-lg transition-colors duration-200 relative">
              <ShoppingCart className="w-5 h-5 text-slate-700" />
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>
            <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors duration-200">
              <User className="w-5 h-5" />
              <span className="font-medium">Sign In</span>
            </button>

            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-900" />
              ) : (
                <Menu className="w-6 h-6 text-slate-900" />
              )}
            </button>
          </div>
        </div>

        <div className="md:hidden py-3">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-slate-200 focus:border-slate-900 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-4 space-y-3">
            {categories.map((category) => (
              <button
                key={category}
                className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors duration-200"
              >
                {category}
              </button>
            ))}
            <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
              <button className="flex items-center gap-2 px-4 py-2 hover:bg-slate-100 rounded-lg transition-colors duration-200">
                <Heart className="w-5 h-5 text-slate-700" />
                <span>Wishlist</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 hover:bg-slate-100 rounded-lg transition-colors duration-200">
                <ShoppingCart className="w-5 h-5 text-slate-700" />
                <span>Cart (3)</span>
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-900 text-white rounded-lg">
                <User className="w-5 h-5" />
                <span className="font-medium">Sign In</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
