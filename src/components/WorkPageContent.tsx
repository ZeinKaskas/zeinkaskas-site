"use client";

import Link from "next/link";
import Reveal from "./Reveal";
import { posts, type Post } from "@/content/posts";

const accentText: Record<string, string> = {
  "sky-blue": "text-sky-blue",
  magenta: "text-magenta",
  teal: "text-teal",
  mango: "text-mango",
  orange: "text-orange",
};

function PostCard({ post, delay }: { post: Post; delay: number }) {
  return (
    <Reveal delay={delay}>
      <Link
        href={`/work/${post.slug}`}
        className="group block bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-[14px] overflow-hidden hover:border-[rgba(255,255,255,0.18)] transition-[border-color] duration-300 h-full"
      >
        <div className="w-full aspect-video bg-[#111] flex items-center justify-center text-[11px] text-[rgba(255,255,255,0.18)] border-b border-[rgba(255,255,255,0.04)]">
          {post.card.placeholder}
        </div>
        <div className="p-5">
          <div
            className={`text-[10px] uppercase tracking-[1.5px] mb-1.5 ${
              accentText[post.card.accent] ?? "text-white"
            }`}
          >
            {post.card.tag}
          </div>
          <h3
            className="text-[17px] md:text-[18px] font-semibold mb-1.5 group-hover:translate-x-0.5 transition-transform duration-300"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {post.card.title}
          </h3>
          <p className="text-[13px] md:text-[14px] text-[rgba(255,255,255,0.6)] font-normal leading-[1.55]">
            {post.card.summary}
          </p>
        </div>
      </Link>
    </Reveal>
  );
}

export default function WorkPageContent() {
  const featured = posts
    .filter((p) => p.card.feature === "featured")
    .sort((a, b) => (a.card.order ?? 99) - (b.card.order ?? 99));
  const recent = posts.filter((p) => p.card.feature === "recent");
  const topics = posts.filter((p) => p.card.feature === "topic");

  return (
    <section className="pt-28 md:pt-40 pb-16 md:pb-[100px] px-5 md:px-10 max-w-[1100px] mx-auto">
      <Reveal>
        <span className="block text-[11px] uppercase tracking-[3px] text-[rgba(255,255,255,0.3)] mb-4">
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
        <p className="text-[15px] md:text-[17px] text-[rgba(255,255,255,0.7)] font-normal leading-[1.7] max-w-[560px] mb-12 md:mb-16">
          Real systems built for real brands. Project case studies up top, then
          the broader topic pages where we walk through the use cases by
          industry.
        </p>
      </Reveal>

      {featured.length > 0 && (
        <>
          <Reveal>
            <span className="block text-[11px] uppercase tracking-[2.5px] text-[rgba(255,255,255,0.45)] mb-5">
              Featured
            </span>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14 md:mb-16">
            {featured.map((p, i) => (
              <PostCard key={p.slug} post={p} delay={i * 0.06} />
            ))}
          </div>
        </>
      )}

      {recent.length > 0 && (
        <>
          <Reveal>
            <span className="block text-[11px] uppercase tracking-[2.5px] text-[rgba(255,255,255,0.45)] mb-5">
              Recent
            </span>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14 md:mb-16">
            {recent.map((p, i) => (
              <PostCard key={p.slug} post={p} delay={i * 0.06} />
            ))}
          </div>
        </>
      )}

      {topics.length > 0 && (
        <>
          <Reveal>
            <div className="mb-5">
              <span className="block text-[11px] uppercase tracking-[2.5px] text-[rgba(255,255,255,0.45)] mb-2">
                Topics
              </span>
              <p className="text-[14px] md:text-[15px] text-[rgba(255,255,255,0.55)] font-normal leading-[1.7] max-w-[560px]">
                Industry walk-throughs. The use cases by sector, with the
                shipped work and the demo galleries underneath.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {topics.map((p, i) => (
              <PostCard key={p.slug} post={p} delay={i * 0.06} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
