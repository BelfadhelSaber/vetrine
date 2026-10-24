import AboutHero from '../components/about/AboutHero';
import StorySection from '../components/about/StorySection';
import ChefSection from '../components/about/ChefSection';
import ValuesSection from '../components/about/ValuesSection';
import TimelineSection from '../components/about/TimelineSection';
import Button from '../components/common/Button';
import { Calendar, UtensilsCrossed } from 'lucide-react';

/**
 * Page À propos complète (Sprint 5).
 * Présentation de l'histoire, du concept culinaire, du chef, des valeurs et des jalons.
 */
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-creme-100 flex flex-col pb-20">
      {/* 1. En-tête */}
      <AboutHero />

      {/* 2. Histoire & Origine */}
      <StorySection />

      {/* 3. Le Chef & la Brigade */}
      <ChefSection />

      {/* 4. Les 4 Piliers & Valeurs */}
      <ValuesSection />

      {/* 5. Frise chronologique */}
      <TimelineSection />

      {/* 6. Appel final à la réservation */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-brun-900/10 shadow-soft">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brun-900 mb-3">
            Venez partager notre table
          </h3>
          <p className="text-brun-700 text-sm sm:text-base font-light max-w-xl mx-auto mb-8">
            Rien ne remplace la dégustation en direct. Réservez votre table pour savourer notre cuisine authentique sous les oliviers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/reservation" size="lg" icon={Calendar} iconPosition="left">
              Réserver votre table
            </Button>
            <Button to="/menu" variant="outline" size="lg" icon={UtensilsCrossed} iconPosition="left">
              Consulter la carte
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
