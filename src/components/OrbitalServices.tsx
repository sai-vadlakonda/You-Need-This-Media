"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
    {
        title: "Hook & Viral Edits",
        desc: "High-retention edits that grab attention instantly.",
    },
    {
        title: "Catchy Designs",
        desc: "Scroll-stopping thumbnails & creatives.",
    },
    {
        title: "Content Scheduling",
        desc: "Consistent posting for maximum reach.",
    },
    {
        title: "Channel Optimization",
        desc: "SEO & setup to reach the right audience.",
    },
    {
        title: "Social Media Management",
        desc: "End-to-end content growth handling.",
    },
    {
        title: "Script Writing",
        desc: "Viral scripts that drive engagement.",
    },
];

export default function OrbitalServices() {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-100px" });

    return (
        <section
        id="services"
            ref={ref}
            className="py-48 flex items-center justify-center relative overflow-visible"
        >
            {/* 🔥 BACKGROUND GLOW */}
            <div className="absolute w-[900px] h-[900px] bg-[#E8C840]/10 blur-[200px] rounded-full"></div>


            {/* 🔥 OUTER CIRCLE */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                className="absolute w-[700px] h-[700px] border border-white/10 rounded-full"
            />

            {/* 🔥 INNER CIRCLE */}
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
                className="absolute w-[500px] h-[500px] border border-white/10 rounded-full"
            />

            <div className="w-36 h-36 rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center shadow-[0_0_60px_rgba(232,200,64,0.4)] overflow-hidden">

                <img
                    src="/logo.png"
                    alt="You Need This Media"
                    className="w-20 h-20 object-contain"
                />

            </div>

            {/* 🔥 SERVICES */}
            <div className="absolute w-[800px] h-[800px]">
                {services.map((item, i) => {
                    const angle = (i / services.length) * Math.PI * 2;
                    const x = Math.cos(angle) * 300;
                    const y = Math.sin(angle) * 300;

                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={
                                isInView
                                    ? { opacity: 1, scale: 1, x, y }
                                    : { opacity: 0, scale: 0 }
                            }
                            transition={{ delay: i * 0.15, duration: 0.6 }}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                        >
                            {/* 🔥 FLOATING CARD */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 3 + i,
                                    ease: "easeInOut",
                                }}
                                className="relative glass w-52 h-[120px] flex flex-col justify-center items-center p-4 rounded-xl text-center border border-white/10 hover:border-[#E8C840]/40 hover:shadow-[0_0_35px_rgba(232,200,64,0.3)] transition"
                            >
                                {/* GOLD TOP LINE */}
                                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E8C840] to-transparent opacity-40"></div>

                                <h3 className="text-white text-sm font-semibold mb-1 leading-tight">
                                    {item.title}
                                </h3>

                                <p className="text-gray-400 text-xs leading-snug">
                                    {item.desc}
                                </p>
                            </motion.div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}