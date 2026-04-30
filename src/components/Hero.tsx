"use client";

import dynamic from "next/dynamic";
import YouTubeEmbed from "./YouTubeEmbed";

const PixelRain = dynamic(() => import("./PixelRain"), { ssr: false });

export default function Hero() {
  return (
    <section
      id="landing"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-10 py-20 overflow-hidden"
    >
      <PixelRain />

      {/* Label */}
      <span className="relative z-10 text-[11px] uppercase tracking-[3px] text-[rgba(255,255,255,0.25)] mb-6">
        AI Director & Creative Technologist
      </span>

      {/* Headline */}
      <h1
        className="relative z-10 text-[34px] md:text-[52px] font-bold tracking-[-2.5px] leading-[1.1] max-w-[700px] mb-5"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Taste can&apos;t be automated.
        <br />
        But everything else can.
      </h1>

      {/* Subline */}
      <p className="relative z-10 text-[17px] text-[rgba(255,255,255,0.4)] font-light mb-10">
        AI consulting, production, and training for brands.
      </p>

      {/* VSL */}
      <div className="relative z-10 w-full max-w-[760px]">
        <YouTubeEmbed videoId="HaAv2k9wG-g" title="Zein Kaskas — VSL" />
      </div>

      {/* CTA */}
      <div className="relative z-10 mt-8">
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

      {/* Scroll hint */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5">
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
