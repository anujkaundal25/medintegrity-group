"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FiFileText,
  FiSliders,
  FiSearch,
  FiCheckSquare,
  FiCheckCircle,
  FiAward,
  FiArrowRight,
} from "react-icons/fi";
import Link from "next/link";
import Contact from "@/component/home/Contact";

export default function ProcessPage() {
  const steps = [
    {
      number: "01",
      title: "Review",
      description:
        "We review the procurement requirements, technical specifications, contract documentation, and agreed equipment configuration.",
      icon: <FiFileText className="w-10 h-10 text-white" />,
      alignLeft: true, // Number box on left/top, text below or vice-versa like the template layout
    },
    {
      number: "02",
      title: "Assess",
      description:
        "We evaluate the relevant manufacturer, supplier, equipment, and supporting documentation.",
      icon: <FiSliders className="w-10 h-10 text-white" />,
      alignLeft: false,
    },
    {
      number: "03",
      title: "Inspect",
      description:
        "Where required, we conduct factory, pre-shipment, or delivery inspections to verify conformity.",
      icon: <FiSearch className="w-10 h-10 text-white" />,
      alignLeft: false,
    },
    {
      number: "04",
      title: "Document",
      description:
        "Our findings are documented clearly, identifying compliance, discrepancies, outstanding issues, and relevant observations.",
      icon: <FiCheckSquare className="w-10 h-10 text-white" />,
      alignLeft: true,
    },
    {
      number: "05",
      title: "Verify",
      description:
        "We support the purchaser in determining whether the equipment corresponds with the agreed requirements.",
      icon: <FiCheckCircle className="w-10 h-10 text-white" />,
      alignLeft: true,
    },
    {
      number: "06",
      title: "Accept",
      description:
        "The healthcare institution can proceed toward acceptance with greater confidence and a documented independent assessment.",
      icon: <FiAward className="w-10 h-10 text-white" />,
      alignLeft: false,
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <main className="w-full bg-[#f4f8fb] text-slate-800 overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[60vh] bg-[#0d2e5c] text-white flex items-center justify-center pt-24 pb-16 px-4 sm:px-8 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-25">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80"
            alt="Process Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-[#009a97]/20 blur-[100px] rounded-full pointer-events-none" />

        <motion.div
          className="relative max-w-4xl mx-auto text-center space-y-6 z-10"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <span className="inline-block bg-white border border-[#009a97]/30 text-[#009a97] text-xs sm:text-sm font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full">
            Step-by-Step Methodology
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-5xl font-bold text-white leading-tight">
            Our Verification Process
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-light">
            A structured, 6-stage technical oversight framework guaranteeing complete transparency and accountability.
          </p>
        </motion.div>
      </section>

      {/* PROCESS CARDS GRID (Inspired by Reference Layout Style) */}
      <section className="py-24 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16 space-y-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
        >
          <span className="text-xs font-bold tracking-widest text-[#009a97] uppercase">
            Workflow Stages
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0d2e5c]">
            From Review to Acceptance
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Each stage is meticulously designed to protect your medical technology investments.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-200/80 relative flex flex-col justify-between group hover:shadow-2xl transition-all"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
                {/* Number Box matching the requested style */}
                <div className="bg-[#009a97] hidden lg:block text-white p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center min-w-[120px]">
                  <span className="text-3xl sm:text-4xl font-bold tracking-tight">
                    {step.number}
                  </span>
                  <span className="text-[10px] font-bold tracking-widest uppercase opacity-90 ml-2 mt-1">
                    Step {step.title}
                  </span>
                </div>

                {/* Icon box representing the step */}
                <div className="w-20 h-20 rounded-2xl bg-[#0d2e5c] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                  {step.icon}
                </div>
              </div>

              {/* Content Description Box */}
              <div className="bg-[#f4f8fb] rounded-2xl p-6 border border-slate-100 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#009a97]" />
                  <h3 className="text-lg font-bold text-[#0d2e5c] uppercase tracking-wide">
                    {step.title}
                  </h3>
                </div>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-[#009a97] uppercase tracking-wider">
                  MedIntegrity Standard
                </span>
                <span className="text-xs font-semibold text-slate-400">
                  Stage 0{index + 1} of 06
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

          <Contact/>
    </main>
  );
}