# lib/

Funciones auxiliares que no son componentes visuales.

- `format.ts` — `formatPrice(price)` formatea un número como precio (`2.5` → `"$2.50"`). Úsalo siempre en vez de interpolar el número directamente, para que el formato de precios sea consistente en todo el sitio.
- `site.ts` — `SITE_URL`, la URL absoluta del sitio (lee `NEXT_PUBLIC_SITE_URL`, con un placeholder hasta que exista dominio). Úsala en vez de escribir la URL a mano.
- `schema.ts` — `buildRestaurantSchema()` arma el JSON-LD Schema.org `Restaurant` a partir de `content/restaurant.ts` y `content/social.ts`. Se inyecta en `src/app/layout.tsx`.
