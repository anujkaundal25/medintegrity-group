"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative w-full min-h-[600px] lg:min-h-[700px] bg-slate-900 text-white overflow-hidden">
      {/* Background Image Container */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/home/hero.jpg')`,
        }}
      >
        {/* Gradient Overlay (Dark Blue to Light Right) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1c226b] via-[#1c226bcc] to-transparent" />
      </div>

      {/* Content Grid */}
      <div className="relative max-w-7xl mx-auto px-6 pt-36 sm:pt-40 pb-40 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 z-10">
        
        {/* Left Column: Text & Actions */}
        <motion.div 
          className="space-y-6 max-w-5xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            className="text-xs sm:text-sm font-semibold tracking-wider text-cyan-400 uppercase block"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Healthcare Consulting Partner
          </motion.span>

          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-5xl font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Independent Medical Equipment Verification
          </motion.h1>

          <motion.p 
            className="text-slate-300 text-sm sm:text-base leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Independent oversight to verify equipment quality, specifications,
            compliance, and procurement requirements.
          </motion.p>

          <motion.div 
            className="flex flex-wrap items-center gap-6 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 bg-[#00a3d9] hover:bg-[#008cb8] text-white font-semibold text-xs sm:text-sm rounded-full tracking-wider transition-colors duration-300 shadow-lg shadow-cyan-500/30 uppercase inline-block"
            >
              Our Services
            </motion.a>

            <motion.a
              href="#learn-more"
              whileHover={{ x: 4 }}
              className="flex items-center gap-2 text-white font-semibold text-xs sm:text-sm tracking-wider uppercase hover:text-cyan-400 transition-colors"
            >
              Learn More
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
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Corrected Slanted Bottom Cutout Accent (Lower Left, Higher Right) */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 sm:h-28 bg-white pointer-events-none z-20"
        style={{
          clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 60%)",
        }}
      />

    </section>
  );
}

export default Hero;