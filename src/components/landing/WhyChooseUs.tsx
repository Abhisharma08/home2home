import { Leaf, Hammer, Trophy, Factory, PencilRulerIcon  } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const reasons = [
  {
    icon: Hammer,
    title: 'Crafted by Experts',
    description:
      'Our furniture is created by skilled artisans using solid wood, refined joinery, and timeless craftsmanship trusted by premium global markets.',
  },
  {
    icon: Trophy,
    title: '35+ Years of Legacy',
    description:
      'Over three decades of experience in crafting export quality furniture, now available factory direct with complete transparency and value.',
  },
  {
    icon: Factory,
    title: 'Manufacturing Excellence',
    description:
      'From cutting and carving to upholstery, assembly, and finishing, every piece goes through a carefully monitored production process to ensure superior quality.',
  },
  {
    icon: PencilRulerIcon,
    title: 'Design Versatility',
    description:
      'From bespoke home interiors to large scale hospitality and commercial projects, we offer customization, exclusive collections, and bulk manufacturing capabilities.',
  },
  {
    icon: Leaf,
    title: 'Sustainably Crafted',
    description:
      'Responsibly sourced Sheesham, Mango, and Acacia wood combined with mindful production practices to minimize waste and maximize durability.',
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-accent">
            WHY CHOOSE US?
          </h2>

          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
            We are not just suppliers; we are partners in your success. Our
            vertically integrated model—from quarry to container—ensures every
            piece of stone we deliver embodies our commitment to excellence. We
            provide architects, builders, and importers with a reliable,
            efficient, and quality-driven supply chain they can trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <Card
                key={index}
                className={`bg-primary border-accent/20 text-center shadow-lg hover:shadow-xl transition-shadow duration-300
                  lg:col-span-2
                  ${index === 3 ? 'lg:col-start-2' : ''}
                  ${index === 4 ? 'lg:col-start-4' : ''}
                `}
              >
<CardHeader className="flex flex-col items-center text-center gap-4">
  <div className="bg-primary p-3 rounded-full">
    <Icon className="h-8 w-9 text-accent" />
  </div>

  <CardTitle className="font-headline text-2xl text-primary-foreground">
    {reason.title}
  </CardTitle>
</CardHeader>

<CardContent className="text-center">
  <p className="text-primary-foreground/80">
    {reason.description}
  </p>
</CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;