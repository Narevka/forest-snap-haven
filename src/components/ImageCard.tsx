
import React, { useState } from "react";
import { motion } from "framer-motion";

interface ImageCardProps {
  src: string;
  alt: string;
  title?: string;
  category?: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, alt, title, category }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div 
      className="rounded-lg overflow-hidden bg-muted cursor-pointer h-full"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
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
        <motion.div 
          className="absolute inset-0 bg-foreground/10 opacity-0"
          whileHover={{ opacity: 1 }}
        />
        {(title || category) && (
          <motion.div 
            className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/70 to-transparent text-white"
            initial={{ y: 10, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {category && (
              <span className="inline-block text-xs uppercase tracking-wider bg-primary/80 px-2 py-1 rounded-full mb-2">
                {category}
              </span>
            )}
            {title && <h3 className="font-medium">{title}</h3>}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ImageCard;
