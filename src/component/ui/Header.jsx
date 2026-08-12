'use client'

import React, { useState } from 'react'
import { 
  FaEnvelope, 
  FaPhoneAlt, 
  FaFacebookF, 
  FaTwitter, 
  FaYoutube, 
  FaPinterestP, 
  FaBars, 
  FaTimes,
  FaArrowRight
} from 'react-icons/fa'

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '/', active: true },
    { name: 'About Us', href: 'about' },
    { name: 'Services', href: '#' },
    { name: 'Our Process', href: '#' },
  ]

  return (
    <header className="w-full font-sans">
      {/* 1. Top Bar */}
      <div className="bg-[#053263] text-white text-xs sm:text-sm py-2 px-4 md:px-12 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          
          {/* Contact Details */}
          <div className="flex items-center gap-6 font-semibold tracking-wider text-xs">
            <a href="mailto:hello@email.co" className="flex items-center gap-2 hover:text-[#00a3d9] transition-colors">
              <FaEnvelope className="text-sm" />
              <span>HELLO@EMAIL.CO</span>
            </a>
            <a href="tel:+62123486789" className="flex items-center gap-2 hover:text-[#00a3d9] transition-colors">
              <FaPhoneAlt className="text-sm" />
              <span>+62 123 486 789</span>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-xs">
            <a href="#" className="hover:text-[#00a3d9] transition-colors" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-[#00a3d9] transition-colors" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-[#00a3d9] transition-colors" aria-label="YouTube">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-[#00a3d9] transition-colors" aria-label="Pinterest">
              <FaPinterestP />
            </a>
          </div>

        </div>
      </div>

      {/* 2. Unique Glassmorphic Fixed Navigation Bar */}
      <div className="sticky top-0 z-50 bg-[#053263]/80 backdrop-blur-md border-b border-white/10 shadow-lg px-4 md:px-12 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <a href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="flex flex-col leading-none">
              <span className="text-white font-black text-xl tracking-tight uppercase group-hover:opacity-90 transition-opacity">
                MEDINTEGRITY <span className="text-[#00a3d9] bg-clip-text">GROUP</span>
              </span>
              <span className="text-[8px] text-slate-300 font-bold tracking-widest uppercase mt-1">
                Medical Procurement &amp; Supply
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-8 h-full text-[14px] font-bold text-white">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className={`flex items-center h-full whitespace-nowrap transition-all duration-200 relative ${
                  link.active 
                    ? 'text-[#00a3d9] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-[#00a3d9] after:rounded-t-md' 
                    : 'text-slate-200 hover:text-[#00a3d9]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Section: Unique White CTA Button */}
          <div className="hidden lg:flex items-center shrink-0">
            <a 
              href="#contact" 
              className="group flex items-center gap-2 bg-white hover:bg-[#00a3d9] text-[#053263] hover:text-white font-bold text-xs uppercase px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-cyan-500/20 tracking-wider cursor-pointer transform hover:-translate-y-0.5"
            >
              <span>Contact Us</span>
              <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden text-white text-2xl focus:outline-none p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

        {/* 3. Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 w-full bg-[#053263]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl z-50 py-5 px-6 animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-3 text-sm font-bold text-white">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`py-2.5 px-4 rounded-xl transition-all ${
                    link.active 
                      ? 'bg-[#00a3d9] text-white shadow-md' 
                      : 'hover:bg-white/10 hover:text-[#00a3d9]'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              
              <hr className="my-2 border-white/10" />
              
              <a 
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-white hover:bg-[#00a3d9] text-[#053263] hover:text-white font-bold text-xs uppercase py-3.5 rounded-xl tracking-wider shadow-md transition-colors"
              >
                <span>Contact Us</span>
                <FaArrowRight className="text-xs" />
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header