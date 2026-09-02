# components/ui/

Componentes base reutilizables sin conocimiento del dominio "restaurante". Forman el Design System (ver [docs/DESIGN_SYSTEM.md](../../../docs/DESIGN_SYSTEM.md)).

- `Button.tsx` — variantes `primary` / `secondary` / `ghost`. Renderiza `<a>` si recibe `href`, o `<button>` si no.
- `Container.tsx` — envoltorio de ancho máximo + padding responsive, usado en cada sección.
- `SectionHeading.tsx` — título de sección consistente (eyebrow opcional + título + descripción opcional).
- `Card.tsx` — tarjeta base (borde claro + fondo blanco translúcido + sombra suave, estilo "glass" sin `backdrop-filter` por rendimiento — ver docs/DESIGN_SYSTEM.md), usada por el Menú y por Misión/Visión.
- `SocialLinks.tsx` — lista de íconos de redes sociales a partir de `SocialLink[]` (ver `src/types`). Si `url` es `null`, se muestra el ícono atenuado y no clicable ("próximamente") en vez de un enlace roto.
- `ImagePlaceholder.tsx` — el recuadro punteado con ícono de cámara y una etiqueta ("Foto del local — pendiente"). Usado por `Hero`, `Carousel` y `Gallery` mientras no haya fotos reales; centraliza ese estilo en un solo lugar.
- `Carousel.tsx` (`"use client"`) — carrusel genérico: recibe `slides: ReactNode[]` (no sabe si son fotos reales o placeholders), con flechas y puntos en estilo "glass", autoplay cada 5s que se pausa al pasar el mouse/foco y que se desactiva por completo si el visitante tiene activado "reducir movimiento" en su sistema. Usado en el Hero.
- `Gallery.tsx` — grilla estática (sin interactividad, Server Component) de fotos a partir de `GalleryImage[]`; si el array está vacío, rellena con `placeholderCount` tarjetas de `ImagePlaceholder`. Usada en Catering.
