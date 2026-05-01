"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";

type Testimonial = {
  name: string;
  role: string;
  linkedin?: string;
  videoId?: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Itay Schiff",
    role: "Founder, Weavy",
    linkedin: "https://www.linkedin.com/in/itay-schiff-598238112/",
    videoId: "xyd6L0ytYy0",
  },
  {
    name: "Rowan Brooks",
    role: "Hawke Media",
    linkedin: "https://www.linkedin.com/in/rowanbrooks/",
    videoId: "vj4FBZopJRM",
  },
  {
    name: "Sahar Karoubi",
    role: "Founder, Bambuyu",
    linkedin: "https://www.linkedin.com/in/sahar-karoubi/",
    videoId: "Ne5NKVNcWWk",
  },
  {
    name: "Rayan Siddiqui",
    role: "Founder, Slate Kitchen & Cafe",
    videoId: "HhFYWoGReI0",
  },
];

function PlayIcon() {
  return (
    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[rgba(0,0,0,0.55)] backdrop-blur-sm border border-[rgba(255,255,255,0.25)] flex items-center justify-center group-hover:bg-[rgba(0,0,0,0.7)] group-hover:scale-105 transition-all duration-300">
      <div
        className="w-0 h-0 ml-1"
        style={{
          borderLeft: "16px solid rgba(255,255,255,0.95)",
          borderTop: "10px solid transparent",
          borderBottom: "10px solid transparent",
        }}
      />
    </div>
  );
}

export default function Testimonials() {
  const [openVideo, setOpenVideo] = useState<{ id: string; name: string } | null>(null);

  // Lock body scroll while modal open + ESC to close
  useEffect(() => {
    if (!openVideo) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenVideo(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [openVideo]);

  return (
    <section className="py-16 md:py-[100px] px-5 md:px-10 max-w-[1100px] mx-auto text-center">
      <Reveal>
        <span className="block text-[11px] uppercase tracking-[3px] text-[rgba(255,255,255,0.2)] mb-4">
          What they say
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className="text-[30px] sm:text-[34px] md:text-4xl font-bold tracking-[-1px] md:tracking-[-1.5px] leading-[1.12]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Hear it from them.
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 md:mt-12 max-w-[900px] mx-auto">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={(i % 2) * 0.08 + 0.08}>
            <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] rounded-[14px] p-5 flex flex-col md:flex-row gap-5 items-center hover:border-[rgba(255,255,255,0.12)] transition-[border-color] duration-300">
              {/* Video thumbnail — clicking opens lightbox */}
              {t.videoId ? (
                <button
                  type="button"
                  onClick={() => setOpenVideo({ id: t.videoId!, name: t.name })}
                  aria-label={`Play interview with ${t.name}`}
                  className="group relative w-full md:w-[55%] shrink-0 aspect-video rounded-[10px] overflow-hidden bg-[#111] cursor-pointer"
                >
                  <img
                    src={`https://i.ytimg.com/vi/${t.videoId}/hqdefault.jpg`}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[rgba(0,0,0,0.25)] group-hover:bg-[rgba(0,0,0,0.15)] transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <PlayIcon />
                  </div>
                </button>
              ) : (
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
              )}

              {/* Info */}
              <div className="flex-1 text-left">
                <div className="font-semibold text-base mb-0.5">{t.name}</div>
                <div className="text-xs text-[rgba(255,255,255,0.3)]">
                  {t.role}
                </div>
                {t.linkedin && (
                  <a
                    href={t.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2.5 text-xs text-[rgba(255,255,255,0.25)] hover:text-sky-blue transition-colors"
                  >
                    LinkedIn &rarr;
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Lightbox modal */}
      <AnimatePresence>
        {openVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[80] flex items-center justify-center p-4 md:p-10 bg-[rgba(0,0,0,0.55)] backdrop-blur-md"
            onClick={() => setOpenVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-[1200px] aspect-video bg-black rounded-[14px] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${openVideo.id}?autoplay=1&rel=0&modestbranding=1`}
                title={`${openVideo.name} interview`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </motion.div>

            {/* Close button — solid white, sits outside the iframe so it doesn't fight YouTube controls */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setOpenVideo(null);
              }}
              aria-label="Close video"
              className="absolute top-4 right-4 md:top-6 md:right-6 inline-flex items-center gap-2 bg-white text-[#0A0A0A] hover:bg-[rgba(255,255,255,0.85)] rounded-full pl-4 pr-3 py-2 md:pl-5 md:pr-3.5 md:py-2.5 text-[13px] md:text-sm font-semibold shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-colors"
            >
              <span>Close</span>
              <span className="inline-flex items-center justify-center w-5 h-5 md:w-6 md:h-6 rounded-full bg-[rgba(0,0,0,0.08)] text-[16px] md:text-[18px] leading-none">
                &times;
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
