"use client";

import React, { useState, useEffect } from "react";
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";

function Testimonials() {
  const testimonialsData = [
    {
      quote: "Quality should never be assumed. It should be verified. MedIntegrity Group gave our hospital procurement team the independent oversight we needed to ensure every piece of equipment matched our strict specifications.",
      clientName: "Anders Nilsen",
      title: "CEO, Healthcare Sector",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
      rating: 5,
    },
    {
      quote: "What was ordered should be what was delivered. Their pre-shipment and factory inspection process helped us identify discrepancies early, protecting our substantial investment in medical technology.",
      clientName: "Procurement Director",
      title: "Regional Hospital Group",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      rating: 5,
    },
    {
      quote: "Independent verification creates confidence. Having a trusted partner based in Singapore with an international focus allowed our agency to navigate complex cross-border procurement seamlessly.",
      clientName: "Senior Project Manager",
      title: "Government Health Department",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState("translate-x-0 opacity-100");

  // Auto slide every 6 seconds with fade & slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      handleSlideChange((currentIndex + 1) % testimonialsData.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [currentIndex, testimonialsData.length]);

  const handleSlideChange = (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    setSlideDirection("-translate-x-6 opacity-0 scale-95");

    setTimeout(() => {
      setCurrentIndex(newIndex);
      setSlideDirection("translate-x-6 opacity-0 scale-95");
      
      setTimeout(() => {
        setSlideDirection("translate-x-0 opacity-100 scale-100");
        setIsAnimating(false);
      }, 50);
    }, 300);
  };

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? testimonialsData.length - 1 : currentIndex - 1;
    handleSlideChange(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % testimonialsData.length;
    handleSlideChange(newIndex);
  };

  return (
    <section className="py-10 px-4 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden relative">
      
      {/* Decorative background glow/blur elements using #009a97 */}
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-[#009a97]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#0d2e5c]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14 relative z-10">
        
        {/* Left Side: Featured Image with Premium Rounded Styling & Parallax Hover */}
        <div className="w-full lg:w-1/2 relative group overflow-hidden rounded-[2.55rem] shadow-2xl h-[480px] sm:h-[540px] border-4 border-white">
          <img
            src="/home/test.jpg"
            alt="Medical equipment verification and inspection"
            className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-2"
          />
          {/* Rich Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d2e5c]/80 via-[#0d2e5c]/20 to-transparent pointer-events-none"></div>
          
        </div>

        {/* Right Side: Enhanced Single Review Slider */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          
          {/* Section Header */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#009a97]/10 text-[#009a97] font-bold text-xs uppercase tracking-wider mb-3">
              Client Success Stories
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1c226b] leading-tight">
              Realizing Dreams: Success Stories From Our Clients
            </h2>
            <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed">
              We provide independent technical oversight between medical-equipment purchasers and manufacturers—ensuring compliance, quality, and complete transparency.
            </p>
          </div>

          {/* Testimonial Card with Bottom-to-Top Fill Effect using #009a97 */}
          <div className="relative bg-white p-8 sm:p-10 rounded-[2rem] shadow-2xl border border-slate-100 overflow-hidden group">
            
            {/* Background color transition fill sweep from Bottom to Top on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#009a97] to-[#0d2e5c] translate-y-full group-hover:translate-y-0 transition-transform duration-600 ease-in-out pointer-events-none z-0"></div>

            {/* Giant Background Quote Icon for Aesthetics */}
            <FaQuoteLeft className="absolute top-6 right-6 text-slate-100 group-hover:text-white/10 w-20 h-20 pointer-events-none transition-colors duration-500 z-0" />

            {/* Content wrapper with smooth slide animation */}
            <div className={`relative z-10 transition-all duration-300 ease-out ${slideDirection}`}>
              
              {/* Rating Stars */}
              <div className="flex items-center gap-1.5 text-amber-400 mb-5">
                {[...Array(testimonialsData[currentIndex].rating)].map((_, i) => (
                  <FaStar key={i} className="w-4 h-4 drop-shadow-sm" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-700 group-hover:text-slate-100 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 italic min-h-[110px] transition-colors duration-500 font-medium">
                &ldquo;{testimonialsData[currentIndex].quote}&rdquo;
              </p>

              {/* Client Profile Details & Interactive Controls */}
              <div className="flex items-center justify-between pt-6 border-t border-slate-100 group-hover:border-white/15 transition-colors duration-500">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={testimonialsData[currentIndex].image}
                      alt={testimonialsData[currentIndex].clientName}
                      className="w-14 h-14 rounded-full object-cover shadow-md ring-4 ring-white/30 group-hover:ring-white/20 transition-all duration-500"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0d2e5c] group-hover:text-white text-base sm:text-lg transition-colors duration-500">
                      {testimonialsData[currentIndex].clientName}
                    </h3>
                    <p className="text-xs text-[#009a97] group-hover:text-teal-200 font-semibold uppercase tracking-wider transition-colors duration-500">
                      {testimonialsData[currentIndex].title}
                    </p>
                  </div>
                </div>

                {/* Slider Navigation Arrows */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevSlide}
                    aria-label="Previous Testimonial"
                    className="w-11 h-11 rounded-full bg-slate-100 group-hover:bg-white/10 group-hover:text-white hover:!bg-[#009a97] hover:!text-white text-slate-700 flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm hover:scale-105 active:scale-95"
                  >
                    <FaChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextSlide}
                    aria-label="Next Testimonial"
                    className="w-11 h-11 rounded-full bg-slate-100 group-hover:bg-white/10 group-hover:text-white hover:!bg-[#009a97] hover:!text-white text-slate-700 flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm hover:scale-105 active:scale-95"
                  >
                    <FaChevronRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </div>

          </div>

          {/* Pagination Indicators / Dots */}
          <div className="flex items-center gap-2 mt-6 justify-center lg:justify-start">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleSlideChange(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx ? "w-8 bg-[#009a97]" : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default Testimonials;