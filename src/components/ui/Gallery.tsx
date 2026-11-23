import Image from "next/image";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import type { GalleryImage } from "@/types";

interface GalleryProps {
  images: GalleryImage[];
  placeholderLabel: string;
  placeholderCount?: number;
  className?: string;
}

/**
 * Grilla de fotos cuadradas. En pantallas con ratón, al pasar por encima la
 * casilla se agranda y la foto se muestra completa (sin recorte), porque las
 * fotos tienen formatos distintos (verticales y horizontales).
 *
 * El origen del zoom se ancla al borde en la primera y última columna para
 * que la casilla agrandada no se salga de la pantalla.
 */
export function Gallery({
  images,
  placeholderLabel,
  placeholderCount = 6,
  className = "",
}: GalleryProps) {
  const tiles = images.length > 0 ? images : Array.from({ length: placeholderCount }, () => null);

  return (
    <div className={`grid grid-cols-2 gap-3 sm:grid-cols-3 ${className}`.trim()}>
      {tiles.map((image, i) =>
        image ? (
          <div
            key={i}
            className="group relative aspect-square overflow-hidden rounded-2xl bg-cream shadow-sm hover:z-10 hover:scale-150 hover:shadow-2xl motion-safe:transition-[scale,box-shadow] motion-safe:duration-300 motion-safe:ease-out sm:nth-[3n]:origin-right sm:nth-[3n+1]:origin-left"
          >
            {/* Recortada para llenar la casilla */}
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 640px) 380px, 50vw"
              className="object-cover motion-safe:transition-opacity motion-safe:duration-300 group-hover:opacity-0"
            />
            {/* Completa, visible al pasar el ratón (misma URL: no se descarga dos veces) */}
            <Image
              src={image.src}
              alt=""
              aria-hidden
              fill
              sizes="(min-width: 640px) 380px, 50vw"
              className="object-contain opacity-0 motion-safe:transition-opacity motion-safe:duration-300 group-hover:opacity-100"
            />
          </div>
        ) : (
          <div key={i} className="relative aspect-square overflow-hidden rounded-2xl">
            <ImagePlaceholder label={placeholderLabel} />
          </div>
        ),
      )}
    </div>
  );
}
