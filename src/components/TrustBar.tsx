import { Star, MapPin, Users, ShoppingBag } from "lucide-react";
import { business } from "@/data/business";
import { Container } from "@/components/ui/Container";

export function TrustBar() {
  const items = [
    {
      icon: Star,
      label: `${business.rating.value} / 5 on Google`,
      sub: `${business.rating.count}+ reviews`,
    },
    {
      icon: MapPin,
      label: `Local ${business.address.city} Groomer`,
      sub: "Independently owned",
    },
    {
      icon: Users,
      label: "Experienced Pet Care Staff",
      sub: "Certified stylists",
    },
    {
      icon: ShoppingBag,
      label: "In-Studio Boutique",
      sub: "Shop while you wait",
    },
  ];

  const badgeStyles = [
    "bg-primary-600/10 text-primary-600",
    "bg-playful-500/15 text-playful-600",
    "bg-accent-500/15 text-accent-600",
    "bg-boutique-500/15 text-boutique-600",
  ];

  return (
    <section className="border-y border-sand-dark bg-cream py-8">
      <Container className="grid grid-cols-2 divide-sand-dark sm:grid-cols-4 sm:divide-x">
        {items.map((item, index) => (
          <div key={item.label} className="flex items-center gap-3 px-0 sm:px-6 sm:first:pl-0">
            <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${badgeStyles[index % badgeStyles.length]}`}>
              <item.icon size={18} />
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-stone-800">{item.label}</p>
              <p className="truncate text-xs text-stone-500">{item.sub}</p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}
