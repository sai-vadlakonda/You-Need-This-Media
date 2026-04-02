"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";
import CinematicText from "@/components/CinematicText";
import Parallax from "@/components/Parallax";
import WhyChooseUs from "@/components/WhyChooseUs";
import { useRouter } from "next/navigation";
import OrbitalServices from "@/components/OrbitalServices";
import ProcessFlow from "@/components/ProcessFlow";
import ResultsSection from "@/components/results";
import Testimonials from "@/components/Testimonials";
import AboutSection from "@/components/About";
import CTASection from "@/components/CTA";
import FooterSection from "@/components/Footer"
// 🔥 ICONS
import {
  Instagram,
  Youtube,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

export default function Home() {
  const router = useRouter();

  const scrollTo = (id: string) => {
    let attempts = 0;

    const interval = setInterval(() => {
      const el = document.getElementById(id);

      if (el) {
        const yOffset = -80;
        const y =
          el.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;

        window.scrollTo({
          top: y,
          behavior: "smooth",
        });

        clearInterval(interval);
      }

      attempts++;

      if (attempts > 50) {
        clearInterval(interval);
        console.warn("Scroll failed: element not found");
      }
    }, 100); // keeps checking until ready
  };
  return (
    <div className="bg-[#0A0A0A] text-white overflow-hidden relative">

      <Navbar />

      {/* HERO */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 relative z-10"
      >

        {/* BACKGROUND */}
        <Parallax speed={0.2}>
          <div className="absolute w-[700px] h-[700px] bg-[#E8C840]/10 blur-[160px] rounded-full top-10 left-1/2 -translate-x-1/2 pointer-events-none"></div>
        </Parallax>

        <Parallax speed={0.1}>
          <div className="absolute w-[400px] h-[400px] bg-white/5 blur-[120px] rounded-full bottom-10 left-1/3 pointer-events-none"></div>
        </Parallax>

        {/* ORIGINAL TITLE */}
        <CinematicText
          text="You Need This Media"
          className="text-5xl md:text-7xl font-bold tracking-tight leading-tight bg-gradient-to-r from-white via-gray-300 to-gray-500 text-transparent bg-clip-text"
        />

        {/* TAGLINE */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-gold mt-4 text-xl md:text-2xl tracking-wide"
        >
          From Scroll to Scale
        </motion.p>

        {/* DESCRIPTION */}
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

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-10 flex gap-4 flex-wrap justify-center relative z-20"
        >
          <button
            onClick={() => router.push("/contact")}
            className="btn-gold glow transition-transform duration-200 hover:scale-105 active:scale-95"
          >
            Schedule Your Call
          </button>

          <button
            onClick={(e) => {
              e.preventDefault();
              scrollTo("services");
            }}
            className="px-6 py-3 border border-white/20 rounded-full hover:bg-white/10 transition hover:scale-105 active:scale-95"
          >
            View Services
          </button>

        </motion.div>

        {/* 🔥 TRUST SECTION (UPGRADED ICONS) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="mt-10 flex flex-col items-center gap-4"
        >

          {/* ICONS */}
          <div className="flex gap-4">

            {[Instagram, Youtube, Facebook, Twitter, Linkedin].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-full text-gray-400 hover:text-[#E8C840] hover:bg-white/10 hover:scale-110 transition duration-300"
                >
                  <Icon size={18} />
                </div>
              )
            )}

          </div>

          {/* TRUST TEXT */}
          <p className="text-gray-400 text-sm">
            ⭐ Trusted by{" "}
            <span className="text-white font-medium">
              20+ creators
            </span>
          </p>

        </motion.div>

      </section>

      {/* 🔥 PREMIUM BRAND LOGO STRIP */}
      <section className="py-16 md:py-24 relative overflow-hidden">

        {/* 🔥 HEADLINE */}
        <h3 className="text-center text-base sm:text-lg md:text-2xl font-semibold tracking-wide mb-8 md:mb-10 px-4">
          <span className="text-white">
            Our creators produce content across
          </span>{" "}
          <span className="text-gold">
            the world’s leading platforms
          </span>
        </h3>

        {/* 🔥 LEFT FADE */}
        <div className="absolute left-0 top-0 w-20 md:w-40 h-full bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

        {/* 🔥 RIGHT FADE */}
        <div className="absolute right-0 top-0 w-20 md:w-40 h-full bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

        {/* 🔥 MARQUEE WRAPPER */}
        <div className="overflow-hidden w-full">

          <div
            className="flex w-max items-center gap-12 md:gap-20"
            style={{
              animation: "marquee 14s linear infinite",
            }}
          >
            {[
              "/brands/instagram.png",
              "/brands/youtube.png",
              "/brands/twitter.png",
              "/brands/linkedin.png",
              "/brands/facebook.png",
              "/brands/tiktok.png",
            ]
              // 🔥 TRIPLE DUPLICATION (important for smoothness)
              .concat([
                "/brands/instagram.png",
                "/brands/youtube.png",
                "/brands/twitter.png",
                "/brands/linkedin.png",
                "/brands/facebook.png",
                "/brands/tiktok.png",
              ])
              .concat([
                "/brands/instagram.png",
                "/brands/youtube.png",
                "/brands/twitter.png",
                "/brands/linkedin.png",
                "/brands/facebook.png",
                "/brands/tiktok.png",
              ])
              .map((logo, i) => (
                <img
                  key={i}
                  src={logo}
                  alt="brand"
                  className="h-10 md:h-14 object-contain opacity-80 hover:opacity-100 hover:scale-110 transition duration-300"
                />
              ))}
          </div>

        </div>
      </section>

      {/* 🔥 PROBLEM SECTION */}
      <section className="py-32 px-6 relative">

        {/* SMALL LABEL */}
        <p className="text-gold text-center text-sm tracking-widest mb-4">
          THE PROBLEM
        </p>

        {/* MAIN HEADING */}
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-6 leading-tight">
          Struggling to grow on{" "}
          <span className="text-gold">social media?</span>
        </h2>

        {/* SUBTEXT */}
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16 text-lg">
          You're creating content, but the results aren't showing up.
          Sound familiar?
        </p>

        {/* CARDS */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">

          {[
            {
              title: "Low engagement",
              desc: "Your posts aren't reaching or engaging your audience.",
            },
            {
              title: "Poor performance",
              desc: "Content fails to convert views into growth.",
            },
            {
              title: "Inconsistent posting",
              desc: "No clear system or schedule for content.",
            },
            {
              title: "Weak hooks",
              desc: "Videos fail to capture attention in the first seconds.",
            },
            {
              title: "Slow growth",
              desc: "Your channel isn’t scaling despite effort.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="relative glass p-6 rounded-2xl text-center transition duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(232,200,64,0.2)]"
            >

              {/* GOLD TOP LINE */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E8C840] to-transparent opacity-40"></div>

              {/* TITLE (SMALL) */}
              <h3 className="text-white font-semibold mb-2 text-sm md:text-base">
                {item.title}
              </h3>

              {/* DESCRIPTION (SMALL) */}
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* 🔥 SOLUTION SECTION */}
      <section className="py-32 px-6 text-center relative">

        {/* LABEL */}
        <p className="text-gold text-sm tracking-widest mb-4">
          THE SOLUTION
        </p>

        {/* HEADING */}
        <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6 max-w-5xl mx-auto">
          That’s Why We Built{" "}
          <span className="text-gold">You Need This Media</span>
        </h2>

        {/* SUBTEXT */}
        <p className="text-gray-400 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
          We combine viral content creation, strategic editing, and data-driven
          optimization to help you dominate social media — so you can focus on
          what you do best.
        </p>

      </section>

      <OrbitalServices />

      <ProcessFlow />

      <ResultsSection />

      <Testimonials />

      <AboutSection />

      <CTASection />

      <FooterSection />

    </div >
  );
}