"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowRight,
  FiCheckCircle,
  FiShield,
  FiFileText,
  FiSearch,
  FiPackage,
  FiCpu,
  FiAward,
  FiTarget,
  FiUsers,
  FiLock,
} from "react-icons/fi";
import Link from "next/link";

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      number: "01",
      title: "Medical Equipment Verification",
      description:
        "Independent verification of medical equipment against approved specifications, purchase agreements, and technical requirements.",
      image:
        "https://images.pexels.com/photos/3845126/pexels-photo-3845126.jpeg?auto=compress&cs=tinysrgb&w=1200",
      highlights: [
        "Approved specification alignment",
        "Purchase agreement matching",
        "Rigorous technical compliance checks",
      ],
      icon: FiShield,
    },
    {
      number: "02",
      title: "Manufacturer & Supplier Assessment",
      description:
        "Evaluation of manufacturers and suppliers, including capabilities, quality systems, certifications, production processes, documentation, and ability to meet contractual requirements.",
      image:
        "https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=1200",
      highlights: [
        "Quality systems audit",
        "Certification and process review",
        "Contractual capability analysis",
      ],
      icon: FiAward,
    },
    {
      number: "03",
      title: "Factory & Pre-Shipment Inspection",
      description:
        "Independent inspection before equipment leaves the manufacturer, helping identify discrepancies, defects, missing components, or deviations from approved specifications.",
      image:
        "https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=1200",
      highlights: [
        "Defect & discrepancy identification",
        "Pre-dispatch component audits",
        "Specification deviation checks",
      ],
      icon: FiSearch,
    },
    {
      number: "04",
      title: "Technical & Documentation Review",
      description:
        "Review of technical documentation, certificates, specifications, manuals, configurations, and other relevant documentation.",
      image:
        "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=1200",
      highlights: [
        "Manual & certificate verification",
        "Configuration baseline checks",
        "Compliance documentation audit",
      ],
      icon: FiFileText,
    },
    {
      number: "05",
      title: "Delivery & Acceptance Verification",
      description:
        "Verification of equipment upon delivery, including model, configuration, quantity, accessories, documentation, and other contractual requirements before final acceptance.",
      image:
        "https://images.pexels.com/photos/4226122/pexels-photo-4226122.jpeg?auto=compress&cs=tinysrgb&w=1200",
      highlights: [
        "Model & quantity confirmation",
        "Accessory and documentation check",
        "Pre-final acceptance sign-off",
      ],
      icon: FiPackage,
    },
    {
      number: "06",
      title: "Procurement Advisory",
      description:
        "Independent technical support for government agencies, hospitals, healthcare organizations, and procurement teams evaluating medical-equipment purchases.",
      image:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200",
      highlights: [
        "Government & hospital support",
        "Evaluation of purchase options",
        "Independent buyer-side technical advice",
      ],
      icon: FiCpu,
    },
  ];

  const coreStandards = [
    {
      num: "01",
      title: "100% Unbiased Oversight",
      desc: "Operating exclusively for healthcare buyers without vendor affiliation or commission incentives.",
      icon: FiShield,
    },
    {
      num: "02",
      title: "Contractual Rigor",
      desc: "Every line item, configuration parameter, and performance metric is thoroughly validated.",
      icon: FiTarget,
    },
    {
      num: "03",
      title: "Global Compliance",
      desc: "Audits aligned with international medical device standards and strict regulatory frameworks.",
      icon: FiLock,
    },
    {
      num: "04",
      title: "Client Accountability",
      desc: "Actionable, legally defensible technical data protecting healthcare capital investments.",
      icon: FiUsers,
    },
  ];

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
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <main className="w-full bg-[#f4f8fb] text-slate-800 font-sans antialiased overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] bg-[#0d2e5c] text-white flex items-center justify-center pt-24 pb-20 px-4 sm:px-8 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <img
            src="https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Medical Equipment Oversight"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#009a97]/25 blur-[140px] rounded-full pointer-events-none" />

        <motion.div
          className="relative max-w-5xl mx-auto text-center space-y-8 z-10"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-block bg-white border border-[#009a97]/30 text-[#009a97] text-xs sm:text-sm font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              Our Service Spectrum
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
              Comprehensive Medical Equipment Verification &amp; Procurement Services
            </h1>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed font-light"
          >
            Six specialized verification modules delivering rigorous buyer-side technical oversight at every stage of the medical equipment lifecycle.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-3 pt-2"
          >
            <span className="bg-[#009a97]/20 border border-[#009a97]/50 text-white text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded-full backdrop-blur-md">
              Independent
            </span>
            <span className="bg-[#009a97]/20 border border-[#009a97]/50 text-white text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded-full backdrop-blur-md">
              Experienced
            </span>
            <span className="bg-[#009a97]/20 border border-[#009a97]/50 text-white text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded-full backdrop-blur-md">
              Accountable
            </span>
          </motion.div>

          <motion.div variants={fadeInUp} className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#009a97] hover:bg-[#00827f] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#009a97]/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Request Verification</span>
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* LEFT TAB NAVIGATION / RIGHT CONTENT DISPLAY SECTION */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16 space-y-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
        >
          <span className="text-xs font-bold tracking-widest text-[#009a97] uppercase">
            Service Spectrum
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0d2e5c] leading-tight">
            Comprehensive Advisory Scope
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Select a service from the left menu to view technical scope and verification parameters.
          </p>
        </motion.div>

        {/* WORKSPACE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT SIDE NAVIGATION */}
          <div className="lg:col-span-4 space-y-3 bg-white p-4 rounded-3xl border border-slate-100 shadow-xl">
            {services.map((item, idx) => {
              const Icon = item.icon;
              const isActive = activeService === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveService(idx)}
                  className={`w-full text-left p-4 rounded-2xl flex items-center justify-between transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#0d2e5c] text-white shadow-md"
                      : "bg-transparent text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        isActive
                          ? "bg-[#009a97] text-white"
                          : "bg-[#f4f8fb] text-slate-500"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider block opacity-80">
                        Service {item.number}
                      </span>
                      <p className="text-sm sm:text-base font-bold leading-snug">
                        {item.title}
                      </p>
                    </div>
                  </div>
                  <FiArrowRight
                    className={`w-5 h-5 shrink-0 transition-transform ${
                      isActive ? "text-[#009a97] translate-x-1" : "text-slate-300"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* RIGHT SIDE DETAILS DISPLAY CARD */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-100 space-y-8"
              >
                {/* Visual Banner */}
                <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden shadow-md">
                  <img
                    src={services[activeService].image}
                    alt={services[activeService].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d2e5c]/90 via-black/20 to-transparent" />
                  <div className="absolute top-5 left-5">
                    <span className="bg-[#009a97] text-white text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full shadow-md">
                      Module {services[activeService].number}
                    </span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                      {services[activeService].title}
                    </h3>
                  </div>
                </div>

                {/* Content Section */}
                <div className="space-y-3">
                  <span className="text-xs font-bold tracking-widest text-[#009a97] uppercase block">
                    Detailed Overview
                  </span>
                  <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                    {services[activeService].description}
                  </p>
                </div>

                {/* Key Deliverables */}
                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <span className="text-xs font-bold text-[#0d2e5c] uppercase tracking-wider block">
                    Key Deliverables &amp; Verification Checks
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {services[activeService].highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-4 rounded-xl bg-[#f4f8fb] border border-slate-200/80"
                      >
                        <FiCheckCircle className="w-5 h-5 text-[#009a97] shrink-0" />
                        <span className="text-sm font-bold text-slate-700">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Link */}
                <div className="pt-4 flex items-center justify-between border-t border-slate-100">
                  <span className="text-xs sm:text-sm text-slate-500 font-medium">
                    Fully independent buyer-side audit
                  </span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#009a97] hover:text-[#00827f] uppercase tracking-wider"
                  >
                    <span>Request Verification</span>
                    <FiArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CORE STANDARDS - TIMELINE PROCESS FLOW */}
      <section className="py-24 bg-[#071933]/50 text-white relative overflow-hidden px-4 sm:px-8 lg:px-16">
        {/* Background Image Layer */}
        <div className="absolute inset-0 pointer-events-none opacity-15">
          <img
            src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=2000"
            alt="Medical Standards Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#071933] via-[#071933]/90 to-[#0d2e5c]/85 pointer-events-none" />

        {/* Ambient Glow Effects */}
        <div className="absolute top-1/4 left-10 w-[400px] h-[400px] bg-[#009a97]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-10 w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-[#009a97]/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto space-y-16 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto space-y-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUp}
          >
            <span className="text-xs font-bold tracking-widest text-[#009a97] uppercase bg-white/5 border border-white/15 px-4 py-1.5 rounded-full inline-block backdrop-blur-md">
              Our Framework
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Uncompromising Standards
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
              Designed to ensure every public and private healthcare purchase is transparent, compliant, and defensible.
            </p>
          </motion.div>

          {/* HORIZONTAL PROCESS TIMELINE - GLASS CARDS */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            {coreStandards.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="relative flex flex-col justify-between bg-white/10 backdrop-blur-xl border border-[#009a97]/60 p-8 rounded-3xl shadow-2xl shadow-[#009a97]/10"
                >
                  {/* Subtle Inner Glass Highlight */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
                  {/* Outer Glow Accent */}
                  <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-[#009a97]/30 via-transparent to-cyan-400/20 pointer-events-none blur-sm -z-10" />

                  <div className="space-y-6 relative z-10">
                    {/* Header Row */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-[#009a97]/25 backdrop-blur-md border border-[#009a97]/60 flex items-center justify-center shadow-inner shadow-[#009a97]/30">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-3xl font-bold text-[#009a97]">
                        {item.num}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#009a97] leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-200/95 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-cyan-300 relative z-10">
                    <span>Verified Standard</span>
                    <FiCheckCircle className="w-4 h-4 scale-125" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CALL TO ACTION BANNER SECTION */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#0d2e5c] text-white p-8 sm:p-16 lg:p-20 text-center"
        >
          {/* Background Image Overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-25">
            <img
              src="https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Operating Theater Verification"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d2e5c]/95 via-[#0d2e5c]/85 to-[#009a97]/40" />

          {/* Banner Content */}
          <div className="relative z-10 max-w-4xl mx-auto space-y-8">
            <div>
              <span className="inline-flex items-center gap-2 bg-[#009a97]/25 border border-[#009a97]/50 text-white text-xs font-semibold tracking-widest uppercase px-5 py-2 rounded-full backdrop-blur-md shadow-sm">
                <FiShield className="w-4 h-4 text-[#009a97]" />
                <span>MedIntegrity Group Assurance</span>
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mt-6">
              Quality Should Never Be Assumed. <br />
              <span className="text-[#009a97]">It Should Be Verified.</span>
            </h2>

            <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed pt-2">
              Independent medical equipment verification &amp; procurement oversight tailored to protect your facility's investments and patient safety.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap justify-center gap-6 pt-2 text-xs sm:text-sm font-bold text-slate-200">
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-[#009a97] w-4 h-4" />
                <span>100% Independent Oversight</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-[#009a97] w-4 h-4" />
                <span>Regulatory Compliance</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-[#009a97] w-4 h-4" />
                <span>Risk-Free Procurement</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#009a97] hover:bg-[#00827f] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#009a97]/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Request Verification</span>
                <FiArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={() => window.scrollTo({ top: 450, behavior: "smooth" })}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/40 hover:bg-white/10 text-white font-bold text-sm tracking-wide backdrop-blur-md transition-all cursor-pointer"
              >
                Explore Services
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}