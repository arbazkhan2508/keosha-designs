"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "../context/CartContext";
import { MegaMenu } from "./MegaMenu";

export const Header: React.FC = () => {
  const { cartCount, setCartOpen } = useCart();
  const pathname = usePathname();
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const isHome = pathname === "/";
  const isTransparent = isHome && !isScrolled;

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Announcement Bar - Hidden on Home page to match reference */}
      {!isHome && (
        <div className="w-full bg-[#1A2835] text-[#FCFAF6] py-2 text-[10px] uppercase tracking-widest text-center font-medium font-sans">
          Complimentary Shipping Across India &bull; Bespoke Sizing (XS - 6XL) &bull; Handcrafted in Lucknow
        </div>
      )}

      {/* Main Sticky/Overlay Header */}
      <header
        className={`w-full z-40 transition-all duration-500 ease-in-out  ${isHome
          ? (isScrolled
            ? "fixed top-0 left-0 bg-[#FCFAF6]/90 backdrop-blur-md shadow-xs py-3 border-b border-[#E6E2D8] text-[#1A1A1A]"
            : "absolute top-0 left-0 bg-transparent py-6 text-white")
          : (isScrolled
            ? "fixed top-0 left-0 bg-[#FCFAF6]/90 backdrop-blur-md shadow-xs py-3 border-b border-[#E6E2D8] text-[#1A1A1A]"
            : "sticky top-0 bg-[#FCFAF6] border-b border-[#E6E2D8] py-4 text-[#1A1A1A]")
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-6 flex items-center justify-between font-sans">

          {/* Left Menu Items (Desktop) */}
          <nav className={`hidden md:flex items-center space-x-8 text-xs uppercase tracking-widest font-semibold ${isTransparent ? "text-white" : "text-[#1A1A1A]"}`}>
            <Link href="/shop" className={`luxury-link inline-block transition-colors py-2 ${isTransparent ? "hover:text-[#C5A059] text-white" : "hover:text-[#C5A059] text-[#1A1A1A]"}`}>
              New In
            </Link>
            <div
              className="relative py-2 cursor-pointer"
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              onMouseLeave={() => setIsMegaMenuOpen(false)}
            >
              <span className="hover:text-[#C5A059] transition-colors flex items-center gap-1">
                Shop
                <svg className={`w-3 h-3 transition-colors ${isTransparent ? "text-white/80" : "text-[#7A6F62]"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>

              {/* Mega Menu Portal */}
              {isMegaMenuOpen && <MegaMenu onLinkClick={() => setIsMegaMenuOpen(false)} />}
            </div>
            <button
              onClick={() => setSearchActive(!searchActive)}
              className={`luxury-link inline-block transition-colors py-2 cursor-pointer uppercase ${isTransparent ? "hover:text-[#C5A059] text-white" : "hover:text-[#C5A059] text-[#1A1A1A]"
                }`}
            >
              Search
            </button>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden transition-colors ${isTransparent ? "text-white hover:text-[#C5A059]" : "text-[#1A1A1A] hover:text-[#C5A059]"}`}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Central Logo */}
          <div className="text-center">
            <Link href="/" className="inline-block group">
              <h1 className={`font-serif text-2xl lg:text-3xl tracking-[0.25em] font-light transition-colors duration-500 ${isTransparent ? "text-white group-hover:text-[#C5A059]" : "text-[#1A1A1A] group-hover:text-[#C5A059]"}`}>
                KEOSHA
              </h1>
              <span className={`block text-[7px] uppercase tracking-[0.45em] transition-colors duration-500 -mt-1 font-semibold ${isTransparent ? "text-white/60" : "text-[#7A6F62]"}`}>
                designs
              </span>
            </Link>
          </div>

          {/* Right Header Items (Search for mobile, Stores, Account, Cart for desktop) */}
          <div className="flex items-center space-x-6 text-xs uppercase tracking-widest font-semibold">
            {/* Search (Mobile only) */}
            <button
              onClick={() => setSearchActive(!searchActive)}
              className={`md:hidden transition-colors flex items-center p-1 ${isTransparent ? "text-white hover:text-[#C5A059]" : "text-[#1A1A1A] hover:text-[#C5A059]"}`}
              title="Search Collection"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Our Stores (Desktop only) */}
            <Link
              href="/stores"
              className={`hidden md:block luxury-link inline-block transition-colors py-2 ${isTransparent ? "text-white hover:text-[#C5A059]" : "text-[#1A1A1A] hover:text-[#C5A059]"
                }`}
            >
              Our Stores
            </Link>

            {/* Account (Desktop only) */}
            <Link
              href="/stores"
              className={`hidden md:block luxury-link inline-block transition-colors py-2 ${isTransparent ? "text-white hover:text-[#C5A059]" : "text-[#1A1A1A] hover:text-[#C5A059]"
                }`}
              title="My Account"
            >
              Account
            </Link>

            {/* Cart Trigger (Desktop only, matches "CART (0)" text layout) */}
            <button
              onClick={() => setCartOpen(true)}
              className={`hidden md:block luxury-link inline-block transition-colors py-2 cursor-pointer ${isTransparent ? "text-white hover:text-[#C5A059]" : "text-[#1A1A1A] hover:text-[#C5A059]"
                }`}
            >
              Cart ({cartCount})
            </button>

            {/* Mobile Cart Trigger with badge */}
            <button
              onClick={() => setCartOpen(true)}
              className={`md:hidden transition-colors flex items-center gap-1.5 p-1 relative ${isTransparent ? "text-white hover:text-[#C5A059]" : "text-[#1A1A1A] hover:text-[#C5A059]"
                }`}
              title="Shopping Cart"
            >
              <span className={`text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold font-sans transition-colors ${isTransparent ? "bg-white text-[#1A1A1A]" : "bg-[#1A1A1A] text-[#FCFAF6]"}`}>
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Search Dropdown Overlay */}
      {searchActive && (
        <div className="w-full bg-[#FAF8F5] border-b border-[#E6E2D8] py-8 px-6 transition-all duration-300 font-sans shadow-md z-30 relative">
          <div className="max-w-2xl mx-auto flex items-center justify-between">
            <div className="flex-1 flex items-center space-x-3">
              <svg className="w-5 h-5 text-[#7A6F62]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search catalog for sarees, kurtas, collections..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-b border-[#E6E2D8] py-2 text-sm text-[#1A1A1A] focus:border-[#C5A059] outline-none transition-colors"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && searchQuery.trim() !== "") {
                    window.location.href = `/shop?search=${encodeURIComponent(searchQuery)}`;
                  }
                }}
              />
            </div>
            <button
              onClick={() => setSearchActive(false)}
              className="text-[#7A6F62] hover:text-[#1A1A1A] text-xs uppercase tracking-widest font-semibold ml-6"
            >
              Close
            </button>
          </div>
          <div className="max-w-2xl mx-auto mt-3 text-[11px] text-[#7A6F62] flex gap-2 flex-wrap">
            <span className="font-semibold text-[#1A1A1A]">Trending:</span>
            <Link href="/shop?category=sarees" className="hover:text-[#C5A059]">Sarees</Link> &bull;
            <Link href="/shop?collection=Ae+Ri+Sakhi" className="hover:text-[#C5A059]">Ae Ri Sakhi</Link> &bull;
            <Link href="/shop?category=anarkalis" className="hover:text-[#C5A059]">Anarkalis</Link> &bull;
            <Link href="/shop?collection=Shaadmani" className="hover:text-[#C5A059]">Shaadmani</Link>
          </div>
        </div>
      )}

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden flex font-sans">
          {/* Overlay */}
          <div className="fixed inset-0 bg-black/30 backdrop-blur-xs" onClick={() => setIsMobileMenuOpen(false)} />

          {/* Menu Panel */}
          <div className="relative flex flex-col w-4/5 max-w-sm bg-[#FCFAF6] h-full shadow-xl p-6 border-r border-[#E6E2D8]">
            <div className="flex justify-between items-center pb-6 border-b border-[#E6E2D8]">
              <span className="font-serif text-xl tracking-widest text-[#1A1A1A]">KEOSHA</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#7A6F62] hover:text-[#1A1A1A]"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="flex-1 py-8 space-y-6 text-sm uppercase tracking-widest font-semibold text-[#1A1A1A]">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-wider text-[#7A6F62] font-bold border-b border-[#E6E2D8] pb-1">Shop Collections</p>
                <ul className="space-y-2 text-xs pl-2 text-[#7A6F62]">
                  <li><Link href="/shop" onClick={() => setIsMobileMenuOpen(false)}>All Products</Link></li>
                  <li><Link href="/shop?category=sarees" onClick={() => setIsMobileMenuOpen(false)}>Sarees</Link></li>
                  <li><Link href="/shop?category=kurta-sets" onClick={() => setIsMobileMenuOpen(false)}>Kurta Sets</Link></li>
                  <li><Link href="/shop?category=anarkalis" onClick={() => setIsMobileMenuOpen(false)}>Anarkalis</Link></li>
                  <li><Link href="/shop?category=shararas" onClick={() => setIsMobileMenuOpen(false)}>Shararas</Link></li>
                  <li><Link href="/shop?category=co-ords" onClick={() => setIsMobileMenuOpen(false)}>Co-ords & Tunics</Link></li>
                </ul>
              </div>

              <div className="space-y-4">
                <p className="text-xs uppercase tracking-wider text-[#7A6F62] font-bold border-b border-[#E6E2D8] pb-1">About</p>
                <ul className="space-y-2 text-xs pl-2 text-[#7A6F62]">
                  <li><Link href="/legacy" onClick={() => setIsMobileMenuOpen(false)}>Our Legacy</Link></li>
                  <li><Link href="/stores" onClick={() => setIsMobileMenuOpen(false)}>Atelier Studios</Link></li>
                  <li><a href="https://wa.me/919528640429" target="_blank" rel="noopener noreferrer">WhatsApp Care</a></li>
                </ul>
              </div>
            </nav>

            <div className="pt-6 border-t border-[#E6E2D8] text-[10px] text-center text-[#7A6F62]">
              &copy; Keosha Designs Atelier Lucknow.
            </div>
          </div>
        </div>
      )}
    </>
  );
};
