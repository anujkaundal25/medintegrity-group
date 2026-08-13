"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

function FAQSection() {
  // Single active state to ensure only ONE question is open across both columns
  const [openIndex, setOpenIndex] = useState(0);

  const faqDataLeft = [
    {
      id: 0,
      question: "What is MedIntegrity Group's primary role?",
      answer: "We provide independent technical oversight between medical-equipment purchasers and manufacturers—helping clients verify that the equipment they purchase meets the agreed specifications, quality requirements, contractual obligations, and applicable standards."
    },
    {
      id: 1,
      question: "Which geographic regions do you serve?",
      answer: "MedIntegrity Group is a Singapore-based firm serving healthcare institutions, government agencies, and procurement organizations across Europe and North America."
    },
    {
      id: 2,
      question: "What core questions do you help clients answer?",
      answer: "We help clients address three fundamental questions: Did we receive what we ordered? Does it meet the required specifications and standards? Are we getting what we paid for?"
    }
  ];

  const faqDataRight = [
    {
      id: 3,
      question: "What services does MedIntegrity Group offer?",
      answer: "Our services include Medical Equipment Verification, Manufacturer & Supplier Assessment, Factory & Pre-Shipment Inspection, Technical & Documentation Review, Delivery & Acceptance Verification, and Procurement Advisory."
    },
    {
      id: 4,
      question: "What is your step-by-step verification process?",
      answer: "Our process consists of 6 steps: 01. Review procurement requirements, 02. Assess manufacturers and equipment, 03. Inspect prior to shipment or delivery, 04. Document findings, 05. Verify conformity, and 06. Guide final acceptance."
    },
    {
      id: 5,
      question: "Why does independent buyer-side oversight matter?",
      answer: "We operate strictly from the perspective of the purchaser and do not promote any manufacturer or product. Our objective is to provide impartial technical information so healthcare institutions know exactly what they purchase and receive."
    }
  ];

  const toggleFAQ = (id) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] } 
    },
  };

  const cardContainer = {
    hidden: { opacity: 0, scale: 0.98, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] } 
    },
  };

  return (
    <section className="relative w-full bg-[#f4f8fb] pb-10 overflow-hidden font-sans">
      
      {/* Outer Section Header */}
      <motion.div 
        className="text-center max-w-3xl mx-auto mb-12 px-6 space-y-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeInUp}
      >
        <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#009a97] uppercase inline-block">
          Independence. Experience. Accountability.
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a1045] leading-tight">
          Independent Medical Equipment Verification
        </h2>
        <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
          Protecting healthcare investments through independent verification and procurement assurance. Quality should never be assumed. It should be verified.
        </p>
      </motion.div>

      {/* Floating White Content Card */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 z-30">
        <motion.div 
          className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-100"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={cardContainer}
        >
          
          {/* FAQ Card Sub-Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end mb-10 pb-6 border-b border-slate-100">
            <div className="md:col-span-7 space-y-2">
              <span className="text-xs font-semibold tracking-wider text-[#009a97] uppercase">
                Why MedIntegrity Group?
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0a1045] leading-tight">
                Frequently Asked Questions <br className="hidden sm:block" />
                From Healthcare Clients
              </h3>
            </div>
            
            <div className="md:col-span-5">
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Our principle is simple: What was ordered should be what was delivered. And what was delivered should meet the quality and technical requirements that were agreed upon.
              </p>
            </div>
          </div>

          {/* 2-Column Accordion Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            
            {/* Left Column */}
            <div className="space-y-4">
              {faqDataLeft.map((item) => {
                const isOpen = openIndex === item.id;
                return (
                  <div key={item.id} className="transition-all">
                    <button
                      onClick={() => toggleFAQ(item.id)}
                      className={`w-full flex items-center justify-between p-4 px-6 rounded-full text-left font-semibold text-sm transition-all duration-700 ease-in-out cursor-pointer ${
                        isOpen
                          ? "bg-[#009a97] text-white shadow-md"
                          : "bg-[#f4f8fb] text-[#0a1045] hover:bg-slate-200"
                      }`}
                    >
                      <span className="pr-2">{item.question}</span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="flex-shrink-0"
                      >
                        <FiChevronDown className="w-5 h-5" />
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pt-3 pb-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {faqDataRight.map((item) => {
                const isOpen = openIndex === item.id;
                return (
                  <div key={item.id} className="transition-all">
                    <button
                      onClick={() => toggleFAQ(item.id)}
                      className={`w-full flex items-center justify-between p-4 px-6 rounded-full text-left font-semibold text-sm transition-all duration-700 ease-in-out cursor-pointer ${
                        isOpen
                          ? "bg-[#009a97] text-white shadow-md"
                          : "bg-[#f4f8fb] text-[#0a1045] hover:bg-slate-200"
                      }`}
                    >
                      <span className="pr-2">{item.question}</span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="flex-shrink-0"
                      >
                        <FiChevronDown className="w-5 h-5" />
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pt-3 pb-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>

        </motion.div>
      </div>

    </section>
  );
}

export default FAQSection;