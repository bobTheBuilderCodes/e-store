import { useState } from 'react';

interface ImageGalleryProps {
  images: string[];
  productName: string;
}

export function ImageGallery({ images, productName }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-slate-100">
        <img
          src={images[selectedImage]}
          alt={`${productName} - View ${selectedImage + 1}`}
          className="h-full w-full object-cover transition-opacity duration-300"
        />
      </div>

      <div className="grid grid-cols-4 gap-3">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative aspect-square overflow-hidden rounded-lg transition-all duration-200 ${
              selectedImage === index
                ? 'ring-2 ring-slate-900 ring-offset-2'
                : 'ring-1 ring-slate-200 hover:ring-slate-400'
            }`}
          >
            <img
              src={image}
              alt={`${productName} - Thumbnail ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
