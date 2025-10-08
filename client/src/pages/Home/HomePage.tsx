// import Navbar from "../../components/Navbar";
// import { BannerCarousel } from "../../components/listings/BannerCarousel";
// import FlashSale from "../../components/listings/FlashSale";
// import OfficialStores from "../../components/listings/OfficialStores";
// import PopularCategories from "../../components/listings/PopularCategories";
// import ProductGrid from "../../components/listings/ProductGrid";
// import Promotions from "../../components/listings/Promotions";


// const ListingsPage = () => {
//   return (
//     <div className="bg-orange-50 min-h-screen w-screen">
//       <Navbar />
//       <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
//         <BannerCarousel />
//         <FlashSale />
//         <OfficialStores />
//         <Promotions />
//         <PopularCategories />
//         <ProductGrid />
//       </div>
//       <footer className="bg-white border-t mt-10 py-6 text-sm text-gray-500 text-center">
//         <p>© 2025 e-store Marketplace — Your reliable online shopping partner.</p>
//       </footer>
//     </div>
//   );
// };

// export default ListingsPage;


import { Mail } from 'lucide-react';
import { Navbar } from '../../components/Navbar';
import { HeroCarousel } from '../../components/listings/BannerCarousel';
import { FlashSale } from '../../components/listings/FlashSale';
import { PopularStores } from '../../components/listings/PopularStores';
import { ProductGrid } from '../../components/listings/ProductGrid';
import { FilterSidebar } from '../../components/listings/FilterSidebar';
import { newArrivals, trendingProducts } from '../../data/mockProducts';

export function HomePage() {
  return (
    <div className="min-h-screen w-screen bg-slate-50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-12">
        <HeroCarousel />

        <FlashSale />

        <PopularStores />

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-1">
            <FilterSidebar />
          </div>

          <div className="lg:col-span-4 space-y-12">
            <ProductGrid
              title="Trending Now"
              subtitle="Most popular products this week"
              products={trendingProducts}
            />

            <ProductGrid
              title="New Arrivals"
              subtitle="Fresh products just for you"
              products={newArrivals}
            />
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-900 to-slate-700 rounded-2xl p-8 md:p-12 text-center">
          <div className="max-w-2xl mx-auto">
            <Mail className="w-12 h-12 text-white mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-slate-300 mb-6 text-lg">
              Get exclusive deals, new product launches, and insider tips delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-all duration-200 shadow-xl hover:shadow-2xl">
                Subscribe
              </button>
            </div>
            <p className="text-slate-400 text-sm mt-4">
              No spam, unsubscribe anytime. Your email is safe with us.
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-slate-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-xl mb-4">e-store</h3>
              <p className="text-slate-400">
                Your one-stop destination for quality products from trusted sellers worldwide.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Electronics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Fashion</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Home & Garden</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sports</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Track Order</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sell on e-store</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms & Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>© 2025 e-store. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
