"use client";

import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { useRef, useState } from "react";

const testimonials = [
  {
    name: "Dodagatta Nihar",
    role: "codedale",
    video: "/testimonials/client1.mp4",
    text: "You Need This Media consistently delivered engaging, high-quality short-form content that boosted our social media presence. Their creativity, strategic approach, and timely delivery make them an easy recommendation.",
  },
  {
    name: "Vipul",
    role: "Get refactor",
    video: "/testimonials/client2.mp4",
    text: "You Need This Media played a key role in strengthening our content and marketing strategy. Their creative videos helped us reach a wider audience and grow our brand effectively.",
  },
  {
    name: "Khader",
    role: "Get refactor",
    video: "/testimonials/client3.mp4",
    text: "Working with You Need This Media was a great experience. Their professionalism and high-quality work make them an easy recommendation.",
  },
];

export default function Testimonials() {

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const toggleVideo = async (index: number) => {

    videoRefs.current.forEach((video, i) => {

      if (!video) return;

      if (i !== index) {
        video.pause();
        video.currentTime = 0;
      }

    });

    const current = videoRefs.current[index];

    if (!current) return;

    if (current.paused) {

      try {
        await current.play();
        setPlayingIndex(index);
      } catch (err) {
        console.error(err);
      }

    } else {

      current.pause();
      setPlayingIndex(null);

    }

  };

  const handleEnded = () => {
    setPlayingIndex(null);
  };

  return (
    <section
      id="testimonials"
      className="relative py-36 px-6 overflow-hidden"
    >

      {/* GOLD GLOW */}
      <div className="absolute left-1/2 top-40 -translate-x-1/2 w-[700px] h-[700px] bg-[#E8C840]/10 blur-[180px] rounded-full"></div>

      {/* HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-20 relative z-10"
      >

        <p className="text-gold tracking-[0.25em] uppercase text-sm mb-3">
          TESTIMONIALS
        </p>

        <h2 className="text-4xl md:text-6xl font-bold leading-tight">

          Hear From Our{" "}

          <span className="text-gold">
            Happy Clients
          </span>

        </h2>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">

          Real stories from creators, businesses and brands who trusted
          <span className="text-white"> You Need This Media </span>
          to build their digital presence.

        </p>

      </motion.div>

      {/* GRID */}

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">

        {testimonials.map((item, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
            className="group w-full max-w-[340px]"
          >

            <div
              className={`glass relative overflow-hidden rounded-2xl border transition-all duration-500 hover:-translate-y-2 ${playingIndex === index
                ? "border-[#E8C840] shadow-[0_0_55px_rgba(232,200,64,0.35)]"
                : "border-white/10 hover:border-[#E8C840]/50 hover:shadow-[0_0_45px_rgba(232,200,64,0.2)]"
                }`}
            >

              {/* ================= VIDEO ================= */}

              <div className="relative overflow-hidden bg-black">

                <video
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  src={item.video}
                  className="w-full h-[360px] object-cover"
                  playsInline
                  preload="metadata"
                  onEnded={handleEnded}
                  onPlay={() => setPlayingIndex(index)}
                  onPause={() => {
                    if (playingIndex === index) {
                      setPlayingIndex(null);
                    }
                  }}
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* PLAY / PAUSE BUTTON */}
                <motion.button
                  type="button"
                  onClick={() => toggleVideo(index)}
                  initial={{ opacity: 1 }}
                  animate={{
                    opacity: playingIndex === index ? 0 : 1,
                    scale: playingIndex === index ? 0.8 : 1,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  whileHover={{
                    scale: 1.08,
                  }}
                  whileTap={{
                    scale: 0.92,
                  }}
                  className="absolute inset-0 flex items-center justify-center z-20"
                >

                  <motion.div
                    animate={{
                      boxShadow: [
                        "0 0 0px rgba(232,200,64,0.4)",
                        "0 0 25px rgba(232,200,64,0.7)",
                        "0 0 0px rgba(232,200,64,0.4)",
                      ],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                    }}
                    className="w-16 h-16 rounded-full bg-[#E8C840] flex items-center justify-center"
                  >

                    {playingIndex === index ? (
                      <Pause
                        size={28}
                        fill="black"
                        className="text-black"
                      />
                    ) : (
                      <Play
                        size={28}
                        fill="black"
                        className="text-black ml-1"
                      />
                    )}

                  </motion.div>

                </motion.button>

              </div>

              {/* ================= CONTENT ================= */}

              <div className="p-5">
                {/* ⭐ RATING */}
                <div className="flex items-center gap-1 mb-4">

                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        delay: i * 0.05,
                        duration: 0.25,
                      }}
                      className="text-[#E8C840] text-base"
                    >
                      ★
                    </motion.span>
                  ))}

                </div>

                {/* CLIENT REVIEW */}
                <p className="text-gray-300 text-sm leading-7 min-h-[95px] mb-6">

                  "{item.text}"

                </p>

                {/* DIVIDER */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-5"></div>

                {/* CLIENT INFO */}
                <div className="flex items-center gap-4">

                  {/* AVATAR */}
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.05 }}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E8C840] to-yellow-300 flex items-center justify-center text-black font-bold text-lg shadow-[0_0_25px_rgba(232,200,64,0.35)]"
                  >
                    {item.name.charAt(0)}
                  </motion.div>

                  {/* NAME */}
                  <div>

                    <h3 className="text-white font-semibold text-base">

                      {item.name}

                    </h3>

                    <p className="text-gray-400 text-sm">

                      {item.role}

                    </p>

                  </div>

                </div>

                {/* HOVER SHINE EFFECT */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

              </div> {/* END CONTENT */}

            </div> {/* END GLASS CARD */}

          </motion.div>

        ))}

      </div>

    </section>
  );
}