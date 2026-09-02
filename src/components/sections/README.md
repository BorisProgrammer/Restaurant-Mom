# components/sections/

Cada sección de la página. Cada una consume su propio archivo de `src/content/` y no contiene datos del restaurante escritos a mano.

- `Hero.tsx` — nombre y tagline reales del logo, más un `Carousel` (fotos del local/equipo) que muestra placeholders mientras `content/gallery.ts` (`heroGallery`) esté vacío. Sección `#inicio`.
- `About.tsx` — historia (`content/about.ts`), sección `#nosotros`.
- `MissionVision.tsx` — misión y visión (`content/about.ts`), en tarjetas lado a lado.
- `Menu.tsx` — categorías y platos (`content/menu.ts`), sección `#menu`.
- `Catering.tsx` — descripción del servicio de catering (`content/catering.ts`) + una `Gallery` de fotos de platos que muestra placeholders mientras `content/gallery.ts` (`cateringGallery`) esté vacío. Sección `#catering`.
- `Location.tsx` — mapa embebido (Google Maps `output=embed`, sin API key) + botón "Cómo llegar" (`content/restaurant.ts`), sección `#ubicacion`.
- `Contact.tsx` — teléfono (botón `tel:`), horarios (`content/hours.ts`) y redes sociales, sección `#contacto`. No tiene una sección/ancla propia de "Horarios" — se decidió mostrarlos junto al contacto en vez de agregar un sexto enlace al menú.

No existe un componente `Gallery.tsx` de sección aparte: la galería de Catering vive dentro de `Catering.tsx`, usando el componente reutilizable `components/ui/Gallery.tsx`.
