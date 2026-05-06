"use client";

import Link from "next/link";
import Reveal from "./Reveal";
import { posts } from "@/content/posts";

const accentText: Record<string, string> = {
  "sky-blue": "text-sky-blue",
  magenta: "text-magenta",
  teal: "text-teal",
  mango: "text-mango",
  orange: "text-orange",
};

export default function WorkPageContent() {
  const featured = posts.filter((p) => p.card.feature === "featured");
  const recent = posts.filter((p) => p.card.feature === "recent");

  return (
    <section className="pt-28 md:pt-40 pb-16 md:pb-[100px] px-5 md:px-10 max-w-[1100px] mx-auto">
      <Reveal>
        <span className="block text-[11px] uppercase tracking-[3px] text-[rgba(255,255,255,0.2)] mb-4">
          Portfolio
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h1
          className="text-[40px] sm:text-[44px] md:text-[56px] font-bold tracking-[-1.5px] md:tracking-[-2.5px] leading-[1.1] mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Work
        </h1>
      </Reveal>
      <Reveal delay={0.16}>
        <p className="text-[15px] md:text-base text-[rgba(255,255,255,0.4)] font-light leading-[1.7] max-w-[520px] mb-12 md:mb-16">
          Real systems built for real brands. From AI video production to
          automated workflows, each project solves a specific problem at scale.
        </p>
      </Reveal>

      {featured.length > 0 && (
        <>
          <Reveal>
            <span className="block text-[11px] uppercase tracking-[2.5px] text-[rgba(255,255,255,0.35)] mb-5">
              Featured
            </span>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14 md:mb-16">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <Link
                  href={`/work/${p.slug}`}
                  className="group block bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-[14px] overflow-hidden hover:border-[rgba(255,255,255,0.14)] transition-[border-color] duration-300"
                >
                  <div className="w-full aspect-video bg-[#111] flex items-center justify-center text-[11px] text-[rgba(255,255,255,0.12)] border-b border-[rgba(255,255,255,0.04)]">
                    {p.card.placeholder}
                  </div>
                  <div className="p-5">
                    <div
                      className={`text-[10px] uppercase tracking-[1.5px] mb-1.5 ${
                        accentText[p.card.accent] ?? "text-white"
                      }`}
                    >
                      {p.card.tag}
                    </div>
                    <h3
                      className="text-lg font-semibold mb-1.5 group-hover:translate-x-0.5 transition-transform duration-300"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {p.card.title}
                    </h3>
                    <p className="text-[13px] text-[rgba(255,255,255,0.35)] font-light leading-[1.5]">
                      {p.card.summary}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </>
      )}

      {recent.length > 0 && (
        <>
          <Reveal>
            <span className="block text-[11px] uppercase tracking-[2.5px] text-[rgba(255,255,255,0.35)] mb-5">
              Recent
            </span>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {recent.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <Link
                  href={`/work/${p.slug}`}
                  className="group block bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-[14px] overflow-hidden hover:border-[rgba(255,255,255,0.14)] transition-[border-color] duration-300"
                >
                  <div className="w-full aspect-video bg-[#111] flex items-center justify-center text-[11px] text-[rgba(255,255,255,0.12)] border-b border-[rgba(255,255,255,0.04)]">
                    {p.card.placeholder}
                  </div>
                  <div className="p-5">
                    <div
                      className={`text-[10px] uppercase tracking-[1.5px] mb-1.5 ${
                        accentText[p.card.accent] ?? "text-white"
                      }`}
                    >
                      {p.card.tag}
                    </div>
                    <h3
                      className="text-lg font-semibold mb-1.5 group-hover:translate-x-0.5 transition-transform duration-300"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {p.card.title}
                    </h3>
                    <p className="text-[13px] text-[rgba(255,255,255,0.35)] font-light leading-[1.5]">
                      {p.card.summary}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
