"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";

// Import store webp illustrations
import delhiDefCol from "../../public/images/stores/Delhi_def_col.webp";
import mumbai from "../../public/images/stores/Mumbai.webp";
import hyderabad from "../../public/images/stores/Hyderabad.webp";
import delhi from "../../public/images/stores/Delhi.webp";

const stores = [
  {
    name: "DELHI (DEFENCE COLONY)",
    image: delhiDefCol,
    href: "/stores",
  },
  {
    name: "MUMBAI",
    image: mumbai,
    href: "/stores",
  },
  {
    name: "HYDERABAD",
    image: hyderabad,
    href: "/stores",
  },
  {
    name: "DELHI",
    image: delhi,
    href: "/stores",
  },
];

export const OurStoresSection: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeSlide, setActiveSlide] = useState(1);

  return (
    <section className="w-full bg-[#FCFAF6] py-16 md:py-24 border-t border-[#E6E2D8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-10">
          
          {/* Left Column - Content & Navigation */}
          <div className="flex flex-col justify-between py-2">
            
            {/* Title & Description */}
            <div className="space-y-6">
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-[#1A1A1A] font-normal leading-tight tracking-wide">
                Our Stores
              </h2>
              <p className="max-w-[320px] text-sm text-[#7A6F62] leading-relaxed font-light">
                We look forward to welcoming you at a Keosha Designs store. Connect with the store closest to you to arrange a personalised visit and discover our timeless collection.
              </p>
              <div className="pt-2">
                <Link
                  href="/stores"
                  className="group inline-flex items-center gap-3 uppercase text-xs md:text-sm tracking-[0.2em] font-medium text-[#1A1A1A] hover:text-[#C5A059] transition-colors"
                >
                  <span>VIEW ALL</span>
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center gap-10 mt-12 lg:mt-0 pb-2">
              
              {/* Prev Button */}
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="group p-1"
                aria-label="Previous slide"
              >
                <svg
                  className="w-8 h-8 text-[#2D2D2B] transition-transform duration-300 group-hover:-translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Slide Counter */}
              <div className="text-sm md:text-base tracking-[0.08em] text-[#2D2D2B] font-light min-w-[56px] text-center">
                {activeSlide} / {stores.length}
              </div>

              {/* Next Button */}
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="group p-1"
                aria-label="Next slide"
              >
                <svg
                  className="w-8 h-8 text-[#2D2D2B] transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

            </div>
          </div>

          {/* Right Column - Swiper Slider */}
          <div className="min-w-0">
            <Swiper
              loop
              speed={1000}
              slidesPerView={1}
              spaceBetween={24}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
              }}
              allowTouchMove
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              onSlideChange={(swiper) => {
                setActiveSlide(swiper.realIndex + 1);
              }}
              className="w-full"
            >
              {stores.map((store, index) => (
                <SwiperSlide key={index}>
                  <Link href={store.href} className="group block w-full">
                    <div className="relative w-full aspect-square bg-[#FAF6F0] flex flex-col justify-between p-6 md:p-8 transition-colors duration-300 group-hover:bg-[#F3EDE3]">
                      
                      {/* Centered Illustration */}
                      <div className="flex-1 flex items-center justify-center">
                        <div className="relative w-full h-[80%] max-h-[220px]">
                          <Image
                            src={store.image}
                            alt={store.name}
                            fill
                            className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                            sizes="(max-width: 640px) 100vw, 50vw"
                            priority={index < 2}
                          />
                        </div>
                      </div>

                      {/* Store Label */}
                      <div className="text-center pt-4">
                        <span className="inline-flex items-center gap-1.5 uppercase text-xs tracking-[0.2em] text-[#1A1A1A] font-light transition-colors duration-300 group-hover:text-[#C5A059]">
                          {store.name}
                          <svg
                            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </span>
                      </div>

                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </div>
    </section>
  );
};
