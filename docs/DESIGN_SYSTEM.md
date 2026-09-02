# Design System

## Material de marca recibido

- **Logo**: `public/brand/logo.png` — óvalo rojo con borde amarillo/dorado, nombre "La Excelencia" en script blanco cursivo con contorno dorado, ícono de cubiertos (cuchara y tenedor) sobre el nombre, subtítulo "Un gusto para tu paladar" en serif itálica blanca, "Est. 2022" en la base.
- **Letreros del local** (fotos de referencia, no archivadas en el repo): fondo rojo, textos en amarillo/blanco con fuente condensada muy bold (estilo Anton/Oswald/Bebas Neue) para nombres de platos y precios, y una fuente redondeada tipo rótulo/marcador para títulos de sección ("Desayunos"). Incluyen también un ícono de llama con un remolino blanco junto al logo.
- Las fotografías de platos de esas imágenes **no se usan todavía** — son solo referencia visual; se reemplazarán por fotos reales más adelante.

## Lectura de identidad

Marca cálida, apetitosa y de confianza — comida casera ecuatoriana (secos, encebollado, desayunos, mariscos). Identidad **vibrante y popular**, no "fine dining". Para conciliarla con el objetivo de un sitio minimalista y elegante: se usa la paleta real de la marca (rojo/dorado) con moderación — mucho espacio en crema/blanco, tipografía condensada bold reservada para títulos/precios/CTAs (no para párrafos), y el rojo como color dominante en vez de decorar cada elemento.

## Color

Los valores no son estimados — se extrajeron programáticamente de los píxeles del logo (`public/brand/logo.png`) y se verificaron con la fórmula de contraste WCAG.

| Token | Hex | Uso | Contraste verificado |
|---|---|---|---|
| `cream` | `#FDFBF6` | Fondo de página | — |
| `charcoal` | `#231C1A` | Texto principal | 16.2:1 sobre `cream` |
| `muted` | `#70645F` | Texto secundario/meta | 5.5:1 sobre `cream`, 5.2:1 sobre fondos con tinte de `charcoal` (AA) |
| `brand-red` | `#E00010` | Color primario (extraído del logo, 54% de píxeles) — CTAs, acentos, enlaces | 5.0:1 sobre blanco (AA) |
| `brand-red-600` | `#B3000D` | Hover/estado activo de rojo | 7.2:1 sobre blanco (AAA) |
| `brand-red-700` | `#8B000A` | Énfasis extra si se necesita | 10.0:1 sobre blanco |
| `brand-gold` | `#F8C000` | Acento secundario (extraído del logo, 14% de píxeles) — badges, subrayados, íconos. **Nunca como texto sobre fondo claro** (1.7:1, no pasa AA) | 12.5:1 con texto oscuro/negro encima |

Definidos como CSS variables en `src/app/globals.css` (`:root` + bloque `@theme`), lo que genera automáticamente utilidades de Tailwind (`bg-brand-red`, `text-charcoal`, etc.). Ningún componente debe usar un hex suelto.

No se implementó modo oscuro automático (`prefers-color-scheme`): la marca tiene una paleta fija y cálida que no tiene un equivalente "oscuro" definido por el usuario; invertir a negro automáticamente rompería la identidad. Si más adelante se quiere modo oscuro, se diseña explícitamente en vez de dejarlo al sistema operativo.

## Tipografía

Dos familias, vía `next/font/google` (auto-hospedadas, sin llamadas externas, sin layout shift):

- **Oswald** (peso 500/600/700) — `--font-display`. Condensada y bold: títulos de sección, precios, botones/CTAs. Es un guiño deliberado a la tipografía bold-condensada de los letreros del local, sin replicar su estilo recargado.
- **Inter** (peso 400/500/600) — `--font-body`. Texto de cuerpo: párrafos, descripciones, datos de contacto. Alta legibilidad, neutra, no compite con Oswald.

El script cursivo del logo ("La Excelencia") **no se replica como fuente de texto** — vive únicamente dentro de la imagen del logo. Usar una tercera familia solo para eso iría contra la regla de no mezclar demasiadas tipografías, y un logotipo manuscrito rara vez tiene un equivalente de sistema fiel.

Aplicado en `src/app/layout.tsx` (declaración de las fuentes) y `src/app/globals.css` (tokens `--font-display` / `--font-body`).

## Componentes base (`src/components/ui/`)

- **`Button`** — variantes `primary` (rojo sólido), `secondary` (contorno, hover rojo) y `ghost` (solo texto). Forma de píldora (`rounded-full`), eco sutil del óvalo del logo. Texto en Oswald, mayúsculas, tracking amplio.
- **`Container`** — ancho máximo (`max-w-6xl`) + padding responsive; envuelve cada sección para mantener márgenes consistentes.
- **`SectionHeading`** — eyebrow opcional (rojo, mayúsculas) + título (Oswald) + descripción opcional (texto muted).
- **`Card`** — tarjeta base (borde + fondo translúcido + sombra suave, ver "Efecto liquid glass" abajo). Usada por el Menú y por Misión/Visión.
- **`SocialLinks`** — íconos de Instagram/TikTok a partir de `SocialLink[]`; no se creó un componente `IconLink` genérico aparte porque este ya cubre el único uso real que existe.

## Efecto "liquid glass"

A pedido del usuario, se aplicó una estética de vidrio esmerilado (translúcido + desenfocado, al estilo del lenguaje visual reciente de Apple) en los elementos flotantes/de superficie del sitio:

- **`Header`** — ahora es una barra flotante (`sticky top-3`) con fondo translúcido y `backdrop-blur-xl`, en vez de una barra fija a todo el ancho.
- **`MobileNav`** — el panel de pantalla completa usa `bg-cream/80 backdrop-blur-2xl`.
- **`Button` (variante `secondary`)** y **`SocialLinks`** (íconos con enlace real) — vidrio translúcido con borde claro.
- **`Location`** — el mapa está enmarcado en un panel de vidrio (`p-2` + `backdrop-blur-xl`).

**Decisión de rendimiento**: `Card` (usado por las ~25 tarjetas del Menú y las 2 de Misión/Visión) usa la *estética* del vidrio (fondo blanco translúcido, borde claro, sombra suave) **sin** `backdrop-filter` real. `backdrop-filter` obliga al navegador a recalcular el desenfoque del contenido detrás de cada elemento en cada frame de scroll — sobre un fondo de color plano (como el `cream` de estas secciones) el resultado visual de desenfocarlo es idéntico a no hacerlo, así que aplicarlo ahí sería puro costo de GPU sin ningún beneficio visual. Se reservó el `backdrop-filter` real para los pocos elementos donde sí hay algo distinto detrás para desenfocar (la barra de navegación y el panel móvil, que flotan sobre el contenido de la página al hacer scroll).

Se verificó visualmente que el desenfoque real funciona (se ve el texto rojo "ALMUERZOS" difuminado detrás del Header al hacer scroll) y que la auditoría de accesibilidad sigue en 0 violaciones tras el cambio.

## Auditoría de accesibilidad (axe-core)

Se corrió axe-core (WCAG 2.0/2.1 A y AA) contra la página real en desktop y con el menú móvil abierto. Encontró y se corrigieron dos problemas reales:

1. **Contraste insuficiente (`color-contrast`)**: el texto `muted` original (`#7A6E69`) medía 4.48:1 sobre el fondo ligeramente teñido de la sección de Ubicación (`bg-charcoal/[0.03]`) — por debajo del mínimo AA de 4.5:1. Se oscureció el token a `#70645F` (ver tabla de arriba), que pasa en todos los fondos donde se usa.
2. **`aria-prohibited-attr`**: los íconos de redes sociales "próximamente" (`SocialLinks.tsx`) usaban `aria-label` en un `<span>` sin rol, que ARIA no permite nombrar. Se corrigió agregando `role="img"`.

Tras corregirlos, la auditoría da **0 violaciones** en ambos estados.

## Verificación visual inicial (Fase 2)

Capturas de pantalla (desktop 1280px y móvil 390px) tomadas contra una página de verificación temporal confirmaron, antes de construir ninguna sección real: contraste legible, botones y grid de paleta responsive, sin overflow horizontal. Esa página se reemplazó en la Fase 3 por el Header/Hero/Footer reales, que reutilizan estos mismos tokens y componentes. La verificación responsive/funcional completa del sitio ya terminado está en la sección "QA — responsive y funcional" de [ARCHITECTURE.md](ARCHITECTURE.md).
