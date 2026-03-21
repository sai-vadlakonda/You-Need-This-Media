"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10 px-6 py-20 relative overflow-hidden">

      {/* Subtle Glow */}
      <div className="absolute w-[400px] h-[400px] bg-[#E8C840]/5 blur-[120px] rounded-full bottom-0 left-1/2 -translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">

        {/* Brand */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-semibold text-gold mb-4 tracking-wide"
        >
          You Need This Media
        </motion.h2>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-gray-400 max-w-xl mb-6"
        >
          From Scroll to Scale — we help you turn attention into growth with content that performs.
        </motion.p>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex gap-8 text-gray-300 text-sm mb-8"
        >
          <a href="#" className="relative group">
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#E8C840] transition-all group-hover:w-full"></span>
          </a>
          <a href="#" className="relative group">
            Services
            <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#E8C840] transition-all group-hover:w-full"></span>
          </a>
          <a href="#" className="relative group">
            About
            <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#E8C840] transition-all group-hover:w-full"></span>
          </a>
          <a href="#" className="relative group">
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#E8C840] transition-all group-hover:w-full"></span>
          </a>
        </motion.div>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="btn-gold glow mb-10"
        >
          Work With Us
        </motion.button>

        {/* Bottom */}
        <div className="text-gray-500 text-sm border-t border-white/10 pt-6 w-full">
          © 2026 You Need This Media. All rights reserved.
        </div>

      </div>

    </footer>
  );
}