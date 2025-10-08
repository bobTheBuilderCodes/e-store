import { Star, CheckCircle } from 'lucide-react';
import type { StoreReview } from '../../types';

interface StoreReviewsProps {
  reviews: StoreReview[];
}

export function StoreReviews({ reviews }: StoreReviewsProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Store Reviews</h2>

      <div className="space-y-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-xl p-6 shadow-sm border border-slate-200"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-semibold text-slate-900">{review.author}</h4>
                  {review.verified && (
                    <span className="flex items-center gap-1 text-xs text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                      <CheckCircle className="w-3 h-3" />
                      Verified Purchase
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-slate-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-slate-500">{formatDate(review.date)}</span>
                </div>
              </div>
            </div>
            <p className="text-slate-700 leading-relaxed">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
