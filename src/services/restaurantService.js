import { restaurantData } from '../data/restaurantData';

/**
 * Service pour les informations du restaurant.
 * ARCHITECTURE ÉVOLUTIVE (Prête pour le futur backend) :
 * Aujourd'hui : renvoie les données statiques locales.
 * Demain (avec Spring Boot / Node) : il suffira de remplacer par fetch('/api/restaurant')
 * sans modifier aucun composant React !
 */
export const restaurantService = {
  async getRestaurantInfo() {
    // Simule une promesse asynchrone pour préparer l'architecture API
    return Promise.resolve(restaurantData);
  },
};
