import { useState, useEffect } from 'react';
import SectionHeader from '../common/SectionHeader';
import Card from '../common/Card';
import Badge from '../common/Badge';
import Button from '../common/Button';
import ImageWithFallback from '../common/ImageWithFallback';
import { menuService } from '../../services/menuService';
import { UtensilsCrossed, ArrowRight, Sparkles } from 'lucide-react';

/**
 * Présentation des spécialités et plats populaires du restaurant.
 * Récupère les données depuis menuService (prêt pour le futur backend).
 */
export default function FeaturedDishes() {
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    menuService.getFeaturedDishes().then((data) => {
      // On prend les 3 ou 4 spécialités phares
      setDishes(data.slice(0, 3));
      setLoading(false);
    });
  }, []);

  return (
    <section className="py-20 md:py-28 bg-creme-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="La Table du Chef"
          title="Nos Spécialités Signatures"
          description="Chaque recette est une interprétation raffinée des saveurs méditerranéennes, préparée à la minute avec des produits de saison."
        />

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div key={n} className="h-96 rounded-3xl bg-creme-200 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {dishes.map((dish) => (
              <Card
                key={dish.id}
                padding="p-0"
                className="overflow-hidden flex flex-col h-full group"
              >
                {/* Photo du plat avec zoom fluide au survol */}
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={dish.imageUrl}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    containerClassName="w-full h-full"
                    fallbackText={dish.name}
                  />

                  {/* Badge de spécialité */}
                  {dish.badgeText && (
                    <div className="absolute top-4 left-4 z-20">
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

                  {/* Prix en TND */}
                  <div className="absolute bottom-4 right-4 z-20 bg-brun-900/90 backdrop-blur-md text-creme-100 px-3.5 py-1.5 rounded-full text-sm font-semibold tracking-wide shadow-md">
                    {dish.price} <span className="text-xs font-normal text-terracotta-300">TND</span>
                  </div>
                </div>

                {/* Détails du plat */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-brun-900 mb-3 group-hover:text-terracotta-600 transition-colors">
                      {dish.name}
                    </h3>
                    <p className="text-sm text-brun-700 leading-relaxed font-light mb-6">
                      {dish.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-brun-900/5 flex items-center justify-between text-xs text-olive-600 font-medium">
                    <span>Cuisine fraîche du jour</span>
                    <span className="text-terracotta-500 group-hover:translate-x-1 transition-transform">
                      Découvrir ›
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Bouton d'action vers le menu complet */}
        <div className="mt-14 text-center">
          <Button
            to="/menu"
            variant="outline"
            size="lg"
            icon={ArrowRight}
            iconPosition="right"
            className="border-brun-900 text-brun-900 hover:bg-brun-900 hover:text-white"
          >
            Consulter l'ensemble de la carte
          </Button>
        </div>
      </div>
    </section>
  );
}
