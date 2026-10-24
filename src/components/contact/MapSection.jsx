import Card from '../common/Card';
import Button from '../common/Button';
import { MapPin, Navigation, Car, Train } from 'lucide-react';
import { restaurantData } from '../../data/restaurantData';

/**
 * Section Localisation et Carte interactive.
 */
export default function MapSection() {
  const { contact } = restaurantData;

  return (
    <section className="py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Informations d'accès (5 colonnes) */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-olive-600 font-semibold block mb-2">
              Accès & Stationnement
            </span>
            <h2 className="font-serif text-3xl font-bold text-brun-900 mb-3">
              Comment Venir à L'Olivier Doré
            </h2>
            <p className="text-sm text-brun-700 font-light leading-relaxed">
              Idéalement situé au cœur de *****, notre restaurant dispose d'un accès facile à pied depuis la corniche et d'espaces dédiés pour vos véhicules.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-white border border-brun-900/5 shadow-xs flex items-start gap-3.5">
              <Car className="w-5 h-5 text-terracotta-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif font-bold text-sm text-brun-900">En voiture & Parking</h4>
                <p className="text-xs text-brun-700 font-light leading-relaxed">
                  Parking public surveillé à 50 mètres et service voiturier les vendredis et samedis soirs.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-brun-900/5 shadow-xs flex items-start gap-3.5">
              <Train className="w-5 h-5 text-olive-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif font-bold text-sm text-brun-900">Transports en commun</h4>
                <p className="text-xs text-brun-700 font-light leading-relaxed">
                  À 6 minutes de marche de la station ***** et des arrêts de bus de l'avenue principale.
                </p>
              </div>
            </div>
          </div>

          <Button
            href={contact.googleMapsUrl}
            variant="outlineDark"
            size="md"
            icon={Navigation}
            iconPosition="left"
            className="w-full sm:w-auto"
          >
            Lancer le guidage GPS
          </Button>
        </div>

        {/* Cadre carte responsive (7 colonnes) */}
        <div className="lg:col-span-7">
          <div className="relative rounded-3xl overflow-hidden border border-brun-900/10 shadow-soft-lg h-96 bg-creme-200">
            {/* Intégration Google Maps */}
            <iframe
              title="Carte d'accès au restaurant L'Olivier Doré"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12762.63738096238!2d10.3235492!3d36.8778794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2b4be91b1574b%3A0x6b4ebcb26223da3!2sLa%20Marsa%2C%20Tunisie!5e0!3m2!1sfr!2stn!4v1700000000000!5m2!1sfr!2stn"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter saturate-[0.85] contrast-[1.05]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
