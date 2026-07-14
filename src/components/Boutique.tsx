import Image from "next/image";
import { boutiqueCategories } from "@/data/boutique";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Boutique() {
  return (
    <section id="boutique" className="bg-boutique-600 py-20 text-white lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="The Boutique"
          title="Shop while you wait"
          description="Curated pet goods picked by our groomers — browse the shelves in-studio during your dog's appointment."
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 divide-y divide-white/15 border-y border-white/15 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
          {boutiqueCategories.map((category) => (
            <div
              key={category.slug}
              className="group flex items-center gap-5 border-l-2 border-transparent py-6 transition-colors hover:border-l-playful-500 hover:bg-white/5 sm:px-8"
            >
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl">
                <Image
                  src={category.image}
                  alt={category.alt}
                  fill
                  loading="lazy"
                  sizes="80px"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div>
                <h3 className="text-base font-medium text-white">{category.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/75">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-xl text-center text-sm text-white/60">
          In-studio only for now — online ordering is on the way.
        </p>
      </Container>
    </section>
  );
}
