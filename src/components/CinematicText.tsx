"use client";

import { motion } from "framer-motion";

export default function CinematicText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const words = text.split(" ");

  return (
    <h1 className={`flex flex-wrap justify-center ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: i * 0.08,
            duration: 0.6,
            ease: "easeOut",
          }}
          className="mr-2"
        >
          {word}
        </motion.span>
      ))}
    </h1>
  );
}