import { useState } from 'react';
import Card from '../common/Card';
import Button from '../common/Button';
import { Calendar, Clock, Users, User, Phone, Mail, MessageSquare, AlertCircle } from 'lucide-react';
import { getTodayDateString, validateReservationForm } from '../../utils/validators';
import { reservationService } from '../../services/reservationService';

const timeSlots = [
  { group: "Service du Midi", times: ["12:00", "12:30", "13:00", "13:30", "14:00", "14:30"] },
  { group: "Service du Soir", times: ["19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"] },
];

/**
 * Formulaire interactif de demande de réservation.
 * Contrôle rigoureusement les champs, interdit les dates passées et prépare l'action WhatsApp.
 */
export default function ReservationForm({ onReservationPrepared }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    date: '',
    time: '20:00',
    guests: '2',
    comment: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Supprime l'erreur du champ modifié dès la frappe
    if (errors[name]) {
      setErrors((prev) => {
        const newErr = { ...prev };
        delete newErr[name];
        return newErr;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Validation locale
    const validationErrors = validateReservationForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // 2. Traitement via le service de réservation
      const result = await reservationService.submitReservation(formData);
      setIsSubmitting(false);

      if (result.success && onReservationPrepared) {
        onReservationPrepared(result);
      }
    } catch (err) {
      setIsSubmitting(false);
      if (err.errors) {
        setErrors(err.errors);
      }
    }
  };

  const todayMin = getTodayDateString();

  return (
    <Card className="bg-white p-6 sm:p-10 shadow-soft-lg border border-brun-900/10">
      <div className="mb-8 pb-6 border-b border-brun-900/10">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brun-900 mb-2">
          Demande de Réservation
        </h2>
        <p className="text-xs sm:text-sm text-brun-700 font-light">
          Remplissez le formulaire ci-dessous. Votre demande sera instantanément mise en forme pour validation sur WhatsApp.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Ligne 1 : Nom & Téléphone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Nom & Prénom */}
          <div>
            <label htmlFor="fullName" className="block text-xs font-semibold text-brun-900 mb-2">
              Nom & Prénom <span className="text-terracotta-500">*</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-brun-700/50 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Ex : Karim Ben Ali"
                className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-brun-900 placeholder:text-brun-700/40 focus:outline-none focus:ring-2 transition-all ${
                  errors.fullName
                    ? 'border-red-400 focus:ring-red-400 bg-red-50/20'
                    : 'border-brun-900/15 focus:ring-terracotta-500 bg-creme-50/50'
                }`}
              />
            </div>
            {errors.fullName && (
              <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.fullName}</span>
              </p>
            )}
          </div>

          {/* Téléphone */}
          <div>
            <label htmlFor="phone" className="block text-xs font-semibold text-brun-900 mb-2">
              Numéro de Téléphone <span className="text-terracotta-500">*</span>
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-brun-700/50 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+216 ** *** ***"
                className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-brun-900 placeholder:text-brun-700/40 focus:outline-none focus:ring-2 transition-all ${
                  errors.phone
                    ? 'border-red-400 focus:ring-red-400 bg-red-50/20'
                    : 'border-brun-900/15 focus:ring-terracotta-500 bg-creme-50/50'
                }`}
              />
            </div>
            {errors.phone && (
              <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.phone}</span>
              </p>
            )}
          </div>
        </div>

        {/* Ligne 2 : Email (facultatif) & Nombre de convives */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* E-mail */}
          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-brun-900 mb-2">
              Adresse E-mail <span className="text-brun-700/60 font-normal">(facultatif)</span>
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-brun-700/50 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="votre.email@exemple.com"
                className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-brun-900 placeholder:text-brun-700/40 focus:outline-none focus:ring-2 transition-all ${
                  errors.email
                    ? 'border-red-400 focus:ring-red-400 bg-red-50/20'
                    : 'border-brun-900/15 focus:ring-terracotta-500 bg-creme-50/50'
                }`}
              />
            </div>
            {errors.email && (
              <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.email}</span>
              </p>
            )}
          </div>

          {/* Nombre de personnes */}
          <div>
            <label htmlFor="guests" className="block text-xs font-semibold text-brun-900 mb-2">
              Nombre de Personnes <span className="text-terracotta-500">*</span>
            </label>
            <div className="relative">
              <Users className="w-4 h-4 text-brun-700/50 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <select
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-brun-900/15 text-sm text-brun-900 bg-creme-50/50 focus:outline-none focus:ring-2 focus:ring-terracotta-500 transition-all cursor-pointer"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20].map((num) => (
                  <option key={num} value={num}>
                    {num} {num > 1 ? 'personnes' : 'personne'}
                  </option>
                ))}
              </select>
            </div>
            {errors.guests && (
              <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.guests}</span>
              </p>
            )}
          </div>
        </div>

        {/* Ligne 3 : Date & Heure */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Date (avec min=today) */}
          <div>
            <label htmlFor="date" className="block text-xs font-semibold text-brun-900 mb-2">
              Date Souhaitée <span className="text-terracotta-500">*</span>
            </label>
            <div className="relative">
              <Calendar className="w-4 h-4 text-brun-700/50 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="date"
                name="date"
                type="date"
                min={todayMin}
                value={formData.date}
                onChange={handleChange}
                className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-brun-900 focus:outline-none focus:ring-2 transition-all ${
                  errors.date
                    ? 'border-red-400 focus:ring-red-400 bg-red-50/20'
                    : 'border-brun-900/15 focus:ring-terracotta-500 bg-creme-50/50'
                }`}
              />
            </div>
            {errors.date && (
              <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.date}</span>
              </p>
            )}
          </div>

          {/* Heure / Service */}
          <div>
            <label htmlFor="time" className="block text-xs font-semibold text-brun-900 mb-2">
              Horaire de Service <span className="text-terracotta-500">*</span>
            </label>
            <div className="relative">
              <Clock className="w-4 h-4 text-brun-700/50 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-brun-900/15 text-sm text-brun-900 bg-creme-50/50 focus:outline-none focus:ring-2 focus:ring-terracotta-500 transition-all cursor-pointer"
              >
                {timeSlots.map((group) => (
                  <optgroup key={group.group} label={group.group}>
                    {group.times.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>
            {errors.time && (
              <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.time}</span>
              </p>
            )}
          </div>
        </div>

        {/* Commentaire / Demande particulière */}
        <div>
          <label htmlFor="comment" className="block text-xs font-semibold text-brun-900 mb-2">
            Demande Particulière ou Remarque <span className="text-brun-700/60 font-normal">(facultatif)</span>
          </label>
          <div className="relative">
            <textarea
              id="comment"
              name="comment"
              rows={3}
              value={formData.comment}
              onChange={handleChange}
              placeholder="Ex : Table en terrasse sous les oliviers, chaise haute pour enfant, allergies alimentaires..."
              className="w-full p-4 rounded-xl border border-brun-900/15 text-sm text-brun-900 placeholder:text-brun-700/40 bg-creme-50/50 focus:outline-none focus:ring-2 focus:ring-terracotta-500 transition-all resize-none"
            />
          </div>
        </div>

        {/* Note de transparence */}
        <div className="p-3.5 rounded-xl bg-creme-200/50 text-[11px] text-brun-700 leading-relaxed border border-brun-900/5">
          ℹ️ <strong>Rappel :</strong> Cette démarche prépare votre message de demande sur WhatsApp. Aucune carte bancaire n'est requise. Votre table vous est réservée dès confirmation par notre équipe.
        </div>

        {/* Bouton de validation */}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          icon={MessageSquare}
          iconPosition="left"
          disabled={isSubmitting}
          className="w-full justify-center text-base shadow-xl"
        >
          {isSubmitting ? 'Préparation en cours...' : 'Envoyer ma demande via WhatsApp'}
        </Button>
      </form>
    </Card>
  );
}
