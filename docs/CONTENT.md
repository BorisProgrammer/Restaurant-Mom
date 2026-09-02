# Contenido

## Regla general

Toda la información real del restaurante vive en `src/content/*.ts`, tipada según `src/types/index.ts`. Los componentes de `src/components/sections/` solo la importan y la muestran — nunca se escribe un teléfono, precio o dirección directamente en un `.tsx`. Para editar cualquier dato del sitio, este es el único lugar al que hay que venir.

## Archivos

- **`src/content/restaurant.ts`** — nombre, tagline, teléfono (`phone` en formato `tel:`, `phoneDisplay` para mostrar), dirección (confirmada por el usuario), enlaces de mapa (`mapsUrl` para "Cómo llegar", `mapsEmbedUrl` para el iframe) y coordenadas.
- **`src/content/about.ts`** — historia, misión y visión (texto redactado junto con el usuario, no genérico).
- **`src/content/menu.ts`** — categorías (`MenuCategory[]`) y, dentro de cada una, sus platos (`name`, `price`, `description` opcional).
- **`src/content/social.ts`** — Instagram y TikTok. Mientras la cuenta no exista, su `url` es `null` y el ícono se muestra atenuado ("próximamente") en vez de un enlace roto.
- **`src/content/hours.ts`** — horarios de atención (`HoursEntry[]`), también usados en el JSON-LD para buscadores.
- **`src/content/catering.ts`** — descripción del servicio de catering.
- **`src/content/gallery.ts`** — `heroGallery` (fotos del local/equipo, carrusel del Hero) y `cateringGallery` (fotos de platos, sección Catering). Ambos empiezan vacíos (`[]`) a propósito — sin fotos reales todavía, los componentes muestran placeholders. Ver "Fotos" más abajo.

## Cómo editar

Cada archivo exporta un objeto o array de TypeScript con forma fija (definida en `src/types/index.ts`). Editar el contenido es cambiar los valores — no requiere tocar ningún componente ni saber React. Ejemplo, para agregar un plato nuevo a una categoría existente en `menu.ts`:

```ts
{ name: "Alitas BBQ", price: 4.5 }
```

O para agregar una categoría nueva, agregar un objeto al array `menu`:

```ts
{ id: "asados", name: "Asados", items: [ /* ... */ ] }
```

Guardar el archivo y el sitio se actualiza automáticamente (en desarrollo) o en el siguiente `npm run build` (en producción). No hace falta editar `Menu.tsx` ni ningún otro componente.

## Horarios

Editar `src/content/hours.ts`. Hoy tiene una sola entrada:

```ts
{ day: "Lunes a viernes", open: "08:00", close: "15:00" }
```

Para agregar otro rango (por ejemplo, si abren los sábados), agrega otro objeto al array. El texto de `day` se muestra tal cual en el sitio; si usas un formato reconocible ("Lunes a viernes", "Sábado", "Sábado y domingo") también se traduce automáticamente al JSON-LD que leen los buscadores (`src/lib/schema.ts`) — si usas una redacción distinta, ese archivo puede necesitar un ajuste para reconocerla.

## Fotos (carrusel del Hero y galería de Catering)

Ambos espacios ya están construidos y listos — solo falta la foto real:

1. Coloca el archivo de imagen en `public/` (por ejemplo `public/fotos/local-1.jpg`).
2. Agrega una entrada en `src/content/gallery.ts`, en `heroGallery` (fotos del local/chef, carrusel de la portada) o `cateringGallery` (fotos de platos, sección Catering):

   ```ts
   { src: "/fotos/local-1.jpg", alt: "Fachada del local La Excelencia" }
   ```

3. Guarda — el placeholder correspondiente desaparece automáticamente y se muestra la foto real. No hace falta editar `Hero.tsx`, `Catering.tsx` ni ningún componente.

El `alt` es el texto alternativo (para accesibilidad y SEO) — descríbelo brevemente y en español, como en el ejemplo.

## Redes sociales

Cuando exista la cuenta de Instagram o TikTok, edita `src/content/social.ts` y reemplaza `url: null` por la URL real, por ejemplo:

```ts
{ platform: "instagram", label: "Instagram", url: "https://instagram.com/laexcelencia" }
```

El ícono pasa automáticamente de "atenuado, no clicable" a un enlace real — no hay que cambiar nada más.
