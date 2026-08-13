"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiShield, FiCheck } from "react-icons/fi";
import Link from "next/link";

function WhyChooseUsCTA() {
  const scaleUpFade = {
    hidden: { opacity: 0, scale: 0.96, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] } 
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
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
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section className="relative w-full bg-slate-50 py-16 lg:py-24 overflow-hidden">
      {/* Decorative Subtle Background Grid / Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      {/* Main Container Wrapper */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          className="relative w-full rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10 min-h-[500px] lg:min-h-[560px] flex items-center justify-center text-center px-6 sm:px-12 py-16 lg:py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={scaleUpFade}
        >
          {/* Background Image Layer with Zoom Effect on View */}
          <motion.div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1920')`,
            }}
            initial={{ scale: 1.05 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          {/* Premium Multi-Layer Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1045]/95 via-[#1c226b]/90 to-[#009a97]/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

          {/* Floating Glow Elements */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#009a97]/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />

          {/* Content Container */}
          <motion.div 
            className="relative z-10 max-w-4xl mx-auto space-y-8 text-white"
            variants={containerVariants}
          >
            {/* Top Badge with Icon */}
            <motion.div variants={fadeInUp} className="inline-flex justify-center">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-300/30 text-cyan-300 text-xs sm:text-sm font-semibold uppercase tracking-wider backdrop-blur-md shadow-lg">
                <FiShield className="w-4 h-4 text-cyan-400" />
                <span>MedIntegrity Group Assurance</span>
              </div>
            </motion.div>

            {/* Main Title */}
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-white leading-tight"
            >
              Quality Should Never Be Assumed. <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-200 to-white">
                It Should Be Verified.
              </span>
            </motion.h2>

            {/* Tagline / Sub-description */}
            <motion.p 
              variants={fadeInUp}
              className="text-slate-200 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto font-normal leading-relaxed"
            >
              Independent medical equipment verification & procurement oversight tailored to protect your facility's investments and patient safety.
            </motion.p>

            {/* Feature Highlights Pills */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-2 text-xs sm:text-sm text-slate-200 font-medium"
            >
              <div className="flex items-center gap-2">
                <FiCheck className="w-4 h-4 text-[#009a97] shrink-0" />
                <span>100% Independent Oversight</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheck className="w-4 h-4 text-[#009a97] shrink-0" />
                <span>Regulatory Compliance</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheck className="w-4 h-4 text-[#009a97] shrink-0" />
                <span>Risk-Free Procurement</span>
              </div>
            </motion.div>

            {/* Action Buttons Group */}
            <motion.div variants={fadeInUp} className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="inline-block">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#009a97] hover:bg-cyan-400 text-white hover:text-[#0a1045] font-bold text-sm sm:text-base tracking-wider uppercase transition-all duration-300 shadow-xl shadow-[#009a97]/30 hover:shadow-cyan-400/20 group cursor-pointer"
                >
                  <span>Request Verification</span>
                  <FiArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300 ease-out" />
                </motion.button>
              </Link>

              <Link href="#" className="inline-block">
                <motion.button 
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/20 text-white font-bold text-sm sm:text-base tracking-wider uppercase transition-all duration-300 backdrop-blur-md cursor-pointer"
                >
                  <span>Explore Services</span>
                </motion.button>
              </Link>
            </motion.div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default WhyChooseUsCTA;