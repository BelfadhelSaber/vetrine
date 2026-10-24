import SectionHeader from '../common/SectionHeader';
import Button from '../common/Button';
import ImageWithFallback from '../common/ImageWithFallback';
import { Camera, Sun, Moon, Wine } from 'lucide-react';

/**
 * Section visuelle consacrée à l'ambiance et au cadre du restaurant.
 * Montre l'intérieur, la terrasse et le bar sans fausses promesses ni faux avis.
 */
export default function AmbienceSection() {
  const ambienceCards = [
    {
      title: "La Terrasse sous les Oliviers",
      desc: "Idéale pour un déjeuner ensoleillé bercé par une douce brise méditerranéenne.",
      imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      icon: Sun,
    },
    {
      title: "La Salle & ses Lumières Tamisées",
      desc: "Une atmosphère intime et feutrée pour vos dîners romantiques ou d'affaires.",
      imageUrl: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80",
      icon: Moon,
    },
    {
      title: "Le Comptoir & Créations Botaniques",
      desc: "Un espace chaleureux pour déguster des mocktails et boissons artisanales.",
      imageUrl: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=800&q=80",
      icon: Wine,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-creme-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Atmosphère & Décor"
          title="Un Cadre Conçu pour Savourer l'Instant"
          description="Entre élégance contemporaine et chaleur méditerranéenne, découvrez nos différents espaces conçus pour votre bien-être."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {ambienceCards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-3xl overflow-hidden bg-white shadow-soft transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-1 border border-brun-900/5 flex flex-col"
              >
                {/* Image du lieu */}
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    containerClassName="w-full h-full"
                    fallbackText={item.title}
                  />
                  <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md text-terracotta-600 flex items-center justify-center shadow-md">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Texte de l'ambiance */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-brun-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-brun-700 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bouton vers la galerie */}
        <div className="text-center">
          <Button
            to="/galerie"
            variant="outline"
            size="md"
            icon={Camera}
            iconPosition="left"
            className="border-terracotta-500 text-terracotta-600 hover:bg-terracotta-500 hover:text-white"
          >
            Explorer toute la galerie photographique
          </Button>
        </div>
      </div>
    </section>
  );
}
