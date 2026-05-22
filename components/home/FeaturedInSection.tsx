"use client";

import React from "react";
import Image from "next/image";

import vogueLogo from "../../public/images/featured-in/VOGUE_LOGO.webp";
import goodHomesLogo from "../../public/images/featured-in/good_homes_logo.webp";
import adLogo from "../../public/images/featured-in/AD_Architectural_Digest_Germany_Logo.webp";
import elleDecorLogo from "../../public/images/featured-in/Elle_Decor_logo.webp";
import luxeBookLogo from "../../public/images/featured-in/LuxeBook_Logo.webp";
import indiaTodayLogo from "../../public/images/featured-in/India_Today.webp";

const publications = [
  { name: "Vogue", logo: vogueLogo },
  { name: "GoodHomes", logo: goodHomesLogo },
  { name: "Architectural Digest", logo: adLogo },
  { name: "Elle Decor", logo: elleDecorLogo },
  { name: "LuxeBook", logo: luxeBookLogo },
  { name: "India Today", logo: indiaTodayLogo },
];

export const FeaturedInSection: React.FC = () => {
  return (
    <section className="w-full bg-[#FCFAF6] border-t border-[#E6E2D8] py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Section Heading */}
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-[#1A1A1A] font-light tracking-wide mb-12 text-left">
          Featured In
        </h2>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 md:gap-14 items-center justify-items-center">
          {publications.map((pub, idx) => (
            <div
              key={idx}
              className="relative w-28 md:w-32 h-12 flex items-center justify-center filter grayscale opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={pub.logo}
                alt={pub.name}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 120px, 160px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
