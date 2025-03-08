
import React, { useState } from "react";
import ImageCard from "./ImageCard";

export interface Photo {
  id: string;
  src: string;
  alt: string;
  title?: string;
  category: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
  categories?: string[];
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos, categories = [] }) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredPhotos = activeCategory === "all"
    ? photos
    : photos.filter(photo => photo.category === activeCategory);

  return (
    <div className="space-y-8">
      {categories.length > 0 && (
        <div className="flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === "all"
                ? "bg-primary text-primary-foreground"
                : "bg-muted hover:bg-muted/80"
            }`}
          >
            Wszystkie
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {filteredPhotos.map((photo) => (
          <div key={photo.id} className="h-64 md:h-72">
            <ImageCard
              src={photo.src}
              alt={photo.alt}
              title={photo.title}
              category={photo.category}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
