"use client";

import React from "react";
import Image from "next/image";
import { CartItem } from "../../context/CartContext";

interface CartItemRowProps {
  item: CartItem;
  updateQuantity: (id: string, qty: number) => void;
  removeFromCart: (id: string) => void;
}

export const CartItemRow: React.FC<CartItemRowProps> = ({
  item,
  updateQuantity,
  removeFromCart,
}) => {
  return (
    <div className="flex space-x-4 border-b border-[#E6E2D8]/50 pb-6 last:border-b-0 last:pb-0">
      {/* Image */}
      <div className="relative w-20 h-28 bg-[#FAF8F5] border border-[#E6E2D8] overflow-hidden flex-shrink-0">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
          sizes="80px"
        />
      </div>

      {/* Description */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-serif text-sm tracking-wide text-[#1A1A1A] hover:text-[#C5A059] transition-colors">
            {item.name}
          </h3>

          {/* Selected Size / Custom Option */}
          <div className="mt-1 flex items-center space-x-2">
            <span className="text-[10px] uppercase tracking-widest bg-[#E6E2D8]/40 px-2 py-0.5 text-[#7A6F62] font-semibold">
              Size: {item.size}
            </span>
          </div>

          {/* Custom Sizing Summary */}
          {item.size === "Custom" && item.customMeasurements && (
            <div className="mt-2 text-[11px] text-[#7A6F62] bg-white p-2 border border-[#E6E2D8] rounded-xs space-y-0.5">
              <p className="font-medium text-[#1A1A1A]">Measurements (inches):</p>
              <div className="grid grid-cols-2 gap-1 text-[10px]">
                {item.customMeasurements.bust && (
                  <span>Bust: {item.customMeasurements.bust}&quot;</span>
                )}
                {item.customMeasurements.waist && (
                  <span>Waist: {item.customMeasurements.waist}&quot;</span>
                )}
                {item.customMeasurements.hips && (
                  <span>Hips: {item.customMeasurements.hips}&quot;</span>
                )}
                {item.customMeasurements.height && (
                  <span>Height: {item.customMeasurements.height}</span>
                )}
              </div>
            </div>
          )}

          {item.customNotes && (
            <p className="mt-1.5 text-[10px] text-[#7A6F62] italic bg-yellow-50/50 p-1.5 border border-[#E6E2D8] rounded-xs">
              Note: &quot;{item.customNotes}&quot;
            </p>
          )}
        </div>

        {/* Controls & Price */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center border border-[#E6E2D8] bg-white">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="px-2 py-1 text-[#7A6F62] hover:text-[#1A1A1A] hover:bg-gray-50 transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
            </button>
            <span className="px-3 text-xs font-semibold text-[#1A1A1A]">{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="px-2 py-1 text-[#7A6F62] hover:text-[#1A1A1A] hover:bg-gray-50 transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>

          <div className="flex items-center space-x-3">
            <span className="text-sm font-medium text-[#1A1A1A]">
              ₹{(item.price * item.quantity).toLocaleString("en-IN")}
            </span>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-gray-400 hover:text-red-600 transition-colors"
              title="Remove item"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
