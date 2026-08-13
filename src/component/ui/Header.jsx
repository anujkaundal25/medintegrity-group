"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaPinterestP,
  FaBars,
  FaTimes,
  FaArrowRight,
} from "react-icons/fa";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Our Process", href: "/process" },
    { name: "Contact Us", href: "/contact" },
  ];

  /* =========================================================
     SCROLL HANDLER
  ========================================================= */
  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;

      ticking.current = true;

      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;

        // At the very top
        if (currentScrollY <= 10) {
          setIsScrolled(false);
          lastScrollY.current = currentScrollY;
          ticking.current = false;
          return;
        }

        // Scrolling DOWN
        if (
          currentScrollY > lastScrollY.current &&
          currentScrollY > 80
        ) {
          setIsScrolled(true);
          setIsMobileMenuOpen(false);
        }
        // Scrolling UP
        else if (currentScrollY < lastScrollY.current) {
          setIsScrolled(false);
        }

        lastScrollY.current = currentScrollY;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================================
     CLOSE MOBILE MENU ON DESKTOP RESIZE
  ========================================================= */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className={`
        sticky
        top-0
        z-[9999]
        w-full  
        bg-white
        transition-shadow
        duration-300
        ${isScrolled ? "shadow-md" : "shadow-none"}
      `}
    >
      {/* =====================================================
          TOP BAR
      ====================================================== */}
      <div
        className={`
          w-full
          bg-[#053263]
          text-white
          overflow-hidden
          transition-all
          duration-300
          ease-in-out
          ${isScrolled ? "h-0 opacity-0" : "h-[40px] opacity-100"}
        `}
      >
        <div
          className="
            w-full
            h-[40px]
            flex
            items-center
            justify-between
            gap-4
            px-4
            sm:px-6
            md:px-12
          "
        >
          {/* LEFT - CONTACT */}
          <div
            className="
              flex
              items-center
              gap-4
              sm:gap-6
              font-semibold
              tracking-wide
              text-[10px]
              sm:text-xs
            "
          >
            <a
              href="mailto:hello@email.co"
              className="
                flex
                items-center
                gap-2
                hover:text-[#00a3d9]
                transition-colors
                whitespace-nowrap
              "
            >
              <FaEnvelope className="text-xs sm:text-sm" />
              <span className="hidden sm:inline">HELLO@EMAIL.CO</span>
            </a>

            <a
              href="tel:+62123486789"
              className="
                flex
                items-center
                gap-2
                hover:text-[#00a3d9]
                transition-colors
                whitespace-nowrap
              "
            >
              <FaPhoneAlt className="text-xs sm:text-sm" />
              <span className="hidden sm:inline">+62 123 486 789</span>
            </a>
          </div>

          {/* RIGHT - SOCIAL */}
          <div className="flex items-center gap-3 sm:gap-5 text-xs">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-[#00a3d9] transition-colors"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-[#00a3d9] transition-colors"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="hover:text-[#00a3d9] transition-colors"
            >
              <FaYoutube />
            </a>
            <a
              href="#"
              aria-label="Pinterest"
              className="hover:text-[#00a3d9] transition-colors"
            >
              <FaPinterestP />
            </a>
          </div>
        </div>
      </div>

      {/* =====================================================
          MAIN NAVBAR
      ====================================================== */}
      <div
        className="
          relative
          w-full
          bg-white
          h-[72px]
          sm:h-[78px]
          lg:h-[82px]
        "
      >
        <div
          className="
            max-w-7xl
            mx-auto
            w-full
            h-full
            flex
            items-center
            justify-between
            px-4
            sm:px-6
            lg:px-8
            xl:px-0
          "
        >
          {/* LOGO */}
          <a
            href="/"
            className="
              flex
              items-center
              shrink-0
              z-20
            "
          >
            <img
              src="/logo.png"
              alt="MedIntegrity Group"
              width={100}
              height={70}
              className="
                w-[78px]
                sm:w-[88px]
                lg:w-[100px]
                h-auto
                object-contain
              "
            />
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav
            className="
              hidden
              xl:flex
              items-center
              gap-7
              2xl:gap-9
              h-full
              text-[14px]
              font-bold
            "
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="
                  relative
                  flex
                  items-center
                  h-full
                  whitespace-nowrap
                  text-[#0d2e5c]
                  hover:text-[#019a9a]
                  transition-colors
                  duration-200
                "
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CONTACT BUTTON */}
          <div className="hidden xl:flex items-center shrink-0">
            <a
              href="/contact"
              className="
                group
                flex
                items-center
                gap-2
                bg-[#0d2e5c]
                hover:bg-[#019a9a]
                text-white
                font-bold
                text-xs
                uppercase
                px-6
                py-3
                rounded-full
                transition-all
                duration-300
                shadow-md
                tracking-wider
                hover:-translate-y-0.5
              "
            >
              <span>Contact Us</span>
              <FaArrowRight
                className="
                  text-xs
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </a>
          </div>

          {/* MOBILE TOGGLE BUTTON */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="
              xl:hidden
              flex
              items-center
              justify-center
              w-11
              h-11
              text-[#0d2e5c]
              text-xl
              rounded-lg
              bg-slate-100
              border
              border-slate-200
              hover:bg-slate-200
              transition-colors
              focus:outline-none
              z-20
            "
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
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="
                  block
                  w-full
                  py-3
                  px-4
                  rounded-lg
                  text-sm
                  font-bold
                  text-[#0d2e5c]
                  hover:bg-slate-100
                  hover:text-[#00a3d9]
                  transition-all
                "
              >
                {link.name}
              </a>
            ))}

            <div className="border-t border-slate-200 my-2" />

            <a
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="
                flex
                items-center
                justify-center
                gap-2
                w-full
                bg-[#0d2e5c]
                hover:bg-[#00a3d9]
                text-white
                font-bold
                text-xs
                uppercase
                py-3.5
                rounded-xl
                tracking-wider
                shadow-md
                transition-colors
              "
            >
              <span>Contact Us</span>
              <FaArrowRight className="text-xs" />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;