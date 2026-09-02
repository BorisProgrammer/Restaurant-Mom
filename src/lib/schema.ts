import { restaurant } from "@/content/restaurant";
import { social } from "@/content/social";
import { SITE_URL } from "@/lib/site";

/**
 * JSON-LD Schema.org Restaurant. Solo incluye campos con datos reales
 * confirmados — no se inventan horarios, calificaciones ni datos que no se
 * han proporcionado.
 */
export function buildRestaurantSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: restaurant.name,
    description: restaurant.tagline,
    image: `${SITE_URL}/brand/logo.png`,
    url: SITE_URL,
    telephone: restaurant.phone,
    servesCuisine: "Ecuatoriana",
    priceRange: "$",
    address: {
      "@type": "PostalAddress",
      streetAddress: restaurant.address,
      addressLocality: "Cuenca",
      addressCountry: "EC",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: restaurant.coordinates.lat,
      longitude: restaurant.coordinates.lng,
    },
    hasMap: restaurant.mapsUrl,
    sameAs: social.filter((s) => s.url).map((s) => s.url as string),
  };
}
