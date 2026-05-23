"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/css";

// Import storefront webp drawings
import delhi from "../../public/images/stores/Delhi.webp";
import delhiDefCol from "../../public/images/stores/Delhi_def_col.webp";
import mumbai from "../../public/images/stores/Mumbai.webp";
import hyderabad from "../../public/images/stores/Hyderabad.webp";

interface Subsection {
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

interface FAQ {
  question: string;
  answer: string;
}

interface Store {
  id: string;
  name: string;
  title: string;
  label: string;
  address: string;
  phone: string;
  email: string;
  directionsUrl: string;
  illustration: any;
  images: string[];
  seoContent: {
    header: string;
    paragraphs: string[];
    subsections: Subsection[];
    faqs: FAQ[];
    footerText: string;
  };
}

const storesData: Store[] = [
  {
    id: "delhi-flagship",
    name: "DELHI (FLAGSHIP STORE, SULTANPUR)",
    label: "DELHI ( FLAGSHIP STORE )",
    title: "Sarita Handa Delhi Flagship Store",
    address: "356/357, 2nd Floor, Sultanpur, MG Road,\nNew Delhi, Delhi - 110030",
    phone: "+91 9560278800 | +91 9555733344",
    email: "retailmgr@saritahanda.com",
    directionsUrl: "https://maps.google.com/?q=Sarita+Handa+Delhi+Flagship+Store+Sultanpur",
    illustration: delhi,
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80"
    ],
    seoContent: {
      header: "SARITA HANDA DELHI FLAGSHIP STORE: A LANDMARK IN LUXURY HOME DÉCOR",
      paragraphs: [
        "Discover the best of global luxury interiors at Sarita Handa's flagship in Sultanpur, Delhi – where handcrafted furniture, designer cushion covers and curated home décor come together in a layered interior experience that carries the distinct signature of Sarita Handa.",
        "Among home décor stores in Delhi and leading luxury furniture stores in Delhi, it is an oasis of quiet luxury, offering artisanal craft, timeless design and inspiration for modern living. Those seeking outdoor furniture in Delhi, Sarita Handa cushions, or exploring the wider home décor Delhi market will find crafted pieces that harmonise with contemporary spaces. The collection spans soft furnishings, décor, wall art and gifting, while Sarita Handa Homes, the brand's bespoke styling service, offers personalised consultations, making it a landmark for luxury home décor stores in Delhi and design-forward living.",
        "Within the store, signature embroidered textiles, premium bedding, handcrafted furniture and sculptural décor come together through thoughtfully styled rooms that reflect modern Indian living. Every category expresses the design intelligence of Sarita Handa Retail Pvt Ltd, offering homeowners a clear vision of how to shape bedrooms, living areas and dining spaces with coherence and distinction. This immersive environment embodies the brand's global perspective, establishing the flagship as a reference point for contemporary interiors in Delhi."
      ],
      subsections: [
        {
          title: "A FLAGSHIP DESIGNED FOR THE MODERN INDIAN HOME",
          paragraphs: [
            "The Delhi flagship is more than a home decor store in Delhi; it is an interior destination where craftsmanship, scale and proportion converge. The interior unfolds as a sequence of lifestyle rooms, bedroom settings layered with quilted bedding and Sarita Handa cushions, living spaces composed with handcrafted furniture, and dining arrangements that reflect the brand's approach to luxury.",
            "Every corner is intentionally styled to demonstrate how textiles, furniture and accessories interact in a real home. The flagship is often described by clients as the best luxury home decor store in Delhi, not only for its curation but for its ability to translate design into a lived experience."
          ]
        },
        {
          title: "THE RETAIL EXPERIENCE",
          paragraphs: [
            "Designed as an urban sanctuary, the Sarita Handa retail furniture store brings together the brand's most iconic categories under one roof:"
          ],
          bullets: [
            "Soft Furnishings: Embroidered cushions, premium bedding, quilts, shams, throws",
            "Luxury Furniture: Sofas, armchairs, benches, ottomans and accent tables",
            "Home Décor Accessories: Sculptural objects, brassware, trays, wall art",
            "Curtains and Drapery: Refined sheers, textured fabrics and bespoke finishes"
          ]
        },
        {
          title: "FURNITURE: CRAFT, COMFORT AND PROPORTION",
          paragraphs: [
            "The furniture section of the Sarita Handa Delhi store presents impeccably built pieces that balance sculptural form with everyday comfort. Crafted from solid wood, premium upholstery and refined materials, the collection brings together contemporary silhouettes and heritage influences.",
            "Whether clients seek bespoke sofas for large living rooms in South Delhi or accent chairs for modern apartments, the flagship's furniture curation offers structure, comfort and a curated design perspective, qualities that distinguish the brand among the leading luxury home décor stores in Delhi."
          ]
        },
        {
          title: "SOFT FURNISHINGS: THE HEART OF SARITA HANDA",
          paragraphs: [
            "Known globally for textile innovation, the brand continues to lead in the world of embroidered and quilted soft furnishings. At the Delhi store, clients can explore:",
          ],
          bullets: [
            "Hand-embroidered cushions",
            "Quilted bedspreads and premium bed linen",
            "Euro shams and decorative pillowcases",
            "Throws and seasonal collections"
          ]
        },
        {
          title: "INTERIOR DESIGN SERVICES FOR LUXURY LIVING",
          paragraphs: [
            "The Delhi flagship brings the Sarita Handa sensibility into clients' homes through dedicated interior design services in Delhi, Sarita Handa Homes—the brand's bespoke styling service. If you admire the same sense of harmony in your own rooms, our stylists assist with spatial planning, textile curation, colour direction and furniture selection, guiding each decision so that a home feels intentional and beautifully aligned.",
            "Whether the brief involves shaping an entire residence or refreshing a single area, the process is collaborative and detail-led. This personalised approach has established the flagship as a trusted address for interior services in Delhi, valued for creating environments that feel crafted, inviting and distinctly reflective of refined living."
          ]
        },
        {
          title: "WHY THE DELHI FLAGSHIP STANDS APART",
          paragraphs: [
            "This flagship represents the seamless transition of the brand's heritage—from Sarita Handa Exports Pvt Ltd to Sarita Handa Retail—ensuring that artisanal craft meets modern Indian living."
          ],
          bullets: [
            "A complete ecosystem of furniture, furnishings and décor",
            "Expert guidance from trained in-store design specialists",
            "The largest showcase of Sarita Handa furniture and textiles in the city",
            "A refined ambience that mirrors the brand's global aesthetic",
            "Proximity to the city's most established home decor stores in Delhi on MG Road"
          ]
        }
      ],
      faqs: [
        {
          question: "What makes the Sarita Handa Delhi flagship unique?",
          answer: "It is the most comprehensive Sarita Handa store in India, offering furniture, soft furnishings, décor and styling services under one roof."
        },
        {
          question: "Do you offer interior design support?",
          answer: "Yes, the store provides personalised interior design services in Delhi, including space planning and textile consultation."
        },
        {
          question: "Are all collections available at the Delhi store?",
          answer: "The flagship houses the widest assortment of cushions, bedding, furniture and décor, representing the brand's latest launches."
        },
        {
          question: "Where is the store located?",
          answer: "The flagship is situated on MG Road, one of the most distinguished retail destinations for luxury home décor stores in Delhi."
        },
        {
          question: "Do you offer home styling appointments?",
          answer: "Yes. Clients may book private styling sessions to explore textiles, furniture combinations and customised home solutions."
        }
      ],
      footerText: "For those who value craftsmanship, material intelligence and refined design, the Sarita Handa retail furniture store on MG Road is an invitation to experience luxury living at its most thoughtful. Visit the flagship to explore the finest in home decor Delhi, curated for homes that seek timeless elegance."
    }
  },
  {
    id: "sarita-handa-now",
    name: "SARITA HANDA NOW, DELHI (SULTANPUR)",
    label: "DELHI ( SARITA HANDA NOW )",
    title: "Sarita Handa Now Delhi Store",
    address: "356/357, Ground Floor, Sultanpur, MG Road,\nNew Delhi, Delhi - 110030",
    phone: "+91 9650278800 | +91 9555733344",
    email: "nowdelhi@saritahanda.com",
    directionsUrl: "https://maps.google.com/?q=Sarita+Handa+Now+Sultanpur",
    illustration: delhi,
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80"
    ],
    seoContent: {
      header: "SARITA HANDA NOW DELHI: A VISION OF CONTEMPORARY LIVING",
      paragraphs: [
        "Experience a contemporary extension of our design philosophy at Sarita Handa Now. Located in Sultanpur, this space is dedicated to modern sensibilities, clean lines, and curated design objects that speak to a new generation of design connoisseurs.",
        "A clean, minimalist approach to premium home furnishings and modular design, the store represents our commitment to design-forward solutions."
      ],
      subsections: [
        {
          title: "A NEW ERA OF COMFORT",
          paragraphs: [
            "Sarita Handa Now represents the future of design. Spanning across a modern architectural layout on the ground floor, it focuses on neutral palates, bold textures, and a fusion of modernism with traditional techniques. Perfect for apartments and urban loft living."
          ]
        },
        {
          title: "CURATED FOR MODERN SPACES",
          paragraphs: [
            "Find our latest contemporary arrivals curated specifically for open layouts:"
          ],
          bullets: [
            "Modular Sofas & Sectionals: High configurability and deep comfort",
            "Monochromatic Soft Furnishings: Sophisticated palettes of sand, clay, and slate",
            "Architectural Lighting: Floor and table lamps that define spaces",
            "Minimalist Linens: Lightweight, textured materials for relaxed luxury"
          ]
        }
      ],
      faqs: [
        {
          question: "How does Sarita Handa Now differ from the flagship store?",
          answer: "While the flagship store highlights heritage craftsmanship and classic luxury, Sarita Handa Now focuses on modern, minimalist designs, modular furniture, and contemporary aesthetics."
        },
        {
          question: "Can I get styling consultations at Sarita Handa Now?",
          answer: "Yes, our team of contemporary designers provides spatial planning and styling support customized for modern, compact layouts."
        }
      ],
      footerText: "Visit Sarita Handa Now at Sultanpur, MG Road to discover a design philosophy shaped for tomorrow's lifestyle, combining clean architecture with comfort."
    }
  },
  {
    id: "delhi-defence-colony",
    name: "DELHI (DEFENCE COLONY)",
    label: "DELHI ( DEFENCE COLONY )",
    title: "Sarita Handa Defence Colony Store",
    address: "D-11, Defence Colony,\nNew Delhi, Delhi - 110024",
    phone: "+91 11 41027800 | +91 9555733344",
    email: "defcol@saritahanda.com",
    directionsUrl: "https://maps.google.com/?q=Sarita+Handa+Defence+Colony",
    illustration: delhiDefCol,
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80"
    ],
    seoContent: {
      header: "SARITA HANDA DEFENCE COLONY: INTUITIVE AND COZY DÉCOR AT THE HEART OF DELHI",
      paragraphs: [
        "Nestled in the prime district of Defence Colony, this showroom brings the comfort of our luxury quilts, pillows, and select furniture pieces to South Delhi. Our boutique layout invites you to explore textile detailing up close, with specialized design consultants to guide your selections.",
        "An elegant neighborhood boutique layout bringing luxury design close to home, our Defence Colony store offers an exclusive and intimate experience."
      ],
      subsections: [
        {
          title: "NEIGHBORHOOD ATELIER EXPERIENCE",
          paragraphs: [
            "Designed to reflect the charming residential streets of Defence Colony, this boutique showroom is set up as a cozy, intimate home. Walk through styled living corners and bed galleries where our heritage quilting technique takes center stage."
          ]
        },
        {
          title: "CUSTOM INTERIORS & BEDDING",
          paragraphs: [
            "Our consultants at Defence Colony specialize in bespoke configurations for high-end residences:"
          ],
          bullets: [
            "Tailored Drapes & Curtains: Complete measurement and styling services",
            "Bespoke Quilts & Coverlets: Hand-embroidered to suit your bedroom themes",
            "Select Accent Furniture: Statement consoles, side chairs, and footstools",
            "Luxury Cushion Bar: Explore hundreds of styles, colors, and textures"
          ]
        }
      ],
      faqs: [
        {
          question: "What is the focus of the Defence Colony store?",
          answer: "This store specializes in custom soft furnishings, luxury bedding, quilts, and select accent furniture in an intimate residential layout."
        },
        {
          question: "Can I request custom drapes and curtain measurements here?",
          answer: "Yes, we offer complete tailored drapes and curtain services, including site measurement and header consultations."
        }
      ],
      footerText: "Experience the convenience of high-end home styling near you. Visit our Defence Colony boutique for a curated, personalized consultation."
    }
  },
  {
    id: "mumbai-bandra",
    name: "MUMBAI (BANDRA)",
    label: "MUMBAI ( BANDRA )",
    title: "Sarita Handa Bandra Store",
    address: "Ground Floor, 36 Turner Road, Bandra West,\nMumbai, Maharashtra - 400050",
    phone: "+91 22 26405500 | +91 9555733344",
    email: "mumbaibandra@saritahanda.com",
    directionsUrl: "https://maps.google.com/?q=Sarita+Handa+Bandra",
    illustration: mumbai,
    images: [
      "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80"
    ],
    seoContent: {
      header: "SARITA HANDA BANDRA: COASTAL ELEGANCE MEETS TEXTILE LUXURY IN MUMBAI",
      paragraphs: [
        "Our Bandra showroom brings the light and breeze of the coast combined with the richness of traditional craftsmanship. Featuring premium upholstery and customized drapery services, this space is tailored to modern apartments and sea-facing homes looking for sophisticated, comfortable aesthetics.",
        "Located on the buzzing design destination of Turner Road, this store showcases clean coastal luxury alongside heritage craft."
      ],
      subsections: [
        {
          title: "A COASTAL RETREAT ON TURNER ROAD",
          paragraphs: [
            "The Bandra West showroom features a light-filled open-plan layout that mirrors Mumbai's coastal energy. Large windows allow natural light to wash over linen curtains, soft linen bedding, and light-stained oak furniture, illustrating a calm and airy lifestyle."
          ]
        },
        {
          title: "SERVICES & OFFERS IN BANDRA",
          paragraphs: [
            "We offer tailored consulting and full-service execution for residential interiors in Mumbai:"
          ],
          bullets: [
            "Drapery Consultations: On-site measurements and custom header styles",
            "Upholstery Selection: High-durability fabrics for tropical climates",
            "Bespoke Bed Linen: Size customization for premium mattresses",
            "Decorative Elements: Fine selection of rugs, mirrors, and metallic accents"
          ]
        }
      ],
      faqs: [
        {
          question: "Do you offer customization for Mumbai apartments?",
          answer: "Yes, we customize our bed linens, curtains, and furniture sizes to fit the unique layouts and dimensions of apartments in Mumbai."
        },
        {
          question: "Where in Bandra is the store located?",
          answer: "We are located on the Ground Floor, 36 Turner Road, Bandra West—a prime design and retail hub."
        }
      ],
      footerText: "Walk into our Bandra West gallery to explore how light, texture, and handcrafted furniture combine to shape a sophisticated coastal home."
    }
  },
  {
    id: "mumbai-mahalaxmi",
    name: "MUMBAI (MAHALAXMI)",
    label: "MUMBAI ( MAHALAXMI )",
    title: "Sarita Handa Mahalaxmi Store",
    address: "Famous Studio Lane, Mahalaxmi,\nMumbai, Maharashtra - 400011",
    phone: "+91 22 24965500 | +91 9555733344",
    email: "mumbaimahalaxmi@saritahanda.com",
    directionsUrl: "https://maps.google.com/?q=Sarita+Handa+Mahalaxmi",
    illustration: mumbai,
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80"
    ],
    seoContent: {
      header: "SARITA HANDA MAHALAXMI: INDUSTRIAL LOFT DESIGN INSPIRED BY HERITAGE",
      paragraphs: [
        "Located in the heritage enclave of Mahalaxmi, this expansive showroom features dramatic double-height ceilings and exposed brick elements, providing the perfect architectural canvas for our grand furniture collections, luxury carpets, and signature textiles.",
        "A majestic industrial gallery space presenting the complete world of Sarita Handa in South Mumbai."
      ],
      subsections: [
        {
          title: "HERITAGE MEETS MODERN INDUSTRIAL STYLE",
          paragraphs: [
            "Housed in the historic industrial area of Mahalaxmi, this gallery is designed to showcase complete furniture groupings—from luxury dining tables to large sectionals. The soaring ceilings allow us to display floor-to-ceiling drapery samples, giving customers a true feel for scale and texture."
          ]
        },
        {
          title: "THE COMPLETE HOME GALLERY",
          paragraphs: [
            "Explore our largest collection of furniture and soft furnishings in South Mumbai:"
          ],
          bullets: [
            "Statement Furniture: Large-scale dining ensembles, statement beds, and sideboards",
            "Grand Drapery Display: Sheers, cottons, silks, and heavy linens in full heights",
            "Artisanal Carpets & Rugs: Hand-tufted, hand-knotted, and flat-weave designs",
            "Specialized Interior Design Desk: Work with our architects to style your home"
          ]
        }
      ],
      faqs: [
        {
          question: "Is parking available at the Mahalaxmi store?",
          answer: "Yes, we offer valet parking for visitors at our Mahalaxmi gallery off Famous Studio Lane."
        },
        {
          question: "Do you have rugs and carpets on display here?",
          answer: "Yes, the Mahalaxmi store houses an extensive collection of premium hand-knotted and hand-woven area rugs."
        }
      ],
      footerText: "Experience architectural scale and textile innovation at our Mahalaxmi store. Visit us to explore complete luxury layouts."
    }
  },
  {
    id: "hyderabad",
    name: "HYDERABAD",
    label: "HYDERABAD",
    title: "Sarita Handa Hyderabad Store",
    address: "Road No. 12, Banjara Hills,\nHyderabad, Telangana - 500034",
    phone: "+91 40 48505500 | +91 9555733344",
    email: "hyderabad@saritahanda.com",
    directionsUrl: "https://maps.google.com/?q=Sarita+Handa+Hyderabad",
    illustration: hyderabad,
    images: [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80"
    ],
    seoContent: {
      header: "SARITA HANDA HYDERABAD: BANJARA HILLS SANCTUARY FOR LUXURY INTERIORS",
      paragraphs: [
        "Nestled in the prestigious Banjara Hills, our Hyderabad store is designed to offer a tranquil interior shopping experience. Spanning two floors, it highlights our signature hand embroidery, luxury bedding, and classical Indian-inspired handcrafted furniture.",
        "A grand two-story design destination in the heart of Hyderabad, paying tribute to rich regional heritage."
      ],
      subsections: [
        {
          title: "THE BANJARA HILLS SHOWROOM",
          paragraphs: [
            "Designed with architectural arches, central courtyards, and warm terracotta tile accents, our Hyderabad store honors traditional Deccan heritage. Each room setup is layered with block prints, detailed thread work, and rich velvet fabrics, offering a feast of texture and design."
          ]
        },
        {
          title: "HANDLOOMS & HERITAGE EMBROIDERY",
          paragraphs: [
            "A unique curation that highlights local artisanal craft blended with global sensibilities:"
          ],
          bullets: [
            "Heritage Quilts: Featuring delicate applique and kantha stitch details",
            "Deccan Furniture Collection: Rosewood and teak wood accents with woven cane",
            "Bespoke Draperies: Custom panel designs, embroidered borders, and sheers",
            "Home Accents Bar: Exquisite brass and stone decor items"
          ]
        }
      ],
      faqs: [
        {
          question: "Where is the Hyderabad showroom located?",
          answer: "Our showroom is located at Road No. 12, Banjara Hills—easily accessible from all prime residential sectors."
        },
        {
          question: "Can I customized fabrics for furniture purchased here?",
          answer: "Yes, we have a custom fabric desk where you can choose from our complete library of signature textiles for any of our furniture frames."
        }
      ],
      footerText: "Experience Deccan grace layered with timeless Indian textile craft. Visit us in Banjara Hills to bring luxury home."
    }
  },
  {
    id: "ahmedabad",
    name: "AHMEDABAD",
    label: "AHMEDABAD",
    title: "Sarita Handa Ahmedabad Store",
    address: "Bodakdev,\nAhmedabad, Gujarat - 380054",
    phone: "+91 79 46005500 | +91 9555733344",
    email: "ahmedabad@saritahanda.com",
    directionsUrl: "https://maps.google.com/?q=Sarita+Handa+Ahmedabad",
    illustration: hyderabad,
    images: [
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=1200&q=80"
    ],
    seoContent: {
      header: "SARITA HANDA AHMEDABAD: RUSTIC TEXTURES MEET ARCHITECTURAL GRACE",
      paragraphs: [
        "Designed to reflect the regional brickwork and arches of Gujarat, this store houses our complete range of furniture, cushions, and curtains. Experience the layering of terracotta palettes, linens, and warm ambient lighting.",
        "A beautiful architectural space bringing luxury soft furnishings and handcrafted wood furniture to Gujarat."
      ],
      subsections: [
        {
          title: "A TRIBUTE TO GUJARATI ARCHITECTURE",
          paragraphs: [
            "The Ahmedabad store in Bodakdev is an ode to local design heritage, featuring exposed plaster, arches, and custom terracotta screens. Inside, the spaces are divided into intimate home vignettes that tell stories of craft, color, and textile history."
          ]
        },
        {
          title: "THE RUSTIC LUXURY COLLECTION",
          paragraphs: [
            "Browse our signature furniture lines and fine detailed linens in Ahmedabad:"
          ],
          bullets: [
            "Teakwood & Cane Furniture: Consoles, study tables, and armchairs",
            "Organic Indigo & Earth-Toned Linens: Rich natural dyes and rustic textures",
            "Handcrafted Bedspreads: Hand-block prints and delicate crewel embroidery",
            "Bespoke Curtain Selection: Tailoring fabrics to local window and door scales"
          ]
        }
      ],
      faqs: [
        {
          question: "Do you provide modular home styling support in Ahmedabad?",
          answer: "Yes, our designers work with local floorplans to curate furniture sizes, layout spacing, and custom soft styling for your rooms."
        },
        {
          question: "Which collections are available in Bodakdev?",
          answer: "The Ahmedabad store showcases our complete catalog of quilts, embroidered cushions, curtains, dining and bedroom furniture sets."
        }
      ],
      footerText: "Walk through our custom terracotta layout in Bodakdev to explore rustic warmth combined with modern refinement."
    }
  }
];

export default function StoresPage() {
  const [activeStoreId, setActiveStoreId] = useState<string>("delhi-flagship");
  const [activeSlide, setActiveSlide] = useState(1);
  const swiperRef = useRef<SwiperType | null>(null);

  // Sync state with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        const matched = storesData.find((s) => s.id === hash);
        if (matched) {
          setActiveStoreId(matched.id);
        }
      }
    };

    handleHashChange(); // initial check
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const activeStore = storesData.find((s) => s.id === activeStoreId) || storesData[0];

  const changeStore = (id: string) => {
    setActiveStoreId(id);
    window.location.hash = id;
    
    // Smooth scroll back to the top of details section
    const detailsSection = document.getElementById("store-details-section");
    if (detailsSection) {
      detailsSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-[#FCFAF6] text-[#1A1A1A] font-sans pb-16">
      {/* 1. Main Sticky Layout Section */}
      <section id="store-details-section" className="w-full grid grid-cols-1 lg:grid-cols-2 relative border-b border-[#E6E2D8]/50">
        
        {/* Left Column - Sticky */}
        <div className="lg:sticky lg:top-[76px] lg:h-[calc(100vh-76px)] bg-[#FCFAF6] flex flex-col justify-center px-6 sm:px-12 lg:px-20 xl:px-24 py-16 lg:py-0">
          
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-bold block mb-4">
            {activeStore.label}
          </span>
          
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-[#1A1A1A] font-light tracking-wide uppercase leading-tight mb-8 max-w-lg">
            {activeStore.title}
          </h1>
          
          <div className="space-y-8 max-w-md">
            {/* Address */}
            <div className="text-xs sm:text-sm text-[#7A6F62] leading-relaxed tracking-wider font-light whitespace-pre-line">
              {activeStore.address}
            </div>

            {/* Phone details */}
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-widest text-[#1A1A1A] font-bold block">
                PHONE NUMBER
              </span>
              <span className="text-xs sm:text-sm text-[#7A6F62] font-light tracking-wider block">
                {activeStore.phone}
              </span>
            </div>

            {/* Email details */}
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-widest text-[#1A1A1A] font-bold block">
                EMAIL ID
              </span>
              <span className="text-xs sm:text-sm text-[#7A6F62] font-light tracking-wider block">
                {activeStore.email}
              </span>
            </div>

            {/* Directions link */}
            <div className="pt-2">
              <a
                href={activeStore.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 uppercase text-xs tracking-[0.25em] font-semibold text-[#1A1A1A] hover:text-[#C5A059] transition-colors py-1 relative luxury-link"
              >
                <span>GET DIRECTIONS</span>
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Scrollable Stack of Images */}
        <div className="flex flex-col">
          {activeStore.images.map((imgUrl, idx) => (
            <div 
              key={idx} 
              className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-square xl:aspect-[4/3] bg-[#FAF8F5] border-b border-[#E6E2D8]/30 overflow-hidden group"
            >
              <Image
                src={imgUrl}
                alt={`${activeStore.title} showroom space ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={idx === 0}
              />
            </div>
          ))}
        </div>

      </section>

      {/* 2. Our Stores Storefront Slider Carousel */}
      <section className="w-full bg-[#FCFAF6] py-16 md:py-24 border-b border-[#E6E2D8]/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-12 lg:gap-16">
            
            {/* Carousel Header & Navigation Controls */}
            <div className="flex flex-col justify-between py-2">
              
              <div className="space-y-6">
                <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-[#1A1A1A] font-light leading-tight tracking-wide">
                  Our Stores
                </h2>
                <p className="max-w-[320px] text-xs sm:text-sm text-[#7A6F62] leading-relaxed font-light tracking-wide">
                  We look forward to welcoming you at a Sarita Handa store. Connect with the store closest to you to arrange a personalised visit and discover our timeless collection.
                </p>
              </div>

              {/* Custom Slide Controls */}
              <div className="flex items-center gap-8 mt-12 lg:mt-0 pb-2">
                {/* Prev Button */}
                <button
                  className="stores-prev-btn group cursor-pointer p-2 flex items-center justify-center border border-[#E6E2D8] hover:border-[#1A1A1A] transition-colors"
                  aria-label="Previous store"
                >
                  <svg
                    className="w-6 h-6 text-[#1A1A1A] transition-transform duration-300 group-hover:-translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                {/* Counter */}
                <div className="text-xs sm:text-sm tracking-[0.1em] text-[#1A1A1A] font-light min-w-[48px] text-center select-none">
                  {activeSlide} / {storesData.length}
                </div>

                {/* Next Button */}
                <button
                  className="stores-next-btn group cursor-pointer p-2 flex items-center justify-center border border-[#E6E2D8] hover:border-[#1A1A1A] transition-colors"
                  aria-label="Next store"
                >
                  <svg
                    className="w-6 h-6 text-[#1A1A1A] transition-transform duration-300 group-hover:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Slider */}
            <div className="min-w-0">
              <Swiper
                modules={[Navigation]}
                navigation={{
                  prevEl: ".stores-prev-btn",
                  nextEl: ".stores-next-btn",
                }}
                loop
                speed={850}
                slidesPerView={1.2}
                spaceBetween={16}
                breakpoints={{
                  480: {
                    slidesPerView: 1.5,
                    spaceBetween: 16,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 2.2,
                    spaceBetween: 24,
                  }
                }}
                allowTouchMove
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                onSlideChange={(swiper) => {
                  setActiveSlide(swiper.realIndex + 1);
                }}
                className="w-full overflow-visible"
              >
                {storesData.map((store) => (
                  <SwiperSlide key={store.id}>
                    <div 
                      onClick={() => changeStore(store.id)}
                      className={`group block w-full cursor-pointer transition-all duration-300 ${
                        activeStoreId === store.id ? "ring-1 ring-[#C5A059]/40" : ""
                      }`}
                    >
                      <div className="relative w-full aspect-square bg-[#FAF8F5] border border-[#E6E2D8]/40 flex flex-col justify-between p-6 sm:p-8 transition-colors duration-500 group-hover:bg-[#F5F2EA]">
                        
                        {/* Storefront Outline Illustration */}
                        <div className="flex-1 flex items-center justify-center">
                          <div className="relative w-[90%] h-[75%] max-h-[200px]">
                            <Image
                              src={store.illustration}
                              alt={store.name}
                              fill
                              className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                              sizes="(max-width: 640px) 100vw, 30vw"
                            />
                          </div>
                        </div>

                        {/* Store Label Arrow Link */}
                        <div className="text-center pt-4">
                          <span className={`inline-flex items-center gap-2 uppercase text-[10px] tracking-[0.2em] font-semibold transition-colors duration-300 ${
                            activeStoreId === store.id ? "text-[#C5A059]" : "text-[#1A1A1A] group-hover:text-[#C5A059]"
                          }`}>
                            {store.id === "delhi-flagship" ? "DELHI FLAGSHIP" : store.id === "sarita-handa-now" ? "SARITA HANDA NOW" : store.id.replace("delhi-", "").replace("mumbai-", "").toUpperCase()}
                            <svg
                              className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </span>
                        </div>

                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Dynamic Editorial Rich SEO Text Column */}
      <section className="w-full bg-[#FCFAF6] pb-24 pt-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 text-left">
          <div className="max-w-[850px] w-full">
            
            {/* Dynamic header title */}
        <h3 className="font-serif text-lg sm:text-xl lg:text-2xl tracking-[0.15em] text-[#1A1A1A] font-light uppercase border-b border-[#E6E2D8] pb-6 mb-8 leading-relaxed">
          {activeStore.seoContent.header}
        </h3>

        {/* Intro Paragraphs */}
        <div className="space-y-6 mb-12">
          {activeStore.seoContent.paragraphs.map((pText, pIdx) => (
            <p key={pIdx} className="text-xs sm:text-sm text-[#7A6F62] leading-relaxed font-light tracking-wide">
              {pText}
            </p>
          ))}
        </div>

        {/* Dynamic Subsections */}
        <div className="space-y-12 mb-16">
          {activeStore.seoContent.subsections.map((sec, idx) => (
            <div key={idx} className="space-y-4">
              <h4 className="font-serif text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#1A1A1A] font-bold">
                {sec.title}
              </h4>
              
              {sec.paragraphs.map((pText, pIdx) => (
                <p key={pIdx} className="text-xs sm:text-sm text-[#7A6F62] leading-relaxed font-light tracking-wide">
                  {pText}
                </p>
              ))}
              
              {sec.bullets && (
                <ul className="pl-4 sm:pl-6 space-y-2 text-xs sm:text-sm text-[#7A6F62] font-light tracking-wide">
                  {sec.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="list-disc leading-relaxed">
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* 4. Frequently Asked Questions (Accurate styling matching screenshot) */}
        {activeStore.seoContent.faqs && activeStore.seoContent.faqs.length > 0 && (
          <div className="border-t border-[#E6E2D8] pt-12 mt-12 space-y-8">
            <h4 className="font-serif text-xs uppercase tracking-[0.25em] text-[#1A1A1A] font-bold mb-6">
              FREQUENTLY ASKED QUESTIONS
            </h4>
            
            <div className="space-y-6">
              {activeStore.seoContent.faqs.map((faq, fIdx) => (
                <div key={fIdx} className="space-y-2.5">
                  <p className="text-xs sm:text-sm font-bold text-[#1A1A1A] leading-relaxed tracking-wide">
                    {fIdx + 1}. {faq.question}
                  </p>
                  <p className="text-xs sm:text-sm text-[#7A6F62] leading-relaxed font-light tracking-wide pl-4 sm:pl-6">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 5. Footer Concluding Block */}
        {activeStore.seoContent.footerText && (
          <p className="border-t border-[#E6E2D8] pt-12 mt-12 text-xs sm:text-sm text-[#7A6F62] leading-relaxed font-light tracking-wide italic">
            {activeStore.seoContent.footerText}
          </p>
        )}

          </div>
        </div>
      </section>
    </div>
  );
}
