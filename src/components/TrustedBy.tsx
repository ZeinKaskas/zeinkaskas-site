"use client";

import Reveal from "./Reveal";

const brands = [
  "Samsung",
  "Downy",
  "Northern & Shell",
  "Afia",
  "Ministry of Defense KSA",
  "Mashreq Bank",
  "PLAAY",
  "Bambuyu",
  "Weavy",
];

export default function TrustedBy() {
  return (
    <div className="text-center py-14 px-10 border-t border-b border-[rgba(255,255,255,0.04)]">
      <Reveal>
        <span className="block text-[11px] uppercase tracking-[3px] text-[rgba(255,255,255,0.2)] mb-6">
          Trusted by
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <div className="flex justify-center items-center gap-9 flex-wrap">
          {brands.map((brand) => (
            <span
              key={brand}
              className="text-[13px] font-medium text-[rgba(255,255,255,0.25)] whitespace-nowrap"
            >
              {brand}
            </span>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
