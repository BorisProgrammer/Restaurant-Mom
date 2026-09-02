import type { RestaurantInfo } from "@/types";

/**
 * Coordenadas y dirección obtenidas al resolver el enlace corto de Google
 * Maps que proporcionó el usuario (https://maps.app.goo.gl/4fHZVQWiqoLZcXAk8)
 * y una geocodificación inversa de esas coordenadas. `address` es una
 * aproximación a nivel de calle — PENDIENTE de que el usuario la confirme o
 * la reemplace por la dirección exacta/referencia que usan normalmente.
 */
export const restaurant: RestaurantInfo = {
  name: "La Excelencia",
  tagline: "Un gusto para tu paladar",
  phone: "+593986877897",
  phoneDisplay: "098 687 7897",
  address: "Av. Francisco Moscoso, Cuenca (sector Huayna Cápac)",
  mapsUrl: "https://maps.app.goo.gl/4fHZVQWiqoLZcXAk8",
  mapsEmbedUrl: "https://www.google.com/maps?q=-2.916474,-79.0012035&z=17&output=embed",
  coordinates: {
    lat: -2.916474,
    lng: -79.0012035,
  },
};
