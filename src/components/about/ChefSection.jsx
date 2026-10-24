import SectionHeader from '../common/SectionHeader';
import Card from '../common/Card';
import Badge from '../common/Badge';
import ImageWithFallback from '../common/ImageWithFallback';
import { Award, Sparkles, ChefHat } from 'lucide-react';
import { aboutData } from '../../data/aboutData';

/**
 * Section présentant le Chef et la brigade.
 */
export default function ChefSection() {
  const { chef } = aboutData;

  return (
    <section className="py-20 md:py-28 bg-creme-50 border-y border-brun-900/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Photo du chef (5 colonnes) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative max-w-md mx-auto">
              <div className="relative rounded-3xl overflow-hidden shadow-soft-lg aspect-[4/5]">
                <ImageWithFallback
                  src={chef.imageUrl}
                  alt={chef.name}
                  className="w-full h-full object-cover"
                  fallbackText={chef.name}
                />
              </div>

              {/* Badge d'expérience flottant */}
              <div className="absolute -bottom-5 left-6 bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl border border-brun-900/10 shadow-lg flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-terracotta-100 text-terracotta-600 flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </span>
                <div>
                  <span className="font-serif font-bold text-brun-900 text-sm block">
                    {chef.experienceYears}
                  </span>
                  <span className="text-[11px] text-brun-700">Maîtrise gastronomique</span>
                </div>
              </div>
            </div>
          </div>

          {/* Biographie du chef (7 colonnes) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <SectionHeader
              align="left"
              subtitle="Le Savoir-Faire"
              title="La Brigade & l'Exigence Culinaire"
              description="À la tête de nos cuisines, une passion intacte pour le geste juste et l'équilibre des saveurs."
              className="mb-6"
            />

            <div className="mb-6">
              <span className="font-serif text-2xl font-bold text-brun-900 block mb-1">
                {chef.name}
              </span>
              <span className="text-xs uppercase tracking-widest text-olive-600 font-semibold">
                {chef.title}
              </span>
            </div>

            <p className="text-base text-brun-700 font-light leading-relaxed mb-8">
              {chef.bio}
            </p>

            {/* Points forts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white border border-brun-900/5 shadow-xs flex items-center gap-3">
                <ChefHat className="w-5 h-5 text-terracotta-500 shrink-0" />
                <span className="text-xs font-medium text-brun-900">
                  Cuissons douces à basse température
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-brun-900/5 shadow-xs flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-olive-600 shrink-0" />
                <span className="text-xs font-medium text-brun-900">
                  Accords d'herbes sauvages & agrumes
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
