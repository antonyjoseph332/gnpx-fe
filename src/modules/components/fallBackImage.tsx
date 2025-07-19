import React, { useState } from "react";
import { ImageOff, PlayCircle } from "lucide-react";

interface FallbackImageProps {
  src?: string;
  alt?: string;
}

const FallbackImage: React.FC<FallbackImageProps> = ({ src, alt }) => {
  const [hasError, setHasError] = useState(!src);

  return (
    <div className="relative w-full h-64 mb-4 overflow-hidden rounded-lg bg-black group">
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-900">
          <ImageOff className="w-12 h-12 text-neutral-500" />
        </div>
      )}

      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <PlayCircle className="w-14 h-14 text-white drop-shadow-lg" />
      </div>
    </div>
  );
};

export default FallbackImage;