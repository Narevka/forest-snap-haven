
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, Camera, Calendar } from "lucide-react";
import ImageCard from "./ImageCard";
import PhotoModal from "./PhotoModal";
import { cn } from "@/lib/utils";

export interface Photo {
  id: string;
  src: string;
  alt: string;
  title?: string;
  category: string;
  featured?: boolean;
  date?: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
  categories?: string[];
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos, categories = [] }) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [likedPhotos, setLikedPhotos] = useState<Set<string>>(new Set());
  const [isNewPhotosVisible, setIsNewPhotosVisible] = useState(false);

  const filteredPhotos = activeCategory === "all"
    ? photos
    : photos.filter(photo => photo.category === activeCategory);

  const featuredPhotos = photos.filter(photo => photo.featured);
  
  // Simulate new photos being added weekly
  useEffect(() => {
    // Show "new photos" message after 5 seconds for demo purposes
    const timer = setTimeout(() => {
      setIsNewPhotosVisible(true);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleImageClick = (index: number) => {
    setCurrentPhotoIndex(index);
    setModalOpen(true);
  };

  const toggleLike = (photoId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    const updatedLikes = new Set(likedPhotos);
    
    if (updatedLikes.has(photoId)) {
      updatedLikes.delete(photoId);
    } else {
      updatedLikes.add(photoId);
    }
    
    setLikedPhotos(updatedLikes);
  };

  return (
    <div className="space-y-12">
      {isNewPhotosVisible && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-primary/10 border border-primary/20 rounded-lg p-4 flex items-center justify-between"
        >
          <div className="flex items-center">
            <Camera className="h-5 w-5 text-primary mr-2" />
            <p className="font-medium text-primary">Nowe zdjęcia zostały właśnie dodane! Sprawdź najnowszą kolekcję.</p>
          </div>
          <button 
            onClick={() => setIsNewPhotosVisible(false)}
            className="text-sm text-primary/70 hover:text-primary"
          >
            Rozumiem
          </button>
        </motion.div>
      )}

      {featuredPhotos.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-serif font-bold">Wyróżnione zdjęcia tygodnia</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredPhotos.map((photo) => (
              <motion.div 
                key={photo.id}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="relative overflow-hidden rounded-lg"
              >
                <img 
                  src={photo.src} 
                  alt={photo.alt} 
                  className="w-full h-64 object-cover"
                  onClick={() => handleImageClick(photos.findIndex(p => p.id === photo.id))}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium text-lg">{photo.title}</h3>
                      <span className="text-sm text-white/80">{photo.category}</span>
                    </div>
                    <button 
                      onClick={(e) => toggleLike(photo.id, e)}
                      className="p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
                    >
                      <Heart className={cn(
                        "h-5 w-5",
                        likedPhotos.has(photo.id) ? "fill-red-500 text-red-500" : "text-white"
                      )} />
                    </button>
                  </div>
                </div>
                {photo.date && (
                  <div className="absolute top-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded-full flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {photo.date}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      )}

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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-max gap-4 md:gap-6">
        {filteredPhotos.map((photo, index) => (
          <motion.div 
            key={photo.id} 
            className={`h-${Math.floor(Math.random() * 2) + 64} md:h-${Math.floor(Math.random() * 2) + 72}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <div className="relative h-full group cursor-pointer" onClick={() => handleImageClick(photos.indexOf(photo))}>
              <ImageCard
                src={photo.src}
                alt={photo.alt}
                title={photo.title}
                category={photo.category}
              />
              <button 
                onClick={(e) => toggleLike(photo.id, e)}
                className="absolute top-3 right-3 p-2 rounded-full bg-black/20 hover:bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-10"
              >
                <Heart className={cn(
                  "h-4 w-4 text-white",
                  likedPhotos.has(photo.id) ? "fill-red-500 text-red-500" : ""
                )} />
              </button>
              {photo.date && (
                <div className="absolute bottom-12 left-3 bg-black/60 text-white text-xs px-2 py-1 rounded-full flex items-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <Calendar className="h-3 w-3 mr-1" />
                  {photo.date}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <PhotoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        photos={photos}
        currentIndex={currentPhotoIndex}
        onNavigate={setCurrentPhotoIndex}
      />
    </div>
  );
};

export default PhotoGallery;
