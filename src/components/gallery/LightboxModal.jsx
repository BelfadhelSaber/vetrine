import { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import ImageWithFallback from '../common/ImageWithFallback';

/**
 * Modale Lightbox interactive pour visionner les photos en grand format.
 * - Navigable au clavier (Échap pour fermer, Flèche gauche/droite).
 * - Bloque le défilement du corps pendant l'affichage.
 * - Accessible et tactile.
 */
export default function LightboxModal({
  isOpen,
  images = [],
  currentIndex = 0,
  onClose,
  onPrev,
  onNext,
}) {
  const currentImage = images[currentIndex];

  // Verrouillage du scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Écoute des touches clavier (Échap, Flèche Gauche, Flèche Droite)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onPrev();
      } else if (e.key === 'ArrowRight') {
        onNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !currentImage) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-brun-950/95 backdrop-blur-md p-4 sm:p-6 lg:p-8 select-none"
      role="dialog"
      aria-modal="true"
      aria-label={`Photo agrandie : ${currentImage.title}`}
    >
      {/* Bouton Fermer en haut à droite */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-terracotta-500 hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-terracotta-400"
        aria-label="Fermer la vue grand format (Échap)"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Compteur d'images en haut à gauche */}
      <div className="absolute top-5 left-5 sm:top-7 sm:left-7 z-50 px-3.5 py-1 rounded-full bg-white/10 text-xs font-semibold text-creme-100 tracking-wider">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Flèche Précédent */}
      <button
        type="button"
        onClick={onPrev}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-3 sm:p-4 rounded-full bg-white/10 text-white hover:bg-terracotta-500 hover:scale-110 transition-all focus:outline-none focus:ring-2 focus:ring-terracotta-400"
        aria-label="Photo précédente (Flèche gauche)"
      >
        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      {/* Flèche Suivant */}
      <button
        type="button"
        onClick={onNext}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-3 sm:p-4 rounded-full bg-white/10 text-white hover:bg-terracotta-500 hover:scale-110 transition-all focus:outline-none focus:ring-2 focus:ring-terracotta-400"
        aria-label="Photo suivante (Flèche droite)"
      >
        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      {/* Zone centrale : Image + Légende */}
      <div
        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Conteneur d'image */}
        <div className="relative w-full max-h-[70vh] flex items-center justify-center overflow-hidden rounded-2xl shadow-2xl bg-brun-900/40">
          <img
            src={currentImage.imageUrl}
            alt={currentImage.title}
            className="max-h-[70vh] w-auto max-w-full object-contain rounded-2xl"
          />
        </div>

        {/* Légende sous l'image */}
        <div className="mt-4 text-center max-w-2xl px-4">
          <span className="text-[11px] uppercase tracking-widest text-terracotta-400 font-semibold block mb-1">
            {currentImage.category}
          </span>
          <h2 className="font-serif text-lg sm:text-2xl font-bold text-white mb-1.5">
            {currentImage.title}
          </h2>
          <p className="text-xs sm:text-sm text-creme-200/80 font-light leading-relaxed">
            {currentImage.caption}
          </p>
        </div>
      </div>
    </div>
  );
}
