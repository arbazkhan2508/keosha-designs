"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface MegaMenuProps {
  onLinkClick: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ onLinkClick }) => {
  return (
    <div className="absolute top-full left-0 w-full bg-[#FCFAF6] border-y border-[#E6E2D8] shadow-xl py-10 px-12 transition-opacity duration-300 font-sans z-50">
      <div className="max-w-7xl mx-auto grid grid-cols-4 gap-8">
        
        {/* Column 1: Shop by Category */}
        <div className="space-y-4">
          <h4 className="font-serif text-sm uppercase tracking-wider text-[#1A1A1A] font-bold border-b border-[#E6E2D8] pb-2">
            Shop by Category
          </h4>
          <ul className="space-y-2 text-xs uppercase tracking-widest text-[#7A6F62] flex flex-col items-start">
            <li>
              <Link href="/shop" onClick={onLinkClick} className="luxury-link inline-block hover:text-[#C5A059] transition-colors py-0.5">
                All Products
              </Link>
            </li>
            <li>
              <Link href="/shop?category=sarees" onClick={onLinkClick} className="luxury-link inline-block hover:text-[#C5A059] transition-colors py-0.5">
                Sarees
              </Link>
            </li>
            <li>
              <Link href="/shop?category=kurta-sets" onClick={onLinkClick} className="luxury-link inline-block hover:text-[#C5A059] transition-colors py-0.5">
                Kurta Sets
              </Link>
            </li>
            <li>
              <Link href="/shop?category=anarkalis" onClick={onLinkClick} className="luxury-link inline-block hover:text-[#C5A059] transition-colors py-0.5">
                Anarkalis
              </Link>
            </li>
            <li>
              <Link href="/shop?category=shararas" onClick={onLinkClick} className="luxury-link inline-block hover:text-[#C5A059] transition-colors py-0.5">
                Shararas
              </Link>
            </li>
            <li>
              <Link href="/shop?category=co-ords" onClick={onLinkClick} className="luxury-link inline-block hover:text-[#C5A059] transition-colors py-0.5">
                Co-ords & Tunics
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 2: Curated Collections */}
        <div className="space-y-4">
          <h4 className="font-serif text-sm uppercase tracking-wider text-[#1A1A1A] font-bold border-b border-[#E6E2D8] pb-2">
            Atelier Collections
          </h4>
          <ul className="space-y-2 text-xs uppercase tracking-widest text-[#7A6F62] flex flex-col items-start">
            <li>
              <Link href="/shop?collection=Ae+Ri+Sakhi" onClick={onLinkClick} className="luxury-link inline-block hover:text-[#C5A059] transition-colors py-0.5">
                Ae Ri Sakhi <span className="text-[9px] text-[#C5A059] italic ml-1">New</span>
              </Link>
            </li>
            <li>
              <Link href="/shop?collection=Shaadmani" onClick={onLinkClick} className="luxury-link inline-block hover:text-[#C5A059] transition-colors py-0.5">
                Shaadmani Collection
              </Link>
            </li>
            <li>
              <Link href="/shop?collection=Ajooba" onClick={onLinkClick} className="luxury-link inline-block hover:text-[#C5A059] transition-colors py-0.5">
                Ajooba Volume I
              </Link>
            </li>
            <li>
              <Link href="/shop?collection=Elysian+Doorway" onClick={onLinkClick} className="luxury-link inline-block hover:text-[#C5A059] transition-colors py-0.5">
                Elysian Doorway
              </Link>
            </li>
            <li>
              <Link href="/shop?collection=Festive+Essentials" onClick={onLinkClick} className="luxury-link inline-block hover:text-[#C5A059] transition-colors py-0.5">
                Festive Essentials
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Custom Craftsmanship */}
        <div className="space-y-4">
          <h4 className="font-serif text-sm uppercase tracking-wider text-[#1A1A1A] font-bold border-b border-[#E6E2D8] pb-2">
            Atelier Services
          </h4>
          <ul className="space-y-2 text-xs uppercase tracking-widest text-[#7A6F62] flex flex-col items-start">
            <li>
              <Link href="/legacy" onClick={onLinkClick} className="luxury-link inline-block hover:text-[#C5A059] transition-colors py-0.5">
                Bespoke Lucknowi Craft
              </Link>
            </li>
            <li>
              <Link href="/stores" onClick={onLinkClick} className="luxury-link inline-block hover:text-[#C5A059] transition-colors py-0.5">
                Book Studio Fitting
              </Link>
            </li>
            <li>
              <Link href="/stores" onClick={onLinkClick} className="luxury-link inline-block hover:text-[#C5A059] transition-colors py-0.5">
                Size Inclusivity (Up to 6XL)
              </Link>
            </li>
            <li>
              <a href="https://wa.me/919528640429" target="_blank" rel="noopener noreferrer" className="luxury-link inline-block hover:text-[#C5A059] transition-colors py-0.5">
                WhatsApp Consultation
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Featured Promo Panel */}
        <div className="relative border border-[#E6E2D8] p-4 bg-white hover-image-zoom flex flex-col justify-between">
          <div className="relative aspect-video w-full overflow-hidden bg-[#F0EDE6] border border-[#E6E2D8]/50">
            <Image
              src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=400&h=250"
              alt="Atelier Lucknow"
              fill
              className="object-cover"
              sizes="300px"
            />
          </div>
          <div className="mt-3">
            <h5 className="font-serif text-xs uppercase tracking-widest text-[#1A1A1A] font-bold">
              Ae Ri Sakhi Editorial
            </h5>
            <p className="text-[10px] text-[#7A6F62] mt-1 leading-relaxed">
              Explore the embroidery narratives of Lucknowi artisans. Tailored on raw silk, organza and pure cottons.
            </p>
            <Link
              href="/shop?collection=Ae+Ri+Sakhi"
              onClick={onLinkClick}
              className="inline-block mt-3 text-[10px] uppercase tracking-widest font-semibold text-[#C5A059] hover:text-[#1A1A1A] transition-colors"
            >
              Explore Collection →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
