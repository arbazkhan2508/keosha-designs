"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "../data/products";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group flex flex-col font-sans text-sm relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image Container */}
      <Link href={`/product/${product.slug}`} className="relative block aspect-[3/4] w-full bg-[#F0EDE6] overflow-hidden border border-[#E6E2D8]">
        {/* Main Image */}
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className={`object-cover transition-opacity duration-700 ease-in-out ${
            hovered && product.images[1] ? "opacity-0" : "opacity-100"
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Hover Swapped Image */}
        {product.images[1] && (
          <Image
            src={product.images[1]}
            alt={`${product.name} alternate view`}
            fill
            className={`object-cover transition-opacity duration-700 ease-in-out absolute inset-0 ${
              hovered ? "opacity-100 scale-102" : "opacity-0"
            }`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}

        {/* Collection Tag */}
        <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-xs px-2 py-0.5 border border-[#E6E2D8] text-[9px] uppercase tracking-widest font-semibold text-[#7A6F62]">
          {product.collection}
        </div>

        {/* Hover Slider Button */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out bg-linear-to-t from-black/50 to-transparent flex justify-center">
          <span className="w-full bg-[#FCFAF6] text-[#1A1A1A] py-2.5 text-center text-xs uppercase tracking-widest font-semibold border border-[#E6E2D8] transition-colors hover:bg-[#1A1A1A] hover:text-[#FCFAF6]">
            Atelier Customise
          </span>
        </div>
      </Link>

      {/* Description Info */}
      <div className="mt-4 flex flex-col space-y-1">
        <span className="text-[11px] uppercase tracking-widest text-[#7A6F62] font-semibold">
          {product.fabric}
        </span>
        <Link href={`/product/${product.slug}`} className="hover:text-[#C5A059] transition-colors">
          <h3 className="font-serif text-base tracking-wide text-[#1A1A1A] line-clamp-1">
            {product.name}
          </h3>
        </Link>
        <span className="font-medium text-[#1A1A1A] text-sm">
          ₹{product.price.toLocaleString("en-IN")}
        </span>
      </div>
    </div>
  );
};
