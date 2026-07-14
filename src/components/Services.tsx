"use client";

import Image from "next/image";
import {
  Scissors,
  Droplets,
  Hand,
  Ear,
  Wind,
  Dog,
  Smile,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useBookingModal } from "@/components/BookingModalContext";

const iconMap = {
  scissors: Scissors,
  droplets: Droplets,
  hand: Hand,
  ear: Ear,
  wind: Wind,
  puppy: Dog,
  smile: Smile,
  shield: ShieldCheck,
  sparkles: Scissors,
};

export function Services() {
  const { openBookingModal } = useBookingModal();

  return (
    <section id="services" className="bg-cream py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Our Services"
          title="Grooming services at our studio"
          description="Premium care backed by certified technique — book a single service or a full spa day."
        />

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-sand-dark bg-sand-dark sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div key={service.slug} className="group flex flex-col bg-white">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    loading="lazy"
                    sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 90vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-2 text-primary-600">
                    <Icon size={16} />
                  </div>
                  <h3 className="mt-2 text-base font-medium text-stone-800">{service.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">
                    {service.description}
                  </p>
                  <button
                    type="button"
                    onClick={openBookingModal}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 transition-colors group-hover:text-primary-700"
                  >
                    Book Now
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
