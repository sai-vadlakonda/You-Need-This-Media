import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MouseFollower from "@/components/MouseFollower";
import MouseGlow from "@/components/MouseGlow";
import ClientEffects from "@/components/ClientEffects";
import ScrollToTop from "@/components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "You Need This Media | Creative Marketing Agency for Creators & Businesses",
  description:
    "We help creators and businesses grow their digital presence with high-performing content, design, and strategy. From Scroll to Scale.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="bg-[#0A0A0A] text-white font-sans antialiased relative overflow-x-hidden">

        {/* ✅ SCROLL RESET (ADDED HERE) */}
        <ScrollToTop />

        {/* 🔥 BACKGROUND GLOW */}
        <MouseGlow />

        {/* 🔥 SCROLL LOGIC */}
        <ClientEffects />

        {/* 🔥 SCROLL BAR */}
        <div
          id="progress-bar"
          className="fixed top-0 left-0 h-[2px] bg-[#E8C840] z-[9999]"
          style={{ width: "0%" }}
        />

        {/* 🔥 MAIN CONTENT */}
        {children}

        {/* 🔥 FLOATING BUTTON */}
        <FloatingWhatsApp />

        {/* 🔥 CURSOR */}
        <MouseFollower />

      </body>
    </html>
  );
}