import React from 'react';

export function PipeButton({
  children,
  href,
  onClick,
  type = 'button',
  variant = 'dark', // 'dark' | 'light' | 'outline' | 'pill'
  className = '',
  disabled = false,
  ...rest
}) {
  const baseClasses =
    'group inline-flex items-center justify-center font-montserrat text-xs sm:text-sm font-bold uppercase tracking-[0.25em] transition-all duration-200 select-none py-2.5 px-6';

  const variants = {
    dark: 'border-2 border-black dark:border-white bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 shadow-sm',
    light: 'border-2 border-black dark:border-white bg-white dark:bg-black text-black dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 shadow-sm',
    outline: 'border-2 border-black dark:border-white bg-transparent text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black',
    pill: 'rounded-full border-2 border-black dark:border-white bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800'
  };

  const content = (
    <>
      <span className="font-normal opacity-70 group-hover:-translate-x-0.5 transition-transform">|</span>
      <span className="px-3">{children}</span>
      <span className="font-normal opacity-70 group-hover:translate-x-0.5 transition-transform">|</span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${baseClasses} ${variants[variant] || variants.dark} ${className}`} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant] || variants.dark} ${className} disabled:opacity-50 disabled:cursor-not-allowed`}
      {...rest}>
      {content}
    </button>
  );
}
