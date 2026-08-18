"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Link from "next/link";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1920",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1920",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=1920",
  },
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <section className="relative w-full min-h-[600px] lg:min-h-[700px] bg-slate-900 text-white overflow-hidden">
        {/* Background Slider with Crossfade Animation */}
        <div className="absolute inset-0">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={slides[currentSlide].id}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('${slides[currentSlide].image}')`,
              }}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            >
              {/* Gradient Overlay (Dark Blue to Light Right) */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#1c226b] via-[#1c226bcc] to-transparent" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Content Grid */}
        <div className="relative max-w-7xl mx-auto px-6 pt-32 sm:pt-40 pb-36 sm:pb-40 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 z-10">
          {/* Left Column: Text & Actions */}
          <motion.div
            className="space-y-6 max-w-5xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span
              className="text-xs sm:text-sm font-semibold tracking-widest text-[#009a97] uppercase block"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Healthcare Consulting Partner
            </motion.span>

            <motion.h1
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Independent Medical Equipment Verification
            </motion.h1>

            <motion.p
              className="text-slate-300 text-sm sm:text-base leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Independent oversight to verify equipment quality, specifications,
              compliance, and procurement requirements.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.a
                href="/services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3.5 bg-[#009a97] hover:bg-[#007f7c] text-white font-bold text-sm rounded-full tracking-wide transition-colors duration-300 shadow-lg shadow-[#009a97]/30 inline-block"
              >
                Our Services
              </motion.a>

              <motion.div whileHover={{ x: 4 }} className="inline-block">
                <Link
                  href="/about"
                  className="flex items-center hover:bg-[#009a97] hover:text-white px-6 sm:px-8 py-3.5 gap-2 text-white font-bold text-sm tracking-wide transition-all duration-500 rounded-full cursor-pointer"
                >
                  <span>Learn More</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Desktop Side Navigation Buttons (Hidden on mobile via 'hidden lg:flex') */}
        <div className="absolute inset-y-0 left-0 right-0 hidden lg:flex items-center justify-between px-8 pointer-events-none z-40">
          <button
            onClick={prevSlide}
            type="button"
            className="w-12 h-12 rounded-full bg-slate-900/80 hover:bg-[#009a97] text-white flex items-center justify-center transition-colors duration-300 border border-white/20 shadow-xl cursor-pointer pointer-events-auto"
            aria-label="Previous Slide"
          >
            <FiChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            type="button"
            className="w-12 h-12 rounded-full bg-slate-900/80 hover:bg-[#009a97] text-white flex items-center justify-center transition-colors duration-300 border border-white/20 shadow-xl cursor-pointer pointer-events-auto"
            aria-label="Next Slide"
          >
            <FiChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Corrected Slanted Bottom Cutout Accent (Lower Left, Higher Right) */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 sm:h-28 bg-white pointer-events-none z-20"
          style={{
            clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 60%)",
          }}
        />
      </section>
    </>
  );
}

export default Hero;