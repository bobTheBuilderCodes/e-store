import {
  BadgeCheck,
  Star,
} from "lucide-react";
import type { Store } from "../../types";

interface StoreHeaderProps {
  store: Store;
}

export function StoreHeader({ store }: StoreHeaderProps) {
  return (
    <div className="relative">
      <div className="h-72 overflow-hidden">
        <img
          src={store.coverImage}
          alt={`${store.name} cover`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative -mt-20">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
                        {store.name}
                      </h1>
                      {store.verified && (
                        <BadgeCheck className="w-7 h-7 text-blue-600 fill-blue-100" />
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                        <span className="font-semibold text-slate-900">
                          {store.rating}
                        </span>
                        <span className="text-slate-600">
                          ({store.reviewCount.toLocaleString()} reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-slate-700 leading-relaxed mb-4">
                  {store.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {store.categories.map((category) => (
                    <span
                      key={category}
                      className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
