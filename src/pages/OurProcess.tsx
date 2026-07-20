import PageHero from '../components/layout/PageHero';
import SectionHeading from '../components/ui/SectionHeading';

export default function OurProcess() {
  return (
    <div>
      <PageHero
        eyebrow="Our Process"
        title="Perfect design, sustainably made"
        description="How Restogo approaches every container, from concept to a more sustainable future."
      />

      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="Our Process" title="Perfect Design" align="left" />
          <p className="text-lg text-text-muted">
            At RESTOGO, excellence in design is our passion and commitment. Each
            container we create is the result of a meticulous perfect design process,
            where functionality meets aesthetics to provide storage and presentation
            solutions that not only meet but exceed the expectations of our clients.
          </p>
        </div>
      </section>

      <section className="bg-bg-tint px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="Our Commitment" title="Sustainability" align="left" />
          <p className="text-lg text-text-muted">
            At RESTOGO, sustainability is at the core of our design philosophy. We take
            pride in using recyclable materials in the creation of our restaurant
            containers, ensuring that each product is not only innovative and
            aesthetically pleasing but also environmentally friendly. Our commitment to
            recycled materials reflects our clients&apos; dedication to a greener and
            more sustainable future.
          </p>
        </div>
      </section>
    </div>
  );
}
