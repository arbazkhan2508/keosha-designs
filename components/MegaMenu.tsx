"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface MegaMenuProps {
  menuType: "new_in" | "shop";
  onLinkClick: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ menuType, onLinkClick }) => {
  return (
    <div className="absolute top-full left-0 w-full bg-[#FCFAF6] border-y border-[#E6E2D8] shadow-xl py-10 px-8 sm:px-12 xl:px-16 transition-opacity duration-300 font-sans z-50">
      <div className="max-w-[1440px] mx-auto">
        {menuType === "new_in" ? (
          /* NEW IN Mega Menu Layout (Image 1) */
          <div className="flex items-start">
            {/* Left Category List */}
            <div className="w-1/5 pr-8">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A] mb-5">
                ALL NEW
              </h4>
              <ul className="space-y-4 text-xs tracking-widest text-[#7A6F62]">
                <li>
                  <Link
                    href="/shop?category=cushions"
                    onClick={onLinkClick}
                    className="hover:text-[#C5A059] transition-colors"
                  >
                    Cushions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop?category=bedspreads"
                    onClick={onLinkClick}
                    className="hover:text-[#C5A059] transition-colors"
                  >
                    Bedspreads
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop?category=furniture"
                    onClick={onLinkClick}
                    className="hover:text-[#C5A059] transition-colors"
                  >
                    Furniture
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop?category=fabrics"
                    onClick={onLinkClick}
                    className="hover:text-[#C5A059] transition-colors"
                  >
                    Fabrics
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop?category=decor"
                    onClick={onLinkClick}
                    className="hover:text-[#C5A059] transition-colors"
                  >
                    Decor
                  </Link>
                </li>
              </ul>
            </div>

            {/* Vertical Divider */}
            <div className="w-px bg-[#E6E2D8] self-stretch min-h-[220px]" />

            {/* Right Promo Cards Grid */}
            <div className="flex-1 pl-12 grid grid-cols-2 gap-8">
              {/* Cushion Card */}
              <Link
                href="/shop?category=cushions"
                onClick={onLinkClick}
                className="group block"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F0EDE6] border border-[#E6E2D8]/50">
                  <Image
                    src="/images/categories/soft-furnishing.webp"
                    alt="New Cushions"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-102"
                    sizes="(max-width: 1024px) 40vw, 30vw"
                  />
                </div>
                <h5 className="mt-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A] group-hover:text-[#C5A059] transition-colors">
                  NEW CUSHIONS
                </h5>
              </Link>

              {/* Bedspread Card */}
              <Link
                href="/shop?category=bedspreads"
                onClick={onLinkClick}
                className="group block"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F0EDE6] border border-[#E6E2D8]/50">
                  <Image
                    src="/images/collections/CollectionImg1.webp"
                    alt="New Bedspreads"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-102"
                    sizes="(max-width: 1024px) 40vw, 30vw"
                  />
                </div>
                <h5 className="mt-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A] group-hover:text-[#C5A059] transition-colors">
                  NEW BEDSPREADS
                </h5>
              </Link>
            </div>
          </div>
        ) : (
          /* SHOP Mega Menu Layout (Image 2) */
          <div className="grid grid-cols-7 gap-6 text-left">
            {/* Column 1: The Final Few */}
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A] mb-5 min-h-[30px] flex items-start">
                THE FINAL FEW
              </h4>
              <ul className="space-y-3.5 text-[11px] tracking-widest text-[#7A6F62]">
                <li>
                  <Link href="/shop" onClick={onLinkClick} className="hover:text-[#C5A059] transition-colors">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link href="/shop?category=cushions" onClick={onLinkClick} className="hover:text-[#C5A059] transition-colors">
                    Cushions
                  </Link>
                </li>
                <li>
                  <Link href="/shop?category=bedspreads" onClick={onLinkClick} className="hover:text-[#C5A059] transition-colors">
                    Bedspreads
                  </Link>
                </li>
                <li>
                  <Link href="/shop?category=euro" onClick={onLinkClick} className="hover:text-[#C5A059] transition-colors">
                    Euro
                  </Link>
                </li>
                <li>
                  <Link href="/shop?category=decor" onClick={onLinkClick} className="hover:text-[#C5A059] transition-colors">
                    Decor
                  </Link>
                </li>
                <li>
                  <Link href="/shop?category=furniture" onClick={onLinkClick} className="hover:text-[#C5A059] transition-colors">
                    Furniture
                  </Link>
                </li>
                <li>
                  <Link href="/shop?category=fabrics" onClick={onLinkClick} className="hover:text-[#C5A059] transition-colors">
                    Fabrics
                  </Link>
                </li>
                <li>
                  <Link href="/shop?category=gifting" onClick={onLinkClick} className="hover:text-[#C5A059] transition-colors">
                    Gifting
                  </Link>
                </li>
                <li>
                  <Link href="/shop?category=lighting" onClick={onLinkClick} className="hover:text-[#C5A059] transition-colors">
                    Lighting
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Soft Furnishings */}
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A] mb-5 min-h-[30px] flex items-start">
                SOFT FURNISHINGS
              </h4>
              <ul className="space-y-3.5 text-[11px] tracking-widest text-[#7A6F62]">
                <li>
                  <Link href="/shop?category=cushions" onClick={onLinkClick} className="hover:text-[#C5A059] transition-colors">
                    All Cushions
                  </Link>
                </li>
                <li>
                  <Link href="/shop?category=cushions&style=embroidered" onClick={onLinkClick} className="hover:text-[#C5A059] transition-colors">
                    Embroidered
                  </Link>
                </li>
                <li>
                  <Link href="/shop?category=cushions&style=solid" onClick={onLinkClick} className="hover:text-[#C5A059] transition-colors">
                    Solid
                  </Link>
                </li>
                <li>
                  <Link href="/shop?category=cushions&style=printed" onClick={onLinkClick} className="hover:text-[#C5A059] transition-colors">
                    Printed
                  </Link>
                </li>
                <li>
                  <Link href="/shop?category=cushions&style=filler" onClick={onLinkClick} className="hover:text-[#C5A059] transition-colors">
                    Filler
                  </Link>
                </li>
                <li className="pt-2">
                  <Link href="/shop?category=bedspreads" onClick={onLinkClick} className="hover:text-[#C5A059] transition-colors">
                    All Bedspreads
                  </Link>
                </li>
                <li>
                  <Link href="/shop?category=bedspreads&style=quilted" onClick={onLinkClick} className="hover:text-[#C5A059] transition-colors">
                    Quilted Bedspreads
                  </Link>
                </li>
                <li>
                  <Link href="/shop?category=euro-shams" onClick={onLinkClick} className="hover:text-[#C5A059] transition-colors">
                    Euro Shams
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Gifting */}
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A] mb-5 min-h-[30px] flex items-start">
                GIFTING
              </h4>
              <ul className="space-y-3.5 text-[11px] tracking-widest text-[#7A6F62]">
                <li>
                  <Link href="/shop?category=gifting" onClick={onLinkClick} className="hover:text-[#C5A059] transition-colors">
                    All Gifting
                  </Link>
                </li>
                <li>
                  <Link href="/shop?category=gifting&type=clutch" onClick={onLinkClick} className="hover:text-[#C5A059] transition-colors">
                    Clutch
                  </Link>
                </li>
                <li>
                  <Link href="/shop?category=gifting&type=napkin" onClick={onLinkClick} className="hover:text-[#C5A059] transition-colors">
                    Napkin
                  </Link>
                </li>
                <li>
                  <Link href="/shop?category=gifting&type=throw" onClick={onLinkClick} className="hover:text-[#C5A059] transition-colors">
                    Throw
                  </Link>
                </li>
                <li>
                  <Link href="/shop?category=gifting&type=runner" onClick={onLinkClick} className="hover:text-[#C5A059] transition-colors">
                    Runner
                  </Link>
                </li>
                <li>
                  <Link href="/shop?category=gifting&type=decor" onClick={onLinkClick} className="hover:text-[#C5A059] transition-colors">
                    Decor
                  </Link>
                </li>
                <li>
                  <Link href="/shop?category=gifting&type=wallart" onClick={onLinkClick} className="hover:text-[#C5A059] transition-colors">
                    Wallart
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Furniture */}
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A] mb-5 min-h-[30px] flex items-start">
                FURNITURE
              </h4>
              <ul className="space-y-3.5 text-[11px] tracking-widest text-[#7A6F62]">
                <li>
                  <Link href="/shop?category=furniture" onClick={onLinkClick} className="hover:text-[#C5A059] transition-colors">
                    All Furniture
                  </Link>
                </li>
                <li>
                  <Link href="/shop?category=furniture&type=sofas" onClick={onLinkClick} className="hover:text-[#C5A059] transition-colors">
                    Sofas
                  </Link>
                </li>
                <li>
                  <Link href="/shop?category=furniture&type=armchairs" onClick={onLinkClick} className="hover:text-[#C5A059] transition-colors">
                    Armchairs
                  </Link>
                </li>
                <li>
                  <Link href="/shop?category=furniture&type=coffee-tables" onClick={onLinkClick} className="hover:text-[#C5A059] transition-colors">
                    Coffee Tables
                  </Link>
                </li>
                <li>
                  <Link href="/shop?category=furniture&type=side-tables" onClick={onLinkClick} className="hover:text-[#C5A059] transition-colors">
                    Side Tables
                  </Link>
                </li>
                <li>
                  <Link href="/shop?category=furniture&type=consoles" onClick={onLinkClick} className="hover:text-[#C5A059] transition-colors">
                    Consoles & More
                  </Link>
                </li>
                <li>
                  <Link href="/shop?category=furniture&type=bench" onClick={onLinkClick} className="hover:text-[#C5A059] transition-colors">
                    Bench
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 5: Decor */}
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A] mb-5 min-h-[30px] flex items-start">
                DECOR
              </h4>
              <ul className="space-y-3.5 text-[11px] tracking-widest text-[#7A6F62]">
                <li>
                  <Link href="/shop?category=decor" onClick={onLinkClick} className="hover:text-[#C5A059] transition-colors">
                    All Decor
                  </Link>
                </li>
                <li>
                  <Link href="/shop?category=decor&type=vases" onClick={onLinkClick} className="hover:text-[#C5A059] transition-colors">
                    Vases
                  </Link>
                </li>
                <li>
                  <Link href="/shop?category=decor&type=sculpture" onClick={onLinkClick} className="hover:text-[#C5A059] transition-colors">
                    Sculpture
                  </Link>
                </li>
                <li>
                  <Link href="/shop?category=decor&type=candles" onClick={onLinkClick} className="hover:text-[#C5A059] transition-colors">
                    Candles & Stands
                  </Link>
                </li>
                <li>
                  <Link href="/shop?category=decor&type=antique" onClick={onLinkClick} className="hover:text-[#C5A059] transition-colors">
                    Antique
                  </Link>
                </li>
                <li>
                  <Link href="/shop?category=decor&type=lighting" onClick={onLinkClick} className="hover:text-[#C5A059] transition-colors">
                    Lighting
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 6: Fabrics & Table Linen */}
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A] mb-5 min-h-[30px] flex items-start">
                FABRICS
              </h4>
              <ul className="space-y-3.5 text-[11px] tracking-widest text-[#7A6F62] mb-6">
                <li>
                  <Link href="/shop?category=fabrics" onClick={onLinkClick} className="hover:text-[#C5A059] transition-colors">
                    All Fabrics
                  </Link>
                </li>
                <li>
                  <Link href="/shop?category=fabrics&type=embroidered" onClick={onLinkClick} className="hover:text-[#C5A059] transition-colors">
                    Embroidered
                  </Link>
                </li>
                <li>
                  <Link href="/shop?category=fabrics&type=jacquard" onClick={onLinkClick} className="hover:text-[#C5A059] transition-colors">
                    Jacquard
                  </Link>
                </li>
              </ul>

              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A] mb-4 pt-2">
                TABLE LINEN
              </h4>
              <ul className="space-y-3.5 text-[11px] tracking-widest text-[#7A6F62]">
                <li>
                  <Link href="/shop?category=table-linen" onClick={onLinkClick} className="hover:text-[#C5A059] transition-colors">
                    All Table Linen
                  </Link>
                </li>
                <li>
                  <Link href="/shop?category=table-linen&type=runner" onClick={onLinkClick} className="hover:text-[#C5A059] transition-colors">
                    Table Runner
                  </Link>
                </li>
                <li>
                  <Link href="/shop?category=table-linen&type=mats" onClick={onLinkClick} className="hover:text-[#C5A059] transition-colors">
                    Table Mats
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 7: Wall Covering */}
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A] mb-5 min-h-[30px] flex items-start">
                WALL COVERING
              </h4>
              <ul className="space-y-3.5 text-[11px] tracking-widest text-[#7A6F62]">
                {/* Empty column */}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
