import type { GalleryImage } from "@/types";

/**
 * Para agregar una foto real, súmala aquí — no hay que tocar ningún
 * componente.
 */

// Fotos del local y del equipo/chef, mostradas en el carrusel del Hero.
export const heroGallery: GalleryImage[] = [
  { src: "/fotos/hero/1.jpeg", alt: "Fachada del local La Excelencia" },
  { src: "/fotos/hero/2.jpeg", alt: "Fachada del local La Excelencia" },
  { src: "/fotos/hero/3.jpeg", alt: "Fachada del local La Excelencia" },
  { src: "/fotos/hero/4.jpeg", alt: "Fachada del local La Excelencia" },
  { src: "/fotos/hero/5.jpeg", alt: "Fachada del local La Excelencia" },
  { src: "/fotos/hero/6.jpeg", alt: "La chef en la inauguración del local La Excelencia" },
  { src: "/fotos/hero/7.jpeg", alt: "La chef en la inauguración del local La Excelencia" },
];

// Fotos de platos para la sección de Catering.
export const cateringGallery: GalleryImage[] = [
  { src: "/fotos/catering/catering-2.jpeg", alt: "La chef junto a una mesa de cócteles de camarón preparada para un evento" },
  { src: "/fotos/catering/catering-1.jpeg", alt: "Mesa de evento con platos servidos de arroz verde, carnes y ensalada de choclo" },
  { src: "/fotos/catering/catering-3.jpeg", alt: "Plato con arroz verde, pierna de pollo en salsa, carne al horno, papas gratinadas y ensalada" },
  { src: "/fotos/catering/alitas-bbq.jpeg", alt: "Alitas BBQ" },
  { src: "/fotos/catering/camarones-apanados.jpeg", alt: "Camarones apanados" },
  { src: "/fotos/catering/churrasco.jpeg", alt: "Churrasco" },
];
