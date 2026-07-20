import type { ReactNode } from 'react';

interface CardProps {
  icon?: ReactNode;
  title?: string;
  children: ReactNode;
  className?: string;
}

export default function Card({ icon, title, children, className = '' }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-border-soft bg-bg-soft p-6 shadow-sm ${className}`}
    >
      {icon && (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-bg-tint text-2xl text-primary">
          {icon}
        </div>
      )}
      {title && <h3 className="mb-2 text-xl font-semibold text-heading">{title}</h3>}
      <div className="text-text-muted">{children}</div>
    </div>
  );
}
