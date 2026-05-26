"use client";

import React, { useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/css";

import collectionImg1 from "../../public/images/collections/CollectionImg1.webp";
import collectionImg2 from "../../public/images/collections/CollectionImg2.webp";
import collectionImg3 from "../../public/images/collections/CollectionImg3.webp";
import collectionImg4 from "../../public/images/collections/CollectionImg4.webp";

type ProductCard = {
    title: string;
    image: StaticImageData;
    href: string;
};

const products: ProductCard[] = [
    {
        title: "CUSHIONS GARDEN SPREY BLUE",
        image: collectionImg1,
        href: "/shop/cushions-garden-sprey-blue",
    },
    {
        title: "CUSHIONS GARDEN BUG NATURAL",
        image: collectionImg2,
        href: "/shop/cushions-garden-bug-natural",
    },
    {
        title: "CUSHIONS CANOPY BLUE",
        image: collectionImg3,
        href: "/shop/cushions-canopy-blue",
    },
    {
        title: "CUSHIONS GARDEN BUG BLUE",
        image: collectionImg4,
        href: "/shop/cushions-garden-bug-blue",
    },
];

export const SpringFablesCollection: React.FC = () => {
    const swiperRef = useRef<SwiperType | null>(null);

    const [activeSlide, setActiveSlide] = useState(1);

    return (
        <section className="w-full bg-[#F4F1EC] py-16 md:py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 lg:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10">

                    {/* Left Section */}
                    <div className="flex flex-col justify-between py-2">

                    {/* Heading */}
                    <div>
                        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-[-0.045em] text-[#1C1C1A] leading-tight">
                            Spring Fables
                            <br />
                            Collection
                        </h2>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center gap-10 mt-10 lg:mt-0 pb-2 relative z-10">

                        {/* Prev */}
                        <button
                            className="spring-prev group relative z-10 cursor-pointer p-2 flex items-center justify-center pointer-events-auto"
                            aria-label="Previous slide"
                            suppressHydrationWarning={true}
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

                        {/* Pagination */}
                        <div className="text-sm md:text-base tracking-[0.08em] text-[#2D2D2B] font-light min-w-[56px] text-center select-none">
                            {activeSlide} / {products.length}
                        </div>

                        {/* Next */}
                        <button
                            className="spring-next group relative z-10 cursor-pointer p-2 flex items-center justify-center pointer-events-auto"
                            aria-label="Next slide"
                            suppressHydrationWarning={true}
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

                {/* Slider */}
                <div className="min-w-0">

                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            prevEl: ".spring-prev",
                            nextEl: ".spring-next",
                        }}
                        loop
                        speed={1000}
                        slidesPerView={1}
                        spaceBetween={20}
                        breakpoints={{
                            768: {
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
                        {products.map((item, index) => (
                            <SwiperSlide key={index}>
                                <Link
                                    href={item.href}
                                    className="group block"
                                >
                                    {/* Image */}
                                    <div className="relative w-full h-[400px] sm:h-[480px] md:h-[620px] overflow-hidden bg-[#ECE7DF]">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            priority
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                                        />
                                    </div>

                                    {/* Title */}
                                    <h3 className="mt-4 text-xs md:text-sm uppercase tracking-[0.12em] text-[#4A4A46] font-light leading-[1.2]">
                                        {item.title}
                                    </h3>
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