import { Link } from 'react-router-dom';
import { APP_ANDROID, APP_IOS } from '../../lib/app-links';
import logo from '../../assets/restogo-logo.webp';

// Ft4 dense typographic — utilitarian, information-first. No social row (none exist).
export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white/80">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-wrap items-start justify-between gap-10">
          <div className="max-w-xs">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="" className="h-8 w-8 rounded-full bg-white" />
              <span className="font-display text-lg font-bold text-white">RESTOGO</span>
            </Link>
            <p className="mt-3 text-sm">
              All your restaurant needs — containers, cups, foil, gloves, and cleaning
              supplies across the Pacific Northwest.
            </p>
          </div>
          <dl className="grid grid-cols-2 gap-x-12 gap-y-6 text-sm sm:grid-cols-3">
            <div>
              <dt className="mb-2 font-mono text-xs tracking-wide text-white/50 uppercase">Site</dt>
              <dd className="flex flex-col gap-1.5">
                <Link className="hover:text-white" to="/products">Products</Link>
                <Link className="hover:text-white" to="/service-areas">Service Areas</Link>
                <Link className="hover:text-white" to="/about">About</Link>
                <Link className="hover:text-white" to="/contact">Contact</Link>
              </dd>
            </div>
            <div>
              <dt className="mb-2 font-mono text-xs tracking-wide text-white/50 uppercase">Order</dt>
              <dd className="flex flex-col gap-1.5">
                <a className="hover:text-white" href={APP_IOS} target="_blank" rel="noopener noreferrer">iPhone app</a>
                <a className="hover:text-white" href={APP_ANDROID} target="_blank" rel="noopener noreferrer">Android app</a>
              </dd>
            </div>
            <div>
              <dt className="mb-2 font-mono text-xs tracking-wide text-white/50 uppercase">Company</dt>
              <dd className="flex flex-col gap-1.5">
                <span>Salem, Oregon</span>
                <span>Mon–Fri 9:00–5:00</span>
                <a className="hover:text-white" href="https://raysproduce.com" target="_blank" rel="noopener noreferrer">
                  A Ray&apos;s Produce company ↗
                </a>
              </dd>
            </div>
          </dl>
        </div>
        <p className="mt-10 border-t border-white/10 pt-5 font-mono text-xs text-white/50">
          © {new Date().getFullYear()} Restogo · Salem, Oregon
        </p>
      </div>
    </footer>
  );
}
