"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import decor from "../../public/images/categories/decor.jpg";
import furniture from "../../public/images/categories/furniture.jpg";
import gifting from "../../public/images/categories/gifting.jpg";
import softFurnishing from "../../public/images/categories/soft-furnishing.webp";

const categories = [
  {
    title: "SOFT FURNISHINGS",
    slug: "soft-furnishings",
    image: softFurnishing,
    alt: "Soft Furnishings",
  },
  {
    title: "FURNITURE",
    slug: "furniture",
    image: furniture,
    alt: "Furniture",
  },
  {
    title: "GIFTING",
    slug: "gifting",
    image: gifting,
    alt: "Gifting",
  },
  {
    title: "DECOR",
    slug: "decor",
    image: decor,
    alt: "Decor",
  },
];

export const CategoryDiscover: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-6 py-16 w-full space-y-10">
      <div className="text-left w-full">
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-wide text-[#1A1A1A] font-normal">
          Discover by Category
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/shop?category=${category.slug}`}
            className="group flex flex-col space-y-3"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#F0EDE6] border border-[#E6E2D8] hover-image-zoom">
              <Image
                src={category.image}
                alt={category.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>

            <p className="text-xs uppercase tracking-widest text-[#1A1A1A] font-medium group-hover:text-[#C5A059] transition-colors text-left font-sans">
              {category.title}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};