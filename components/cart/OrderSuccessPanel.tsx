"use client";

import React from "react";

interface ShippingInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
}

interface OrderSuccessPanelProps {
  shippingInfo: ShippingInfo;
  cartTotal: number;
  onClose: () => void;
}

export const OrderSuccessPanel: React.FC<OrderSuccessPanelProps> = ({
  shippingInfo,
  cartTotal,
  onClose,
}) => {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-6">
      <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center border border-green-200">
        <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div className="space-y-2">
        <h3 className="font-serif text-lg tracking-wide text-[#1A1A1A] uppercase">
          Thank you, {shippingInfo.name}!
        </h3>
        <p className="text-xs text-[#7A6F62] leading-relaxed">
          Your luxury custom order has been simulated successfully. We&apos;ve recorded your
          measurements and notes for Sanskriti Jain&apos;s atelier.
        </p>
      </div>
      <div className="w-full bg-white p-4 border border-[#E6E2D8] text-left text-xs space-y-1 rounded-xs">
        <p className="font-semibold uppercase tracking-wider text-[#1A1A1A] font-serif text-[11px] mb-2">
          Order Summary Log
        </p>
        <p>
          <span className="text-[#7A6F62]">Delivery To:</span> {shippingInfo.address},{" "}
          {shippingInfo.city} ({shippingInfo.postalCode})
        </p>
        <p>
          <span className="text-[#7A6F62]">Contact:</span> {shippingInfo.phone} | {shippingInfo.email}
        </p>
        <p>
          <span className="text-[#7A6F62]">Order Total:</span> ₹{cartTotal.toLocaleString("en-IN")}
        </p>
      </div>
      <button
        onClick={onClose}
        className="px-6 py-2.5 bg-[#1A1A1A] hover:bg-[#C5A059] text-white uppercase text-xs tracking-widest transition-colors font-medium w-full cursor-pointer"
      >
        Return to Atelier
      </button>
    </div>
  );
};
