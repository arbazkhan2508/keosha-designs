"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import wallCovering1 from "../../public/images/wall-coverings/Wall_Coverings_1.jpg";
import wallCovering2 from "../../public/images/wall-coverings/Wall_Coverings_2.jpg";
import homesBanner from "../../public/images/Sarita_Handa_Homes_banner_new.jpg";

const wallCoverings = [
    {
        id: 1,
        image: wallCovering1,
        collection: "ECHLEON FOR SARITA HANDA",
        title: "AYDIN HONEY",
        description:
            "Embroidered Art Deco-inspired geometry on Sisal, with rhythmic fan-like patterns, earthy tones and refined texture, blending craftsmanship, depth and architectural elegance in contemporary interiors.",
    },
    {
        id: 2,
        image: wallCovering2,
        collection: "ECHLEON FOR SARITA HANDA",
        title: "SATPURA TAN",
        description:
            "Hand-embroidered trees, foliage and wildlife on Sisal, rendered in warm earthy tones and intricate texture, blending craftsmanship, colour and natural grandeur for refined, timeless spaces.",
    },
];

export const WallCoveringsSection: React.FC = () => {
    return (
        <section className="w-full bg-[#F4F1EC] overflow-hidden">

            {/* Top Section */}
            <div className="max-w-7xl mx-auto px-4 lg:px-6 pt-10 md:pt-12">

                {/* Heading */}
                <h2 className="font-serif text-[#25231F] text-2xl md:text-3xl lg:text-4xl leading-tight tracking-[-0.03em]">
                    A New Era of Ultra-Luxury: Embroidered Wall Coverings
                </h2>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mt-8 md:mt-10">

                    {wallCoverings.map((item) => (
                        <div key={item.id} className="group">

                            {/* Image */}
                            <div className="relative w-full aspect-[1/1.05] overflow-hidden bg-[#E8E1D8]">

                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    priority
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                                />

                            </div>

                            {/* Content */}
                            <div className="pt-4 md:pt-5">

                                {/* Collection */}
                                <p className="uppercase text-[#75706A] text-xs tracking-[0.16em] font-light">
                                    {item.collection}
                                </p>

                                {/* Title */}
                                <h3 className="mt-5 uppercase text-[#3A3835] text-xs md:text-sm tracking-[0.12em] font-light leading-[1.2]">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="mt-5 max-w-[92%] text-[#706C67] text-sm leading-[1.65] tracking-[0.03em] font-light">
                                    {item.description}
                                </p>

                            </div>

                        </div>
                    ))}

                </div>
            </div>

            {/* Bottom Banner */}
            <div className="grid grid-cols-1 md:grid-cols-2 mt-16 md:mt-20">

                {/* Left Content */}
                <div className="bg-[#706355] flex items-center justify-center px-8 md:px-12 lg:px-16 py-16 md:py-20">

                    <div className="w-full max-w-[560px] text-center">

                        {/* Main Heading */}
                        <h2 className="font-serif text-white text-2xl md:text-3xl lg:text-4xl leading-tight tracking-[-0.03em]">
                            Sarita Handa Homes
                        </h2>

                        {/* Sub Heading */}
                        <h3 className="mt-5 font-serif text-white text-lg md:text-xl lg:text-2xl leading-snug tracking-[-0.025em]">
                            Love The Way Our Stores Look?
                        </h3>

                        {/* Description */}
                        <p className="mt-10 text-white text-sm md:text-base leading-[1.75] font-light max-w-[500px] mx-auto">
                            Our expert stylists will assist you in recreating our signature
                            look in your space. Whether you are styling a corner or a
                            complete home, we will work with you to design rooms that are
                            warm, curated and distinctly yours.
                        </p>

                        {/* CTA */}
                        <div className="mt-12 md:mt-14">
                            <Link
                                href="/homes"
                                className="group inline-flex items-center gap-3 uppercase text-white text-xs md:text-sm tracking-[0.22em] font-light"
                            >
                                <span>
                                    Know More
                                </span>

                                <svg
                                    className="w-7 h-7 transition-transform duration-300 group-hover:translate-x-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1}
                                        d="M5 12h14m-5-5l5 5-5 5"
                                    />
                                </svg>
                            </Link>
                        </div>

                    </div>
                </div>

                {/* Right Image */}
                <div className="relative w-full min-h-[350px] sm:min-h-[450px] md:min-h-[760px] overflow-hidden">

                    <Image
                        src={homesBanner}
                        alt="Sarita Handa Homes"
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                    />

                </div>
            </div>
        </section>
    );
};