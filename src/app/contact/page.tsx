"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Magnetic from "@/components/Magnetic";
import { useState } from "react";
import FooterSection from "@/components/Footer"

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleEmail = () => {
    const subject = "New Inquiry from Website";
    const body = `Name: ${form.name}%0AEmail: ${form.email}%0AMessage: ${form.message}`;
    window.location.href = `mailto:youneedthismedia@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen overflow-x-hidden relative">

      <Navbar />

      <section className="pt-32 pb-28 px-6 text-center relative overflow-hidden">

        {/* 🔥 BACKGROUND GLOW */}
        <div className="absolute w-[600px] h-[600px] bg-[#E8C840]/10 blur-[160px] rounded-full top-10 left-1/2 -translate-x-1/2"></div>

        {/* 🔥 HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
        >
          Let’s Build Your{" "}
          <span className="text-gold">Growth Engine</span>
        </motion.h1>

        <p className="text-gray-400 mb-12 text-base md:text-lg max-w-xl mx-auto">
          Tell us about your goals — we’ll help you scale faster and smarter.
        </p>

        {/* 🔥 FORM CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-xl mx-auto glass p-8 md:p-10 rounded-2xl border border-white/10 relative"
        >

          {/* GOLD LINE */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E8C840] to-transparent opacity-40"></div>

          {/* INPUTS */}
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            type="text"
            placeholder="Your Name"
            className="w-full mb-4 p-4 bg-transparent border border-white/10 rounded-lg outline-none focus:border-[#E8C840] transition placeholder-gray-500"
          />

          <input
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            type="email"
            placeholder="Your Email"
            className="w-full mb-4 p-4 bg-transparent border border-white/10 rounded-lg outline-none focus:border-[#E8C840] transition placeholder-gray-500"
          />

          <textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            rows={4}
            placeholder="Tell us about your project"
            className="w-full mb-6 p-4 bg-transparent border border-white/10 rounded-lg outline-none focus:border-[#E8C840] transition placeholder-gray-500"
          />

          {/* PRIMARY CTA */}
          <Magnetic>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleEmail}
              className="btn-gold glow w-full py-3 rounded-full text-black font-medium"
            >
              Send Message ✉️
            </motion.button>
          </Magnetic>

        </motion.div>

        {/* 🔥 OR DIVIDER */}
        <div className="mt-12 flex items-center justify-center gap-4 text-gray-500 text-sm">
          <div className="w-16 h-[1px] bg-white/10"></div>
          OR
          <div className="w-16 h-[1px] bg-white/10"></div>
        </div>

        {/* 🔥 SECONDARY ACTIONS */}
        <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">

          <Magnetic>
            <a
              href="tel:+919XXXXXXXXX"
              className="px-6 py-3 border border-white/10 rounded-full hover:border-[#E8C840] hover:text-[#E8C840] transition"
            >
              Call Us 📞
            </a>
          </Magnetic>

          <Magnetic>
            <a
              href={`https://wa.me/919XXXXXXXXX?text=Hi, I'm interested in your services.%0AName: ${form.name}%0AEmail: ${form.email}%0AMessage: ${form.message}`}
              target="_blank"
              className="px-6 py-3 border border-white/10 rounded-full hover:border-[#E8C840] hover:text-[#E8C840] transition"
            >
              WhatsApp Us 💬
            </a>
          </Magnetic>

        </div>

      </section>

      <FooterSection />

    </div>
  );
}