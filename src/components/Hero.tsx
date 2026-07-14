"use client";

import Image from "next/image";
import { Phone, CalendarCheck, MapPin, ShieldCheck } from "lucide-react";
import { business } from "@/data/business";
import { Container } from "@/components/ui/Container";
import { StarRating } from "@/components/ui/StarRating";
import { getImage } from "@/data/images";
import { useBookingModal } from "@/components/BookingModalContext";

export function Hero() {
  const heroImage = getImage("hero-dog-grooming.jpg");
  const { openBookingModal } = useBookingModal();

  return (
    <section id="top" className="bg-white pb-16 pt-14 sm:pt-20 lg:pb-24 lg:pt-24">
      <Container className="grid items-center gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div className="animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 border border-sand-dark px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-stone-600">
            <MapPin size={14} className="text-primary-600" />
            {business.address.city}&rsquo;s dog grooming studio &amp; boutique
          </div>

          <h1 className="text-4xl font-medium leading-[1.1] tracking-tight text-stone-800 sm:text-5xl lg:text-[3.4rem]">
            Grooming and goods for the{" "}
            <span className="font-display italic text-primary-600">good dog</span>{" "}
            in your life.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-600">
            Calm, careful grooming from certified stylists, plus a boutique of
            bandanas, leashes and spa products to take home. Book your dog&rsquo;s
            next visit at our {business.address.city} studio.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={openBookingModal}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary-600 px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-all hover:bg-primary-700"
            >
              <CalendarCheck size={18} />
              Book Appointment
            </button>
            <a
              href={business.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-stone-800/15 px-7 py-3.5 text-base font-semibold text-stone-800 transition-all hover:border-primary-600 hover:text-primary-600"
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-sand-dark pt-6">
            <div className="flex items-center gap-2.5">
              <StarRating rating={business.rating.value} />
              <span className="text-sm font-semibold text-stone-800">
                {business.rating.value}
                <span className="font-normal text-stone-600">
                  {" "}
                  ({business.rating.count}+ Google reviews)
                </span>
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-stone-600">
              <ShieldCheck size={16} className="text-primary-600" />
              Certified, Experienced Stylists
            </div>
          </div>
        </div>

        <div className="animate-fade-up [animation-delay:150ms]">
          <div className="relative aspect-[4/5] overflow-hidden border border-sand-dark">
            <Image
              src={`/images/${heroImage.filename}`}
              alt={heroImage.alt}
              fill
              priority
              sizes="(min-width: 1024px) 480px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-sand-dark pt-4 text-sm">
            <span className="font-medium text-stone-600">
              {`Serving ${business.address.city} & Halton Region`}
            </span>
            <span className="font-display italic text-primary-600">Est. local &amp; independent</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
