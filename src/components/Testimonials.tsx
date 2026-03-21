"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "TechVibe Studios",
    text: "You Need This Media completely transformed our YouTube channel. We went from 5K to 100K subscribers in 6 months. Their editing style is next level.",
    initial: "S",
  },
  {
    name: "Marcus Johnson",
    role: "FitLife Brand",
    text: "The content strategy they built for us generated over 2M views on Instagram Reels in just 3 months. Best investment we've made.",
    initial: "M",
  },
  {
    name: "Priya Sharma",
    role: "StartupGrow",
    text: "Their team understands virality. Our LinkedIn engagement increased 10x after working with them. Highly recommend for creators.",
    initial: "P",
  },
  {
    name: "James Okafor",
    role: "Travel Diaries",
    text: "From thumbnails to scripts, every piece they deliver is premium quality. We've never had such consistent growth across platforms.",
    initial: "J",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-40 px-6 relative">

      {/* 🔥 HEADING */}
      <div className="text-center mb-20">
        <p className="text-gold text-sm tracking-widest mb-2">
          TESTIMONIALS
        </p>

        <h2 className="text-4xl md:text-6xl font-bold">
          What Our <span className="text-gold">Clients Say</span>
        </h2>
      </div>

      {/* 🔥 GRID */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

        {testimonials.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            viewport={{ once: false }}
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4 + i,
                ease: "easeInOut",
              }}
              className="relative glass p-6 rounded-2xl border border-white/10 hover:border-[#E8C840]/40 hover:shadow-[0_0_50px_rgba(232,200,64,0.2)] transition group"
            >

              {/* ⭐ STARS */}
              <div className="flex gap-1 mb-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i} className="text-[#E8C840] text-sm">
                      ★
                    </span>
                  ))}
              </div>

              {/* TEXT */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                "{item.text}"
              </p>

              {/* USER */}
              <div className="flex items-center gap-3">

                {/* AVATAR */}
                <div className="w-10 h-10 rounded-full bg-[#111] flex items-center justify-center text-[#E8C840] font-semibold">
                  {item.initial}
                </div>

                <div>
                  <p className="text-white font-medium text-sm">
                    {item.name}
                  </p>
                  <p className="text-gray-400 text-xs">
                    {item.role}
                  </p>
                </div>

              </div>

              {/* 🔥 HOVER SHINE */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-transparent via-white/10 to-transparent blur-xl"></div>

            </motion.div>
          </motion.div>
        ))}

      </div>

    </section>
  );
}