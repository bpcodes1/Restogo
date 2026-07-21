import { Head } from 'vite-react-ssg';
import Button from '../components/ui/Button';
import { APP_ANDROID, APP_IOS } from '../lib/app-links';
import heroImg from '../assets/products/portfolio-home-RESTOGO-alm.webp';
import containersImg from '../assets/products/16.webp';
import cupsImg from '../assets/products/4.webp';
import foilImg from '../assets/products/5.webp';
import traysImg from '../assets/products/22.webp';
import glovesImg from '../assets/products/portfolio-home-RTG-gt.webp';
import cleanersImg from '../assets/products/portfolio-home-CLEANERS-1.webp';
import raysLogo from '../assets/rays_logo_color.webp';
import aguasFrescas from '../assets/brands/aguas_frescas_de_mexico.png';
import alpine from '../assets/brands/alpine.png';
import cocaCola from '../assets/brands/coca_cola.png';
import dairyFresh from '../assets/brands/dairy_fresh_northwest.webp';
import dairygold from '../assets/brands/dairygold.webp';
import eastsideMeats from '../assets/brands/eastside_meats.png';
import embasa from '../assets/brands/embasa.png';
import ibp from '../assets/brands/ibp.png';
import laMorenita from '../assets/brands/la_morenita.webp';
import oleMexican from '../assets/brands/ole_mexican_foods.webp';
import primaterra from '../assets/brands/primaterra.webp';
import productosReal from '../assets/brands/productos_real.png';
import riceland from '../assets/brands/riceland.svg';
import viva from '../assets/brands/viva.png';

const CATEGORIES = [
  { title: 'Containers & Clamshells', img: containersImg, blurb: 'Hinged containers in plastic and plant fiber — single and multi-compartment.' },
  { title: 'Cups & Lids', img: cupsImg, blurb: 'Hot and cold cups with matching lids, from portion cups to large drinks.' },
  { title: 'Foil & Aluminum', img: foilImg, blurb: 'Foil sheets, round pans, and full-size steam table pans with lids.' },
  { title: 'Trays & Boxes', img: traysImg, blurb: 'Paper food trays and to-go boxes for counters, trucks, and events.' },
  { title: 'Gloves', img: glovesImg, blurb: 'Restogo nitrile and vinyl gloves, stocked in every size.' },
  { title: 'Cleaning Supplies', img: cleanersImg, blurb: "Ray's Power degreasers and cleaners in gallon sizes." },
];

// Brands Restogo supplies packaging to — relationship confirmed by the client.
const BRANDS = [
  { name: 'Coca-Cola', src: cocaCola }, { name: 'Dairygold', src: dairygold },
  { name: 'Riceland', src: riceland }, { name: 'IBP', src: ibp },
  { name: 'Embasa', src: embasa }, { name: 'Ole Mexican Foods', src: oleMexican },
  { name: 'Alpine', src: alpine }, { name: 'La Morenita', src: laMorenita },
  { name: 'Primaterra', src: primaterra }, { name: 'Productos Real', src: productosReal },
  { name: 'Viva', src: viva }, { name: 'Aguas Frescas de Mexico', src: aguasFrescas },
  { name: 'Dairy Fresh Northwest', src: dairyFresh }, { name: 'Eastside Meats', src: eastsideMeats },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Restogo | Restaurant Supplies & Packaging, Pacific Northwest</title>
        <meta name="description" content="Containers, cups, foil, gloves, and cleaning supplies for restaurants across Oregon, Washington, and Idaho — delivered on Ray's Produce routes, ordered through the app." />
      </Head>

      {/* Hero — H1 marquee split, single ordering path */}
      <section className="border-b border-border-soft bg-bg-soft">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-20">
          <div>
            <p className="font-mono text-xs tracking-widest text-text-muted uppercase">
              Backed by Ray&apos;s Produce · Salem, Oregon
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              All your restaurant needs. One delivery.
            </h1>
            <p className="mt-5 max-w-md text-lg text-text-muted">
              Restogo stocks the disposables your kitchen runs on — and delivers them
              across the Pacific Northwest on the same trucks that already bring your food.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="primary" href="#order-app">Order on the App</Button>
              <Button variant="outline" to="/products">See Products</Button>
            </div>
          </div>
          <img src={heroImg} alt="Restogo aluminum foil sheets box in a commercial kitchen" className="w-full rounded-xl border border-border-soft object-cover" />
        </div>
      </section>

      {/* Category grid */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl font-bold">What we stock</h2>
            <p className="font-mono text-sm text-text-muted">Full range in the app</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((c) => (
              <div key={c.title} className="overflow-hidden rounded-xl border border-border-soft bg-white">
                <img src={c.img} alt={c.title} className="aspect-[4/3] w-full bg-bg-soft object-cover" />
                <div className="p-5">
                  <h3 className="text-lg font-semibold">{c.title}</h3>
                  <p className="mt-1.5 text-sm text-text-muted">{c.blurb}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button variant="outline" to="/products">Browse all categories</Button>
          </div>
        </div>
      </section>

      {/* Same-truck differentiator — the claim neither Karat nor Monvic can make */}
      <section className="bg-primary-dark px-6 py-16 text-white md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[minmax(0,1fr)_auto]">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-white">
              Your packaging arrives with your produce.
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Restogo delivers alongside Ray&apos;s Produce — the same routes, the same
              drivers, the same delivery day your kitchen already plans around. No
              separate freight, no waiting on a parcel carrier.
            </p>
          </div>
          <div className="flex flex-col items-start gap-1 md:items-center">
            <img src={raysLogo} alt="Ray's Produce Inc." className="h-16 w-auto rounded bg-white object-contain px-4 py-2" />
            <a
              href="https://raysproduce.com" target="_blank" rel="noopener noreferrer"
              className="mt-2 text-sm font-semibold text-white/80 hover:text-white"
            >
              Visit Ray&apos;s Produce →
            </a>
          </div>
        </div>
      </section>

      {/* Facility stats — Karat's locations move: numbers, not adjectives */}
      <section className="border-b border-border-soft px-6 py-14">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 text-center sm:grid-cols-3">
          <div>
            <p className="font-mono text-3xl font-semibold text-primary">1996</p>
            <p className="mt-1 text-sm text-text-muted">Family roots — Ray&apos;s Produce, est. Newberg, OR</p>
          </div>
          <div>
            <p className="font-mono text-3xl font-semibold text-primary">150,000 sq ft</p>
            <p className="mt-1 text-sm text-text-muted">Salem distribution center</p>
          </div>
          <div>
            <p className="font-mono text-3xl font-semibold text-primary">OR · WA · ID</p>
            <p className="mt-1 text-sm text-text-muted">Daily delivery routes</p>
          </div>
        </div>
      </section>

      {/* Brands we supply */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold">Brands we supply</h2>
          <p className="mx-auto mt-2 max-w-lg text-center text-text-muted">
            Food and beverage brands across the Northwest run their packaging through Restogo.
          </p>
          <div className="mt-10 grid grid-cols-2 items-center gap-x-10 gap-y-8 sm:grid-cols-4 lg:grid-cols-7">
            {BRANDS.map((b) => (
              <img
                key={b.name} src={b.src} alt={b.name} title={b.name}
                className="mx-auto max-h-12 w-auto max-w-full object-contain"
              />
            ))}
          </div>
        </div>
      </section>

      {/* App CTA */}
      <section id="order-app" className="bg-bg-tint px-6 py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold">Order in the app, restock in minutes</h2>
          <p className="mx-auto mt-3 max-w-xl text-text-muted">
            Restogo orders run through the Ray&apos;s Produce app — one account, one
            invoice, one delivery for your food and your packaging.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button variant="navy" href={APP_IOS}>Download for iPhone</Button>
            <Button variant="navy" href={APP_ANDROID}>Download for Android</Button>
          </div>
          <p className="mt-4 font-mono text-xs text-text-muted">
            New customer? <a href="/contact" className="underline hover:text-primary">Talk to us first</a> and we&apos;ll set up your account.
          </p>
        </div>
      </section>
    </div>
  );
}
