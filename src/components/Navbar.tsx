"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import Magnetic from "@/components/Magnetic";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (pathname === "/contact") {
      setActive("contact");
      return;
    }

    if (pathname !== "/") return;

    const sections = ["home", "services", "about"];

    const handleScroll = () => {
      let current = "home";

      for (let id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;

        const offset = el.offsetTop - 150;

        if (window.scrollY >= offset) {
          current = id;
        }
      }

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleNav = (section: string) => {
    setMenuOpen(false);
    setActive(section);

    if (section === "contact") {
      router.push("/contact");
      return;
    }

    if (pathname !== "/") {
      router.push("/");
      setTimeout(() => {
        const el = document.getElementById(section);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 300);
      return;
    }

    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const linkClass = (id: string) =>
    `relative px-1 transition ${
      active === id ? "text-white" : "text-gray-400 hover:text-white"
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
        <div className="flex items-center min-w-0">
          <h1
            onClick={() => handleNav("home")}
            className="text-sm md:text-base font-semibold text-white cursor-pointer truncate"
          >
            You Need This Media
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
            onClick={() => handleNav("contact")}
            className="hidden md:block bg-[#E8C840] text-black px-5 py-2 rounded-full text-sm font-medium hover:scale-110 transition"
          >
            Get Started
          </button>
        </Magnetic>

        {/* 🔥 MOBILE BUTTON (ABSOLUTE FIX) */}
        <button
          className="md:hidden text-white text-2xl z-[999999] ml-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* 🔥 MOBILE MENU */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 w-[90%] bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col gap-4 text-gray-300 z-[999999]"
        >
          <button onClick={() => handleNav("home")}>Home</button>
          <button onClick={() => handleNav("services")}>Services</button>
          <button onClick={() => handleNav("about")}>About</button>
          <button onClick={() => handleNav("contact")}>Contact</button>
        </motion.div>
      )}
    </motion.nav>
  );
}