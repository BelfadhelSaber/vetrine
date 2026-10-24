import Badge from '../common/Badge';
import { Sparkles, Utensils, Info } from 'lucide-react';
import { restaurantData } from '../../data/restaurantData';

/**
 * En-tête éditorial de la page Menu.
 * Présente le concept culinaire et précise la devise (TND).
 */
export default function MenuHero() {
  return (
    <section className="relative pt-12 pb-14 md:pt-20 md:pb-20 bg-gradient-to-b from-creme-200/50 via-creme-100 to-creme-100 border-b border-brun-900/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Badge
          variant="terracotta"
          size="md"
          icon={Sparkles}
          className="mb-4 shadow-sm"
        >
          Carte Gastronomique & Bistronomique
        </Badge>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-brun-900 tracking-tight mb-4">
          La Carte de <span className="italic text-terracotta-500">{restaurantData.name}</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-brun-700 max-w-2xl mx-auto font-light leading-relaxed mb-6">
          Une symphonie de saveurs méditerranéennes, où chaque ingrédient est sélectionné auprès d'artisans passionnés pour sublimer votre dégustation.
        </p>

        {/* Note informative sur la devise et la fraîcheur */}
        <div className="inline-flex flex-wrap items-center justify-center gap-3 py-2 px-4 rounded-2xl bg-white/80 border border-brun-900/5 text-xs text-brun-700 shadow-sm">
          <span className="flex items-center gap-1.5 font-medium text-olive-700">
            <Utensils className="w-3.5 h-3.5" />
            Cuisine 100% faite maison
          </span>
          <span className="text-brun-300">•</span>
          <span className="flex items-center gap-1.5 font-semibold text-brun-900">
            <Info className="w-3.5 h-3.5 text-terracotta-500" />
            Prix nets en Dinars Tunisiens (TND)
          </span>
          <span className="text-brun-300">•</span>
          <span className="text-brun-600">Service & taxes inclus</span>
        </div>
      </div>
    </section>
  );
}
