"use client";

import React, { useEffect, useState, useMemo } from "react";
import { usePathname } from "next/navigation";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaPinterestP,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Our Process", href: "/our-process" },
    { name: "Contact Us", href: "/contact" },
  ];

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  // Optimized Scroll Listener
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setIsScrolled(true);
        if (currentScrollY > lastScrollY) {
          setIsMobileMenuOpen(false);
        }
      } else {
        setIsScrolled(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on wide screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-[9999] w-full bg-white shadow-sm">
      {/* =====================================================
          TOP BAR WITH SMOOTH GRID ANIMATION
      ====================================================== */}
      <div
        className={`
          grid
          transition-all
          duration-300
          ease-in-out
          w-full
          bg-[#053263]
          text-white
          ${
            isScrolled
              ? "grid-rows-[0fr] opacity-0 invisible"
              : "grid-rows-[1fr] opacity-100 visible"
          }
        `}
      >
        <div className="overflow-hidden">
          <div className="max-w-7xl mx-auto h-[40px] flex items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-0">
            {/* LEFT - CONTACT */}
            <div className="flex items-center gap-4 sm:gap-6 font-semibold tracking-wide text-[10px] sm:text-xs">
              <a
                href="mailto:procurement@medintegritygroup.com"
                className="flex items-center gap-2 hover:text-[#00a3d9] transition-colors whitespace-nowrap"
              >
                <FaEnvelope className="text-xs sm:text-sm" />
                <span className="hidden sm:inline">PROCUREMENT@MEDINTEGRITYGROUP.COM</span>
              </a>

              <a
                href="tel:+6512345678"
                className="flex items-center gap-2 hover:text-[#00a3d9] transition-colors whitespace-nowrap"
              >
                <FaPhoneAlt className="text-xs sm:text-sm" />
                <span className="hidden sm:inline">+65 1234 5678</span>
              </a>
            </div>

            {/* RIGHT - SOCIAL */}
            <div className="flex items-center gap-3 sm:gap-5 text-xs">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[#00a3d9] transition-colors">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-[#00a3d9] transition-colors">
                <FaTwitter />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-[#00a3d9] transition-colors">
                <FaYoutube />
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="hover:text-[#00a3d9] transition-colors">
                <FaPinterestP />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          MAIN NAVBAR
      ====================================================== */}
      <div className="w-full bg-white h-[72px] sm:h-[78px] lg:h-[82px] border-b border-slate-100">
        <div className="max-w-7xl mx-auto w-full h-full flex items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-0">
          {/* LOGO */}
          <a href="/" className="flex items-center shrink-0 z-20">
            <img
              src="/logo.png"
              alt="MedIntegrity Group"
              width={100}
              height={70}
              className="w-[78px] sm:w-[88px] lg:w-[100px] h-auto object-contain"
            />
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden xl:flex items-center gap-7 2xl:gap-9 h-full text-[14px] font-bold">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative flex items-center h-full whitespace-nowrap transition-all duration-300 ${
                    active
                      ? "text-[#009a97]"
                      : "text-[#0d2e5c] hover:text-[#009a97]"
                  }`}
                >
                  <span className="relative py-1">
                    {link.name}
                    {/* Underline positioned just below the text, not at navbar bottom */}
                    <span
                      className={`absolute left-1/2 -translate-x-1/2 bottom-[-6px] h-[3px] rounded-full bg-[#009a97] transition-all duration-300 ease-out ${
                        active ? "w-[80%] opacity-100" : "w-0 opacity-0"
                      }`}
                    />
                    {/* Soft teal glow under the underline, tight to text */}
                    {active && (
                      <span className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] w-12 h-3 bg-[#009a97]/30 blur-[6px] pointer-events-none rounded-full" />
                    )}
                  </span>
                </a>
              );
            })}
          </nav>

          {/* CONTACT BUTTON */}
          <div className="hidden xl:flex items-center shrink-0">
            <a
              href="/contact"
              className="group flex items-center gap-2 bg-[#0d2e5c] hover:bg-[#019a9a] text-white font-bold text-xs uppercase px-6 py-3 rounded-full transition-all duration-300 shadow-md tracking-wider hover:-translate-y-0.5"
            >
              <span>Contact Us</span>
            </a>
          </div>

          {/* MOBILE TOGGLE BUTTON */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="xl:hidden flex items-center justify-center w-11 h-11 text-[#0d2e5c] text-xl rounded-lg bg-slate-100 border border-slate-200 hover:bg-slate-200 transition-colors focus:outline-none z-20"
            aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* =================================================
            MOBILE DROPDOWN MENU
        ================================================== */}
        <div
          className={`
            xl:hidden
            absolute
            top-full
            left-0
            w-full
            bg-white
            border-t
            border-slate-100
            shadow-xl
            overflow-hidden
            transition-all
            duration-300
            ease-in-out
            ${
              isMobileMenuOpen
                ? "max-h-[500px] opacity-100 visible"
                : "max-h-0 opacity-0 invisible"
            }
          `}
        >
          <nav className="flex flex-col gap-2 px-5 py-5">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block w-full py-3 px-4 rounded-lg text-sm font-bold transition-all ${
                    active
                      ? "bg-[#009a97]/10 text-[#009a97] border-l-4 border-[#009a97]"
                      : "text-[#0d2e5c] hover:bg-slate-100 hover:text-[#009a97]"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}

            <div className="border-t border-slate-200 my-2" />

            <a
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-[#0d2e5c] hover:bg-[#00a3d9] text-white font-bold text-xs uppercase py-3.5 rounded-xl tracking-wider shadow-md transition-colors"
            >
              <span>Contact Us</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}