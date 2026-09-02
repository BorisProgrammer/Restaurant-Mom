import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MobileNav } from "@/components/layout/MobileNav";

export const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Menú", href: "#menu" },
  { label: "Catering", href: "#catering" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "Contacto", href: "#contacto" },
];

export function Header() {
  return (
    <header className="sticky top-3 z-50 sm:top-4">
      <Container>
        <div className="flex items-center justify-between rounded-2xl border border-white/60 bg-cream/70 px-4 py-3 shadow-lg shadow-charcoal/5 backdrop-blur-xl backdrop-saturate-150 sm:px-6">
          <a
            href="#inicio"
            className="shrink-0 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red"
          >
            <Image
              src="/brand/logo.png"
              alt="La Excelencia"
              width={140}
              height={64}
              quality={70}
              priority
            />
          </a>

          <nav aria-label="Navegación principal" className="hidden md:block">
            <ul className="flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="rounded-sm font-display text-sm font-medium uppercase tracking-wide text-charcoal transition-colors hover:text-brand-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden md:block">
            <Button href="#menu" variant="primary">
              Ver menú
            </Button>
          </div>

          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
