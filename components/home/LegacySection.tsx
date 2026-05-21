"use client";

import React from "react";
import Link from "next/link";

const legacyVideos = [
    "/videos/legacy/process-french-knot.mp4",
    "/videos/legacy/process-french-knot.mp4",
    "/videos/legacy/process-french-knot.mp4",
    "/videos/legacy/process-french-knot.mp4",
];

export const LegacySection: React.FC = () => {
    return (
        <section className="w-full bg-[#F5F2EE] overflow-hidden">

            <div className="px-5 md:px-8 lg:px-10 py-10 md:py-14">

                {/* Top Content */}
                <div className="max-w-[560px]">

                    {/* Heading */}
                    <h2 className="font-serif text-[#1F2430] text-md  lg:text-4xl leading-[1.02] tracking-[-0.04em]">
                        The Making of a Legacy
                    </h2>

                    {/* Description */}
                    <p className="mt-8 max-w-[420px] text-[#3B404A] text-sm lg:text-base leading-[1.55] font-light tracking-[0.01em]">
                        Explore the heart of the brand—our makers, our mission, our method.
                    </p>

                    {/* CTA */}
                    <div className="mt-10">

                        <Link
                            href="/legacy"
                            className="group inline-flex items-center gap-4 uppercase text-[#2A2F39] text-sm lg:text-base tracking-[0.14em] font-light"
                        >
                            <span>
                                Know More
                            </span>

                            <svg
                                className="w-8 h-8 transition-transform duration-300 group-hover:translate-x-1"
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

                {/* Videos Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mt-14">

                    {legacyVideos.map((video, index) => (
                        <div
                            key={index}
                            className="relative aspect-[0.74/1] overflow-hidden bg-[#EAE5DE] group"
                        >

                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                            >
                                <source src={video} type="video/mp4" />
                            </video>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
};