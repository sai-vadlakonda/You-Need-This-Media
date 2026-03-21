"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import Magnetic from "@/components/Magnetic";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  // 🔥 Background blur
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 ACTIVE STATE FOR CONTACT PAGE
  useEffect(() => {
    if (pathname === "/contact") {
      setActive("contact");
      return;
    }
  }, [pathname]);

  // 🔥 PERFECT SCROLL TRACKING (FIXED)
  useEffect(() => {
    if (pathname !== "/") return;

    const sections = [
      "home",
      "services",
      "about",
      "results",
      "process",
      "testimonials",
    ];

    const handleScroll = () => {
      let current = "home";

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();

        if (
          rect.top <= window.innerHeight * 0.4 &&
          rect.bottom >= 100
        ) {
          current = id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // 🔥 NAVIGATION (FIXED)
  const handleNav = (section: string) => {
    setMenuOpen(false);
    setActive(section); // 🔥 instant underline

    if (section === "portfolio") {
      router.push("/portfolio");
      return;
    }

    if (section === "contact") {
      router.push("/contact");
      return;
    }

    if (pathname !== "/") {
      router.push("/");

      setTimeout(() => {
        const el = document.getElementById(section);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 400);

      return;
    }

    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const linkClass = (id: string) =>
    `relative px-1 transition ${
      active === id
        ? "text-white"
        : "text-gray-400 hover:text-white"
    }`;

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className="fixed top-4 w-full z-[99999] flex justify-center px-4"
    >
      <div
        className={`flex items-center justify-between w-full max-w-6xl px-4 md:px-6 py-3 rounded-full border transition-all duration-300 ${
          scrolled
            ? "bg-black/70 backdrop-blur-xl border-white/10"
            : "bg-black/30 backdrop-blur-md border-white/10"
        }`}
      >
        {/* LOGO */}
        <div
          onClick={() => handleNav("home")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <Image src="/logo.png" alt="logo" width={28} height={28} />
          <h1 className="text-sm md:text-base font-semibold">
            YOU NEED THIS <span className="text-[#E8C840]">MEDIA</span>
          </h1>
        </div>

        {/* DESKTOP */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          {["home", "services", "about"].map((item) => (
            <button
              key={item}
              onClick={() => handleNav(item)}
              className={linkClass(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}

              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-[#E8C840] transition-all duration-300 ${
                  active === item ? "w-full" : "w-0"
                }`}
              />
            </button>
          ))}

          {/* PORTFOLIO */}
          <button
            onClick={() => handleNav("portfolio")}
            className={linkClass("portfolio")}
          >
            Portfolio
            <span
              className={`absolute left-0 -bottom-1 h-[2px] bg-[#E8C840] transition-all duration-300 ${
                active === "portfolio" ? "w-full" : "w-0"
              }`}
            />
          </button>

          {/* CONTACT */}
          <button
            onClick={() => handleNav("contact")}
            className={linkClass("contact")}
          >
            Contact
            <span
              className={`absolute left-0 -bottom-1 h-[2px] bg-[#E8C840] transition-all duration-300 ${
                active === "contact" ? "w-full" : "w-0"
              }`}
            />
          </button>
        </div>

        {/* CTA */}
        <Magnetic>
          <button
            onClick={() => router.push("/contact")}
            className="hidden md:block bg-[#E8C840] text-black px-5 py-2 rounded-full text-sm font-medium hover:scale-105 transition"
          >
            Schedule Your Call
          </button>
        </Magnetic>

        {/* MOBILE */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 w-[90%] bg-black/95 border border-white/10 rounded-2xl p-6 flex flex-col gap-4"
        >
          <button onClick={() => handleNav("home")}>Home</button>
          <button onClick={() => handleNav("services")}>Services</button>
          <button onClick={() => handleNav("about")}>About</button>
          <button onClick={() => handleNav("portfolio")}>Portfolio</button>
          <button onClick={() => handleNav("contact")}>Contact</button>
        </motion.div>
      )}
    </motion.nav>
  );
}