'use client'

import React from 'react'
import { 
  FaEnvelope, 
  FaFacebookF, 
  FaTwitter, 
  FaYoutube, 
  FaPinterestP, 
  FaArrowRight,
  FaShieldAlt
} from 'react-icons/fa'

function Footer() {
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Our Process', href: '#' },
    { name: 'Contact Us', href: '#contact' },
  ]

  const services = [
    { name: 'Medical Equipment Procurement', href: '#' },
    { name: 'Supply Chain Management', href: '#' },
    { name: 'Hospital Logistics', href: '#' },
    { name: 'Quality Assurance & Compliance', href: '#' },
  ]

  return (
    <footer className="relative bg-[#031d3b] text-white font-sans overflow-hidden border-t border-white/10">
      
      {/* ---------------- WHITE BOX GRID BACKGROUND DESIGN ---------------- */}
      {/* 1. White Grid Lines (Square Box Pattern) */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* 2. Soft Ambient Lighting behind the boxes */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00a3d9]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#053263] rounded-full blur-[100px] pointer-events-none" />

      {/* ---------------- MAIN FOOTER CONTENT ---------------- */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand Info Box (Spans 4 columns) */}
          <div className="lg:col-span-4 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 flex flex-col justify-between gap-4 shadow-xl">
            <div className="flex flex-col gap-3">
              <a href="/" className="flex items-center gap-3 shrink-0 group">
                <div className="flex flex-col leading-none">
                  <span className="text-white font-black text-xl tracking-tight uppercase">
                    MEDINTEGRITY <span className="text-[#00a3d9]">GROUP</span>
                  </span>
                  <span className="text-[8px] text-slate-300 font-bold tracking-widest uppercase mt-1">
                    Medical Procurement &amp; Supply
                  </span>
                </div>
              </a>

              <p className="text-slate-300 text-sm leading-relaxed">
                Providing trusted medical procurement solutions, high-grade healthcare logistics, and seamless supply chain integration worldwide.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-[#00a3d9] bg-white/10 w-fit px-3.5 py-2 rounded-xl border border-white/10">
              <FaShieldAlt />
              <span>Certified Healthcare Partner</span>
            </div>
          </div>

          {/* Column 2: Navigation Links (Spans 2 columns) */}
          <div className="lg:col-span-2 p-2">
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-4 relative inline-block after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-8 after:h-[2px] after:bg-[#00a3d9]">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-slate-300">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href} 
                    className="hover:text-[#00a3d9] hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services Offered (Spans 3 columns) */}
          <div className="lg:col-span-3 p-2">
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-4 relative inline-block after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-8 after:h-[2px] after:bg-[#00a3d9]">
              Our Services
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-slate-300">
              {services.map((item, idx) => (
                <li key={idx}>
                  <a 
                    href={item.href} 
                    className="hover:text-[#00a3d9] hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter Box (Spans 3 columns) */}
          <div className="lg:col-span-3 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 flex flex-col gap-4 shadow-xl">
            <h3 className="text-white font-bold text-sm tracking-wider uppercase relative inline-block after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-8 after:h-[2px] after:bg-[#00a3d9]">
              Stay Informed
            </h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              Subscribe to receive the latest updates in medical logistics and supply availability.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2.5 mt-1">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-white/10 border border-white/15 focus:border-[#00a3d9] rounded-xl text-xs text-white placeholder-slate-300 py-3 pl-4 pr-10 outline-none transition-all"
                  required
                />
                <button 
                  type="submit" 
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-[#00a3d9] hover:bg-[#0082ad] text-white p-2 rounded-lg transition-colors cursor-pointer"
                  aria-label="Subscribe"
                >
                  <FaArrowRight className="text-xs" />
                </button>
              </div>
              <span className="text-[10px] text-slate-400">Direct inquiries: hello@email.co</span>
            </form>
          </div>

        </div>

        {/* ---------------- BOTTOM COPYRIGHT BAR ---------------- */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} MedIntegrity Group. All rights reserved.</p>

          {/* Social Links inside subtle white boxes */}
          <div className="flex items-center gap-2.5">
            {[
              { icon: <FaFacebookF />, label: 'Facebook' },
              { icon: <FaTwitter />, label: 'Twitter' },
              { icon: <FaYoutube />, label: 'YouTube' },
              { icon: <FaPinterestP />, label: 'Pinterest' },
            ].map((social, idx) => (
              <a 
                key={idx}
                href="#" 
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#00a3d9] hover:text-white flex items-center justify-center transition-all duration-300 border border-white/10" 
                aria-label={social.label}
              >
                <span className="text-xs">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer