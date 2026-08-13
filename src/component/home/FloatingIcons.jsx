"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

export default function FloatingWidgets() {
  return (
    <div className="fixed bottom-28 right-0 z-50 flex flex-col items-end gap-2.5 pointer-events-none">
      
      {/* WhatsApp */}
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Chat"
        className="pointer-events-auto group flex items-center bg-[#0d2e5c] hover:bg-[#009a97] text-white pl-4 pr-3.5 py-3 rounded-l-full shadow-[-4px_4px_15px_rgba(0,0,0,0.15)] translate-x-[calc(100%-48px)] hover:translate-x-0 transition-transform duration-300 ease-in-out cursor-pointer"
      >
        <div className="w-6 h-6 flex items-center justify-center shrink-0">
          <FaWhatsapp className="w-6 h-6" />
        </div>

        <span className="text-xs sm:text-sm font-bold tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-3 ml-3 whitespace-nowrap">
          WhatsApp
        </span>
      </a>

      {/* Phone */}
      <a
        href="#"
        aria-label="Call Now"
        className="pointer-events-auto group flex items-center bg-[#0d2e5c] hover:bg-[#009a97] text-white pl-4 pr-3.5 py-3 rounded-l-full shadow-[-4px_4px_15px_rgba(0,0,0,0.15)] translate-x-[calc(100%-48px)] hover:translate-x-0 transition-transform duration-300 ease-in-out cursor-pointer"
      >
        <div className="w-6 h-6 flex items-center justify-center shrink-0">
          <FaPhone className="w-5 h-5" />
        </div>

        <span className="text-xs sm:text-sm font-bold tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-3 ml-3 whitespace-nowrap">
          Call Now
        </span>
      </a>
    </div>
  );
}