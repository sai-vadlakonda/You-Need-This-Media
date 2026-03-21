"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

const points = [
  {
    title: "Strategy-Driven Execution",
    desc: "We don’t just create content — every move is backed by strategy to drive real growth.",
  },
  {
    title: "High-Impact Creative",
    desc: "Scroll-stopping visuals and edits designed to capture attention instantly.",
  },
  {
    title: "Growth-Focused Approach",
    desc: "Everything we build is optimized for reach, engagement, and scaling.",
  },
  {
    title: "Consistency & Systems",
    desc: "We help you stay consistent with structured content planning and execution.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-36 px-6 text-center relative">

      {/* Glow */}
      <div className="absolute w-[500px] h-[500px] bg-[#E8C840]/10 blur-[140px] rounded-full top-10 left-1/2 -translate-x-1/2"></div>

      {/* Heading */}
      <Reveal>
        <h2 className="text-4xl md:text-6xl font-bold text-gold mb-6">
          Why Choose Us
        </h2>
      </Reveal>

      <Reveal>
        <p className="text-gray-400 max-w-2xl mx-auto mb-20 text-lg">
          We don’t just manage content — we build systems that drive consistent growth and real results.
        </p>
      </Reveal>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">

        {points.map((point, i) => (
          <Reveal key={i}>
            <motion.div
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-2xl text-left hover:shadow-[0_0_40px_rgba(232,200,64,0.2)] transition"
            >
              <h3 className="text-xl font-semibold mb-3">
                {point.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {point.desc}
              </p>
            </motion.div>
          </Reveal>
        ))}

      </div>

    </section>
  );
}