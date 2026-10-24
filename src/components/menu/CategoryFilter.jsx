/**
 * Barre de navigation des catégories de plats.
 * - Défilement horizontal fluide sur mobile (swipe touch-friendly).
 * - Indicateur actif avec badge de décompte du nombre de plats.
 */
export default function CategoryFilter({
  categories = [],
  selectedCategory = 'all',
  onSelectCategory,
}) {
  return (
    <div className="w-full overflow-x-auto no-scrollbar py-2">
      <div className="flex items-center gap-2 sm:gap-3 min-w-max px-4 sm:px-6 lg:px-8 justify-start md:justify-center mx-auto">
        {categories.map((category) => {
          const isSelected = selectedCategory === category.id;

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => onSelectCategory(category.id)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-terracotta-500 select-none ${
                isSelected
                  ? 'bg-terracotta-500 text-white shadow-md shadow-terracotta-500/25 scale-[1.02]'
                  : 'bg-white text-brun-800 hover:bg-creme-200/80 border border-brun-900/5'
              }`}
              aria-pressed={isSelected}
            >
              <span>{category.name}</span>

              {/* Badge de nombre de plats */}
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                  isSelected
                    ? 'bg-white/25 text-white'
                    : 'bg-creme-200 text-brun-700'
                }`}
              >
                {category.count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
