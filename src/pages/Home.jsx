import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import FaqAccordion from '../components/ui/FaqAccordion';
import ImagePlaceholder from '../components/ui/ImagePlaceholder';
import LogoMarquee from '../components/ui/LogoMarquee';
import SectionHeading from '../components/ui/SectionHeading';
import ServiceAreaMap from '../components/map/ServiceAreaMap';
import restogoLogo from '../assets/restogo-logo.webp';
import raysLogo from '../assets/rays_logo.webp';
import starIcon from '../assets/icons/star.png';
import paletteIcon from '../assets/icons/palette.png';
import recycleIcon from '../assets/icons/recycle.png';
import lightbulbIcon from '../assets/icons/lightbulb.png';
import aguasFrescasLogo from '../assets/brands/aguas_frescas_de_mexico.png';
import alpineLogo from '../assets/brands/alpine.png';
import cocaColaLogo from '../assets/brands/coca_cola.png';
import dairyFreshNorthwestLogo from '../assets/brands/dairy_fresh_northwest.webp';
import dairygoldLogo from '../assets/brands/dairygold.webp';
import eastsideMeatsLogo from '../assets/brands/eastside_meats.png';
import embasaLogo from '../assets/brands/embasa.png';
import ibpLogo from '../assets/brands/ibp.png';
import laMorenitaLogo from '../assets/brands/la_morenita.webp';
import oleMexicanFoodsLogo from '../assets/brands/ole_mexican_foods.webp';
import primaterraLogo from '../assets/brands/primaterra.webp';
import productosRealLogo from '../assets/brands/productos_real.png';
import ricelandLogo from '../assets/brands/riceland.svg';
import vivaLogo from '../assets/brands/viva.png';
import cupImage from '../assets/products/cup.webp';
import containerImage from '../assets/products/container.webp';
import cutleryImage from '../assets/products/cutlery.webp';
import perfectDesignImage from '../assets/products/perfect-design.webp';
import customDesignImage from '../assets/products/custom-design.webp';
import recyclableMaterialsImage from '../assets/products/recyclable-materials.webp';

const BRAND_LOGOS = [
  { name: 'Aguas Frescas de Mexico', src: aguasFrescasLogo },
  { name: 'Alpine', src: alpineLogo },
  { name: 'Coca-Cola', src: cocaColaLogo },
  { name: 'Dairy Fresh Northwest', src: dairyFreshNorthwestLogo },
  { name: 'Dairygold', src: dairygoldLogo },
  { name: 'Eastside Meats', src: eastsideMeatsLogo },
  { name: 'Embasa', src: embasaLogo },
  { name: 'IBP', src: ibpLogo },
  { name: 'La Morenita', src: laMorenitaLogo },
  { name: 'Ole Mexican Foods', src: oleMexicanFoodsLogo },
  { name: 'Primaterra', src: primaterraLogo },
  { name: 'Productos Real', src: productosRealLogo },
  { name: 'Riceland', src: ricelandLogo },
  { name: 'Viva', src: vivaLogo },
];

const CATEGORIES = [
  {
    title: 'Cups',
    blurb: 'Hot and cold cups sized and styled for carry-out, dine-in, and everything in between.',
    image: cupImage,
  },
  {
    title: 'Containers',
    blurb: 'Clear and branded containers built for presentation, durability, and food safety.',
    image: containerImage,
  },
  {
    title: 'Disposable Cutlery',
    blurb: 'Cutlery designed to match the rest of your packaging, without compromising on style.',
    image: cutleryImage,
  },
];

const PILLARS = [
  {
    icon: starIcon,
    title: 'Perfect Design',
    blurb:
      'A meticulous design process where functionality meets aesthetics on every piece.',
    to: '/our-process',
    image: perfectDesignImage,
  },
  {
    icon: paletteIcon,
    title: 'Custom Design',
    blurb:
      'Containers shaped around your restaurant’s vision — a true reflection of your brand and aesthetic.',
    to: '/about',
    image: customDesignImage,
  },
  {
    icon: recycleIcon,
    title: 'Recyclable Materials',
    blurb:
      'Sustainability at the core — innovative, aesthetically pleasing products that are also environmentally friendly.',
    to: '/our-process',
    image: recyclableMaterialsImage,
  },
  {
    icon: lightbulbIcon,
    title: 'Innovative Designs',
    blurb:
      'Designs for containers, cups, and cutlery that impress diners and support your mission.',
    to: '/about',
    image: null,
  },
];

// Sample quotes for mockup/demo purposes only — swap for real customer
// testimonials before this ever goes live publicly.
const TESTIMONIALS = [
  {
    quote:
      'Restogo’s containers hold up better than anything else we’ve used — no leaks, no soggy boxes, and our to-go orders finally look as good as they taste.',
    name: 'Maria Chen',
    business: 'Owner, The Wandering Fork',
  },
  {
    quote:
      'Getting our logo on our cups made a bigger difference than I expected. Customers notice, and it makes us look a lot more established.',
    name: 'James Whitfield',
    business: 'General Manager, Cedar & Sage Kitchen',
  },
  {
    quote:
      'Ordering is simple and they always deliver on time, even when we change quantities last minute. That reliability matters a lot for a busy kitchen.',
    name: 'Priya Anand',
    business: 'Owner, Basil & Barrel',
  },
];

// A couple of these need real operational details filled in — flagged inline.
const FAQS = [
  {
    question: 'What areas do you serve?',
    answer:
      "We're based in Salem, Oregon, and serve restaurants throughout Washington, Oregon, Idaho, and California.",
  },
  {
    question: 'Can I get my logo on my cups and containers?',
    answer:
      'Yes — we offer custom branding on clear cups and containers, including your logo, so your packaging matches your restaurant’s identity.',
  },
  {
    question: 'Are your products recyclable?',
    answer:
      'Yes. Sustainability is core to how we design — our containers, cups, and cutlery are made with recyclable materials.',
  },
  {
    question: 'Do you offer online ordering?',
    answer:
      "Not at this time. All orders start with a quote request so we can tailor pricing and packaging to your restaurant's needs.",
  },
  {
    question: 'Is there a minimum order size?',
    answer: '[Add minimum order details]',
  },
  {
    question: 'How long does an order take to arrive?',
    answer: '[Add typical turnaround time]',
  },
];

export default function Home() {
  return (
    <div>
      {/* 1. Hero */}
      <section className="flex h-[70vh] min-h-[420px] w-full items-center justify-center bg-primary-dark text-white">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/50 text-3xl">
            ▶
          </div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white/70">
            Hero video placeholder
          </p>
        </div>
      </section>

      <LogoMarquee logos={BRAND_LOGOS} />

      {/* 2. Product Categories */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="CATEGORIES" />
          <div className="grid gap-8 md:grid-cols-3">
            {CATEGORIES.map((category) => (
              <div key={category.title}>
                <img
                  src={category.image}
                  alt={category.title}
                  className="mb-4 h-48 w-full rounded-xl object-cover"
                />
                <h3 className="text-xl font-semibold text-heading">{category.title}</h3>
                <p className="mt-2 text-text-muted">{category.blurb}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button to="/products" variant="primary">
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* 3. Where We Serve */}
      <section className="bg-bg-tint px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="Proudly serving the Pacific Northwest" />
          <div className="grid items-center gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="text-base text-text-muted">
                Restogo supplies restaurants throughout the Pacific Northwest with
                reliable, well-designed packaging — backed by local service and fast
                turnaround.
              </p>
              <p className="mt-4 text-base text-text-muted">
                Our headquarters is based in Salem, Oregon, keeping us close to the
                restaurants, distributors, and partners we serve across Washington,
                Oregon, Idaho, and California.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {['Washington', 'Oregon', 'Idaho', 'California'].map((state) => (
                  <span
                    key={state}
                    className="rounded-full border border-border-soft bg-white px-3 py-1 text-sm font-medium text-heading"
                  >
                    {state}
                  </span>
                ))}
              </div>
              <div className="mt-8">
                <Button to="/contact" variant="primary">
                  Get a Quote
                </Button>
              </div>
            </div>
            <div className="md:col-span-7">
              <ServiceAreaMap />
            </div>
          </div>
        </div>
      </section>

      {/* 4. How We Design */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 grid items-center gap-10 md:grid-cols-2">
            <div>
              <SectionHeading eyebrow="Meet Our Company" title="Designed with Purpose" align="left" />
              <p className="text-base text-text-muted">
                Restogo is the custom packaging division of Ray&apos;s Produce Inc., a
                family-owned foodservice distributor that has served the Pacific
                Northwest since 1996. Backed by a 150,000 sq ft distribution center and
                trusted by 2,000+ businesses across Oregon, Washington, and Idaho, we
                bring that same scale and reliability to custom-branded packaging.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-6 border-t border-border-soft pt-8">
                <div>
                  <p className="text-lg font-bold text-primary sm:text-xl">1996</p>
                  <p className="mt-1 text-sm text-text-muted">Family-owned since</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-primary sm:text-xl">150,000 sq ft</p>
                  <p className="mt-1 text-sm text-text-muted">Distribution center</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-primary sm:text-xl">2,000+</p>
                  <p className="mt-1 text-sm text-text-muted">Businesses served</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img src={raysLogo} alt="Ray's Produce" className="w-full max-w-sm object-contain" />
              <a
                href="https://raysproduce.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 text-sm font-semibold text-primary hover:text-primary-dark"
              >
                Visit Ray&apos;s Produce -&gt;
              </a>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="flex h-full flex-col rounded-xl border border-border-soft bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-heading">{pillar.title}</h3>
                {pillar.image ? (
                  <img
                    src={pillar.image}
                    alt=""
                    className="mt-4 h-40 w-full rounded-lg object-cover"
                  />
                ) : (
                  <ImagePlaceholder label="Image coming soon" className="mt-4 h-40 w-full" />
                )}
                <p className="mt-4 text-sm text-text-muted">{pillar.blurb}</p>
                <Link
                  to={pillar.to}
                  className="mt-auto pt-4 text-sm font-semibold text-primary hover:text-primary-dark"
                >
                  Learn more about us -&gt;
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button to="/our-process" variant="primary">
              Learn About Our Process
            </Button>
          </div>
        </div>
      </section>

      {/* 5. Testimonials */}
      <section className="bg-bg-tint px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="What Restaurants Say"
            title="Trusted by restaurants across the Pacific Northwest"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((testimonial, i) => (
              <div key={i} className="rounded-xl border border-border-soft bg-white p-6 shadow-sm">
                <div className="mb-3 flex items-center gap-3">
                  <img src={restogoLogo} alt="Restogo" className="h-12 w-12 shrink-0" />
                  <span className="text-4xl leading-none text-primary">“</span>
                </div>
                <p className="text-text-muted italic">{testimonial.quote}</p>
                <p className="mt-4 text-sm font-semibold text-heading">
                  {testimonial.name}
                  <span className="block font-normal text-text-muted">{testimonial.business}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Common questions" />
          <FaqAccordion items={FAQS} />
        </div>
      </section>

      {/* 7. Closing CTA */}
      <section className="bg-bg-tint px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-heading">Ready to order your packaging?</h2>
          <p className="mx-auto mt-3 max-w-xl text-text-muted">
            Tell us about your restaurant and we&apos;ll put together a quote tailored
            to your packaging needs.
          </p>
          <div className="mt-8">
            <Button to="/contact" variant="primary">
              Request a Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
