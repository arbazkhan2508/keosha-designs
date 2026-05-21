"use client";

import React from "react";

interface ProductInfoSectionProps {
  collection: string;
  name: string;
  price: number;
  description: string;
  fabric: string;
  color: string;
  embroideryDetails: string;
}

export const ProductInfoSection: React.FC<ProductInfoSectionProps> = ({
  collection,
  name,
  price,
  description,
  fabric,
  color,
  embroideryDetails,
}) => {
  return (
    <div className="flex flex-col space-y-6">
      <div className="space-y-2 border-b border-[#E6E2D8] pb-6">
        <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold">
          {collection} Collection
        </span>
        <h1 className="font-serif text-2xl sm:text-3xl tracking-wide text-[#1A1A1A] leading-tight">
          {name}
        </h1>
        <p className="text-xl font-serif text-[#1A1A1A] font-medium pt-2">
          ₹{price.toLocaleString("en-IN")}
        </p>
      </div>

      {/* Description */}
      <div className="space-y-4 text-xs sm:text-sm text-[#7A6F62] leading-relaxed">
        <p>{description}</p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs border-y border-[#E6E2D8]/60 py-4 uppercase tracking-widest font-semibold text-[#1A1A1A]">
          <div>
            <span className="text-[#7A6F62]">Fabric:</span>
            <p className="mt-0.5 text-xs text-[#1A1A1A] font-sans tracking-normal font-medium">
              {fabric}
            </p>
          </div>
          <div>
            <span className="text-[#7A6F62]">Color:</span>
            <p className="mt-0.5 text-xs text-[#1A1A1A] font-sans tracking-normal font-medium">
              {color}
            </p>
          </div>
        </div>
        <div>
          <span className="text-xs uppercase tracking-widest font-semibold text-[#1A1A1A]">
            Embroidery Detail:
          </span>
          <p className="mt-1 text-xs leading-relaxed">{embroideryDetails}</p>
        </div>
      </div>
    </div>
  );
};
