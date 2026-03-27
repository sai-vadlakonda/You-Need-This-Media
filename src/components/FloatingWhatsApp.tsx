"use client";

import Magnetic from "@/components/Magnetic";
import { motion } from "framer-motion";
import { useState } from "react";

export default function FloatingWhatsApp() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Magnetic>
        <div
          className="relative"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >

          {/* 🔥 PULSE GLOW */}
          <span className="absolute inset-0 rounded-full bg-[#25D366]/40 blur-xl animate-ping"></span>

          {/* 🔥 BUTTON */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={() =>
              window.open(
                "https://wa.me/916281929821?text=Hi, I'm interested in your services",
                "_blank"
              )
            }
            className="relative flex items-center gap-2 bg-[#25D366] text-black px-5 py-3 rounded-full shadow-2xl font-medium"
          >
            💬 WhatsApp
          </motion.button>

          {/* 🔥 TOOLTIP */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{
              opacity: hovered ? 1 : 0,
              x: hovered ? 0 : 20,
            }}
            className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-3 py-2 rounded-md whitespace-nowrap border border-white/10"
          >
            Chat with us
          </motion.div>

        </div>
      </Magnetic>
    </motion.div>
  );
}