import React from 'react';
import { MotionConfig } from 'framer-motion';
import { useTheme } from './hooks/useTheme';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { ResumeSection } from './components/sections/ResumeSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { CertificationsSection } from './components/sections/CertificationsSection';
import { ContactSection } from './components/sections/ContactSection';

export function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <MotionConfig reducedMotion="user">
      <div id="top" className="min-h-screen w-full bg-paper font-sans text-ink selection:bg-ink selection:text-paper transition-colors duration-200">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] rounded-full border border-ink bg-ink px-4 py-2 font-mono text-xs text-paper shadow-md">
          Skip to content
        </a>

        <Header theme={theme} toggleTheme={toggleTheme} />

        <main id="main">
          <Hero />
          <ResumeSection />
          <ProjectsSection />
          <CertificationsSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
