import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../ui/Button';
import logo from '../../assets/restogo-logo.webp';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/service-areas', label: 'Service Areas' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const linkCls = ({ isActive }: { isActive: boolean }) =>
  `text-sm font-semibold transition-colors ${isActive ? 'text-primary' : 'text-heading hover:text-primary'}`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border-soft bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-2.5">
        <NavLink to="/" className="flex shrink-0 items-center gap-2" onClick={() => setOpen(false)}>
          <img src={logo} alt="" className="h-8 w-8" />
          <span className="font-display text-lg font-bold tracking-tight text-heading">RESTOGO</span>
        </NavLink>
        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkCls} end={l.to === '/'}>
              {l.label}
            </NavLink>
          ))}
        </nav>
        {/* Persistent app CTA — the #1 secondary job of the site */}
        <div className="hidden md:block">
          <Button to="/contact#order-app" variant="primary" className="px-4 py-2">
            Order on the App
          </Button>
        </div>
        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-md text-heading md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span aria-hidden className="text-xl">{open ? '✕' : '☰'}</span>
        </button>
      </div>
      {open && (
        <nav className="border-t border-border-soft bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 text-sm font-semibold ${isActive ? 'bg-bg-tint text-primary' : 'text-heading'}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Button to="/contact#order-app" variant="primary" className="mt-2 w-full">
              Order on the App
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
