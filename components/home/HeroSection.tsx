"use client";

import React from "react";
import Link from "next/link";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen w-full bg-black overflow-hidden flex items-center justify-center">
      {/* Background Looping Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-95 animate-fade-in"
      >
        <source
          src="/videos/homepage-video.mp4"
          type="video/mp4"
        />
        {/* Fallback image if video fails to load */}
        <img
          src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=1600&h=900"
          alt="Atelier loom"
          className="w-full h-full object-cover"
        />
      </video>

      {/* Premium Gradient Overlay: Darkens the top for header readability and bottom for scroll indicator, keeping center clear */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/25" />
    </section>
  );
};
