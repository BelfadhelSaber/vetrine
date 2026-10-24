import { restaurantData } from '../data/restaurantData';
import { validateReservationForm } from '../utils/validators';

/**
 * Service pour la gestion des demandes de réservation.
 * ARCHITECTURE ÉVOLUTIVE :
 * - Version actuelle (Site Vitrine) : Valide les entrées, formate un message clair et génère le lien sécurisé vers l'API WhatsApp.
 * - Version future (Backend Spring Boot) : Il suffira d'ajouter un appel POST vers /api/reservations dans submitReservation() sans modifier les composants React !
 */
export const reservationService = {
  /**
   * Génère l'URL WhatsApp avec le message de réservation encodé.
   */
  generateWhatsAppUrl(formData) {
    const { fullName, phone, email, date, time, guests, comment } = formData;

    // Mise en forme de la date pour le message
    let dateFormatted = date;
    try {
      const [y, m, d] = date.split('-');
      dateFormatted = `${d}/${m}/${y}`;
    } catch {
      dateFormatted = date;
    }

    const messageLines = [
      `👋 Bonjour *${restaurantData.name}*,`,
      `Je souhaite effectuer une demande de réservation de table :`,
      ``,
      `👤 *Nom & Prénom* : ${fullName.trim()}`,
      `📞 *Téléphone* : ${phone.trim()}`,
      `📧 *E-mail* : ${email && email.trim() ? email.trim() : 'Non communiqué'}`,
      `📅 *Date souhaitée* : ${dateFormatted}`,
      `⏰ *Heure du service* : ${time}`,
      `👥 *Nombre de personnes* : ${guests} couvert(s)`,
    ];

    if (comment && comment.trim()) {
      messageLines.push(`💬 *Précisions / Allergies* : ${comment.trim()}`);
    }

    messageLines.push(``);
    messageLines.push(`Pouvez-vous s'il vous plaît me confirmer la disponibilité ? Merci !`);

    const fullMessage = messageLines.join('\n');
    const encodedMessage = encodeURIComponent(fullMessage);
    const targetPhone = restaurantData.contact.whatsappClean;

    return `https://wa.me/${targetPhone}?text=${encodedMessage}`;
  },

  /**
   * Traite la soumission de la réservation.
   * Retourne un objet résultat contenant l'URL WhatsApp préparée.
   */
  async submitReservation(formData) {
    // 1. Validation stricte des données
    const errors = validateReservationForm(formData);
    if (Object.keys(errors).length > 0) {
      return Promise.reject({
        success: false,
        errors,
        message: "Certains champs du formulaire comportent des erreurs.",
      });
    }

    // 2. Génération de l'URL WhatsApp
    const whatsappUrl = this.generateWhatsAppUrl(formData);

    // 3. Simulation asynchrone (préparation pour le futur POST API)
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          whatsappUrl,
          data: formData,
          message:
            "Votre demande de réservation a été préparée avec succès. Elle nécessite la confirmation de notre équipe sur WhatsApp.",
        });
      }, 400);
    });
  },
};
