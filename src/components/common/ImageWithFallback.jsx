import { useState } from 'react';
import { Utensils } from 'lucide-react';

/**
 * Composant d'image sécurisé avec solution de repli (fallback).
 * - Affiche une élégante illustration de secours si le chargement de l'image échoue.
 * - Évite tout affichage d'icône d'image brisée.
 * - Supporte le chargement différé (lazy loading).
 */
export default function ImageWithFallback({
  src,
  alt,
  className = '',
  containerClassName = '',
  fallbackText = "L'Olivier Doré",
  ...props
}) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative overflow-hidden bg-creme-200/60 ${containerClassName}`}>
      {/* Squelette de chargement doux */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-r from-creme-200 via-creme-100 to-creme-200 animate-pulse z-10" />
      )}

      {/* Affichage de secours en cas d'erreur de chargement */}
      {hasError ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-gradient-to-br from-creme-200 to-creme-300 text-brun-700">
          <div className="w-12 h-12 rounded-full bg-white/70 flex items-center justify-center mb-2 text-terracotta-500 shadow-sm">
            <Utensils className="w-6 h-6" />
          </div>
          <span className="font-serif text-sm font-semibold text-brun-900">{fallbackText}</span>
          <span className="text-[11px] text-brun-700/80 mt-0.5">Photographie gastronomique</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
          className={`w-full h-full object-cover transition-transform duration-500 ${className}`}
          {...props}
        />
      )}
    </div>
  );
}
