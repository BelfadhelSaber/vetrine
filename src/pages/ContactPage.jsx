import { useState } from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactInfoCards from '../components/contact/ContactInfoCards';
import ReservationForm from '../components/contact/ReservationForm';
import ReservationSuccessModal from '../components/contact/ReservationSuccessModal';
import MapSection from '../components/contact/MapSection';
import FaqSection from '../components/contact/FaqSection';
import Card from '../components/common/Card';
import { Sparkles, ShieldCheck, HeartHandshake, Phone, MessageSquare } from 'lucide-react';
import { restaurantData } from '../data/restaurantData';

/**
 * Page Contact & Réservation complète (Sprint 6).
 * - Coordonnées complètes et interactives.
 * - Formulaire avec validation stricte (dates passées refusées).
 * - Encodage et transmission vers WhatsApp.
 * - Transparence absolue sans prétendre à une fausse validation automatique.
 * - Carte Google Maps et Foire aux questions (FAQ).
 */
export default function ContactPage() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    reservationData: null,
    whatsappUrl: '',
  });

  const handleReservationPrepared = (result) => {
    setModalState({
      isOpen: true,
      reservationData: result.data,
      whatsappUrl: result.whatsappUrl,
    });
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-creme-100 flex flex-col pb-20">
      {/* 1. En-tête */}
      <ContactHero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        {/* 2. Les 4 Cartes de Contact Rapide */}
        <ContactInfoCards />

        {/* 3. Section Formulaire de Réservation & Rappels Déontologiques */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Formulaire (7 colonnes) */}
          <div className="lg:col-span-7">
            <ReservationForm onReservationPrepared={handleReservationPrepared} />
          </div>

          {/* Panneau latéral d'accompagnement (5 colonnes) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Carte Déontologie & Transparence */}
            <Card className="bg-white p-6 sm:p-8 border border-brun-900/10 shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-full bg-olive-100 text-olive-600 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </span>
                <h3 className="font-serif text-lg font-bold text-brun-900">
                  Réservation en Direct & Sans Frais
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-brun-700 font-light leading-relaxed mb-4">
                Chez <strong>{restaurantData.name}</strong>, nous privilégions le contact humain. Votre demande est transmise directement au maître d'hôtel qui vérifie la disponibilité de nos tables en temps réel.
              </p>
              <ul className="space-y-2.5 text-xs text-brun-700 font-light">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-terracotta-500" />
                  <span>Aucun paiement ou carte bancaire requis</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-terracotta-500" />
                  <span>Prise en compte de vos souhaits de placement (terrasse/salle)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-terracotta-500" />
                  <span>Modification ou annulation simple par message</span>
                </li>
              </ul>
            </Card>

            {/* Carte Contact d'urgence / Dernière minute */}
            <Card className="bg-gradient-to-br from-brun-900 to-brun-950 text-creme-100 p-6 sm:p-8 shadow-soft">
              <div className="flex items-center gap-2 text-terracotta-400 text-xs font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                Pour aujourd'hui ?
              </div>
              <h3 className="font-serif text-xl font-bold text-creme-50 mb-3">
                Réservation pour le prochain service
              </h3>
              <p className="text-xs text-creme-200/80 font-light leading-relaxed mb-6">
                Pour une table dans l'heure ou pour le service en cours, contactez-nous directement par téléphone pour une réponse immédiate.
              </p>
              <div className="space-y-3">
                <a
                  href={`tel:${restaurantData.contact.phoneClean}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-terracotta-500 hover:bg-terracotta-600 text-white font-medium text-xs sm:text-sm shadow-md transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Appeler : {restaurantData.contact.phone}</span>
                </a>
                <a
                  href={`https://wa.me/${restaurantData.contact.whatsappClean}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-creme-100 font-medium text-xs sm:text-sm border border-white/20 transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-olive-400" />
                  <span>Message WhatsApp direct</span>
                </a>
              </div>
            </Card>
          </div>
        </div>

        {/* 4. Section Localisation & Carte Google Maps */}
        <MapSection />

        {/* 5. Section FAQ */}
        <FaqSection />
      </div>

      {/* 6. Modale de confirmation WhatsApp */}
      <ReservationSuccessModal
        isOpen={modalState.isOpen}
        reservationData={modalState.reservationData}
        whatsappUrl={modalState.whatsappUrl}
        onClose={handleCloseModal}
      />
    </div>
  );
}
