export type Service = {
  slug: string;
  name: string;
  description: string;
  image: string;
  alt: string;
  icon: "scissors" | "droplets" | "hand" | "ear" | "wind" | "puppy" | "smile" | "shield" | "sparkles";
};

export const services: Service[] = [
  {
    slug: "full-grooming",
    name: "Full Grooming",
    description:
      "A complete head-to-tail groom — bath, cut, styling and a boutique finishing touch — tailored to your dog's breed and coat.",
    image: "/images/service-full-grooming.jpg",
    alt: "Freshly groomed fluffy dog wearing a bandana, sitting on a grooming table",
    icon: "scissors",
  },
  {
    slug: "bath-brush",
    name: "Bath & Brush",
    description:
      "A gentle, thorough wash and blow-dry with de-tangling brush-out, leaving coats soft, clean and fresh.",
    image: "/images/service-bath-brush.jpg",
    alt: "Soapy dog getting a bath in a grooming tub",
    icon: "droplets",
  },
  {
    slug: "nail-trimming",
    name: "Nail Trimming",
    description:
      "Careful, low-stress nail trims and filing to keep paws healthy and comfortable between visits.",
    image: "/images/service-nail-trim.jpg",
    alt: "Close-up of a groomer trimming a dog's nails with clippers",
    icon: "hand",
  },
  {
    slug: "ear-cleaning",
    name: "Ear Cleaning",
    description:
      "Gentle ear cleaning to help prevent buildup, irritation and infection — especially for floppy-eared breeds.",
    image: "/images/service-ear-cleaning.jpg",
    alt: "Groomer gently cleaning a dog's ear with a wipe",
    icon: "ear",
  },
  {
    slug: "deshedding",
    name: "De-Shedding Treatment",
    description:
      "A specialized treatment that removes loose undercoat to cut down shedding and keep your home fur-free.",
    image: "/images/service-deshedding.jpg",
    alt: "Groomer de-shedding a dog's coat with a slicker brush",
    icon: "wind",
  },
  {
    slug: "puppy-grooming",
    name: "Puppy's First Groom",
    description:
      "A soft introduction to grooming for puppies — short, positive sessions that build lifelong comfort and trust.",
    image: "/images/service-puppy-grooming.jpg",
    alt: "Groomer combing and trimming a puppy's coat",
    icon: "puppy",
  },
  {
    slug: "teeth-cleaning",
    name: "Teeth Cleaning",
    description:
      "Basic dental hygiene care to help freshen breath and support healthy teeth and gums.",
    image: "/images/service-teeth-cleaning.jpg",
    alt: "Groomer cleaning a dog's teeth with a finger toothbrush",
    icon: "smile",
  },
  {
    slug: "flea-tick-treatment",
    name: "Flea & Tick Treatment",
    description:
      "A soothing treatment bath formulated to help clear fleas and ticks and calm irritated skin.",
    image: "/images/service-flea-tick.jpg",
    alt: "Applying a spot-on flea and tick treatment to a dog's coat",
    icon: "shield",
  },
];
