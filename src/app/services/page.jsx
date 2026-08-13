"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import Link from "next/link";
import Commitments from "@/component/home/Commitments";

export default function ServicesPageAlternating() {
  const services = [
    {
      number: "01",
      title: "Medical Equipment Verification",
      description:
        "Independent verification of medical equipment against approved specifications, purchase agreements, and technical requirements.",
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
      highlights: [
        "Approved specification alignment",
        "Purchase agreement matching",
        "Rigorous technical compliance checks",
      ],
    },
    {
      number: "02",
      title: "Manufacturer & Supplier Assessment",
      description:
        "Evaluation of manufacturers and suppliers, including capabilities, quality systems, certifications, production processes, documentation, and ability to meet contractual requirements.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
      highlights: [
        "Quality systems audit",
        "Certification and process review",
        "Contractual capability analysis",
      ],
    },
    {
      number: "03",
      title: "Factory & Pre-Shipment Inspection",
      description:
        "Independent inspection before equipment leaves the manufacturer, helping identify discrepancies, defects, missing components, or deviations from approved specifications.",
      image:
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
      highlights: [
        "Defect & discrepancy identification",
        "Pre-dispatch component audits",
        "Specification deviation checks",
      ],
    },
    {
      number: "04",
      title: "Technical & Documentation Review",
      description:
        "Review of technical documentation, certificates, specifications, manuals, configurations, and other relevant documentation.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
      highlights: [
        "Manual & certificate verification",
        "Configuration baseline checks",
        "Compliance documentation audit",
      ],
    },
    {
      number: "05",
      title: "Delivery & Acceptance Verification",
      description:
        "Verification of equipment upon delivery, including model, configuration, quantity, accessories, documentation, and other contractual requirements before final acceptance.",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
      highlights: [
        "Model & quantity confirmation",
        "Accessory and documentation check",
        "Pre-final acceptance sign-off",
      ],
    },
    {
      number: "06",
      title: "Procurement Advisory",
      description:
        "Independent technical support for government agencies, hospitals, healthcare organizations, and procurement teams evaluating medical-equipment purchases.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
      highlights: [
        "Government & hospital support",
        "Evaluation of purchase options",
        "Independent buyer-side technical advice",
      ],
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

  return (
    <main className="w-full bg-[#f4f8fb] text-slate-800 overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[60vh] bg-[#0d2e5c] text-white flex items-center justify-center pt-24 pb-16 px-4 sm:px-8 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <img
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=2000&q=80"
            alt="Medical Verification"
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
            Expert Advisory Framework
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-5xl font-bold text-white leading-tight">
            Our Core Services
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-light">
            Rigorous, buyer-side technical oversight across every stage of the medical equipment lifecycle.
          </p>
        </motion.div>
      </section>

      {/* ALTERNATING SECTIONS (Photo Left / Content Right, then Content Left / Photo Right) */}
      <section className="py-24 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto space-y-24">
        {services.map((service, index) => {
          const isEven = index % 2 === 0; // Even index: Photo Left, Content Right. Odd: Content Left, Photo Right.
          return (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeInUp}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                isEven ? "" : "lg:grid-flow-dense"
              }`}
            >
              {/* IMAGE CONTAINER */}
              <div
                className={`lg:col-span-6 ${
                  isEven ? "lg:col-start-1" : "lg:col-start-7"
                }`}
              >
                <div className="relative h-72 sm:h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-100 group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d2e5c]/60 via-transparent to-transparent" />
                  <div className="absolute top-6 left-6">
                    <span className="bg-[#009a97] text-white text-xs font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full shadow-md">
                      {service.number}
                    </span>
                  </div>
                </div>
              </div>

              {/* CONTENT CONTAINER */}
              <div
                className={`lg:col-span-6 space-y-6 ${
                  isEven ? "lg:col-start-7" : "lg:col-start-1"
                }`}
              >
                <h2 className="text-2xl sm:text-4xl font-bold text-[#0d2e5c] leading-tight">
                  {service.title}
                </h2>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3 pt-2">
                  {service.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#009a97]/15 flex items-center justify-center text-[#009a97] shrink-0">
                        <FiCheckCircle className="w-4 h-4" />
                      </div>
                      <span className="text-slate-700 text-sm sm:text-base font-medium">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#009a97] hover:text-[#00827f] transition-colors cursor-pointer"
                  >
                    <span>Request This Service</span>
                    <FiArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>
      <Commitments/>
    </main>
  );
}