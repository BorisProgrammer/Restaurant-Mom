# content/

Información real del restaurante, tipada contra `src/types/index.ts`. Los componentes de `src/components/` importan estos archivos — nunca hay texto del restaurante escrito directamente en el JSX.

- `menu.ts` — categorías y platos con precio. Agregar un plato = agregar un objeto al array de su categoría; agregar una categoría nueva = agregar un objeto al array `menu`. Ningún componente necesita cambiar.
- `restaurant.ts` — nombre, tagline, teléfono, dirección, enlaces de mapa. La `address` es una aproximación derivada de las coordenadas del enlace de Google Maps proporcionado — pendiente de confirmación exacta.
- `social.ts` — Instagram y TikTok. `url: null` mientras las cuentas no existan (se muestran como "próximamente" en vez de un enlace roto); reemplazar por la URL real cuando exista la cuenta.
- `about.ts` — historia, misión y visión. Redactado junto con el usuario a partir de datos que confirmó (fundado en 2022, restaurante + banquetes/catering/eventos sociales, equipo profesional) — no es texto genérico de plantilla.

Pendiente de contenido real (no implementado todavía, no inventado): horarios de atención.

Cuando en el futuro exista un backend/CMS, cada uno de estos archivos se reemplaza por una función que consulta una API con el mismo tipo de retorno — los componentes no cambian.
