# components/layout/

Piezas estructurales que envuelven toda la página, montadas en `src/app/layout.tsx` (aparecen en todas las páginas, no solo en la home).

- `Header.tsx` — logo, navegación de escritorio, botón "Ver menú" y exporta `NAV_LINKS` (los 5 enlaces del sitio) para que `Footer` y `MobileNav` no dupliquen la lista.
- `MobileNav.tsx` (`"use client"`) — botón hamburguesa + panel de pantalla completa. Usa `createPortal` a `document.body`: no lo cambies a un `<div>` anidado normal sin leer la nota en [docs/ARCHITECTURE.md](../../../docs/ARCHITECTURE.md) sobre `backdrop-filter` y *containing blocks*.
- `Footer.tsx` — logo, tagline, teléfono, dirección, redes sociales (`content/restaurant.ts`, `content/social.ts`), mismos enlaces de navegación, copyright con año dinámico. Los horarios se agregan cuando exista `content/hours.ts`.
