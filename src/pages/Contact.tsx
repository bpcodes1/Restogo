import { useState } from 'react';
import { Head } from 'vite-react-ssg';
import PageHero from '../components/layout/PageHero';
import Button from '../components/ui/Button';
import { APP_ANDROID, APP_IOS } from '../lib/app-links';

export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div>
      <Head>
        <title>Contact | Restogo — Salem, Oregon</title>
        <meta name="description" content="Talk to the Restogo team in Salem, Oregon. Mon–Fri 9:00–5:00. Set up an account, check your delivery day, or order through the Ray's Produce app." />
      </Head>
      <PageHero
        eyebrow="Contact"
        title="Talk to a real person"
        description="Set up an account, check your delivery day, or ask about the product line."
      />
      <section className="px-6 py-14">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
          <div>
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="font-mono text-xs tracking-wide text-text-muted uppercase">Phone</dt>
                <dd className="mt-1 font-semibold">[phone]</dd>
              </div>
              <div>
                <dt className="font-mono text-xs tracking-wide text-text-muted uppercase">Email</dt>
                <dd className="mt-1 font-semibold">[email]</dd>
              </div>
              <div>
                <dt className="font-mono text-xs tracking-wide text-text-muted uppercase">Warehouse</dt>
                <dd className="mt-1 font-semibold">[address] · Salem, Oregon</dd>
              </div>
              <div>
                <dt className="font-mono text-xs tracking-wide text-text-muted uppercase">Hours</dt>
                <dd className="mt-1 font-semibold">Mon–Fri 9:00am–5:00pm · Sat–Sun closed</dd>
              </div>
            </dl>
            <div id="order-app" className="mt-10 rounded-xl border border-border-soft bg-bg-tint p-6">
              <h2 className="text-lg font-bold">Already have an account?</h2>
              <p className="mt-1 text-sm text-text-muted">Order directly through the Ray&apos;s Produce app.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button variant="navy" href={APP_IOS} className="px-4 py-2">iPhone</Button>
                <Button variant="navy" href={APP_ANDROID} className="px-4 py-2">Android</Button>
              </div>
            </div>
          </div>
          <form
            className="space-y-4"
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          >
            {sent && (
              <p className="rounded-md bg-bg-tint px-4 py-3 text-sm font-medium text-primary-dark">
                Form destination not wired yet — submissions will route to Restogo once hosting is set.
              </p>
            )}
            {[
              { id: 'name', label: 'Name', type: 'text', required: true },
              { id: 'business', label: 'Restaurant / business', type: 'text', required: false },
              { id: 'email', label: 'Email', type: 'email', required: true },
              { id: 'phone', label: 'Phone', type: 'tel', required: false },
            ].map((f) => (
              <div key={f.id}>
                <label htmlFor={f.id} className="mb-1 block text-sm font-semibold">{f.label}</label>
                <input
                  id={f.id} name={f.id} type={f.type} required={f.required}
                  className="w-full rounded-md border border-border-soft px-4 py-2.5 outline-none focus:border-accent"
                />
              </div>
            ))}
            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-semibold">What does your kitchen need?</label>
              <textarea
                id="message" name="message" rows={4}
                className="w-full rounded-md border border-border-soft px-4 py-2.5 outline-none focus:border-accent"
              />
            </div>
            <Button type="submit" variant="primary" className="w-full">Send</Button>
          </form>
        </div>
      </section>
    </div>
  );
}
