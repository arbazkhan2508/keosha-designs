"use client";

import React from "react";
import Link from "next/link";
import { PRODUCTS } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import { HeroSection } from "../components/home/HeroSection";
import { CategoryDiscover } from "../components/home/CategoryDiscover";
import { EditorialSpotlight } from "../components/home/EditorialSpotlight";
import { BrandPhilosophy } from "../components/home/BrandPhilosophy";
import { SocialGrid } from "../components/home/SocialGrid";
import { SpringFablesCollection } from "@/components/home/SpringFablesCollection";
import { PartnerProgramme } from "@/components/home/PartnerProgramme";
import { WallCoveringsSection } from "@/components/home/WallCoveringsSection";
import { LegacySection } from "@/components/home/LegacySection";
import { OurStoresSection } from "../components/home/OurStoresSection";
import { FeaturedInSection } from "../components/home/FeaturedInSection";

export default function Home() {
  // Get first 4 products for the homepage showcase
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="flex flex-col w-full bg-[#FCFAF6] font-sans">
      {/* 1. Hero Video Section */}
      <HeroSection />

      {/* 2. Discover by Category */}
      <CategoryDiscover />

      {/* 3. Narrative Split Spotlight (Ae Ri Sakhi) */}
      <EditorialSpotlight />

      {/* 4. Product Showcase Carousel */}
      <SpringFablesCollection />

      <PartnerProgramme />

      <WallCoveringsSection />

      <LegacySection />

      {/* Our Stores Section */}
      <OurStoresSection />

      {/* 5. Brand Philosophy & Size Inclusivity */}
      <BrandPhilosophy />

      {/* 6. Simulated Instagram Grid */}
      <SocialGrid />

      {/* 7. Featured In Section */}
      <FeaturedInSection />
    </div>
  );
}
