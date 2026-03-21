"use client";

import { useEffect, useState } from "react";

export default function MouseFollower() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const handleHover = () => setHover(true);
    const handleLeave = () => setHover(false);

    window.addEventListener("mousemove", move);

    const elements = document.querySelectorAll("button, a");

    elements.forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHover);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[9999] hidden md:block"
      style={{
        left: pos.x,
        top: pos.y,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        className={`rounded-full transition-all duration-200 ${
          hover ? "w-12 h-12 bg-[#E8C840]/20" : "w-4 h-4 bg-[#E8C840]"
        }`}
      />
    </div>
  );
}
