"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  FiFileText,
  FiSliders,
  FiSearch,
  FiCheckSquare,
  FiCheckCircle,
  FiAward,
  FiArrowRight,
  FiChevronRight,
} from "react-icons/fi";
import Link from "next/link";
import Contact from "@/component/home/Contact";

export default function ProcessPage() {
  const steps = [
    {
      number: "01",
      title: "Review",
      tagline: "Requirement & Spec Analysis",
      description:
        "We systematically review procurement requirements, technical specifications, contract documentation, and agreed equipment configurations to set a clear baseline.",
      icon: <FiFileText className="w-6 h-6 text-white" />,
      deliverables: ["Technical Gap Analysis", "Specification Checklist"],
      phase: "Initial Audit",
    },
    {
      number: "02",
      title: "Assess",
      tagline: "Vendor & Equipment Evaluation",
      description:
        "We evaluate the relevant manufacturer, supplier credentials, equipment safety compliance, and supporting technical documentation.",
      icon: <FiSliders className="w-6 h-6 text-white" />,
      deliverables: ["Manufacturer Compliance", "Risk Assessment"],
      phase: "Due Diligence",
    },
    {
      number: "03",
      title: "Inspect",
      tagline: "On-Site & Factory Testing",
      description:
        "Where required, our experts conduct factory acceptance tests (FAT), pre-shipment checks, or delivery inspections to verify physical conformity.",
      icon: <FiSearch className="w-6 h-6 text-white" />,
      deliverables: ["Physical Inspection Log", "FAT Verification"],
      phase: "Physical Oversight",
    },
    {
      number: "04",
      title: "Document",
      tagline: "Discrepancy & Traceability Logging",
      description:
        "Our findings are documented clearly, identifying full compliance, technical discrepancies, outstanding risks, and key operational observations.",
      icon: <FiCheckSquare className="w-6 h-6 text-white" />,
      deliverables: ["Detailed Discrepancy Report", "Audit Trail"],
      phase: "Reporting",
    },
    {
      number: "05",
      title: "Verify",
      tagline: "Purchaser Alignment Verification",
      description:
        "We assist the purchasing institution in validating that all delivered medical equipment strictly matches the agreed technical specifications.",
      icon: <FiCheckCircle className="w-6 h-6 text-white" />,
      deliverables: ["Conformity Certificate", "Purchaser Sign-off"],
      phase: "Validation",
    },
    {
      number: "06",
      title: "Accept",
      tagline: "Final Institutional Acceptance",
      description:
        "The healthcare institution proceeds toward final sign-off with maximum confidence, supported by complete independent oversight documentation.",
      icon: <FiAward className="w-6 h-6 text-white" />,
      deliverables: ["Final Acceptance Package", "Operational Release"],
      phase: "Sign-Off",
    },
  ];

  // Ref for tracking timeline scroll progress
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 70%", "end 50%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Framer Motion Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  // Directional slide variants for timeline items
  const cardSlideLeft = {
    hidden: { opacity: 0, x: -50, y: 20 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  const cardSlideRight = {
    hidden: { opacity: 0, x: 50, y: 20 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  const iconPop = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: [0.8, 1.1, 1],
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <main className="w-full bg-[#f4f8fb] text-slate-800 overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] bg-[#0d2e5c] text-white flex items-center justify-center pt-24 pb-20 px-4 sm:px-8 lg:px-16 overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80"
            alt="Process Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Ambient Gradient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#009a97]/20 blur-[120px] rounded-full pointer-events-none" />

        <motion.div
          className="relative max-w-5xl mx-auto text-center space-y-8 z-10"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-block bg-white border border-[#009a97]/30 text-[#009a97] text-xs sm:text-sm font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              Step-by-Step Quality Framework
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
              Our Verification Process
            </h1>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed font-light"
          >
            A 6-stage technical oversight framework guaranteeing transparency, compliance, and risk mitigation for medical equipment procurement.
          </motion.p>

          {/* BADGES FIXED TO WHITE TEXT */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-3 pt-2"
          >
            <span className="bg-[#009a97]/20 border border-[#009a97]/50 text-white text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full backdrop-blur-md">
              ISO Aligned
            </span>
            <span className="bg-[#009a97]/20 border border-[#009a97]/50 text-white text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full backdrop-blur-md">
              Independent Review
            </span>
            <span className="bg-[#009a97]/20 border border-[#009a97]/50 text-white text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full backdrop-blur-md">
              Full Audit Trail
            </span>
          </motion.div>

          <motion.div variants={fadeInUp} className="pt-4">
            <a
              href="#timeline"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#009a97] hover:bg-[#00827f] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#009a97]/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Explore Methodology</span>
              <FiArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* TIMELINE SECTION */}
      <section id="timeline" ref={timelineRef} className="py-20 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16 space-y-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
        >
          <span className="text-xs font-bold tracking-widest text-[#009a97] uppercase">
            Execution Methodology
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0d2e5c] leading-tight">
            From Procurement to Acceptance
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
            Every step is structured to protect clinical compliance, budget integrity, and healthcare delivery safety.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Static Background Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-slate-200 -translate-x-1/2 rounded-full" />

          {/* Animated Line Drawing Down */}
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#009a97] via-[#0d2e5c] to-[#009a97] -translate-x-1/2 rounded-full z-0"
          />

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-16 relative z-10">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={`flex flex-col md:flex-row items-center justify-between gap-8 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content Card Side */}
                  <motion.div
                    variants={isEven ? cardSlideLeft : cardSlideRight}
                    className="w-full md:w-[45%]"
                  >
                    <motion.div
                      whileHover={{ y: -6, transition: { duration: 0.2 } }}
                      className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-100 transition-all hover:border-[#009a97]/40 hover:shadow-2xl group relative overflow-hidden"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-bold text-[#009a97] uppercase tracking-wider bg-[#009a97]/10 px-3 py-1 rounded-full border border-[#009a97]/20">
                          {step.phase}
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-slate-400 group-hover:text-[#009a97] transition-colors">
                          STAGE {step.number}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-[#0d2e5c] mb-1">
                        {step.title}
                      </h3>
                      <p className="text-xs font-semibold text-[#009a97] uppercase tracking-wider mb-4">
                        {step.tagline}
                      </p>

                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                        {step.description}
                      </p>

                      <div className="pt-4 border-t border-slate-100 space-y-2">
                        <span className="text-xs font-bold text-[#0d2e5c] uppercase tracking-wider block">
                          Key Deliverables &amp; Actions:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {step.deliverables.map((item, dIndex) => (
                            <motion.span
                              key={dIndex}
                              whileHover={{ scale: 1.03 }}
                              className="inline-flex items-center gap-1.5 bg-[#f4f8fb] text-[#0d2e5c] text-xs font-semibold px-3 py-1 rounded-full border border-slate-200"
                            >
                              <FiChevronRight className="w-3 h-3 text-[#009a97]" />
                              {item}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Central Icon Marker */}
                  <motion.div
                    variants={iconPop}
                    className="relative z-10 flex items-center justify-center shrink-0"
                  >
                    <div className="relative flex items-center justify-center">
                      <span className="absolute animate-ping inline-flex h-full w-full rounded-2xl bg-[#009a97] opacity-20" />
                      <div className="w-14 h-14 rounded-2xl bg-[#0d2e5c] text-white flex items-center justify-center shadow-lg border-2 border-[#009a97] relative z-10 transition-transform duration-300 hover:scale-110">
                        {step.icon}
                      </div>
                    </div>
                  </motion.div>

                  {/* Number Callout Side */}
                  <motion.div
                    variants={isEven ? cardSlideRight : cardSlideLeft}
                    className={`hidden md:flex w-[45%] ${
                      isEven ? "justify-start text-left" : "justify-end text-right"
                    }`}
                  >
                    <div className="p-6 bg-white/60 border border-slate-200/80 rounded-2xl max-w-xs shadow-sm backdrop-blur-sm transition-all hover:bg-white hover:shadow-md">
                      <span className="text-5xl font-extrabold text-[#0d2e5c]/15 block">
                        {step.number}
                      </span>
                      <span className="text-xs font-bold text-[#009a97] uppercase tracking-wider mt-1 block">
                        MedIntegrity Standard
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SUMMARY BANNER */}
      <section className="py-20 bg-[#0d2e5c] text-white px-4 sm:px-8 lg:px-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#009a97]/30 blur-3xl rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <span className="text-xs font-bold tracking-widest text-[#009a97] uppercase">
            Custom Alignment
          </span>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
            Need Custom Verification Oversight for Your Institution?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            We adapt our 6-stage verification framework to meet regional medical regulations, international ISO criteria, and custom procurement requirements.
          </p>
          <div className="pt-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#009a97] hover:bg-[#00827f] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#009a97]/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Initiate Verification Request</span>
              <FiArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT COMPONENT */}
      <div id="contact">
        <Contact />
      </div>
    </main>
  );
}