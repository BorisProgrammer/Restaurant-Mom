import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { menu } from "@/content/menu";
import { formatPrice } from "@/lib/format";

export function Menu() {
  return (
    <section id="menu" className="scroll-mt-32 py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Nuestra propuesta"
          title="Menú"
          description="Este es nuestro menú actual — seguimos incorporando nuevos platos, asados y alitas BBQ."
        />

        <div className="mt-12 flex flex-col gap-12">
          {menu.map((category) => (
            <div key={category.id}>
              <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-brand-red">
                {category.name}
              </h3>
              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item) => (
                  <Card
                    key={item.name}
                    className="flex items-center justify-between gap-4"
                  >
                    <span className="text-charcoal">{item.name}</span>
                    <span className="font-display font-semibold text-brand-red">
                      {formatPrice(item.price)}
                    </span>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
