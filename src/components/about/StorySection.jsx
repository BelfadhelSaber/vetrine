import SectionHeader from '../common/SectionHeader';
import ImageWithFallback from '../common/ImageWithFallback';
import { Quote } from 'lucide-react';
import { aboutData } from '../../data/aboutData';

/**
 * Section racontant l'origine et l'histoire du restaurant.
 */
export default function StorySection() {
  const { story } = aboutData;

  return (
    <section className="py-20 md:py-28 bg-creme-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Contenu textuel (7 colonnes) */}
          <div className="lg:col-span-7">
            <SectionHeader
              align="left"
              subtitle="Aux Origines"
              title={story.heading}
              className="mb-6"
            />

            <div className="space-y-6 text-base text-brun-700 font-light leading-relaxed mb-8">
              <p>{story.paragraph1}</p>
              <p>{story.paragraph2}</p>
            </div>

            {/* Encadré de citation du chef */}
            <div className="relative p-6 sm:p-8 rounded-2xl bg-white border-l-4 border-terracotta-500 shadow-soft">
              <Quote className="w-8 h-8 text-terracotta-400/40 mb-3" />
              <p className="font-serif italic text-lg sm:text-xl text-brun-900 mb-3 leading-snug">
                {story.quote}
              </p>
              <span className="text-xs font-semibold uppercase tracking-wider text-olive-600 block">
                {story.quoteAuthor}
              </span>
            </div>
          </div>

          {/* Composition visuelle (5 colonnes) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-soft-lg aspect-[4/5] max-w-md mx-auto">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1000&q=80"
                alt="Ambiance de la terrasse ombragée de L'Olivier Doré"
                className="w-full h-full object-cover"
                fallbackText="L'Olivier Doré"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
