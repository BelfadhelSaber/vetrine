import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  MessageSquare,
  Clock,
  ArrowUp,
  Heart,
} from 'lucide-react';
import Logo from './Logo';
import { restaurantData } from '../../data/restaurantData';

/**
 * Pied de page complet et professionnel.
 * Organisé en 4 colonnes sur grand écran, avec accès direct aux réservations,
 * horaires d'ouverture et coordonnées interactives.
 */
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Notre Carte & Menus', path: '/menu' },
    { name: 'Notre Histoire & Philosophie', path: '/a-propos' },
    { name: 'Galerie Photographique', path: '/galerie' },
    { name: 'Contact & Itinéraire', path: '/contact' },
    { name: 'Demande de Réservation', path: '/reservation' },
  ];

  return (
    <footer className="bg-brun-900 text-creme-100 relative mt-auto border-t border-brun-800">
      {/* Liseré décoratif en haut du footer */}
      <div className="h-1 bg-gradient-to-r from-terracotta-500 via-olive-500 to-terracotta-600" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-brun-800/80">
          {/* Colonne 1 : Identité & Philosophie (4 colonnes) */}
          <div className="lg:col-span-4">
            <Logo variant="dark" size="lg" className="mb-4" />
            <p className="text-sm text-brun-200/90 leading-relaxed mb-6 max-w-sm">
              {restaurantData.description}
            </p>
            <div className="flex items-center gap-3">
              {/* Instagram SVG */}
              <a
                href={restaurantData.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Suivez-nous sur Instagram"
                className="w-9 h-9 rounded-full bg-brun-800 text-creme-200 hover:text-white hover:bg-terracotta-500 transition-all flex items-center justify-center"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Facebook SVG */}
              <a
                href={restaurantData.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Suivez-nous sur Facebook"
                className="w-9 h-9 rounded-full bg-brun-800 text-creme-200 hover:text-white hover:bg-terracotta-500 transition-all flex items-center justify-center"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.667 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>

              {/* WhatsApp direct */}
              <a
                href={`https://wa.me/${restaurantData.contact.whatsappClean}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contacter sur WhatsApp"
                className="w-9 h-9 rounded-full bg-brun-800 text-creme-200 hover:text-white hover:bg-olive-600 transition-all flex items-center justify-center"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Colonne 2 : Navigation Rapide (3 colonnes) */}
          <div className="lg:col-span-3">
            <h3 className="font-serif text-lg font-semibold mb-4 text-creme-100 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-terracotta-500" />
              Plan du site
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-brun-200 hover:text-terracotta-400 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="text-terracotta-500/60 transition-transform group-hover:translate-x-1">
                      ›
                    </span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 : Horaires d'Ouverture (2 colonnes) */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-lg font-semibold mb-4 text-creme-100 flex items-center gap-2">
              <Clock className="w-4 h-4 text-olive-500" />
              Horaires
            </h3>
            <div className="space-y-3 text-xs text-brun-200">
              {restaurantData.openingHours.map((slot, idx) => (
                <div key={idx} className="border-b border-brun-800 pb-2 last:border-0 last:pb-0">
                  <span className="font-medium text-creme-100 block">{slot.days}</span>
                  <span className="text-brun-200/90 leading-tight block mt-0.5">{slot.hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Colonne 4 : Coordonnées & Accès (3 colonnes) */}
          <div className="lg:col-span-3">
            <h3 className="font-serif text-lg font-semibold mb-4 text-creme-100 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-terracotta-500" />
              Nous Rejoindre
            </h3>
            <div className="space-y-3.5 text-xs text-brun-200">
              <a
                href={restaurantData.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 group hover:text-terracotta-400 transition-colors"
              >
                <MapPin className="w-4 h-4 text-terracotta-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>{restaurantData.contact.address}</span>
              </a>

              <a
                href={`tel:${restaurantData.contact.phoneClean}`}
                className="flex items-center gap-2.5 group hover:text-terracotta-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-terracotta-400 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-medium text-creme-100">{restaurantData.contact.phone}</span>
              </a>

              <a
                href={`https://wa.me/${restaurantData.contact.whatsappClean}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brun-800 hover:bg-olive-600 px-3 py-2 rounded-xl text-creme-100 transition-colors border border-brun-700/60"
              >
                <MessageSquare className="w-3.5 h-3.5 text-olive-400 group-hover:text-white" />
                <span>WhatsApp : Réponse rapide</span>
              </a>
            </div>
          </div>
        </div>

        {/* Ligne inférieure : Copyright & Mentions */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-brun-200/70 gap-4">
          <p className="flex items-center gap-1">
            © {new Date().getFullYear()} {restaurantData.name}. Conçu avec{' '}
            <Heart className="w-3.5 h-3.5 text-terracotta-500 fill-terracotta-500 inline" /> pour une expérience gastronomique.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-[11px] bg-brun-800/80 px-2.5 py-1 rounded-md text-creme-200 border border-brun-700/50">
              Devise : TND (Dinar Tunisien)
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-creme-200 hover:text-terracotta-400 transition-colors p-1"
              aria-label="Remonter en haut de la page"
            >
              <span>Haut de page</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
