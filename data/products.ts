export interface Product {
  id: string;
  slug: string;
  name: string;
  collection: "Shaadmani" | "Ae Ri Sakhi" | "Ajooba" | "Elysian Doorway" | "Festive Essentials" | "Classic Bedding" | "Downie Furniture" | "Bronze Artistry";
  category: "sarees" | "kurta-sets" | "anarkalis" | "shararas" | "co-ords" | "cushions" | "bedspreads" | "furniture" | "fabrics" | "decor";
  price: number;
  description: string;
  embroideryDetails: string;
  fabric: string;
  color: string;
  images: string[]; // Two images for hover swap effect
  sizes: string[];
  status?: "ready-to-ship" | "sold-out";
}

export const PRODUCTS: Product[] = [
  /* Bed Linen (bedspreads) Items - Matches Bed Linen Screenshot (Image 1) */
  {
    id: "bed_linen_01",
    slug: "classic-quilted-bedspread-khaki",
    name: "Classic Quilted Bedspread - Khaki/Beige",
    collection: "Classic Bedding",
    category: "bedspreads",
    price: 45000,
    description: "Luxurious quilted bedspread with vertical ribbed stitching and hand-finished details.",
    embroideryDetails: "Ribbed stitch embroidery pattern.",
    fabric: "Premium Cotton Velvet",
    color: "Khaki/Beige",
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=600&h=450&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=600&h=450&auto=format&fit=crop"
    ],
    sizes: ["Single", "Double", "King", "Super King"],
    status: "ready-to-ship"
  },
  {
    id: "bed_linen_02",
    slug: "botanical-embroidered-duvet-set",
    name: "Botanical Embroidered Duvet Set",
    collection: "Classic Bedding",
    category: "bedspreads",
    price: 52000,
    description: "Delightful hand-embroidered floral duvet set styled in light pink and sage green accents.",
    embroideryDetails: "Fine resham chain-stitch floral embroidery.",
    fabric: "Pure Handloom Linen",
    color: "Sage Green & Pink",
    images: [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=600&h=450&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=600&h=450&auto=format&fit=crop"
    ],
    sizes: ["Double", "King", "Super King"],
    status: "ready-to-ship"
  },
  {
    id: "bed_linen_03",
    slug: "waffle-weave-peach-quilt",
    name: "Waffle-Weave Peach Quilt",
    collection: "Classic Bedding",
    category: "bedspreads",
    price: 38000,
    description: "Cozy waffle-weave light peach quilt, crafted with a ribbed linen boundary.",
    embroideryDetails: "Sleek contrast stitching borders.",
    fabric: "Organic Waffle Cotton",
    color: "Peach",
    images: [
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=600&h=450&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=600&h=450&auto=format&fit=crop"
    ],
    sizes: ["Single", "Double", "King"],
    status: "ready-to-ship"
  },

  /* Furniture Items - Matches Furniture Screenshot (Image 4) */
  {
    id: "furniture_01",
    slug: "downie-four-seater-sofa",
    name: "Downie Four-Seater Tan Leather Sofa",
    collection: "Downie Furniture",
    category: "furniture",
    price: 185000,
    description: "Clean structured tan leather 4-seater sofa supported by thin black powder-coated legs.",
    embroideryDetails: "Tailored leather double-seam stitching.",
    fabric: "Premium Italian Top-Grain Leather",
    color: "Tan Brown",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=600&h=450&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=600&h=450&auto=format&fit=crop"
    ],
    sizes: ["Standard Four-Seater"],
    status: "ready-to-ship"
  },
  {
    id: "furniture_02",
    slug: "downie-three-seater-sofa",
    name: "Downie Three-Seater Tan Leather Sofa",
    collection: "Downie Furniture",
    category: "furniture",
    price: 145000,
    description: "Elegant tan leather 3-seater sofa, displaying high-grade tailored seams.",
    embroideryDetails: "Tailored leather double-seam stitching.",
    fabric: "Premium Italian Top-Grain Leather",
    color: "Tan Brown",
    images: [
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=600&h=450&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=600&h=450&auto=format&fit=crop"
    ],
    sizes: ["Standard Three-Seater"],
    status: "ready-to-ship"
  },
  {
    id: "furniture_03",
    slug: "downie-loveseat-sofa",
    name: "Downie Loveseat Tan Leather Sofa",
    collection: "Downie Furniture",
    category: "furniture",
    price: 115000,
    description: "Compact two-seater tan leather sofa that matches the classic Downie set.",
    embroideryDetails: "Tailored leather double-seam stitching.",
    fabric: "Premium Italian Top-Grain Leather",
    color: "Tan Brown",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&h=450&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=600&h=450&auto=format&fit=crop"
    ],
    sizes: ["Standard Loveseat"],
    status: "ready-to-ship"
  },

  /* Decor Items - Matches Decor Screenshot (Image 5) */
  {
    id: "decor_01",
    slug: "bronze-tiger-statue-pitcher",
    name: "Bronze Tiger Statue Pitcher",
    collection: "Bronze Artistry",
    category: "decor",
    price: 24000,
    description: "An antique-finished bronze feline/tiger statue serving as a decorative pitcher or vase.",
    embroideryDetails: "Lost-wax hand cast detailing.",
    fabric: "Solid Cast Bronze",
    color: "Bronze Black",
    images: [
      "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=600&h=450&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606744824163-985d376605aa?q=80&w=600&h=450&auto=format&fit=crop"
    ],
    sizes: ["Medium"],
    status: "ready-to-ship"
  },
  {
    id: "decor_02",
    slug: "bronze-ritual-urn-vessel",
    name: "Bronze Ritual Urn Vessel",
    collection: "Bronze Artistry",
    category: "decor",
    price: 28000,
    description: "A tall antique bronze ritual vessel adorned with detailed tribal relief engravings.",
    embroideryDetails: "Fine metal relief engravings.",
    fabric: "Solid Cast Bronze",
    color: "Bronze Black",
    images: [
      "https://images.unsplash.com/photo-1606744824163-985d376605aa?q=80&w=600&h=450&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=600&h=450&auto=format&fit=crop"
    ],
    sizes: ["Large"],
    status: "ready-to-ship"
  },
  {
    id: "decor_03",
    slug: "antique-bronze-drum-table",
    name: "Antique Bronze Drum Table / Stool",
    collection: "Bronze Artistry",
    category: "decor",
    price: 32000,
    description: "A heavy cast bronze drum table, doubling as an antique statement stool. Features intricate patterns.",
    embroideryDetails: "Hand-engraved surface patterns.",
    fabric: "Aged Cast Bronze",
    color: "Aged Bronze",
    images: [
      "https://images.unsplash.com/photo-1581781870027-04212e231e96?q=80&w=600&h=450&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&h=450&auto=format&fit=crop"
    ],
    sizes: ["Standard"],
    status: "sold-out"
  },

  /* Cushions Items */
  {
    id: "cushion_01",
    slug: "embroidered-silk-bug-cushion",
    name: "Embroidered Silk Bug Cushion",
    collection: "Ae Ri Sakhi",
    category: "cushions",
    price: 4500,
    description: "Beautifully embroidered bug cushion on raw silk base from our premium collections.",
    embroideryDetails: "Lucknowi hand-embroidery bugs design.",
    fabric: "Raw Silk",
    color: "Natural White & Green",
    images: [
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?q=80&w=600&h=450&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=600&h=450&auto=format&fit=crop"
    ],
    sizes: ["16x16 inches", "18x18 inches"],
    status: "ready-to-ship"
  },
  {
    id: "cushion_02",
    slug: "solid-crimson-velvet-cushion",
    name: "Solid Crimson Red Velvet Cushion",
    collection: "Ae Ri Sakhi",
    category: "cushions",
    price: 3200,
    description: "Plush solid crimson red velvet cushion to complement heavily embroidered bed linen sets.",
    embroideryDetails: "Double needle border seams.",
    fabric: "Premium Velvet",
    color: "Crimson Red",
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=600&h=450&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?q=80&w=600&h=450&auto=format&fit=crop"
    ],
    sizes: ["12x18 inches", "16x16 inches"],
    status: "ready-to-ship"
  },

  /* Fabrics Items */
  {
    id: "fabric_01",
    slug: "chikankari-embroidered-silk-fabric",
    name: "Chikankari Embroidered Silk Fabric",
    collection: "Ae Ri Sakhi",
    category: "fabrics",
    price: 6500,
    description: "Premium hand-embroidered Lucknowi Chikankari fabric in pure mulberry silk.",
    embroideryDetails: "Lucknowi Chikankari needlework.",
    fabric: "Mulberry Silk",
    color: "Soft Ivory",
    images: [
      "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=600&h=450&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&h=450&auto=format&fit=crop"
    ],
    sizes: ["Per Meter"],
    status: "ready-to-ship"
  },
  {
    id: "fabric_02",
    slug: "jacquard-weave-damask-fabric",
    name: "Jacquard Weave Damask Fabric",
    collection: "Ae Ri Sakhi",
    category: "fabrics",
    price: 5800,
    description: "Ornate damask patterned fabric, jacquard-woven on a fine cotton-silk blend.",
    embroideryDetails: "Self-woven gold thread patterns.",
    fabric: "Cotton-Silk Blend",
    color: "Gold & Cream",
    images: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&h=450&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=600&h=450&auto=format&fit=crop"
    ],
    sizes: ["Per Meter"],
    status: "ready-to-ship"
  },

  /* Original Ethnic Wear Items - For compatibility */
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
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "Custom"],
    status: "ready-to-ship"
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
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "Custom"],
    status: "ready-to-ship"
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
    sizes: ["XS", "S", "M", "L", "XL", "Custom"],
    status: "ready-to-ship"
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
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "Custom"],
    status: "ready-to-ship"
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
    sizes: ["XS", "S", "M", "L", "XL", "Custom"],
    status: "ready-to-ship"
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
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "Custom"],
    status: "ready-to-ship"
  }
];
