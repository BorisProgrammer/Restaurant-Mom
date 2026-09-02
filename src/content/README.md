# content/

Información real del restaurante, tipada contra `src/types/index.ts`. Los componentes de `src/components/` importan estos archivos — nunca hay texto del restaurante escrito directamente en el JSX.

- `menu.ts` — categorías y platos con precio. Agregar un plato = agregar un objeto al array de su categoría; agregar una categoría nueva = agregar un objeto al array `menu`. Ningún componente necesita cambiar.
- `restaurant.ts` — nombre, tagline, teléfono, dirección (confirmada por el usuario), enlaces de mapa.
- `social.ts` — Instagram y TikTok. `url: null` mientras las cuentas no existan (se muestran como "próximamente" en vez de un enlace roto); reemplazar por la URL real cuando exista la cuenta.
- `about.ts` — historia, misión y visión. Redactado junto con el usuario a partir de datos que confirmó (fundado en 2022, restaurante + banquetes/catering/eventos sociales, equipo profesional) — no es texto genérico de plantilla.
- `catering.ts` — descripción del servicio de catering para eventos sociales.
- `hours.ts` — horarios de atención (`HoursEntry[]`). Hoy: lunes a viernes, 08:00–15:00. Para agregar una excepción (feriado, horario especial), agregar otro objeto al array.
- `gallery.ts` — `heroGallery` (fotos del local/equipo para el carrusel del Hero) y `cateringGallery` (fotos de platos para la sección Catering). **Ambos arrays están vacíos a propósito** — todavía no hay fotografías reales. Mientras estén vacíos, los componentes (`Carousel`, `Gallery`) muestran placeholders claramente marcados. Para agregar una foto: subirla a `public/` y agregar `{ src: "/ruta.jpg", alt: "..." }` al array correspondiente — no hay que tocar ningún componente.

Cuando en el futuro exista un backend/CMS, cada uno de estos archivos se reemplaza por una función que consulta una API con el mismo tipo de retorno — los componentes no cambian.
