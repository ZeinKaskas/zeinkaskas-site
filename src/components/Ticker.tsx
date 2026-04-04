"use client";

const ITEMS = [
  "AI Consulting",
  "Workflow Automation",
  "Video Production",
  "System Architecture",
  "Content Systems",
  "Team Training",
  "Custom Integrations",
  "AI Production",
];

function TickerSet() {
  return (
    <div className="flex items-center shrink-0">
      {ITEMS.map((item, i) => (
        <div key={i} className="flex items-center">
          <span
            className="text-[11px] font-semibold tracking-[3px] uppercase text-[rgba(255,255,255,0.12)] whitespace-nowrap"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {item}
          </span>
          <span className="w-[3px] h-[3px] bg-[rgba(255,255,255,0.1)] rounded-full mx-[22px] shrink-0" />
        </div>
      ))}
    </div>
  );
}

export default function Ticker() {
  return (
    <div className="overflow-hidden whitespace-nowrap py-4 border-b border-[rgba(255,255,255,0.04)]">
      <div
        className="flex w-max"
        style={{ animation: "ticker-scroll 30s linear infinite" }}
      >
        <TickerSet />
        <TickerSet />
      </div>
    </div>
  );
}
