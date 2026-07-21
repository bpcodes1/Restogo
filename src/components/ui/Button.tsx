import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

type Props = {
  variant?: 'primary' | 'outline' | 'navy';
  className?: string;
  children: ReactNode;
  to?: string;
  href?: string;
  type?: 'submit';
};

const styles = {
  primary: 'bg-primary text-white hover:bg-accent active:translate-y-px',
  outline: 'border border-border-soft bg-white text-heading hover:border-accent hover:text-primary',
  navy: 'bg-primary-dark text-white hover:bg-primary active:translate-y-px',
};

export default function Button({ variant = 'primary', className = '', children, to, href, type }: Props) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition-colors whitespace-nowrap ${styles[variant]} ${className}`;
  if (to) return <Link to={to} className={cls}>{children}</Link>;
  if (href) {
    const external = href.startsWith('http');
    return (
      <a href={href} className={cls} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        {children}
      </a>
    );
  }
  return <button type={type ?? 'submit'} className={cls}>{children}</button>;
}
