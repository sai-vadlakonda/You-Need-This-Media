"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";
import { useRouter } from "next/navigation";

export default function FinalCTA() {
  const router = useRouter();

  return (
    <section className="py-28 px-6 bg-[#0A0A0A] text-center relative overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute w-[600px] h-[600px] bg-[#E8C840]/10 blur-[160px] rounded-full top-10 left-1/2 -translate-x-1/2"></div>

      {/* 🔥 FLOATING PARTICLES */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute top-20 left-1/4 w-2 h-2 bg-[#E8C840] rounded-full opacity-60"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 7 }}
        className="absolute bottom-20 right-1/4 w-2 h-2 bg-[#E8C840] rounded-full opacity-60"
      />

      {/* 🔥 HEADING */}
      <Reveal>
        <h2 className="text-3xl md:text-5xl font-bold mb-5 tracking-tight leading-tight">
          Ready to Scale Your{" "}
          <span className="text-gold">Digital Presence?</span>
        </h2>
      </Reveal>

      {/* 🔥 SUBTEXT */}
      <Reveal>
        <p className="text-gray-400 max-w-xl mx-auto mb-10 text-base md:text-lg leading-relaxed">
          Book a free discovery call and let’s build a growth engine for your brand.
        </p>
      </Reveal>

      {/* 🔥 BUTTON */}
      <Reveal>
        <Magnetic>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/contact")}
            className="btn-gold glow px-8 py-3 rounded-full font-medium text-black"
          >
            Schedule Your Call →
          </motion.button>
        </Magnetic>
      </Reveal>

    </section>
  );
}