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

interface CheckoutFormProps {
  shippingInfo: ShippingInfo;
  setShippingInfo: React.Dispatch<React.SetStateAction<ShippingInfo>>;
  onSubmit: (e: React.FormEvent) => void;
  cartTotal: number;
}

export const CheckoutForm: React.FC<CheckoutFormProps> = ({
  shippingInfo,
  setShippingInfo,
  onSubmit,
  cartTotal,
}) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4 font-sans text-sm">
      <div>
        <label className="block text-xs uppercase tracking-widest text-[#7A6F62] mb-1">
          Full Name
        </label>
        <input
          type="text"
          required
          value={shippingInfo.name}
          onChange={(e) => setShippingInfo({ ...shippingInfo, name: e.target.value })}
          className="w-full bg-white border border-[#E6E2D8] px-4 py-2.5 outline-none focus:border-[#C5A059] transition-colors"
          placeholder="Sanskriti Jain"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs uppercase tracking-widest text-[#7A6F62] mb-1">Email</label>
          <input
            type="email"
            required
            value={shippingInfo.email}
            onChange={(e) => setShippingInfo({ ...shippingInfo, email: e.target.value })}
            className="w-full bg-white border border-[#E6E2D8] px-4 py-2.5 outline-none focus:border-[#C5A059] transition-colors"
            placeholder="sanskriti@example.com"
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest text-[#7A6F62] mb-1">Phone</label>
          <input
            type="tel"
            required
            value={shippingInfo.phone}
            onChange={(e) => setShippingInfo({ ...shippingInfo, phone: e.target.value })}
            className="w-full bg-white border border-[#E6E2D8] px-4 py-2.5 outline-none focus:border-[#C5A059] transition-colors"
            placeholder="+91 95286 40429"
          />
        </div>
      </div>
      <div>
        <label className="block text-xs uppercase tracking-widest text-[#7A6F62] mb-1">
          Shipping Address
        </label>
        <textarea
          required
          rows={3}
          value={shippingInfo.address}
          onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
          className="w-full bg-white border border-[#E6E2D8] px-4 py-2.5 outline-none focus:border-[#C5A059] transition-colors resize-none"
          placeholder="Studio Address or Residence"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs uppercase tracking-widest text-[#7A6F62] mb-1">City</label>
          <input
            type="text"
            required
            value={shippingInfo.city}
            onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
            className="w-full bg-white border border-[#E6E2D8] px-4 py-2.5 outline-none focus:border-[#C5A059] transition-colors"
            placeholder="Lucknow"
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest text-[#7A6F62] mb-1">
            Postal Code
          </label>
          <input
            type="text"
            required
            value={shippingInfo.postalCode}
            onChange={(e) => setShippingInfo({ ...shippingInfo, postalCode: e.target.value })}
            className="w-full bg-white border border-[#E6E2D8] px-4 py-2.5 outline-none focus:border-[#C5A059] transition-colors"
            placeholder="226001"
          />
        </div>
      </div>

      <div className="bg-white p-4 border border-[#E6E2D8] rounded-xs mt-6 space-y-2">
        <h4 className="font-serif text-[#1A1A1A] font-semibold text-xs tracking-wider uppercase">
          Order summary
        </h4>
        <div className="flex justify-between text-xs text-[#7A6F62]">
          <span>Items Total</span>
          <span>₹{cartTotal.toLocaleString("en-IN")}</span>
        </div>
        <div className="flex justify-between text-xs text-[#7A6F62]">
          <span>Shipping</span>
          <span className="text-green-600 font-semibold">FREE</span>
        </div>
        <div className="border-t border-[#E6E2D8] pt-2 flex justify-between font-serif font-bold text-sm text-[#1A1A1A]">
          <span>Total Pay</span>
          <span>₹{cartTotal.toLocaleString("en-IN")}</span>
        </div>
      </div>

      <button
        type="submit"
        className="w-full mt-6 bg-[#C5A059] hover:bg-[#1A1A1A] text-white py-3 uppercase text-xs tracking-widest transition-colors font-medium cursor-pointer"
      >
        Place Mock Order
      </button>
    </form>
  );
};
