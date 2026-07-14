import { AtSign, MapPin, Phone } from "lucide-react";
import { business } from "@/data/business";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="bg-stone-800 pb-28 pt-14 text-white/70 lg:pb-14">
      <Container>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary-600 font-display text-sm italic text-white">
                C
              </span>
              <p className="font-display text-lg font-medium text-white">Cuttles</p>
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              Premium, calm dog grooming and a curated pet boutique in{" "}
              {business.address.city} — trusted by pet parents across the
              region.
            </p>
            <a
              href={business.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white"
            >
              <AtSign size={16} />
              cuttlesdoggrooming
            </a>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-white">Explore</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#boutique" className="hover:text-white">Boutique</a></li>
              <li><a href="#reviews" className="hover:text-white">Reviews</a></li>
              <li><a href="#gallery" className="hover:text-white">Gallery</a></li>
              <li><a href="#about" className="hover:text-white">About</a></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-white">Hours</p>
            <ul className="mt-4 space-y-2 text-sm">
              {business.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4">
                  <span>{h.day.slice(0, 3)}</span>
                  <span className={h.hours === "Closed" ? "text-white/40" : ""}>{h.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-white">Contact</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                {business.address.full}
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                <a href={business.phoneHref} className="hover:text-white">
                  {business.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {business.name}. All rights reserved.</p>
          <p>{business.address.city}, {business.address.region}</p>
        </div>
        <div className="mt-3 text-xs text-white/50">
          <p>
            This is a mock website built for demonstration purposes. Business
            details, reviews and photography are placeholders.
          </p>
        </div>
      </Container>
    </footer>
  );
}
