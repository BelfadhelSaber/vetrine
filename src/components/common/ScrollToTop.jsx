import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Replace automatiquement le scroll en haut de page lors du changement de route.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
