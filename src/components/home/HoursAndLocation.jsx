import SectionHeader from '../common/SectionHeader';
import Card from '../common/Card';
import Button from '../common/Button';
import { Clock, MapPin, Navigation, Phone, MessageSquare, CheckCircle2 } from 'lucide-react';
import { restaurantData } from '../../data/restaurantData';

/**
 * Section Horaires d'ouverture et localisation.
 * Inclut un indicateur d'ouverture et les accès directs pour s'y rendre.
 */
export default function HoursAndLocation() {
  return (
    <section className="py-20 md:py-28 bg-creme-50 border-t border-brun-900/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Planifiez votre venue"
          title="Horaires de Service & Localisation"
          description="Retrouvez-nous au cœur de ***** pour un moment gourmand inoubliable."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Carte Horaires (6 colonnes) */}
          <Card className="lg:col-span-6 bg-white p-8 md:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-brun-900/10">
                <div className="flex items-center gap-3">
                  <span className="w-12 h-12 rounded-2xl bg-olive-100 text-olive-600 flex items-center justify-center">
                    <Clock className="w-6 h-6" />
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-brun-900">Nos Horaires</h3>
                    <p className="text-xs text-brun-700">Services du midi et du soir</p>
                  </div>
                </div>

                {/* Badge d'état du service */}
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-olive-100 text-olive-700 text-xs font-semibold tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-olive-500 animate-pulse" />
                  Accueil sur réservation
                </span>
              </div>

              {/* Liste détaillée des horaires */}
              <div className="space-y-5 mb-8">
                {restaurantData.openingHours.map((slot, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-creme-100/70 border border-brun-900/5 gap-2"
                  >
                    <span className="font-serif font-bold text-brun-900 text-base">
                      {slot.days}
                    </span>
                    <span className="text-sm font-medium text-terracotta-600">
                      {slot.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-brun-900/10 flex items-center gap-2 text-xs text-brun-700">
              <CheckCircle2 className="w-4 h-4 text-olive-600 shrink-0" />
              <span>Dernière commande prise 45 minutes avant la fermeture du service.</span>
            </div>
          </Card>

          {/* Carte Adresse & Itinéraire (6 colonnes) */}
          <Card className="lg:col-span-6 bg-white p-8 md:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-8 pb-6 border-b border-brun-900/10">
                <span className="w-12 h-12 rounded-2xl bg-terracotta-100 text-terracotta-600 flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </span>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-brun-900">Nous Situer</h3>
                  <p className="text-xs text-brun-700">Accès rapide & stationnement</p>
                </div>
              </div>

              <div className="space-y-6 mb-8">
                <div>
                  <span className="text-xs uppercase tracking-wider text-olive-600 font-semibold block mb-1">
                    Adresse postale
                  </span>
                  <p className="text-lg font-serif text-brun-900 leading-snug">
                    {restaurantData.contact.address}
                  </p>
                  <p className="text-xs text-brun-700 mt-1">
                    À deux pas de la corniche et de la place centrale de *****.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href={`tel:${restaurantData.contact.phoneClean}`}
                    className="p-3.5 rounded-xl border border-brun-900/10 hover:border-terracotta-500 hover:bg-terracotta-50/50 transition-all flex items-center gap-3 group"
                  >
                    <Phone className="w-4 h-4 text-terracotta-500 group-hover:scale-110 transition-transform" />
                    <div>
                      <span className="block text-[11px] text-brun-700">Téléphone</span>
                      <span className="text-xs font-bold text-brun-900">{restaurantData.contact.phone}</span>
                    </div>
                  </a>

                  <a
                    href={`https://wa.me/${restaurantData.contact.whatsappClean}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl border border-brun-900/10 hover:border-olive-500 hover:bg-olive-50/50 transition-all flex items-center gap-3 group"
                  >
                    <MessageSquare className="w-4 h-4 text-olive-600 group-hover:scale-110 transition-transform" />
                    <div>
                      <span className="block text-[11px] text-brun-700">WhatsApp direct</span>
                      <span className="text-xs font-bold text-brun-900">{restaurantData.contact.whatsapp}</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Bouton d'itinéraire Google Maps */}
            <Button
              href={restaurantData.contact.googleMapsUrl}
              variant="dark"
              size="md"
              icon={Navigation}
              iconPosition="left"
              className="w-full justify-center"
            >
              Ouvrir l'itinéraire Google Maps
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}
