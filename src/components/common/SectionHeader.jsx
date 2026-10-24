/**
 * En-tête de section standardisé et élégant.
 * Assure une hiérarchie visuelle parfaite à travers tout le site.
 */
export default function SectionHeader({
  subtitle,
  title,
  description,
  align = 'center',
  className = '',
  light = false,
}) {
  const isCenter = align === 'center';

  return (
    <div
      className={`mb-12 md:mb-16 ${
        isCenter ? 'text-center max-w-3xl mx-auto' : 'text-left max-w-2xl'
      } ${className}`}
    >
      {subtitle && (
        <div
          className={`inline-flex items-center gap-2 mb-3 text-xs md:text-sm font-semibold tracking-widest uppercase ${
            light ? 'text-creme-200' : 'text-olive-600'
          }`}
        >
          <span className="w-6 h-px bg-current opacity-60"></span>
          <span>{subtitle}</span>
          <span className="w-6 h-px bg-current opacity-60"></span>
        </div>
      )}

      {title && (
        <h2
          className={`font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight leading-tight mb-4 ${
            light ? 'text-creme-50' : 'text-brun-900'
          }`}
        >
          {title}
        </h2>
      )}

      {description && (
        <p
          className={`text-base md:text-lg leading-relaxed font-light ${
            light ? 'text-creme-100/80' : 'text-brun-700'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
