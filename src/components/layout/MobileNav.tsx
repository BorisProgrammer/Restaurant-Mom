"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { NAV_LINKS } from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Abrir menú de navegación"
        aria-expanded={open}
        className="flex h-10 w-10 items-center justify-center rounded-sm text-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M4 7h16M4 12h16M4 17h16"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
          />
        </svg>
      </button>

      {open &&
        createPortal(
          <div className="fixed inset-0 z-50 flex flex-col bg-cream/80 backdrop-blur-2xl backdrop-saturate-150">
            <div className="flex items-center justify-between px-6 py-3">
              <span className="font-display text-sm font-medium uppercase tracking-wide text-charcoal">
                Menú
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Cerrar menú de navegación"
                className="flex h-10 w-10 items-center justify-center rounded-sm text-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <nav
              aria-label="Navegación principal"
              className="flex flex-1 flex-col items-center justify-center gap-8"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-sm font-display text-2xl font-semibold uppercase tracking-wide text-charcoal transition-colors hover:text-brand-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red"
                >
                  {link.label}
                </a>
              ))}
              <Button href="#menu" variant="primary" onClick={() => setOpen(false)}>
                Ver menú
              </Button>
            </nav>
          </div>,
          document.body,
        )}
    </div>
  );
}
