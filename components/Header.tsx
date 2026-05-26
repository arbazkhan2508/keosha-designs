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
  const [mobileMenuOpenSection, setMobileMenuOpenSection] = useState<"new_in" | "shop" | "stores" | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Reset mobile accordion on drawer close
  useEffect(() => {
    if (!isMobileMenuOpen) {
      setMobileMenuOpenSection(null);
    }
  }, [isMobileMenuOpen]);

  const isHome = pathname === "/";
  const isAuthPage = pathname === "/account" || pathname === "/login" || pathname === "/signup";
  const isDarkHeader = isHome;

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
      {/* Announcement Bar - Hidden on Home & Auth pages to match reference */}
      {!isHome && !isAuthPage && (
        <div className="w-full bg-[#1A2835] text-[#FCFAF6] py-2 text-[10px] uppercase tracking-widest text-center font-medium font-sans">
          Complimentary Shipping Across India &bull; Bespoke Sizing (XS - 6XL) &bull; Handcrafted in Lucknow
        </div>
      )}

      {/* Main Sticky/Overlay Header */}
      <header
        onMouseLeave={() => setActiveMegaMenu(null)}
        className={`w-full z-50 transition-all duration-500 ease-in-out ${isHome
          ? (isScrolled
            ? "fixed top-0 inset-x-0 bg-[#434343] shadow-md py-3 border-b border-white/10 text-white"
            : "absolute top-0 inset-x-0 bg-transparent py-6 text-white")
          : (isAuthPage
            ? (isScrolled
              ? "sticky top-0 inset-x-0 bg-white shadow-sm py-3 border-b border-[#E6E2D8]/50 text-[#1A1A1A]"
              : "sticky top-0 inset-x-0 bg-transparent py-4 text-[#1A1A1A]")
            : (isScrolled
              ? "sticky top-0 inset-x-0 bg-[#FCFAF6] shadow-sm py-3 border-b border-[#E6E2D8]/50 text-[#1A1A1A]"
              : "sticky top-0 inset-x-0 bg-[#FCFAF6] border-b border-[#E6E2D8]/50 py-4 text-[#1A1A1A]"))
          }`}
      >
        <div className={`w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-between font-sans transition-colors duration-500 relative ${isDarkHeader ? "text-white" : "text-[#1A1A1A]"}`}>

          {/* Left Menu Items (Desktop) */}
          <nav className={`hidden lg:flex items-center space-x-8 text-xs uppercase tracking-widest font-semibold transition-colors duration-500 ${isDarkHeader ? "text-white" : "text-[#1A1A1A]"}`}>
            {/* NEW IN Dropdown Hover Trigger */}
            <div
              className="relative py-2 cursor-pointer"
              onMouseEnter={() => setActiveMegaMenu("new_in")}
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
              onMouseEnter={() => setActiveMegaMenu(null)}
              className="luxury-link inline-block transition-colors py-2 cursor-pointer uppercase hover:text-[#C5A059]"
              suppressHydrationWarning={true}
            >
              SEARCH
            </button>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden transition-colors hover:text-[#C5A059] ${isDarkHeader ? "text-white" : "text-[#1A1A1A]"}`}
            suppressHydrationWarning={true}
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
          <div
            onMouseEnter={() => setActiveMegaMenu(null)}
            className="lg:static absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:translate-x-0 lg:translate-y-0 text-center flex items-center justify-center z-10"
          >
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
              suppressHydrationWarning={true}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Our Stores Dropdown Wrapper (Image 4) */}
            <div
              className="relative py-2 cursor-pointer hidden lg:block"
              onMouseEnter={() => {
                setIsStoresOpen(true);
                setActiveMegaMenu(null);
              }}
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
              href="/account"
              onMouseEnter={() => setActiveMegaMenu(null)}
              className="hidden lg:inline-block luxury-link transition-colors py-2 hover:text-[#C5A059]"
              title="My Account"
            >
              ACCOUNT
            </Link>

            {/* Cart Trigger (Desktop only) */}
            <button
              onClick={() => setCartOpen(true)}
              onMouseEnter={() => setActiveMegaMenu(null)}
              className="hidden lg:inline-block luxury-link transition-colors py-2 cursor-pointer hover:text-[#C5A059]"
              suppressHydrationWarning={true}
            >
              CART ({cartCount})
            </button>

            {/* Mobile Cart Trigger with badge */}
            <button
              onClick={() => setCartOpen(true)}
              className="lg:hidden transition-colors flex items-center gap-1.5 p-1 relative hover:text-[#C5A059]"
              title="Shopping Cart"
              suppressHydrationWarning={true}
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
        <div
          onClick={() => setSearchActive(false)}
          className="fixed inset-0 z-[60] bg-[#FBF9F6]/80 backdrop-blur-lg flex flex-col justify-center items-center px-6 transition-all duration-300 font-sans shadow-2xl animate-fade-in text-[#1A1A1A] cursor-default"
        >
          {/* Close button in top right */}
          <button
            onClick={() => setSearchActive(false)}
            className="absolute top-8 right-8 md:top-12 md:right-12 text-[#7A6F62] hover:text-[#1A1A1A] text-[10px] font-bold uppercase tracking-[0.25em] transition-colors cursor-pointer flex items-center gap-1.5"
            suppressHydrationWarning={true}
          >
            <span>CLOSE</span>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Centered Search Panel */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[800px] flex flex-col items-center"
          >
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
              suppressHydrationWarning={true}
            />

            {/* Dark charcoal search button */}
            <button
              onClick={handleSearchSubmit}
              className="mt-10 px-16 py-3.5 bg-[#2A2A2A] hover:bg-[#1A1A1A] text-white uppercase text-[11px] font-bold tracking-[0.25em] transition-colors cursor-pointer"
              suppressHydrationWarning={true}
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
        <div className="fixed inset-0 z-[60] lg:hidden flex font-sans">
          {/* Overlay */}
          <div className="fixed inset-0 bg-black/30 backdrop-blur-xs animate-fade-in" onClick={() => setIsMobileMenuOpen(false)} />

          {/* Menu Panel */}
          <div className="relative flex flex-col w-4/5 max-w-sm bg-[#FCFAF6] h-full shadow-xl p-6 border-r border-[#E6E2D8] animate-slide-in-left">
            <div className="flex justify-between items-center pb-6 border-b border-[#E6E2D8] shrink-0">
              <span className="font-serif text-xl tracking-widest text-[#1A1A1A]">KEOSHA</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#7A6F62] hover:text-[#1A1A1A] p-1"
                suppressHydrationWarning={true}
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Scrollable Nav Content */}
            <nav className="flex-1 overflow-y-auto pr-1 py-6 space-y-6 text-sm uppercase tracking-widest font-semibold text-[#1A1A1A] hide-scrollbar">

              {/* NEW IN Accordion */}
              <div className="space-y-2">
                <button
                  onClick={() => setMobileMenuOpenSection(mobileMenuOpenSection === "new_in" ? null : "new_in")}
                  className="w-full flex items-center justify-between text-xs tracking-[0.15em] text-[#1A1A1A] font-bold border-b border-[#E6E2D8] pb-2 text-left"
                  suppressHydrationWarning={true}
                >
                  <span>NEW IN</span>
                  <svg
                    className={`w-3.5 h-3.5 transform transition-transform duration-300 ${mobileMenuOpenSection === "new_in" ? "rotate-180 text-[#C5A059]" : "text-[#7A6F62]"}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${mobileMenuOpenSection === "new_in" ? "max-h-60 opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
                  <ul className="space-y-2.5 text-xs pl-3 text-[#7A6F62] pb-1 border-l border-[#E6E2D8]/40">
                    <li><Link href="/shop?category=cushions" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#C5A059] transition-colors block py-0.5">Cushions</Link></li>
                    <li><Link href="/shop?category=bedspreads" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#C5A059] transition-colors block py-0.5">Bedspreads</Link></li>
                    <li><Link href="/shop?category=furniture" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#C5A059] transition-colors block py-0.5">Furniture</Link></li>
                    <li><Link href="/shop?category=fabrics" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#C5A059] transition-colors block py-0.5">Fabrics</Link></li>
                    <li><Link href="/shop?category=decor" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#C5A059] transition-colors block py-0.5">Decor</Link></li>
                  </ul>
                </div>
              </div>

              {/* SHOP Accordion */}
              <div className="space-y-2">
                <button
                  onClick={() => setMobileMenuOpenSection(mobileMenuOpenSection === "shop" ? null : "shop")}
                  className="w-full flex items-center justify-between text-xs tracking-[0.15em] text-[#1A1A1A] font-bold border-b border-[#E6E2D8] pb-2 text-left"
                  suppressHydrationWarning={true}
                >
                  <span>SHOP</span>
                  <svg
                    className={`w-3.5 h-3.5 transform transition-transform duration-300 ${mobileMenuOpenSection === "shop" ? "rotate-180 text-[#C5A059]" : "text-[#7A6F62]"}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${mobileMenuOpenSection === "shop" ? "max-h-[360px] opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
                  <ul className="space-y-2.5 text-xs pl-3 text-[#7A6F62] pb-1 border-l border-[#E6E2D8]/40">
                    <li><Link href="/shop" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#C5A059] transition-colors block py-0.5 font-semibold text-[#1A1A1A]">All Products</Link></li>
                    <li><Link href="/shop?category=cushions" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#C5A059] transition-colors block py-0.5">Cushions</Link></li>
                    <li><Link href="/shop?category=bedspreads" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#C5A059] transition-colors block py-0.5">Bedspreads</Link></li>
                    <li><Link href="/shop?category=furniture" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#C5A059] transition-colors block py-0.5">Furniture</Link></li>
                    <li><Link href="/shop?category=fabrics" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#C5A059] transition-colors block py-0.5">Fabrics</Link></li>
                    <li><Link href="/shop?category=decor" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#C5A059] transition-colors block py-0.5">Decor</Link></li>
                    <li><Link href="/shop?category=gifting" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#C5A059] transition-colors block py-0.5">Gifting</Link></li>
                    <li><Link href="/shop?category=table-linen" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#C5A059] transition-colors block py-0.5">Table Linen</Link></li>
                  </ul>
                </div>
              </div>

              {/* OUR STORES Accordion */}
              <div className="space-y-2">
                <button
                  onClick={() => setMobileMenuOpenSection(mobileMenuOpenSection === "stores" ? null : "stores")}
                  className="w-full flex items-center justify-between text-xs tracking-[0.15em] text-[#1A1A1A] font-bold border-b border-[#E6E2D8] pb-2 text-left"
                  suppressHydrationWarning={true}
                >
                  <span>OUR STORES</span>
                  <svg
                    className={`w-3.5 h-3.5 transform transition-transform duration-300 ${mobileMenuOpenSection === "stores" ? "rotate-180 text-[#C5A059]" : "text-[#7A6F62]"}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${mobileMenuOpenSection === "stores" ? "max-h-[300px] opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
                  <ul className="space-y-2.5 text-[10px] leading-relaxed pl-3 text-[#7A6F62] pb-1 border-l border-[#E6E2D8]/40">
                    <li><Link href="/stores#delhi-flagship" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#C5A059] transition-colors block py-0.5">Delhi (Flagship Store, Sultanpur)</Link></li>
                    <li><Link href="/stores#sarita-handa-now" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#C5A059] transition-colors block py-0.5">Sarita Handa Now, Delhi (Sultanpur)</Link></li>
                    <li><Link href="/stores#delhi-defence-colony" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#C5A059] transition-colors block py-0.5">Delhi (Defence Colony)</Link></li>
                    <li><Link href="/stores#mumbai-bandra" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#C5A059] transition-colors block py-0.5">Mumbai (Bandra)</Link></li>
                    <li><Link href="/stores#mumbai-mahalaxmi" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#C5A059] transition-colors block py-0.5">Mumbai (Mahalaxmi)</Link></li>
                    <li><Link href="/stores#hyderabad" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#C5A059] transition-colors block py-0.5">Hyderabad</Link></li>
                  </ul>
                </div>
              </div>

              {/* SEARCH Action Trigger */}
              <div className="border-b border-[#E6E2D8] pb-3">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setSearchActive(true);
                  }}
                  className="w-full text-left text-xs tracking-[0.15em] text-[#1A1A1A] font-bold block"
                  suppressHydrationWarning={true}
                >
                  SEARCH
                </button>
              </div>

              {/* CART Action Trigger */}
              <div className="border-b border-[#E6E2D8] pb-3">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setCartOpen(true);
                  }}
                  className="w-full text-left text-xs tracking-[0.15em] text-[#1A1A1A] font-bold flex items-center justify-between"
                  suppressHydrationWarning={true}
                >
                  <span>CART</span>
                  <span className="text-[10px] w-5 h-5 rounded-full bg-[#1A1A1A] text-[#FCFAF6] flex items-center justify-center font-bold font-sans">
                    {cartCount}
                  </span>
                </button>
              </div>

              {/* Standalone Pages Links */}
              <div className="space-y-4 pt-2">
                <Link href="/account" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#C5A059] transition-colors text-xs tracking-[0.15em] font-bold block">
                  ACCOUNT
                </Link>
                <Link href="/legacy" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#C5A059] transition-colors text-xs tracking-[0.15em] font-bold block">
                  OUR LEGACY
                </Link>
                <a href="https://wa.me/919528640429" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A059] transition-colors text-xs tracking-[0.15em] font-bold block">
                  CUSTOMER CARE
                </a>
              </div>

            </nav>

            <div className="pt-6 border-t border-[#E6E2D8] text-[10px] text-center text-[#7A6F62] shrink-0">
              &copy; Keosha Designs Atelier Lucknow.
            </div>
          </div>
        </div>
      )}
    </>
  );
};
