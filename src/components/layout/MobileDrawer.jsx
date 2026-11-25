import React, { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { DownloadIcon, XIcon } from 'lucide-react';
import { navItems } from '../../data/navigation';
import { profile } from '../../data/profile';
import { downloadResume } from '../../utils/resume';
import { SocialLinks } from '../ui/SocialLinks';
import { ThemeToggle } from '../ui/ThemeToggle';

const EASE = [0.23, 1, 0.32, 1];

export function MobileDrawer({ open, onClose, active, theme, toggleTheme }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: EASE }}
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            id="mobile-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="absolute inset-y-0 right-0 flex w-full max-w-[320px] flex-col border-l-4 border-black dark:border-white bg-white dark:bg-black"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.28, ease: EASE }}>
            
            <div className="flex h-20 items-center justify-between border-b-2 border-black dark:border-white px-6">
              <span className="font-montserrat text-sm font-extrabold uppercase tracking-widest text-black dark:text-white">
                {profile.fullName}
              </span>
              <div className="flex items-center gap-2">
                <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                <button
                  ref={closeRef}
                  type="button"
                  onClick={onClose}
                  aria-label="Close menu"
                  className="grid h-10 w-10 place-items-center border-2 border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">
                  <XIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-4 py-6">
              <ul className="space-y-2">
                {navItems.map((item) => {
                  const isActive = active === item.id;
                  return (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        onClick={onClose}
                        aria-current={isActive ? 'true' : undefined}
                        className={`flex min-h-[48px] items-center justify-between border-2 px-4 font-montserrat text-xs font-bold uppercase tracking-[0.2em] transition-all ${
                          isActive
                            ? 'border-black dark:border-white bg-black dark:bg-white text-white dark:text-black'
                            : 'border-transparent text-black dark:text-white hover:border-black dark:hover:border-white'
                        }`}>
                        {item.label}
                        {isActive ? <span>→</span> : null}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="space-y-3 border-t-2 border-black dark:border-white p-6 bg-neutral-50 dark:bg-neutral-900">
              <a
                href="#contact"
                onClick={onClose}
                className="flex h-12 items-center justify-center border-2 border-black dark:border-white bg-black dark:bg-white font-montserrat text-xs font-bold uppercase tracking-[0.2em] text-white dark:text-black">
                Contact Me
              </a>
              <button
                type="button"
                onClick={downloadResume}
                className="flex h-12 w-full items-center justify-center gap-2 border-2 border-black dark:border-white bg-white dark:bg-black font-montserrat text-xs font-bold uppercase tracking-[0.2em] text-black dark:text-white">
                <DownloadIcon className="h-4 w-4" aria-hidden="true" />
                Download CV
              </button>
              <div className="pt-3">
                <SocialLinks className="justify-center" />
              </div>
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
