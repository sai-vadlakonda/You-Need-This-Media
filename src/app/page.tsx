"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";
import CinematicText from "@/components/CinematicText";
import Parallax from "@/components/Parallax";
import WhyChooseUs from "@/components/WhyChooseUs";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#0A0A0A] text-white overflow-hidden relative">

      <Navbar />

      {/* HERO */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 relative"
      >

        <Parallax speed={0.2}>
          <div className="absolute w-[700px] h-[700px] bg-[#E8C840]/10 blur-[160px] rounded-full top-10 left-1/2 -translate-x-1/2"></div>
        </Parallax>

        <Parallax speed={0.1}>
          <div className="absolute w-[400px] h-[400px] bg-white/5 blur-[120px] rounded-full bottom-10 left-1/3"></div>
        </Parallax>

        <CinematicText
          text="You Need This Media"
          className="text-5xl md:text-7xl font-bold tracking-tight leading-tight bg-gradient-to-r from-white via-gray-300 to-gray-500 text-transparent bg-clip-text"
        />

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-gold mt-4 text-xl md:text-2xl tracking-wide"
        >
          Scroll to Scale
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-6 max-w-2xl text-gray-400 text-lg leading-relaxed"
        >
          A global creative marketing agency helping businesses,
          creators, and brands grow their digital presence with
          content that captures attention and drives real results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-10 flex gap-4 flex-wrap justify-center"
        >

          <Magnetic>
            <button
              onClick={() => router.push("/contact")}
              className="btn-gold glow"
            >
              Get Started
            </button>
          </Magnetic>

          <Magnetic>
            <button
              onClick={() => scrollTo("services")}
              className="px-6 py-3 border border-white/20 rounded-full hover:bg-white/10 transition"
            >
              View Services
            </button>
          </Magnetic>

        </motion.div>

      </section>

      {/* SERVICES (FIXED ORDER) */}
      <section id="services" className="py-36 px-6 relative">

        <Reveal>
          <h2 className="text-4xl md:text-6xl font-bold text-center text-gold mb-6">
            What We Do
          </h2>
        </Reveal>

        <Reveal>
          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-20 text-lg">
            We create, optimize, and scale content that drives real growth.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">

          {[
            {
              title: "Video Editing",
              desc: "High-quality reels and YouTube edits designed to hook attention and maximize retention.",
            },
            {
              title: "Designing",
              desc: "Scroll-stopping visuals and creatives built for engagement.",
            },
            {
              title: "Growth",
              desc: "Optimization and strategy to scale your presence.",
            },
          ].map((service, i) => (
            <Reveal key={i}>
              <motion.div
                whileHover={{ y: -15 }}
                className="relative glass p-10 rounded-2xl hover:shadow-[0_0_60px_rgba(232,200,64,0.2)]"
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E8C840] to-transparent opacity-40"></div>

                <h3 className="text-xl font-semibold mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            </Reveal>
          ))}

        </div>

      </section>

      {/* ABOUT */}
      <section id="about" className="py-36 px-6 section-dark text-center relative">

        <div className="absolute w-[500px] h-[500px] bg-[#E8C840]/10 blur-[140px] rounded-full top-10 left-1/2 -translate-x-1/2"></div>

        <Reveal>
          <h2 className="text-4xl md:text-6xl font-bold text-gold mb-6">
            About Us
          </h2>
        </Reveal>

        <Reveal>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg md:text-xl leading-relaxed">
            YouNeedThis Media is a global creative marketing agency helping
            businesses, creators, and brands build a powerful digital presence.
            We combine creativity, strategy, and execution to create content
            that captures attention and drives real, measurable growth.
          </p>
        </Reveal>

        <Reveal>
          <p className="mt-10 text-white text-xl md:text-2xl font-medium">
            We don’t just create content — we create what drives results.
          </p>
        </Reveal>

      </section>

      {/* WHY CHOOSE US */}
      <WhyChooseUs />

      {/* CTA */}
      <section className="py-36 text-center px-6 relative">

        <Reveal>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Grow Your Presence?
          </h2>
        </Reveal>

        <Reveal>
          <p className="text-gray-400 mb-10 text-lg">
            Let’s turn your content into a growth engine.
          </p>
        </Reveal>

        <Reveal>
          <Magnetic>
            <button
              onClick={() => router.push("/contact")}
              className="btn-gold glow"
            >
              Work With Us
            </button>
          </Magnetic>
        </Reveal>

      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center text-gray-500 border-t border-white/10">
        © 2026 You Need This Media. All rights reserved.
      </footer>

    </div>
  );
}