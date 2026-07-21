type Props = { eyebrow: string; title: string; description?: string };

export default function PageHero({ eyebrow, title, description }: Props) {
  return (
    <section className="border-b border-border-soft bg-bg-soft px-6 py-14">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs tracking-widest text-text-muted uppercase">{eyebrow}</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight">{title}</h1>
        {description && <p className="mt-4 max-w-2xl text-lg text-text-muted">{description}</p>}
      </div>
    </section>
  );
}
