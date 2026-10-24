/**
 * Utilitaires de validation pour le formulaire de réservation.
 */

/**
 * Vérifie si une date est antérieure à la date du jour (heure locale).
 */
export function isPastDate(dateString) {
  if (!dateString) return false;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Découpage YYYY-MM-DD
  const [year, month, day] = dateString.split('-').map(Number);
  const selectedDate = new Date(year, month - 1, day);
  selectedDate.setHours(0, 0, 0, 0);

  return selectedDate < today;
}

/**
 * Récupère la date d'aujourd'hui au format YYYY-MM-DD (pour l'attribut min des inputs date).
 */
export function getTodayDateString() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Valide l'ensemble des champs du formulaire de réservation.
 * Renvoie un objet d'erreurs (vide si tout est valide).
 */
export function validateReservationForm(formData) {
  const errors = {};

  // 1. Nom complet
  if (!formData.fullName || formData.fullName.trim().length < 2) {
    errors.fullName = "Veuillez renseigner votre nom et prénom (au moins 2 caractères).";
  }

  // 2. Téléphone
  const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{6,14}$/;
  if (!formData.phone || !phoneRegex.test(formData.phone.trim())) {
    errors.phone = "Veuillez renseigner un numéro de téléphone valide (ex: +216 98 000 000).";
  }

  // 3. E-mail (facultatif, mais validé si renseigné)
  if (formData.email && formData.email.trim() !== '') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      errors.email = "Le format de l'adresse e-mail est invalide.";
    }
  }

  // 4. Date
  if (!formData.date) {
    errors.date = "Veuillez sélectionner une date pour votre réservation.";
  } else if (isPastDate(formData.date)) {
    errors.date = "La date sélectionnée est passée. Veuillez choisir une date à venir.";
  }

  // 5. Heure / Service
  if (!formData.time) {
    errors.time = "Veuillez choisir un horaire de service.";
  }

  // 6. Nombre de convives
  const guestsNum = Number(formData.guests);
  if (!formData.guests || isNaN(guestsNum) || guestsNum < 1 || guestsNum > 20) {
    errors.guests = "Le nombre de personnes doit être compris entre 1 et 20 convives.";
  }

  return errors;
}
