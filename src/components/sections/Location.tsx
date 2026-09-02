import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { restaurant } from "@/content/restaurant";

export function Location() {
  return (
    <section id="ubicacion" className="scroll-mt-32 bg-charcoal/[0.03] py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading eyebrow="Encuéntranos" title="Ubicación" align="left" />

        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="rounded-3xl border border-white/60 bg-white/40 p-2 shadow-lg shadow-charcoal/5 backdrop-blur-xl backdrop-saturate-150">
            <div className="overflow-hidden rounded-2xl">
              <iframe
                src={restaurant.mapsEmbedUrl}
                title={`Mapa de ubicación de ${restaurant.name}`}
                width="100%"
                height="360"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="flex flex-col items-start gap-4">
            <p className="text-lg text-charcoal">{restaurant.address}</p>
            <Button href={restaurant.mapsUrl} variant="primary" target="_blank" rel="noopener noreferrer">
              Cómo llegar
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
