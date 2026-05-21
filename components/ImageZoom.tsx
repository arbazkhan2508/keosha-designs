"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

interface ImageZoomProps {
  src: string;
  alt: string;
}

export const ImageZoom: React.FC<ImageZoomProps> = ({ src, alt }) => {
  const [zoomStyle, setZoomStyle] = useState<React.CSSProperties>({
    display: "none",
  });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setZoomStyle({
      display: "block",
      backgroundImage: `url(${src})`,
      backgroundPosition: `${x}% ${y}%`,
      backgroundSize: "200%", // Scale level of magnifier
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({ display: "none" });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full aspect-[3/4] bg-[#F0EDE6] overflow-hidden border border-[#E6E2D8] cursor-zoom-in"
    >
      {/* Base Image */}
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
      />

      {/* Magnified Hover Overlay */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-200"
        style={{
          ...zoomStyle,
          backgroundRepeat: "no-repeat",
        }}
      />
    </div>
  );
};
