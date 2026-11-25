import React from 'react';

/**
 * Zayn UX Template Framing Corner Brackets (Er component)
 * Renders four architectural L-shaped alignment brackets around content
 */
export function CornerBrackets({ children, className = '' }) {
  return (
    <div className={`relative ${className}`}>
      {/* Top Left */}
      <span aria-hidden="true" className="pointer-events-none absolute -left-2.5 -top-2.5 h-4 w-4 border-l-2 border-t-2 border-ink/60 dark:border-ink/70" />
      {/* Top Right */}
      <span aria-hidden="true" className="pointer-events-none absolute -right-2.5 -top-2.5 h-4 w-4 border-r-2 border-t-2 border-ink/60 dark:border-ink/70" />
      {/* Bottom Left */}
      <span aria-hidden="true" className="pointer-events-none absolute -left-2.5 -bottom-2.5 h-4 w-4 border-l-2 border-b-2 border-ink/60 dark:border-ink/70" />
      {/* Bottom Right */}
      <span aria-hidden="true" className="pointer-events-none absolute -right-2.5 -bottom-2.5 h-4 w-4 border-r-2 border-b-2 border-ink/60 dark:border-ink/70" />
      
      {children}
    </div>
  );
}
