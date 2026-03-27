"use client";

import { motion } from "framer-motion";
import Magnetic from "@/components/Magnetic";

const results = [
  {
    value: "+340%",
    label: "subscribers",
    title: "YouTube Growth",
    brand: "TechVibe Studios",
  },
  {
    value: "2.5M+",
    label: "views",
    title: "Instagram Reels",
    brand: "FitLife Brand",
  },
  {
    value: "500K",
    label: "followers",
    title: "TikTok Strategy",
    brand: "StartupGrow",
  },
  {
    value: "10x",
    label: "engagement",
    title: "LinkedIn Branding",
    brand: "Travel Diaries",
  },
];

export default function ResultsSection() {
  return (
    <section id="results" className="py-40 px-6 relative">

      {/* 🔥 HEADING */}
      <div className="text-center mb-20">
        <p className="text-gold text-sm tracking-widest mb-2">
          RESULTS
        </p>

        <h2 className="text-4xl md:text-6xl font-bold">
          Real <span className="text-gold">Results</span>
        </h2>
      </div>

      {/* 🔥 CARDS */}
      <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">

        {results.map((item, i) => (
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
              className="relative glass rounded-2xl overflow-hidden border border-white/10 hover:border-[#E8C840]/40 hover:shadow-[0_0_50px_rgba(232,200,64,0.2)] transition group"
            >

              {/* 🔥 GOLD GRADIENT TOP */}
              <div className="h-40 flex items-center justify-center bg-gradient-to-br from-[#E8C840]/30 via-transparent to-transparent">

                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  {item.value}{" "}
                  <span className="text-gray-300 text-xl">
                    {item.label}
                  </span>
                </h3>

              </div>

              {/* 🔥 BOTTOM INFO */}
              <div className="p-5 bg-[#0A0A0A]">

                <p className="text-white font-medium mb-1">
                  {item.title}
                </p>

                <p className="text-gray-400 text-sm">
                  {item.brand}
                </p>

              </div>

              {/* 🔥 HOVER SHINE */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-transparent via-white/10 to-transparent blur-xl"></div>

            </motion.div>
          </motion.div>
        ))}

      </div>

      {/*  
      <div className="flex justify-center mt-16">
        <Magnetic>
          <button className="px-8 py-3 border border-[#E8C840]/40 rounded-full text-white hover:bg-[#E8C840] hover:text-black transition">
            View Full Portfolio →
          </button>
        </Magnetic>
      </div>
      */}

    </section>
  );
}