'use client'

import React from 'react';
import { motion } from 'framer-motion';

function AboutUs() {
  // Animation Variants
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

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] } 
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] } 
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] } 
    },
  };

  return (
    <section className="relative w-full py-20 bg-white text-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Taller Rounded Image (Animated Fade In Left) */}
          <motion.div 
            className="lg:col-span-4 flex"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInLeft}
          >
            <div className="relative w-full h-[450px] lg:h-full min-h-[420px] rounded-3xl overflow-hidden shadow-lg group">
              <img
                src="/home/about.webp"
                alt="Medical Equipment Inspection"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Right Column Grid: Header, Description, Smaller Image, and Core Value Cards */}
          <motion.div 
            className="lg:col-span-8 flex flex-col justify-between space-y-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            
            {/* Top Row: Title, Text & Right Image */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              
              {/* Text Area */}
              <motion.div className="md:col-span-7 space-y-4" variants={fadeInUp}>
                <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#009a97] uppercase inline-block">
                  About Us
                </span>

                <h2 className="text-3xl sm:text-4xl font-bold text-[#1c226b] leading-tight">
                  MedIntegrity Group
                </h2>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  MedIntegrity Group is a Singapore-based medical equipment verification and procurement advisory firm serving healthcare institutions, government agencies, and procurement organizations across Europe and North America.
                </p>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-2">
                  We provide independent technical oversight between medical-equipment purchasers and manufacturers—helping clients verify that the equipment they purchase meets the agreed specifications, quality requirements, contractual obligations, and applicable standards.
                </p>
              </motion.div>

              {/* Smaller Rounded Image (Right Side Animated) */}
              <motion.div 
                className="md:col-span-5 flex justify-center md:justify-end"
                variants={scaleIn}
              >
                <div className="w-full max-w-[280px] h-[260px] rounded-3xl overflow-hidden shadow-md group">
                  <img
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600"
                    alt="Procurement Advisory Consultation"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </motion.div>

            </div>

            {/* Bottom Row: 3 Pillar Cards (Staggered Children) */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2"
              variants={containerVariants}
            >
              
              {/* Pillar 1 */}
              <motion.div 
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="p-6 bg-slate-50 rounded-2xl border border-[#009a97]/20 shadow-sm transition-shadow hover:shadow-md cursor-default"
              >
                <h3 className="text-lg font-bold text-[#1c226b] mb-2">
                  Independent
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Unbiased oversight protecting client interests across all procurement stages.
                </p>
              </motion.div>

              {/* Pillar 2 */}
              <motion.div 
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm transition-shadow hover:shadow-md cursor-default"
              >
                <h3 className="text-lg font-bold text-[#1c226b] mb-2">
                  Experienced
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Deep technical assurance standards across global healthcare sectors.
                </p>
              </motion.div>

              {/* Pillar 3 */}
              <motion.div 
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm transition-shadow hover:shadow-md cursor-default"
              >
                <h3 className="text-lg font-bold text-[#1c226b] mb-2">
                  Accountable
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Ensuring full contractual compliance and quality standard verification.
                </p>
              </motion.div>

            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default AboutUs;