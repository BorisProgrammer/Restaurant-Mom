import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { restaurant } from "@/content/restaurant";
import { social } from "@/content/social";

export function Contact() {
  return (
    <section id="contacto" className="scroll-mt-32 py-16 sm:py-20 lg:py-24">
      <Container className="flex flex-col items-center gap-6 text-center">
        <SectionHeading eyebrow="Hablemos" title="Contacto" />

        <p className="font-display text-2xl font-semibold tracking-wide text-charcoal">
          {restaurant.phoneDisplay}
        </p>

        <Button href={`tel:${restaurant.phone}`} variant="primary">
          Llamar ahora
        </Button>

        <SocialLinks links={social} className="mt-4" />
      </Container>
    </section>
  );
}
