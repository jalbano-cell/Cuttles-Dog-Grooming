import Image from "next/image";
import { MapPin, Phone, Clock } from "lucide-react";
import { business } from "@/data/business";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getImage } from "@/data/images";

export function Contact() {
  const exterior = getImage("contact-facility-exterior.jpg");
  const mapSrc = `https://maps.google.com/maps?q=${business.mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="contact" className="bg-cream py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Visit Us"
          title="Find our studio"
          description={`Conveniently located on ${business.address.line1} — walk-ins welcome when space allows, appointments preferred.`}
        />

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="relative aspect-video overflow-hidden border border-sand-dark">
              <Image
                src={`/images/${exterior.filename}`}
                alt={exterior.alt}
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3 border border-sand-dark bg-white p-5">
                <MapPin size={20} className="mt-0.5 shrink-0 text-primary-600" />
                <div>
                  <p className="text-sm font-bold text-stone-800">Address</p>
                  <p className="text-sm text-stone-600">{business.address.full}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 border border-sand-dark bg-white p-5">
                <Phone size={20} className="mt-0.5 shrink-0 text-primary-600" />
                <div>
                  <p className="text-sm font-bold text-stone-800">Phone</p>
                  <a href={business.phoneHref} className="text-sm text-stone-600 hover:text-primary-600">
                    {business.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="border border-sand-dark bg-white p-5">
              <div className="mb-3 flex items-center gap-2">
                <Clock size={18} className="text-primary-600" />
                <p className="text-sm font-bold text-stone-800">Hours</p>
              </div>
              <dl className="grid grid-cols-1 gap-y-1.5 text-sm">
                {business.hours.map((h) => (
                  <div key={h.day} className="flex items-center justify-between border-b border-sand-dark/50 py-1.5 last:border-0">
                    <dt className="text-stone-600">{h.day}</dt>
                    <dd
                      className={
                        h.hours === "Closed" ? "text-stone-400" : "font-medium text-stone-800"
                      }
                    >
                      {h.hours}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="min-h-[320px] overflow-hidden border border-sand-dark lg:min-h-full">
            <iframe
              title="Cuttles Dog Grooming & Boutique location map"
              src={mapSrc}
              className="h-full min-h-[320px] w-full lg:min-h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
