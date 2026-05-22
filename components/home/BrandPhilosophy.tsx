"use client";

import React from "react";
import Link from "next/link";

export const BrandPhilosophy: React.FC = () => {
  return (
    <section className="w-full bg-[#FAF8F5] py-20 border-t border-[#E6E2D8] px-4 lg:px-6">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="space-y-2">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-bold block">
            Atelier Philosophy
          </span>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-[#1A1A1A] font-light tracking-wide">
            Made-to-Order & Size Inclusive
          </h2>
        </div>
        <div className="py-2">
          <svg className="w-16 h-8 text-[#C5A059] mx-auto opacity-75" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 0 C42 10 30 15 15 15 M50 0 C58 10 70 15 85 15 M50 30 C42 20 30 15 15 15 M50 30 C58 20 70 15 85 15 M50 5 C47 10 47 20 50 25 M50 5 C53 10 53 20 50 25" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" />
            <circle cx="15" cy="15" r="2" fill="currentColor" />
            <circle cx="85" cy="15" r="2" fill="currentColor" />
            <circle cx="50" cy="15" r="3" fill="currentColor" />
          </svg>
        </div>
        <p className="text-sm text-[#7A6F62] leading-relaxed max-w-2xl mx-auto font-light tracking-wider">
          We believe that luxury should fit you flawlessly. Every Keosha garment is handcrafted on a made-to-order basis at our studio in Lucknow. We are proud to offer sizing from XS to 6XL, along with bespoke custom measurements at no additional cost.
        </p>
        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <Link
            href="/legacy"
            className="px-6 py-3 border border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#FCFAF6] text-[#1A1A1A] text-xs md:text-sm uppercase tracking-widest font-medium transition-colors"
          >
            Our Artisanal Process
          </Link>
          <Link
            href="/stores"
            className="px-6 py-3 bg-[#C5A059] hover:bg-[#1A1A1A] text-white text-xs md:text-sm uppercase tracking-widest font-medium transition-colors"
          >
            Book Fitting Appointment
          </Link>
        </div>
      </div>
    </section>
  );
};
