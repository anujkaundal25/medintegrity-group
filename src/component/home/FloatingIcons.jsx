"use client";

import React, { useEffect, useState } from "react";
import {
  FaWhatsapp,
  FaChevronUp,
} from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

export default function FloatingWidgets() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Stacked Floating Widgets on the Right Edge */}
      <div className="fixed bottom-28 right-0 z-50 flex flex-col items-end gap-2.5 font-sans pointer-events-none">
        
        {/* WhatsApp Edge-Attached Widget */}
        <a
          href="https://wa.me/YOUR_PHONE_NUMBER"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Chat"
          className="
            pointer-events-auto
            group
            flex
            items-center
            bg-[#0d2e5c]
            hover:bg-[#009a97]
            text-white
            pl-4
            pr-3.5
            py-3
            rounded-l-full
            shadow-[-4px_4px_15px_rgba(0,0,0,0.15)]
            translate-x-[calc(100%-48px)]
            hover:translate-x-0
            transition-transform
            duration-300
            ease-in-out
            cursor-pointer
          "
        >
          <div className="w-6 h-6 flex items-center justify-center shrink-0">
            <FaWhatsapp className="w-6 h-6" />
          </div>
          <span
            className="
              text-xs
              sm:text-sm
              font-bold
              tracking-wide
              opacity-0
              group-hover:opacity-100
              transition-opacity
              duration-300
              mr-3
              ml-3
              whitespace-nowrap
            "
          >
            WhatsApp
          </span>
        </a>

        {/* Call / Phone Edge-Attached Widget */}
        <a
          href="tel:YOUR_PHONE_NUMBER"
          aria-label="Call Now"
          className="
            pointer-events-auto
            group
            flex
            items-center
            bg-[#0d2e5c]
            hover:bg-[#009a97]
            text-white
            pl-4
            pr-3.5
            py-3
            rounded-l-full
            shadow-[-4px_4px_15px_rgba(0,0,0,0.15)]
            translate-x-[calc(100%-48px)]
            hover:translate-x-0
            transition-transform
            duration-300
            ease-in-out
            cursor-pointer
          "
        >
          <div className="w-6 h-6 flex items-center justify-center shrink-0">
            <FaPhone className="w-5 h-5" />
          </div>
          <span
            className="
              text-xs
              sm:text-sm
              font-bold
              tracking-wide
              opacity-0
              group-hover:opacity-100
              transition-opacity
              duration-300
              mr-3
              ml-3
              whitespace-nowrap
            "
          >
            Call Now
          </span>
        </a>
      </div>

      {/* Scroll To Top Button - Positioned Separately at Bottom-Left */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="
            fixed
            bottom-6
            right-10
            z-50
            flex
            items-center
            justify-center
            w-11
            h-11
            bg-[#0d2e5c]
            hover:bg-[#009a97]
            text-white
            rounded-full
            shadow-lg
            hover:scale-110
            transition-all
            duration-300
            ease-in-out
            cursor-pointer
          "
        >
          <FaChevronUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
}