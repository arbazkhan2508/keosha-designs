export interface Product {
  id: string;
  slug: string;
  name: string;
  collection: "Shaadmani" | "Ae Ri Sakhi" | "Ajooba" | "Elysian Doorway" | "Festive Essentials";
  category: "sarees" | "kurta-sets" | "anarkalis" | "shararas" | "co-ords";
  price: number;
  description: string;
  embroideryDetails: string;
  fabric: string;
  color: string;
  images: string[]; // Two images for the hover swap effect
  sizes: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: "keosha_01",
    slug: "ae-ri-sakhi-organza-saree",
    name: "Ae Ri Sakhi Sage Embroidered Saree",
    collection: "Ae Ri Sakhi",
    category: "sarees",
    price: 32500,
    description: "Indulge in understated luxury with this handloom silk organza saree from our premium 'Ae Ri Sakhi' collection. Features delicate botanical scroll embroidery and a hand-finished scalloped border.",
    embroideryDetails: "Delicate silver zardozi combined with hand-sewn ivory pearls and resham embroidery.",
    fabric: "Premium Handloom Silk Organza with Satin Silk Blouse Piece",
    color: "Sage Green",
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=600&h=800",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=600&h=800"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "Custom"]
  },
  {
    id: "keosha_02",
    slug: "shaadmani-chanderi-kurta-set",
    name: "Shaadmani Chanderi Silk Kurta Set",
    collection: "Shaadmani",
    category: "kurta-sets",
    price: 24500,
    description: "An elegant Chanderi silk kurta set paired with tailored pants and a scalloped organza dupatta. Tailored in Lucknow, it represents classic heritage artistry redesigned for modern luxury.",
    embroideryDetails: "Intricate Aari work alongside subtle hand-embellished sequins on the neckline and sleeves.",
    fabric: "Pure Chanderi Silk, Cotton-Silk lining, Sheer Organza Dupatta",
    color: "Dusty Rose Pink",
    images: [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=600&h=800",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=600&h=800"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "Custom"]
  },
  {
    id: "keosha_03",
    slug: "ajooba-ivory-anarkali-set",
    name: "Ajooba Ivory Silk Anarkali Set",
    collection: "Ajooba",
    category: "anarkalis",
    price: 38000,
    description: "A breathtaking ivory floor-length Anarkali set. Built with 24 intricate panels (kalis) that flare dramatically, featuring premium Lucknowi embroidery that shimmers in candlelight.",
    embroideryDetails: "Traditional Gota Patti embroidery highlighted with hand-knotted Zardozi work.",
    fabric: "Chanderi Silk Kurta, Banarasi Weave Dupatta, Raw Silk Trouser",
    color: "Ivory White",
    images: [
      "https://images.unsplash.com/photo-1608748010899-18f300247112?auto=format&fit=crop&q=80&w=600&h=800",
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&q=80&w=600&h=800"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "Custom"]
  },
  {
    id: "keosha_04",
    slug: "elysian-crimson-sharara-set",
    name: "Elysian Crimson Embroidered Sharara",
    collection: "Elysian Doorway",
    category: "shararas",
    price: 29000,
    description: "Make an unforgettable statement in this deep crimson sharara set. Designed with a short peplum kurta and a multi-layered flared sharara, complete with a heavy embroidered dupatta.",
    embroideryDetails: "Fine gold resham work with delicate mirror work detailing along the flares.",
    fabric: "Georgette Silk with Butter Crepe lining for a perfect drape",
    color: "Crimson Red",
    images: [
      "https://images.unsplash.com/photo-1610030469668-93535c17b6b3?auto=format&fit=crop&q=80&w=600&h=800",
      "https://images.unsplash.com/photo-1605001011156-cbf0b0f67a51?auto=format&fit=crop&q=80&w=600&h=800"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "Custom"]
  },
  {
    id: "keosha_05",
    slug: "festive-mustard-silk-saree",
    name: "Golden Ochre Handwoven Silk Saree",
    collection: "Festive Essentials",
    category: "sarees",
    price: 27500,
    description: "A gorgeous, traditional handwoven Banarasi silk saree designed with floral motifs (butas) all over and a heavy zardozi border. Perfect for modern celebrations.",
    embroideryDetails: "Classic handloom zari weave borders with hand-sewn pearl trim finish.",
    fabric: "Pure Banarasi Katan Silk",
    color: "Mustard Gold",
    images: [
      "https://images.unsplash.com/photo-1610030470298-4c8d50451a9f?auto=format&fit=crop&q=80&w=600&h=800",
      "https://images.unsplash.com/photo-1610030470298-4c8d50451a9f?auto=format&fit=crop&q=80&w=600&h=800"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "Custom"]
  },
  {
    id: "keosha_06",
    slug: "elysian-lavender-co-ord",
    name: "Elysian Lavender Silk Tunic Co-ord",
    collection: "Elysian Doorway",
    category: "co-ords",
    price: 19800,
    description: "A minimalist fusion silhouette, featuring a structured asymmetric silk tunic paired with straight-cut pants. Styled with subtle modern hand embroideries for contemporary event wear.",
    embroideryDetails: "Modern hand-sewn beadwork and thread motifs on the collar and cuffs.",
    fabric: "Raw Silk Blend with soft satin lining",
    color: "Lavender Mist",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=600&h=800",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=600&h=800"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "Custom"]
  }
];
