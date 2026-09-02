# Mapa del proyecto

Guía rápida de "¿dónde modifico X?". Se irá completando fase a fase — lo que aún no existe está marcado como *(pendiente, fase N)*.

| Quiero modificar... | Dónde |
|---|---|
| El menú (platos, precios, categorías) | `src/content/menu.ts` |
| El teléfono | `src/content/restaurant.ts` (`phone` en formato `tel:`, `phoneDisplay` para mostrar) |
| La dirección / mapa | `src/content/restaurant.ts` (`address`, `mapsUrl`, `mapsEmbedUrl`) — la `address` es aproximada, ver nota en el archivo |
| Instagram / TikTok | `src/content/social.ts` — poner la URL real en `url` cuando existan las cuentas (ahora están en `null`, se muestran como "próximamente") |
| Los horarios | `src/content/hours.ts` *(pendiente — falta que envíes los horarios)* |
| La misión / visión / historia | `src/content/about.ts` |
| Los colores de marca | `src/app/globals.css` (tokens en `:root` / `@theme`) — ver [docs/DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md) |
| La tipografía | `src/app/layout.tsx` (declaración de Oswald/Inter) + `src/app/globals.css` (tokens `--font-display`/`--font-body`) |
| El logo | `public/brand/logo.png` |
| El estilo de los botones (`Button`) | `src/components/ui/Button.tsx` |
| Los enlaces del menú de navegación (Header/Footer/móvil) | `src/components/layout/Header.tsx` (constante `NAV_LINKS`, reutilizada por `Footer` y `MobileNav`) |
| El Header / menú hamburguesa móvil | `src/components/layout/Header.tsx` y `src/components/layout/MobileNav.tsx` |
| El Footer | `src/components/layout/Footer.tsx` |
| El Hero (portada) y su placeholder de foto | `src/components/sections/Hero.tsx` — reemplazar el bloque `role="img"` con `next/image` cuando llegue la foto real |
| La sección de Nosotros / Historia | `src/components/sections/About.tsx` + `src/content/about.ts` |
| La sección de Misión y Visión | `src/components/sections/MissionVision.tsx` + `src/content/about.ts` |
| La sección de Menú | `src/components/sections/Menu.tsx` (presentación) + `src/content/menu.ts` (datos) |
| La sección de Ubicación / el mapa | `src/components/sections/Location.tsx` (presentación) + `src/content/restaurant.ts` (datos) |
| La sección de Contacto / ícono de redes | `src/components/sections/Contact.tsx` + `src/components/ui/SocialLinks.tsx` |
| Agregar una nueva sección a la home | Crear componente en `src/components/sections/`, importarlo en `src/app/page.tsx` |
| El título/descripción SEO, Open Graph, Twitter Card | `src/app/layout.tsx` (constantes `TITLE`/`DESCRIPTION` + `export const metadata`) |
| La imagen que aparece al compartir el sitio (Open Graph) | `public/brand/og-image.png` (1200×630) |
| Los datos del JSON-LD (Schema.org `Restaurant`) para buscadores | `src/lib/schema.ts` |
| El dominio usado en SEO (canonical, sitemap, robots) | Variable de entorno `NEXT_PUBLIC_SITE_URL` — ver [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) |
| `robots.txt` / `sitemap.xml` | `src/app/robots.ts` / `src/app/sitemap.ts` (generados automáticamente por Next.js) |
| El efecto "liquid glass" (vidrio esmerilado) | `Header.tsx`, `MobileNav.tsx`, `Button.tsx` (variante `secondary`), `SocialLinks.tsx`, `Location.tsx` — ver nota de rendimiento en [docs/DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md) antes de agregarlo a elementos que se repiten muchas veces (como las tarjetas del menú) |
| El favicon / ícono de la app | `src/app/icon.png` (pestaña del navegador), `src/app/apple-icon.png` (iOS), `src/app/favicon.ico` — los tres se generaron a partir del logo real, no son el ícono por defecto de Next.js |
| El scroll suave al hacer clic en el menú/botones | `src/app/globals.css` (`scroll-behavior: smooth`) — el espacio que deja debajo del Header flotante se controla con la clase `scroll-mt-32` en cada `<section>` con ancla |

## Estructura general

```
src/
├── app/            → páginas y layout raíz (Next.js App Router)
├── components/
│   ├── layout/     → Header, navegación, Footer
│   ├── sections/   → Hero, Menú, Ubicación, Contacto, etc.
│   └── ui/         → Button, Container y demás piezas base del Design System
├── content/        → datos reales del restaurante (menú, nosotros, contacto, redes)
├── lib/            → funciones auxiliares (JSON-LD, formateo de precios, URL del sitio)
└── types/          → interfaces TypeScript compartidas
```

Regla de oro: **el contenido (`content/`) nunca se escribe a mano dentro de un componente**. Un componente importa sus datos desde `content/`, tipados desde `types/`.

Para el detalle de arquitectura, ver [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md).
