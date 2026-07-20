import { useState, type ChangeEvent, type FormEvent } from 'react';
import PageHero from '../components/layout/PageHero';
import Button from '../components/ui/Button';

const INITIAL_FORM = {
  name: '',
  restaurant: '',
  email: '',
  phone: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Submission is not wired up yet — hook up to a form service / backend later.
    setSubmitted(true);
  };

  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Request a Quote"
        description="Tell us about your restaurant and packaging needs — we'll follow up with a quote."
      />

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-heading">Get in touch</h2>
            <ul className="mt-6 space-y-3 text-text-muted">
              <li>
                <span className="font-semibold text-text-body">Phone: </span>
                [phone number]
              </li>
              <li>
                <span className="font-semibold text-text-body">Email: </span>
                [email address]
              </li>
              <li>
                <span className="font-semibold text-text-body">Service Area: </span>
                [service area]
              </li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {submitted && (
              <div className="rounded-md bg-bg-tint px-4 py-3 text-sm font-medium text-primary-dark">
                Thanks! This form isn&apos;t connected yet — quote requests will be
                emailed to Restogo once submission is wired up.
              </div>
            )}

            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-semibold text-text-body">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-md border border-border-soft px-4 py-2.5 outline-none focus:border-primary"
              />
            </div>

            <div>
              <label htmlFor="restaurant" className="mb-1 block text-sm font-semibold text-text-body">
                Restaurant / Business Name
              </label>
              <input
                id="restaurant"
                name="restaurant"
                type="text"
                value={form.restaurant}
                onChange={handleChange}
                className="w-full rounded-md border border-border-soft px-4 py-2.5 outline-none focus:border-primary"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-semibold text-text-body">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-md border border-border-soft px-4 py-2.5 outline-none focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-1 block text-sm font-semibold text-text-body">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full rounded-md border border-border-soft px-4 py-2.5 outline-none focus:border-primary"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-semibold text-text-body">
                What do you need packaging for?
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-md border border-border-soft px-4 py-2.5 outline-none focus:border-primary"
              />
            </div>

            <Button type="submit" variant="primary" className="w-full">
              Request a Quote
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
