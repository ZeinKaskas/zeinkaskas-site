"use client";

import { useEffect, useState } from "react";

type Props = {
  url: string;
  height?: number;
  className?: string;
};

export default function CalendlyEmbed({
  url,
  height = 700,
  className = "",
}: Props) {
  const [h, setH] = useState<number>(height);

  useEffect(() => {
    const update = () => {
      // Calendly's inline UI stacks taller on narrow screens.
      if (window.matchMedia("(max-width: 480px)").matches) setH(1100);
      else if (window.matchMedia("(max-width: 768px)").matches) setH(900);
      else setH(height);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [height]);

  const src = `${url}?embed_domain=zeinkaskas.com&embed_type=Inline&hide_gdpr_banner=1&background_color=0A0A0A&text_color=ffffff&primary_color=ffffff`;
  return (
    <iframe
      src={src}
      title="Schedule a meeting"
      className={`w-full border-0 ${className}`}
      style={{ minWidth: 280, height: h }}
    />
  );
}
