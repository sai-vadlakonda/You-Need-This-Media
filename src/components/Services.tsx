"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

const services = [
  {
    title: "Video Editing",
    desc: "High-quality reels and YouTube edits designed to hook attention and maximize retention.",
  },
  {
    title: "Designing",
    desc: "Scroll-stopping visuals, thumbnails, and creatives built for engagement and consistency.",
  },
  {
    title: "Optimization",
    desc: "Profile setup and content structuring to boost visibility and long-term growth.",
  },
  {
    title: "Content Planning",
    desc: "Strategic calendars and posting schedules aligned with trends for consistency.",
  },
  {
    title: "Growth Strategy",
    desc: "Audience targeting, engagement optimization, and organic scaling techniques.",
    highlight: true,
  },
  {
    title: "Content Consulting",
    desc: "Viral frameworks, storytelling guidance, and niche-specific strategies.",
    highlight: true,
  },
];

export default function Services() {
  return (
    <section className="py-36 px-6 relative overflow-hidden">

      {/* Multi-layer Glow */}
      <div className="absolute w-[700px] h-[700px] bg-[#E8C840]/10 blur-[160px] rounded-full bottom-0 left-1/2 -translate-x-1/2"></div>
      <div className="absolute w-[400px] h-[400px] bg-white/5 blur-[120px] rounded-full top-20 left-1/3"></div>

      {/* Heading */}
      <Reveal>
        <h2 className="text-4xl md:text-6xl font-bold text-center text-gold mb-6 tracking-tight">
          What We Do
        </h2>
      </Reveal>

      {/* Subtext */}
      <Reveal>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-24 text-lg">
          We create, optimize, and scale content that drives real growth and builds a powerful digital presence.
        </p>
      </Reveal>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">

        {services.map((service, i) => (
          <Reveal key={i}>
            <motion.div
              whileHover={{ y: -12 }}
              transition={{ type: "spring", stiffness: 200 }}
              className={`relative glass p-10 rounded-2xl transition duration-300 
              ${service.highlight ? "border border-[#E8C840]/40" : ""}`}
            >

              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E8C840] to-transparent opacity-40"></div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                {service.title}
                {service.highlight && (
                  <span className="text-xs text-gold">(Free)</span>
                )}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition duration-300 pointer-events-none shadow-[0_0_60px_rgba(232,200,64,0.15)]"></div>

            </motion.div>
          </Reveal>
        ))}

      </div>

    </section>
  );
}