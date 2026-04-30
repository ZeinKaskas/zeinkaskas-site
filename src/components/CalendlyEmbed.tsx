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
  const src = `${url}?embed_domain=zeinkaskas.com&embed_type=Inline&hide_gdpr_banner=1&background_color=0A0A0A&text_color=ffffff&primary_color=ffffff`;
  return (
    <iframe
      src={src}
      title="Schedule a meeting"
      className={`w-full border-0 ${className}`}
      style={{ minWidth: 320, height }}
    />
  );
}
