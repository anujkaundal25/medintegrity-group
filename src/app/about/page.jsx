"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowRight,
  FiMapPin,
  FiGlobe,
  FiHelpCircle,
  FiChevronDown,
  FiCheckCircle,
  FiShield,
} from "react-icons/fi";

export default function AboutPage() {
  // State for the accordion in the commitment section
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const commitmentQuestions = [
    {
      question: "Did we receive what we ordered?",
      answer:
        "We verify equipment upon delivery, checking model, configuration, quantity, accessories, documentation, and other contractual requirements before final acceptance.",
    },
    {
      question: "Does it meet the required specifications and standards?",
      answer:
        "We review technical documentation, certificates, specifications, manuals, configurations, and conduct independent verification against approved specifications and technical requirements.",
    },
    {
      question: "Are we getting what we paid for?",
      answer:
        "Our objective is to provide impartial technical information that helps healthcare institutions understand exactly what they are purchasing, what they receive, and whether the two correspond.",
    },
  ];

  // Animation Variants
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
    <main className="w-full bg-[#f4f8fb] text-slate-800 overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] bg-[#0d2e5c] text-white flex items-center justify-center pt-24 pb-20 px-4 sm:px-8 lg:px-16 overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <img
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=2000&q=80"
            alt="Medical Verification Technology"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Ambient Gradient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#009a97]/20 blur-[120px] rounded-full pointer-events-none" />

        <motion.div
          className="relative max-w-5xl mx-auto text-center space-y-8 z-10"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-block bg-white border border-[#009a97]/30 text-[#009a97] text-xs sm:text-sm font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              MedIntegrity Group
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
              Independent Medical Equipment Verification &amp; Procurement
              Assurance
            </h1>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed font-light"
          >
            Protecting healthcare investments through independent verification.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="text-slate-300 text-xs sm:text-sm max-w-4xl mx-auto leading-relaxed"
          >
            MedIntegrity Group is a Singapore-based medical equipment
            verification and procurement advisory firm serving healthcare
            institutions, government agencies, and procurement organizations
            across Europe and North America.
          </motion.div>

          {/* BADGES FIXED TO WHITE TEXT */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-3 pt-2"
          >
            <span className="bg-[#009a97]/20 border border-[#009a97]/50 text-white text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full backdrop-blur-md">
              Independent
            </span>
            <span className="bg-[#009a97]/20 border border-[#009a97]/50 text-white text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full backdrop-blur-md">
              Experienced
            </span>
            <span className="bg-[#009a97]/20 border border-[#009a97]/50 text-white text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full backdrop-blur-md">
              Accountable
            </span>
          </motion.div>

          {/* Action Button */}
          <motion.div variants={fadeInUp} className="pt-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#009a97] hover:bg-[#00827f] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#009a97]/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Request a Consultation</span>
              <FiArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* WHY MEDINTEGRITY GROUP */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
        <motion.div
          className="bg-white rounded-3xl p-8 sm:p-14 shadow-xl border border-slate-100 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
        >
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold tracking-widest text-[#009a97] uppercase">
              The Value of Oversight
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0d2e5c] leading-tight">
              Why MedIntegrity Group?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              MedIntegrity Group is a Singapore-based medical equipment
              verification and procurement advisory firm serving healthcare
              institutions, government agencies, and procurement organizations
              across Europe and North America.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We provide independent technical oversight between
              medical-equipment purchasers and manufacturers—helping clients
              verify that the equipment they purchase meets the agreed
              specifications, quality requirements, contractual obligations, and
              applicable standards.
            </p>

            <p className="text-base font-bold text-[#0d2e5c] italic tracking-wide">
              Independent. Experienced. Accountable.
            </p>

            <div className="p-6 rounded-2xl bg-[#f4f8fb] border-l-4 border-[#009a97] space-y-2 mt-4">
              <span className="text-xs font-semibold text-[#009a97] uppercase tracking-wider">
                Our Core Principle
              </span>
              <p className="text-lg font-bold text-[#0d2e5c]">
                "What was ordered should be what was delivered."
              </p>
              <p className="text-xs sm:text-sm text-slate-500">
                And what was delivered should meet the quality and technical
                requirements that were agreed upon.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-[380px] sm:h-[420px] rounded-2xl overflow-hidden shadow-lg border border-slate-100">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
              alt="Medical Inspection Oversight"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d2e5c]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
              <p className="text-xs font-bold tracking-wider text-[#009a97] uppercase">
                Buyer-Side Advisory
              </p>
              <p className="text-xs text-slate-200 mt-1">
                Protecting public and private healthcare funds through rigorous
                technical compliance checks.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* LEADERSHIP SECTION */}
      <section className="py-20 bg-white border-y border-slate-100 px-4 sm:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16 space-y-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUp}
          >
            <span className="text-xs font-bold tracking-widest text-[#009a97] uppercase">
              Executive Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0d2e5c]">
              Guided by Expertise
            </h2>
          </motion.div>

          <motion.div
            className="bg-[#f4f8fb] rounded-3xl overflow-hidden border border-slate-200/80 shadow-xl grid grid-cols-1 lg:grid-cols-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUp}
          >
            {/* CEO Image */}
            <div className="lg:col-span-5 relative min-h-[380px] lg:min-h-full">
              <img
                src="/founder.jpeg"
                alt="Anders Nilsen - CEO MedIntegrity Group"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d2e5c]/80 via-transparent to-transparent lg:hidden" />
              <div className="absolute bottom-6 left-6 right-6 lg:hidden text-white">
                <h3 className="text-2xl font-bold">Anders Nilsen</h3>
                <p className="text-xs text-[#009a97]">
                  Chief Executive Officer
                </p>
              </div>
            </div>

            {/* CEO Bio */}
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-6 flex flex-col justify-center">
              <div className="hidden lg:block space-y-1">
                <h3 className="text-3xl font-bold text-[#0d2e5c]">
                  Anders Nilsen
                </h3>
                <p className="text-xs font-semibold text-[#009a97] uppercase tracking-wider">
                  Chief Executive Officer
                </p>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Anders Nilsen leads MedIntegrity Group with a professional focus
                on medical equipment, quality assurance, procurement oversight,
                and technical verification.
              </p>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Born July 3, 1963, Anders began his career in Singapore in a
                role involving the oversight of medical equipment and its
                compliance with required standards and specifications. That
                experience provided an early understanding of the importance of
                independent technical oversight when healthcare institutions
                invest in medical technology.
              </p>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                He later pursued advanced business and technical education,
                including an MBA at Imperial College, with a focus on
                medical-device engineering.
              </p>

              <div className="pt-2">
                <span className="text-xs font-bold text-[#0d2e5c] uppercase tracking-wider block mb-2">
                  Leadership Philosophy
                </span>
                <div className="flex gap-2">
                  <span className="bg-white border border-slate-200 text-[#0d2e5c] text-xs font-bold px-3 py-1 rounded-full">
                    Quality
                  </span>
                  <span className="bg-white border border-slate-200 text-[#0d2e5c] text-xs font-bold px-3 py-1 rounded-full">
                    Verification
                  </span>
                  <span className="bg-white border border-slate-200 text-[#0d2e5c] text-xs font-bold px-3 py-1 rounded-full">
                    Accountability
                  </span>
                </div>
              </div>

              {/* Quote Block */}
              <div className="p-4 rounded-xl bg-white border border-slate-200/80 space-y-1">
                <p className="text-[#0d2e5c] font-bold text-sm italic">
                  "Inspect it. Verify it. Document it. Then accept it."
                </p>
                <p className="text-xs text-slate-500">
                  — Anders Nilsen, Chief Executive Officer
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* REDESIGNED: INTERNATIONAL FOCUS & INDEPENDENCE SECTION */}
      <section className="py-24 bg-[#071933] text-white px-4 sm:px-8 lg:px-16 relative overflow-hidden">
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#009a97]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#0d2e5c] rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto space-y-12 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto space-y-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUp}
          >
            <span className="text-xs font-bold tracking-widest text-[#009a97] uppercase bg-[#009a97]/10 px-4 py-1.5 rounded-full border border-[#009a97]/20 inline-block">
              Global Standards &amp; Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Built for Scale, Rooted in Integrity
            </h2>
            <p className="text-slate-400 text-sm sm:text-base font-light">
              Connecting strategic hubs with global procurement networks to deliver unbiased technical oversight.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Card 1: International Focus */}
            <motion.div
              className="lg:col-span-7 bg-[#0d2e5c]/60 border border-slate-700/60 rounded-3xl p-8 sm:p-10 backdrop-blur-xl flex flex-col justify-between shadow-2xl relative overflow-hidden group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeInUp}
            >
              {/* Card Glow Effect on Hover */}
              <div className="absolute -right-20 -top-20 w-60 h-60 bg-[#009a97]/20 rounded-full blur-3xl group-hover:bg-[#009a97]/30 transition-all duration-500 pointer-events-none" />

              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#009a97]/20 border border-[#009a97]/40 flex items-center justify-center text-[#009a97]">
                    <FiGlobe className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs font-bold tracking-widest text-[#009a97] uppercase">
                    HQ: Singapore
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    Our International Focus
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                    Singapore provides MedIntegrity Group with a strategic base for
                    international medical-technology and healthcare activities, acting as an impartial bridge between manufacturing markets and healthcare buyers.
                  </p>
                </div>

                <div className="pt-2 space-y-3">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    Active Regional Corridors
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-center gap-3 bg-[#071933]/80 border border-slate-700/80 p-3.5 rounded-2xl">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#009a97] animate-pulse" />
                      <div>
                        <p className="text-sm font-bold text-white">Europe</p>
                        <p className="text-[11px] text-slate-400">Institutional &amp; Public Health</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 bg-[#071933]/80 border border-slate-700/80 p-3.5 rounded-2xl">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#009a97] animate-pulse" />
                      <div>
                        <p className="text-sm font-bold text-white">North America</p>
                        <p className="text-[11px] text-slate-400">Hospital Networks &amp; Agencies</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-700/60 flex items-center gap-3 text-xs text-slate-400 italic relative z-10">
                <FiMapPin className="text-[#009a97] shrink-0 w-4 h-4" />
                <span>Continuously expanding our international network of technical specialists and site inspection capabilities.</span>
              </div>
            </motion.div>

            {/* Card 2: Independence Matters */}
            <motion.div
              className="lg:col-span-5 bg-gradient-to-b from-white to-[#f4f8fb] text-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl flex flex-col justify-between border border-white/20 relative overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeInUp}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#0d2e5c] flex items-center justify-center text-white shadow-md">
                    <FiShield className="w-6 h-6 text-[#009a97]" />
                  </div>
                  <span className="text-xs font-bold text-[#009a97] uppercase tracking-wider bg-[#009a97]/10 px-3 py-1 rounded-full">
                    100% Unbiased
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0d2e5c] mb-3">
                    Independence Matters
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    MedIntegrity Group is structured to operate strictly from the perspective of the purchaser. We do not manufacture equipment or align with vendor commissions.
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Our sole objective is to deliver impartial, bulletproof technical facts that ensure total contractual and regulatory compliance.
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <div className="p-4 rounded-2xl bg-[#0d2e5c] text-white space-y-2 relative overflow-hidden shadow-lg">
                  <div className="absolute right-0 bottom-0 opacity-10 translate-x-2 translate-y-2">
                    <FiCheckCircle className="w-24 h-24 text-white" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#009a97] block">
                    Our Promise
                  </span>
                  <p className="text-sm font-semibold italic text-slate-100 relative z-10">
                    "Independent verification creates confidence. Confidence protects clinical outcomes."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* COMMITMENT & CORE QUESTIONS WITH SMOOTH ACCORDION */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            className="lg:col-span-6 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUp}
          >
            <span className="text-xs font-bold tracking-widest text-[#009a97] uppercase">
              Our Commitment
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0d2e5c] leading-tight">
              Transparent, Accountable &amp; Technically Sound
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Healthcare procurement should be transparent, accountable, and
              technically sound. Our role is not to replace the manufacturer,
              procurement department, regulator, or healthcare institution.
            </p>
            <p className="text-lg font-bold text-[#0d2e5c]">
              Our role is to provide independent oversight.
            </p>
          </motion.div>

          <motion.div
            className="lg:col-span-6 space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            {commitmentQuestions.map((item, i) => {
              const isOpen = activeIndex === i;
              return (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleAccordion(i)}
                    className="w-full p-6 flex items-start justify-between gap-4 text-left cursor-pointer focus:outline-none"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#009a97]/10 flex-shrink-0 flex items-center justify-center text-[#009a97]">
                        <FiHelpCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-[#009a97] uppercase">
                          Core Question 0{i + 1}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-[#0d2e5c] mt-0.5">
                          {item.question}
                        </h3>
                      </div>
                    </div>
                    <div
                      className={`w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-[#0d2e5c] shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 bg-[#009a97]/10 text-[#009a97]" : ""
                      }`}
                    >
                      <FiChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.3,
                          ease: [0.04, 0.62, 0.23, 0.98],
                        }}
                      >
                        <div className="px-6 pb-6 pt-0 text-sm text-slate-600 leading-relaxed border-t border-slate-100/60 mt-2 pt-4">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </main>
  );
}