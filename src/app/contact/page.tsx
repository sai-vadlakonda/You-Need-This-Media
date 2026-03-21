"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Magnetic from "@/components/Magnetic";
import { useState } from "react";

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

      {/* NAVBAR */}
      <Navbar />

      {/* MAIN */}
      <section className="pt-32 pb-32 px-6 text-center relative">

        <div className="absolute w-[500px] h-[500px] bg-[#E8C840]/10 blur-[140px] rounded-full top-10 left-1/2 -translate-x-1/2 z-0"></div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Let’s Work Together
        </motion.h1>

        <p className="text-gray-400 mb-12 text-lg">
          Tell us about your goals — we’ll help you scale faster.
        </p>

        <div className="max-w-xl mx-auto glass p-8 md:p-10 rounded-2xl">

          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            type="text"
            placeholder="Your Name"
            className="w-full mb-4 p-4 bg-transparent border border-white/10 rounded-lg outline-none focus:border-[#E8C840] transition"
          />

          <input
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            type="email"
            placeholder="Your Email"
            className="w-full mb-4 p-4 bg-transparent border border-white/10 rounded-lg outline-none focus:border-[#E8C840] transition"
          />

          <textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            rows={4}
            placeholder="Tell us about your project"
            className="w-full mb-6 p-4 bg-transparent border border-white/10 rounded-lg outline-none focus:border-[#E8C840] transition"
          />

          <Magnetic>
            <button
              onClick={handleEmail}
              className="btn-gold glow w-full"
            >
              Send Message ✉️
            </button>
          </Magnetic>
        </div>

        <div className="mt-14 text-gray-500">or</div>

        <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">

          <Magnetic>
            <a
              href="tel:+919XXXXXXXXX"
              className="px-6 py-3 border border-white/10 rounded-full hover:bg-white/10 transition text-center"
            >
              Call Us 📞
            </a>
          </Magnetic>

          <Magnetic>
            <a
              href={`https://wa.me/919XXXXXXXXX?text=Hi, I'm interested in your services.%0AName: ${form.name}%0AEmail: ${form.email}%0AMessage: ${form.message}`}
              target="_blank"
              className="px-6 py-3 border border-white/10 rounded-full hover:bg-white/10 transition text-center"
            >
              WhatsApp Us 💬
            </a>
          </Magnetic>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="mt-20 py-12 text-center text-gray-500 border-t border-white/10">
        © 2026 You Need This Media. All rights reserved.
      </footer>

    </div>
  );
}