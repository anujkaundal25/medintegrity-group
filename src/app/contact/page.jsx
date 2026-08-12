"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMapPin,
  FiMail,
  FiPhone,
  FiClock,
  FiCheckCircle,
  FiSend,
} from "react-icons/fi";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    consent: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  return (
    <main className="w-full bg-[#f4f8fb] font-sans text-slate-800 overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[50vh] bg-[#0d2e5c] text-white flex flex-col justify-between pt-24 pb-16 px-4 sm:px-8 lg:px-16 overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=80"
            alt="Medical Verification Consultation"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Ambient Gradient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-[#00a3d9]/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto w-full text-center space-y-4 z-10 my-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="space-y-3"
          >
            <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest text-slate-300 uppercase">
              <span>Home</span>
              <span>/</span>
              <span className="text-[#00a3d9]">Contact</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Contact MedIntegrity Group
            </h1>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
              Let&apos;s discuss your next medical-equipment procurement and independent verification requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* INFO CARDS & HEADER INTRO SECTION */}
      <section className="py-16 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold tracking-widest text-[#00a3d9] uppercase">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d2e5c] leading-tight">
              How we can help you?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Whether you represent a government institution, hospital, healthcare organization, or procurement department, our team can discuss your requirements and determine where independent verification may add value.
            </p>
            <div className="pt-2 flex items-center gap-3 text-sm text-slate-700 font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00a3d9]" />
              <span>Serving Europe &amp; North America from Singapore</span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-[#0d2e5c] text-white p-8 sm:p-10 rounded-3xl shadow-xl relative overflow-hidden border border-white/10 space-y-6">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#00a3d9]/10 rounded-full blur-2xl pointer-events-none" />
              <div className="relative z-10 space-y-3">
                <span className="text-xs font-bold tracking-widest text-[#00a3d9] uppercase">
                  Procurement Support &amp; Response Time
                </span>
                <h3 className="text-xl sm:text-2xl font-bold">
                  Dedicated Client Advisory
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Submit requests anytime, 24/7. Our procurement team reviews and responds during business hours.
                </p>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  For urgent pricing and availability requests, please contact us directly and we will prioritize your request.
                </p>
              </div>

              <div className="relative z-10 pt-4 border-t border-white/10 space-y-3 text-xs sm:text-sm">
                <div className="flex items-center gap-3 text-slate-200">
                  <FiMail className="w-4 h-4 text-[#00a3d9] flex-shrink-0" />
                  <span><strong>Email:</strong> procurement@medintegritygroup.com</span>
                </div>
                <div className="flex items-center gap-3 text-slate-200">
                  <FiPhone className="w-4 h-4 text-[#00a3d9] flex-shrink-0" />
                  <span><strong>Base:</strong> Singapore (Serving Europe &amp; North America)</span>
                </div>
                <div className="flex items-center gap-3 text-slate-200">
                  <FiClock className="w-4 h-4 text-[#00a3d9] flex-shrink-0" />
                  <span><strong>Hours:</strong> Monday – Friday, 9:00 AM – 5:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* INTERACTIVE FORM & CALL TO ACTION SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Context & Trust */}
          <div className="lg:col-span-5 space-y-6 bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-slate-100 flex flex-col justify-between h-full">
            <div className="space-y-6">
              <span className="text-xs font-bold tracking-widest text-[#00a3d9] uppercase">
                Inquiry &amp; Sourcing
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d2e5c] leading-tight">
                Request Pricing or Submit an Inquiry
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our procurement team is available to support your sourcing needs. Submit your request anytime and we will respond within 24 hours.
              </p>

              <div className="space-y-4 pt-4 border-t border-slate-100">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#00a3d9]/10 flex items-center justify-center text-[#00a3d9] flex-shrink-0 mt-0.5">
                    <FiCheckCircle className="w-4 h-4" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600">
                    <strong>Independent Technical Verification:</strong> Ensure equipment meets approved specifications.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#00a3d9]/10 flex items-center justify-center text-[#00a3d9] flex-shrink-0 mt-0.5">
                    <FiCheckCircle className="w-4 h-4" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600">
                    <strong>Buyer-Side Perspective:</strong> Objective oversight protecting your healthcare investments.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#00a3d9]/10 flex items-center justify-center text-[#00a3d9] flex-shrink-0 mt-0.5">
                    <FiCheckCircle className="w-4 h-4" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600">
                    <strong>Global Reach:</strong> Strategic operations based in Singapore supporting Europe and North America.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="p-4 rounded-xl bg-[#f4f8fb] border border-slate-200 text-center">
                <p className="text-xs text-slate-500 font-medium">
                  &ldquo;Quality should never be assumed. It should be verified.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-slate-100">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 bg-[#00a3d9]/10 text-[#00a3d9] rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-[#0d2e5c]">
                  Inquiry Submitted Successfully
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  Thank you for reaching out to MedIntegrity Group. Our procurement advisory team will review your requirements and respond within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      firstName: "",
                      lastName: "",
                      email: "",
                      phone: "",
                      service: "",
                      message: "",
                      consent: false,
                    });
                  }}
                  className="mt-4 px-6 py-2.5 rounded-full bg-[#00a3d9] text-white text-xs font-bold tracking-wide hover:bg-[#0082ae] transition-all"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      First Name <span className="text-[#00a3d9]">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter your first name"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#00a3d9] text-sm text-slate-800 bg-[#f4f8fb]/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Last Name <span className="text-[#00a3d9]">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Enter your last name"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#00a3d9] text-sm text-slate-800 bg-[#f4f8fb]/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Email <span className="text-[#00a3d9]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#00a3d9] text-sm text-slate-800 bg-[#f4f8fb]/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Phone <span className="text-[#00a3d9]">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#00a3d9] text-sm text-slate-800 bg-[#f4f8fb]/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    What do you need help with? <span className="text-[#00a3d9]">*</span>
                  </label>
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#00a3d9] text-sm text-slate-800 bg-[#f4f8fb]/50"
                  >
                    <option value="" disabled>Select the service</option>
                    <option value="Medical Equipment Verification">Medical Equipment Verification</option>
                    <option value="Manufacturer & Supplier Assessment">Manufacturer &amp; Supplier Assessment</option>
                    <option value="Factory & Pre-Shipment Inspection">Factory &amp; Pre-Shipment Inspection</option>
                    <option value="Technical & Documentation Review">Technical &amp; Documentation Review</option>
                    <option value="Delivery & Acceptance Verification">Delivery &amp; Acceptance Verification</option>
                    <option value="Procurement Advisory">Procurement Advisory</option>
                    <option value="General Consultation">General Consultation</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide details about your medical equipment procurement or verification requirements..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#00a3d9] text-sm text-slate-800 bg-[#f4f8fb]/50 resize-none"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    name="consent"
                    id="consent"
                    required
                    checked={formData.consent}
                    onChange={handleChange}
                    className="w-4 h-4 rounded border-slate-300 text-[#00a3d9] focus:ring-[#00a3d9]"
                  />
                  <label htmlFor="consent" className="text-xs text-slate-600">
                    <span className="text-[#00a3d9] font-bold">*</span> Yes, I agree with the privacy policy.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#0a1045] hover:bg-[#0082ae] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#00a3d9]/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FiSend className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}