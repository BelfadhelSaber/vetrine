import { useState, useEffect } from 'react';
import GalleryHero from '../components/gallery/GalleryHero';
import GalleryFilter from '../components/gallery/GalleryFilter';
import GalleryGrid from '../components/gallery/GalleryGrid';
import LightboxModal from '../components/gallery/LightboxModal';
import Button from '../components/common/Button';
import { galleryService } from '../services/galleryService';
import { Calendar, UtensilsCrossed } from 'lucide-react';

/**
 * Page Galerie photographique complète (Sprint 5).
 * - Grille d'images culinaires et d'ambiance.
 * - Filtrage par catégories (Plats, Salle, Terrasse, Équipe).
 * - Visionneuse plein écran interactive (Lightbox) au clic.
 */
export default function GalleryPage() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  // État de la Lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Chargement des catégories
  useEffect(() => {
    galleryService.getCategories().then((cats) => {
      setCategories(cats);
    });
  }, []);

  // Chargement des images selon la catégorie
  useEffect(() => {
    setLoading(true);
    galleryService.getImages(selectedCategory).then((data) => {
      setImages(data);
      setLoading(false);
    });
  }, [selectedCategory]);

  const handleOpenLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
  };

  const handlePrevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-creme-100 flex flex-col pb-20">
      {/* 1. En-tête */}
      <GalleryHero />

      {/* 2. Barre de filtres par catégories */}
      <div className="sticky top-20 z-30 bg-creme-100/95 backdrop-blur-md py-4 border-b border-brun-900/5 shadow-xs transition-all">
        <div className="max-w-7xl mx-auto">
          <GalleryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={(id) => setSelectedCategory(id)}
          />
        </div>
      </div>

      {/* 3. Grille photographique */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 flex-1">
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-[4/3] rounded-3xl bg-creme-200/70 animate-pulse" />
            ))}
          </div>
        ) : (
          <GalleryGrid images={images} onImageClick={handleOpenLightbox} />
        )}
      </div>

      {/* 4. Modale Lightbox interactive */}
      <LightboxModal
        isOpen={lightboxOpen}
        images={images}
        currentIndex={currentIndex}
        onClose={handleCloseLightbox}
        onPrev={handlePrevImage}
        onNext={handleNextImage}
      />

      {/* 5. Appel à la réservation */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 text-center">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-brun-900/10 shadow-soft">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brun-900 mb-3">
            Envie de vivre l'expérience en vrai ?
          </h3>
          <p className="text-brun-700 text-sm sm:text-base font-light max-w-xl mx-auto mb-8">
            Venez vous installer sous nos oliviers ou dans notre salle feutrée. Réservez votre table en quelques instants.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/reservation" size="lg" icon={Calendar} iconPosition="left">
              Réserver votre table
            </Button>
            <Button to="/menu" variant="outline" size="lg" icon={UtensilsCrossed} iconPosition="left">
              Découvrir le menu
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
