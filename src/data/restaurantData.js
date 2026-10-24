/**
 * Données centralisées du restaurant.
 * Facilement modifiables par le restaurateur ou dans le cadre d'une prestation freelance.
 */
export const restaurantData = {
  name: "L'Olivier Doré",
  tagline: "Table Bistronomique & Saveurs Méditerranéennes",
  description:
    "Une cuisine d'auteur qui sublime les produits du terroir méditerranéen dans un cadre chaleureux et raffiné.",
  contact: {
    address: "***** Avenue *****, *****, *****",
    phone: "+216 ** *** ***",
    phoneClean: "21600000000",
    // Numéro de démonstration WhatsApp masqué pour publication
    whatsapp: "+216 ** *** ***",
    whatsappClean: "21600000000",
    email: "contact@*****.com",
    googleMapsUrl: "https://maps.google.com/?q=*****",
  },
  openingHours: [
    { days: "Lundi - Jeudi", hours: "12h00 - 15h00 & 19h00 - 23h00" },
    { days: "Vendredi - Samedi", hours: "12h00 - 15h30 & 19h00 - 00h00" },
    { days: "Dimanche", hours: "12h00 - 16h00 (Service continu brunch & déjeuner)" },
  ],
  socials: {
    instagram: "https://instagram.com/*****",
    facebook: "https://facebook.com/*****",
  },
  features: [
    { title: "Produits Frais & Locaux", desc: "Arrivages quotidiens de pêcheurs et maraîchers locaux" },
    { title: "Cave Sélectionnée", desc: "Sélection de cépages et boissons artisanales" },
    { title: "Cadre Authentique", desc: "Une ambiance tamisée et une terrasse ombragée d'oliviers" },
  ],
};
