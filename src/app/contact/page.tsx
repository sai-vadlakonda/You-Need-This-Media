"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Magnetic from "@/components/Magnetic";
import FooterSection from "@/components/Footer";
import React, { useState } from "react";

export default function Contact() {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const response = await fetch(
      "https://formsubmit.co/info@youneedthismedia.com",
      {
        method: "POST",
        body: formData,
      }
    );

    if (response.ok) {
      setSuccess(true);
      setLoading(false);
      e.target.reset();

      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } else {
      alert("Something went wrong ❌");
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen overflow-x-hidden relative">
      <Navbar />

      <section className="pt-32 pb-28 px-6 text-center relative overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute w-[600px] h-[600px] bg-[#E8C840]/10 blur-[160px] rounded-full top-10 left-1/2 -translate-x-1/2"></div>

        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold mb-4"
        >
          Let’s Build Your{" "}
          <span className="text-gold">Growth Engine</span>
        </motion.h1>

        <p className="text-gray-400 mb-12 max-w-xl mx-auto">
          Tell us about your goals — we’ll help you scale faster and smarter.
        </p>

        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-xl mx-auto glass p-8 rounded-2xl border border-white/10 relative"
        >
          <input type="hidden" name="_captcha" value="false" />

          <input
            name="name"
            type="text"
            placeholder="Your Name"
            required
            className="w-full mb-4 p-4 bg-transparent border border-white/10 rounded-lg outline-none focus:border-[#E8C840]"
          />

          <input
            name="email"
            type="email"
            placeholder="Your Email"
            required
            className="w-full mb-4 p-4 bg-transparent border border-white/10 rounded-lg outline-none focus:border-[#E8C840]"
          />

          <textarea
            name="message"
            rows={4}
            placeholder="Tell us about your project"
            required
            className="w-full mb-6 p-4 bg-transparent border border-white/10 rounded-lg outline-none focus:border-[#E8C840]"
          />

          <Magnetic>
            <button
              type="submit"
              disabled={loading}
              className="btn-gold glow w-full py-3 rounded-full text-black font-medium"
            >
              {loading ? "Sending..." : "Send Message ✉️"}
            </button>
          </Magnetic>

          {success && (
            <div className="mt-4 text-green-400 text-sm">
              Message sent successfully 🚀
            </div>
          )}
        </motion.form>

        {/* CONTACT OPTIONS */}
        <div className="mt-10 flex flex-col md:flex-row justify-center gap-4">

          <Magnetic>
            <button
              onClick={() => (window.location.href = "tel:+916281929821")}
              className="px-6 py-3 border border-white/10 rounded-full hover:border-[#E8C840] hover:text-[#E8C840] transition"
            >
              Call Us 📞
            </button>
          </Magnetic>

          <Magnetic>
            <button
              onClick={() =>
                window.open(
                  "https://wa.me/916281929821?text=Hi, I'm interested in your services.",
                  "_blank"
                )
              }
              className="px-6 py-3 border border-white/10 rounded-full hover:border-[#E8C840] hover:text-[#E8C840] transition"
            >
              WhatsApp Us 💬
            </button>
          </Magnetic>

        </div>

      </section>

      <FooterSection />
    </div>
  );
}