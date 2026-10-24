import { useState, useEffect } from 'react';
import MenuHero from '../components/menu/MenuHero';
import CategoryFilter from '../components/menu/CategoryFilter';
import MenuSearch from '../components/menu/MenuSearch';
import MenuItemCard from '../components/menu/MenuItemCard';
import Button from '../components/common/Button';
import { menuService } from '../services/menuService';
import { Utensils, Calendar, RotateCcw } from 'lucide-react';

/**
 * Page complète du Menu du restaurant (Sprint 4).
 * - Filtrage réactif par catégories (Entrées, Salades, Plats, Pâtes/Pizzas, Desserts, Boissons).
 * - Recherche en temps réel par mots-clés.
 * - Tarification en Dinars Tunisiens (TND).
 * - Données centralisées et servies via le Service Layer prêt pour l'API Spring Boot.
 */
export default function MenuPage() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Chargement initial des catégories avec les décomptes
  useEffect(() => {
    menuService.getCategories().then((cats) => {
      setCategories(cats);
    });
  }, []);

  // Chargement des plats en fonction de la catégorie et de la recherche
  useEffect(() => {
    setLoading(true);
    menuService.getDishes(selectedCategory, searchQuery).then((data) => {
      setDishes(data);
      setLoading(false);
    });
  }, [selectedCategory, searchQuery]);

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-creme-100 flex flex-col pb-20">
      {/* En-tête éditorial du menu */}
      <MenuHero />

      {/* Barre de navigation des catégories et de recherche */}
      <div className="sticky top-20 z-30 bg-creme-100/95 backdrop-blur-md py-4 border-b border-brun-900/5 shadow-xs transition-all">
        <div className="max-w-7xl mx-auto">
          {/* Filtres par catégories */}
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={(id) => setSelectedCategory(id)}
          />

          {/* Recherche intégrée */}
          <div className="mt-4">
            <MenuSearch
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onClear={() => setSearchQuery('')}
              totalResults={dishes.length}
            />
          </div>
        </div>
      </div>

      {/* Grille principale des mets */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 flex-1">
        {loading ? (
          /* Squelette de chargement */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-96 rounded-3xl bg-creme-200/70 animate-pulse" />
            ))}
          </div>
        ) : dishes.length > 0 ? (
          /* Affichage des plats */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {dishes.map((dish) => (
              <MenuItemCard key={dish.id} dish={dish} />
            ))}
          </div>
        ) : (
          /* État vide en cas d'aucun résultat */
          <div className="py-20 text-center max-w-md mx-auto">
            <div className="w-16 h-16 rounded-full bg-terracotta-100 text-terracotta-500 mx-auto flex items-center justify-center mb-4">
              <Utensils className="w-8 h-8" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-brun-900 mb-2">
              Aucun met ne correspond à votre recherche
            </h2>
            <p className="text-sm text-brun-700 font-light mb-6">
              Essayez de modifier votre mot-clé ou d'afficher l'ensemble de nos catégories.
            </p>
            <Button
              onClick={handleResetFilters}
              variant="outline"
              size="md"
              icon={RotateCcw}
              iconPosition="left"
            >
              Réinitialiser les filtres
            </Button>
          </div>
        )}
      </div>

      {/* Bannière de bas de page incitant à la réservation */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 text-center">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-brun-900/10 shadow-soft">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brun-900 mb-3">
            Vous avez choisi vos mets favoris ?
          </h3>
          <p className="text-brun-700 text-sm sm:text-base font-light max-w-xl mx-auto mb-6">
            Réservez votre table dès à présent pour vous assurer des meilleurs arrivages du chef et d'un accueil privilégié sous nos oliviers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/reservation" size="lg" icon={Calendar} iconPosition="left">
              Réserver votre table
            </Button>
            <Button to="/contact" variant="outline" size="lg">
              Coordonnées & Horaires
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
