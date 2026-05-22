"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import horseBanner from "../../public/images/horse_banner.jpg";

export const PartnerProgramme: React.FC = () => {
    return (
        <section className="w-full bg-[#F4F1EC] overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-screen">

                {/* Left Image */}
                <div className="relative w-full h-[52vh] md:h-screen overflow-hidden">

                    <Image
                        src={horseBanner}
                        alt="Partner Programme"
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                    />

                </div>

                {/* Right Content */}
                <div className="bg-[#1D2C3A] flex items-center justify-center px-6 md:px-10 lg:px-14 py-16 md:py-0">

                    <div className="w-full max-w-[620px] flex flex-col items-center text-center">

                        {/* Heading */}
                        <h2 className="font-serif uppercase text-white text-2xl md:text-3xl lg:text-4xl leading-tight tracking-[-0.04em]">
                            Partner
                            <br className="hidden md:inline" /> Programme
                        </h2>

                        {/* Description */}
                        <p className="mt-7 md:mt-8 max-w-[560px] text-white text-sm md:text-base leading-[1.65] font-light">
                            Be the first to access new collections and
                            enjoy exclusive privileges, designed for
                            our trusted collaborators.
                        </p>

                        {/* CTA */}
                        <div className="mt-16 md:mt-20">
                            <Link
                                href="/partner-programme"
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
            </div>
        </section>
    );
};