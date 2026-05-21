"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function LegacyPage() {
  return (
    <div className="w-full bg-[#FCFAF6] font-sans pb-20">
      
      {/* Editorial Header Banner */}
      <section className="relative h-[45vh] w-full bg-[#1A1A1A] overflow-hidden flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=1600&h=700"
          alt="Atelier Lucknow"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 text-center px-6">
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#C5A059] font-bold block mb-2">
            Lucknow Atelier
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#FCFAF6] tracking-wide font-light uppercase">
            Our Legacy & Craft
          </h1>
          <div className="w-12 h-px bg-[#C5A059] mx-auto mt-4" />
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 mt-16 space-y-16">
        
        {/* Narrative Section */}
        <section className="space-y-6 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] font-light">
            Founded by Sanskriti Jain
          </h2>
          <p className="text-xs sm:text-sm text-[#7A6F62] leading-relaxed tracking-wider font-light max-w-2xl mx-auto">
            Established in 2021 in Lucknow, India, Keosha Designs was born from Sanskriti Jain's vision to revive the heritage craft of Lucknowi handloom. Combining traditional embroideries with clean, contemporary silhouettes, Keosha bridges the gap between centuries-old artisan traditions and modern cosmopolitan styling.
          </p>
        </section>

        {/* The Craft Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
          <div className="space-y-3 p-4 bg-white border border-[#E6E2D8] text-center">
            <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold font-serif">Chikankari</span>
            <p className="text-xs text-[#7A6F62] leading-relaxed">
              Lucknow's iconic shadow-work embroidery. Our artisans use fine cotton and silk thread on soft fabrics to weave botanical fables.
            </p>
          </div>
          <div className="space-y-3 p-4 bg-white border border-[#E6E2D8] text-center">
            <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold font-serif">Zardozi & Pearl</span>
            <p className="text-xs text-[#7A6F62] leading-relaxed">
              Metal embroidery historically favored by royalty. We incorporate silver wires and hand-sewn ivory pearls for a modern luxury finish.
            </p>
          </div>
          <div className="space-y-3 p-4 bg-white border border-[#E6E2D8] text-center">
            <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold font-serif">Size Inclusivity</span>
            <p className="text-xs text-[#7A6F62] leading-relaxed">
              We reject off-the-rack limitations. Every item is tailor-made to order, supporting sizes XS-6XL and customized measurements.
            </p>
          </div>
        </section>

        {/* Standard Sizing Guide */}
        <section className="space-y-8 pt-10 border-t border-[#E6E2D8]">
          <div className="text-center space-y-2">
            <h3 className="font-serif text-xl sm:text-2xl text-[#1A1A1A] font-light uppercase">
              Standard Sizing Chart
            </h3>
            <p className="text-xs text-[#7A6F62] uppercase tracking-widest">Atelier measurements in inches</p>
          </div>

          <div className="overflow-x-auto border border-[#E6E2D8]">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[#FAF8F5] text-[#1A1A1A] border-b border-[#E6E2D8] uppercase tracking-widest">
                  <th className="p-4 font-semibold">Size</th>
                  <th className="p-4 font-semibold">Bust</th>
                  <th className="p-4 font-semibold">Waist</th>
                  <th className="p-4 font-semibold">Hips</th>
                  <th className="p-4 font-semibold">Shoulder</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E6E2D8]/50 text-[#7A6F62]">
                <tr>
                  <td className="p-4 font-semibold text-[#1A1A1A]">XS</td>
                  <td className="p-4">32"</td>
                  <td className="p-4">26"</td>
                  <td className="p-4">35"</td>
                  <td className="p-4">13.5"</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#1A1A1A]">S</td>
                  <td className="p-4">34"</td>
                  <td className="p-4">28"</td>
                  <td className="p-4">37"</td>
                  <td className="p-4">14"</td>
                </tr>
                <tr className="bg-[#FAF8F5]/30">
                  <td className="p-4 font-semibold text-[#1A1A1A]">M</td>
                  <td className="p-4">36"</td>
                  <td className="p-4">30"</td>
                  <td className="p-4">39"</td>
                  <td className="p-4">14.5"</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#1A1A1A]">L</td>
                  <td className="p-4">38"</td>
                  <td className="p-4">32"</td>
                  <td className="p-4">41"</td>
                  <td className="p-4">15"</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#1A1A1A]">XL</td>
                  <td className="p-4">40"</td>
                  <td className="p-4">34"</td>
                  <td className="p-4">43"</td>
                  <td className="p-4">15.5"</td>
                </tr>
                <tr className="bg-[#FAF8F5]/30">
                  <td className="p-4 font-semibold text-[#1A1A1A]">XXL</td>
                  <td className="p-4">42"</td>
                  <td className="p-4">36"</td>
                  <td className="p-4">45"</td>
                  <td className="p-4">16"</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Custom Measurements Tutorial */}
        <section className="space-y-6 bg-white border border-[#E6E2D8] p-6 sm:p-8 rounded-xs">
          <h3 className="font-serif text-lg text-[#1A1A1A] font-light uppercase">
            How to Custom Size
          </h3>
          <div className="space-y-4 text-xs sm:text-sm text-[#7A6F62] leading-relaxed">
            <p>
              To request a bespoke fit, select the <span className="font-semibold text-[#1A1A1A]">Custom</span> sizing option on any product page. You will be prompted to enter the following measurements:
            </p>
            <ol className="list-decimal pl-5 space-y-2 pl-4">
              <li>
                <span className="font-semibold text-[#1A1A1A]">Bust:</span> Wrap the tape around the fullest part of your chest.
              </li>
              <li>
                <span className="font-semibold text-[#1A1A1A]">Waist:</span> Measure around the natural waistline (above the belly button).
              </li>
              <li>
                <span className="font-semibold text-[#1A1A1A]">Hips:</span> Wrap the tape around the widest part of your hips.
              </li>
              <li>
                <span className="font-semibold text-[#1A1A1A]">Height:</span> Specify your height in feet/inches to ensure accurate draping length for sarees and shararas.
              </li>
            </ol>
            <div className="bg-[#FAF8F5] border border-[#E6E2D8] p-4 text-xs text-[#7A6F62] mt-4">
              <p className="font-semibold text-[#1A1A1A] uppercase tracking-wider mb-1">Need help measuring?</p>
              <p>
                Our lead stylist is available on WhatsApp to guide you via video call. We ensure your bespoke piece is tailored to perfection.
              </p>
              <a
                href="https://wa.me/919528640429"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-xs uppercase tracking-widest text-[#C5A059] font-bold"
              >
                Start WhatsApp consultation &bull; +91 95286 40429
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
