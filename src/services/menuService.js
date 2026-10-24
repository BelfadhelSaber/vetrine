import { menuCategories, menuDishes } from '../data/menuData';

/**
 * Service pour la gestion du menu du restaurant.
 * ARCHITECTURE ÉVOLUTIVE :
 * - Renvoie des Promesses asynchrones (Promise.resolve)
 * - Simule des filtres et une recherche serveur
 * - Prêt pour une transition directe vers Spring Boot (fetch('/api/dishes?...'))
 */
export const menuService = {
  /**
   * Récupère la liste des catégories avec le décompte de chaque catégorie
   */
  async getCategories() {
    const categoriesWithCount = menuCategories.map((cat) => {
      const count =
        cat.id === 'all'
          ? menuDishes.length
          : menuDishes.filter((dish) => dish.category === cat.id).length;
      return { ...cat, count };
    });
    return Promise.resolve(categoriesWithCount);
  },

  /**
   * Récupère tous les plats du restaurant
   */
  async getAllDishes() {
    return Promise.resolve(menuDishes);
  },

  /**
   * Récupère les plats signatures mis en avant
   */
  async getFeaturedDishes() {
    const featured = menuDishes.filter((dish) => dish.isSpecialty);
    return Promise.resolve(featured);
  },

  /**
   * Récupère les plats selon une catégorie et un terme de recherche optionnel
   */
  async getDishes(categoryId = 'all', searchQuery = '') {
    let result = menuDishes;

    if (categoryId && categoryId !== 'all') {
      result = result.filter((dish) => dish.category === categoryId);
    }

    if (searchQuery && searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(
        (dish) =>
          dish.name.toLowerCase().includes(query) ||
          dish.description.toLowerCase().includes(query) ||
          (dish.dietary && dish.dietary.toLowerCase().includes(query))
      );
    }

    return Promise.resolve(result);
  },
};
