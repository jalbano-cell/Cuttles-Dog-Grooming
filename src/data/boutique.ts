export type BoutiqueCategory = {
  slug: string;
  name: string;
  description: string;
  image: string;
  alt: string;
  icon: "shirt" | "gem" | "spray" | "gift";
};

export const boutiqueCategories: BoutiqueCategory[] = [
  {
    slug: "bandanas-bows",
    name: "Bandanas & Bows",
    description:
      "Hand-picked finishing touches — seasonal bandanas, top-knot bows and collar charms to send your dog home looking sharp.",
    image: "/images/boutique-bandanas.jpg",
    alt: "Display of dog bandanas and bows in the boutique",
    icon: "gem",
  },
  {
    slug: "leashes-collars",
    name: "Leashes & Collars",
    description:
      "Durable, good-looking leashes, collars and harnesses in a range of colors and sizes for every breed.",
    image: "/images/boutique-leashes.jpg",
    alt: "Wall display of leashes and collars in the boutique",
    icon: "gift",
  },
  {
    slug: "spa-shampoos",
    name: "Spa Shampoos & Sprays",
    description:
      "The same salon-grade shampoos, conditioners and deodorizing sprays we use in-studio, bottled to take home.",
    image: "/images/boutique-shampoos.jpg",
    alt: "Shelf of grooming shampoo and spray bottles in the boutique",
    icon: "spray",
  },
  {
    slug: "apparel",
    name: "Pet Apparel",
    description:
      "Cozy sweaters, raincoats and seasonal outfits sized and fitted right in the studio before you buy.",
    image: "/images/boutique-apparel.jpg",
    alt: "Rack of dog sweaters and coats in the boutique",
    icon: "shirt",
  },
];
