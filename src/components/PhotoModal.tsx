
import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, Heart, Download, Share } from "lucide-react";
import { Photo } from "./PhotoGallery";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface PhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
  photos: Photo[];
  currentIndex: number;
  onNavigate: (newIndex: number) => void;
}

const PhotoModal: React.FC<PhotoModalProps> = ({
  isOpen,
  onClose,
  photos,
  currentIndex,
  onNavigate,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const { toast } = useToast();
  const currentPhoto = photos[currentIndex];

  const handlePrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : photos.length - 1;
    onNavigate(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex < photos.length - 1 ? currentIndex + 1 : 0;
    onNavigate(newIndex);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    toast({
      title: !isLiked ? "Zdjęcie dodane do ulubionych" : "Zdjęcie usunięte z ulubionych",
      duration: 2000,
    });
  };

  const handleDownload = () => {
    toast({
      title: "Rozpoczęto pobieranie zdjęcia",
      duration: 2000,
    });
  };

  const handleShare = () => {
    toast({
      title: "Link do zdjęcia skopiowany do schowka",
      duration: 2000,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 bg-black/95 border-none overflow-hidden">
        <div className="relative flex flex-col h-full">
          {/* Image container */}
          <div className="relative flex-1 flex items-center justify-center overflow-hidden">
            <img
              src={currentPhoto?.src}
              alt={currentPhoto?.alt}
              className="max-w-full max-h-[80vh] object-contain"
            />

            {/* Navigation buttons */}
            <button
              onClick={handlePrevious}
              className="absolute left-4 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors"
              aria-label="Poprzednie zdjęcie"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors"
              aria-label="Następne zdjęcie"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Image info and actions */}
          <div className="bg-black/80 p-4 text-white">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium text-lg">{currentPhoto?.title}</h3>
                <p className="text-white/70 text-sm">{currentPhoto?.category}</p>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={handleLike}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors"
                  aria-label="Polub zdjęcie"
                >
                  <Heart
                    size={20}
                    className={cn(
                      "transition-colors",
                      isLiked ? "fill-red-500 text-red-500" : "text-white"
                    )}
                  />
                </button>
                <button
                  onClick={handleDownload}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors"
                  aria-label="Pobierz zdjęcie"
                >
                  <Download size={20} />
                </button>
                <button
                  onClick={handleShare}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors"
                  aria-label="Udostępnij zdjęcie"
                >
                  <Share size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PhotoModal;
