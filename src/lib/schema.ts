import { business } from "@/data/business";

const siteUrl = "https://cuttlesdoggrooming.ca";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "PetGroomer",
    name: business.name,
    image: `${siteUrl}/images/hero-dog-grooming.jpg`,
    "@id": `${siteUrl}/#business`,
    url: siteUrl,
    telephone: business.phone,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.line1,
      addressLocality: business.address.city,
      addressRegion: business.address.region,
      addressCountry: "CA",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: business.rating.value,
      reviewCount: business.rating.count,
    },
    openingHoursSpecification: business.hours
      .filter((h) => h.hours !== "Closed")
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.day,
        hours: h.hours,
      })),
    sameAs: [business.instagram],
  };
}
