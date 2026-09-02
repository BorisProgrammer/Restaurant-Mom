# Despliegue

> Estado: pendiente de decidir hosting/dominio final con el usuario (ver Fase 0 — "información que necesitas que yo proporcione").

## Recomendación por defecto

Al ser un proyecto Next.js sin backend propio, [Vercel](https://vercel.com) (creadores de Next.js) es la opción con menos fricción: despliegue automático por cada push, HTTPS, CDN y optimización de imágenes incluidos en el plan gratuito.

## Build

```bash
npm run build
npm run start
```

## Variables de entorno

El proyecto no requiere ninguna clave ni secreto para funcionar (el mapa es un iframe embed de Google Maps sin API key).

Una sola variable afecta al SEO:

| Variable | Para qué sirve | Valor actual |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL absoluta del sitio, usada en el canonical, Open Graph, `robots.txt` y `sitemap.xml` (`src/lib/site.ts`) | Sin configurar todavía → usa un placeholder (`https://laexcelencia.example.com`) |

**En cuanto elijas el dominio final** (o tengas la URL `*.vercel.app` de un primer despliegue), configura `NEXT_PUBLIC_SITE_URL` en las variables de entorno del hosting (en Vercel: Project Settings → Environment Variables) — no requiere tocar código. Si en el futuro se necesita alguna otra variable/secreto, se documenta aquí y se usa `.env.local` (nunca commiteado — ya está en `.gitignore`).

## Checklist antes de publicar

- [x] Dirección confirmada por el usuario en `src/content/restaurant.ts` (`address`).
- [x] Horarios cargados en `src/content/hours.ts`.
- [ ] Agregar fotos reales (carrusel del Hero y galería de Catering) en `src/content/gallery.ts` — ver `docs/CONTENT.md`.
- [ ] Poner las URLs reales de Instagram/TikTok en `src/content/social.ts` en cuanto existan las cuentas.
- [ ] Configurar `NEXT_PUBLIC_SITE_URL` con el dominio final (ver arriba).
- [ ] Verificar `git status`/`git log` — este proyecto no se commiteó automáticamente durante el desarrollo (el usuario lo hace manualmente), confirmar que todo lo necesario esté en el repositorio antes de desplegar.
- [ ] Volver a correr Lighthouse una vez agregadas las fotos reales (ver nota de rendimiento en `docs/ARCHITECTURE.md`).
