# types/

Interfaces de TypeScript compartidas, definidas en `index.ts`: `MenuItem`, `MenuCategory`, `SocialLink`, `AboutContent`, `CateringContent`, `HoursEntry`, `GalleryImage`, `RestaurantInfo`. `src/content/*.ts` se tipa contra estas interfaces, y los componentes reciben props tipadas a partir de ellas — así un cambio en la forma de los datos se detecta en tiempo de compilación en todo el proyecto.
