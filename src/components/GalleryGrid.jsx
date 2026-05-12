import React from "react";
import { galleryImages } from "../constants/gallery";

const GalleryGrid = ({ limit }) => {
  const images = limit ? galleryImages.slice(0, limit) : galleryImages;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((image, index) => (
        <figure
          key={image.src}
          className={`group overflow-hidden border border-line bg-white ${
            index === 0 || index === 4 ? "sm:col-span-2" : ""
          }`}
        >
          <div className="image-shine aspect-[4/3]">
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <figcaption className="flex items-center justify-between p-4 text-sm">
            <span className="font-semibold text-ink">{image.category}</span>
            <span className="text-graphite">{image.alt}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
};

export default GalleryGrid;
