'use client'

import React from 'react';
import { motion } from 'framer-motion';

function WhyChooseUs() {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] } 
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] } 
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] } 
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] } 
    },
  };

  return (
    <section className="relative w-full py-10 bg-white text-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* Full-width, height-reduced Banner Image */}
        <motion.div 
          className="w-full h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg border border-slate-100"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
        >
          <img 
            src="/home/why-choose-us.jpg" 
            alt="Why Choose MedIntegrity Group" 
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* Top Header Grid: Heading on left, Description on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Title & Subtitle */}
          <motion.div 
            className="lg:col-span-6 space-y-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInLeft}
          >
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#009a97] uppercase inline-block">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1c226b] leading-tight">
              Why MedIntegrity Group?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-2">
              Medical equipment represents a significant investment for governments, hospitals, and healthcare organizations.
            </p>
          </motion.div>

          {/* Right Column: Detailed Paragraph */}
          <motion.div 
            className="lg:col-span-6 pt-2 lg:pt-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInRight}
          >
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              A purchase agreement may specify a particular manufacturer, model, configuration, performance level, accessories, certifications, and technical requirements. Ensuring that everything delivered actually corresponds to those requirements is critical. We provide an independent buyer-side perspective throughout the entire procurement process.
            </p>
          </motion.div>

        </div>

        {/* Bottom Feature Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          
          {/* Card 1 */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="p-8 bg-slate-50 rounded-3xl border border-slate-100 transition-shadow duration-300 hover:shadow-xl flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-[#1c226b] mb-3">
                Independent Perspective
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We provide an independent buyer-side perspective throughout the entire procurement and delivery process.
              </p>
            </div>
          </motion.div>

          {/* Card 2 (Highlighted Variant) */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="p-8 bg-[#0a1045] text-white rounded-3xl shadow-xl transition-shadow duration-300 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-3">
                Strict Accountability
              </h3>
              <p className="text-cyan-50 text-sm leading-relaxed">
                What was ordered should be what was delivered, matching all technical benchmarks.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="p-8 bg-slate-50 rounded-3xl border border-slate-100 transition-shadow duration-300 hover:shadow-xl flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-[#1c226b] mb-3">
                Quality Verification
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Ensuring what was delivered meets the quality and technical requirements that were agreed upon.
              </p>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="p-8 bg-slate-50 rounded-3xl border border-slate-100 transition-shadow duration-300 hover:shadow-xl flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-[#1c226b] mb-3">
                Client Protection
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Safeguarding significant institutional investments against discrepancies, omissions, and non-compliance.
              </p>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}

export default WhyChooseUs;