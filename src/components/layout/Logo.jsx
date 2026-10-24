import { Link } from 'react-router-dom';

/**
 * Composant Logo du restaurant L'Olivier Doré.
 * Supporte le mode clair (header) et le mode sombre (footer).
 */
export default function Logo({ variant = 'light', size = 'md', className = '' }) {
  const isDark = variant === 'dark';

  const sizes = {
    sm: {
      icon: 'w-7 h-7',
      title: 'text-xl',
      subtitle: 'text-[9px] tracking-[0.2em]',
    },
    md: {
      icon: 'w-9 h-9',
      title: 'text-2xl md:text-2xl',
      subtitle: 'text-[10px] tracking-[0.25em]',
    },
    lg: {
      icon: 'w-12 h-12',
      title: 'text-3xl md:text-4xl',
      subtitle: 'text-xs tracking-[0.3em]',
    },
  };

  const currentSize = sizes[size] || sizes.md;

  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-terracotta-500 rounded-lg p-1 ${className}`}
      aria-label="L'Olivier Doré — Retour à l'accueil"
    >
      {/* Emblème visuel : Branche et olive stylisée */}
      <div
        className={`${currentSize.icon} shrink-0 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${
          isDark
            ? 'bg-gradient-to-br from-terracotta-500 to-terracotta-700 text-creme-100 shadow-md'
            : 'bg-gradient-to-br from-terracotta-500 to-terracotta-600 text-white shadow-soft'
        }`}
      >
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor">
          <circle cx="12" cy="14" r="5" fill="#FFF6E8" fillOpacity="0.9" />
          <path
            d="M12 4C9 8 8 11 8 14"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <path
            d="M12 4C14 7 16 9 17 12"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <circle cx="12" cy="14" r="2" fill="#657153" />
        </svg>
      </div>

      {/* Typographie de marque */}
      <div className="flex flex-col">
        <span
          className={`font-serif font-bold tracking-tight transition-colors ${currentSize.title} ${
            isDark
              ? 'text-creme-100 group-hover:text-terracotta-400'
              : 'text-brun-900 group-hover:text-terracotta-600'
          }`}
        >
          L'Olivier Doré
        </span>
        <span
          className={`uppercase font-semibold transition-colors ${currentSize.subtitle} ${
            isDark ? 'text-olive-100' : 'text-olive-600'
          }`}
        >
          Table Bistronomique
        </span>
      </div>
    </Link>
  );
}
