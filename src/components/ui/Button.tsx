import type { MouseEventHandler, ReactNode } from 'react';
import { Link } from 'react-router-dom';

type ButtonVariant = 'primary' | 'accent' | 'outline' | 'ghost' | 'outline-dark';

interface ButtonProps {
  to?: string;
  href?: string;
  variant?: ButtonVariant;
  rounded?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: MouseEventHandler;
  children: ReactNode;
}

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-white hover:bg-primary-dark',
  accent: 'bg-accent text-white hover:bg-primary-dark',
  outline: 'border border-white text-white hover:bg-white hover:text-primary-dark',
  ghost: 'border border-primary text-primary hover:bg-bg-tint',
  'outline-dark': 'border-2 border-black bg-white text-primary-dark hover:bg-bg-tint',
};

export default function Button({
  to,
  href,
  variant = 'primary',
  rounded = 'rounded-full',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center ${rounded} px-6 py-3 font-semibold transition-colors duration-150 ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
