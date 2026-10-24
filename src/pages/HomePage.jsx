import HeroSection from '../components/home/HeroSection';
import FeaturedDishes from '../components/home/FeaturedDishes';
import AboutTeaser from '../components/home/AboutTeaser';
import AmbienceSection from '../components/home/AmbienceSection';
import HoursAndLocation from '../components/home/HoursAndLocation';
import CtaBanner from '../components/home/CtaBanner';

/**
 * Page d'accueil complète (Sprint 3).
 * Structure modulaire et élégante :
 * 1. HeroSection : Photographie culinaire, slogan, badges & CTAs.
 * 2. FeaturedDishes : Plats signatures du chef avec prix en TND.
 * 3. AboutTeaser : Histoire, concept du terroir & savoir-faire.
 * 4. AmbienceSection : Salle intimiste, terrasse sous les oliviers & bar.
 * 5. HoursAndLocation : Horaires de service, accès Google Maps & coordonnées.
 * 6. CtaBanner : Appel à la réservation et contact WhatsApp.
 */
export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. Grande section d'accueil immersive */}
      <HeroSection />

      {/* 2. Plats populaires & spécialités du chef */}
      <FeaturedDishes />

      {/* 3. Présentation du restaurant et philosophie culinaire */}
      <AboutTeaser />

      {/* 4. Ambiance, terrasse et espaces du restaurant */}
      <AmbienceSection />

      {/* 5. Horaires détaillés et localisation */}
      <HoursAndLocation />

      {/* 6. Appel à l'action final chaleureux */}
      <CtaBanner />
    </div>
  );
}
