"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useCallback, useEffect, useRef } from "react";
import Reveal from "./Reveal";
import type {
  Accent,
  Block,
  Post,
  ImageRef,
  VideoBlock,
} from "@/content/posts";

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

function encodePath(p: string): string {
  // Preserve already-encoded paths, encode literal spaces and a few others.
  if (p.startsWith("http")) return p;
  return p.split("/").map(encodeURIComponent).join("/");
}


type Ctx = {
  accent: Accent;
  openLightbox: (src: string, alt?: string) => void;
};

function ImageTile({
  image,
  alt,
  aspect = "video",
  ctx,
  className = "",
}: {
  image: ImageRef;
  alt: string;
  aspect?: "video" | "square" | "portrait" | "auto";
  ctx: Ctx;
  className?: string;
}) {
  const aspectCls =
    aspect === "video"
      ? "aspect-video"
      : aspect === "square"
        ? "aspect-square"
        : aspect === "portrait"
          ? "aspect-[3/4]"
          : "";

  if (!image.src) {
    return (
      <div
        className={`relative w-full ${aspectCls} bg-[rgba(255,255,255,0.02)] rounded-[10px] border border-dashed border-[rgba(255,255,255,0.1)] overflow-hidden flex items-center justify-center ${className}`}
      >
        <div className="text-center px-4">
          {image.caption && (
            <span className="block text-[11px] md:text-[12px] uppercase tracking-[1.5px] text-[rgba(255,255,255,0.45)] font-medium">
              {image.caption}
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => ctx.openLightbox(encodePath(image.src), alt)}
      className={`group relative w-full ${aspectCls} bg-[#111] rounded-[10px] border border-[rgba(255,255,255,0.06)] overflow-hidden cursor-zoom-in hover:border-[rgba(255,255,255,0.18)] transition-[border-color] duration-300 ${className}`}
    >
      <Image
        src={encodePath(image.src)}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
      />
      {image.badge && (
        <div className="absolute top-2 right-2">
          <span className="bg-black/70 text-white text-[10px] uppercase tracking-[1.5px] font-semibold px-2 py-1 rounded">
            {image.badge}
          </span>
        </div>
      )}
      {image.caption && (
        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          <span className="text-[11px] md:text-[12px] text-white/85 font-medium leading-tight">
            {image.caption}
          </span>
        </div>
      )}
    </button>
  );
}

function VideoEmbed({
  block,
  ctx,
  fallbackLabel,
}: {
  block: VideoBlock;
  ctx: Ctx;
  fallbackLabel?: string;
}) {
  const aBg = accentBg[ctx.accent];
  const aBorder = accentBorder[ctx.accent];
  const aText = accentText[ctx.accent];

  if (block.provider === "mp4" && block.src) {
    return (
      <div className="relative w-full aspect-video rounded-[14px] bg-[#0E0E0E] border border-[rgba(255,255,255,0.06)] overflow-hidden">
        <video
          src={encodePath(block.src)}
          poster={block.poster ? encodePath(block.poster) : undefined}
          controls
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    );
  }

  if (block.provider === "youtube" && block.src) {
    return (
      <div className="relative w-full aspect-video rounded-[14px] bg-black border border-[rgba(255,255,255,0.06)] overflow-hidden">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${block.src}?rel=0&modestbranding=1`}
          title={block.caption ?? "Video"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    );
  }

  if (block.provider === "loom" && block.src) {
    return (
      <div className="relative w-full aspect-video rounded-[14px] bg-black border border-[rgba(255,255,255,0.06)] overflow-hidden">
        <iframe
          src={`https://www.loom.com/embed/${block.src}`}
          title={block.caption ?? "Loom"}
          allow="fullscreen; clipboard-write"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-video rounded-[14px] bg-[#0E0E0E] border border-[rgba(255,255,255,0.06)] overflow-hidden">
      <div className={`absolute inset-x-0 top-0 h-[2px] ${aBg} opacity-30`} />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-6">
          <div
            className={`mx-auto mb-4 w-12 h-12 rounded-full flex items-center justify-center border ${aBorder} ${aText}`}
          >
            <span className="text-[18px] leading-none">▶</span>
          </div>
          <span className="block text-[10px] uppercase tracking-[3px] text-[rgba(255,255,255,0.35)] mb-2">
            {block.label ?? fallbackLabel ?? "Video"}
          </span>
          {block.caption && (
            <span className="block text-[14px] md:text-[15px] text-[rgba(255,255,255,0.55)] font-light leading-[1.6] max-w-[460px] mx-auto">
              {block.caption}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function aspectClass(
  aspect?: "video" | "portrait" | "square" | "tall",
): string {
  switch (aspect) {
    case "portrait":
      return "aspect-[3/4]";
    case "tall":
      return "aspect-[9/16]";
    case "square":
      return "aspect-square";
    case "video":
    default:
      return "aspect-video";
  }
}

function LoopVideo({
  src,
  caption,
  aspect = "video",
  audio = false,
}: {
  src: string;
  caption?: string;
  aspect?: "video" | "portrait" | "square" | "tall";
  audio?: boolean;
}) {
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  function toggleMute() {
    const next = !muted;
    setMuted(next);
    if (videoRef.current) {
      videoRef.current.muted = next;
      if (!next) {
        videoRef.current.play().catch(() => {});
      }
    }
  }

  return (
    <div
      className={`relative w-full ${aspectClass(aspect)} bg-[#0E0E0E] border border-[rgba(255,255,255,0.06)] rounded-[10px] overflow-hidden`}
    >
      <video
        ref={videoRef}
        src={encodePath(src)}
        muted={muted}
        loop
        playsInline
        autoPlay
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {audio && (
        <button
          type="button"
          onClick={toggleMute}
          aria-label={muted ? "Turn audio on" : "Turn audio off"}
          aria-pressed={!muted}
          className="absolute bottom-3 right-3 z-10 w-10 h-10 rounded-full bg-black/55 hover:bg-black/75 text-white border border-white/15 backdrop-blur-sm transition-colors flex items-center justify-center"
        >
          {muted ? (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
          ) : (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
            </svg>
          )}
        </button>
      )}
      {caption && (
        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/85 to-transparent pointer-events-none">
          <span className="text-[11px] md:text-[12px] text-white/85 font-medium">
            {caption}
          </span>
        </div>
      )}
    </div>
  );
}

function gridColsClass(cols: 2 | 3 | 4 | 5 | 6) {
  switch (cols) {
    case 2:
      return "grid-cols-2";
    case 3:
      return "grid-cols-2 md:grid-cols-3";
    case 4:
      return "grid-cols-2 md:grid-cols-4";
    case 5:
      return "grid-cols-2 md:grid-cols-5";
    case 6:
      return "grid-cols-3 md:grid-cols-6";
  }
}

function BlockRenderer({ block, ctx }: { block: Block; ctx: Ctx }) {
  const aBg = accentBg[ctx.accent];
  const aText = accentText[ctx.accent];
  const aBorder = accentBorder[ctx.accent];

  switch (block.kind) {
    case "intro":
      return (
        <Reveal>
          <section>
            {block.heading && (
              <h2
                className="text-[22px] md:text-[28px] font-semibold tracking-[-0.6px] md:tracking-[-0.8px] mb-5"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {block.heading}
              </h2>
            )}
            <div className="space-y-4">
              {block.body.map((p, i) => (
                <p
                  key={i}
                  className="text-[15px] md:text-[17px] text-[rgba(255,255,255,0.82)] font-normal leading-[1.75]"
                >
                  {p}
                </p>
              ))}
              {block.bullets && (
                <ul className="pt-2 space-y-3">
                  {block.bullets.map((b, k) => (
                    <li
                      key={k}
                      className="text-[15px] md:text-[17px] text-[rgba(255,255,255,0.78)] font-normal leading-[1.7] pl-5 relative"
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
      );

    case "phase":
      return (
        <Reveal>
          <section>
            <span
              className={`block text-[10px] md:text-[11px] uppercase tracking-[3px] font-mono ${aText} mb-3`}
            >
              {block.phase}
            </span>
            <h2
              className="text-[24px] md:text-[32px] font-semibold tracking-[-0.8px] md:tracking-[-1px] mb-5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {block.heading}
            </h2>
            {block.body && (
              <div className="space-y-4 max-w-[680px]">
                {block.body.map((p, i) => (
                  <p
                    key={i}
                    className="text-[15px] md:text-[17px] text-[rgba(255,255,255,0.82)] font-normal leading-[1.75]"
                  >
                    {p}
                  </p>
                ))}
              </div>
            )}
            {block.bullets && (
              <ul className="pt-3 space-y-3 max-w-[720px]">
                {block.bullets.map((b, k) => (
                  <li
                    key={k}
                    className="text-[15px] md:text-[17px] text-[rgba(255,255,255,0.78)] font-normal leading-[1.7] pl-5 relative"
                  >
                    <span
                      className={`absolute left-0 top-[12px] w-2.5 h-[2px] ${aBg}`}
                    />
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </section>
        </Reveal>
      );

    case "stepGrid":
      return (
        <div
          className={`grid grid-cols-1 ${
            block.steps.length === 2
              ? "md:grid-cols-2"
              : block.steps.length === 4
                ? "md:grid-cols-2 lg:grid-cols-4"
                : "md:grid-cols-3"
          } gap-4 md:gap-5`}
        >
          {block.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.06}>
              <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-[14px] p-5 h-full flex flex-col">
                {step.image && (
                  <div className="relative w-full aspect-[4/3] rounded-[10px] bg-[#111] border border-[rgba(255,255,255,0.05)] overflow-hidden mb-4">
                    <Image
                      src={encodePath(step.image)}
                      alt={step.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                )}
                <span
                  className={`text-[10px] uppercase tracking-[2px] font-mono ${aText} mb-2`}
                >
                  Step {i + 1}
                </span>
                <h3
                  className="text-[17px] md:text-[18px] font-semibold tracking-[-0.3px] mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {step.title}
                </h3>
                <p className="text-[14px] md:text-[15px] text-[rgba(255,255,255,0.75)] font-normal leading-[1.7]">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      );

    case "modeRow": {
      const reverse = !!block.reverse;
      return (
        <Reveal>
          <div
            className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
              reverse ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="space-y-4">
              <span
                className={`block text-[10px] md:text-[11px] uppercase tracking-[3px] font-mono ${aText}`}
              >
                {block.eyebrow}
              </span>
              <h3
                className="text-[22px] md:text-[26px] font-semibold tracking-[-0.6px]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {block.heading}
              </h3>
              {block.body.map((p, i) => (
                <p
                  key={i}
                  className="text-[15px] md:text-[17px] text-[rgba(255,255,255,0.82)] font-normal leading-[1.75]"
                >
                  {p}
                </p>
              ))}
            </div>
            <div>
              {block.image && (
                <ImageTile
                  image={block.image}
                  alt={block.heading}
                  aspect="video"
                  ctx={ctx}
                />
              )}
              {block.images && (
                <div
                  className={`grid ${gridColsClass(
                    Math.min(3, block.images.length) as 2 | 3,
                  )} gap-2`}
                >
                  {block.images.map((img, i) => (
                    <ImageTile
                      key={i}
                      image={img}
                      alt={img.caption ?? block.heading}
                      aspect="square"
                      ctx={ctx}
                    />
                  ))}
                </div>
              )}
              {block.video && <VideoEmbed block={block.video} ctx={ctx} />}
            </div>
          </div>
        </Reveal>
      );
    }

    case "imageGrid": {
      const cols = block.cols ?? 3;
      return (
        <div>
          {(block.heading || block.note) && (
            <Reveal>
              <div className="mb-5">
                {block.heading && (
                  <h3
                    className="text-[18px] md:text-[22px] font-semibold tracking-[-0.5px] mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {block.heading}
                  </h3>
                )}
                {block.note && (
                  <p className="text-[13px] md:text-[14px] text-[rgba(255,255,255,0.5)] font-normal leading-[1.7] max-w-[620px]">
                    {block.note}
                  </p>
                )}
              </div>
            </Reveal>
          )}
          <div className={`grid ${gridColsClass(cols)} gap-3`}>
            {block.images.map((img, i) => (
              <Reveal key={i} delay={Math.min(i, 6) * 0.04}>
                <ImageTile
                  image={img}
                  alt={img.caption ?? `Image ${i + 1}`}
                  aspect={block.aspect ?? "video"}
                  ctx={ctx}
                />
              </Reveal>
            ))}
          </div>
        </div>
      );
    }

    case "avatarRow":
      return (
        <div>
          {block.heading && (
            <Reveal>
              <h3
                className="text-[16px] md:text-[18px] font-medium tracking-[-0.3px] text-center mb-6 text-white/85"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {block.heading}
              </h3>
            </Reveal>
          )}
          <div className="flex flex-wrap justify-center gap-5 md:gap-7">
            {block.avatars.map((a, i) => (
              <Reveal key={a.label} delay={i * 0.06}>
                <div className="flex flex-col items-center gap-2">
                  <button
                    type="button"
                    onClick={() => ctx.openLightbox(encodePath(a.src), a.label)}
                    className="relative w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.35)] transition-colors duration-300 bg-[#111]"
                  >
                    <Image
                      src={encodePath(a.src)}
                      alt={a.label}
                      fill
                      sizes="120px"
                      className="object-cover object-top"
                    />
                  </button>
                  <span className="text-[11px] md:text-[12px] uppercase tracking-[1.5px] text-[rgba(255,255,255,0.55)] font-medium">
                    {a.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      );

    case "video":
      return (
        <Reveal>
          <div>
            {block.heading && (
              <h3
                className="text-[18px] md:text-[22px] font-semibold tracking-[-0.5px] mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {block.heading}
              </h3>
            )}
            <VideoEmbed block={block} ctx={ctx} />
          </div>
        </Reveal>
      );

    case "comparison":
      return (
        <div>
          {block.heading && (
            <Reveal>
              <h3
                className="text-[18px] md:text-[22px] font-semibold tracking-[-0.5px] mb-5 text-center"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {block.heading}
              </h3>
            </Reveal>
          )}
          <div className="space-y-8">
            {block.pairs.map((pair, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="grid grid-cols-2 gap-3 md:gap-4 max-w-[820px] mx-auto">
                  <div className="space-y-2">
                    <ImageTile
                      image={pair.before}
                      alt={pair.before.label ?? "Before"}
                      aspect="video"
                      ctx={ctx}
                    />
                    <p
                      className={`text-center text-[11px] md:text-[12px] uppercase tracking-[2px] font-mono ${aText}`}
                    >
                      {pair.before.label ?? "Before"}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <ImageTile
                      image={pair.after}
                      alt={pair.after.label ?? "After"}
                      aspect="video"
                      ctx={ctx}
                    />
                    <p
                      className={`text-center text-[11px] md:text-[12px] uppercase tracking-[2px] font-mono ${aText}`}
                    >
                      {pair.after.label ?? "After"}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      );

    case "darkFeatures":
      return (
        <Reveal>
          <section className="bg-[#070707] border border-[rgba(255,255,255,0.05)] rounded-[18px] p-7 md:p-12">
            {block.phase && (
              <span
                className={`block text-[10px] md:text-[11px] uppercase tracking-[3px] font-mono ${aText} mb-3`}
              >
                {block.phase}
              </span>
            )}
            <h2
              className="text-[22px] md:text-[28px] font-semibold tracking-[-0.6px] mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {block.heading}
            </h2>
            {block.subheading && (
              <p className="text-[14px] md:text-[16px] text-[rgba(255,255,255,0.7)] font-normal leading-[1.7] mb-8 max-w-[640px]">
                {block.subheading}
              </p>
            )}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {block.features.map((f) => (
                <div key={f.title} className="flex items-start gap-4">
                  <span
                    className={`mt-2 w-2 h-2 rounded-full ${aBg} shrink-0`}
                  />
                  <div className="space-y-1.5">
                    <h3 className="text-[15px] md:text-[17px] font-semibold text-white">
                      {f.title}
                    </h3>
                    <p className="text-[13px] md:text-[15px] text-[rgba(255,255,255,0.72)] font-normal leading-[1.7]">
                      {f.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Reveal>
      );

    case "pullQuote":
      return (
        <Reveal>
          <blockquote className={`border-l-2 ${aBorder} pl-6 md:pl-8 py-2`}>
            <p
              className="text-[20px] md:text-[26px] font-medium tracking-[-0.4px] text-white/90 leading-[1.4]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {block.quote}
            </p>
            {block.attribution && (
              <p className="mt-3 text-[12px] md:text-[13px] uppercase tracking-[2px] text-[rgba(255,255,255,0.45)] font-mono">
                {block.attribution}
              </p>
            )}
          </blockquote>
        </Reveal>
      );

    case "stats":
      return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {block.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.04}>
              <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-[12px] p-5">
                <div
                  className={`text-[26px] md:text-[32px] font-bold tracking-[-1px] mb-1 ${aText}`}
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {stat.value}
                </div>
                <div className="text-[10px] md:text-[11px] uppercase tracking-[2px] text-[rgba(255,255,255,0.5)]">
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      );

    case "fullImage":
      return (
        <Reveal>
          <ImageTile
            image={{ src: block.src, caption: block.caption }}
            alt={block.caption ?? "Image"}
            aspect="auto"
            ctx={ctx}
            className="aspect-auto"
          />
        </Reveal>
      );

    case "videoGrid":
      return (
        <div>
          {block.heading && (
            <Reveal>
              <div className="mb-5">
                <h3
                  className="text-[18px] md:text-[22px] font-semibold tracking-[-0.5px] mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {block.heading}
                </h3>
                {block.note && (
                  <p className="text-[13px] md:text-[14px] text-[rgba(255,255,255,0.5)] font-normal leading-[1.7] max-w-[620px]">
                    {block.note}
                  </p>
                )}
              </div>
            </Reveal>
          )}
          <div className={`grid ${gridColsClass(block.cols ?? 3)} gap-3`}>
            {block.videos.map((v, i) => (
              <Reveal key={i} delay={Math.min(i, 6) * 0.04}>
                <LoopVideo
                  src={v.src}
                  caption={v.caption}
                  aspect={block.aspect ?? "video"}
                  audio={block.audio}
                />
              </Reveal>
            ))}
          </div>
        </div>
      );

    case "pipelineRow":
      return (
        <Reveal>
          <section>
            {block.phase && (
              <span
                className={`block text-[10px] md:text-[11px] uppercase tracking-[3px] font-mono ${aText} mb-3`}
              >
                {block.phase}
              </span>
            )}
            {block.heading && (
              <h2
                className="text-[24px] md:text-[32px] font-semibold tracking-[-0.8px] md:tracking-[-1px] mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {block.heading}
              </h2>
            )}
            {block.subheading && (
              <p className="text-[15px] md:text-[16px] text-[rgba(255,255,255,0.7)] font-normal leading-[1.7] max-w-[680px] mb-8">
                {block.subheading}
              </p>
            )}
            <div
              className={`grid grid-cols-2 ${
                block.steps.length === 3
                  ? "md:grid-cols-3"
                  : block.steps.length === 4
                    ? "md:grid-cols-4"
                    : "md:grid-cols-5"
              } gap-3 md:gap-4`}
            >
              {block.steps.map((step, i) => (
                <Reveal key={step.title} delay={i * 0.06}>
                  <div className="relative bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] rounded-[14px] p-5 h-full">
                    <span
                      className={`block text-[10px] uppercase tracking-[2px] font-mono ${aText} mb-2`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3
                      className="text-[15px] md:text-[16px] font-semibold tracking-[-0.3px] mb-1.5 text-white/90"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-[12px] md:text-[13px] text-[rgba(255,255,255,0.6)] font-normal leading-[1.55] uppercase tracking-[1px]">
                      {step.sub}
                    </p>
                    {i < block.steps.length - 1 && (
                      <span
                        className={`hidden md:block absolute top-1/2 -right-2 w-3 h-px ${aBg} opacity-40`}
                      />
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        </Reveal>
      );

    case "pathPair":
      return (
        <Reveal>
          <section>
            {block.phase && (
              <span
                className={`block text-[10px] md:text-[11px] uppercase tracking-[3px] font-mono ${aText} mb-3`}
              >
                {block.phase}
              </span>
            )}
            {block.heading && (
              <h2
                className="text-[24px] md:text-[32px] font-semibold tracking-[-0.8px] md:tracking-[-1px] mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {block.heading}
              </h2>
            )}
            {block.subheading && (
              <p className="text-[15px] md:text-[16px] text-[rgba(255,255,255,0.7)] font-normal leading-[1.7] max-w-[680px] mb-8">
                {block.subheading}
              </p>
            )}
            <div className="grid md:grid-cols-2 gap-4 md:gap-5">
              {[block.left, block.right].map((side, i) => (
                <Reveal key={side.title} delay={i * 0.08}>
                  <div
                    className={`rounded-[14px] p-6 md:p-8 h-full border ${
                      side.tone === "dark"
                        ? "bg-[#070707] border-[rgba(255,255,255,0.08)]"
                        : "bg-[rgba(255,255,255,0.04)] border-[rgba(255,255,255,0.08)]"
                    }`}
                  >
                    <span
                      className={`block text-[10px] uppercase tracking-[2.5px] font-mono ${aText} mb-3`}
                    >
                      Path 0{i + 1}
                    </span>
                    <h3
                      className="text-[20px] md:text-[24px] font-semibold tracking-[-0.5px] mb-3"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {side.title}
                    </h3>
                    <p
                      className={`text-[14px] md:text-[15px] font-normal leading-[1.7] ${
                        side.tone === "dark"
                          ? "text-white/65"
                          : "text-[rgba(255,255,255,0.7)]"
                      }`}
                    >
                      {side.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        </Reveal>
      );

    case "spacer":
      return null;

    case "aspectCompare":
      return (
        <Reveal>
          <section>
            {block.heading && (
              <h3
                className="text-[18px] md:text-[22px] font-semibold tracking-[-0.5px] mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {block.heading}
              </h3>
            )}
            {block.note && (
              <p className="text-[13px] md:text-[14px] text-[rgba(255,255,255,0.55)] font-normal leading-[1.7] max-w-[640px] mb-7">
                {block.note}
              </p>
            )}
            <div className="space-y-7 md:space-y-9">
              {block.items.map((item, i) => {
                const accent = item.tone === "accent";
                return (
                  <Reveal key={i} delay={i * 0.08}>
                    <div>
                      <div className="flex items-baseline gap-3 mb-3 flex-wrap">
                        <span
                          className={`font-mono text-[14px] md:text-[16px] tracking-[2px] ${
                            accent ? aText : "text-white/55"
                          }`}
                        >
                          {item.ratio}
                        </span>
                        <span
                          className={`text-[13px] md:text-[15px] font-medium ${
                            accent ? "text-white" : "text-white/65"
                          }`}
                        >
                          {item.label}
                        </span>
                        {item.sub && (
                          <span className="font-mono text-[11px] md:text-[12px] text-[rgba(255,255,255,0.4)] tracking-[1.5px]">
                            {item.sub}
                          </span>
                        )}
                      </div>
                      <div className="w-full overflow-x-auto">
                        <div
                          aria-hidden
                          className={`rounded-[6px] flex items-center justify-center font-mono text-[11px] md:text-[12px] tracking-[2px] ${
                            accent
                              ? `border-2 ${aBorder} ${aText}`
                              : "border border-white/20 text-white/40"
                          }`}
                          style={{
                            height: "clamp(48px, 8vw, 80px)",
                            aspectRatio: `${item.w} / ${item.h}`,
                          }}
                        >
                          {item.ratio}
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </section>
        </Reveal>
      );

    case "arrow":
      return (
        <Reveal>
          <div className="flex items-center justify-center gap-4 md:gap-5 -my-6 md:-my-10">
            <span
              aria-hidden
              className="flex-1 h-px bg-[rgba(255,255,255,0.12)] max-w-[180px] md:max-w-[240px]"
            />
            <span
              className={`flex items-center gap-2 text-[10px] md:text-[11px] uppercase tracking-[3px] font-mono ${aText} whitespace-nowrap`}
            >
              {block.label ?? "Next"}
              <span aria-hidden className="text-[13px] leading-none">
                ↓
              </span>
            </span>
            <span
              aria-hidden
              className="flex-1 h-px bg-[rgba(255,255,255,0.12)] max-w-[180px] md:max-w-[240px]"
            />
          </div>
        </Reveal>
      );
  }
}

export default function PostPageContent({ post }: { post: Post }) {
  const aText = accentText[post.card.accent];
  const [lightbox, setLightbox] = useState<{ src: string; alt?: string } | null>(
    null,
  );

  const open = useCallback((src: string, alt?: string) => {
    setLightbox({ src, alt });
  }, []);
  const close = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    if (!lightbox) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close]);

  const ctx: Ctx = { accent: post.card.accent, openLightbox: open };

  return (
    <article className="pt-24 md:pt-36 pb-16 md:pb-[100px] px-5 md:px-10 max-w-[1100px] mx-auto">
      <Reveal>
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[2.5px] text-[rgba(255,255,255,0.45)] hover:text-white transition-colors mb-8 md:mb-10"
        >
          <span className="text-[14px] leading-none">←</span>
          <span>Back to Work</span>
        </Link>
      </Reveal>

      <div className="max-w-[820px]">
        <Reveal delay={0.06}>
          <span
            className={`block text-[11px] uppercase tracking-[3px] mb-4 ${aText}`}
          >
            {post.hero.eyebrow}
          </span>
        </Reveal>

        <Reveal delay={0.12}>
          <h1
            className="text-[36px] sm:text-[44px] md:text-[64px] font-bold tracking-[-1.5px] md:tracking-[-2.5px] leading-[1.04] mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {post.hero.headline}
          </h1>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="text-[16px] md:text-[19px] text-[rgba(255,255,255,0.82)] font-normal leading-[1.65] max-w-[680px]">
            {post.hero.sub}
          </p>
        </Reveal>
      </div>

      {post.heroVideo && (
        <Reveal delay={0.24}>
          <div className="mt-10 md:mt-14">
            <VideoEmbed
              block={post.heroVideo}
              ctx={ctx}
              fallbackLabel="Final film"
            />
          </div>
        </Reveal>
      )}

      {post.loomVideo && (
        <Reveal delay={post.heroVideo ? 0.06 : 0.24}>
          <div className={post.heroVideo ? "mt-6" : "mt-10 md:mt-14"}>
            <VideoEmbed
              block={post.loomVideo}
              ctx={ctx}
              fallbackLabel="Loom intro"
            />
          </div>
        </Reveal>
      )}

      <div className="mt-14 md:mt-20 space-y-14 md:space-y-20">
        {post.blocks.map((block, i) => (
          <BlockRenderer key={i} block={block} ctx={ctx} />
        ))}
      </div>

<Reveal delay={0.06}>
        <div className="mt-14 md:mt-20 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-[16px] p-6 md:p-10">
          <h3
            className="text-[22px] md:text-[28px] font-semibold tracking-[-0.5px] mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {post.cta.headline}
          </h3>
          <p className="text-[14px] md:text-[17px] text-[rgba(255,255,255,0.78)] font-normal leading-[1.7] mb-6 max-w-[620px]">
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

      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
          onClick={close}
        >
          <Image
            src={lightbox.src}
            alt={lightbox.alt ?? "Expanded"}
            width={1800}
            height={1200}
            unoptimized
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}
    </article>
  );
}
