"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "../context/CartContext";
import { MegaMenu } from "./MegaMenu";

const MonogramLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 54 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Backward K */}
      <path
        d="M14 4V24"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="square"
      />
      <path
        d="M3 4L14 14"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="square"
      />
      <path
        d="M3 24L14 14"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="square"
      />

      {/* Apostrophe */}
      <path
        d="M23 4C23 6.5 22 8 20.5 9"
        stroke="currentColor"
        strokeWidth="2.0"
        strokeLinecap="round"
      />

      {/* U/H-like shape */}
      <path
        d="M30 4V24H47V4"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
};

export const Header: React.FC = () => {
  const { cartCount, setCartOpen } = useCart();
  const pathname = usePathname();
  const [activeMegaMenu, setActiveMegaMenu] = useState<"new_in" | "shop" | null>(null);
  const [isStoresOpen, setIsStoresOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const isHome = pathname === "/";
  const isDarkHeader = isHome || isScrolled;

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

  const handleSearchSubmit = () => {
    if (searchQuery.trim() !== "") {
      window.location.href = `/shop?search=${encodeURIComponent(searchQuery)}`;
      setSearchActive(false);
    }
  };

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
        className={`w-full z-45 transition-all duration-500 ease-in-out ${isHome
          ? (isScrolled
            ? "fixed top-0 inset-x-0 bg-[#434343] shadow-md py-3 border-b border-white/10 text-white"
            : "absolute top-0 inset-x-0 bg-transparent py-6 text-white")
          : (isScrolled
            ? "sticky top-0 inset-x-0 bg-[#434343] shadow-md py-3 border-b border-white/10 text-white"
            : "sticky top-0 inset-x-0 bg-[#FCFAF6] border-b border-[#E6E2D8]/50 py-4 text-[#1A1A1A]")
          }`}
      >
        <div className={`w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-between font-sans transition-colors duration-500 relative ${isDarkHeader ? "text-white" : "text-[#1A1A1A]"}`}>

          {/* Left Menu Items (Desktop) */}
          <nav className={`hidden lg:flex items-center space-x-8 text-xs uppercase tracking-widest font-semibold transition-colors duration-500 ${isDarkHeader ? "text-white" : "text-[#1A1A1A]"}`}>
            {/* NEW IN Dropdown Hover Trigger */}
            <div
              className="relative py-2 cursor-pointer"
              onMouseEnter={() => setActiveMegaMenu("new_in")}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <Link
                href="/shop"
                className={`transition-colors py-2 relative block ${activeMegaMenu === "new_in" ? "text-[#C5A059]" : ""}`}
              >
                NEW IN
                {activeMegaMenu === "new_in" && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#C5A059]" />
                )}
              </Link>
            </div>

            {/* SHOP Dropdown Hover Trigger */}
            <div
              className="relative py-2 cursor-pointer"
              onMouseEnter={() => setActiveMegaMenu("shop")}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <span
                className={`transition-colors flex items-center gap-1 py-2 relative block ${activeMegaMenu === "shop" ? "text-[#C5A059]" : ""}`}
              >
                SHOP
                <svg className={`w-3 h-3 transition-colors ${isDarkHeader ? "text-white/80" : "text-[#1A1A1A]/80"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                {activeMegaMenu === "shop" && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#C5A059]" />
                )}
              </span>
            </div>

            {/* SEARCH Trigger */}
            <button
              onClick={() => setSearchActive(true)}
              className="luxury-link inline-block transition-colors py-2 cursor-pointer uppercase hover:text-[#C5A059]"
            >
              SEARCH
            </button>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden transition-colors hover:text-[#C5A059] ${isDarkHeader ? "text-white" : "text-[#1A1A1A]"}`}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Central Logo - Always Monogram (Image 1, 2, 4) */}
          <div className="lg:static absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:translate-x-0 lg:translate-y-0 text-center flex items-center justify-center z-10">
            <Link href="/" className="inline-block group">
              <div className="flex items-center justify-center h-10 w-16 transition-all duration-500">
                <MonogramLogo className={`h-7 w-auto transition-colors duration-500 ${isDarkHeader ? "text-white group-hover:text-[#C5A059]" : "text-[#1A1A1A] group-hover:text-[#C5A059]"}`} />
              </div>
            </Link>
          </div>

          {/* Right Header Items */}
          <div className={`flex items-center space-x-6 text-xs uppercase tracking-widest font-semibold transition-colors duration-500 ${isDarkHeader ? "text-white" : "text-[#1A1A1A]"}`}>
            {/* Search (Mobile only) */}
            <button
              onClick={() => setSearchActive(true)}
              className="lg:hidden transition-colors flex items-center p-1 hover:text-[#C5A059]"
              title="Search Collection"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Our Stores Dropdown Wrapper (Image 4) */}
            <div
              className="relative py-2 cursor-pointer hidden lg:block"
              onMouseEnter={() => setIsStoresOpen(true)}
              onMouseLeave={() => setIsStoresOpen(false)}
            >
              <Link
                href="/stores"
                className="luxury-link inline-block transition-colors py-2 hover:text-[#C5A059]"
              >
                OUR STORES
              </Link>
              {isStoresOpen && (
                <div className="absolute top-full right-0 lg:left-0 min-w-[320px] bg-white border border-[#E6E2D8] shadow-lg py-4 z-50 text-left font-sans animate-fade-in text-[#1A1A1A]">
                  <ul className="flex flex-col text-[10px] font-bold tracking-[0.18em]">
                    <li>
                      <Link href="/stores#delhi-flagship" className="block px-6 py-3 hover:bg-[#FAF8F5] hover:text-[#C5A059] transition-colors border-b border-[#E6E2D8]/30 leading-relaxed">
                        DELHI (FLAGSHIP STORE, SULTANPUR)
                      </Link>
                    </li>
                    <li>
                      <Link href="/stores#sarita-handa-now" className="block px-6 py-3 hover:bg-[#FAF8F5] hover:text-[#C5A059] transition-colors border-b border-[#E6E2D8]/30 leading-relaxed">
                        SARITA HANDA NOW, DELHI (SULTANPUR)
                      </Link>
                    </li>
                    <li>
                      <Link href="/stores#delhi-defence-colony" className="block px-6 py-3 hover:bg-[#FAF8F5] hover:text-[#C5A059] transition-colors border-b border-[#E6E2D8]/30 leading-relaxed">
                        DELHI (DEFENCE COLONY)
                      </Link>
                    </li>
                    <li>
                      <Link href="/stores#mumbai-bandra" className="block px-6 py-3 hover:bg-[#FAF8F5] hover:text-[#C5A059] transition-colors border-b border-[#E6E2D8]/30 leading-relaxed">
                        MUMBAI (BANDRA)
                      </Link>
                    </li>
                    <li>
                      <Link href="/stores#mumbai-mahalaxmi" className="block px-6 py-3 hover:bg-[#FAF8F5] hover:text-[#C5A059] transition-colors border-b border-[#E6E2D8]/30 leading-relaxed">
                        MUMBAI (MAHALAXMI)
                      </Link>
                    </li>
                    <li>
                      <Link href="/stores#hyderabad" className="block px-6 py-3 hover:bg-[#FAF8F5] hover:text-[#C5A059] transition-colors border-b border-[#E6E2D8]/30 leading-relaxed">
                        HYDERABAD
                      </Link>
                    </li>
                    <li>
                      <a href="https://wa.me/919528640429" target="_blank" rel="noopener noreferrer" className="block px-6 py-3 hover:bg-[#FAF8F5] hover:text-[#C5A059] transition-colors leading-relaxed">
                        CUSTOMER CARE
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Account (Desktop only) */}
            <Link
              href="/stores"
              className="hidden lg:block luxury-link inline-block transition-colors py-2 hover:text-[#C5A059]"
              title="My Account"
            >
              ACCOUNT
            </Link>

            {/* Cart Trigger (Desktop only) */}
            <button
              onClick={() => setCartOpen(true)}
              className="hidden lg:block luxury-link inline-block transition-colors py-2 cursor-pointer hover:text-[#C5A059]"
            >
              CART ({cartCount})
            </button>

            {/* Mobile Cart Trigger with badge */}
            <button
              onClick={() => setCartOpen(true)}
              className="lg:hidden transition-colors flex items-center gap-1.5 p-1 relative hover:text-[#C5A059]"
              title="Shopping Cart"
            >
              <span className={`text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold font-sans transition-colors ${isDarkHeader ? "bg-white text-[#1A1A1A]" : "bg-[#1A1A1A] text-[#FCFAF6]"
                }`}>
                {cartCount}
              </span>
            </button>
          </div>
        </div>

        {/* Mega Menus (Full-screen width relative to header) */}
        {activeMegaMenu && (
          <div
            className="w-full"
            onMouseEnter={() => setActiveMegaMenu(activeMegaMenu)}
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            <MegaMenu menuType={activeMegaMenu} onLinkClick={() => setActiveMegaMenu(null)} />
          </div>
        )}
      </header>

      {/* Fullscreen Search Overlay (Image 3) */}
      {searchActive && (
        <div className="fixed inset-0 z-50 bg-[#FCFAF6]/98 backdrop-blur-md flex flex-col justify-center items-center px-6 transition-all duration-300 font-sans shadow-2xl animate-fade-in text-[#1A1A1A]">
          {/* Close button in top right */}
          <button
            onClick={() => setSearchActive(false)}
            className="absolute top-8 right-8 md:top-12 md:right-12 text-[#7A6F62] hover:text-[#1A1A1A] text-xs font-semibold uppercase tracking-[0.25em] transition-colors cursor-pointer"
          >
            CLOSE
          </button>

          {/* Centered Search Panel */}
          <div className="w-full max-w-[800px] flex flex-col items-center">
            {/* Input with thin border bottom and centered text */}
            <input
              type="text"
              placeholder="COLLECTION, PRODUCT, ETC"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border-b border-[#7A6F62]/60 py-4 text-center text-xl md:text-3xl text-[#1A1A1A] font-light uppercase tracking-widest outline-none transition-colors focus:border-[#1A1A1A] placeholder:text-[#7A6F62]/40"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearchSubmit();
                }
              }}
              autoFocus
            />

            {/* Dark charcoal search button */}
            <button
              onClick={handleSearchSubmit}
              className="mt-10 px-16 py-3.5 bg-[#2A2A2A] hover:bg-[#1A1A1A] text-white uppercase text-[11px] font-bold tracking-[0.25em] transition-colors cursor-pointer"
            >
              SEARCH
            </button>

            {/* Bottom helper categories */}
            <p className="mt-12 text-[10px] tracking-[0.25em] text-[#7A6F62] uppercase font-bold text-center">
              TRY SEARCHING FOR: CUSHIONS, ARMCHAIR, COLOUR, CRAFT
            </p>
          </div>
        </div>
      )}

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex font-sans">
          {/* Overlay */}
          <div className="fixed inset-0 bg-black/30 backdrop-blur-xs animate-fade-in" onClick={() => setIsMobileMenuOpen(false)} />

          {/* Menu Panel */}
          <div className="relative flex flex-col w-4/5 max-w-sm bg-[#FCFAF6] h-full shadow-xl p-6 border-r border-[#E6E2D8] animate-slide-in-left">
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
