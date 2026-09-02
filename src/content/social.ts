import type { SocialLink } from "@/types";

/**
 * El usuario todavía no ha creado las cuentas de Instagram/TikTok.
 * `url: null` hace que el componente los muestre como "próximamente" en vez
 * de un enlace roto. Cuando existan, solo hay que pegar la URL aquí.
 */
export const social: SocialLink[] = [
  { platform: "instagram", label: "Instagram", url: null },
  { platform: "tiktok", label: "TikTok", url: null },
];
