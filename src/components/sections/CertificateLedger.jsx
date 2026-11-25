import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';

export function CertificateLedger({ certifications, onSelectCert }) {
  const [hoveredCert, setHoveredCert] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  // Smart positioning to prevent tooltip from clipping off screen edges
  const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
  const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 800;

  const tooltipX = mousePos.x + 340 > windowWidth ? mousePos.x - 320 : mousePos.x + 24;
  const tooltipY = Math.max(20, Math.min(mousePos.y - 140, windowHeight - 320));

  return (
    <div
      className="relative w-full"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHoveredCert(null)}>
      
      {/* Floating Certificate Preview Tooltip (Desktop Only) */}
      <AnimatePresence>
        {hoveredCert && (
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 6 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              x: tooltipX,
              top: tooltipY,
            }}
            exit={{ opacity: 0, scale: 0.94, y: 6 }}
            transition={{ type: 'spring', damping: 28, stiffness: 350, mass: 0.4 }}
            className="pointer-events-none fixed left-0 z-50 hidden lg:block w-72 rounded-sm border border-ink/25 bg-paper p-3 shadow-2xl backdrop-blur-md">
            
            {/* Certificate Real Image Thumbnail */}
            <div className="relative aspect-[16/11] w-full overflow-hidden rounded-sm border border-ink/15 bg-white p-1 flex items-center justify-center">
              <img
                src={hoveredCert.image}
                alt={`${hoveredCert.title} preview`}
                className="h-full w-full object-contain"
              />
            </div>

            <div className="mt-2.5">
              <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-ink/50">
                <span>{hoveredCert.date}</span>
                <span className="truncate max-w-[120px]">{hoveredCert.credentialId}</span>
              </div>
              
              <h4 className="mt-1 font-display text-xs font-bold leading-snug text-ink line-clamp-2">
                {hoveredCert.title}
              </h4>
              
              <p className="mt-0.5 text-[11px] font-semibold text-ink/65 truncate">
                {hoveredCert.issuer}
              </p>

              <div className="mt-2 flex items-center justify-between border-t border-ink/10 pt-2 text-[9px] font-mono uppercase tracking-widest text-ink/40">
                <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="h-3 w-3" />
                  Verified Credential
                </span>
                <span>Click to view</span>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* Ledger Table Header (Desktop) */}
      <div className="hidden md:grid md:grid-cols-[60px_130px_1fr_180px_140px] items-center border-b-2 border-ink/20 py-3.5 px-6 font-mono text-[11px] uppercase tracking-[0.2em] text-ink/50">
        <div>#</div>
        <div>Date</div>
        <div>Credential & Issuing Body</div>
        <div>Domain</div>
        <div className="text-right">Action</div>
      </div>

      {/* Ledger Rows */}
      <div className="divide-y divide-ink/10 border-b border-ink/10">
        {certifications.map((cert, index) => {
          const indexFormatted = String(index + 1).padStart(2, '0');
          const isRecognition = cert.category === 'RECOGNITIONS';

          return (
            <div
              key={cert.credentialId}
              role="button"
              tabIndex={0}
              onClick={() => onSelectCert(cert)}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onSelectCert(cert)}
              onMouseEnter={() => setHoveredCert(cert)}
              className="group relative flex flex-col md:grid md:grid-cols-[60px_130px_1fr_180px_140px] items-start md:items-center py-4 px-4 sm:px-6 transition-colors duration-150 hover:bg-ink/[0.03] cursor-pointer">
              
              {/* Index */}
              <div className="hidden md:block font-mono text-xs text-ink/40 group-hover:text-ink/80 transition-colors">
                {indexFormatted}
              </div>

              {/* Date */}
              <div className="font-mono text-xs uppercase tracking-wider text-ink/55 group-hover:text-ink transition-colors">
                {cert.date}
              </div>

              {/* Credential Title & Issuer */}
              <div className="mt-1 md:mt-0 pr-4 min-w-0">
                <div className="flex items-center gap-2">
                  {isRecognition && (
                    <Award className="h-3.5 w-3.5 shrink-0 text-amber-500" title="Official Recognition" />
                  )}
                  <h3 className="font-display text-sm sm:text-base font-bold tracking-tight text-ink group-hover:text-sun transition-colors truncate">
                    {cert.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2 mt-0.5 text-xs text-ink/65">
                  <span className="font-medium">{cert.issuer}</span>
                  <span className="text-ink/30">·</span>
                  <span className="font-mono text-[10px] text-ink/40">{cert.credentialId}</span>
                </div>
              </div>

              {/* Domain / Category Badge */}
              <div className="mt-2.5 md:mt-0">
                <span className="inline-block rounded-sm border border-ink/15 bg-ink/[0.02] px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-ink/75 group-hover:border-ink/30 transition-colors">
                  {cert.category}
                </span>
              </div>

              {/* Action Button */}
              <div className="mt-3 md:mt-0 w-full md:w-auto flex justify-end">
                <span className="w-full md:w-auto inline-flex items-center justify-center gap-1.5 rounded-sm border border-ink/25 bg-transparent px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] font-medium text-ink transition-all duration-200 group-hover:border-ink group-hover:bg-ink group-hover:text-paper shadow-sm">
                  <span>View</span>
                  <ArrowUpRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>

            </div>
          );
        })}
      </div>

      {/* Monospace Ledger Footer Metadata */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 px-2 font-mono text-[11px] text-ink/45">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="h-3.5 w-3.5 text-ink/50" />
          <span>Chronological Ledger · {certifications.length} Verified Records</span>
        </span>
        <span className="hidden sm:inline">
          Hover row for instant preview · Click to inspect full certificate
        </span>
      </div>

    </div>
  );
}