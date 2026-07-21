type Logo = { name: string; src: string };

// Continuous logo strip — list rendered twice for a seamless loop.
// transform-only animation; global prefers-reduced-motion rule freezes it,
// which still reads as a static logo row.
export default function LogoMarquee({ logos }: { logos: Logo[] }) {
  const row = (ariaHidden: boolean) => (
    <div aria-hidden={ariaHidden} className="flex shrink-0 items-center gap-14 pr-14">
      {logos.map((l) => (
        <img
          key={l.name}
          src={l.src}
          alt={ariaHidden ? '' : l.name}
          title={l.name}
          className="h-10 w-auto max-w-32 object-contain sm:h-12"
        />
      ))}
    </div>
  );
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="flex w-max animate-marquee">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
