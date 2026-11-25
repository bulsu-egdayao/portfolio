import React from 'react';

export function CircleButton({
  children,
  href,
  onClick,
  type = 'button',
  variant = 'talk', // 'resume' | 'projects' | 'talk' | 'send'
  className = '',
  ...props
}) {
  const variantStyles = {
    resume: 'bg-forest text-white hover:bg-forest/90',
    projects: 'bg-slate text-white hover:bg-slate/90',
    talk: 'bg-jet text-white dark:bg-white dark:text-jet hover:opacity-95',
    send: 'bg-pool text-ink hover:opacity-95'
  };

  const baseStyles =
    'inline-flex items-center justify-center rounded-full font-display text-sm font-bold tracking-wide transition-transform hover:scale-105 active:scale-95 shadow-md select-none text-center';

  if (href) {
    return (
      <a href={href} className={`${baseStyles} ${variantStyles[variant] || ''} ${className}`} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`${baseStyles} ${variantStyles[variant] || ''} ${className}`} {...props}>
      {children}
    </button>
  );
}
