'use client'

import React from 'react';
import { motion } from 'framer-motion';

function Leadership() {
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
    hidden: { opacity: 0, x: -40 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] } 
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] } 
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section className="relative w-full py-20 bg-slate-50 text-slate-800 overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12 space-y-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
        >
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#00a3d9] uppercase inline-block">
            Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1c226b] leading-tight">
            Guided by Technical Integrity
          </h2>
        </motion.div>

        {/* Grid containing 2 Separate Cards with a gap */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* CARD 1: Image & Quote Side */}
          <motion.div 
            className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-2xl flex flex-col justify-between space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInLeft}
          >
            <div className="relative w-full h-[380px] sm:h-[420px] rounded-2xl overflow-hidden shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
                alt="Anders Nilsen - CEO"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1c226b]/80 via-transparent to-transparent" />

              {/* Image Overlay Title */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-bold">Anders Nilsen</h3>
                <p className="text-cyan-300 text-sm font-medium">
                  Chief Executive Officer
                </p>
              </div>
            </div>

            {/* Core Philosophy Quote Banner */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="p-5 bg-cyan-50/70 rounded-2xl border border-cyan-100/60 text-center cursor-default"
            >
              <span className="text-xs font-bold text-[#00a3d9] uppercase tracking-wider block mb-1">
                Executive Philosophy
              </span>
              <blockquote className="text-base sm:text-lg font-bold text-[#1c226b] italic">
                “Inspect it. Verify it. Document it. Then accept it.”
              </blockquote>
            </motion.div>
          </motion.div>

          {/* CARD 2: Content Narrative Side */}
          <motion.div 
            className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-2xl flex flex-col justify-between space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInRight}
          >
            
            {/* Header Text */}
            <div>
              <h3 className="text-3xl font-bold text-[#1c226b]">
                Anders Nilsen
              </h3>
              <p className="text-[#00a3d9] font-semibold text-base mt-1">
                Chief Executive Officer
              </p>
            </div>

            {/* Bio Paragraphs */}
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                Anders Nilsen leads MedIntegrity Group with a professional focus
                on medical equipment, quality assurance, procurement oversight,
                and technical verification.
              </p>
              <p>
                Born July 3, 1963, Anders began his career in Singapore in a
                role involving the oversight of medical equipment and its
                compliance with required standards and specifications. That
                experience provided an early understanding of the importance of
                independent technical oversight when healthcare institutions and
                government organizations invest in medical technology.
              </p>
              <p>
                Anders later pursued advanced business and technical education,
                including an MBA at Imperial College, with a focus on
                medical-device engineering. Under his leadership, MedIntegrity
                Group is being developed as an independent advisory organization
                focused on helping purchasers make informed decisions and verify
                that contracted medical equipment meets the requirements for
                which they are paying.
              </p>
            </div>

            {/* Core Principles Section */}
            <div className="pt-4 border-t border-slate-100">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                Professional Guiding Principles
              </h4>

              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-3 gap-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Principle 1 */}
                <motion.div 
                  variants={fadeInUp}
                  whileHover={{ y: -4 }}
                  className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 text-center shadow-sm hover:shadow-md transition-shadow cursor-default"
                >
                  <span className="text-base font-bold text-[#1c226b] block">
                    Quality
                  </span>
                  <span className="text-[11px] text-slate-500">
                    Uncompromised Standard
                  </span>
                </motion.div>

                {/* Principle 2 */}
                <motion.div 
                  variants={fadeInUp}
                  whileHover={{ y: -4 }}
                  className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 text-center shadow-sm hover:shadow-md transition-shadow cursor-default"
                >
                  <span className="text-base font-bold text-[#1c226b] block">
                    Verification
                  </span>
                  <span className="text-[11px] text-slate-500">
                    Technical Rigor
                  </span>
                </motion.div>

                {/* Principle 3 */}
                <motion.div 
                  variants={fadeInUp}
                  whileHover={{ y: -4 }}
                  className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 text-center shadow-sm hover:shadow-md transition-shadow cursor-default"
                >
                  <span className="text-base font-bold text-[#1c226b] block">
                    Accountability
                  </span>
                  <span className="text-[11px] text-slate-500">
                    Contractual Fidelity
                  </span>
                </motion.div>
              </motion.div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Leadership;