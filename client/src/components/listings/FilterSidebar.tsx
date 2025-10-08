import { SlidersHorizontal, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface FilterSection {
  title: string;
  options: { label: string; count?: number }[];
}

const filters: FilterSection[] = [
  {
    title: 'Category',
    options: [
      { label: 'Electronics', count: 1243 },
      { label: 'Fashion', count: 2891 },
      { label: 'Home & Garden', count: 892 },
      { label: 'Sports & Outdoors', count: 634 },
      { label: 'Beauty & Health', count: 1456 }
    ]
  },
  {
    title: 'Price Range',
    options: [
      { label: 'Under $25', count: 456 },
      { label: '$25 to $50', count: 892 },
      { label: '$50 to $100', count: 634 },
      { label: '$100 to $200', count: 423 },
      { label: 'Over $200', count: 234 }
    ]
  },
  {
    title: 'Rating',
    options: [
      { label: '4.5 & Up', count: 1234 },
      { label: '4.0 & Up', count: 2456 },
      { label: '3.5 & Up', count: 3891 },
      { label: '3.0 & Up', count: 4567 }
    ]
  },
  {
    title: 'Shipping',
    options: [
      { label: 'Free Shipping', count: 1892 },
      { label: 'Express Delivery', count: 634 },
      { label: 'International', count: 423 }
    ]
  }
];

export function FilterSidebar() {
  const [expandedSections, setExpandedSections] = useState<number[]>([0, 1]);
  const [priceRange, setPriceRange] = useState([0, 500]);

  const toggleSection = (index: number) => {
    setExpandedSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <div className="flex items-center gap-2 mb-6 pb-6 border-b border-slate-200">
        <SlidersHorizontal className="w-5 h-5 text-slate-700" />
        <h3 className="text-xl font-bold text-slate-900">Filters</h3>
      </div>

      <div className="space-y-6">
        {filters.map((section, sectionIndex) => (
          <div key={sectionIndex} className="border-b border-slate-200 pb-4 last:border-0">
            <button
              onClick={() => toggleSection(sectionIndex)}
              className="flex items-center justify-between w-full mb-3"
            >
              <h4 className="font-semibold text-slate-900">{section.title}</h4>
              {expandedSections.includes(sectionIndex) ? (
                <ChevronUp className="w-5 h-5 text-slate-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-slate-600" />
              )}
            </button>

            {expandedSections.includes(sectionIndex) && (
              <div className="space-y-2">
                {section.options.map((option, optionIndex) => (
                  <label
                    key={optionIndex}
                    className="flex items-center gap-3 cursor-pointer hover:bg-slate-50 p-2 rounded-lg transition-colors"
                  >
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900"
                    />
                    <span className="text-sm text-slate-700 flex-1">{option.label}</span>
                    {option.count && (
                      <span className="text-xs text-slate-500">({option.count})</span>
                    )}
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}

        <div className="pt-4">
          <h4 className="font-semibold text-slate-900 mb-3">Custom Price Range</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <input
                type="number"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                placeholder="Min"
              />
              <span className="text-slate-500">-</span>
              <input
                type="number"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                placeholder="Max"
              />
            </div>
            <button className="w-full py-2 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors">
              Apply
            </button>
          </div>
        </div>

        <button className="w-full py-3 border-2 border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors">
          Clear All Filters
        </button>
      </div>
    </div>
  );
}
