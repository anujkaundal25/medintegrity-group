'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

function WhyChooseUsCTA() {
  // Animation Variants
  const scaleUpFade = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] } 
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] } 
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section className="relative w-full bg-slate-50 py-16 overflow-hidden">
      {/* Main Angled Banner Container */}
      <motion.div 
        className="relative w-full min-h-[480px] sm:min-h-[520px] flex items-center justify-center text-center px-6 my-8"
        style={{
          clipPath: "polygon(0 8%, 100% 0%, 100% 92%, 0 100%)",
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={scaleUpFade}
      >
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: `url('/home/cta.webp')`,
          }}
        />

        {/* Blue Gradient/Overlay Matching Image Tone */}
        <div className="absolute inset-0 bg-[#0a1045]/80" />

        {/* Content Container */}
        <motion.div 
          className="relative z-10 max-w-4xl mx-auto space-y-6 text-white py-12"
          variants={containerVariants}
        >
          
          {/* Subtitle / Company Badge */}
          <motion.div variants={fadeInUp} className="inline-block">
            <div className="px-4 py-1.5 rounded-full bg-cyan-400/20 border border-cyan-300/30 text-cyan-300 text-xs sm:text-sm font-semibold uppercase tracking-widest backdrop-blur-sm">
              MedIntegrity Group
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight max-w-3xl mx-auto"
          >
            Quality Should Never Be Assumed. <br className="hidden sm:block" />
            <span className="text-cyan-300">It Should Be Verified.</span>
          </motion.h2>

          {/* Tagline / Sub-description */}
          <motion.p 
            variants={fadeInUp}
            className="text-slate-200 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto font-medium leading-relaxed"
          >
            Independent Medical Equipment Verification & Procurement Assurance
          </motion.p>

          {/* Rounded Pill CTA Button */}
          <motion.div variants={fadeInUp} className="pt-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#00a3d9] hover:bg-cyan-400 text-white hover:text-[#0a1045] font-bold text-sm sm:text-base tracking-wider uppercase transition-colors duration-700 ease-in-out shadow-xl hover:shadow-cyan-400/20 group cursor-pointer"
            >
              <span>Request Verification</span>
              <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 ease-out" />
            </motion.button>
          </motion.div>

        </motion.div>
      </motion.div>
    </section>
  );
}

export default WhyChooseUsCTA;