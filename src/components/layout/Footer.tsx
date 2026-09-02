import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { NAV_LINKS } from "@/components/layout/Header";
import { restaurant } from "@/content/restaurant";
import { social } from "@/content/social";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-charcoal/10 bg-cream">
      <Container className="flex flex-col items-center gap-6 py-12 text-center">
        <Image src="/brand/logo.png" alt="La Excelencia" width={130} height={59} quality={70} />

        <p className="max-w-xs text-sm text-muted">Un gusto para tu paladar.</p>

        <div className="flex flex-col items-center gap-1 text-sm text-muted">
          <a
            href={`tel:${restaurant.phone}`}
            className="rounded-sm transition-colors hover:text-brand-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red"
          >
            {restaurant.phoneDisplay}
          </a>
          <span>{restaurant.address}</span>
        </div>

        <SocialLinks links={social} />

        <nav aria-label="Navegación de pie de página">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-sm font-display text-xs font-medium uppercase tracking-wide text-charcoal transition-colors hover:text-brand-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-xs text-muted">
          &copy; {year} La Excelencia. Todos los derechos reservados.
        </p>
      </Container>
    </footer>
  );
}
