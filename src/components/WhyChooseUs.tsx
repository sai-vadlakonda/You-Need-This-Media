"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

const points = [
  {
    title: "Strategy-Driven Execution",
    desc: "Every move is backed by data, planning, and clear growth intent.",
  },
  {
    title: "High-Impact Creative",
    desc: "Scroll-stopping visuals and edits that capture attention instantly.",
  },
  {
    title: "Growth-Focused Approach",
    desc: "Optimized systems built for reach, engagement, and scaling.",
  },
  {
    title: "Consistency & Systems",
    desc: "Structured workflows to maintain consistent content output.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-28 px-6 bg-[#0A0A0A] text-center relative overflow-hidden">

      {/* 🔥 BACKGROUND GLOW (SOFT) */}
      <div className="absolute w-[500px] h-[500px] bg-[#E8C840]/10 blur-[140px] rounded-full top-10 left-1/2 -translate-x-1/2"></div>

      {/* 🔥 HEADING */}
      <Reveal>
        <p className="text-gold text-xs tracking-[0.2em] mb-3">
          WHY CHOOSE US
        </p>
      </Reveal>

      <Reveal>
        <h2 className="text-3xl md:text-5xl font-bold mb-5 tracking-tight">
          Built for <span className="text-gold">Growth</span>
        </h2>
      </Reveal>

      {/* 🔥 SUBTEXT (FIXED SIZE) */}
      <Reveal>
        <p className="text-gray-400 max-w-2xl mx-auto mb-16 text-base md:text-lg leading-relaxed">
          We don’t just manage content — we build systems that drive consistent growth and real results.
        </p>
      </Reveal>

      {/* 🔥 GRID */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

        {points.map((point, i) => (
          <Reveal key={i}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: false }}
              whileHover={{ y: -8 }}
              className="relative glass p-6 rounded-xl text-left border border-white/10 hover:border-[#E8C840]/40 hover:shadow-[0_0_40px_rgba(232,200,64,0.15)] transition group"
            >

              {/* GOLD LINE */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E8C840] to-transparent opacity-40"></div>

              <h3 className="text-base md:text-lg font-semibold mb-2 text-white">
                {point.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {point.desc}
              </p>

              {/* HOVER SHINE */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-transparent via-white/10 to-transparent blur-xl"></div>

            </motion.div>
          </Reveal>
        ))}

      </div>

    </section>
  );
}