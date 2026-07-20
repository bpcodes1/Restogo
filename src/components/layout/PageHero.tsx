interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="bg-primary-dark px-6 py-20 text-center text-white">
      {eyebrow && (
        <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wide text-white/70">
          {eyebrow}
        </span>
      )}
      <h1 className="text-4xl font-bold sm:text-5xl">{title}</h1>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">{description}</p>
      )}
    </section>
  );
}
