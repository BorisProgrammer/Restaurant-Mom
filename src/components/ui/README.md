# components/ui/

Componentes base reutilizables sin conocimiento del dominio "restaurante". Forman el Design System (ver [docs/DESIGN_SYSTEM.md](../../../docs/DESIGN_SYSTEM.md)).

- `Button.tsx` — variantes `primary` / `secondary` / `ghost`. Renderiza `<a>` si recibe `href`, o `<button>` si no.
- `Container.tsx` — envoltorio de ancho máximo + padding responsive, usado en cada sección.
- `SectionHeading.tsx` — título de sección consistente (eyebrow opcional + título + descripción opcional).
- `Card.tsx` — tarjeta base (borde claro + fondo blanco translúcido + sombra suave, estilo "glass" sin `backdrop-filter` por rendimiento — ver docs/DESIGN_SYSTEM.md), usada por el Menú y por Misión/Visión.
- `SocialLinks.tsx` — lista de íconos de redes sociales a partir de `SocialLink[]` (ver `src/types`). Si `url` es `null`, se muestra el ícono atenuado y no clicable ("próximamente") en vez de un enlace roto.
