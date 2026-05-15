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

function CaseCard({
  href,
  placeholder,
  tag,
  tagColor,
  title,
  desc,
  delay,
}: {
  href: string;
  placeholder: string;
  tag: string;
  tagColor: string;
  title: string;
  desc: string;
  delay: number;
}) {
  return (
    <Reveal delay={delay}>
      <Link
        href={href}
        className="group block bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-[14px] overflow-hidden hover:border-[rgba(255,255,255,0.18)] transition-[border-color] duration-300 h-full text-left"
      >
        <div className="w-full aspect-video bg-[#111] flex items-center justify-center text-[11px] text-[rgba(255,255,255,0.18)] border-b border-[rgba(255,255,255,0.04)]">
          {placeholder}
        </div>
        <div className="p-5">
          <div
            className={`text-[10px] uppercase tracking-[1.5px] mb-1.5 ${tagColor}`}
          >
            {tag}
          </div>
          <h3
            className="text-[16px] md:text-[17px] font-semibold mb-1.5 group-hover:translate-x-0.5 transition-transform duration-300"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {title}
          </h3>
          <p className="text-[13px] text-[rgba(255,255,255,0.55)] font-normal leading-[1.55]">
            {desc}
          </p>
        </div>
      </Link>
    </Reveal>
  );
}

export default function FeaturedWork() {
  const featured = posts
    .filter((p) => p.card.feature === "featured")
    .sort((a, b) => (a.card.order ?? 99) - (b.card.order ?? 99));
  const recent = posts.filter((p) => p.card.feature === "recent").slice(0, 3);

  return (
    <>
      <div
        id="work"
        className="bg-[rgba(255,255,255,0.02)] border-t border-b border-[rgba(255,255,255,0.04)]"
      >
        <section className="py-16 md:py-[100px] px-5 md:px-10 max-w-[1100px] mx-auto text-center">
          <Reveal>
            <span className="block text-[11px] uppercase tracking-[3px] text-[rgba(255,255,255,0.3)] mb-4">
              Featured work
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2
              className="text-[30px] sm:text-[34px] md:text-4xl font-bold tracking-[-1px] md:tracking-[-1.5px] leading-[1.12]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Real systems. Real results.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mt-10 md:mt-12 text-left">
            {featured.map((p, i) => (
              <CaseCard
                key={p.slug}
                href={`/work/${p.slug}`}
                placeholder={p.card.placeholder}
                tag={p.card.tag}
                tagColor={accentText[p.card.accent] ?? "text-white"}
                title={p.card.title}
                desc={p.card.summary}
                delay={i % 2 === 0 ? 0.08 : 0.16}
              />
            ))}
          </div>
        </section>
      </div>

      <section className="py-16 md:py-[100px] px-5 md:px-10 max-w-[1100px] mx-auto text-center">
        <Reveal>
          <span className="block text-[11px] uppercase tracking-[3px] text-[rgba(255,255,255,0.3)] mb-4">
            Recent work
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2
            className="text-[30px] sm:text-[34px] md:text-4xl font-bold tracking-[-1px] md:tracking-[-1.5px] leading-[1.12]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Latest projects.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mt-10 md:mt-12 text-left">
          {recent.map((p, i) => (
            <CaseCard
              key={p.slug}
              href={`/work/${p.slug}`}
              placeholder={p.card.placeholder}
              tag={p.card.tag}
              tagColor={accentText[p.card.accent] ?? "text-white"}
              title={p.card.title}
              desc={p.card.summary}
              delay={i * 0.08}
            />
          ))}
        </div>

        <Reveal delay={0.1} className="mt-10">
          <Link
            href="/work"
            className="inline-block bg-transparent text-[rgba(255,255,255,0.6)] border border-[rgba(255,255,255,0.15)] px-[22px] py-[10px] rounded-lg text-[13px] font-semibold hover:border-[rgba(255,255,255,0.4)] hover:text-white transition-all duration-300"
          >
            View all projects &rarr;
          </Link>
        </Reveal>
      </section>
    </>
  );
}
