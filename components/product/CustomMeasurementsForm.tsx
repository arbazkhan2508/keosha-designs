"use client";

import React from "react";

interface CustomMeasurementsFormProps {
  customBust: string;
  setCustomBust: (val: string) => void;
  customWaist: string;
  setCustomWaist: (val: string) => void;
  customHips: string;
  setCustomHips: (val: string) => void;
  customHeight: string;
  setCustomHeight: (val: string) => void;
}

export const CustomMeasurementsForm: React.FC<CustomMeasurementsFormProps> = ({
  customBust,
  setCustomBust,
  customWaist,
  setCustomWaist,
  customHips,
  setCustomHips,
  customHeight,
  setCustomHeight,
}) => {
  return (
    <div className="bg-[#FAF8F5] p-5 border border-[#E6E2D8] rounded-xs space-y-4 transition-all duration-500">
      <h4 className="font-serif text-xs uppercase tracking-wider text-[#1A1A1A] font-bold">
        Provide Custom Measurements (Inches)
      </h4>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-[10px] uppercase tracking-widest text-[#7A6F62] mb-1">
            Bust Size
          </label>
          <input
            type="text"
            value={customBust}
            onChange={(e) => setCustomBust(e.target.value)}
            placeholder="e.g. 36"
            className="w-full bg-white border border-[#E6E2D8] px-3 py-2 text-xs outline-none focus:border-[#C5A059] transition-colors"
          />
        </div>
        <div>
          <label className="block text-[10px] uppercase tracking-widest text-[#7A6F62] mb-1">
            Waist Size
          </label>
          <input
            type="text"
            value={customWaist}
            onChange={(e) => setCustomWaist(e.target.value)}
            placeholder="e.g. 30"
            className="w-full bg-white border border-[#E6E2D8] px-3 py-2 text-xs outline-none focus:border-[#C5A059] transition-colors"
          />
        </div>
        <div>
          <label className="block text-[10px] uppercase tracking-widest text-[#7A6F62] mb-1">
            Hips Size
          </label>
          <input
            type="text"
            value={customHips}
            onChange={(e) => setCustomHips(e.target.value)}
            placeholder="e.g. 40"
            className="w-full bg-white border border-[#E6E2D8] px-3 py-2 text-xs outline-none focus:border-[#C5A059] transition-colors"
          />
        </div>
        <div>
          <label className="block text-[10px] uppercase tracking-widest text-[#7A6F62] mb-1">
            Height (Feet/Inches)
          </label>
          <input
            type="text"
            value={customHeight}
            onChange={(e) => setCustomHeight(e.target.value)}
            placeholder="e.g. 5ft 6in"
            className="w-full bg-white border border-[#E6E2D8] px-3 py-2 text-xs outline-none focus:border-[#C5A059] transition-colors"
          />
        </div>
      </div>
      <p className="text-[10px] text-[#7A6F62] leading-relaxed">
        Note: Sanskriti Jain&apos;s atelier supports custom sizing up to 6XL at no extra charge. Our tailor will contact you on WhatsApp to confirm details.
      </p>
    </div>
  );
};
