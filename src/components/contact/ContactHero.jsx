import Badge from '../common/Badge';
import { Calendar, Sparkles, MessageSquare, Clock } from 'lucide-react';
import { restaurantData } from '../../data/restaurantData';

/**
 * En-tête de la page Contact et Réservation.
 */
export default function ContactHero() {
  return (
    <section className="relative pt-12 pb-14 md:pt-20 md:pb-20 bg-gradient-to-b from-creme-200/50 via-creme-100 to-creme-100 border-b border-brun-900/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Badge
          variant="terracotta"
          size="md"
          icon={Calendar}
          className="mb-4 shadow-sm"
        >
          Réservation & Coordonnées
        </Badge>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-brun-900 tracking-tight mb-4 leading-tight">
          Réservez Votre Table à{' '}
          <span className="italic text-terracotta-500">{restaurantData.name}</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-brun-700 max-w-2xl mx-auto font-light leading-relaxed mb-6">
          Nous vous accueillons à ***** pour vos déjeuners et dîners. Remplissez notre formulaire ou échangez directement avec notre équipe.
        </p>

        {/* Badges d'information */}
        <div className="inline-flex flex-wrap items-center justify-center gap-3 py-2 px-4 rounded-2xl bg-white/80 border border-brun-900/5 text-xs text-brun-700 shadow-sm">
          <span className="flex items-center gap-1.5 font-medium text-olive-700">
            <MessageSquare className="w-3.5 h-3.5" />
            Réponse rapide sur WhatsApp
          </span>
          <span className="text-brun-300">•</span>
          <span className="flex items-center gap-1.5 font-medium text-terracotta-600">
            <Clock className="w-3.5 h-3.5" />
            Services Midi & Soir
          </span>
          <span className="text-brun-300">•</span>
          <span className="text-brun-600">Confirmation manuelle de disponibilité</span>
        </div>
      </div>
    </section>
  );
}
