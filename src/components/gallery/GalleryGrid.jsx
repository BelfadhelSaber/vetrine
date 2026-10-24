import ImageWithFallback from '../common/ImageWithFallback';
import { Maximize2 } from 'lucide-react';

/**
 * Grille photographique responsive.
 * Au survol : effet zoom, filtre sombre doux et icône d'agrandissement.
 * Au clic : déclenche l'ouverture de la Lightbox.
 */
export default function GalleryGrid({ images = [], onImageClick }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {images.map((item, index) => (
        <div
          key={item.id}
          onClick={() => onImageClick(index)}
          className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-creme-200 shadow-soft cursor-pointer border border-brun-900/5 focus:outline-none focus:ring-4 focus:ring-terracotta-500/50"
          tabIndex={0}
          role="button"
          aria-label={`Agrandir la photo : ${item.title}`}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onImageClick(index);
            }
          }}
        >
          {/* Image avec zoom doux au survol */}
          <ImageWithFallback
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
            containerClassName="w-full h-full"
            fallbackText={item.title}
          />

          {/* Voile sombre et informations au survol */}
          <div className="absolute inset-0 bg-gradient-to-t from-brun-950/80 via-brun-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-20">
            <span className="text-[11px] uppercase tracking-wider text-terracotta-400 font-semibold mb-1">
              {item.category}
            </span>
            <h3 className="font-serif text-lg font-bold text-white mb-2 leading-snug">
              {item.title}
            </h3>
            <p className="text-xs text-creme-100/80 font-light line-clamp-2">
              {item.caption}
            </p>

            {/* Bouton d'agrandissement flottant */}
            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
              <Maximize2 className="w-4 h-4" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
