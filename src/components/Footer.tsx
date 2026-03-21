"use client";

import { motion } from "framer-motion";
import {
  Instagram,
  Youtube,
  Twitter,
  Linkedin,
} from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  const handleNav = (section: string) => {
    if (section === "portfolio") {
      router.push("/portfolio");
      return;
    }

    if (section === "contact") {
      router.push("/contact");
      return;
    }

    if (section === "home") {
      if (pathname !== "/") {
        router.push("/");
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    const scrollToSection = () => {
      const el = document.getElementById(section);
      if (el) {
        const y =
          el.getBoundingClientRect().top +
          window.scrollY -
          100;

        window.scrollTo({ top: y, behavior: "smooth" });
        return true;
      }
      return false;
    };

    if (pathname !== "/") {
      router.push("/");

      let attempts = 0;
      const interval = setInterval(() => {
        const success = scrollToSection();
        if (success || attempts > 10) clearInterval(interval);
        attempts++;
      }, 120);

      return;
    }

    if (!scrollToSection()) {
      setTimeout(scrollToSection, 200);
    }
  };

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10 px-6 pt-16 pb-10 relative">

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-start">

        {/* LEFT */}
        <div className="space-y-3">
          <div
            onClick={() => handleNav("home")}
            className="flex items-center gap-3 cursor-pointer"
          >
            <img
              src="/logo.png"
              className="w-10 h-10 object-contain"
              alt="logo"
            />

            <h2 className="text-white font-semibold text-lg">
              YOU NEED THIS <span className="text-gold">MEDIA</span>
            </h2>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            We help creators scale with powerful content systems.
          </p>

          <p className="text-gray-500 text-xs">
            From Scroll to Scale
          </p>
        </div>

        {/* CENTER */}
        <div className="flex justify-center">
          <div className="grid grid-cols-2 gap-6 text-gray-400 text-sm">

            {[
              "home",
              "services",
              "portfolio",
              "about",
              "contact",
              "results",
              "testimonials",
              "process",
            ].map((item) => (
              <button
                key={item}
                onClick={() => handleNav(item)}
                className="hover:text-gold transition text-left"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}

          </div>
        </div>

        {/* 🔥 RIGHT */}
        <div className="flex flex-col items-center md:items-end gap-4">

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNav("contact")}
            className="btn-gold px-6 py-2 rounded-full text-black text-sm font-medium"
          >
            Schedule Call →
          </motion.button>

          <div className="flex gap-3 justify-center md:justify-end">
            {[Instagram, Youtube, Twitter, Linkedin].map((Icon, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.2 }}
                className="p-2 rounded-full border border-white/10 hover:border-[#E8C840] hover:text-[#E8C840] transition text-gray-400 cursor-pointer"
              >
                <Icon size={16} />
              </motion.div>
            ))}
          </div>

        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="mt-10 text-center text-gray-500 text-xs">
        © 2026 You Need This Media. All rights reserved.
      </div>

    </footer>
  );
}