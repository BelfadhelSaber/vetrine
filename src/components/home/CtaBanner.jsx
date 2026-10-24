import Button from '../common/Button';
import { Calendar, MessageSquare, Sparkles } from 'lucide-react';
import { restaurantData } from '../../data/restaurantData';

/**
 * Bannière d'appel à l'action final (CTA) en bas de la page d'accueil.
 * Invite à réserver ou à nous contacter en toute transparence.
 */
export default function CtaBanner() {
  return (
    <section className="relative py-20 md:py-24 overflow-hidden bg-gradient-to-br from-terracotta-600 via-terracotta-500 to-terracotta-700 text-white">
      {/* Motifs décoratifs subtils en arrière-plan */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-brun-900/20 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-creme-100 text-xs font-semibold uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5 text-creme-200" />
          Votre table vous attend
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-6 leading-tight max-w-3xl mx-auto">
          Offrez-vous un instant de délice <br className="hidden sm:inline" />
          <span className="italic font-serif text-creme-200">sous nos oliviers</span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-creme-100/90 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          Pour un dîner romantique, un déjeuner d'affaires ou une célébration de famille, notre équipe prend soin de chaque détail de votre accueil.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8">
          <Button
            to="/reservation"
            variant="dark"
            size="lg"
            icon={Calendar}
            iconPosition="left"
            className="w-full sm:w-auto shadow-2xl bg-brun-900 hover:bg-brun-950 text-white border-0 text-base"
          >
            Réserver votre table
          </Button>

          <Button
            href={`https://wa.me/${restaurantData.contact.whatsappClean}`}
            variant="secondary"
            size="lg"
            icon={MessageSquare}
            iconPosition="left"
            className="w-full sm:w-auto shadow-xl bg-olive-600 hover:bg-olive-700 text-white text-base"
          >
            Discuter sur WhatsApp
          </Button>
        </div>

        <p className="text-xs text-creme-200/80">
          * Les demandes de réservation sont confirmées par retour de notre équipe sous réserve de disponibilité.
        </p>
      </div>
    </section>
  );
}
