
import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface ImageCardProps {
  src: string;
  alt: string;
  title?: string;
  category?: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, alt, title, category }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="group img-hover-zoom rounded-lg overflow-hidden bg-muted cursor-pointer h-full">
          <div className="relative h-full">
            <div
              className={`absolute inset-0 bg-muted ${
                isLoaded ? "opacity-0" : "opacity-100"
              } transition-opacity duration-300`}
            />
            <img
              src={src}
              alt={alt}
              className={`w-full h-full object-cover transition-all duration-500 ${
                isLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setIsLoaded(true)}
            />
            <div className="absolute inset-0 bg-foreground/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            {(title || category) && (
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/70 to-transparent text-white transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                {category && (
                  <span className="inline-block text-xs uppercase tracking-wider bg-primary/80 px-2 py-1 rounded-full mb-2">
                    {category}
                  </span>
                )}
                {title && <h3 className="font-medium">{title}</h3>}
              </div>
            )}
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-5xl p-0 bg-transparent border-none">
        <div className="relative bg-background rounded-lg overflow-hidden p-0">
          <img
            src={src}
            alt={alt}
            className="w-full h-auto max-h-[80vh] object-contain"
          />
          {title && (
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/70 to-transparent">
              <h3 className="text-white font-medium">{title}</h3>
              {category && (
                <span className="inline-block text-xs text-white/90 uppercase tracking-wider">
                  {category}
                </span>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageCard;
