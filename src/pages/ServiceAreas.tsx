import { Head } from 'vite-react-ssg';
import PageHero from '../components/layout/PageHero';
import Button from '../components/ui/Button';

// Karat's Locations move: numbers, addresses, hours. No adjectives.
const AREAS = [
  { region: 'Salem / Mid-Valley', detail: 'Home base — Salem, Keizer, Woodburn, Silverton, Albany, Corvallis' },
  { region: 'Portland Metro', detail: 'Portland, Beaverton, Hillsboro, Gresham, Lake Oswego, Tigard' },
  { region: 'Eugene / Springfield', detail: 'Southern Willamette Valley routes' },
  { region: 'Washington', detail: 'Vancouver, Puget Sound, Seattle, Tacoma, Eastern Washington' },
  { region: 'Idaho', detail: 'Route coverage — confirm your address with our team' },
];

export default function ServiceAreas() {
  return (
    <div>
      <Head>
        <title>Service Areas | Restogo — Oregon, Washington & Idaho Delivery</title>
        <meta name="description" content="Restogo delivers restaurant supplies on daily routes across Oregon, Washington, and Idaho from a 150,000 sq ft distribution center in Salem, Oregon." />
      </Head>
      <PageHero
        eyebrow="Service Areas"
        title="Daily routes across the Pacific Northwest"
        description="Deliveries run on Ray's Produce routes out of Salem, Oregon — the same schedule your kitchen already plans around."
      />
      <section className="px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4">
            {AREAS.map((a) => (
              <div key={a.region} className="flex flex-wrap items-baseline justify-between gap-2 rounded-lg border border-border-soft bg-white px-6 py-4">
                <h2 className="font-display text-lg font-semibold">{a.region}</h2>
                <p className="text-sm text-text-muted">{a.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-xl bg-bg-soft p-8 text-center">
            <h2 className="text-xl font-bold">The facility behind the routes</h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-text-muted">
              Orders ship from a company-owned <span className="font-mono font-semibold">150,000 sq ft</span> distribution
              center in Salem, Oregon — one of the region&apos;s largest independent foodservice facilities.
            </p>
            <div className="mt-6">
              <Button variant="primary" to="/contact">Check your delivery day</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
