# components/sections/

Cada sección de la página (`Hero`, `About`, `MissionVision`, `Menu`, `Location`, `Contact`, `Hours`, `Gallery`). Cada una consume su propio archivo de `src/content/` y no contiene datos del restaurante escritos a mano.

- `Hero.tsx` — nombre y tagline reales del logo. Incluye un placeholder visual con borde punteado donde va la foto del local — reemplazar por `next/image` cuando llegue una fotografía real.
- `About.tsx` — historia (`content/about.ts`), sección `#nosotros`.
- `MissionVision.tsx` — misión y visión (`content/about.ts`), en tarjetas lado a lado.
- `Menu.tsx` — categorías y platos (`content/menu.ts`), sección `#menu`.
- `Location.tsx` — mapa embebido (Google Maps `output=embed`, sin API key) + botón "Cómo llegar" (`content/restaurant.ts`), sección `#ubicacion`.
- `Contact.tsx` — teléfono (botón `tel:`) + redes sociales, sección `#contacto`.

`Hours` (horarios) y `Gallery` quedan pendientes: horarios porque falta el dato, galería porque no hay fotos todavía.
