"use client";

import Reveal from "./Reveal";

const featuredCases = [
  {
    img: "[Burjeel 8K video still]",
    tag: "AI Video Production",
    tagColor: "text-sky-blue",
    title: "Burjeel Hospital",
    desc: "8K cinematic video for a hospital's 20th anniversary. Full pipeline from script to final delivery.",
  },
  {
    img: "[PLAAY product render]",
    tag: "AI Production",
    tagColor: "text-magenta",
    title: "PLAAY",
    desc: "AI-generated product photography replacing traditional shoots for a premium chocolate brand.",
  },
  {
    img: "[Character consistency demo]",
    tag: "AI Systems",
    tagColor: "text-teal",
    title: "Consistent Characters",
    desc: "A generative workflow that maintains character consistency across multi-shot scenes, campaigns, and long-form content.",
  },
  {
    img: "[Fashion editorial]",
    tag: "Enterprise",
    tagColor: "text-mango",
    title: "Global Fashion House",
    desc: "AI workflows turning product photos into editorial visuals across 20 brands. Built once, runs forever.",
  },
];

const recentCases = [
  {
    img: "[Workflow interface]",
    tag: "Workflow",
    tagColor: "text-teal",
    title: "Brief to Content",
    desc: "Upload a slide deck. Get production-ready visual content back automatically.",
  },
  {
    img: "[Ad pipeline output]",
    tag: "AI Systems",
    tagColor: "text-magenta",
    title: "Replace Agency",
    desc: "An automated pipeline that handles scripting, concepting, image generation, video, editing, and delivery.",
  },
  {
    img: "[TVC production still]",
    tag: "AI Production",
    tagColor: "text-sky-blue",
    title: "TVCs Process",
    desc: "From script to screen. A data-driven approach to TV commercial production using AI generation pipelines.",
  },
];

function CaseCard({
  img,
  tag,
  tagColor,
  title,
  desc,
  delay,
}: {
  img: string;
  tag: string;
  tagColor: string;
  title: string;
  desc: string;
  delay: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-[14px] overflow-hidden cursor-pointer hover:border-[rgba(255,255,255,0.14)] transition-[border-color] duration-300 h-full">
        <div className="w-full aspect-video bg-[#111] flex items-center justify-center text-[11px] text-[rgba(255,255,255,0.12)] border-b border-[rgba(255,255,255,0.04)]">
          {img}
        </div>
        <div className="p-5">
          <div className={`text-[10px] uppercase tracking-[1.5px] mb-1.5 ${tagColor}`}>
            {tag}
          </div>
          <h3
            className="text-base font-semibold mb-1.5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {title}
          </h3>
          <p className="text-xs text-[rgba(255,255,255,0.35)] font-light leading-[1.5]">
            {desc}
          </p>
        </div>
      </div>
    </Reveal>
  );
}

export default function FeaturedWork() {
  return (
    <>
      {/* Featured Work */}
      <div
        id="work"
        className="bg-[rgba(255,255,255,0.02)] border-t border-b border-[rgba(255,255,255,0.04)]"
      >
        <section className="py-[100px] px-10 max-w-[1100px] mx-auto text-center">
          <Reveal>
            <span className="block text-[11px] uppercase tracking-[3px] text-[rgba(255,255,255,0.2)] mb-4">
              Featured work
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2
              className="text-4xl font-bold tracking-[-1.5px] leading-[1.12]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Real systems. Real results.
            </h2>
          </Reveal>

          {/* TEMP: coming-soon overlay — remove this wrapper div once cases are live */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mt-12">
              {featuredCases.map((c, i) => (
                <CaseCard key={c.title} {...c} delay={i % 2 === 0 ? 0.08 : 0.16} />
              ))}
            </div>
            <div className="absolute inset-0 mt-12 flex items-center justify-center bg-[rgba(10,10,10,0.65)] backdrop-blur-[2px] rounded-[14px] pointer-events-none">
              <div className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.12)] rounded-full px-5 py-2 text-[12px] text-[rgba(255,255,255,0.7)]">
                Brand new site — case studies launching next week.
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Recent Work */}
      <section className="py-[100px] px-10 max-w-[1100px] mx-auto text-center">
        <Reveal>
          <span className="block text-[11px] uppercase tracking-[3px] text-[rgba(255,255,255,0.2)] mb-4">
            Recent work
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2
            className="text-4xl font-bold tracking-[-1.5px] leading-[1.12]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Latest projects.
          </h2>
        </Reveal>

        {/* TEMP: coming-soon overlay — remove this wrapper div once cases are live */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mt-12">
            {recentCases.map((c, i) => (
              <CaseCard key={c.title} {...c} delay={i * 0.08} />
            ))}
          </div>
          <div className="absolute inset-0 mt-12 flex items-center justify-center bg-[rgba(10,10,10,0.65)] backdrop-blur-[2px] rounded-[14px] pointer-events-none">
            <div className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.12)] rounded-full px-5 py-2 text-[12px] text-[rgba(255,255,255,0.7)]">
              Brand new site — projects launching next week.
            </div>
          </div>
        </div>

        <Reveal delay={0.1} className="mt-10">
          <a
            href="/work"
            className="inline-block bg-transparent text-[rgba(255,255,255,0.4)] border border-[rgba(255,255,255,0.1)] px-[22px] py-[10px] rounded-lg text-[13px] font-semibold hover:border-[rgba(255,255,255,0.25)] hover:text-[rgba(255,255,255,0.6)] transition-all duration-300"
          >
            View all projects &rarr;
          </a>
        </Reveal>
      </section>
    </>
  );
}
