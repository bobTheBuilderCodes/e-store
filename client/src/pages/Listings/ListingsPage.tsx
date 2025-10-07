import Navbar from "../../components/Navbar";
import { BannerCarousel } from "../../components/listings/BannerCarousel";
import FlashSale from "../../components/listings/FlashSale";
import OfficialStores from "../../components/listings/OfficialStores";
import PopularCategories from "../../components/listings/PopularCategories";
import ProductGrid from "../../components/listings/ProductGrid";
import Promotions from "../../components/listings/Promotions";


const ListingsPage = () => {
  return (
    <div className="bg-orange-100 min-h-screen w-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
        <BannerCarousel />
        <FlashSale />
        <OfficialStores />
        <Promotions />
        <PopularCategories />
        <ProductGrid />
      </div>
      <footer className="bg-white border-t mt-10 py-6 text-sm text-gray-500 text-center">
        <p>© 2025 e-store Marketplace — Your reliable online shopping partner.</p>
      </footer>
    </div>
  );
};

export default ListingsPage;
