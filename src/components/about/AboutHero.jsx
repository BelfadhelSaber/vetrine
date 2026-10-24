import Badge from '../common/Badge';
import { Sparkles } from 'lucide-react';
import { aboutData } from '../../data/aboutData';

/**
 * En-tête de la page À propos.
 */
export default function AboutHero() {
  return (
    <section className="relative pt-12 pb-14 md:pt-20 md:pb-20 bg-gradient-to-b from-creme-200/50 via-creme-100 to-creme-100 border-b border-brun-900/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Badge
          variant="terracotta"
          size="md"
          icon={Sparkles}
          className="mb-4 shadow-sm"
        >
          {aboutData.hero.subtitle}
        </Badge>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-brun-900 tracking-tight mb-6 leading-tight">
          {aboutData.hero.title}
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-brun-700 max-w-3xl mx-auto font-light leading-relaxed">
          {aboutData.hero.description}
        </p>
      </div>
    </section>
  );
}
