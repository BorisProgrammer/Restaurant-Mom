export interface MenuItem {
  name: string;
  price: number;
  description?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export type SocialPlatform = "instagram" | "tiktok";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  /** null = todavía no existe la cuenta; se muestra como "próximamente" en vez de un enlace roto. */
  url: string | null;
}

export interface AboutContent {
  history: string;
  mission: string;
  vision: string;
}

export interface CateringContent {
  description: string;
}

export interface HoursEntry {
  day: string;
  open: string;
  close: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface RestaurantInfo {
  name: string;
  tagline: string;
  phone: string;
  phoneDisplay: string;
  address: string;
  mapsUrl: string;
  mapsEmbedUrl: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}
