import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/restogo-logo.webp';
import Button from '../ui/Button';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/our-process', label: 'Our Process' },
  { to: '/contact', label: 'Contact' },
];

const linkClasses = ({ isActive }) =>
  `text-sm font-semibold transition-colors ${
    isActive ? 'text-primary' : 'text-heading hover:text-primary'
  }`;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border-soft bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2.5">
        <NavLink to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img src={logo} alt="Restogo" className="h-8 w-8" />
          <span className="text-xl font-bold text-heading">RESTOGO</span>
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClasses} end={link.to === '/'}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button to="/contact" variant="primary" className="px-3.5 py-1.5 text-sm">
            Talk to Sales
          </Button>
        </div>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-md text-heading md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="text-2xl">{open ? '✕' : '☰'}</span>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border-soft bg-white px-6 py-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-md px-3 py-2 text-sm font-semibold ${
                  isActive ? 'bg-bg-tint text-primary' : 'text-heading'
                }`
              }
              end={link.to === '/'}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <Button to="/contact" variant="primary" className="mt-2 w-full" onClick={() => setOpen(false)}>
            Talk to Sales
          </Button>
        </nav>
      )}
    </header>
  );
}
