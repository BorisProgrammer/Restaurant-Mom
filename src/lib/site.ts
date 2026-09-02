/**
 * Dominio final pendiente de decisión (ver docs/DEPLOYMENT.md). Se usa para
 * URLs absolutas en SEO (canonical, Open Graph, sitemap, robots).
 * Configúralo en producción con la variable de entorno NEXT_PUBLIC_SITE_URL
 * en cuanto elijas el dominio — no requiere tocar código.
 */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://laexcelencia.example.com";
