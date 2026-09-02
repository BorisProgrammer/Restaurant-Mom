# Contenido

## Regla general

Toda la información real del restaurante vive en `src/content/*.ts`, tipada según `src/types/index.ts`. Los componentes de `src/components/sections/` solo la importan y la muestran — nunca se escribe un teléfono, precio o dirección directamente en un `.tsx`. Para editar cualquier dato del sitio, este es el único lugar al que hay que venir.

## Archivos

- **`src/content/restaurant.ts`** — nombre, tagline, teléfono (`phone` en formato `tel:`, `phoneDisplay` para mostrar), dirección, enlaces de mapa (`mapsUrl` para "Cómo llegar", `mapsEmbedUrl` para el iframe) y coordenadas. La `address` es una aproximación obtenida por geocodificación inversa de las coordenadas — confirmarla/ajustarla con la dirección exacta que use el restaurante.
- **`src/content/about.ts`** — historia, misión y visión (texto redactado junto con el usuario, no genérico).
- **`src/content/menu.ts`** — categorías (`MenuCategory[]`) y, dentro de cada una, sus platos (`name`, `price`, `description` opcional).
- **`src/content/social.ts`** — Instagram y TikTok. Mientras la cuenta no exista, su `url` es `null` y el ícono se muestra atenuado ("próximamente") en vez de un enlace roto.
- **`src/content/hours.ts`** *(no existe todavía)* — falta que el usuario proporcione los horarios; no se inventan. Cuando lleguen, se crea este archivo siguiendo el mismo patrón que los demás y se agrega una sección `Hours` en `components/sections/`.

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

## Redes sociales

Cuando exista la cuenta de Instagram o TikTok, edita `src/content/social.ts` y reemplaza `url: null` por la URL real, por ejemplo:

```ts
{ platform: "instagram", label: "Instagram", url: "https://instagram.com/laexcelencia" }
```

El ícono pasa automáticamente de "atenuado, no clicable" a un enlace real — no hay que cambiar nada más.
