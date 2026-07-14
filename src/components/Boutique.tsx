import Image from "next/image";
import { Shirt, Gem, SprayCan, Gift } from "lucide-react";
import { boutiqueCategories } from "@/data/boutique";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const iconMap = {
  shirt: Shirt,
  gem: Gem,
  spray: SprayCan,
  gift: Gift,
};

export function Boutique() {
  return (
    <section id="boutique" className="bg-boutique-600 bg-dog-pattern-dark py-20 text-white lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="The Boutique"
          title="Shop while you wait"
          description="Curated pet goods picked by our groomers — browse the shelves in-studio during your dog's appointment."
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {boutiqueCategories.map((category) => {
            const Icon = iconMap[category.icon];
            return (
              <div
                key={category.slug}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/15 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.alt}
                    fill
                    loading="lazy"
                    sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 90vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-boutique-600 shadow-sm">
                    <Icon size={17} />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-base font-bold text-white">{category.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">
                    {category.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mx-auto mt-10 max-w-xl text-center text-sm text-white/60">
          In-studio only for now — online ordering is on the way.
        </p>
      </Container>
    </section>
  );
}
