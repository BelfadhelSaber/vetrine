/**
 * Composant Badge pour signaler une spécialité, un plat végétarien, etc.
 */
export default function Badge({
  children,
  variant = 'terracotta',
  size = 'sm',
  icon: Icon,
  className = '',
}) {
  const variants = {
    terracotta: 'bg-terracotta-100 text-terracotta-700 border-terracotta-200/60',
    olive: 'bg-olive-100 text-olive-700 border-olive-200/60',
    creme: 'bg-creme-200 text-brun-800 border-creme-300',
    dark: 'bg-brun-900 text-creme-100 border-brun-800',
  };

  const sizes = {
    sm: 'text-[11px] px-2.5 py-0.5 tracking-wider font-medium',
    md: 'text-xs px-3 py-1 tracking-wider font-semibold',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border uppercase ${variants[variant] || variants.terracotta} ${sizes[size] || sizes.sm} ${className}`}
    >
      {Icon && <Icon className="w-3 h-3 shrink-0" />}
      <span>{children}</span>
    </span>
  );
}
