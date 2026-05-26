"use client";

import React, { useState } from "react";
import Link from "next/link";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [openSection, setOpenSection] = useState<"legal" | "company" | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="w-full font-sans">
      {/* 1. Newsletter Section (Charcoal Bar) */}
      <div className="w-full bg-[#434343] py-9 px-4 lg:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col space-y-3.5 w-full md:max-w-md">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#C0C0C0] font-semibold">
              NEWSLETTER
            </span>
            {subscribed ? (
              <div className="text-xs uppercase tracking-widest text-[#EAE5DE] py-1">
                THANK YOU FOR SUBSCRIBING
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center space-x-6 w-full py-1">
                <div className="flex-1 border-b border-white/40 focus-within:border-white transition-colors duration-300 py-1">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="EMAIL"
                    className="bg-transparent w-full text-xs text-white placeholder-white/40 outline-none uppercase tracking-widest"
                    suppressHydrationWarning={true}
                  />
                </div>
                <button
                  type="submit"
                  className="text-xs text-white border-b border-white/40 hover:border-white transition-colors duration-300 py-1 uppercase tracking-widest font-semibold shrink-0"
                  suppressHydrationWarning={true}
                >
                  SUBSCRIBE
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* 2. Main Footer Section (Warm Beige Block) */}
      <div className="w-full bg-[#EAE5DE] text-[#2D2D2B] pt-20 pb-16 px-4 lg:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">

            {/* Left Column: Contact info & Socials/Copyright */}
            <div className="flex flex-col space-y-16 lg:space-y-28 justify-between">
              {/* Contact Details */}
              <div className="flex flex-col space-y-7 text-[11px] md:text-xs tracking-[0.22em] font-light text-[#2D2D2B]">
                <span className="opacity-60">
                  9AM - 6PM (MONDAY - SATURDAY)
                </span>
                <div>
                  <a
                    href="tel:+919818428256"
                    className="group hover:text-[#C5A059] transition-colors duration-300 inline-flex items-center"
                  >
                    +91 9818428256
                    <svg
                      className="w-3.5 h-3.5 ml-2.5 opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </a>
                </div>
                <div>
                  <a
                    href="mailto:care@saritahanda.com"
                    className="group hover:text-[#C5A059] transition-colors duration-300 inline-flex items-center"
                  >
                    CARE@SARITAHANDA.COM
                    <svg
                      className="w-3.5 h-3.5 ml-2.5 opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Socials & Copyright */}
              <div className="flex flex-col space-y-6">
                <div className="flex items-center space-x-6">
                  <a
                    href="https://instagram.com/saritahanda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#C5A059] transition-colors duration-300 text-[#2D2D2B]"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>
                  <a
                    href="https://facebook.com/saritahanda.homes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#C5A059] transition-colors duration-300 text-[#2D2D2B]"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="4" ry="4" />
                      <path
                        d="M17 11.5h-3v7.5h-3v-7.5H9.5v-2.5h1.5V7.8c0-1.8 1.1-2.8 2.8-2.8h1.7v2.5h-1c-.8 0-1 .4-1 1v1h2.5l-.5 2.5z"
                        fill="#EAE5DE"
                      />
                    </svg>
                  </a>
                </div>
                <p className="text-[10px] md:text-xs tracking-[0.22em] opacity-60 font-light uppercase">
                  &copy;SARITA HANDA 2026
                </p>
              </div>
            </div>

            {/* Right Column: Accordions & Payment Gateways */}
            <div className="flex flex-col space-y-16 lg:space-y-28 justify-between">
              {/* Accordions / Links Columns */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                {/* Accordion 1: LEGAL AND POLICY */}
                <div className="border-b border-[#2D2D2B]/15 pb-5 lg:border-none lg:pb-0">
                  <button
                    onClick={() => setOpenSection(openSection === "legal" ? null : "legal")}
                    className="w-full flex items-center justify-between text-[11px] md:text-xs tracking-[0.22em] font-light uppercase py-3 hover:text-[#C5A059] transition-colors duration-300 focus:outline-none lg:pointer-events-none lg:cursor-default lg:hover:text-[#2D2D2B] lg:py-0 lg:pb-4"
                    suppressHydrationWarning={true}
                  >
                    <span>LEGAL AND POLICY</span>
                    <svg
                      className={`w-3.5 h-3.5 lg:hidden transform transition-transform duration-300 ${openSection === "legal" ? "rotate-180" : ""
                        }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out lg:max-h-none lg:opacity-100 lg:overflow-visible ${openSection === "legal" ? "max-h-48 mt-3 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                      }`}
                  >
                    <ul className="flex flex-col space-y-3.5 text-[10px] md:text-[11px] tracking-[0.22em] font-light uppercase pb-2">
                      <li>
                        <Link href="/legacy" className="hover:text-[#C5A059] transition-colors duration-300">
                          TERMS OF SERVICE
                        </Link>
                      </li>
                      <li>
                        <Link href="/legacy" className="hover:text-[#C5A059] transition-colors duration-300">
                          RETURN AND EXCHANGE POLICY
                        </Link>
                      </li>
                      <li>
                        <Link href="/legacy" className="hover:text-[#C5A059] transition-colors duration-300">
                          SHIPPING AND DELIVERY POLICY
                        </Link>
                      </li>
                      <li>
                        <Link href="/legacy" className="hover:text-[#C5A059] transition-colors duration-300">
                          PRIVACY
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Accordion 2: COMPANY */}
                <div className="border-b border-[#2D2D2B]/15 pb-5 lg:border-none lg:pb-0">
                  <button
                    onClick={() => setOpenSection(openSection === "company" ? null : "company")}
                    className="w-full flex items-center justify-between text-[11px] md:text-xs tracking-[0.22em] font-light uppercase py-3 hover:text-[#C5A059] transition-colors duration-300 focus:outline-none lg:pointer-events-none lg:cursor-default lg:hover:text-[#2D2D2B] lg:py-0 lg:pb-4"
                    suppressHydrationWarning={true}
                  >
                    <span>COMPANY</span>
                    <svg
                      className={`w-3.5 h-3.5 lg:hidden transform transition-transform duration-300 ${openSection === "company" ? "rotate-180" : ""
                        }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out lg:max-h-none lg:opacity-100 lg:overflow-visible ${openSection === "company" ? "max-h-56 mt-3 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                      }`}
                  >
                    <ul className="flex flex-col space-y-3.5 text-[10px] md:text-[11px] tracking-[0.22em] font-light uppercase pb-2">
                      <li>
                        <Link href="/legacy" className="hover:text-[#C5A059] transition-colors duration-300">
                          ABOUT
                        </Link>
                      </li>
                      <li>
                        <Link href="/legacy" className="hover:text-[#C5A059] transition-colors duration-300">
                          TEAM
                        </Link>
                      </li>
                      <li>
                        <Link href="/legacy" className="hover:text-[#C5A059] transition-colors duration-300">
                          CONTACT
                        </Link>
                      </li>
                      <li>
                        <Link href="/stores" className="hover:text-[#C5A059] transition-colors duration-300">
                          STORES
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>

              {/* Payment Gateways */}
              <div className="flex items-center space-x-6 md:justify-end pt-6">
                {/* Visa */}
                <svg className="h-5 md:h-6 w-auto text-[#2D2D2B] opacity-75 hover:opacity-100 transition-opacity" viewBox="0 0 24 15" fill="currentColor">
                  <path d="M12.24 9.175c.01-.064.043-.277.043-.277l.732-4.526h1.996l-1.246 7.7h-1.92l-.768-3.649c-.203-.984-1.077-1.428-1.986-1.428H6.557l-.045.215c.613.142 1.309.431 1.776.776.286.21.367.394.46.77l1.247 4.887h1.996c.01-.064.043-.277.043-.277l.206-.793zm8.996-4.757h-1.54c-.477 0-.837.28-1.042.768l-2.95 7.022h2.094l.418-1.155h2.558l.241 1.155h1.848l-1.619-7.79zm-2.02 5.099l.86-2.373.493 2.373h-1.353zm-11.89-5.099L5.352 9.475l-.206-1.054C4.811 7.159 3.666 5.86 2.355 5.176l-.161-.083v7.411H4.29V4.418h3.036zm5.827 3.52c-.08-.857-.962-1.282-1.905-1.328-.97-.047-1.89.266-2.327.464l.363 1.48c.365-.167.97-.336 1.488-.336.578 0 1.01.196 1.01.583 0 .708-.949.774-1.564 1.144-.614.37-1.02.827-1.02 1.554 0 1.353 1.168 1.942 2.298 1.942.868 0 1.631-.225 2.02-.424l-.36-1.482c-.36.168-.838.291-1.304.291-.568 0-1.04-.158-1.04-.616 0-.649.882-.774 1.489-1.085.606-.312.923-.746.923-1.608z" />
                </svg>

                {/* Mastercard */}
                <div className="flex flex-col items-center select-none">
                  <svg className="h-5 md:h-6 w-auto text-[#2D2D2B] opacity-75 hover:opacity-100 transition-opacity" viewBox="0 0 24 15" fill="currentColor">
                    <circle cx="8.2" cy="7.5" r="4.5" />
                    <circle cx="15.8" cy="7.5" r="4.5" fillOpacity="0.8" />
                    <path d="M12 3c.8.9 1.3 2.1 1.3 3.5s-.5 2.6-1.3 3.5c-.8-.9-1.3-2.1-1.3-3.5S11.2 3.9 12 3z" fillOpacity="0.9" />
                  </svg>
                  <span className="text-[6.5px] tracking-normal lowercase font-sans opacity-60 mt-0.5 leading-none">mastercard</span>
                </div>

                {/* NetBanking */}
                <svg className="h-5 md:h-6 w-auto text-[#2D2D2B] opacity-75 hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 9.5l9-6 9 6" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2 9.5h20" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 9.5v8M10 9.5v8M14 9.5v8M19 9.5v8" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2 17.5h20M1 20.5h22" />
                </svg>

                {/* UPI */}
                <svg className="h-5 md:h-6 w-auto text-[#2D2D2B] opacity-75 hover:opacity-100 transition-opacity" viewBox="0 0 45 16" fill="currentColor">
                  <path d="M4.3 11.2V2.8H2.1V1.3h4.4v7.1c0 1.2.6 1.8 1.6 1.8s1.6-.6 1.6-1.8V1.3H12v7.1c0 2.2-1.3 3.4-3.6 3.4s-3.6-1.2-3.6-3.4z" />
                  <path d="M14.5 11.2V1.3h3.5c1.8 0 2.8.8 2.8 2.2s-1 2.2-2.8 2.2h-1.6v3.5h-1.9zm1.9-5.7h1.6c.7 0 1.1-.3 1.1-.9s-.4-.9-1.1-.9h-1.6v1.8z" />
                  <path d="M23.5 11.2V1.3h1.9v9.9h-1.9z" />
                  <path d="M29 3.5l4.5 4.5-4.5 4.5M34.5 3.5l4.5 4.5-4.5 4.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                {/* AMEX */}
                <div className="h-5 md:h-6 w-[34px] bg-[#2D2D2B] text-[#EAE5DE] flex flex-col items-center justify-center rounded-[1.5px] opacity-75 hover:opacity-100 transition-opacity select-none px-0.5 border border-[#2D2D2B]">
                  <span className="text-[4px] font-sans font-bold uppercase tracking-[0.1em] leading-none">AMERICAN</span>
                  <span className="text-[4px] font-sans font-bold uppercase tracking-[0.1em] leading-none mt-[1.5px]">EXPRESS</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};
