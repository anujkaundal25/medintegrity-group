"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend, FiMapPin, FiGlobe, FiCheckCircle } from 'react-icons/fi';

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    organization: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Animation Variants
  const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] } 
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] } 
    },
  };

  return (
    <section className="relative w-full bg-[#f4f8fb] overflow-hidden">
      
      {/* Main Angled Container */}
      <div 
        className="relative w-full min-h-[600px] bg-[#0a1045] text-white my-8 py-16 px-4 sm:px-8 lg:px-16"
        style={{
          clipPath: "polygon(0 8%, 100% 0, 100% 92%, 0 100%)",
        }}
      >
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none bg-fixed"
          style={{
            backgroundImage: `url('/home/contact.jpg')`,
          }}
        />

        {/* Content Grid */}
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 py-8">
          
          {/* Left Column */}
          <motion.div 
            className="lg:col-span-6 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInLeft}
          >
            <span className="text-xs font-bold tracking-widest text-[#009a97] uppercase">
              Independent Medical Equipment Verification &amp; Procurement Assurance
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Protecting Healthcare Investments <br />
              Through Independent Verification
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
              MedIntegrity Group is a Singapore-based medical equipment verification and procurement advisory firm serving healthcare institutions, government agencies, and procurement organizations across Europe and North America.
            </p>

            {/* Core Value Badges */}
            <div className="flex flex-wrap gap-2 text-xs font-semibold tracking-wider text-[#009a97]">
              <span className="bg-[#009a97]/10 border border-[#009a97]/30 px-3 py-1 rounded-full">INDEPENDENT</span>
              <span className="bg-[#009a97]/10 border border-[#009a97]/30 px-3 py-1 rounded-full">EXPERIENCED</span>
              <span className="bg-[#009a97]/10 border border-[#009a97]/30 px-3 py-1 rounded-full">ACCOUNTABLE</span>
            </div>

            {/* Quick Location & Scope Details */}
            <div className="pt-2 space-y-4 text-sm text-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#009a97]/20 flex items-center justify-center text-[#009a97]">
                  <FiMapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-white">Headquarters</p>
                  <p className="text-xs text-slate-300">Singapore</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#009a97]/20 flex items-center justify-center text-[#009a97]">
                  <FiGlobe className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-white">International Scope</p>
                  <p className="text-xs text-slate-300">Serving Europe &amp; North America</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-xs italic text-slate-400 border-l-2 border-[#009a97] pl-3">
                "Quality should never be assumed. It should be verified."
              </p>
            </div>
          </motion.div>

          {/* Right Column: Dark Floating Form Card */}
          <motion.div 
            className="lg:col-span-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInRight}
          >
            <div className="bg-[#0b1830]/90 backdrop-blur-md rounded-3xl p-8 sm:p-10 shadow-2xl border border-white/10">
              
              <div className="mb-6">
                <span className="text-xs font-semibold tracking-wider text-[#009a97] uppercase">
                  Contact MedIntegrity Group
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  Request a Consultation
                </h3>
              </div>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="py-12 text-center space-y-3"
                  >
                    <FiCheckCircle className="w-12 h-12 text-[#009a97] mx-auto" />
                    <h4 className="text-lg font-bold text-white">Consultation Requested</h4>
                    <p className="text-xs text-slate-300">
                      Thank you. A representative from MedIntegrity Group will review your request and follow up with you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Anders Nilsen"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#009a97] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. name@institution.org"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#009a97] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Organization / Healthcare Institution
                      </label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="e.g. Government Procurement Agency"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#009a97] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        How Can We Help? *
                      </label>
                      <textarea
                        name="message"
                        rows={3}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Briefly describe your equipment procurement or verification needs..."
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#009a97] transition-colors resize-none"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#009a97] hover:bg-[#00827f] text-white text-sm font-bold tracking-wide transition-colors shadow-lg cursor-pointer mt-2"
                    >
                      <span>Request Consultation</span>
                      <FiSend className="w-4 h-4" />
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
}

export default Contact;