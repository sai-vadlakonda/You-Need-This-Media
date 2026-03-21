"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Strategy Call",
    desc: "We understand your brand, goals, and target audience.",
  },
  {
    title: "Content Strategy",
    desc: "We create a roadmap designed for maximum growth.",
  },
  {
    title: "Production",
    desc: "We produce high-quality content that converts.",
  },
  {
    title: "Growth & Optimization",
    desc: "We analyze, optimize, and scale what works.",
  },
];

export default function ProcessFlow() {
  return (
    <section id="process" className="py-40 px-6 relative">

      {/* 🔥 HEADING */}
      <div className="text-center mb-20">
        <p className="text-gold text-sm tracking-widest mb-2">
          HOW IT WORKS
        </p>

        <h2 className="text-4xl md:text-6xl font-bold">
          Our <span className="text-gold">Process</span>
        </h2>
      </div>

      {/* 🔥 CENTER LINE */}
      <div className="absolute left-1/2 top-40 bottom-0 w-[2px] bg-white/10 -translate-x-1/2"></div>

      {/* 🔥 STEPS */}
      <div className="max-w-5xl mx-auto space-y-24 relative">

        {steps.map((step, i) => {
          const isLeft = i % 2 === 0;

          return (
            <div
              key={i}
              className={`flex items-center ${
                isLeft ? "justify-start" : "justify-end"
              }`}
            >

              {/* 🔥 CARD */}
              <motion.div
                initial={{ opacity: 0, x: isLeft ? -120 : 120 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: false, margin: "-100px" }}
                className="w-[90%] md:w-[45%]"
              >
                <div className="glass p-6 rounded-2xl border border-white/10 hover:border-[#E8C840]/40 hover:shadow-[0_0_40px_rgba(232,200,64,0.2)] transition">

                  {/* NUMBER */}
                  <div className="text-[#E8C840] text-sm mb-2">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <h3 className="text-white text-lg font-semibold mb-2">
                    {step.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.desc}
                  </p>

                </div>
              </motion.div>

              {/* 🔥 CENTER DOT */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: false }}
                className="absolute left-1/2 -translate-x-1/2"
              >
                <div className="w-4 h-4 bg-[#E8C840] rounded-full shadow-[0_0_20px_rgba(232,200,64,0.6)]"></div>
              </motion.div>

            </div>
          );
        })}

      </div>
    </section>
  );
}