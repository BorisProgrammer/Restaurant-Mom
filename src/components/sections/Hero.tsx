import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Carousel } from "@/components/ui/Carousel";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { heroGallery } from "@/content/gallery";

const PLACEHOLDER_LABELS = ["Foto del local", "Foto del local", "Foto de la chef"];

export function Hero() {
  const slides =
    heroGallery.length > 0
      ? heroGallery.map((image) => (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        ))
      : PLACEHOLDER_LABELS.map((label) => <ImagePlaceholder key={label} label={label} />);

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

        <Carousel
          slides={slides}
          label="Fotos del local y del equipo"
          className="order-first aspect-[4/3] w-full lg:order-last lg:aspect-square"
        />
      </Container>
    </section>
  );
}
