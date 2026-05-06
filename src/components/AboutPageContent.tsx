"use client";

import Image from "next/image";
import Reveal from "./Reveal";

export default function AboutPageContent() {
  return (
    <section className="pt-28 md:pt-40 pb-16 md:pb-[100px] px-5 md:px-10 max-w-[680px] mx-auto">
      {/* Photo */}
      <Reveal className="flex justify-center mb-8 md:mb-10">
        <div className="w-[110px] h-[110px] md:w-[140px] md:h-[140px] rounded-full overflow-hidden border border-[rgba(255,255,255,0.06)]">
          <Image
            src="/zein.png"
            alt="Zein Kaskas"
            width={280}
            height={280}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <h1
          className="text-[36px] sm:text-[44px] md:text-[56px] font-bold tracking-[-1.5px] md:tracking-[-2.5px] leading-[1.1] mb-6 md:mb-8 text-center md:text-left"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Hey, I&apos;m Zein.
        </h1>
      </Reveal>

      <div className="space-y-6">
        <Reveal delay={0.16}>
          <p className="text-[15px] md:text-[17px] text-[rgba(255,255,255,0.5)] font-light leading-[1.8] md:leading-[1.85]">
            I&apos;m dyslexic. So when GPT-2 came out in high school, I was probably one
            of the first people to actually use it for something real. I taught it to
            write essays in my voice because I couldn&apos;t spell my way out of a
            paragraph. Then I started messing around inside the OpenAI playground and
            built myself a homework tool, back when most people had no idea the
            playground even existed.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <p className="text-[15px] md:text-[17px] text-[rgba(255,255,255,0.5)] font-light leading-[1.8] md:leading-[1.85]">
            Went to film school after that. Dropped out partway through. Took
            everything I&apos;d learned about story, framing, and editing, and rolled
            it into AI video the moment Veo 2 became public. Veo 3 was the moment I
            realised this was a real business, not just a creative habit.
          </p>
        </Reveal>

        <Reveal delay={0.32}>
          <p className="text-[15px] md:text-[17px] text-[rgba(255,255,255,0.5)] font-light leading-[1.8] md:leading-[1.85]">
            Photography and filmmaking are where the craft sits. Years behind a
            camera, directing shoots, building visual stories for brands. AI
            didn&apos;t replace any of that. It removed the limits. Ideas that used to
            take a full production team and a six-figure budget? I can build them in a
            week. Product shoots that needed a studio, models, and a photographer?
            Done with AI, and often better.
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="text-[15px] md:text-[17px] text-[rgba(255,255,255,0.5)] font-light leading-[1.8] md:leading-[1.85]">
            Now I help brands do the same. I work at the intersection of direction,
            design, and AI. I build systems that make teams faster and sharper without
            losing the human part. Every system or campaign I build is meant to be
            understood and used by real teams, every day.
          </p>
        </Reveal>

        <Reveal delay={0.48}>
          <p className="text-[15px] md:text-[17px] text-[rgba(255,255,255,0.5)] font-light leading-[1.8] md:leading-[1.85]">
            I use AI as a collaborator, not a replacement. The taste, the creative
            direction, the decision-making? That still needs a person. AI handles
            everything else.
          </p>
        </Reveal>
      </div>

      {/* What I do */}
      <Reveal delay={0.1}>
        <div className="mt-12 md:mt-16 pt-12 md:pt-16 border-t border-[rgba(255,255,255,0.06)]">
          <h2
            className="text-[24px] font-bold tracking-[-1px] mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            What I do
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-[15px] font-semibold mb-1">AI Consulting</h3>
              <p className="text-[14px] text-[rgba(255,255,255,0.4)] font-light leading-[1.7]">
                I audit your creative workflow, identify where AI fits, build the
                strategy, and train your team to run it independently.
              </p>
            </div>
            <div>
              <h3 className="text-[15px] font-semibold mb-1">AI Production</h3>
              <p className="text-[14px] text-[rgba(255,255,255,0.4)] font-light leading-[1.7]">
                Visuals, video, TVCs, and content at scale. From product renders
                to broadcast-quality commercials. Built on pipelines, not one-offs.
              </p>
            </div>
            <div>
              <h3 className="text-[15px] font-semibold mb-1">
                AI Systems & Workflows
              </h3>
              <p className="text-[14px] text-[rgba(255,255,255,0.4)] font-light leading-[1.7]">
                Custom tools and integrations that automate the work your team
                shouldn&apos;t be doing manually.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Socials */}
      <Reveal delay={0.1}>
        <div className="mt-12 md:mt-16 pt-12 md:pt-16 border-t border-[rgba(255,255,255,0.06)]">
          <h2
            className="text-[24px] font-bold tracking-[-1px] mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Find me
          </h2>
          <div className="flex flex-wrap gap-6">
            <a
              href="https://instagram.com/ZeinKaskas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] text-[rgba(255,255,255,0.3)] hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/zein-kaskas-1371a0340/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] text-[rgba(255,255,255,0.3)] hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://www.youtube.com/@zeinkaskas4245"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] text-[rgba(255,255,255,0.3)] hover:text-white transition-colors"
            >
              YouTube
            </a>
            <a
              href="mailto:hello@zeinkaskas.com"
              className="text-[14px] text-[rgba(255,255,255,0.3)] hover:text-white transition-colors"
            >
              hello@zeinkaskas.com
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
