"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

<section className="py-32 px-6 section-dark text-center relative overflow-hidden">

  {/* Layered Glow */}
  <div className="absolute w-[500px] h-[500px] bg-[#E8C840]/10 blur-[140px] rounded-full top-10 left-1/2 -translate-x-1/2"></div>

  {/* Heading */}
  <Reveal>
    <h2 className="text-4xl md:text-6xl font-bold text-gold mb-6 tracking-tight">
      About Us
    </h2>
  </Reveal>

  {/* Main Description */}
  <Reveal>
    <p className="max-w-3xl mx-auto text-gray-300 text-lg md:text-xl leading-relaxed">
      YouNeedThis Media is a global creative marketing agency helping businesses,
      creators, and brands build a powerful digital presence. We combine creativity,
      strategy, and execution to create content that captures attention and drives
      real, measurable growth.
    </p>
  </Reveal>

  {/* Highlight Line */}
  <Reveal>
    <p className="mt-10 text-white text-xl md:text-2xl font-medium tracking-wide">
      We don’t just create content — we create what drives results.
    </p>
  </Reveal>

  {/* Feature Cards */}
  <div className="mt-20 grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">

    {[
      {
        title: "Strategy First",
        desc: "Every piece of content is backed by clear planning and purpose.",
      },
      {
        title: "Creative Execution",
        desc: "High-quality visuals and edits designed to capture attention instantly.",
      },
      {
        title: "Growth Focused",
        desc: "Optimized for engagement, reach, and long-term scaling.",
      },
    ].map((item, i) => (
      <Reveal key={i}>
        <motion.div
          whileHover={{ y: -10 }}
          className="glass p-8 rounded-xl transition duration-300 hover:shadow-[0_0_40px_rgba(232,200,64,0.15)]"
        >
          <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            {item.desc}
          </p>
        </motion.div>
      </Reveal>
    ))}

  </div>

</section>