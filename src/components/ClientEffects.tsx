"use client";

import { useEffect } from "react";

export default function ClientEffects() {

  // 🔥 ONLY SCROLL PROGRESS (NO MOUSE TRACKING)
  useEffect(() => {
    const progressBar = document.getElementById("progress-bar");

    const handleScroll = () => {
      if (!progressBar) return;

      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrolled = (scrollTop / height) * 100;

      progressBar.style.width = scrolled + "%";
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
}