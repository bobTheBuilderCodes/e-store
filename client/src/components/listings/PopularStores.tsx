import { BadgeCheck, Star, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface PopularStore {
  id: string;
  name: string;
  logo: string;
  coverImage: string;
  rating: number;
  productCount: number;
  followers: string;
  verified: boolean;
}

const popularStores: PopularStore[] = [
  {
    id: '1',
    name: 'Premium Audio Electronics',
    logo: 'https://images.pexels.com/photos/6224/hands-people-woman-working.jpg',
    coverImage: 'https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg',
    rating: 4.9,
    productCount: 247,
    followers: '12.5K',
    verified: true
  },
  {
    id: '2',
    name: 'Fashion Forward',
    logo: 'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg',
    coverImage: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg',
    rating: 4.8,
    productCount: 892,
    followers: '28.3K',
    verified: true
  },
  {
    id: '3',
    name: 'TechVista Store',
    logo: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg',
    coverImage: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
    rating: 4.7,
    productCount: 456,
    followers: '18.9K',
    verified: true
  },
  {
    id: '4',
    name: 'Home & Living Co.',
    logo: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg',
    coverImage: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg',
    rating: 4.9,
    productCount: 634,
    followers: '22.1K',
    verified: true
  }
];

export function PopularStores() {

  const navigate = useNavigate()
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-amber-600" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Popular Stores</h2>
            <p className="text-slate-600">Top-rated sellers you can trust</p>
          </div>
        </div>
        <button className="text-slate-700 hover:text-slate-900 font-semibold transition-colors">
          View All →
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {popularStores.map((store) => (
          <div onClick={()=>{navigate(`store/${store.id}`)}}
            key={store.id}
            className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative h-32 overflow-hidden">
              <img
                src={store.coverImage}
                alt={store.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            <div className="p-4 -mt-10 relative">
              <div className="w-20 h-20 rounded-xl overflow-hidden ring-4 ring-white shadow-lg mb-3">
                <img
                  src={store.logo}
                  alt={store.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-start justify-between mb-2">
                <h3 className="font-bold text-slate-900 flex items-center gap-1 text-lg">
                  {store.name}
                  {store.verified && (
                    <BadgeCheck className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  )}
                </h3>
              </div>

              <div className="flex items-center gap-1 mb-3">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="text-sm font-semibold text-slate-900">{store.rating}</span>
                <span className="text-sm text-slate-500">
                  ({store.productCount} products)
                </span>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-200">
                <div className="text-sm">
                  <span className="text-slate-600">Followers</span>
                  <p className="font-bold text-slate-900">{store.followers}</p>
                </div>
                <button className="px-4 py-2 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-slate-800 transition-colors duration-200">
                  Visit Store
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
