import Button from '../components/common/Button';
import { Home } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <span className="text-terracotta-500 font-serif text-6xl md:text-8xl font-bold mb-4">404</span>
      <h1 className="text-2xl md:text-3xl font-serif text-brun-900 mb-4">Page introuvable</h1>
      <p className="text-brun-700 max-w-md mb-8">
        La page que vous recherchez semble avoir changé d'adresse ou n'existe plus.
      </p>
      <Button to="/" icon={Home} iconPosition="left">
        Retour à l'accueil
      </Button>
    </div>
  );
}
