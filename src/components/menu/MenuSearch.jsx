import { Search, X } from 'lucide-react';

/**
 * Barre de recherche en temps réel pour le menu.
 * Permet de rechercher par nom, ingrédient ou préférence diététique.
 */
export default function MenuSearch({ searchQuery, onSearchChange, onClear, totalResults }) {
  return (
    <div className="max-w-md mx-auto px-4 mb-8">
      <div className="relative flex items-center">
        <Search className="w-4 h-4 text-brun-700/60 absolute left-4 pointer-events-none" />

        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Rechercher un plat, ingrédient (ex: poulpe, agneau, pistache)..."
          className="w-full pl-11 pr-10 py-3 rounded-full bg-white border border-brun-900/10 text-brun-900 placeholder:text-brun-700/50 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:border-terracotta-500 shadow-soft transition-all"
          aria-label="Rechercher un plat dans le menu"
        />

        {searchQuery && (
          <button
            type="button"
            onClick={onClear}
            className="absolute right-3.5 p-1 rounded-full text-brun-700/60 hover:text-brun-900 hover:bg-creme-200 focus:outline-none"
            aria-label="Effacer la recherche"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {searchQuery && (
        <p className="text-center text-xs text-brun-700 mt-2 font-light">
          {totalResults} {totalResults > 1 ? 'résultats trouvés' : 'résultat trouvé'} pour « {searchQuery} »
        </p>
      )}
    </div>
  );
}
