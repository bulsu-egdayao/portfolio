import React from 'react';
import { MoonIcon, SunIcon } from 'lucide-react';

export function ThemeToggle({ theme, toggleTheme, className = '' }) {
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`relative inline-flex h-9 w-9 items-center justify-center rounded-sm border border-ink/20 bg-transparent text-ink shadow-sm transition-all duration-200 hover:border-ink hover:bg-ink hover:text-paper focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink ${className}`}>
      {isDark ? (
        <SunIcon className="h-4 w-4 text-amber-400 transition-transform duration-200 rotate-0 hover:rotate-45" />
      ) : (
        <MoonIcon className="h-4 w-4 text-ink transition-transform duration-200 hover:-rotate-12" />
      )}
    </button>
  );
}
