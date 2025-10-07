import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const banners = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Buy & Sell Anything Hassle-Free",
    subtitle: "Find great deals on electronics, fashion, cars, and more near you.",
    cta: "Start Shopping",
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/3945651/pexels-photo-3945651.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Turn Your Items Into Cash",
    subtitle: "Post your ad today and reach thousands of buyers instantly.",
    cta: "Post an Ad",
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Shop Smarter, Live Better",
    subtitle: "Discover trusted sellers and amazing bargains every day.",
    cta: "Explore Listings",
  },
];

export const BannerCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

 
  // Auto-slide effect
  useEffect(() => {
    if (paused) return; // pause on hover
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 5000); // every 5 seconds
    return () => clearInterval(interval);
  }, [paused]);

  return (
    <div
      className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-2xl shadow-lg"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="wait">
        {banners.map(
          (banner, index) =>
            index === current && (
              <motion.div
                key={banner.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="w-full h-full object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

                {/* Text Content */}
                <div className="absolute top-1/2 left-8 md:left-16 transform -translate-y-1/2 text-white max-w-md space-y-4">
                  <h2 className="text-2xl md:text-4xl font-bold leading-snug drop-shadow-lg">
                    {banner.title}
                  </h2>
                  <p className="text-sm md:text-base text-gray-200 drop-shadow-md">
                    {banner.subtitle}
                  </p>
                  <button className="mt-4 px-5 py-2 bg-yellow-400 text-black font-medium rounded-full hover:bg-yellow-300 transition">
                    {banner.cta}
                  </button>
                </div>
              </motion.div>
            )
        )}
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
        {banners.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              idx === current ? "bg-yellow-400 scale-110" : "bg-gray-300"
            }`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
};
