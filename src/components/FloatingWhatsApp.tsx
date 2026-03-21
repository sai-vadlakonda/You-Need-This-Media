"use client";

import Magnetic from "@/components/Magnetic";
import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Magnetic>
        <a
          href="https://wa.me/919XXXXXXXXX?text=Hi, I'm interested in your services"
          target="_blank"
          className="flex items-center gap-2 bg-[#25D366] text-black px-5 py-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          💬 WhatsApp
        </a>
      </Magnetic>
    </motion.div>
  );
}