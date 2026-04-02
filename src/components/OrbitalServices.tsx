"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  { title: "Hook & Viral Edits", desc: "High-retention edits that grab attention instantly." },
  { title: "Catchy Designs", desc: "Scroll-stopping thumbnails & creatives." },
  { title: "Content Scheduling", desc: "Consistent posting for maximum reach." },
  { title: "Channel Optimization", desc: "SEO & setup to reach the right audience." },
  { title: "Social Media Management", desc: "End-to-end content growth handling." },
  { title: "Script Writing", desc: "Viral scripts that drive engagement." },
];

export default function OrbitalServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <section
      id="services"
      ref={ref}
      className="py-10 md:py-[400px] flex md:items-center items-start justify-center relative overflow-hidden"
    >
      {/* 🔥 BACKGROUND */}
      <div className="absolute w-[1000px] h-[1000px] bg-[#E8C840]/10 blur-[220px] rounded-full hidden md:block"></div>
      <div className="absolute w-[300px] h-[300px] bg-[#E8C840]/10 blur-[100px] rounded-full md:hidden"></div>

      {/* ================= DESKTOP (UNCHANGED) ================= */}
      <div className="hidden md:flex items-center justify-center relative">

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="absolute w-[850px] h-[850px] border border-white/10 rounded-full"
        />

        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
          className="absolute w-[600px] h-[600px] border border-white/10 rounded-full"
        />

        <div className="w-40 h-40 rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center shadow-[0_0_100px_rgba(232,200,64,0.6)]">
          <img src="/logo.png" className="w-24 h-24" />
        </div>

        <div className="absolute w-[900px] h-[900px]">
          {services.map((item, i) => {
            const angle = (i / services.length) * Math.PI * 2;
            const x = Math.cos(angle) * 350;
            const y = Math.sin(angle) * 350;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1, x, y } : {}}
                transition={{
                  delay: i * 0.15,
                  duration: 0.8,
                  type: "spring",
                }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <ServiceCard item={item} i={i} />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ================= MOBILE (NO EXTRA SPACE) ================= */}
      <div className="md:hidden w-full px-5">

        <div className="flex flex-col gap-3">
          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: i * 0.08,
                duration: 0.4,
              }}
            >
              <ServiceCard item={item} small index={i} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 🔥 CARD */
function ServiceCard({ item, i = 0, small = false }: any) {
  return (
    <motion.div
      animate={!small ? { y: [0, -10, 0] } : { y: [0, -3, 0] }}
      transition={{
        repeat: Infinity,
        duration: 3 + i,
      }}
      className={`glass ${
        small ? "w-full h-[90px]" : "w-56 h-[130px]"
      } flex flex-col justify-center items-center p-3 rounded-xl text-center border border-white/10 
      
      hover:border-[#E8C840]/50 hover:shadow-[0_0_30px_rgba(232,200,64,0.3)]
      
      transition`}
    >
      <h3 className="text-white text-sm font-semibold mb-1">
        {item.title}
      </h3>
      <p className="text-gray-400 text-xs">
        {item.desc}
      </p>
    </motion.div>
  );
}