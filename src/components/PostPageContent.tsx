"use client";

import Link from "next/link";
import Reveal from "./Reveal";
import type { Post, Accent } from "@/content/posts";

const accentText: Record<Accent, string> = {
  "sky-blue": "text-sky-blue",
  magenta: "text-magenta",
  teal: "text-teal",
  mango: "text-mango",
  orange: "text-orange",
};

const accentBg: Record<Accent, string> = {
  "sky-blue": "bg-sky-blue",
  magenta: "bg-magenta",
  teal: "bg-teal",
  mango: "bg-mango",
  orange: "bg-orange",
};

const accentBorder: Record<Accent, string> = {
  "sky-blue": "border-sky-blue",
  magenta: "border-magenta",
  teal: "border-teal",
  mango: "border-mango",
  orange: "border-orange",
};

export default function PostPageContent({ post }: { post: Post }) {
  const aText = accentText[post.card.accent];
  const aBg = accentBg[post.card.accent];
  const aBorder = accentBorder[post.card.accent];

  return (
    <article className="pt-24 md:pt-36 pb-16 md:pb-[100px] px-5 md:px-10 max-w-[820px] mx-auto">
      <Reveal>
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[2.5px] text-[rgba(255,255,255,0.3)] hover:text-white transition-colors mb-8 md:mb-10"
        >
          <span className="text-[14px] leading-none">←</span>
          <span>Back to Work</span>
        </Link>
      </Reveal>

      <Reveal delay={0.06}>
        <span
          className={`block text-[11px] uppercase tracking-[3px] mb-4 ${aText}`}
        >
          {post.hero.eyebrow}
        </span>
      </Reveal>

      <Reveal delay={0.12}>
        <h1
          className="text-[36px] sm:text-[44px] md:text-[56px] font-bold tracking-[-1.5px] md:tracking-[-2.5px] leading-[1.05] mb-5"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {post.hero.headline}
        </h1>
      </Reveal>

      <Reveal delay={0.18}>
        <p className="text-[16px] md:text-[18px] text-[rgba(255,255,255,0.5)] font-light leading-[1.7] max-w-[660px]">
          {post.hero.sub}
        </p>
      </Reveal>

      <Reveal delay={0.24}>
        <div className="relative w-full aspect-video rounded-[14px] bg-[#0E0E0E] border border-[rgba(255,255,255,0.06)] overflow-hidden mt-10 md:mt-14">
          <div className={`absolute inset-x-0 top-0 h-[2px] ${aBg} opacity-30`} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-6">
              <div
                className={`mx-auto mb-4 w-12 h-12 rounded-full flex items-center justify-center border ${aBorder} ${aText}`}
              >
                <span className="text-[18px] leading-none">▶</span>
              </div>
              <span className="block text-[10px] uppercase tracking-[3px] text-[rgba(255,255,255,0.3)] mb-2">
                Loom intro
              </span>
              <span className="block text-[14px] md:text-[15px] text-[rgba(255,255,255,0.45)] font-light leading-[1.6] max-w-[460px] mx-auto">
                {post.loomCaption}
              </span>
            </div>
          </div>
        </div>
      </Reveal>

      {post.stats && post.stats.length > 0 && (
        <div className="mt-8 md:mt-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {post.stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.04}>
                <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-[12px] p-5">
                  <div
                    className={`text-[26px] md:text-[32px] font-bold tracking-[-1px] mb-1 ${aText}`}
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-[10px] md:text-[11px] uppercase tracking-[2px] text-[rgba(255,255,255,0.4)]">
                    {stat.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-12 md:space-y-14 mt-12 md:mt-16">
        {post.sections.map((sec, i) => (
          <Reveal key={sec.heading} delay={0.04 + i * 0.02}>
            <section>
              <h2
                className="text-[22px] md:text-[28px] font-semibold tracking-[-0.6px] md:tracking-[-0.8px] mb-5"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {sec.heading}
              </h2>
              <div className="space-y-4">
                {sec.body.map((para, j) => (
                  <p
                    key={j}
                    className="text-[15px] md:text-[16px] text-[rgba(255,255,255,0.5)] font-light leading-[1.8]"
                  >
                    {para}
                  </p>
                ))}
                {sec.bullets && sec.bullets.length > 0 && (
                  <ul className="pt-2 space-y-3">
                    {sec.bullets.map((b, k) => (
                      <li
                        key={k}
                        className="text-[15px] md:text-[16px] text-[rgba(255,255,255,0.55)] font-light leading-[1.7] pl-5 relative"
                      >
                        <span
                          className={`absolute left-0 top-[12px] w-2.5 h-[2px] ${aBg}`}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          </Reveal>
        ))}
      </div>

      {post.pullQuote && (
        <Reveal delay={0.06}>
          <blockquote
            className={`mt-14 md:mt-16 border-l-2 ${aBorder} pl-6 md:pl-8 py-2`}
          >
            <p
              className="text-[20px] md:text-[26px] font-medium tracking-[-0.4px] text-white/85 leading-[1.4]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {post.pullQuote}
            </p>
          </blockquote>
        </Reveal>
      )}

      {post.gallery && (
        <div className="mt-14 md:mt-16">
          <Reveal>
            <h2
              className="text-[20px] md:text-[26px] font-semibold tracking-[-0.5px] mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {post.gallery.heading}
            </h2>
            {post.gallery.note && (
              <p className="text-[13px] md:text-[14px] text-[rgba(255,255,255,0.4)] font-light leading-[1.7] mb-6 max-w-[600px]">
                {post.gallery.note}
              </p>
            )}
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {post.gallery.tiles.map((tile, i) => (
              <Reveal key={i} delay={i * 0.03}>
                <div className="relative aspect-video bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-[10px] p-4 flex flex-col justify-end overflow-hidden">
                  <div
                    className={`absolute top-0 left-0 right-0 h-[2px] ${aBg} opacity-30`}
                  />
                  <div className="text-[12px] md:text-[13px] font-medium text-white/85 leading-[1.3]">
                    {tile.caption}
                  </div>
                  {tile.detail && (
                    <div className="text-[11px] text-[rgba(255,255,255,0.4)] mt-1 leading-[1.5]">
                      {tile.detail}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      )}

      {post.related && post.related.length > 0 && (
        <Reveal delay={0.04}>
          <div className="mt-14 md:mt-16 pt-8 border-t border-[rgba(255,255,255,0.06)]">
            <span className="block text-[11px] uppercase tracking-[2.5px] text-[rgba(255,255,255,0.3)] mb-4">
              Related work
            </span>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {post.related.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="text-[14px] text-[rgba(255,255,255,0.5)] hover:text-white transition-colors underline-offset-4 hover:underline"
                >
                  {r.label}
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      )}

      <Reveal delay={0.06}>
        <div className="mt-14 md:mt-20 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] rounded-[16px] p-6 md:p-10">
          <h3
            className="text-[22px] md:text-[26px] font-semibold tracking-[-0.5px] mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {post.cta.headline}
          </h3>
          <p className="text-[14px] md:text-[15px] text-[rgba(255,255,255,0.5)] font-light leading-[1.7] mb-6 max-w-[560px]">
            {post.cta.body}
          </p>
          <Link
            href={post.cta.href}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-black text-[14px] font-medium hover:bg-white/90 transition-colors"
          >
            {post.cta.label}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </Reveal>
    </article>
  );
}
