"use client";

import Image from "next/image";
import Reveal from "./Reveal";

const brands = [
  { name: "Samsung", logo: "/logos/samsung.png", w: 140 },
  { name: "Google", logo: "/logos/google.svg", w: 96 },
  { name: "Figma", logo: "/logos/figma.svg", w: 96 },
  { name: "Meena Health", logo: "/logos/meena.svg", w: 110 },
  { name: "Burjeel Holdings", logo: "/logos/burjeel.png", w: 80 },
  { name: "Mashreq Bank", logo: "/logos/mashreq.png", w: 160 },
  { name: "Ministry of Defense KSA", logo: "/logos/mod-ksa.png", w: 80 },
  { name: "Weavy", logo: "/logos/weavy.png", w: 110 },
  { name: "Northern & Shell", logo: "/logos/northern-shell.png", w: 64 },
  { name: "Downy", logo: "/logos/downy.png", w: 72 },
  { name: "Afia", logo: "/logos/afia.png", w: 68 },
  { name: "PLAAY", logo: "/logos/plaay.png", w: 110 },
  { name: "Bambuyu", logo: "/logos/bambuyu.png", w: 120 },
  { name: "Alpro", logo: "/logos/alpro.png", w: 80 },
  { name: "Ferrero Rocher", logo: "/logos/ferrero-rocher.png", w: 100 },
  { name: "Chevrolet", logo: "/logos/chevrolet.png", w: 120 },
  { name: "Homegrown Ventures", logo: "/logos/homegrown-ventures.png", w: 72 },
  // TODO: source logo files for these two before going live.
  // The brands are confirmed clients but logo assets are not in /public/logos/ yet.
  // { name: "Quaker", logo: "/logos/quaker.png", w: 100 },
  // { name: "Cheetos", logo: "/logos/cheetos.png", w: 110 },
];

export default function TrustedBy() {
  return (
    <div className="text-center py-12 md:py-16 px-5 md:px-10 border-t border-b border-[rgba(255,255,255,0.04)]">
      <Reveal>
        <span className="block text-[11px] uppercase tracking-[3px] text-[rgba(255,255,255,0.2)] mb-10">
          Trusted by
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-6 md:gap-x-10 md:gap-y-8 max-w-[860px] mx-auto px-2 md:px-4">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center justify-center opacity-50 hover:opacity-80 transition-opacity duration-300"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={brand.w}
                height={60}
                style={{
                  width: `min(${brand.w}px, 30vw)`,
                  height: "auto",
                }}
                unoptimized
              />
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
