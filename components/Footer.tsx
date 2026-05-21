"use client";

import React, { useState } from "react";
import Link from "next/link";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#FAF8F5] border-t border-[#E6E2D8] pt-16 pb-8 px-6 lg:px-12 text-sm font-sans text-[#7A6F62]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Column 1: Brand Info */}
        <div className="space-y-4">
          <Link href="/">
            <h3 className="font-serif text-lg tracking-[0.2em] font-light text-[#1A1A1A]">
              KEOSHA
            </h3>
            <span className="block text-[8px] uppercase tracking-[0.4em] text-[#7A6F62] -mt-1 font-semibold">
              designs
            </span>
          </Link>
          <p className="text-xs leading-relaxed text-[#7A6F62]">
            Keosha is an online luxury fashion brand based in Lucknow, India, founded in 2021 by Sanskriti Jain. We specialize in contemporary interpretations of traditional Indianwear, crafted with intricate embroideries.
          </p>
          <div className="text-xs space-y-1 font-medium text-[#1A1A1A]">
            <p>Atelier WhatsApp: +91 95286 40429</p>
            <p>Support: orders@keoshaindia.com</p>
          </div>
        </div>

        {/* Column 2: Shop Directory */}
        <div className="space-y-4">
          <h4 className="font-serif text-sm uppercase tracking-wider text-[#1A1A1A] font-bold">
            Shop Catalog
          </h4>
          <ul className="space-y-2.5 text-xs uppercase tracking-widest">
            <li>
              <Link href="/shop" className="hover:text-[#C5A059] transition-colors">
                Browse All
              </Link>
            </li>
            <li>
              <Link href="/shop?category=sarees" className="hover:text-[#C5A059] transition-colors">
                Silk Sarees
              </Link>
            </li>
            <li>
              <Link href="/shop?category=kurta-sets" className="hover:text-[#C5A059] transition-colors">
                Kurta Sets
              </Link>
            </li>
            <li>
              <Link href="/shop?category=anarkalis" className="hover:text-[#C5A059] transition-colors">
                Anarkalis
              </Link>
            </li>
            <li>
              <Link href="/shop?category=co-ords" className="hover:text-[#C5A059] transition-colors">
                Co-ords & Tunics
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Customer Care & Services */}
        <div className="space-y-4">
          <h4 className="font-serif text-sm uppercase tracking-wider text-[#1A1A1A] font-bold">
            Atelier Services
          </h4>
          <ul className="space-y-2.5 text-xs uppercase tracking-widest">
            <li>
              <Link href="/legacy" className="hover:text-[#C5A059] transition-colors">
                Our Heritage Story
              </Link>
            </li>
            <li>
              <Link href="/stores" className="hover:text-[#C5A059] transition-colors">
                Studio Fittings
              </Link>
            </li>
            <li>
              <Link href="/stores" className="hover:text-[#C5A059] transition-colors">
                Size Guidelines
              </Link>
            </li>
            <li>
              <a href="https://wa.me/919528640429" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A059] transition-colors">
                WhatsApp Chat Support
              </a>
            </li>
            <li>
              <Link href="/legacy" className="hover:text-[#C5A059] transition-colors">
                Returns & Alterations
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div className="space-y-4">
          <h4 className="font-serif text-sm uppercase tracking-wider text-[#1A1A1A] font-bold">
            Atelier Newsletters
          </h4>
          <p className="text-xs leading-relaxed text-[#7A6F62]">
            Subscribe to receive private collection previews, brand stories, and size customization guides.
          </p>
          {subscribed ? (
            <div className="bg-green-50 border border-green-200 text-green-700 text-xs p-3 rounded-xs">
              Thank you for subscribing to Keosha Designs notifications.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col space-y-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="YOUR EMAIL ADDRESS"
                className="bg-white border border-[#E6E2D8] px-4 py-2.5 text-xs text-[#1A1A1A] outline-none focus:border-[#C5A059] transition-colors uppercase tracking-widest placeholder:text-[#7A6F62]/50"
              />
              <button
                type="submit"
                className="bg-[#1A1A1A] hover:bg-[#C5A059] text-white py-2.5 text-xs uppercase tracking-widest transition-colors font-medium"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-[#E6E2D8] flex flex-col md:flex-row items-center justify-between text-xs text-[#7A6F62] space-y-4 md:space-y-0">
        <p>&copy; {new Date().getFullYear()} Keosha Designs. All Rights Reserved.</p>
        <p className="flex space-x-4">
          <Link href="/legacy" className="hover:text-[#1A1A1A]">Terms of Service</Link>
          <span>&bull;</span>
          <Link href="/legacy" className="hover:text-[#1A1A1A]">Privacy Policy</Link>
        </p>
      </div>
    </footer>
  );
};
