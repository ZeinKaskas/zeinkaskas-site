"use client";

import Reveal from "./Reveal";

const testimonials = [
  {
    name: "Itay Schiff",
    role: "Founder, Weavy",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Rowan Brooks",
    role: "Hawke Media",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Rashi Shah",
    role: "Co-founder, PLAAY",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Sahar Karoubi",
    role: "Founder, Bambuyu",
    linkedin: "https://linkedin.com",
  },
];

export default function Testimonials() {
  return (
    <section className="py-[100px] px-10 max-w-[1100px] mx-auto text-center">
      <Reveal>
        <span className="block text-[11px] uppercase tracking-[3px] text-[rgba(255,255,255,0.2)] mb-4">
          What they say
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className="text-4xl font-bold tracking-[-1.5px] leading-[1.12]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Hear it from them.
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12 max-w-[900px] mx-auto">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={(i % 2) * 0.08 + 0.08}>
            <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] rounded-[14px] p-5 flex flex-col md:flex-row gap-5 items-center hover:border-[rgba(255,255,255,0.12)] transition-[border-color] duration-300">
              {/* Video placeholder */}
              <div className="w-full md:w-[55%] shrink-0 aspect-video bg-[#111] rounded-[10px] flex items-center justify-center cursor-pointer">
                <div className="w-11 h-11 rounded-full bg-[rgba(255,255,255,0.06)] flex items-center justify-center">
                  <div
                    className="w-0 h-0 ml-0.5"
                    style={{
                      borderLeft: "12px solid rgba(255,255,255,0.4)",
                      borderTop: "7px solid transparent",
                      borderBottom: "7px solid transparent",
                    }}
                  />
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 text-left">
                <div className="font-semibold text-base mb-0.5">{t.name}</div>
                <div className="text-xs text-[rgba(255,255,255,0.3)]">
                  {t.role}
                </div>
                <a
                  href={t.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2.5 text-xs text-[rgba(255,255,255,0.25)] hover:text-sky-blue transition-colors"
                >
                  LinkedIn &rarr;
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
