'use client'

import React from 'react';
import { motion } from 'framer-motion';

function Commitments() {
  const cardsData = [
    {
      title: "Our Commitment",
      subtitle: "Transparent, Accountable & Sound",
      description: "Healthcare procurement should be transparent, accountable, and technically sound. We help clients answer three critical questions:",
      points: [
        "Did we receive what we ordered?",
        "Does it meet the required specifications?",
        "Are we getting what we paid for?"
      ],
      footerNote: "Providing independent oversight—not replacing the manufacturer.",
      buttonText: "Learn Our Commitment"
    },
    {
      title: "Our International Focus",
      subtitle: "Based in Singapore",
      description: "Singapore provides MedIntegrity Group with a strategic base for international medical-technology and healthcare activities.",
      points: [
        "Primary focus on Europe & North America",
        "Expanding global specialist network",
        "International inspection capabilities"
      ],
      footerNote: "Supporting healthcare organizations across global markets.",
      buttonText: "Explore Markets"
    },
    {
      title: "Independence Matters",
      subtitle: "Purchaser-First Perspective",
      description: "MedIntegrity Group is designed to operate purely from the perspective of the purchaser without promoting specific manufacturers.",
      points: [
        "100% impartial technical information",
        "Verify order vs delivery correspondence",
        "Independent verification creates confidence"
      ],
      footerNote: "Unbiased technical clarity for total purchasing confidence.",
      buttonText: "Why Independence"
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
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] } 
    },
  };

  return (
    <section className="relative w-full py-24 bg-slate-50 text-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
        >
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#00a3d9] uppercase inline-block">
            Core Values
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1c226b] leading-tight">
            Why Healthcare Trusts MedIntegrity
          </h2>
        </motion.div>

        {/* Single Row Layout - 3 Cards */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          {cardsData.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -12, rotate: -1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-xl flex flex-col justify-between hover:bg-[#0a1045] hover:border-[#0a1045] hover:shadow-2xl transition-colors duration-700 ease-in-out cursor-pointer"
            >
              {/* Top Content Area */}
              <div>
                {/* Header */}
                <h3 className="text-2xl font-bold text-[#1c226b] group-hover:text-white transition-colors duration-700 ease-in-out">
                  {card.title}
                </h3>
                
                <p className="text-xs font-semibold uppercase tracking-wider text-[#00a3d9] group-hover:text-cyan-400 transition-colors duration-700 ease-in-out mt-1 mb-4">
                  {card.subtitle}
                </p>

                {/* Description Paragraph */}
                <p className="text-slate-600 group-hover:text-slate-200 text-sm leading-relaxed transition-colors duration-700 ease-in-out mb-6">
                  {card.description}
                </p>

                {/* Checkmark Bullet Points */}
                <ul className="space-y-3 mb-6">
                  {card.points.map((point, pointIdx) => (
                    <li key={pointIdx} className="flex items-start space-x-3 text-sm">
                      <span className="font-bold text-[#00a3d9] group-hover:text-cyan-300 transition-colors duration-700 ease-in-out mt-0.5">
                        ✓
                      </span>
                      <span className="text-slate-700 group-hover:text-slate-100 transition-colors duration-700 ease-in-out font-medium">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Footer Area & Button */}
              <div className="pt-6 border-t border-slate-100 group-hover:border-white/10 transition-colors duration-700 ease-in-out space-y-5">
                <p className="text-xs text-slate-400 group-hover:text-cyan-100/70 transition-colors duration-700 ease-in-out italic">
                  {card.footerNote}
                </p>

                {/* Action Button */}
                <motion.button 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full text-sm font-semibold text-[#00a3d9] bg-cyan-50 border border-cyan-100 group-hover:bg-[#00a3d9] group-hover:text-white group-hover:border-transparent transition-all duration-700 ease-in-out shadow-sm group-hover:shadow-md cursor-pointer"
                >
                  {card.buttonText}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Commitments;