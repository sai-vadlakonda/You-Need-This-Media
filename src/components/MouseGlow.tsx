"use client";

import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-0"
      style={{
        top: pos.y,
        left: pos.x,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="w-[350px] h-[350px] rounded-full bg-[radial-gradient(circle,rgba(232,200,64,0.18),transparent_70%)] blur-2xl transition-all duration-150" />
    </div>
  );
}