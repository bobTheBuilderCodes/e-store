import { ArrowLeft, Heart, Share2 } from 'lucide-react';
import { ImageGallery } from '../../components/ImageGallery';
import { mockProduct, mockReviews } from '../../data/mockProduct';
import { ProductInfo } from '../../components/ProductInfo';
import { ReviewSection } from '../../components/ReviewSection';
import { useNavigate } from 'react-router-dom';


function ProductDetails() {

    const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button onClick={()=>navigate(-1)} className="flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors duration-200">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to List</span>
            </button>

            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors duration-200">
                <Share2 className="w-5 h-5 text-slate-700" />
              </button>
              <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors duration-200">
                <Heart className="w-5 h-5 text-slate-700" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <ImageGallery images={mockProduct.images} productName={mockProduct.name} />
          </div>
          <div>
            <ProductInfo product={mockProduct} />
          </div>
        </div>

        <div className="max-w-4xl">
          <ReviewSection
            reviews={mockReviews}
            averageRating={mockProduct.rating}
            totalReviews={mockProduct.reviewCount}
          />
        </div>
      </main>

      <footer className="border-t border-slate-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-slate-600">
            <p>© 2025 Premium Audio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ProductDetails;
