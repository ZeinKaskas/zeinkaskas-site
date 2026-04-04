"use client";

import Reveal from "./Reveal";

const services = [
  {
    num: "01",
    title: "AI Consulting",
    desc: "I audit your creative workflow, identify where AI fits, build the strategy, and train your team to run it independently.",
  },
  {
    num: "02",
    title: "AI Production",
    desc: "Visuals, video, TVCs, and content at scale. From product renders to broadcast-quality commercials. Built on pipelines, not one-offs.",
  },
  {
    num: "03",
    title: "AI Systems & Workflows",
    desc: "Custom tools and integrations that automate the work your team shouldn't be doing manually. Email, research, scripts, presentations, and more.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-[100px] px-10 max-w-[1100px] mx-auto text-center">
      <Reveal>
        <span className="block text-[11px] uppercase tracking-[3px] text-[rgba(255,255,255,0.2)] mb-4">
          What I do
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className="text-4xl font-bold tracking-[-1.5px] leading-[1.12]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Three ways I work with brands.
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mt-12">
        {services.map((s, i) => (
          <Reveal key={s.num} delay={i * 0.08}>
            <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-[14px] p-[30px_22px] hover:border-[rgba(255,255,255,0.12)] transition-[border-color] duration-300 h-full">
              <div
                className="text-[11px] text-[rgba(255,255,255,0.15)] tracking-[1px] mb-[18px]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {s.num}
              </div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {s.title}
              </h3>
              <p className="text-[13px] text-[rgba(255,255,255,0.4)] leading-[1.6] font-light">
                {s.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
