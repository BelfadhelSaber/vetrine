import SectionHeader from '../common/SectionHeader';
import Button from '../common/Button';
import ImageWithFallback from '../common/ImageWithFallback';
import { ArrowRight, Heart, Sparkles, Award } from 'lucide-react';
import { restaurantData } from '../../data/restaurantData';

/**
 * Section de présentation de l'histoire et de la philosophie culinaire.
 * Présente le concept avec élégance et renvoie vers la page À propos.
 */
export default function AboutTeaser() {
  return (
    <section className="py-20 md:py-28 bg-creme-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Composition photographique à gauche (5 colonnes) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-soft-lg aspect-[4/5] max-w-md mx-auto">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80"
                alt="Ambiance chaleureuse et service de L'Olivier Doré"
                className="w-full h-full object-cover"
                fallbackText="L'Olivier Doré"
              />
            </div>

            {/* Petite carte d'insertion flottante */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-brun-900/10 shadow-xl max-w-xs hidden sm:block">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-9 h-9 rounded-full bg-olive-100 text-olive-600 flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </span>
                <div>
                  <h4 className="font-serif font-bold text-brun-900 text-sm">Cuisine Vivante</h4>
                  <p className="text-[11px] text-brun-700">Inspirations méditerranéennes</p>
                </div>
              </div>
              <p className="text-xs text-brun-700 leading-snug">
                « La cuisine n'est pas seulement une technique, c'est un partage généreux et sincère. »
              </p>
            </div>
          </div>

          {/* Contenu éditorial à droite (7 colonnes) */}
          <div className="lg:col-span-7">
            <SectionHeader
              align="left"
              subtitle="Notre Maison"
              title="L'Héritage du Goût et la Passion du Terroir"
              description="Né de l'amour des rivages méditerranéens, L'Olivier Doré célèbre l'authenticité des recettes côtières tout en leur apportant une touche de modernité bistronomique."
              className="mb-8"
            />

            <div className="space-y-6 text-brun-700 font-light leading-relaxed mb-10">
              <p>
                Chaque matin, notre brigade sélectionne les plus beaux arrivages de poissons sauvages, les agrumes gorgés de soleil de la région et les huiles d'olive pressées à froid des oliveraies locales.
              </p>
              <p>
                Ici, pas de compromis sur la qualité : nous croyons au respect des saisons, à la générosité des portions et à l'équilibre subtil des épices douces qui font le charme unique de notre cuisine.
              </p>
            </div>

            {/* Les 3 piliers du restaurant */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 pb-8 border-b border-brun-900/10">
              {restaurantData.features.map((feature, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="font-serif font-bold text-base text-brun-900 mb-1">
                    {feature.title}
                  </span>
                  <span className="text-xs text-brun-700 leading-normal">
                    {feature.desc}
                  </span>
                </div>
              ))}
            </div>

            {/* Bouton vers la page À propos */}
            <Button
              to="/a-propos"
              variant="outlineDark"
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
            >
              En savoir plus sur notre histoire
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
