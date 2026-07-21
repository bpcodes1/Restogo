import { Head } from 'vite-react-ssg';
import PageHero from '../components/layout/PageHero';
import Button from '../components/ui/Button';
import img16 from '../assets/products/16.webp';
import img11 from '../assets/products/11.webp';
import img12 from '../assets/products/12.webp';
import img13 from '../assets/products/13.webp';
import img3 from '../assets/products/3.webp';
import img14 from '../assets/products/14.webp';
import img6 from '../assets/products/6.webp';
import img4 from '../assets/products/4.webp';
import img5 from '../assets/products/5.webp';
import img1 from '../assets/products/1-1.webp';
import img7 from '../assets/products/7.webp';
import imgAlm from '../assets/products/portfolio-home-RESTOGO-alm.webp';
import img22 from '../assets/products/22.webp';
import imgGloves from '../assets/products/portfolio-home-RTG-gt.webp';
import imgCleaners from '../assets/products/portfolio-home-CLEANERS-1.webp';
import imgRaysPower from '../assets/products/portfolio-home-RAYSPOWER-1.webp';
import imgCustom from '../assets/products/portfolio-home-vianda1.webp';

// Karat's spec-index model: category → items. Spec-sheet links land when
// Victor supplies the documents (phase-2 spec kit seeds here).
const CATALOG = [
  {
    category: 'Containers & Clamshells',
    items: [
      { img: img16, name: 'Hinged containers — plastic, black & white' },
      { img: img13, name: 'Plant-fiber clamshells — 3 compartment' },
      { img: img12, name: 'Plant-fiber clamshells — single compartment' },
      { img: img11, name: 'Plant-fiber clamshells — large' },
      { img: img3, name: 'Clear hinged containers' },
      { img: img14, name: 'Black hinged containers — 3 compartment' },
      { img: img6, name: 'White hinged containers' },
    ],
  },
  {
    category: 'Cups & Lids',
    items: [{ img: img4, name: 'Paper cups with lids — multiple sizes' }],
  },
  {
    category: 'Foil & Aluminum',
    items: [
      { img: imgAlm, name: 'Restogo interfolded aluminum foil sheets' },
      { img: img5, name: 'Round foil pans with board lids' },
      { img: img1, name: 'Round foil pans with clear dome lids' },
      { img: img7, name: 'Full-size steam table pans with lids' },
    ],
  },
  {
    category: 'Trays & Boxes',
    items: [{ img: img22, name: 'Paper food trays & portion cups' }],
  },
  {
    category: 'Gloves',
    items: [{ img: imgGloves, name: 'Restogo nitrile & vinyl gloves' }],
  },
  {
    category: 'Cleaning Supplies',
    items: [
      { img: imgCleaners, name: "Ray's Pine Cleaner & Glass Cleaner — 1 gal" },
      { img: imgRaysPower, name: "Ray's Power degreaser — 1 gal" },
    ],
  },
];

export default function Products() {
  return (
    <div>
      <Head>
        <title>Products | Restogo — Containers, Cups, Foil, Gloves & More</title>
        <meta name="description" content="Restogo's restaurant supply line: hinged containers, plant-fiber clamshells, cups and lids, foil and aluminum pans, paper trays, gloves, and cleaning supplies." />
      </Head>
      <PageHero
        eyebrow="Products"
        title="Stocked, priced for volume, ready to ship"
        description="The core lines below are in the warehouse now. The full range — sizes, counts, and case pricing — lives in the app."
      />
      {CATALOG.map((c, i) => (
        <section key={c.category} className={`px-6 py-14 ${i % 2 ? 'bg-bg-soft' : ''}`}>
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold">{c.category}</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {c.items.map((p) => (
                <figure key={p.name} className="overflow-hidden rounded-xl border border-border-soft bg-white">
                  <img src={p.img} alt={p.name} className="aspect-square w-full bg-bg-soft object-cover" />
                  <figcaption className="p-4 text-sm font-medium">{p.name}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Single soft custom mention — phase-2 filter, stated like Karat states it */}
      <section className="px-6 py-14">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-8 rounded-xl border border-border-soft bg-bg-tint p-8">
          <img src={imgCustom} alt="Hinged container with an embossed customer logo" className="w-40 rounded-lg" />
          <div className="min-w-60 flex-1">
            <h2 className="text-xl font-bold">Custom-branded packaging</h2>
            <p className="mt-2 max-w-xl text-sm text-text-muted">
              Available on select lines for high-volume accounts. Custom orders carry
              minimums and extended lead times — talk to us about whether it fits your volume.
            </p>
          </div>
          <Button variant="outline" to="/contact">Ask about custom</Button>
        </div>
      </section>
    </div>
  );
}
