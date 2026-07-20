interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-2xl ${alignment} mb-12`}>
      {eyebrow && (
        <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wide text-accent">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold text-heading sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-lg text-text-muted">{description}</p>
      )}
    </div>
  );
}
