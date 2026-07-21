import { Head } from 'vite-react-ssg';
import PageHero from '../components/layout/PageHero';
import raysLogo from '../assets/rays_logo_color.webp';

export default function About() {
  return (
    <div>
      <Head>
        <title>About | Restogo — The Restaurant Supply Side of Ray's Produce</title>
        <meta name="description" content="Restogo is the restaurant-supply side of Ray's Produce, a family foodservice distributor serving the Pacific Northwest since 1996 from Salem, Oregon." />
      </Head>
      <PageHero
        eyebrow="About"
        title="The supply side of a 30-year distributor"
        description="Restogo grew out of a simple pattern: the restaurants Ray's Produce delivered to every day kept asking for their disposables on the same truck."
      />
      <section className="px-6 py-14">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">From produce routes to full supply</h2>
            <p className="mt-4 text-text-muted">
              Ray&apos;s Produce has supplied Northwest kitchens since 1996 — from a
              neighborhood produce stand in Newberg, Oregon to a company-owned
              150,000 sq ft distribution center in Salem. Restogo brings that same
              operation to containers, cups, foil, gloves, and cleaning supplies.
            </p>
            <p className="mt-4 text-text-muted">
              One account, one invoice, one delivery — your food and your packaging
              arrive together, handled by people who already know your kitchen.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-xl border border-border-soft bg-bg-soft p-10">
            <img src={raysLogo} alt="Ray's Produce Inc. — Foodservice Distribution" className="w-56" />
            <a href="https://raysproduce.com" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-primary hover:text-accent">
              Visit Ray&apos;s Produce →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
