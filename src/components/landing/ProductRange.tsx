
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const productCategories = [
  { name: 'Outdoor Furniture', imageId: 'outdoor-furniture', description: 'Elegant and durable pieces designed for open spaces and modern outdoor living' },
  { name: 'Office Furniture', imageId: 'office-furniture', description: 'Functional designs that bring comfort, efficiency, and sophistication to workspaces' },
  { name: 'Living Room Furniture', imageId: 'living-room-furniture', description: 'Statement pieces crafted to elevate everyday living with warmth and style' },
  { name: 'Bedroom Furniture', imageId: 'bedroom-furniture', description: 'Thoughtfully designed furniture that blends comfort, utility, and timeless aesthetics' },
  { name: 'Dining Furniture', imageId: 'dining-furniture', description: 'Beautifully crafted dining collections made for gatherings and lasting memories' },
  { name: 'Cafe & Bar', imageId: 'cafe-bar', description: 'Stylish seating and tables tailored for modern cafés, restaurants, and hospitality spaces' },
];

const ProductRange = () => {
  return (
    <section id="products" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="font-semibold uppercase tracking-widest text-accent mb-2">Crafted With Purpose. Designed To Last.</p>
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary">
            Our Product Range
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category) => {
            const image = PlaceHolderImages.find(img => img.id === category.imageId);
            return (
              <div key={category.name} className="group text-center">
                <div className="overflow-hidden rounded-lg mb-4 aspect-square">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      width={300}
                      height={300}
                      data-ai-hint={image.imageHint}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                  )}
                </div>
                <h3 className="text-xl font-headline font-bold text-primary mb-1">{category.name}</h3>
                <p className="text-slate-700 font-bold mb-4">{category.description}</p>
                <Link href="#form" className="text-sm text-accent hover:underline border-2 border-primary rounded-md py-2 px-4 uppercase font-bold tracking-wider">
                  Enquire Now
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductRange;
