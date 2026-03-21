"use client";

import { motion } from "framer-motion";

<section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 relative overflow-hidden">

  {/* Layered Glow Background */}
  <div className="absolute w-[600px] h-[600px] bg-[#E8C840]/10 blur-[150px] rounded-full top-20 left-1/2 -translate-x-1/2"></div>
  <div className="absolute w-[400px] h-[400px] bg-white/5 blur-[120px] rounded-full bottom-10 left-1/2 -translate-x-1/2"></div>

  {/* Heading */}
  <motion.h1
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-5xl md:text-7xl font-bold tracking-tight leading-tight"
  >
    <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 text-transparent bg-clip-text">
      You Need This Media
    </span>
  </motion.h1>

  {/* Tagline */}
  <motion.p
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 0.8 }}
    className="text-gold mt-4 text-xl md:text-2xl tracking-wide"
  >
    Scroll to Scale
  </motion.p>

  {/* Description */}
  <motion.p
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4, duration: 0.8 }}
    className="mt-6 max-w-2xl text-gray-400 text-lg leading-relaxed"
  >
    A global creative marketing agency helping businesses,
    creators, and brands grow their digital presence with
    content that captures attention and drives real results.
  </motion.p>

  {/* CTA Buttons */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6, duration: 0.8 }}
    className="mt-10 flex gap-4 flex-wrap justify-center"
  >

    <button className="btn-gold glow hover:scale-105 transition duration-300">
      Get Started
    </button>

    <button className="px-6 py-3 border border-white/20 rounded-full hover:bg-white/10 hover:scale-105 transition duration-300">
      View Services
    </button>

  </motion.div>

</section>