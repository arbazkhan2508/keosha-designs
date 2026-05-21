"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { PRODUCTS, Product } from "../../data/products";
import { ProductCard } from "../../components/ProductCard";

const ShopContent: React.FC = () => {
  const searchParams = useSearchParams();

  // Read initial query params
  const categoryParam = searchParams.get("category");
  const collectionParam = searchParams.get("collection");
  const searchParam = searchParams.get("search");

  // Filters State
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || "all");
  const [selectedCollection, setSelectedCollection] = useState<string>(collectionParam || "all");
  const [sortOrder, setSortOrder] = useState<string>("default");

  // Sync state with URL params
  useEffect(() => {
    if (categoryParam) setSelectedCategory(categoryParam);
    if (collectionParam) setSelectedCollection(collectionParam);
  }, [categoryParam, collectionParam]);

  // Filter and Sort logic
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    
    const matchesCollection =
      selectedCollection === "all" || product.collection === selectedCollection;

    const matchesSearch =
      !searchParam ||
      product.name.toLowerCase().includes(searchParam.toLowerCase()) ||
      product.description.toLowerCase().includes(searchParam.toLowerCase()) ||
      product.fabric.toLowerCase().includes(searchParam.toLowerCase());

    return matchesCategory && matchesCollection && matchesSearch;
  }).sort((a, b) => {
    if (sortOrder === "price-asc") {
      return a.price - b.price;
    }
    if (sortOrder === "price-desc") {
      return b.price - a.price;
    }
    return 0; // Default order
  });

  return (
    <div className="w-full bg-[#FCFAF6] font-sans py-12 px-6 lg:px-12 max-w-7xl mx-auto">
      
      {/* Page Title */}
      <div className="text-center space-y-4 mb-16">
        <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A] tracking-wider uppercase">
          {selectedCategory !== "all" ? `${selectedCategory.replace("-", " ")}` : "The Atelier Catalog"}
        </h2>
        {searchParam && (
          <p className="text-xs text-[#7A6F62] uppercase tracking-widest">
            Search results for: "{searchParam}"
          </p>
        )}
        <div className="w-12 h-px bg-[#C5A059] mx-auto mt-2" />
      </div>

      {/* Filter and Sort Panels */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between border-y border-[#E6E2D8] py-4 mb-12 gap-4 text-xs uppercase tracking-widest text-[#1A1A1A] font-semibold">
        {/* Left Side: Filter Options */}
        <div className="flex flex-wrap gap-6 items-center">
          {/* Category Filter */}
          <div className="flex items-center space-x-2">
            <span className="text-[#7A6F62]">Category:</span>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-transparent outline-none cursor-pointer text-[#1A1A1A] border-b border-transparent hover:border-[#C5A059] pb-0.5 font-sans"
            >
              <option className="bg-[#FAF8F5] text-[#1A1A1A]" value="all">All Items</option>
              <option className="bg-[#FAF8F5] text-[#1A1A1A]" value="sarees">Sarees</option>
              <option className="bg-[#FAF8F5] text-[#1A1A1A]" value="kurta-sets">Kurta Sets</option>
              <option className="bg-[#FAF8F5] text-[#1A1A1A]" value="anarkalis">Anarkalis</option>
              <option className="bg-[#FAF8F5] text-[#1A1A1A]" value="shararas">Shararas</option>
              <option className="bg-[#FAF8F5] text-[#1A1A1A]" value="co-ords">Co-ords</option>
            </select>
          </div>

          {/* Collection Filter */}
          <div className="flex items-center space-x-2">
            <span className="text-[#7A6F62]">Collection:</span>
            <select
              value={selectedCollection}
              onChange={(e) => setSelectedCollection(e.target.value)}
              className="bg-transparent outline-none cursor-pointer text-[#1A1A1A] border-b border-transparent hover:border-[#C5A059] pb-0.5 font-sans"
            >
              <option className="bg-[#FAF8F5] text-[#1A1A1A]" value="all">All Collections</option>
              <option className="bg-[#FAF8F5] text-[#1A1A1A]" value="Ae Ri Sakhi">Ae Ri Sakhi</option>
              <option className="bg-[#FAF8F5] text-[#1A1A1A]" value="Shaadmani">Shaadmani</option>
              <option className="bg-[#FAF8F5] text-[#1A1A1A]" value="Ajooba">Ajooba</option>
              <option className="bg-[#FAF8F5] text-[#1A1A1A]" value="Elysian Doorway">Elysian Doorway</option>
              <option className="bg-[#FAF8F5] text-[#1A1A1A]" value="Festive Essentials">Festive Essentials</option>
            </select>
          </div>
        </div>

        {/* Right Side: Sorting Options */}
        <div className="flex items-center space-x-2">
          <span className="text-[#7A6F62]">Sort By:</span>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="bg-transparent outline-none cursor-pointer text-[#1A1A1A] border-b border-transparent hover:border-[#C5A059] pb-0.5 font-sans"
          >
            <option className="bg-[#FAF8F5] text-[#1A1A1A]" value="default">Default</option>
            <option className="bg-[#FAF8F5] text-[#1A1A1A]" value="price-asc">Price: Low to High</option>
            <option className="bg-[#FAF8F5] text-[#1A1A1A]" value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-20 space-y-4">
          <svg className="w-12 h-12 text-[#C5A059]/40 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-sm text-[#7A6F62] uppercase tracking-widest font-medium">
            No items matching your criteria were found.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("all");
              setSelectedCollection("all");
              window.history.pushState({}, "", "/shop");
            }}
            className="px-6 py-2.5 border border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#FCFAF6] text-[#1A1A1A] uppercase text-xs tracking-widest transition-colors font-medium"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="flex-1 flex items-center justify-center py-40">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#C5A059]"></div>
        </div>
      }
    >
      <ShopContent />
    </Suspense>
  );
}
