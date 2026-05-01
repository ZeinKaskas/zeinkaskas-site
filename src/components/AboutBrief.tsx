"use client";

import Image from "next/image";
import Reveal from "./Reveal";

export default function AboutBrief() {
  return (
    <div
      id="about"
      className="bg-[rgba(255,255,255,0.02)] border-b border-[rgba(255,255,255,0.04)]"
    >
      <section className="py-16 md:py-[100px] px-5 md:px-10 max-w-[1100px] mx-auto">
        <div className="flex flex-col items-center text-center max-w-[480px] mx-auto">
          {/* Photo */}
          <Reveal>
            <div className="w-[100px] h-[100px] rounded-full overflow-hidden border border-[rgba(255,255,255,0.06)] mb-[22px]">
              <Image
                src="/zein.png"
                alt="Zein Kaskas"
                width={200}
                height={200}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h2
              className="text-[28px] font-bold tracking-[-1.5px] leading-[1.12] mb-3.5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Hey, I&apos;m Zein.
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="text-[15px] text-[rgba(255,255,255,0.4)] leading-[1.8] font-light">
              Started in photography and filmmaking. Discovered AI could turn
              ideas that used to be impossible into something I could build in a
              week. Now I help brands do the same.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="flex gap-[18px] mt-[22px]">
              <a
                href="https://instagram.com/ZeinKaskas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[rgba(255,255,255,0.2)] hover:text-[rgba(255,255,255,0.5)] transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/zein-kaskas-1371a0340/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[rgba(255,255,255,0.2)] hover:text-[rgba(255,255,255,0.5)] transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://www.youtube.com/@zeinkaskas4245"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[rgba(255,255,255,0.2)] hover:text-[rgba(255,255,255,0.5)] transition-colors"
              >
                YouTube
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
