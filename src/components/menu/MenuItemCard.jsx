import Card from '../common/Card';
import Badge from '../common/Badge';
import ImageWithFallback from '../common/ImageWithFallback';
import { Sparkles, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Carte de plat gastronomique individuelle.
 * Affiche l'image, le badge de spécialité, les tags diététiques, le nom, la description et le prix en TND.
 */
export default function MenuItemCard({ dish }) {
  return (
    <Card
      padding="p-0"
      className="overflow-hidden flex flex-col h-full group bg-white border border-brun-900/5 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300"
    >
      {/* Conteneur d'image avec badges superposés */}
      <div className="relative h-56 sm:h-60 overflow-hidden bg-creme-200">
        <ImageWithFallback
          src={dish.imageUrl}
          alt={dish.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          containerClassName="w-full h-full"
          fallbackText={dish.name}
        />

        {/* Badge Spécialité / Signature en haut à gauche */}
        {dish.badgeText && (
          <div className="absolute top-3.5 left-3.5 z-20">
            <Badge
              variant="terracotta"
              size="sm"
              icon={Sparkles}
              className="bg-terracotta-500 text-white shadow-md border-0"
            >
              {dish.badgeText}
            </Badge>
          </div>
        )}

        {/* Badge diététique en haut à droite */}
        {dish.dietary && (
          <div className="absolute top-3.5 right-3.5 z-20">
            <Badge
              variant="olive"
              size="sm"
              className="bg-white/90 backdrop-blur-md text-olive-800 border-olive-200/50 shadow-sm"
            >
              {dish.dietary}
            </Badge>
          </div>
        )}

        {/* Pastille de Prix en TND en bas à droite */}
        <div className="absolute bottom-3.5 right-3.5 z-20 bg-brun-900/90 backdrop-blur-md text-creme-100 px-3.5 py-1.5 rounded-full text-sm font-semibold tracking-wide shadow-md flex items-center gap-1">
          <span>{dish.price}</span>
          <span className="text-xs font-normal text-terracotta-300">TND</span>
        </div>
      </div>

      {/* Contenu textuel */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-serif text-lg sm:text-xl font-bold text-brun-900 mb-2.5 group-hover:text-terracotta-600 transition-colors leading-snug">
            {dish.name}
          </h3>

          <p className="text-xs sm:text-sm text-brun-700/90 font-light leading-relaxed mb-6">
            {dish.description}
          </p>
        </div>

        {/* Pied de carte avec lien de réservation rapide */}
        <div className="pt-4 border-t border-brun-900/5 flex items-center justify-between">
          <span className="text-[11px] uppercase tracking-wider text-olive-600 font-semibold">
            {dish.category}
          </span>

          <Link
            to="/reservation"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-terracotta-600 hover:text-terracotta-700 group-hover:translate-x-0.5 transition-all"
            title="Réserver pour déguster ce plat"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Réserver une table</span>
          </Link>
        </div>
      </div>
    </Card>
  );
}
