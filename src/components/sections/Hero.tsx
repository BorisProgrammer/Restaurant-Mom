import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section id="inicio" className="scroll-mt-32 py-16 sm:py-20 lg:py-28">
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="order-last flex flex-col items-center gap-6 text-center lg:order-first lg:items-start lg:text-left">
          <span className="rounded-full bg-brand-gold px-3 py-1 font-display text-xs font-medium uppercase tracking-wide text-charcoal">
            Desde 2022
          </span>

          <h1 className="font-display text-5xl font-semibold uppercase leading-[0.95] tracking-wide text-charcoal sm:text-6xl lg:text-7xl">
            La Excelencia
          </h1>

          <p className="max-w-md text-lg text-muted">Un gusto para tu paladar.</p>

          <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <Button href="#menu" variant="primary">
              Ver menú
            </Button>
            <Button href="#ubicacion" variant="secondary">
              Cómo llegar
            </Button>
          </div>
        </div>

        <div
          className="order-first flex aspect-[4/3] w-full flex-col items-center justify-center gap-3 rounded-3xl border-2 border-dashed border-charcoal/20 bg-charcoal/[0.03] text-muted lg:order-last lg:aspect-square"
          role="img"
          aria-label="Espacio reservado para una fotografía del local o de un plato, pendiente de recibir"
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M4 8a2 2 0 0 1 2-2h1.17a2 2 0 0 0 1.66-.89l.34-.5A2 2 0 0 1 10.83 4h2.34a2 2 0 0 1 1.66.89l.34.5a2 2 0 0 0 1.66.89H18a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8Z"
              stroke="currentColor"
              strokeWidth={1.5}
            />
            <circle cx="12" cy="13" r="3.25" stroke="currentColor" strokeWidth={1.5} />
          </svg>
          <p className="px-6 text-center text-sm font-medium">Foto del local — pendiente</p>
        </div>
      </Container>
    </section>
  );
}
