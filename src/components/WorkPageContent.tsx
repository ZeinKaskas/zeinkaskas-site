"use client";

import Reveal from "./Reveal";

const allProjects = [
  {
    img: "[Burjeel 8K video still]",
    tag: "AI Video Production",
    tagColor: "text-sky-blue",
    title: "Burjeel Hospital",
    desc: "8K cinematic video for a hospital's 20th anniversary. Full pipeline from script to final delivery.",
    category: "featured",
  },
  {
    img: "[PLAAY product render]",
    tag: "AI Production",
    tagColor: "text-magenta",
    title: "PLAAY",
    desc: "AI-generated product photography replacing traditional shoots for a premium chocolate brand.",
    category: "featured",
  },
  {
    img: "[Character consistency demo]",
    tag: "AI Systems",
    tagColor: "text-teal",
    title: "Consistent Characters",
    desc: "A generative workflow that maintains character consistency across multi-shot scenes, campaigns, and long-form content.",
    category: "featured",
  },
  {
    img: "[Fashion editorial]",
    tag: "Enterprise",
    tagColor: "text-mango",
    title: "Global Fashion House",
    desc: "AI workflows turning product photos into editorial visuals across 20 brands. Built once, runs forever.",
    category: "featured",
  },
  {
    img: "[Workflow interface]",
    tag: "Workflow",
    tagColor: "text-teal",
    title: "Brief to Content",
    desc: "Upload a slide deck. Get production-ready visual content back automatically.",
    category: "recent",
  },
  {
    img: "[Ad pipeline output]",
    tag: "AI Systems",
    tagColor: "text-magenta",
    title: "Replace Agency",
    desc: "An automated pipeline that handles scripting, concepting, image generation, video, editing, and delivery.",
    category: "recent",
  },
  {
    img: "[TVC production still]",
    tag: "AI Production",
    tagColor: "text-sky-blue",
    title: "TVCs Process",
    desc: "From script to screen. A data-driven approach to TV commercial production using AI generation pipelines.",
    category: "recent",
  },
];

export default function WorkPageContent() {
  return (
    <section className="pt-40 pb-[100px] px-10 max-w-[1100px] mx-auto">
      <Reveal>
        <span className="block text-[11px] uppercase tracking-[3px] text-[rgba(255,255,255,0.2)] mb-4">
          Portfolio
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h1
          className="text-[44px] md:text-[56px] font-bold tracking-[-2.5px] leading-[1.1] mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Work
        </h1>
      </Reveal>
      <Reveal delay={0.16}>
        <p className="text-base text-[rgba(255,255,255,0.4)] font-light leading-[1.7] max-w-[520px] mb-16">
          Real systems built for real brands. From AI video production to
          automated workflows, each project solves a specific problem at scale.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {allProjects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.06}>
            <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-[14px] overflow-hidden cursor-pointer hover:border-[rgba(255,255,255,0.14)] transition-[border-color] duration-300">
              <div className="w-full aspect-video bg-[#111] flex items-center justify-center text-[11px] text-[rgba(255,255,255,0.12)] border-b border-[rgba(255,255,255,0.04)]">
                {p.img}
              </div>
              <div className="p-5">
                <div
                  className={`text-[10px] uppercase tracking-[1.5px] mb-1.5 ${p.tagColor}`}
                >
                  {p.tag}
                </div>
                <h3
                  className="text-lg font-semibold mb-1.5"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {p.title}
                </h3>
                <p className="text-[13px] text-[rgba(255,255,255,0.35)] font-light leading-[1.5]">
                  {p.desc}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
