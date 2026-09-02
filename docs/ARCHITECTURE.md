# Arquitectura

## Principio general

```
contenido (content/) → tipos (types/) → lógica (lib/) → componentes (components/) → páginas (app/)
```

El objetivo es que **modificar información nunca implique modificar componentes visuales**, y que el día que exista un backend, solo haya que reemplazar la fuente de datos (`content/*.ts`) manteniendo la misma forma/tipo — sin tocar `components/`.

## Por qué Next.js App Router + Server Components

- La mayoría de las secciones son contenido estático (menú, horarios, ubicación): no necesitan JavaScript en el cliente. Renderizarlas como Server Components reduce el JS enviado al navegador y mejora el rendimiento (Core Web Vitals).
- Solo se usan Client Components (`"use client"`) donde hay interactividad real: el menú de navegación móvil, y un eventual lightbox de galería.
- `next/image` y `next/font` optimizan imágenes y tipografía sin configuración manual.

## Estructura de carpetas

```
src/
├── app/
│   ├── layout.tsx      # <html>, fuentes, metadata global
│   ├── page.tsx         # composición de secciones de la home
│   └── globals.css      # tokens de diseño (colores, etc.) + Tailwind
├── components/
│   ├── layout/           # Header, navegación, Footer
│   ├── sections/          # Hero, About, MissionVision, Menu, Location, Contact, Hours, Gallery
│   └── ui/                # Button, Container, SectionHeading, Card... (Design System)
├── content/               # datos reales del restaurante, tipados
├── lib/                   # helpers (JSON-LD, formato de precios, URL del sitio)
└── types/                 # interfaces TypeScript compartidas
```

## Página única vs. páginas separadas

La primera versión es una sola página (`/`) compuesta por secciones con anchors (`#menu`, `#ubicacion`, `#contacto`), por velocidad y simplicidad. Cada sección es un componente independiente en `components/sections/`, así que si en el futuro el menú necesita su propia ruta (`/menu`), se extrae el componente a `app/menu/page.tsx` sin rehacer nada.

## Camino hacia un futuro backend

Hoy: `components/sections/Menu.tsx` importa `content/menu.ts` (un array en memoria).

Mañana: `content/menu.ts` se reemplaza por una función `async function getMenu()` que llama a una API — mismo tipo de retorno (`MenuCategory[]`), cero cambios en `Menu.tsx`. Ver [FUTURE_ROADMAP.md](FUTURE_ROADMAP.md).

## Overlays de pantalla completa (menú móvil)

`MobileNav` (`src/components/layout/MobileNav.tsx`) renderiza su panel con `createPortal(..., document.body)` en vez de dejarlo anidado dentro de `<Header>`. Motivo concreto: `Header` usa `backdrop-blur` (`backdrop-filter`), y esa propiedad CSS convierte al elemento en el *containing block* de sus descendientes `position: fixed` — un panel `fixed inset-0` anidado ahí no cubre el viewport completo, solo el área del header. Se detectó probando visualmente en móvil (ver Fase 3). Cualquier overlay/modal futuro (lightbox de galería, etc.) debe usar el mismo patrón de portal si puede quedar anidado dentro de un elemento con `backdrop-filter`, `filter` o `transform`.

## QA — responsive y funcional (Fases 6 y 9)

Pasada dedicada, automatizada con Playwright contra el build de producción:

- **8 anchos de pantalla** (375 a 1920px, incluyendo tablet vertical/horizontal): sin overflow horizontal en ninguno; se revisaron visualmente el header, el menú y la sección de ubicación en los tamaños no probados antes (768 y 1024px).
- **Navegación funcional**: los 5 enlaces de ancla (`#inicio`, `#nosotros`, `#menu`, `#ubicacion`, `#contacto`) resuelven a un elemento real; se probó el clic real en cada uno.
- **Enlaces externos**: "Cómo llegar" usa `target="_blank"` + `rel="noopener noreferrer"` (no expone la pestaña de origen — buena práctica de seguridad).
- **Cero errores de consola y cero requests fallidos** (4xx/5xx) durante una navegación completa por el sitio.
- **Accesibilidad**: axe-core sigue en 0 violaciones tras todos los cambios de esta ronda (glass, scroll suave, calidad de imagen).
- Confirmado que el favicon/OG/robots/sitemap siguen respondiendo `200` en el build final.

## Scroll suave a las anclas

`src/app/globals.css` activa `scroll-behavior: smooth` en `<html>`, dentro de `@media (prefers-reduced-motion: no-preference)` — así los enlaces del menú y botones como "Ver menú"/"Cómo llegar" (que apuntan a `#menu`, `#ubicacion`, etc.) se desplazan suavemente en vez de saltar, pero quien configuró su sistema para reducir animaciones no la recibe. Es CSS puro, sin JavaScript. Cada `<section>` con ancla lleva `scroll-mt-32` para que el título no quede tapado por el Header flotante al llegar.

## Rendimiento (auditoría Lighthouse)

Se corrió [Lighthouse](https://developer.chrome.com/docs/lighthouse) (preset desktop) contra el build de producción (`npm run build` + `npm run start`), no contra `npm run dev` — el modo desarrollo incluye herramientas de depuración que distorsionan las métricas.

**Resultado: Performance 100, Accessibility 100, Best Practices 100, SEO 100.**

Antes de optimizar estaba en Performance 92; el ajuste que lo llevó a 100 fue bajar la `quality` de `next/image` a `70` en los dos usos pequeños del logo (Header y Footer, 140×64 y 130×59 px) — a ese tamaño la diferencia de compresión es imperceptible mientras el archivo pesa menos.

**Qué se dejó igual, a propósito, con su motivo:**
- *"Reduce unused JavaScript" (~55 KB)*: son fragmentos del runtime de React/Next.js, no código propio — recortarlos requeriría manipular el framework, con el riesgo de romper algo, por un ahorro marginal.
- *"Use efficient cache lifetimes"*: las peticiones señaladas son a `maps.googleapis.com` (las tiles del mapa embebido) — son cabeceras que pone Google, no algo que este proyecto controle.
- *"Legacy JavaScript" (~13 KB)*: Next.js transpila algunos métodos modernos (`Array.prototype.at`, `Object.hasOwn`, etc.) para mantener compatibilidad con navegadores algo más antiguos. Se podría recortar fijando un `browserslist` más agresivo en `package.json`, pero por ~13 KB no vale el riesgo de dejar fuera a un visitante con un navegador algo desactualizado — no se tocó.

Si en el futuro se agregan fotos reales (Hero, Galería), hay que volver a correr esta misma auditoría — las imágenes son con diferencia lo que más pesa en un sitio de restaurante, y `next/image` ya está configurado correctamente para optimizarlas, pero conviene confirmarlo con datos reales.

## SEO

- **Metadata** (`src/app/layout.tsx`): title con plantilla (`%s | La Excelencia`), description, Open Graph, Twitter Card, `robots`, `alternates.canonical` — todo generado desde dos constantes (`TITLE`, `DESCRIPTION`) para no repetir el texto en cuatro lugares.
- **Imagen de Open Graph** (`public/brand/og-image.png`, 1200×630): generada a partir del logo real sobre el fondo de marca — no es una fotografía inventada, es el mismo asset de marca que ya usa el resto del sitio.
- **`robots.ts` / `sitemap.ts`** (`src/app/`): usan las convenciones de archivo de Next.js (`MetadataRoute.Robots` / `MetadataRoute.Sitemap`) — Next genera `/robots.txt` y `/sitemap.xml` automáticamente, no son archivos estáticos a mano.
- **Dominio** (`src/lib/site.ts`, constante `SITE_URL`): lee `NEXT_PUBLIC_SITE_URL`; si no está configurada usa un placeholder (`https://laexcelencia.example.com`) — pendiente de que el usuario elija el dominio final (ver `docs/DEPLOYMENT.md`).
- **JSON-LD Schema.org `Restaurant`** (`src/lib/schema.ts`, inyectado en `layout.tsx`): construido solo con datos reales de `content/restaurant.ts` y `content/social.ts` (nombre, teléfono, dirección, coordenadas, redes). No incluye `openingHoursSpecification` ni `aggregateRating` porque no hay datos reales para esos campos todavía — se agregan cuando existan, nunca se inventan.
- **Favicon / iconos de app** (`src/app/icon.png`, `apple-icon.png`, `favicon.ico`): generados a partir de los colores y el ícono de marca reales (no es el logo de Next.js/Vercel por defecto que trae `create-next-app`).

## Accesibilidad

Ver la sección "Auditoría de accesibilidad (axe-core)" en [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) para los problemas encontrados y corregidos. Además: jerarquía de encabezados sin saltos (`h1` en el Hero → `h2` por sección → `h3` dentro de Menú/Misión-Visión), estados de foco visibles (`focus-visible:outline`) en todos los enlaces de navegación, y todo ícono decorativo lleva `aria-hidden` con su texto accesible en el elemento contenedor.

## Qué NO hay (a propósito)

- Sin base de datos, sin backend propio, sin autenticación, sin panel admin — ver sección "NO HACER" del brief original y [FUTURE_ROADMAP.md](FUTURE_ROADMAP.md) para cuándo tendría sentido añadirlos.
