/**
 * Carte générique haut de gamme pour les plats, avis et fonctionnalités.
 */
export default function Card({
  children,
  className = '',
  hoverEffect = true,
  padding = 'p-6 md:p-8',
  as: Component = 'div',
  ...props
}) {
  return (
    <Component
      className={`bg-white/90 rounded-2xl md:rounded-3xl border border-brun-900/5 shadow-soft transition-all duration-300 ${
        hoverEffect ? 'hover:shadow-soft-lg hover:-translate-y-1 hover:border-terracotta-500/20' : ''
      } ${padding} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
