import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { about } from "@/content/about";

const blocks = [
  { label: "Misión", text: about.mission },
  { label: "Visión", text: about.vision },
];

export function MissionVision() {
  return (
    <section className="bg-charcoal/[0.03] py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-6 sm:grid-cols-2">
          {blocks.map((block) => (
            <Card key={block.label} className="p-8">
              <span className="block h-1 w-10 rounded-full bg-brand-gold" />
              <h3 className="mt-4 font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
                {block.label}
              </h3>
              <p className="mt-3 text-base text-charcoal sm:text-lg">{block.text}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
