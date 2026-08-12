"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiCheckCircle,
  FiSearch,
  FiShield,
  FiFileText,
  FiBox,
  FiBriefcase,
  FiArrowRight,
  FiMapPin,
  FiGlobe,
  FiHelpCircle,
  FiSend,
  FiUser,
  FiAward,
} from "react-icons/fi";

export default function AboutPage() {
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

  const services = [
    {
      title: "Medical Equipment Verification",
      desc: "Independent verification of medical equipment against approved specifications, purchase agreements, and technical requirements.",
      icon: <FiCheckCircle className="w-6 h-6 text-[#00a3d9]" />,
    },
    {
      title: "Manufacturer & Supplier Assessment",
      desc: "Evaluation of manufacturers and suppliers, including capabilities, quality systems, certifications, production processes, and documentation.",
      icon: <FiBriefcase className="w-6 h-6 text-[#00a3d9]" />,
    },
    {
      title: "Factory & Pre-Shipment Inspection",
      desc: "Independent inspection before equipment leaves the manufacturer, helping identify discrepancies, defects, or deviations prior to shipment.",
      icon: <FiShield className="w-6 h-6 text-[#00a3d9]" />,
    },
    {
      title: "Technical & Documentation Review",
      desc: "Review of technical documentation, certificates, specifications, manuals, configurations, and relevant compliance documentation.",
      icon: <FiFileText className="w-6 h-6 text-[#00a3d9]" />,
    },
    {
      title: "Delivery & Acceptance Verification",
      desc: "Verification of equipment upon delivery, including model, configuration, quantity, accessories, and contractual requirements.",
      icon: <FiBox className="w-6 h-6 text-[#00a3d9]" />,
    },
    {
      title: "Procurement Advisory",
      desc: "Independent technical support for government agencies, hospitals, healthcare organizations, and procurement teams evaluating equipment purchases.",
      icon: <FiSearch className="w-6 h-6 text-[#00a3d9]" />,
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Review",
      desc: "We review procurement requirements, technical specifications, contract documentation, and agreed equipment configuration.",
    },
    {
      step: "02",
      title: "Assess",
      desc: "We evaluate the relevant manufacturer, supplier, equipment, and supporting documentation.",
    },
    {
      step: "03",
      title: "Inspect",
      desc: "Where required, we conduct factory, pre-shipment, or delivery inspections to verify conformity.",
    },
    {
      step: "04",
      title: "Document",
      desc: "Our findings are documented clearly, identifying compliance, discrepancies, outstanding issues, and key observations.",
    },
    {
      step: "05",
      title: "Verify",
      desc: "We support the purchaser in determining whether the equipment corresponds with the agreed requirements.",
    },
    {
      step: "06",
      title: "Accept",
      desc: "The healthcare institution can proceed toward final acceptance with greater confidence and independent documentation.",
    },
  ];

  return (
    <main className="w-full bg-[#f4f8fb] font-sans text-slate-800 overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] bg-[#0d2e5c] text-white flex items-center justify-center pt-24 pb-20 px-4 sm:px-8 lg:px-16 overflow-hidden">
        {/* Background Image Overlay with Dimming */}
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-cover bg-center bg-fixed">
          <Image
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=2000&q=80"
            alt="Medical Verification Technology"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Ambient Gradient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#00a3d9]/20 blur-[120px] rounded-full pointer-events-none" />

        <motion.div
          className="relative max-w-5xl mx-auto text-center space-y-8 z-10"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-block bg-[#00a3d9]/15 border border-[#00a3d9]/30 text-[#00a3d9] text-xs sm:text-sm font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              MedIntegrity Group
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
              Independent Medical Equipment Verification &amp; Procurement Assurance
            </h1>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-slate-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed font-light"
          >
            Protecting healthcare investments through independent verification.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="text-slate-300 text-sm sm:text-base max-w-4xl mx-auto leading-relaxed"
          >
            MedIntegrity Group is a Singapore-based medical equipment verification and procurement advisory firm serving healthcare institutions, government agencies, and procurement organizations across Europe and North America.
          </motion.div>

          {/* Badges */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-3 pt-2"
          >
            <span className="bg-[#00a3d9]/10 border border-[#00a3d9]/30 text-[#00a3d9] text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full">
              Independent
            </span>
            <span className="bg-[#00a3d9]/10 border border-[#00a3d9]/30 text-[#00a3d9] text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full">
              Experienced
            </span>
            <span className="bg-[#00a3d9]/10 border border-[#00a3d9]/30 text-[#00a3d9] text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full">
              Accountable
            </span>
          </motion.div>

          {/* Action Button */}
          <motion.div variants={fadeInUp} className="pt-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#00a3d9] hover:bg-[#0082ae] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#00a3d9]/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
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
            <span className="text-xs font-bold tracking-widest text-[#00a3d9] uppercase">
              The Value of Oversight
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d2e5c] leading-tight">
              Why MedIntegrity Group?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Medical equipment represents a significant investment for governments, hospitals, and healthcare organizations. A purchase agreement may specify a particular manufacturer, model, configuration, performance level, accessories, certifications, and technical requirements.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Ensuring that everything delivered actually corresponds to those requirements is critical. That is where MedIntegrity Group comes in. We provide an independent buyer-side perspective throughout the procurement and delivery process.
            </p>

            <div className="p-6 rounded-2xl bg-[#f4f8fb] border-l-4 border-[#00a3d9] space-y-2">
              <span className="text-xs font-semibold text-[#00a3d9] uppercase tracking-wider">
                Our Core Principle
              </span>
              <p className="text-lg font-bold text-[#0d2e5c]">
                "What was ordered should be what was delivered."
              </p>
              <p className="text-xs sm:text-sm text-slate-500">
                And what was delivered should meet the quality and technical requirements that were agreed upon.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-[380px] sm:h-[420px] rounded-2xl overflow-hidden shadow-lg border border-slate-100">
            <Image
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
              alt="Medical Inspection Oversight"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d2e5c]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
              <p className="text-xs font-bold tracking-wider text-[#00a3d9] uppercase">
                Buyer-Side Advisory
              </p>
              <p className="text-xs text-slate-200 mt-1">
                Protecting public and private healthcare funds through rigorous technical compliance checks.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* OUR SERVICES */}
      <section className="py-20 bg-white border-y border-slate-100 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto space-y-12">
          <motion.div
            className="text-center max-w-3xl mx-auto space-y-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUp}
          >
            <span className="text-xs font-bold tracking-widest text-[#00a3d9] uppercase">
              Comprehensive Technical Oversight
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0d2e5c]">
              Our Core Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              End-to-end technical verification capabilities tailored for complex healthcare supply chains.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            {services.map((srv, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-[#f4f8fb] rounded-2xl p-8 border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center group-hover:bg-[#00a3d9] transition-colors duration-300">
                    {React.cloneElement(srv.icon, {
                      className:
                        "w-6 h-6 text-[#00a3d9] group-hover:text-white transition-colors duration-300",
                    })}
                  </div>
                  <h3 className="text-xl font-bold text-[#0d2e5c]">
                    {srv.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {srv.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
        >
          <span className="text-xs font-bold tracking-widest text-[#00a3d9] uppercase">
            Step-By-Step Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0d2e5c]">
            Our Verification Process
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            A structured 6-step framework ensuring every technical and contractual element is validated.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {processSteps.map((stepItem, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="relative bg-white p-8 rounded-2xl shadow-lg border border-slate-100 flex flex-col justify-between group hover:border-[#00a3d9]/40 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-[#00a3d9]/30 group-hover:text-[#00a3d9] transition-colors">
                    {stepItem.step}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#00a3d9]" />
                </div>
                <h3 className="text-xl font-bold text-[#0d2e5c]">
                  {stepItem.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {stepItem.desc}
                </p>
              </div>
            </motion.div>
          ))}
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
            <span className="text-xs font-bold tracking-widest text-[#00a3d9] uppercase">
              Executive Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d2e5c]">
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
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000&q=80"
                alt="Anders Nilsen - CEO MedIntegrity Group"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d2e5c]/80 via-transparent to-transparent lg:hidden" />
              <div className="absolute bottom-6 left-6 right-6 lg:hidden text-white">
                <h3 className="text-2xl font-bold">Anders Nilsen</h3>
                <p className="text-xs text-[#00a3d9]">Chief Executive Officer</p>
              </div>
            </div>

            {/* CEO Bio */}
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-6 flex flex-col justify-center">
              <div className="hidden lg:block space-y-1">
                <h3 className="text-3xl font-extrabold text-[#0d2e5c]">
                  Anders Nilsen
                </h3>
                <p className="text-xs font-semibold text-[#00a3d9] uppercase tracking-wider">
                  Chief Executive Officer
                </p>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Anders Nilsen leads MedIntegrity Group with a professional focus on medical equipment, quality assurance, procurement oversight, and technical verification.
              </p>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Born July 3, 1963, Anders began his career in Singapore in a role involving the oversight of medical equipment and its compliance with required standards and specifications. That experience provided an early understanding of the importance of independent technical oversight when healthcare institutions invest in medical technology.
              </p>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                He later pursued advanced business and technical education, including an MBA at Imperial College, with a focus on medical-device engineering.
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

      {/* COMMITMENT & CORE QUESTIONS */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            className="lg:col-span-6 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUp}
          >
            <span className="text-xs font-bold tracking-widest text-[#00a3d9] uppercase">
              Our Commitment
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d2e5c] leading-tight">
              Transparent, Accountable &amp; Technically Sound
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Healthcare procurement should be transparent, accountable, and technically sound. Our role is not to replace the manufacturer, procurement department, regulator, or healthcare institution.
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
            {[
              "Did we receive what we ordered?",
              "Does it meet the required specifications and standards?",
              "Are we getting what we paid for?",
            ].map((question, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-[#00a3d9]/10 flex-shrink-0 flex items-center justify-center text-[#00a3d9]">
                  <FiHelpCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#00a3d9] uppercase">
                    Core Question 0{i + 1}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#0d2e5c] mt-0.5">
                    {question}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* INTERNATIONAL FOCUS & INDEPENDENCE MATTERS */}
      <section className="py-20 bg-[#0d2e5c] text-white px-4 sm:px-8 lg:px-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00a3d9]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* International Focus */}
          <motion.div
            className="bg-white/5 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-white/10 space-y-6 flex flex-col justify-between"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUp}
          >
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-widest text-[#00a3d9] uppercase">
                Global Network
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Our International Focus
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Singapore provides MedIntegrity Group with a strategic base for international medical-technology and healthcare activities.
              </p>

              <div className="pt-2 space-y-3">
                <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Initial Markets Served:
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl text-xs font-bold text-white border border-white/10">
                    <FiGlobe className="text-[#00a3d9]" /> Europe
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl text-xs font-bold text-white border border-white/10">
                    <FiGlobe className="text-[#00a3d9]" /> North America
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-400 italic pt-4 border-t border-white/10">
              As the organization develops, MedIntegrity Group intends to expand its international network of technical specialists and inspection capabilities.
            </p>
          </motion.div>

          {/* Independence Matters */}
          <motion.div
            className="bg-white/5 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-white/10 space-y-6 flex flex-col justify-between"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUp}
          >
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-widest text-[#00a3d9] uppercase">
                Impartial Advice
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Independence Matters
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                MedIntegrity Group is designed to operate strictly from the perspective of the purchaser. We do not exist to promote a particular medical-equipment manufacturer or product.
              </p>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Our objective is to provide impartial technical information that helps healthcare institutions understand exactly what they are purchasing, what they receive, and whether the two correspond.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#00a3d9]/20 border border-[#00a3d9]/30 text-[#00a3d9] font-bold text-center text-sm">
              "Independent verification creates confidence."
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
        <motion.div
          className="bg-white rounded-3xl p-8 sm:p-14 shadow-2xl border border-slate-100 grid grid-cols-1 lg:grid-cols-12 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
        >
          {/* Left Info */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold tracking-widest text-[#00a3d9] uppercase">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d2e5c] leading-tight">
              Let's Discuss Your Next Medical-Equipment Procurement
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Whether you represent a government institution, hospital, healthcare organization, or procurement department, our team can discuss your requirements and determine where independent verification may add value.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#f4f8fb] border border-slate-100">
                <div className="w-10 h-10 rounded-full bg-[#0d2e5c] text-white flex items-center justify-center flex-shrink-0">
                  <FiMapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#0d2e5c] uppercase">Headquarters</p>
                  <p className="text-sm font-semibold text-slate-700">Singapore</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#f4f8fb] border border-slate-100">
                <div className="w-10 h-10 rounded-full bg-[#0d2e5c] text-white flex items-center justify-center flex-shrink-0">
                  <FiGlobe className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#0d2e5c] uppercase">Geographic Scope</p>
                  <p className="text-sm font-semibold text-slate-700">Serving Europe &amp; North America</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-6 bg-[#f4f8fb] p-6 sm:p-8 rounded-2xl border border-slate-200/80">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <h3 className="text-xl font-bold text-[#0d2e5c] mb-2">
                Request a Consultation
              </h3>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Anders Nilsen"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-[#00a3d9]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="e.g. name@institution.org"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-[#00a3d9]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Organization / Healthcare Institution
                </label>
                <input
                  type="text"
                  placeholder="e.g. Government Procurement Agency"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-[#00a3d9]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  How Can We Help? *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Briefly describe your equipment procurement or verification needs..."
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-[#00a3d9] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#00a3d9] hover:bg-[#0082ae] text-white font-bold text-sm shadow-md transition-colors cursor-pointer mt-2"
              >
                <span>Send Message</span>
                <FiSend className="w-4 h-4" />
              </button>
            </form>
          </div>
        </motion.div>
      </section>

      {/* PAGE FOOTER / CLOSING TAGLINE */}
      <footer className="bg-[#0d2e5c] text-white py-12 px-4 sm:px-8 text-center border-t border-white/10">
        <div className="max-w-4xl mx-auto space-y-3">
          <h3 className="text-xl font-bold tracking-wider text-[#00a3d9] uppercase">
            MedIntegrity Group
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            Independent Medical Equipment Verification &amp; Procurement Assurance
          </p>
          <div className="pt-2 text-sm sm:text-base font-semibold text-slate-100 italic">
            "Quality should never be assumed. It should be verified."
          </div>
          <p className="text-xs text-slate-400 pt-4">
            &copy; {new Date().getFullYear()} MedIntegrity Group. All rights reserved.
          </p>
        </div>
      </footer>

    </main>
  );
}