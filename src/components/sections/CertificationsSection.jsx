import React, { useState, useMemo } from 'react';
import { SectionReveal } from '../ui/SectionReveal';
import { certifications, certificateCategories } from '../../data/certifications';
import { CertificationCard } from '../cards/CertificationCard';
import { CertificateLedger } from './CertificateLedger';
import { CertificateModal } from '../modals/CertificateModal';
import { List, LayoutGrid } from 'lucide-react';

export function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [viewMode, setViewMode] = useState('ledger'); // 'ledger' (Concept 1) | 'grid'

  const categoryCounts = useMemo(() => {
    const counts = { ALL: certifications.length };
    certifications.forEach((c) => {
      counts[c.category] = (counts[c.category] || 0) + 1;
    });
    return counts;
  }, []);

  const filteredCerts = useMemo(() => {
    if (activeCategory === 'ALL') return certifications;
    return certifications.filter((cert) => cert.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="credentials" className="scroll-mt-16 border-t border-ink/10 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* Section Header */}
        <SectionReveal>
          <div className="pb-8 border-b border-ink/10">
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink/50">
              03 — CREDENTIALS & ACCREDITATIONS
            </span>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl md:text-6xl">
              Official Certifications
            </h2>
            <p className="mt-3 text-base text-ink/65 max-w-2xl">
              Verified industry credentials and government citations recorded in chronological order. Hover any entry for an instant visual snapshot or click to inspect the authenticated document.
            </p>

            {/* Controls Bar: Category Filters + View Switcher */}
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              
              {/* Category Filter Tabs with Item Counts */}
              <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Certificate Categories">
                {certificateCategories.map((category) => {
                  const isActive = activeCategory === category;
                  const count = categoryCounts[category] || 0;

                  return (
                    <button
                      key={category}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveCategory(category)}
                      className={`rounded-sm px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] transition-all duration-200 flex items-center gap-1.5 ${
                        isActive
                          ? 'bg-ink text-paper font-semibold border border-ink shadow-sm'
                          : 'border border-ink/20 text-ink/70 hover:border-ink hover:text-ink hover:bg-ink/[0.04]'
                      }`}>
                      <span>{category}</span>
                      <span className={`text-[9px] ${isActive ? 'text-paper/70' : 'text-ink/40'}`}>
                        ({count})
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* View Switcher: Ledger Index vs Visual Grid */}
              <div className="flex items-center gap-1 self-start sm:self-auto rounded-sm border border-ink/20 p-0.5 bg-ink/[0.02]">
                <button
                  type="button"
                  onClick={() => setViewMode('ledger')}
                  aria-label="Switch to Architectural Ledger view"
                  title="Architectural Ledger Index"
                  className={`flex items-center gap-1.5 rounded-sm px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider transition-colors ${
                    viewMode === 'ledger'
                      ? 'bg-ink text-paper font-semibold shadow-xs'
                      : 'text-ink/60 hover:text-ink hover:bg-ink/[0.04]'
                  }`}>
                  <List className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">Ledger</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('grid')}
                  aria-label="Switch to Gallery Grid view"
                  title="Gallery Grid View"
                  className={`flex items-center gap-1.5 rounded-sm px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-ink text-paper font-semibold shadow-xs'
                      : 'text-ink/60 hover:text-ink hover:bg-ink/[0.04]'
                  }`}>
                  <LayoutGrid className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">Grid</span>
                </button>
              </div>

            </div>
          </div>
        </SectionReveal>

        {/* Content Presentation: Architectural Ledger (Concept 1) vs Cards Grid */}
        <div className="pt-8">
          {viewMode === 'ledger' ? (
            <CertificateLedger
              certifications={filteredCerts}
              onSelectCert={(cert) => setSelectedCert(cert)}
            />
          ) : (
            <div className="grid gap-8 pt-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredCerts.map((cert) => (
                <div key={cert.credentialId}>
                  <CertificationCard
                    certification={cert}
                    onVerify={(c) => setSelectedCert(c)}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

      </div>

      {/* Lightbox Modal with 90-Degree Rotation & Full View */}
      <CertificateModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
    </section>
  );
}