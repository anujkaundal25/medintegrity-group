'use client'

import React from 'react';
import { motion } from 'framer-motion';

function Process() {
  const steps = [
    {
      number: "01",
      title: "Review",
      description: "We review the procurement requirements, technical specifications, contract documentation, and agreed equipment configuration."
    },
    {
      number: "02",
      title: "Assess",
      description: "We evaluate the relevant manufacturer, supplier, equipment, and supporting documentation."
    },
    {
      number: "03",
      title: "Inspect",
      description: "Where required, we conduct factory, pre-shipment, or delivery inspections to verify conformity."
    },
    {
      number: "04",
      title: "Document",
      description: "Our findings are documented clearly, identifying compliance, discrepancies, outstanding issues, and relevant observations."
    },
    {
      number: "05",
      title: "Verify",
      description: "We support the purchaser in determining whether the equipment corresponds with the agreed requirements."
    },
    {
      number: "06",
      title: "Accept",
      description: "The healthcare institution can proceed toward acceptance with greater confidence and a documented independent assessment."
    }
  ];

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
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
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] } 
    },
  };

  return (
    <section className="relative w-full py-10 bg-slate-50 text-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
        >
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#009a97] uppercase inline-block">
            How We Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1c226b] leading-tight">
            Our Process
          </h2>
        </motion.div>

        {/* 2-Row Grid Layout (3 cards per row) */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          {steps.map((step, index) => {
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group relative p-8 rounded-3xl bg-white border border-slate-100 shadow-md transition-colors duration-300 hover:bg-[#0a1045] hover:shadow-2xl flex flex-col justify-between text-center overflow-hidden cursor-pointer"
              >
                <div>
                  {/* Step Number Tag at Top: Always visible on mobile, visible on hover for md and up */}
                  <div className="h-8 mb-2 flex items-center justify-center">
                    <span className="text-sm font-bold tracking-widest text-[#009a97] bg-[#009a97]/10 md:bg-cyan-50 md:group-hover:bg-cyan-950/60 md:group-hover:text-cyan-300 px-3 py-1 rounded-full border border-[#009a97]/20 md:border-cyan-200/50 md:group-hover:border-cyan-500/30 transition-all duration-300 md:opacity-0 md:-translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0">
                      STEP {step.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-[#1c226b] group-hover:text-white transition-colors duration-300 mb-4">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 group-hover:text-cyan-50/90 text-sm sm:text-base leading-relaxed transition-colors duration-300">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Decorative Line Accent */}
                <div className="mt-8 pt-4 border-t border-slate-100 group-hover:border-cyan-500/20 transition-colors duration-300 flex justify-center">
                  <div className="w-8 h-1 bg-[#009a97] rounded-full group-hover:w-16 transition-all duration-300" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

export default Process;