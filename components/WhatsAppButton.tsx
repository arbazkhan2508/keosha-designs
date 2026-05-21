"use client";

import React from "react";

export const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/919528640429?text=Hello%20Keosha%20Designs,%20I%20would%20like%20to%20inquire%20about%20your%20collection."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-lg border border-[#E6E2D8] hover:shadow-xl hover:scale-105 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
      id="whatsapp-chat-button"
    >
      {/* WhatsApp Inner Icon Wrapper */}
      <div className="w-11 h-11 bg-[#25D366] rounded-full flex items-center justify-center shadow-xs transition-colors duration-300 group-hover:bg-[#20ba5a]">
        <svg
          className="w-6 h-6 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.003 2C6.48 2 2 6.48 2 12.003c0 1.834.498 3.551 1.363 5.029L2 22l5.122-1.31c1.42.79 3.048 1.258 4.793 1.258 5.61 0 10.088-4.478 10.088-10.002C22.003 6.48 17.525 2 12.003 2zm5.727 13.91c-.244.69-1.218 1.253-1.688 1.332-.47.08-1.077.106-1.745-.108-2.616-.838-4.382-3.486-4.512-3.66-.13-.174-1.054-1.408-1.054-2.686 0-1.277.674-1.905.914-2.158.24-.253.52-.317.694-.317.174 0 .348.003.5.013.158.01.37-.038.58.468.216.52.738 1.803.803 1.933.065.13.109.282.022.456-.087.174-.13.282-.26.435-.13.152-.273.34-.39.456-.13.13-.267.272-.115.533.152.26.674 1.116 1.442 1.801.99.882 1.821 1.157 2.082 1.287.26.13.412.109.565-.065.152-.174.652-.76.825-1.02.174-.26.348-.218.586-.13.24.087 1.52.717 1.78.847.26.13.435.195.5.304.065.109.065.63-.179 1.32z"
          />
        </svg>
      </div>
    </a>
  );
};
