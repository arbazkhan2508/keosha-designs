"use client";

import React, { use, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PRODUCTS } from "../../../data/products";
import { useCart } from "../../../context/CartContext";
import { ProductMedia } from "../../../components/product/ProductMedia";
import { ProductInfoSection } from "../../../components/product/ProductInfoSection";
import { CustomMeasurementsForm } from "../../../components/product/CustomMeasurementsForm";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ProductPage({ params }: PageProps) {
  // Unwrap Next.js 16 async params
  const { slug } = use(params);

  // Find product by slug
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const { addToCart } = useCart();
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>("M");
  const [quantity, setQuantity] = useState(1);
  const [customBust, setCustomBust] = useState("");
  const [customWaist, setCustomWaist] = useState("");
  const [customHips, setCustomHips] = useState("");
  const [customHeight, setCustomHeight] = useState("");
  const [customNotes, setCustomNotes] = useState("");

  const handleAddToCart = () => {
    const measurements =
      selectedSize === "Custom"
        ? {
            bust: customBust || undefined,
            waist: customWaist || undefined,
            hips: customHips || undefined,
            height: customHeight || undefined,
          }
        : undefined;

    addToCart({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: selectedSize,
      customMeasurements: measurements,
      customNotes: customNotes || undefined,
      quantity,
    });
  };

  return (
    <div className="w-full bg-[#FCFAF6] font-sans py-12 px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Breadcrumbs */}
      <nav className="text-[10px] uppercase tracking-widest text-[#7A6F62] mb-10 flex items-center space-x-2">
        <Link href="/" className="hover:text-[#1A1A1A]">
          Home
        </Link>
        <span>/</span>
        <Link href="/shop" className="hover:text-[#1A1A1A]">
          Shop
        </Link>
        <span>/</span>
        <Link href={`/shop?category=${product.category}`} className="hover:text-[#1A1A1A]">
          {product.category.replace("-", " ")}
        </Link>
        <span>/</span>
        <span className="text-[#1A1A1A] font-semibold truncate max-w-[200px]">
          {product.name}
        </span>
      </nav>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Left Side: Media Gallery */}
        <ProductMedia
          images={product.images}
          selectedImageIdx={selectedImageIdx}
          setSelectedImageIdx={setSelectedImageIdx}
          productName={product.name}
        />

        {/* Right Side: Details & Atelier Custom Form */}
        <div className="flex flex-col space-y-6">
          <ProductInfoSection
            collection={product.collection}
            name={product.name}
            price={product.price}
            description={product.description}
            fabric={product.fabric}
            color={product.color}
            embroideryDetails={product.embroideryDetails}
          />

          {/* Custom Size Form */}
          <div className="space-y-4 pt-4">
            <div className="flex items-center justify-between text-xs uppercase tracking-widest text-[#1A1A1A] font-semibold">
              <span>Select Sizing</span>
              <Link href="/legacy" className="text-[#C5A059] hover:underline normal-case">
                Sizing Guide
              </Link>
            </div>

            {/* Sizing Grid Buttons */}
            <div className="grid grid-cols-4 gap-2">
              {product.sizes.map((sz) => (
                <button
                  key={sz}
                  onClick={() => setSelectedSize(sz)}
                  className={`py-2 text-xs tracking-wider uppercase border transition-colors font-medium ${
                    selectedSize === sz
                      ? "bg-[#1A1A1A] text-white border-[#1A1A1A]"
                      : "bg-white text-[#7A6F62] border-[#E6E2D8] hover:border-[#C5A059]"
                  }`}
                >
                  {sz}
                </button>
              ))}
            </div>

            {/* Custom Measurements Expandable Form */}
            {selectedSize === "Custom" && (
              <CustomMeasurementsForm
                customBust={customBust}
                setCustomBust={setCustomBust}
                customWaist={customWaist}
                setCustomWaist={setCustomWaist}
                customHips={customHips}
                setCustomHips={setCustomHips}
                customHeight={customHeight}
                setCustomHeight={setCustomHeight}
              />
            )}

            {/* Custom Notes */}
            <div className="space-y-1.5">
              <label className="block text-xs uppercase tracking-widest text-[#1A1A1A] font-semibold">
                Custom Tailoring Instructions (Optional)
              </label>
              <textarea
                rows={2}
                value={customNotes}
                onChange={(e) => setCustomNotes(e.target.value)}
                placeholder="Adjust sleeve length, request a specific color, custom blouse styling, etc."
                className="w-full bg-white border border-[#E6E2D8] p-3 text-xs outline-none focus:border-[#C5A059] transition-colors resize-none placeholder:text-[#7A6F62]/50"
              />
            </div>

            {/* Quantity and Cart Addition */}
            <div className="flex items-center space-x-4 pt-4">
              <div className="flex items-center border border-[#E6E2D8] bg-white h-12">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 text-[#7A6F62] hover:text-[#1A1A1A] transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 12H4"
                    />
                  </svg>
                </button>
                <span className="px-4 text-sm font-semibold text-[#1A1A1A]">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 text-[#7A6F62] hover:text-[#1A1A1A] transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="flex-1 bg-[#1A1A1A] hover:bg-[#C5A059] text-[#FCFAF6] h-12 flex items-center justify-center uppercase text-xs tracking-widest font-semibold transition-colors"
              >
                Add to Cart
              </button>
            </div>

            {/* WhatsApp care */}
            <div className="pt-4 border-t border-[#E6E2D8] flex items-center justify-center">
              <a
                href={`https://wa.me/919528640429?text=Hi,%20I%20am%20interested%20in%20customizing%20the%20${encodeURIComponent(
                  product.name
                )}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs uppercase tracking-widest text-[#7A6F62] hover:text-[#C5A059] transition-colors gap-2"
              >
                <svg className="w-5 h-5 text-green-500 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 1.977 14.07 1.05 11.458 1.05c-5.439 0-9.863 4.37-9.868 9.8-.001 2.01.536 3.97 1.554 5.66l-.999 3.649 3.791-.983z" />
                </svg>
                WhatsApp Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
