import { Clock, Star, Flame } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface FlashSaleProduct {
  id: string;
  name: string;
  image: string;
  originalPrice: number;
  salePrice: number;
  discount: number;
  rating: number;
  sold: number;
  stock: number;
}

const flashSaleProducts: FlashSaleProduct[] = [
  {
    id: '1',
    name: 'Wireless Earbuds Pro',
    image: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg',
    originalPrice: 159.99,
    salePrice: 79.99,
    discount: 50,
    rating: 4.8,
    sold: 234,
    stock: 50
  },
  {
    id: '2',
    name: 'Smart Watch Ultra',
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg',
    originalPrice: 399.99,
    salePrice: 199.99,
    discount: 50,
    rating: 4.7,
    sold: 189,
    stock: 30
  },
  {
    id: '3',
    name: 'Portable Bluetooth Speaker',
    image: 'https://images.pexels.com/photos/8000589/pexels-photo-8000589.jpeg',
    originalPrice: 99.99,
    salePrice: 49.99,
    discount: 50,
    rating: 4.6,
    sold: 456,
    stock: 75
  },
  {
    id: '4',
    name: 'USB-C Fast Charger',
    image: 'https://images.pexels.com/photos/4226881/pexels-photo-4226881.jpeg',
    originalPrice: 49.99,
    salePrice: 24.99,
    discount: 50,
    rating: 4.9,
    sold: 892,
    stock: 120
  }
];

export function FlashSale() {
  const navigate = useNavigate()
  const [timeLeft, setTimeLeft] = useState({
    hours: 5,
    minutes: 42,
    seconds: 18
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-red-600 to-orange-500 rounded-2xl p-6 md:p-8 shadow-xl">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
            <Flame className="w-7 h-7 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white flex items-center gap-2">
              Flash Sale
            </h2>
            <p className="text-white/90">Limited time offers - Grab them fast!</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-white" />
          <span className="text-white font-medium">Ends in:</span>
          <div className="flex gap-2">
            {[
              { value: timeLeft.hours, label: 'HRS' },
              { value: timeLeft.minutes, label: 'MIN' },
              { value: timeLeft.seconds, label: 'SEC' }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-white text-slate-900 font-bold text-xl px-3 py-2 rounded-lg min-w-[3rem] text-center">
                  {item.value.toString().padStart(2, '0')}
                </div>
                <span className="text-xs text-white/80 mt-1">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {flashSaleProducts.map((product) => (
          <div onClick={()=>{navigate(`product/${product.id}`)}}
            key={product.id}
            className="bg-white rounded-xl p-4 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
          >
            <div className="relative aspect-square mb-3 overflow-hidden rounded-lg bg-slate-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-2 right-2 bg-red-600 text-white text-sm font-bold px-2 py-1 rounded-lg">
                -{product.discount}%
              </div>
            </div>

            <h3 className="font-semibold text-slate-900 mb-2 line-clamp-2">
              {product.name}
            </h3>

            <div className="flex items-center gap-1 mb-2">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="text-sm font-medium text-slate-900">{product.rating}</span>
              <span className="text-sm text-slate-500">| {product.sold} sold</span>
            </div>

            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl font-bold text-red-600">${product.salePrice}</span>
              <span className="text-sm text-slate-400 line-through">
                ${product.originalPrice}
              </span>
            </div>

            <div className="mb-3">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-600">Stock</span>
                <span className="text-slate-900 font-medium">{product.stock} left</span>
              </div>
              <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-red-600 to-orange-500 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min((product.sold / (product.sold + product.stock)) * 100, 100)}%` }}
                />
              </div>
            </div>

            <button className="w-full bg-slate-900 text-white py-2 rounded-lg font-semibold hover:bg-slate-800 transition-colors duration-200">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
