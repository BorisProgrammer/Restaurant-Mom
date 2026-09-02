import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { about } from "@/content/about";

export function About() {
  return (
    <section id="nosotros" className="scroll-mt-32 py-16 sm:py-20 lg:py-24">
      <Container className="flex flex-col items-center gap-6 text-center">
        <SectionHeading eyebrow="Quiénes somos" title="Nosotros" />
        <p className="max-w-2xl text-lg text-charcoal">{about.history}</p>
      </Container>
    </section>
  );
}
