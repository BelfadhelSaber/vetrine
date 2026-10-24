import Badge from '../common/Badge';
import { Camera } from 'lucide-react';
import { restaurantData } from '../../data/restaurantData';

/**
 * En-tête de la page Galerie.
 */
export default function GalleryHero() {
  return (
    <section className="relative pt-12 pb-14 md:pt-20 md:pb-20 bg-gradient-to-b from-creme-200/50 via-creme-100 to-creme-100 border-b border-brun-900/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Badge
          variant="terracotta"
          size="md"
          icon={Camera}
          className="mb-4 shadow-sm"
        >
          Immersion Visuelle & Atmosphère
        </Badge>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-brun-900 tracking-tight mb-4 leading-tight">
          La Galerie de <span className="italic text-terracotta-500">{restaurantData.name}</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-brun-700 max-w-2xl mx-auto font-light leading-relaxed">
          Plongez au cœur de notre univers : créations culinaires, salle intimiste, terrasse ombragée et gestes précis de notre brigade.
        </p>
      </div>
    </section>
  );
}
