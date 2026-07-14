import { Scissors } from "lucide-react";
import { services } from "@/data/services";
import { boutiqueCategories } from "@/data/boutique";

const items = [
  ...services.map((s) => s.name),
  ...boutiqueCategories.map((c) => c.name),
];

export function Ticker() {
  return (
    <div className="overflow-hidden border-y border-sand-dark bg-primary-600 py-3">
      <div className="flex w-max animate-marquee items-center hover:[animation-play-state:paused]">
        {[0, 1].map((rep) => (
          <div key={rep} className="flex shrink-0 items-center">
            {items.map((item, i) => (
              <span key={`${rep}-${i}`} className="flex items-center gap-3 px-6 text-sm font-medium text-white">
                {item}
                <Scissors size={12} className="text-white/50" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
