import { hours } from "@/content/hours";
import { restaurant } from "@/content/restaurant";
import { social } from "@/content/social";
import { SITE_URL } from "@/lib/site";

const DAY_ORDER = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
const DAY_TO_SCHEMA: Record<string, string> = {
  Lunes: "Monday",
  Martes: "Tuesday",
  Miércoles: "Wednesday",
  Jueves: "Thursday",
  Viernes: "Friday",
  Sábado: "Saturday",
  Domingo: "Sunday",
};

function capitalize(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

/** Traduce "Lunes a viernes" / "Sábado y domingo" / "Martes" a días de schema.org. */
function expandDays(dayText: string): string[] {
  const range = dayText.trim().match(/^(\S+)\s+a\s+(\S+)$/i);
  if (range) {
    const start = DAY_ORDER.indexOf(capitalize(range[1]));
    const end = DAY_ORDER.indexOf(capitalize(range[2]));
    if (start !== -1 && end !== -1) {
      const days: string[] = [];
      for (let i = start; ; i = (i + 1) % 7) {
        days.push(DAY_TO_SCHEMA[DAY_ORDER[i]]);
        if (i === end) break;
      }
      return days;
    }
  }

  return dayText
    .split(/,|\sy\s/i)
    .map((d) => DAY_TO_SCHEMA[capitalize(d.trim())])
    .filter((d): d is string => Boolean(d));
}

/**
 * JSON-LD Schema.org Restaurant. Solo incluye campos con datos reales
 * confirmados — no se inventan calificaciones ni datos que no se han
 * proporcionado.
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
    openingHoursSpecification: hours.map((entry) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: expandDays(entry.day),
      opens: entry.open,
      closes: entry.close,
    })),
    sameAs: social.filter((s) => s.url).map((s) => s.url as string),
  };
}
