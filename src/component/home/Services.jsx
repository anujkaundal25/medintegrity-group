'use client'

import React from "react";
import { motion } from "framer-motion";

function Services() {
  const servicesData = [
    {
      title: "Medical Equipment Verification",
      description:
        "Independent verification of medical equipment against approved specifications, purchase agreements, and technical requirements.",
      image:
        "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600",
      link: "#medical-equipment-verification",
    },
    {
      title: "Manufacturer & Supplier Assessment",
      description:
        "Evaluation of manufacturers and suppliers, including capabilities, quality systems, certifications, production processes, documentation, and ability to meet contractual requirements.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600",
      link: "#supplier-assessment",
    },
    {
      title: "Factory & Pre-Shipment Inspection",
      description:
        "Independent inspection before equipment leaves the manufacturer, helping identify discrepancies, defects, missing components, or deviations from approved specifications.",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=600",
      link: "#pre-shipment-inspection",
    },
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
        staggerChildren: 0.15,
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
    <section className="relative w-full bg-[#f4f8fa] overflow-hidden pb-24">
      {/* Dark Blue Header Section with Slanted Top & Bottom */}
      <div
        className="relative w-full bg-[#0a1045] text-white pt-24 pb-52 px-6"
        style={{
          clipPath: "polygon(0 4%, 100% 0, 100% 90%, 0 100%)",
        }}
      >
        {/* Hexagon Pattern Background Overlay */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />

        {/* Header Text */}
        <motion.div 
          className="relative max-w-4xl mx-auto text-center space-y-3 z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
        >
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#00a3d9] uppercase inline-block">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Explore Our Wide Range Of Medical Equipment Services
          </h2>
        </motion.div>
      </div>

      {/* Cards Section */}
      <div className="relative max-w-7xl mx-auto px-6 -mt-40 z-20">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col items-center bg-white rounded-3xl p-3 border border-slate-100 shadow-xl transition-shadow duration-300 hover:shadow-2xl"
            >
              {/* Rounded Image Container */}
              <div className="w-full h-72 rounded-2xl overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* White Content Card Overlapping Image Bottom */}
              <div className="relative w-[88%] -mt-20 mb-3 bg-white rounded-2xl p-6 shadow-md border border-slate-100/80 text-center flex flex-col justify-between items-center flex-grow">
                <div>
                  <h3 className="text-xl font-bold text-[#0a1045] mb-3 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Learn More Link */}
                <a
                  href={service.link}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1c226b] group-hover:text-[#00a3d9] uppercase tracking-wider transition-colors mt-auto"
                >
                  Learn More
                  <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Action Button */}
      <motion.div 
        className="flex justify-center items-center w-full mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <motion.button 
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="bg-[#0a1045] hover:bg-[#00a3d9] text-white font-bold text-sm tracking-wider uppercase py-3.5 px-10 rounded-xl cursor-pointer transition-colors shadow-lg"
        >
          View All Services
        </motion.button>
      </motion.div>
    </section>
  );
}

export default Services;