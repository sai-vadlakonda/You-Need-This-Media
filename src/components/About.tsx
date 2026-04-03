"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

export default function AboutSection() {
  return (
    <section id="about" className="py-28 px-6 bg-[#0A0A0A] text-center relative overflow-hidden">

      {/* 🔥 BACKGROUND GLOW (SOFTER) */}
      <div className="absolute w-[500px] h-[500px] bg-[#E8C840]/10 blur-[140px] rounded-full top-10 left-1/2 -translate-x-1/2"></div>

      {/* 🔥 HEADING */}
      <Reveal>
        <p className="text-gold text-xs tracking-[0.2em] mb-3">
          ABOUT US
        </p>
      </Reveal>

      <Reveal>
        <h2 className="text-3xl md:text-5xl font-bold mb-5 tracking-tight leading-tight">
          We Build <span className="text-gold">Attention</span> That Converts
        </h2>
      </Reveal>

      {/* 🔥 MAIN TEXT (REDUCED SIZE) */}
      <Reveal>
        <p className="max-w-2xl mx-auto text-gray-400 text-base md:text-lg leading-relaxed">
          You Need This Media is a performance-driven creative agency helping creators and brands turn content into a scalable growth engine.
        </p>
      </Reveal>

      {/* 🔥 TAGLINE (FIXED SIZE + SPACING) */}
      <Reveal>
        <p className="mt-6 text-white text-lg md:text-xl font-medium">
          We don’t chase trends — we engineer growth.
        </p>
      </Reveal>

      {/* 🔥 CARDS */}
      <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

        {[
          {
            title: "Strategy-Driven",
            desc: "Every piece of content is backed by data and clear growth intent.",
          },
          {
            title: "Creative Excellence",
            desc: "Scroll-stopping visuals and edits designed to capture attention.",
          },
          {
            title: "Scalable Growth",
            desc: "Systems that help your brand grow consistently over time.",
          },
        ].map((item, i) => (
          <Reveal key={i}>
            <motion.div
              whileHover={{ y: -8 }}
              className="relative glass p-6 rounded-xl border border-white/10 hover:border-[#E8C840]/40 hover:shadow-[0_0_40px_rgba(232,200,64,0.15)] transition group"
            >

              {/* GOLD LINE */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E8C840] to-transparent opacity-40"></div>

              <h3 className="text-base font-semibold mb-2 text-white">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>

              {/* HOVER SHINE */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-transparent via-white/10 to-transparent blur-xl"></div>

            </motion.div>
          </Reveal>
        ))}

      </div>

      {/* 🔥 TRUST LINE */}
      <Reveal>
        <p className="mt-16 text-gray-500 text-xs md:text-sm tracking-wide">
          Trusted by creators, startups, and brands building their presence across platforms.
        </p>
      </Reveal>

    </section>
  );
}