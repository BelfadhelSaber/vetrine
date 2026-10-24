import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { X, Calendar, Phone, MessageSquare, Clock, MapPin } from 'lucide-react';
import Button from '../common/Button';
import Logo from './Logo';
import { restaurantData } from '../../data/restaurantData';

/**
 * Menu mobile plein écran / tiroir latéral.
 * - Conforme aux standards d'accessibilité (clavier Escape, aria labels, focus).
 * - Bloque le défilement du corps de la page lorsqu'il est actif.
 */
export default function MobileMenu({ isOpen, onClose }) {
  // Empêche le défilement de l'arrière-plan quand le menu est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Fermeture avec la touche Échap
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'À propos', path: '/a-propos' },
    { name: 'Galerie', path: '/galerie' },
    { name: 'Contact & Accès', path: '/contact' },
  ];

  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-300 md:hidden ${
        isOpen ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
      aria-hidden={!isOpen}
      role="dialog"
      aria-modal="true"
      aria-label="Menu de navigation mobile"
    >
      {/* Arrière-plan semi-transparent avec flou */}
      <div
        className={`fixed inset-0 bg-brun-950/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      {/* Tiroir latéral coulissant */}
      <div
        className={`fixed inset-y-0 right-0 w-full max-w-sm bg-creme-100 shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-out border-l border-brun-900/10 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* En-tête du menu mobile */}
        <div className="flex items-center justify-between p-6 border-b border-brun-900/10 bg-creme-50">
          <Logo size="sm" />
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full text-brun-800 hover:text-terracotta-600 hover:bg-terracotta-50 focus:outline-none focus:ring-2 focus:ring-terracotta-500 transition-colors"
            aria-label="Fermer le menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Liens de navigation */}
        <div className="flex-1 overflow-y-auto px-6 py-8">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-3.5 rounded-xl text-lg font-serif transition-all ${
                    isActive
                      ? 'bg-terracotta-500 text-white font-semibold shadow-md shadow-terracotta-500/20'
                      : 'text-brun-900 hover:bg-creme-200/70 hover:text-terracotta-600'
                  }`
                }
              >
                <span>{link.name}</span>
                <span className="text-sm opacity-50 font-sans">→</span>
              </NavLink>
            ))}
          </nav>

          {/* Bouton de réservation mobile */}
          <div className="mt-8 pt-6 border-t border-brun-900/10">
            <Button
              to="/reservation"
              onClick={onClose}
              variant="primary"
              size="lg"
              className="w-full justify-center shadow-lg"
              icon={Calendar}
              iconPosition="left"
            >
              Réserver une table
            </Button>
          </div>

          {/* Coordonnées rapides */}
          <div className="mt-8 space-y-3 bg-white/80 p-4 rounded-2xl border border-brun-900/5 text-xs text-brun-800">
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-terracotta-500 shrink-0" />
              <a
                href={`tel:${restaurantData.contact.phoneClean}`}
                className="font-medium hover:text-terracotta-600 transition-colors"
              >
                {restaurantData.contact.phone}
              </a>
            </div>

            <div className="flex items-center gap-2.5">
              <MessageSquare className="w-4 h-4 text-olive-600 shrink-0" />
              <a
                href={`https://wa.me/${restaurantData.contact.whatsappClean}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-olive-700 transition-colors"
              >
                WhatsApp Direct : {restaurantData.contact.whatsapp}
              </a>
            </div>

            <div className="flex items-start gap-2.5 pt-1">
              <MapPin className="w-4 h-4 text-terracotta-500 shrink-0 mt-0.5" />
              <span className="text-brun-700">{restaurantData.contact.address}</span>
            </div>

            <div className="flex items-start gap-2.5 pt-1">
              <Clock className="w-4 h-4 text-olive-600 shrink-0 mt-0.5" />
              <span className="text-brun-700">12h - 15h30 & 19h - 23h30</span>
            </div>
          </div>
        </div>

        {/* Pied du menu mobile */}
        <div className="p-4 text-center text-[11px] text-brun-700 border-t border-brun-900/10 bg-creme-50">
          L'Olivier Doré — Table Bistronomique & Méditerranéenne
        </div>
      </div>
    </div>
  );
}
