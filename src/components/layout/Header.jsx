import React, { useState } from 'react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { Menu, X, Download } from 'lucide-react';

export function Header({ theme, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Resume', href: '#resume' },
    { label: 'Projects', href: '#projects' },
    { label: 'Credentials', href: '#credentials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-ink/10 bg-paper/90 backdrop-blur-md transition-colors">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        
        {/* Brand / Logo */}
        <a href="#top" className="group flex items-baseline gap-2.5">
          <span className="inline-block h-3 w-3 translate-y-[1px] rounded-full bg-sun transition-transform group-hover:scale-125" />
          <span className="font-display text-lg font-bold tracking-tight text-ink">
            Ezekiel Dayao
          </span>
          <span className="hidden text-sm text-ink/60 sm:inline">
            Full-Stack Developer
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-6">
          <ul className="flex items-center gap-4 lg:gap-5 text-sm lg:text-base font-medium">
            {navLinks.map((link, idx) => (
              <React.Fragment key={link.href}>
                <li>
                  <a
                    href={link.href}
                    className="text-ink/75 underline-offset-4 transition-colors hover:text-ink hover:underline hover:decoration-sun hover:decoration-2">
                    {link.label}
                  </a>
                </li>
                {idx < navLinks.length - 1 && (
                  <span aria-hidden="true" className="h-4 w-px bg-ink/25" />
                )}
              </React.Fragment>
            ))}
          </ul>

          <div className="h-5 w-px bg-ink/20 ml-2" />
          
          <a
            href="/Ezekiel_Dayao_CV.pdf"
            download="Ezekiel_Dayao_CV.pdf"
            className="hidden lg:inline-flex items-center gap-1.5 rounded-sm border border-ink/25 bg-ink/[0.03] px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider text-ink transition-all hover:bg-ink hover:text-paper hover:border-ink hover:-translate-y-0.5">
            <Download className="h-3 w-3" />
            <span>CV</span>
          </a>

          <ThemeToggle theme={theme} toggleTheme={toggleTheme} className="border-ink/20 text-ink bg-transparent" />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} className="border-ink/20 text-ink bg-transparent" />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="p-2 text-ink">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-ink/10 bg-paper px-6 py-6 transition-all">
          <ul className="flex flex-col gap-4 text-base font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1 text-ink/80 hover:text-ink hover:underline hover:decoration-sun hover:decoration-2">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
