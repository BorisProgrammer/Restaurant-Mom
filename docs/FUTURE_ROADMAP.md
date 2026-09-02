# Roadmap futuro

## Estado actual

**Completado:** configuración del proyecto, identidad visual (paleta y tipografía extraídas del logo real), Header/Hero/Footer, contenido (Nosotros, Misión, Visión, Menú, Ubicación con mapa, Contacto, redes sociales), SEO (metadata, Open Graph, JSON-LD, sitemap/robots, favicon real), accesibilidad auditada (axe-core, 0 violaciones), efecto visual "liquid glass", scroll suave, rendimiento auditado con Lighthouse (Performance/Accessibility/Best Practices/SEO en 100), y una pasada de pruebas responsive/funcional en 8 anchos de pantalla.

**Pendiente por falta de datos (no por falta de tiempo):**
- **Horarios de atención** — falta que el usuario los proporcione. Cuando lleguen: crear `src/content/hours.ts` y una sección `Hours` en `components/sections/`.
- **Galería de fotos** — falta que el usuario envíe fotografías reales del local/platos. Mientras tanto el Hero usa un placeholder claramente marcado ("Foto del local — pendiente") en vez de una imagen inventada.

**No implementado, a propósito** (ver más abajo): CMS, reservas, pedidos, panel administrativo, base de datos, estadísticas.

---

La v1 es un sitio estático (sin base de datos, sin backend, sin autenticación, sin panel admin) a propósito — ver el brief original, sección "NO HACER". La arquitectura (`content/` separado de `components/`, tipos compartidos en `types/`) está pensada para que estas fases futuras no requieran reconstruir el frontend.

## Fase futura 1 — CMS

Administrar menú, precios, fotografías y horarios desde un panel, en vez de editar `src/content/*.ts` a mano. Los componentes de `sections/` no cambiarían: solo cambiaría de dónde vienen los datos (de un archivo local a una API).

## Fase futura 2 — Sistema de reservas

Requiere backend + persistencia (o un servicio externo tipo formulario/reservas gestionado). A evaluar cuando surja la necesidad real.

## Fase futura 3 — Pedidos online

Requiere backend, gestión de estado de pedidos y probablemente pagos. Fase de mayor complejidad — no se diseña hasta que las anteriores estén resueltas.

## Fase futura 4 — Panel administrativo

Requiere autenticación. Se construiría sobre la misma base de Next.js, como rutas adicionales (`/admin`), sin afectar el sitio público.

## Fase futura 5 — Base de datos

Backing store para el CMS/reservas/pedidos (p. ej. PostgreSQL). `content/menu.ts` pasaría de ser un archivo estático a una función que consulta la base de datos, manteniendo el mismo tipo de retorno.

## Fase futura 6 — Estadísticas

Analítica de uso del sitio y/o de pedidos/reservas, una vez existan esos sistemas.

---

Ninguna de estas fases se implementa ahora. Se documentan aquí para que una decisión futura de "agregar X" empiece por leer este archivo, no por rediseñar el sitio desde cero.
