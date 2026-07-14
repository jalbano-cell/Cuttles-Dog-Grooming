import { Heart, Award, Sparkles, Leaf, Wallet, ShoppingBag } from "lucide-react";
import { features } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const iconMap = {
  heart: Heart,
  award: Award,
  sparkles: Sparkles,
  leaf: Leaf,
  wallet: Wallet,
  shoppingBag: ShoppingBag,
};

const badgeStyles = [
  "bg-primary-600 text-white",
  "bg-playful-500 text-white",
  "bg-accent-500 text-white",
  "bg-boutique-500 text-white",
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-white py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why Choose Cuttles"
          title="Trusted care, backed by results"
          description="A calm environment, experienced hands, and honest pricing — everything that makes grooming stress-free for you and your dog."
        />

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-sand-dark bg-sand-dark sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <div key={feature.title} className="group bg-white p-7 transition-colors hover:bg-cream">
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-full transition-transform group-hover:animate-wiggle ${badgeStyles[index % badgeStyles.length]}`}
                >
                  <Icon size={18} />
                </span>
                <h3 className="mt-5 text-lg font-medium text-stone-800">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
