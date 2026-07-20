import PageHero from '../components/layout/PageHero';
import Card from '../components/ui/Card';
import ImagePlaceholder from '../components/ui/ImagePlaceholder';
import SectionHeading from '../components/ui/SectionHeading';

export default function About() {
  return (
    <div>
      <PageHero
        eyebrow="About Restogo"
        title="Packaging that reflects your restaurant"
        description="A division of Ray's Produce Inc., Restogo designs restaurant packaging built around your brand."
      />

      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          {/* Placeholder company narrative — refine with the client's own story/history */}
          <p className="text-lg text-text-muted">
            Restogo was built to give restaurants a better packaging partner — one that
            treats cups, containers, and cutlery as an extension of the dining
            experience, not an afterthought. As a division of Ray&apos;s Produce Inc.,
            we bring together design, sustainability, and reliable supply to help
            restaurants present their food, and their brand, exactly as intended.
          </p>
        </div>
      </section>

      <section className="bg-bg-tint px-6 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <ImagePlaceholder label="Warehouse photo coming soon" className="h-72 w-full md:h-96" />
          <div>
            <SectionHeading eyebrow="The Warehouse" title="Stocked and ready to ship" align="left" />
            <p className="text-text-muted">
              Restogo&apos;s packaging is stocked and shipped from Ray&apos;s
              Produce&apos;s 150,000 sq ft distribution center, giving us the space to
              keep a full inventory of cups, containers, and cutlery ready to go.
            </p>
            <p className="mt-4 text-text-muted">
              Every day, trucks leave the warehouse on set routes across Washington,
              Oregon, and Idaho — delivering packaging alongside the same fresh
              product our customers already count on, so restocking is as easy as your
              next produce delivery.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Our Story" title="From Ray's Produce to Restogo" align="left" />
            <p className="text-text-muted">
              Restogo got its start inside Ray&apos;s Produce Inc., a family-owned
              foodservice distributor that has supplied restaurants across the Pacific
              Northwest since 1996. As Ray&apos;s Produce grew alongside its customers,
              a pattern kept coming up: restaurants wanted the same reliability for
              their cups, containers, and custom branding that they already counted on
              for their produce orders.
            </p>
            <p className="mt-4 text-text-muted">
              That need became Restogo — a sister company built to bring Ray&apos;s
              Produce&apos;s standards of consistency and service to restaurant
              packaging, so the businesses we&apos;ve supplied for decades could get
              everything they need from one trusted partner.
            </p>
          </div>
          <ImagePlaceholder label="Image coming soon" className="h-72 w-full md:h-96" />
        </div>
      </section>

      <section className="bg-bg-tint px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="What Drives Us"
            title="Design with purpose"
          />
          <div className="grid gap-6 md:grid-cols-2">
            <Card title="Custom Design">
              At RESTOGO, we transform each restaurant&apos;s vision into reality with
              custom-designed containers. Our focus on custom design ensures that each
              piece is not only functional but also a reflection of the
              establishment&apos;s brand and aesthetics. With a blend of innovation and
              style, RESTOGO stands for quality and exclusivity in the world of
              restaurant design.
            </Card>
            <Card title="Innovative Designs">
              At RESTOGO, we are revolutionizing the restaurant industry with our
              innovative designs for containers, cups, and disposable cutlery. Each
              product is a statement of style and sustainability, designed to impress
              diners and support restaurants in their mission to provide an exceptional
              experience. With RESTOGO, every detail matters.
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
