import { Link } from 'react-router-dom';
import logo from '../../assets/restogo-logo.webp';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/our-process', label: 'Our Process' },
  { to: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Restogo" className="h-9 w-9" />
            <span className="text-lg font-bold text-white">RESTOGO</span>
          </Link>
          <p className="mt-4 text-sm">
            Custom-designed, sustainable restaurant packaging — cups, containers, boxes,
            and disposable cutlery.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
            Navigate
          </h4>
          <ul className="space-y-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
            Contact
          </h4>
          <ul className="space-y-2 text-sm">
            <li>[phone number]</li>
            <li>[email address]</li>
            <li>[service area / address]</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
            A division of
          </h4>
          <p className="text-sm">Ray&apos;s Produce Inc.</p>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-6 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Restogo. All rights reserved.
      </div>
    </footer>
  );
}
