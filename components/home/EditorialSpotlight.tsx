"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import sfLogo from "../../public/images/SFLogo.webp";

export const EditorialSpotlight: React.FC = () => {
  return (
    <section className="w-full bg-[#F3F0EA] overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-screen">

        {/* Left Side Video */}
        <div className="relative w-full h-[58vh] md:h-screen overflow-hidden bg-black">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/videos/sf_banner_new.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Right Side Content */}
        <div className="bg-[#BDD2D8] flex flex-col items-center justify-center text-center px-8 md:px-16 py-14 md:py-16">

          {/* Inner Wrapper */}
          <div className="w-full max-w-[620px] flex flex-col items-center">

            {/* Logo */}
            <div className="relative w-[220px] sm:w-[260px] md:w-[300px] aspect-[3/2] mb-10 md:mb-12">
              <Image
                src={sfLogo}
                alt="Spring Fable"
                fill
                priority
                className="object-contain"
              />
            </div>

            {/* Description */}
            <p className="max-w-[520px] text-white text-sm sm:text-base leading-[1.9] font-light tracking-[0.01em]">
              Vines wander, florals bloom undisturbed and the story
              unfolds. Every fable begins with wonder and ends with
              memories of childhood.
            </p>

            {/* CTA */}
            <div className="mt-14 md:mt-16">
              <Link
                href="/shop?collection=spring-summer-26"
                className="group inline-flex items-center gap-4 uppercase text-white text-xs md:text-sm tracking-[0.28em] font-light"
              >
                <span>
                  SHOP SPRING SUMMER’26
                </span>

                <svg
                  className="w-7 h-7 transition-transform duration-300 group-hover:translate-x-1.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.1}
                    d="M5 12h14m-5-5l5 5-5 5"
                  />
                </svg>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};