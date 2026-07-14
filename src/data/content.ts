export type Feature = {
  title: string;
  description: string;
  icon: "heart" | "award" | "sparkles" | "leaf" | "wallet" | "shoppingBag";
};

export const features: Feature[] = [
  {
    title: "Gentle Handling",
    description:
      "Every dog is handled with patience and calm, low-stress techniques — no rushing, no rough restraint.",
    icon: "heart",
  },
  {
    title: "Experienced Stylists",
    description:
      "Our groomers are trained, certified pet stylists with years of hands-on experience across every breed and coat type.",
    icon: "award",
  },
  {
    title: "Clean, Sanitized Studio",
    description:
      "A modern, hygienic space with sanitized tools and stations for every single appointment.",
    icon: "sparkles",
  },
  {
    title: "Stress-Free Experience",
    description:
      "A quiet, comfortable environment designed to keep anxious pets relaxed from arrival to pickup.",
    icon: "leaf",
  },
  {
    title: "Fair, Transparent Pricing",
    description:
      "Straightforward pricing discussed upfront — no surprises, no hidden add-ons at pickup.",
    icon: "wallet",
  },
  {
    title: "Boutique, Right In-Studio",
    description:
      "Browse bandanas, leashes and spa products while you wait — pick up something new for your dog's next walk.",
    icon: "shoppingBag",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  rating: number;
  source: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Cuttles is the only place my nervous rescue actually gets excited to walk into. They're so patient with her.",
    name: "R. D.",
    rating: 5,
    source: "Google Review",
  },
  {
    quote:
      "Booked a full groom for my Bernedoodle and the attention to detail was excellent — and I picked up a new bandana on the way out.",
    name: "C. F.",
    rating: 5,
    source: "Google Review",
  },
  {
    quote:
      "Friendly staff who really listen to exactly the cut you want. Clean studio, fair pricing, no surprises.",
    name: "N. P.",
    rating: 5,
    source: "Google Review",
  },
  {
    quote:
      "Love that I can grab shampoo and a new collar while they finish up my dog's bath. Great one-stop shop.",
    name: "A. W.",
    rating: 5,
    source: "Google Review",
  },
  {
    quote:
      "Our Shih Tzu came out looking better than ever. Will be our regular spot from now on.",
    name: "J. B.",
    rating: 4,
    source: "Google Review",
  },
];

export type GalleryPair = {
  id: string;
  breed: string;
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
};

export const gallery: GalleryPair[] = [
  {
    id: "01",
    breed: "Goldendoodle",
    before: "/images/gallery-before-01.jpg",
    after: "/images/gallery-after-01.jpg",
    beforeAlt: "Goldendoodle with an overgrown, matted coat before grooming",
    afterAlt: "Goldendoodle with a neat, fluffy trimmed coat after grooming",
  },
  {
    id: "02",
    breed: "Shih Tzu",
    before: "/images/gallery-before-02.jpg",
    after: "/images/gallery-after-02.jpg",
    beforeAlt: "Shih Tzu with a wet, matted coat before grooming",
    afterAlt: "Shih Tzu with a neat, trimmed coat and bow after grooming",
  },
  {
    id: "03",
    breed: "Cockapoo",
    before: "/images/gallery-before-03.jpg",
    after: "/images/gallery-after-03.jpg",
    beforeAlt: "Cockapoo mid-bath, covered in shampoo suds",
    afterAlt: "Cockapoo with a fluffy, rounded breed-standard cut after grooming",
  },
];
