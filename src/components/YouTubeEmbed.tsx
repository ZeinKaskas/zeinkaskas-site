type Props = {
  videoId: string;
  title?: string;
  className?: string;
};

export default function YouTubeEmbed({
  videoId,
  title = "Video",
  className = "",
}: Props) {
  return (
    <div
      className={`relative w-full aspect-video rounded-[14px] overflow-hidden border border-[rgba(255,255,255,0.06)] bg-black ${className}`}
    >
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}
