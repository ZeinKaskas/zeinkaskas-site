"use client";

import dynamic from "next/dynamic";
import YouTubeEmbed from "./YouTubeEmbed";

const PixelRain = dynamic(() => import("./PixelRain"), { ssr: false });

export default function Hero() {
  return (
    <section
      id="landing"
      className="relative min-h-[100svh] md:min-h-screen flex flex-col items-center justify-center text-center px-5 md:px-10 py-16 md:py-20 overflow-hidden"
    >
      <PixelRain />

      {/* Label */}
      <span className="relative z-10 text-[10px] md:text-[11px] uppercase tracking-[2px] md:tracking-[3px] text-[rgba(255,255,255,0.25)] mb-5 md:mb-6 px-2">
        AI Director & Creative Technologist
      </span>

      {/* Headline */}
      <h1
        className="relative z-10 text-[30px] sm:text-[34px] md:text-[52px] font-bold tracking-[-1.5px] md:tracking-[-2.5px] leading-[1.1] max-w-[700px] mb-4 md:mb-5"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Taste can&apos;t be automated.
        <br />
        But everything else can.
      </h1>

      {/* Subline */}
      <p className="relative z-10 text-[15px] md:text-[17px] text-[rgba(255,255,255,0.4)] font-light mb-8 md:mb-10 max-w-[420px] md:max-w-none">
        AI consulting, production, and training for brands.
      </p>

      {/* VSL */}
      <div className="relative z-10 w-full max-w-[760px]">
        <YouTubeEmbed videoId="CFP6kjUM_E8" title="Zein Kaskas — VSL" />
      </div>

      {/* CTA */}
      <div className="relative z-10 mt-7 md:mt-8 mb-12 md:mb-0">
        <a
          href="/book"
          className="inline-block bg-white text-[#0A0A0A] px-[22px] py-[10px] rounded-lg text-[13px] font-semibold hover:opacity-90 transition-opacity"
        >
          Book a 15-Minute Call
        </a>
        <p className="text-[12px] text-[rgba(255,255,255,0.2)] mt-2.5">
          No pitch. Just clarity on where AI fits.
        </p>
      </div>

      {/* Scroll hint — hidden on mobile to avoid colliding with CTA */}
      <div className="hidden md:flex absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-1.5">
        <span className="text-[10px] uppercase tracking-[2px] text-[rgba(255,255,255,0.12)]">
          Scroll
        </span>
        <div className="w-[1px] h-7 bg-[rgba(255,255,255,0.08)] relative overflow-hidden">
          <div
            className="absolute left-0 w-[1px] h-7 bg-[rgba(255,255,255,0.3)]"
            style={{ animation: "scroll-pulse 1.8s ease-in-out infinite" }}
          />
        </div>
      </div>
    </section>
  );
}
