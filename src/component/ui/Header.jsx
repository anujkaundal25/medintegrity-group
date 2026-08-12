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
    { name: 'Home', href: '/' },
    { name: 'About Us', href: 'about' },
    { name: 'Services', href: '#' },
    { name: 'Our Process', href: '#' },
    { name: 'Contact Us', href: '/contact' },
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
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm px-4 md:px-12 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <a href="/" className="flex items-center gap-2 shrink-0 group">
            <img src="/logo.png" alt=""
            width={100}
            height={100} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-8 h-full text-[14px] font-bold text-[#0d2e5c]">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className={`flex items-center h-full whitespace-nowrap transition-all duration-200 relative ${
                  link.active 
                    ? 'text-[#00a3d9] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-[#00a3d9] after:rounded-t-md' 
                    : 'text-[#0d2e5c] hover:text-[#019a9a]'
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
              className="group flex items-center gap-2 bg-[#0d2e5c] hover:bg-[#019a9a] text-white font-bold text-xs uppercase px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-cyan-500/20 tracking-wider cursor-pointer transform hover:-translate-y-0.5"
            >
              <span>Contact Us</span>
              <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden text-[#0d2e5c] text-2xl focus:outline-none p-2 rounded-lg bg-slate-100 border border-slate-200 hover:bg-slate-200 transition-colors"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

        {/* 3. Mobile Navigation Dropdown with Smooth Animation */}
        <div 
          className={`xl:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-2xl z-50 overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-[500px] opacity-100 py-5 px-6' : 'max-h-0 opacity-0 py-0 px-6 pointer-events-none'
          }`}
        >
          <nav className="flex flex-col gap-3 text-sm font-bold text-[#0d2e5c]">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-2.5 px-4 rounded-xl transition-all ${
                  link.active 
                    ? 'bg-[#00a3d9] text-white shadow-md' 
                    : 'hover:bg-slate-100 hover:text-[#00a3d9]'
                }`}
              >
                {link.name}
              </a>
            ))}
            
            <hr className="my-2 border-slate-200" />
            
            <a 
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-[#0d2e5c] hover:bg-[#00a3d9] text-white font-bold text-xs uppercase py-3.5 rounded-xl tracking-wider shadow-md transition-colors"
            >
              <span>Contact Us</span>
              <FaArrowRight className="text-xs" />
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header