import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, Calendar, Phone } from 'lucide-react';
import Button from '../common/Button';
import Logo from './Logo';
import MobileMenu from './MobileMenu';
import { restaurantData } from '../../data/restaurantData';

/**
 * Barre de navigation principale.
 * - Réactive au défilement (effet sticky avec réduction de hauteur et ombre portée).
 * - Navigation de bureau avec indicateurs d'état actif.
 * - Bouton d'action et contact direct.
 * - Menu mobile accessible et fluide.
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Détection du défilement pour ajuster l'en-tête
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Le Menu', path: '/menu' },
    { name: 'À propos', path: '/a-propos' },
    { name: 'Galerie', path: '/galerie' },
    { name: 'Contact & Accès', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'glass-header py-3 shadow-soft border-b border-brun-900/10'
            : 'bg-creme-100/90 py-5 border-b border-brun-900/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo de marque */}
            <Logo size="md" />

            {/* Navigation Desktop */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-white/70 px-4 py-1.5 rounded-full border border-brun-900/5 shadow-sm" aria-label="Navigation principale">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 relative ${
                      isActive
                        ? 'bg-terracotta-500 text-white shadow-sm'
                        : 'text-brun-800 hover:text-terracotta-600 hover:bg-creme-200/50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Actions à droite */}
            <div className="hidden sm:flex items-center gap-4">
              {/* Téléphone direct */}
              <a
                href={`tel:${restaurantData.contact.phoneClean}`}
                className="hidden xl:inline-flex items-center gap-2 text-xs font-semibold text-brun-800 hover:text-terracotta-600 transition-colors p-2"
                title="Appeler le restaurant"
              >
                <span className="w-8 h-8 rounded-full bg-terracotta-100 text-terracotta-600 flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5" />
                </span>
                <span>{restaurantData.contact.phone}</span>
              </a>

              {/* Bouton de réservation */}
              <Button
                to="/reservation"
                size="md"
                variant="primary"
                icon={Calendar}
                iconPosition="left"
              >
                Réserver une table
              </Button>
            </div>

            {/* Bouton menu mobile (Hamburger) */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                to="/reservation"
                className="sm:hidden p-2.5 rounded-full bg-terracotta-500 text-white shadow-sm"
                aria-label="Réserver une table"
              >
                <Calendar className="w-4 h-4" />
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2.5 rounded-xl text-brun-900 bg-white/80 border border-brun-900/10 hover:bg-creme-200 focus:outline-none focus:ring-2 focus:ring-terracotta-500 transition-colors"
                aria-expanded={mobileMenuOpen}
                aria-label="Ouvrir le menu de navigation"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Composant tiroir mobile */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
