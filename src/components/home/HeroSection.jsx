import Button from '../common/Button';
import Badge from '../common/Badge';
import ImageWithFallback from '../common/ImageWithFallback';
import { Calendar, UtensilsCrossed, Sparkles, Fish, Leaf, Flame } from 'lucide-react';
import { restaurantData } from '../../data/restaurantData';

/**
 * Grande section d'accueil (Hero) avec photographie culinaire immersive.
 * Conçue pour créer un effet WOW immédiat tout en restant fluide et lisible.
 */
export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-brun-950 text-creme-100">
      {/* Image d'arrière-plan avec dégradé gastronomique sombre pour un contraste parfait */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1920&q=85"
          alt="Gastronomie méditerranéenne d'exception"
          className="w-full h-full object-cover scale-105 filter brightness-[0.4] contrast-[1.05]"
          containerClassName="w-full h-full"
        />
        {/* Dégradé doux pour fondre l'image avec la palette */}
        <div className="absolute inset-0 bg-gradient-to-t from-brun-950 via-brun-950/60 to-brun-950/40" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
        {/* Badge supérieur */}
        <div className="inline-flex items-center gap-2 mb-6">
          <Badge
            variant="terracotta"
            size="md"
            icon={Sparkles}
            className="bg-terracotta-500/20 text-terracotta-300 border-terracotta-400/40 backdrop-blur-md px-4 py-1.5"
          >
            Bienvenue à {restaurantData.name}
          </Badge>
        </div>

        {/* Titre principal */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-creme-50 leading-[1.1] mb-6">
          L'émotion culinaire au cœur de la{' '}
          <span className="italic font-serif text-terracotta-400">Méditerranée</span>
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl md:text-2xl text-creme-200/90 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          {restaurantData.description}
        </p>

        {/* Boutons d'action principaux */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-14">
          <Button
            to="/reservation"
            size="lg"
            variant="primary"
            icon={Calendar}
            iconPosition="left"
            className="w-full sm:w-auto shadow-xl shadow-terracotta-500/30 text-base"
          >
            Réserver une table
          </Button>

          <Button
            to="/menu"
            size="lg"
            variant="outline"
            icon={UtensilsCrossed}
            iconPosition="left"
            className="w-full sm:w-auto border-creme-200/40 text-creme-100 hover:bg-creme-100 hover:text-brun-900"
          >
            Découvrir la carte
          </Button>
        </div>

        {/* Éléments de réassurance gastronomique */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-creme-100/10 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2.5 text-xs sm:text-sm text-creme-200/80">
            <Fish className="w-4 h-4 text-terracotta-400 shrink-0" />
            <span>Pêche côtière & arrivages quotidiens</span>
          </div>
          <div className="flex items-center justify-center gap-2.5 text-xs sm:text-sm text-creme-200/80">
            <Leaf className="w-4 h-4 text-olive-400 shrink-0" />
            <span>Huiles d'olive & terroirs d'exception</span>
          </div>
          <div className="flex items-center justify-center gap-2.5 text-xs sm:text-sm text-creme-200/80">
            <Flame className="w-4 h-4 text-terracotta-400 shrink-0" />
            <span>Cuissons lentes & braises douces</span>
          </div>
        </div>
      </div>
    </section>
  );
}
