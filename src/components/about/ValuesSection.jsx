import SectionHeader from '../common/SectionHeader';
import Card from '../common/Card';
import { Leaf, ChefHat, Heart, Fish } from 'lucide-react';
import { aboutData } from '../../data/aboutData';

const iconMap = {
  Leaf,
  ChefHat,
  Heart,
  Fish,
};

/**
 * Section présentant les 4 piliers et valeurs du restaurant.
 */
export default function ValuesSection() {
  const { values } = aboutData;

  return (
    <section className="py-20 md:py-28 bg-creme-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Notre Déontologie"
          title="Les 4 Piliers de Notre Engagement"
          description="Une démarche culinaire sincère, respectueuse des saisons et profondément attachée aux hommes et femmes qui font notre terroir."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {values.map((val) => {
            const Icon = iconMap[val.icon] || Leaf;

            return (
              <Card
                key={val.id}
                className="bg-white flex flex-col justify-between text-left group hover:border-terracotta-500/30"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-terracotta-100 text-terracotta-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-brun-900 mb-3">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brun-700 font-light leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
