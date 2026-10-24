import { Link } from 'react-router-dom';

/**
 * Bouton réutilisable haut de gamme.
 * Supporte les boutons classiques, les liens React Router (to) et les liens externes (href).
 */
export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'left',
  disabled = false,
  onClick,
  type = 'button',
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

  const variants = {
    primary:
      'bg-terracotta-500 text-white hover:bg-terracotta-600 focus:ring-terracotta-500 shadow-md hover:shadow-lg shadow-terracotta-500/20',
    secondary:
      'bg-olive-500 text-white hover:bg-olive-600 focus:ring-olive-500 shadow-md hover:shadow-lg shadow-olive-500/20',
    dark:
      'bg-brun-900 text-creme-100 hover:bg-brun-800 focus:ring-brun-900 shadow-md',
    outline:
      'border-2 border-terracotta-500 text-terracotta-500 hover:bg-terracotta-500 hover:text-white focus:ring-terracotta-500',
    outlineDark:
      'border-2 border-brun-900 text-brun-900 hover:bg-brun-900 hover:text-creme-100 focus:ring-brun-900',
    ghost:
      'text-brun-900 hover:bg-terracotta-50 hover:text-terracotta-600 focus:ring-terracotta-500',
  };

  const sizes = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-6 py-2.5 gap-2',
    lg: 'text-base px-8 py-3.5 gap-2.5 font-semibold',
  };

  const classes = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:-translate-x-0.5" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={classes} {...props}>
      {content}
    </button>
  );
}
