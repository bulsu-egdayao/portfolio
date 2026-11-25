import React from 'react';

/**
 * Minimalist Rectangular Button
 * Professional, premium, responsive button with subtle elevation & micro-transitions
 */
export function MinimalButton({
  children,
  href,
  onClick,
  type = 'button',
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'forest' | 'slate' | 'pool'
  size = 'md',        // 'sm' | 'md' | 'lg'
  className = '',
  icon: Icon,
  iconPosition = 'right',
  download,
  target,
  rel,
  disabled = false,
  ...props
}) {
  const sizeStyles = {
    sm: 'px-3.5 py-1.5 text-[11px] tracking-[0.16em]',
    md: 'px-6 py-3 text-xs sm:text-[13px] tracking-[0.18em]',
    lg: 'px-8 py-3.5 text-xs sm:text-sm tracking-[0.2em]',
  };

  const variantStyles = {
    primary:
      'border border-ink bg-ink text-paper hover:bg-transparent hover:text-ink hover:border-ink hover:shadow-sm',
    secondary:
      'border border-ink/20 bg-ink/[0.04] text-ink hover:border-ink hover:bg-ink hover:text-paper hover:shadow-sm',
    outline:
      'border border-ink/25 bg-transparent text-ink hover:border-ink hover:bg-ink hover:text-paper',
    forest:
      'border border-[#285844] bg-[#285844] text-white hover:bg-transparent hover:text-[#285844] hover:border-[#285844] dark:hover:text-[#6ee7b7] dark:hover:border-[#6ee7b7]',
    slate:
      'border border-[#44627d] bg-[#44627d] text-white hover:bg-transparent hover:text-[#44627d] hover:border-[#44627d] dark:hover:text-[#93c5fd] dark:hover:border-[#93c5fd]',
    pool:
      'border border-pool bg-pool text-ink hover:bg-transparent hover:border-ink hover:text-ink'
  };

  const baseStyles =
    'group inline-flex items-center justify-center gap-2.5 rounded-sm font-mono uppercase font-medium select-none transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:pointer-events-none disabled:hover:translate-y-0';

  const combinedClass = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && (
        <Icon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" />
      )}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && (
        <Icon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        download={download}
        target={target}
        rel={rel}
        className={combinedClass}
        {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClass}
      {...props}>
      {content}
    </button>
  );
}
