import { CheckCircle2, MessageSquare, AlertCircle, X, Calendar, Users, Clock, Phone } from 'lucide-react';
import Button from '../common/Button';

/**
 * Modale de confirmation de préparation de la demande.
 * Respecte rigoureusement la déontologie : informe avec transparence que la réservation
 * sera confirmée après validation manuelle par l'équipe sur WhatsApp.
 */
export default function ReservationSuccessModal({
  isOpen,
  reservationData,
  whatsappUrl,
  onClose,
}) {
  if (!isOpen || !reservationData) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-brun-950/80 backdrop-blur-sm p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-brun-900/10 animate-in fade-in zoom-in-95 duration-200">
        {/* Bouton de fermeture */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-brun-700/60 hover:text-brun-900 hover:bg-creme-100 transition-colors"
          aria-label="Fermer la fenêtre"
        >
          <X className="w-5 h-5" />
        </button>

        {/* En-tête de la modale */}
        <div className="text-center mb-6">
          <div className="w-14 h-14 rounded-full bg-olive-100 text-olive-600 mx-auto flex items-center justify-center mb-4 shadow-sm">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h2 id="modal-title" className="font-serif text-2xl sm:text-3xl font-bold text-brun-900 mb-2">
            Votre demande est prête !
          </h2>
          <p className="text-xs sm:text-sm text-brun-700 font-light">
            Transmettez-la en un clic à notre équipe sur WhatsApp pour vérifier la disponibilité de votre table.
          </p>
        </div>

        {/* Récapitulatif de la réservation */}
        <div className="bg-creme-50 p-4 sm:p-5 rounded-2xl border border-brun-900/5 mb-6 space-y-2.5 text-xs sm:text-sm text-brun-800">
          <div className="flex items-center justify-between pb-2 border-b border-brun-900/5">
            <span className="text-brun-700 font-light flex items-center gap-2">
              <Users className="w-4 h-4 text-terracotta-500" /> Nom & Prénom :
            </span>
            <span className="font-semibold text-brun-900">{reservationData.fullName}</span>
          </div>

          <div className="flex items-center justify-between pb-2 border-b border-brun-900/5">
            <span className="text-brun-700 font-light flex items-center gap-2">
              <Calendar className="w-4 h-4 text-terracotta-500" /> Date :
            </span>
            <span className="font-semibold text-brun-900">{reservationData.date}</span>
          </div>

          <div className="flex items-center justify-between pb-2 border-b border-brun-900/5">
            <span className="text-brun-700 font-light flex items-center gap-2">
              <Clock className="w-4 h-4 text-terracotta-500" /> Horaire :
            </span>
            <span className="font-semibold text-brun-900">{reservationData.time}</span>
          </div>

          <div className="flex items-center justify-between pb-2 border-b border-brun-900/5">
            <span className="text-brun-700 font-light flex items-center gap-2">
              <Users className="w-4 h-4 text-terracotta-500" /> Nombre de convives :
            </span>
            <span className="font-semibold text-brun-900">{reservationData.guests} personne(s)</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-brun-700 font-light flex items-center gap-2">
              <Phone className="w-4 h-4 text-terracotta-500" /> Téléphone :
            </span>
            <span className="font-semibold text-brun-900">{reservationData.phone}</span>
          </div>
        </div>

        {/* Avertissement déontologique transparent */}
        <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200/80 mb-6 flex items-start gap-3 text-xs text-amber-900">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Important :</strong> Ce message prérempli sera envoyé sur WhatsApp. Votre réservation sera confirmée dès réception de la réponse de notre restaurant.
          </p>
        </div>

        {/* Bouton d'action principal vers WhatsApp */}
        <div className="space-y-3">
          <Button
            href={whatsappUrl}
            variant="secondary"
            size="lg"
            icon={MessageSquare}
            iconPosition="left"
            className="w-full justify-center text-base bg-olive-600 hover:bg-olive-700 shadow-xl"
            onClick={onClose}
          >
            Ouvrir WhatsApp & Envoyer ma demande
          </Button>

          <button
            type="button"
            onClick={onClose}
            className="w-full text-center py-2 text-xs text-brun-700 hover:text-brun-900 font-medium transition-colors"
          >
            Modifier ma saisie ou fermer
          </button>
        </div>
      </div>
    </div>
  );
}
