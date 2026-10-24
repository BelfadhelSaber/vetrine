import Card from '../common/Card';
import { Phone, MessageSquare, MapPin, Clock } from 'lucide-react';
import { restaurantData } from '../../data/restaurantData';

/**
 * 4 cartes de contact rapide et interactif.
 */
export default function ContactInfoCards() {
  const { contact, openingHours } = restaurantData;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* 1. Téléphone */}
      <Card className="bg-white flex flex-col justify-between group hover:border-terracotta-500/30">
        <div>
          <div className="w-12 h-12 rounded-2xl bg-terracotta-100 text-terracotta-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Phone className="w-6 h-6" />
          </div>
          <span className="text-[11px] uppercase tracking-wider text-olive-600 font-semibold block mb-1">
            Réservations par téléphone
          </span>
          <h3 className="font-serif text-lg font-bold text-brun-900 mb-2">
            Appel Direct
          </h3>
          <p className="text-xs text-brun-700 font-light mb-4 leading-relaxed">
            Pour les réservations de dernière minute ou questions immédiates.
          </p>
        </div>
        <a
          href={`tel:${contact.phoneClean}`}
          className="inline-flex items-center text-sm font-bold text-terracotta-600 hover:text-terracotta-700 transition-colors pt-3 border-t border-brun-900/5"
        >
          {contact.phone} →
        </a>
      </Card>

      {/* 2. WhatsApp Direct */}
      <Card className="bg-white flex flex-col justify-between group hover:border-olive-500/30">
        <div>
          <div className="w-12 h-12 rounded-2xl bg-olive-100 text-olive-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <MessageSquare className="w-6 h-6" />
          </div>
          <span className="text-[11px] uppercase tracking-wider text-olive-600 font-semibold block mb-1">
            Messagerie instantanée
          </span>
          <h3 className="font-serif text-lg font-bold text-brun-900 mb-2">
            WhatsApp Direct
          </h3>
          <p className="text-xs text-brun-700 font-light mb-4 leading-relaxed">
            Échangez avec nous pour toute demande spéciale ou confirmation.
          </p>
        </div>
        <a
          href={`https://wa.me/${contact.whatsappClean}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-bold text-olive-600 hover:text-olive-700 transition-colors pt-3 border-t border-brun-900/5"
        >
          {contact.whatsapp} →
        </a>
      </Card>

      {/* 3. Adresse & Accès */}
      <Card className="bg-white flex flex-col justify-between group hover:border-terracotta-500/30">
        <div>
          <div className="w-12 h-12 rounded-2xl bg-terracotta-100 text-terracotta-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <MapPin className="w-6 h-6" />
          </div>
          <span className="text-[11px] uppercase tracking-wider text-olive-600 font-semibold block mb-1">
            Nous trouver
          </span>
          <h3 className="font-serif text-lg font-bold text-brun-900 mb-2">
            *****, *****
          </h3>
          <p className="text-xs text-brun-700 font-light mb-4 leading-relaxed">
            {contact.address}
          </p>
        </div>
        <a
          href={contact.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-bold text-terracotta-600 hover:text-terracotta-700 transition-colors pt-3 border-t border-brun-900/5"
        >
          Ouvrir l'itinéraire →
        </a>
      </Card>

      {/* 4. Horaires */}
      <Card className="bg-white flex flex-col justify-between group hover:border-olive-500/30">
        <div>
          <div className="w-12 h-12 rounded-2xl bg-olive-100 text-olive-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Clock className="w-6 h-6" />
          </div>
          <span className="text-[11px] uppercase tracking-wider text-olive-600 font-semibold block mb-1">
            Disponibilités
          </span>
          <h3 className="font-serif text-lg font-bold text-brun-900 mb-2">
            Horaires de Service
          </h3>
          <div className="space-y-1.5 text-xs text-brun-700 font-light mb-4">
            <p><strong>Midi :</strong> 12h00 - 15h30</p>
            <p><strong>Soir :</strong> 19h00 - 23h30</p>
            <p className="text-[11px] text-olive-700">Dimanche service continu</p>
          </div>
        </div>
        <span className="text-xs font-semibold text-olive-600 pt-3 border-t border-brun-900/5 block">
          Ouvert 7j/7
        </span>
      </Card>
    </div>
  );
}
