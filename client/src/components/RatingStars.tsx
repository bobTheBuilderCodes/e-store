// components/RatingStars.tsx
import React from "react";
import { Star } from "lucide-react";

interface RatingStarsProps {
  rating: number;
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;

  return (
    <div className="flex items-center space-x-1">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
      ))}
      {halfStar && <Star size={16} className="text-yellow-400 fill-yellow-300 opacity-70" />}
    </div>
  );
};

export default RatingStars;
