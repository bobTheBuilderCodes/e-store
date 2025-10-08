import { useState, useEffect } from 'react';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  cta: string;
  backgroundColor: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'Summer Sale Up to 70% Off',
    subtitle: 'Get ready for summer with amazing deals on fashion & accessories',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg',
    cta: 'Shop Now',
    backgroundColor: 'from-orange-500 to-pink-500'
  },
  {
    id: 2,
    title: 'New Tech Arrivals',
    subtitle: 'Discover the latest gadgets and electronics at unbeatable prices',
    image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg',
    cta: 'Explore Tech',
    backgroundColor: 'from-blue-600 to-cyan-500'
  },
  {
    id: 3,
    title: 'Home Makeover Essentials',
    subtitle: 'Transform your space with our curated home & garden collection',
    image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg',
    cta: 'Browse Collection',
    backgroundColor: 'from-emerald-600 to-teal-500'
  }
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);



  return (
    <div className="relative h-96 md:h-[500px] overflow-hidden rounded-2xl">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.backgroundColor}`}>
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover mix-blend-overlay opacity-40"
            />
          </div>

          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                  {slide.title}
                </h2>
                <p className="text-xl md:text-2xl text-white/90 mb-8">
                  {slide.subtitle}
                </p>
                <button className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105">
                  {slide.cta}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      

      

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
