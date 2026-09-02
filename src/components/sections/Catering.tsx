import { Container } from "@/components/ui/Container";
import { Gallery } from "@/components/ui/Gallery";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { catering } from "@/content/catering";
import { cateringGallery } from "@/content/gallery";

export function Catering() {
  return (
    <section id="catering" className="scroll-mt-32 bg-charcoal/[0.03] py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Eventos sociales"
          title="Catering"
          description={catering.description}
        />

        <Gallery
          images={cateringGallery}
          placeholderLabel="Foto de un plato"
          placeholderCount={6}
          className="mt-12"
        />
      </Container>
    </section>
  );
}
