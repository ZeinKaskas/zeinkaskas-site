"use client";

import Reveal from "./Reveal";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="text-center py-[120px] px-10 border-t border-[rgba(255,255,255,0.04)]"
    >
      <Reveal>
        <h2
          className="text-4xl font-bold tracking-[-1.5px] leading-[1.12] mb-3.5"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Let&apos;s talk.
        </h2>
      </Reveal>

      <Reveal delay={0.08}>
        <p className="text-base text-[rgba(255,255,255,0.4)] font-light leading-[1.7] max-w-[480px] mx-auto mb-8">
          15 minutes. I&apos;ll tell you where AI fits in your creative workflow
          and what it would take to get there.
        </p>
      </Reveal>

      <Reveal delay={0.16}>
        <a
          href="#"
          className="inline-block bg-white text-[#0A0A0A] px-[22px] py-[10px] rounded-lg text-[13px] font-semibold hover:opacity-90 transition-opacity"
        >
          Book a Call
        </a>
      </Reveal>

      <Reveal delay={0.24}>
        <div className="mt-3.5 text-[13px] text-[rgba(255,255,255,0.15)]">
          or email{" "}
          <a
            href="mailto:hello@zeinkaskas.com"
            className="text-[rgba(255,255,255,0.3)] underline underline-offset-[3px]"
          >
            hello@zeinkaskas.com
          </a>
        </div>
      </Reveal>
    </section>
  );
}
