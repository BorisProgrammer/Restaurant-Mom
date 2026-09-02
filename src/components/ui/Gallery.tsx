import Image from "next/image";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import type { GalleryImage } from "@/types";

interface GalleryProps {
  images: GalleryImage[];
  placeholderLabel: string;
  placeholderCount?: number;
  className?: string;
}

export function Gallery({
  images,
  placeholderLabel,
  placeholderCount = 6,
  className = "",
}: GalleryProps) {
  const tiles = images.length > 0 ? images : Array.from({ length: placeholderCount }, () => null);

  return (
    <div className={`grid grid-cols-2 gap-3 sm:grid-cols-3 ${className}`.trim()}>
      {tiles.map((image, i) => (
        <div key={i} className="relative aspect-square overflow-hidden rounded-2xl">
          {image ? (
            <Image src={image.src} alt={image.alt} fill className="object-cover" />
          ) : (
            <ImagePlaceholder label={placeholderLabel} />
          )}
        </div>
      ))}
    </div>
  );
}
