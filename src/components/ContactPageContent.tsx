"use client";

import Reveal from "./Reveal";

export default function ContactPageContent() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-5 md:px-10 py-20">
      <Reveal>
        <span className="block text-[11px] uppercase tracking-[3px] text-[rgba(255,255,255,0.2)] mb-4">
          Get in touch
        </span>
      </Reveal>

      <Reveal delay={0.08}>
        <h1
          className="text-[36px] sm:text-[44px] md:text-[56px] font-bold tracking-[-1.5px] md:tracking-[-2.5px] leading-[1.1] mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Let&apos;s talk.
        </h1>
      </Reveal>

      <Reveal delay={0.16}>
        <p className="text-[15px] md:text-[17px] text-[rgba(255,255,255,0.4)] font-light leading-[1.7] max-w-[480px] mx-auto mb-10">
          15 minutes. I&apos;ll tell you where AI fits in your creative workflow
          and what it would take to get there.
        </p>
      </Reveal>

      {/* Cal.com booking */}
      <Reveal delay={0.24}>
        <div className="mb-10">
          <a
            href="/book"
            className="inline-block bg-white text-[#0A0A0A] px-8 py-3.5 rounded-lg text-[15px] font-semibold hover:opacity-90 transition-opacity"
          >
            Book a 15-Minute Call
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.32}>
        <div className="space-y-4 text-center">
          <div>
            <a
              href="mailto:hello@zeinkaskas.com"
              className="text-[15px] text-[rgba(255,255,255,0.4)] hover:text-white transition-colors underline underline-offset-[3px]"
            >
              hello@zeinkaskas.com
            </a>
          </div>
          <div className="flex gap-6 justify-center">
            <a
              href="https://instagram.com/ZeinKaskas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-[rgba(255,255,255,0.25)] hover:text-[rgba(255,255,255,0.5)] transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/zein-kaskas-1371a0340/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-[rgba(255,255,255,0.25)] hover:text-[rgba(255,255,255,0.5)] transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
