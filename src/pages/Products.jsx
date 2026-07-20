import PageHero from '../components/layout/PageHero';
import Card from '../components/ui/Card';
import ImagePlaceholder from '../components/ui/ImagePlaceholder';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';

const CATEGORIES = [
  {
    title: 'Cups',
    description:
      'Hot and cold cups sized and styled for carry-out, dine-in, and everything in between.',
    galleryCount: 6,
  },
  {
    title: 'Containers',
    description:
      'Clear and branded containers built for presentation, durability, and food safety.',
    galleryCount: 6,
  },
  {
    title: 'Disposable Cutlery',
    description:
      'Cutlery designed to match the rest of your packaging, without compromising on style.',
    galleryCount: 6,
  },
];

export default function Products() {
  return (
    <div>
      <PageHero
        eyebrow="Products"
        title="Cups, containers, and cutlery built for your brand"
        description="Explore our core product categories — full catalog available on request."
      />

      {CATEGORIES.map((category, i) => (
        <section key={category.title} className={i % 2 === 1 ? 'bg-bg-tint px-6 py-20' : 'px-6 py-20'}>
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              title={category.title}
              description={category.description}
              align="left"
            />
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {Array.from({ length: category.galleryCount }).map((_, idx) => (
                <ImagePlaceholder
                  key={idx}
                  label={`${category.title} #${idx + 1}`}
                  className="h-40 w-full"
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <Card title="Customization Available" className="bg-bg-tint">
            <p>
              Restogo offers comprehensive customization options, including branded
              clear cups and containers for your carry-out products. With our
              services, you can add your logo or any other branding elements to
              ensure that your packaging aligns perfectly with your restaurant&apos;s
              identity.
            </p>
            <div className="mt-6">
              <Button to="/contact" variant="primary">
                Ask About Custom Branding
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
