"use client";

import React from "react";
import Image from "next/image";
import { ImageZoom } from "../ImageZoom";

interface ProductMediaProps {
  images: string[];
  selectedImageIdx: number;
  setSelectedImageIdx: (idx: number) => void;
  productName: string;
}

export const ProductMedia: React.FC<ProductMediaProps> = ({
  images,
  selectedImageIdx,
  setSelectedImageIdx,
  productName,
}) => {
  return (
    <div className="space-y-4">
      <div className="w-full">
        <ImageZoom
          src={images[selectedImageIdx]}
          alt={`${productName} main view`}
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex space-x-3">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImageIdx(idx)}
              className={`relative w-20 aspect-[3/4] bg-[#F0EDE6] overflow-hidden border transition-all ${
                selectedImageIdx === idx
                  ? "border-[#C5A059] ring-1 ring-[#C5A059]"
                  : "border-[#E6E2D8]"
              }`}
            >
              <Image
                src={img}
                alt={`${productName} thumbnail ${idx}`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}

      {/* Fabric Care Guide */}
      <div className="bg-[#FAF8F5] border border-[#E6E2D8]/60 p-4 rounded-xs text-[11px] text-[#7A6F62] leading-relaxed mt-6 space-y-1">
        <p className="font-semibold uppercase tracking-wider text-[#1A1A1A] font-serif mb-1">
          Garment Care
        </p>
        <p>&bull; Dry clean only to preserve fine thread and bead handworks.</p>
        <p>&bull; Iron on low reverse heat. Store in premium muslin bags (included).</p>
      </div>
    </div>
  );
};
