"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { PRODUCTS, Product } from "../../data/products";
import { ProductCard } from "../../components/ProductCard";

const CATEGORY_NAMES: Record<string, string> = {
  cushions: "Cushions",
  bedspreads: "Bed Linen",
  furniture: "Furniture",
  fabrics: "Fabrics",
  decor: "Decor",
  sarees: "Sarees",
  "kurta-sets": "Kurta Sets",
  anarkalis: "Anarkalis",
  shararas: "Shararas",
  "co-ords": "Co-ords",
};

const SIZE_OPTIONS = [
  "XS",
  "S",
  "M",
  "L",
  "XL",
  "XXL",
  "Single",
  "Double",
  "King",
  "Super King",
  "16x16 inches",
  "18x18 inches",
  "12x18 inches",
  "Standard",
  "Per Meter",
];

const MATERIAL_OPTIONS = [
  { value: "cotton velvet", label: "Cotton Velvet" },
  { value: "linen", label: "Handloom Linen" },
  { value: "waffle cotton", label: "Waffle Cotton" },
  { value: "leather", label: "Top-Grain Leather" },
  { value: "bronze", label: "Cast Bronze" },
  { value: "silk", label: "Silk / Raw Silk" },
  { value: "velvet", label: "Premium Velvet" },
  { value: "georgette", label: "Georgette Silk" },
  { value: "chanderi", label: "Chanderi Silk" },
];

const COLOR_OPTIONS = [
  { value: "khaki / beige", label: "Khaki / Beige" },
  { value: "sage green", label: "Sage Green" },
  { value: "peach", label: "Peach" },
  { value: "tan brown", label: "Tan Brown" },
  { value: "bronze black / aged bronze", label: "Antique Bronze" },
  { value: "ivory / white", label: "Ivory / White" },
  { value: "crimson red", label: "Crimson Red" },
  { value: "gold / cream", label: "Gold / Cream" },
  { value: "lavender", label: "Lavender" },
];

const PRICE_OPTIONS = [
  { value: "under-10k", label: "Under ₹10,000" },
  { value: "10k-30k", label: "₹10,000 - ₹30,000" },
  { value: "30k-50k", label: "₹30,000 - ₹50,000" },
  { value: "over-50k", label: "Over ₹50,000" },
];

const SORT_OPTIONS = [
  { value: "default", label: "Default" },
  { value: "alpha-asc", label: "Alphabetical : A-Z" },
  { value: "price-asc", label: "Price : Low to High" },
  { value: "price-desc", label: "Price : High to Low" },
];

const matchesFabricOption = (fabricField: string, option: string) => {
  const field = fabricField.toLowerCase();
  const opt = option.toLowerCase();
  if (opt === "cotton velvet") return field.includes("cotton velvet");
  if (opt === "linen") return field.includes("linen");
  if (opt === "waffle cotton") return field.includes("waffle cotton") || field.includes("waffle");
  if (opt === "leather") return field.includes("leather");
  if (opt === "bronze") return field.includes("bronze");
  if (opt === "silk") return field.includes("silk");
  if (opt === "georgette") return field.includes("georgette");
  if (opt === "chanderi") return field.includes("chanderi");
  if (opt === "velvet") return field.includes("velvet") && !field.includes("cotton velvet");
  return field.includes(opt);
};

const matchesColorOption = (colorField: string, option: string) => {
  const field = colorField.toLowerCase();
  const opt = option.toLowerCase();
  if (opt === "khaki / beige") return field.includes("khaki") || field.includes("beige");
  if (opt === "sage green") return field.includes("sage") || field.includes("green");
  if (opt === "peach") return field.includes("peach");
  if (opt === "tan brown") return field.includes("tan") || field.includes("brown");
  if (opt === "bronze black / aged bronze") return field.includes("bronze");
  if (opt === "ivory / white") return field.includes("ivory") || field.includes("white");
  if (opt === "crimson red") return field.includes("crimson") || field.includes("red");
  if (opt === "gold / cream") return field.includes("gold") || field.includes("cream") || field.includes("ochre");
  if (opt === "lavender") return field.includes("lavender");
  return field.includes(opt);
};

const ShopContent: React.FC = () => {
  const searchParams = useSearchParams();

  // Read initial query params
  const categoryParam = searchParams.get("category");
  const collectionParam = searchParams.get("collection");
  const searchParam = searchParams.get("search");

  // Drawer open states
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  // Applied Filters State
  const [appliedCategories, setAppliedCategories] = useState<string[]>([]);
  const [appliedCollections, setAppliedCollections] = useState<string[]>([]);
  const [appliedSizes, setAppliedSizes] = useState<string[]>([]);
  const [appliedFabrics, setAppliedFabrics] = useState<string[]>([]);
  const [appliedColors, setAppliedColors] = useState<string[]>([]);
  const [appliedPriceRange, setAppliedPriceRange] = useState<string>("");
  const [appliedSort, setAppliedSort] = useState<string>("default");

  // Temporary Drawer States (before clicking Apply)
  const [tempCategories, setTempCategories] = useState<string[]>([]);
  const [tempCollections, setTempCollections] = useState<string[]>([]);
  const [tempSizes, setTempSizes] = useState<string[]>([]);
  const [tempFabrics, setTempFabrics] = useState<string[]>([]);
  const [tempColors, setTempColors] = useState<string[]>([]);
  const [tempPriceRange, setTempPriceRange] = useState<string>("");
  const [tempSort, setTempSort] = useState<string>("default");

  // Accordions active states
  const [accordionOpen, setAccordionOpen] = useState({
    size: true,
    material: true,
    color: true,
    price: true,
    type: true,
    collection: false,
  });

  // Sync state with URL params when they change
  useEffect(() => {
    if (categoryParam) {
      setAppliedCategories([categoryParam]);
      setTempCategories([categoryParam]);
    } else {
      setAppliedCategories([]);
      setTempCategories([]);
    }
  }, [categoryParam]);

  useEffect(() => {
    if (collectionParam) {
      setAppliedCollections([collectionParam]);
      setTempCollections([collectionParam]);
    } else {
      setAppliedCollections([]);
      setTempCollections([]);
    }
  }, [collectionParam]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isFilterOpen || isSortOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isFilterOpen, isSortOpen]);

  // Filter and Sort logic
  const filteredProducts = PRODUCTS.filter((product) => {
    // Category (Type) Filter
    const matchesCategory =
      appliedCategories.length === 0 || appliedCategories.includes(product.category);

    // Collection Filter
    const matchesCollection =
      appliedCollections.length === 0 || appliedCollections.includes(product.collection);

    // Size Filter
    const matchesSize =
      appliedSizes.length === 0 || product.sizes.some((s) => appliedSizes.includes(s));

    // Material (Fabric) Filter
    const matchesFabric =
      appliedFabrics.length === 0 ||
      appliedFabrics.some((fab) => matchesFabricOption(product.fabric, fab));

    // Color Filter
    const matchesColor =
      appliedColors.length === 0 ||
      appliedColors.some((col) => matchesColorOption(product.color, col));

    // Price Filter
    let matchesPrice = true;
    if (appliedPriceRange) {
      if (appliedPriceRange === "under-10k") matchesPrice = product.price < 10000;
      else if (appliedPriceRange === "10k-30k")
        matchesPrice = product.price >= 10000 && product.price <= 30000;
      else if (appliedPriceRange === "30k-50k")
        matchesPrice = product.price >= 30000 && product.price <= 50000;
      else if (appliedPriceRange === "over-50k") matchesPrice = product.price > 50000;
    }

    // Search Query Filter
    const matchesSearch =
      !searchParam ||
      product.name.toLowerCase().includes(searchParam.toLowerCase()) ||
      product.description.toLowerCase().includes(searchParam.toLowerCase()) ||
      product.fabric.toLowerCase().includes(searchParam.toLowerCase());

    return (
      matchesCategory &&
      matchesCollection &&
      matchesSize &&
      matchesFabric &&
      matchesColor &&
      matchesPrice &&
      matchesSearch
    );
  }).sort((a, b) => {
    if (appliedSort === "price-asc") {
      return a.price - b.price;
    }
    if (appliedSort === "price-desc") {
      return b.price - a.price;
    }
    if (appliedSort === "alpha-asc") {
      return a.name.localeCompare(b.name);
    }
    return 0; // Default
  });

  const toggleAccordion = (section: keyof typeof accordionOpen) => {
    setAccordionOpen((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleApplyFilters = () => {
    setAppliedCategories(tempCategories);
    setAppliedCollections(tempCollections);
    setAppliedSizes(tempSizes);
    setAppliedFabrics(tempFabrics);
    setAppliedColors(tempColors);
    setAppliedPriceRange(tempPriceRange);
    setIsFilterOpen(false);
  };

  const handleClearFilters = () => {
    setTempCategories([]);
    setTempCollections([]);
    setTempSizes([]);
    setTempFabrics([]);
    setTempColors([]);
    setTempPriceRange("");
  };

  const handleApplySort = () => {
    setAppliedSort(tempSort);
    setIsSortOpen(false);
  };

  const handleClearSort = () => {
    setTempSort("default");
  };

  const handleResetAll = () => {
    setAppliedCategories([]);
    setAppliedCollections([]);
    setAppliedSizes([]);
    setAppliedFabrics([]);
    setAppliedColors([]);
    setAppliedPriceRange("");
    setAppliedSort("default");

    setTempCategories([]);
    setTempCollections([]);
    setTempSizes([]);
    setTempFabrics([]);
    setTempColors([]);
    setTempPriceRange("");
    setTempSort("default");

    window.history.pushState({}, "", "/shop");
  };

  return (
    <div className="w-full bg-[#FCFAF6] font-sans py-16 px-6 lg:px-12 max-w-7xl mx-auto min-h-screen relative">

      {/* Page Title Header */}
      <div className="flex items-end justify-between pb-6 mb-12 gap-4">
        <div className="space-y-2 md:space-y-4">
          <h1 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A] tracking-wider">
            {appliedCategories.length === 1
              ? CATEGORY_NAMES[appliedCategories[0]] || appliedCategories[0]
              : "The Atelier Catalog"}
          </h1>
          <p className="text-sm text-[#7A6F62] uppercase tracking-[0.2em]">
            ITEMS {filteredProducts.length}
          </p>
        </div>

        {/* Filter and Sort Action Triggers */}
        <div className="flex items-center space-x-8 text-xs uppercase tracking-widest text-[#1A1A1A] font-semibold">
          <button
            onClick={() => {
              setTempCategories([...appliedCategories]);
              setTempCollections([...appliedCollections]);
              setTempSizes([...appliedSizes]);
              setTempFabrics([...appliedFabrics]);
              setTempColors([...appliedColors]);
              setTempPriceRange(appliedPriceRange);
              setIsFilterOpen(true);
            }}
            className="cursor-pointer hover:text-[#C5A059] transition-colors"
          >
            FILTER
          </button>

          <button
            onClick={() => {
              setTempSort(appliedSort);
              setIsSortOpen(true);
            }}
            className="cursor-pointer hover:text-[#C5A059] transition-colors"
          >
            SORT
          </button>
        </div>
      </div>

      {searchParam && (
        <div className="mb-8 -mt-6">
          <p className="text-xs text-[#7A6F62] uppercase tracking-widest">
            Search results for: <span className="font-semibold text-[#1A1A1A]">"{searchParam}"</span>
          </p>
        </div>
      )}

      {/* Active Filter Badges */}
      {(appliedCategories.length > 0 ||
        appliedCollections.length > 0 ||
        appliedSizes.length > 0 ||
        appliedFabrics.length > 0 ||
        appliedColors.length > 0 ||
        appliedPriceRange !== "" ||
        appliedSort !== "default") && (
          <div className="flex flex-wrap gap-2 items-center mb-8">
            <span className="text-[10px] text-[#7A6F62] uppercase tracking-widest font-semibold mr-2">Active:</span>
            {appliedCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  const updated = appliedCategories.filter((c) => c !== cat);
                  setAppliedCategories(updated);
                  setTempCategories(updated);
                }}
                className="px-2.5 py-1 bg-[#FAF8F5] border border-[#E6E2D8] text-[9px] uppercase tracking-wider text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors duration-200"
              >
                Category: {CATEGORY_NAMES[cat] || cat} ✕
              </button>
            ))}
            {appliedCollections.map((col) => (
              <button
                key={col}
                onClick={() => {
                  const updated = appliedCollections.filter((c) => c !== col);
                  setAppliedCollections(updated);
                  setTempCollections(updated);
                }}
                className="px-2.5 py-1 bg-[#FAF8F5] border border-[#E6E2D8] text-[9px] uppercase tracking-wider text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors duration-200"
              >
                Collection: {col} ✕
              </button>
            ))}
            {appliedSizes.map((size) => (
              <button
                key={size}
                onClick={() => {
                  const updated = appliedSizes.filter((s) => s !== size);
                  setAppliedSizes(updated);
                  setTempSizes(updated);
                }}
                className="px-2.5 py-1 bg-[#FAF8F5] border border-[#E6E2D8] text-[9px] uppercase tracking-wider text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors duration-200"
              >
                Size: {size} ✕
              </button>
            ))}
            {appliedFabrics.map((fab) => (
              <button
                key={fab}
                onClick={() => {
                  const updated = appliedFabrics.filter((f) => f !== fab);
                  setAppliedFabrics(updated);
                  setTempFabrics(updated);
                }}
                className="px-2.5 py-1 bg-[#FAF8F5] border border-[#E6E2D8] text-[9px] uppercase tracking-wider text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors duration-200"
              >
                Material: {fab} ✕
              </button>
            ))}
            {appliedColors.map((col) => (
              <button
                key={col}
                onClick={() => {
                  const updated = appliedColors.filter((c) => c !== col);
                  setAppliedColors(updated);
                  setTempColors(updated);
                }}
                className="px-2.5 py-1 bg-[#FAF8F5] border border-[#E6E2D8] text-[9px] uppercase tracking-wider text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors duration-200"
              >
                Color: {col} ✕
              </button>
            ))}
            {appliedPriceRange && (
              <button
                onClick={() => {
                  setAppliedPriceRange("");
                  setTempPriceRange("");
                }}
                className="px-2.5 py-1 bg-[#FAF8F5] border border-[#E6E2D8] text-[9px] uppercase tracking-wider text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors duration-200"
              >
                Price: {PRICE_OPTIONS.find((p) => p.value === appliedPriceRange)?.label} ✕
              </button>
            )}
            {appliedSort !== "default" && (
              <button
                onClick={() => {
                  setAppliedSort("default");
                  setTempSort("default");
                }}
                className="px-2.5 py-1 bg-[#FAF8F5] border border-[#E6E2D8] text-[9px] uppercase tracking-wider text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors duration-200"
              >
                Sort: {SORT_OPTIONS.find((s) => s.value === appliedSort)?.label} ✕
              </button>
            )}
            <button
              onClick={handleResetAll}
              className="text-[9px] uppercase tracking-widest font-bold text-[#C5A059] border-b border-[#C5A059] hover:text-[#1A1A1A] hover:border-[#1A1A1A] transition-colors ml-2"
            >
              Clear All
            </button>
          </div>
        )}

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-24 space-y-4">
          <svg className="w-12 h-12 text-[#C5A059]/40 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-sm text-[#7A6F62] uppercase tracking-widest font-medium">
            No items matching your criteria were found.
          </p>
          <button
            onClick={handleResetAll}
            className="px-6 py-2.5 border border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#FCFAF6] text-[#1A1A1A] uppercase text-xs tracking-widest transition-colors font-semibold"
          >
            Clear All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {/* DRAWERS & OVERLAYS */}

      {/* Filter Drawer Overlay Backdrop */}
      {isFilterOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-xs z-50 transition-opacity duration-300"
          onClick={() => setIsFilterOpen(false)}
        />
      )}

      {/* Filter Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[450px] max-w-full bg-[#FCFAF6] border-l border-[#E6E2D8] z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${isFilterOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Drawer Header */}
        <div className="border-b border-[#E6E2D8] p-6 flex justify-between items-center bg-[#FAF8F5]">
          <h2 className="font-serif text-2xl tracking-wide text-[#1A1A1A] uppercase">Filters</h2>
          <button
            onClick={() => setIsFilterOpen(false)}
            className="p-2 -mr-2 text-[#7A6F62] hover:text-[#1A1A1A] transition-colors cursor-pointer text-xl font-light"
          >
            ✕
          </button>
        </div>

        {/* Drawer Body Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">

          {/* SIZE Accordion */}
          <div className="space-y-3">
            <button
              onClick={() => toggleAccordion("size")}
              className="w-full text-xs uppercase tracking-widest text-[#1A1A1A] font-bold border-b border-[#E6E2D8]/80 pb-2 flex justify-between items-center cursor-pointer"
            >
              <span>Size</span>
              <span className="text-[#C5A059] font-semibold text-sm">
                {accordionOpen.size ? "−" : "+"}
              </span>
            </button>
            {accordionOpen.size && (
              <div className="grid grid-cols-2 gap-2 pt-1">
                {SIZE_OPTIONS.map((size) => {
                  const isChecked = tempSizes.includes(size);
                  return (
                    <label
                      key={size}
                      className="flex items-center space-x-2.5 text-xs text-[#554E45] cursor-pointer hover:text-[#1A1A1A] transition-colors py-1.5"
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setTempSizes([...tempSizes, size]);
                          } else {
                            setTempSizes(tempSizes.filter((s) => s !== size));
                          }
                        }}
                        className="w-4 h-4 border-[#C8C2B7] text-[#C5A059] focus:ring-0 focus:ring-offset-0 rounded-xs accent-[#1A1A1A] cursor-pointer"
                      />
                      <span className="uppercase tracking-wider font-medium">{size}</span>
                    </label>
                  );
                })}
              </div>
            )}
          </div>

          {/* MATERIAL Accordion */}
          <div className="space-y-3">
            <button
              onClick={() => toggleAccordion("material")}
              className="w-full text-xs uppercase tracking-widest text-[#1A1A1A] font-bold border-b border-[#E6E2D8]/80 pb-2 flex justify-between items-center cursor-pointer"
            >
              <span>Material</span>
              <span className="text-[#C5A059] font-semibold text-sm">
                {accordionOpen.material ? "−" : "+"}
              </span>
            </button>
            {accordionOpen.material && (
              <div className="space-y-2 pt-1">
                {MATERIAL_OPTIONS.map((mat) => {
                  const isChecked = tempFabrics.includes(mat.value);
                  return (
                    <label
                      key={mat.value}
                      className="flex items-center space-x-3 text-xs text-[#554E45] cursor-pointer hover:text-[#1A1A1A] transition-colors py-1"
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setTempFabrics([...tempFabrics, mat.value]);
                          } else {
                            setTempFabrics(tempFabrics.filter((f) => f !== mat.value));
                          }
                        }}
                        className="w-4 h-4 border-[#C8C2B7] text-[#C5A059] focus:ring-0 focus:ring-offset-0 rounded-xs accent-[#1A1A1A] cursor-pointer"
                      />
                      <span className="uppercase tracking-widest font-medium">{mat.label}</span>
                    </label>
                  );
                })}
              </div>
            )}
          </div>

          {/* COLOR Accordion */}
          <div className="space-y-3">
            <button
              onClick={() => toggleAccordion("color")}
              className="w-full text-xs uppercase tracking-widest text-[#1A1A1A] font-bold border-b border-[#E6E2D8]/80 pb-2 flex justify-between items-center cursor-pointer"
            >
              <span>Color</span>
              <span className="text-[#C5A059] font-semibold text-sm">
                {accordionOpen.color ? "−" : "+"}
              </span>
            </button>
            {accordionOpen.color && (
              <div className="space-y-2 pt-1">
                {COLOR_OPTIONS.map((col) => {
                  const isChecked = tempColors.includes(col.value);
                  return (
                    <label
                      key={col.value}
                      className="flex items-center space-x-3 text-xs text-[#554E45] cursor-pointer hover:text-[#1A1A1A] transition-colors py-1"
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setTempColors([...tempColors, col.value]);
                          } else {
                            setTempColors(tempColors.filter((c) => c !== col.value));
                          }
                        }}
                        className="w-4 h-4 border-[#C8C2B7] text-[#C5A059] focus:ring-0 focus:ring-offset-0 rounded-xs accent-[#1A1A1A] cursor-pointer"
                      />
                      <span className="uppercase tracking-widest font-medium">{col.label}</span>
                    </label>
                  );
                })}
              </div>
            )}
          </div>

          {/* PRICE Accordion */}
          <div className="space-y-3">
            <button
              onClick={() => toggleAccordion("price")}
              className="w-full text-xs uppercase tracking-widest text-[#1A1A1A] font-bold border-b border-[#E6E2D8]/80 pb-2 flex justify-between items-center cursor-pointer"
            >
              <span>Price</span>
              <span className="text-[#C5A059] font-semibold text-sm">
                {accordionOpen.price ? "−" : "+"}
              </span>
            </button>
            {accordionOpen.price && (
              <div className="space-y-2 pt-1">
                {PRICE_OPTIONS.map((pr) => {
                  const isChecked = tempPriceRange === pr.value;
                  return (
                    <label
                      key={pr.value}
                      className="flex items-center space-x-3 text-xs text-[#554E45] cursor-pointer hover:text-[#1A1A1A] transition-colors py-1"
                    >
                      <input
                        type="radio"
                        name="tempPriceRange"
                        checked={isChecked}
                        onChange={() => setTempPriceRange(pr.value)}
                        className="w-4 h-4 border-[#C8C2B7] text-[#C5A059] focus:ring-0 focus:ring-offset-0 accent-[#1A1A1A] cursor-pointer"
                      />
                      <span className="uppercase tracking-widest font-medium">{pr.label}</span>
                    </label>
                  );
                })}
              </div>
            )}
          </div>

          {/* TYPE (Category) Accordion */}
          <div className="space-y-3">
            <button
              onClick={() => toggleAccordion("type")}
              className="w-full text-xs uppercase tracking-widest text-[#1A1A1A] font-bold border-b border-[#E6E2D8]/80 pb-2 flex justify-between items-center cursor-pointer"
            >
              <span>Type</span>
              <span className="text-[#C5A059] font-semibold text-sm">
                {accordionOpen.type ? "−" : "+"}
              </span>
            </button>
            {accordionOpen.type && (
              <div className="space-y-2 pt-1">
                {Object.entries(CATEGORY_NAMES).map(([key, name]) => {
                  const isChecked = tempCategories.includes(key);
                  return (
                    <label
                      key={key}
                      className="flex items-center space-x-3 text-xs text-[#554E45] cursor-pointer hover:text-[#1A1A1A] transition-colors py-1"
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setTempCategories([...tempCategories, key]);
                          } else {
                            setTempCategories(tempCategories.filter((c) => c !== key));
                          }
                        }}
                        className="w-4 h-4 border-[#C8C2B7] text-[#C5A059] focus:ring-0 focus:ring-offset-0 rounded-xs accent-[#1A1A1A] cursor-pointer"
                      />
                      <span className="uppercase tracking-widest font-medium">{name}</span>
                    </label>
                  );
                })}
              </div>
            )}
          </div>

        </div>

        {/* Drawer Footer Controls */}
        <div className="border-t border-[#E6E2D8] p-6 bg-[#FCFAF6] flex items-center justify-between">
          <button
            onClick={handleClearFilters}
            className="text-xs uppercase tracking-widest text-[#7A6F62] hover:text-[#1A1A1A] font-semibold transition-colors border-b border-transparent hover:border-[#1A1A1A]"
          >
            Clear All
          </button>
          <button
            onClick={handleApplyFilters}
            className="bg-[#1A1A1A] hover:bg-[#C5A059] text-white px-8 py-3.5 text-xs uppercase tracking-widest font-bold transition-colors cursor-pointer"
          >
            Apply Filters
          </button>
        </div>
      </div>

      {/* Sort Drawer Overlay Backdrop */}
      {isSortOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-xs z-50 transition-opacity duration-300"
          onClick={() => setIsSortOpen(false)}
        />
      )}

      {/* Sort Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[450px] max-w-full bg-[#FCFAF6] border-l border-[#E6E2D8] z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${isSortOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Drawer Header */}
        <div className="border-b border-[#E6E2D8] p-6 flex justify-between items-center bg-[#FAF8F5]">
          <h2 className="font-serif text-2xl tracking-wide text-[#1A1A1A] uppercase">Sort By</h2>
          <button
            onClick={() => setIsSortOpen(false)}
            className="p-2 -mr-2 text-[#7A6F62] hover:text-[#1A1A1A] transition-colors cursor-pointer text-xl font-light"
          >
            ✕
          </button>
        </div>

        {/* Drawer Body content */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
          {SORT_OPTIONS.map((opt) => {
            const isChecked = tempSort === opt.value;
            return (
              <label
                key={opt.value}
                className="flex items-center space-x-3.5 text-xs text-[#554E45] cursor-pointer hover:text-[#1A1A1A] transition-colors py-2.5 border-b border-[#E6E2D8]/40"
              >
                <input
                  type="radio"
                  name="tempSort"
                  checked={isChecked}
                  onChange={() => setTempSort(opt.value)}
                  className="w-4 h-4 border-[#C8C2B7] text-[#C5A059] focus:ring-0 focus:ring-offset-0 accent-[#1A1A1A] cursor-pointer"
                />
                <span className="uppercase tracking-widest font-semibold">{opt.label}</span>
              </label>
            );
          })}
        </div>

        {/* Drawer Footer Controls */}
        <div className="border-t border-[#E6E2D8] p-6 bg-[#FCFAF6] flex items-center justify-between">
          <button
            onClick={handleClearSort}
            className="text-xs uppercase tracking-widest text-[#7A6F62] hover:text-[#1A1A1A] font-semibold transition-colors border-b border-transparent hover:border-[#1A1A1A]"
          >
            Clear All
          </button>
          <button
            onClick={handleApplySort}
            className="bg-[#1A1A1A] hover:bg-[#C5A059] text-white px-8 py-3.5 text-xs uppercase tracking-widest font-bold transition-colors cursor-pointer"
          >
            Apply
          </button>
        </div>
      </div>

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
