import { galleryCategories, galleryImages } from '../data/galleryData';

/**
 * Service pour la galerie photographique.
 * ARCHITECTURE ÉVOLUTIVE :
 * Prêt pour une transition vers Spring Boot (fetch('/api/gallery')).
 */
export const galleryService = {
  async getCategories() {
    const categoriesWithCount = galleryCategories.map((cat) => {
      const count =
        cat.id === 'all'
          ? galleryImages.length
          : galleryImages.filter((img) => img.category === cat.id).length;
      return { ...cat, count };
    });
    return Promise.resolve(categoriesWithCount);
  },

  async getImages(categoryId = 'all') {
    if (!categoryId || categoryId === 'all') {
      return Promise.resolve(galleryImages);
    }
    const filtered = galleryImages.filter((img) => img.category === categoryId);
    return Promise.resolve(filtered);
  },
};
