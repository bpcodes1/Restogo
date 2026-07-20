const PLACEHOLDER_LOGOS = Array.from({ length: 6 }, (_, i) => ({
  name: `Partner ${i + 1}`,
}));

export default function LogoMarquee({ logos = PLACEHOLDER_LOGOS }) {
  const track = [...logos, ...logos];

  return (
    <div className="overflow-hidden bg-white py-10">
      <div className="group overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-16 group-hover:[animation-play-state:paused]">
          {track.map((logo, i) => (
            <div key={`${logo.name}-${i}`} className="flex h-14 w-32 shrink-0 items-center justify-center">
              {logo.src ? (
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-12 max-w-full object-contain"
                />
              ) : (
                <div className="flex h-12 w-28 items-center justify-center rounded-md border-2 border-dashed border-border-soft text-xs font-medium text-text-muted">
                  {logo.name}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
