import SectionHeader from '../common/SectionHeader';
import { aboutData } from '../../data/aboutData';

/**
 * Frise chronologique des étapes marquantes du restaurant.
 */
export default function TimelineSection() {
  const { milestones } = aboutData;

  return (
    <section className="py-20 md:py-28 bg-creme-50 border-t border-brun-900/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Notre Cheminement"
          title="Les Grandes Dates de L'Olivier Doré"
          description="De la genèse de notre projet gastronomique jusqu'à la fidélité de nos convives d'aujourd'hui."
        />

        <div className="relative border-l-2 border-terracotta-200 ml-4 sm:ml-32 space-y-12">
          {milestones.map((item, idx) => (
            <div key={idx} className="relative pl-8 sm:pl-10 group">
              {/* Point de repère sur la ligne */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-terracotta-500 border-4 border-white shadow-sm group-hover:scale-125 transition-transform" />

              {/* Année à gauche sur grand écran */}
              <div className="sm:absolute sm:-left-32 sm:top-1 text-left sm:text-right w-24">
                <span className="font-serif font-bold text-lg text-terracotta-600 block">
                  {item.year}
                </span>
              </div>

              {/* Contenu de l'étape */}
              <div className="bg-white p-6 rounded-2xl border border-brun-900/5 shadow-soft">
                <h3 className="font-serif text-lg font-bold text-brun-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-brun-700 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
