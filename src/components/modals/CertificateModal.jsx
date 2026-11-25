import React, { useEffect, useState } from 'react';
import { externalLinkProps } from '../../utils/links';
import { X, ExternalLink, Image as ImageIcon, RotateCw } from 'lucide-react';

export function CertificateModal({ cert, onClose }) {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    setRotation(0);
  }, [cert]);

  useEffect(() => {
    if (!cert) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [cert, onClose]);

  if (!cert) return null;

  const handleRotate = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm transition-opacity"
      onClick={onClose}>
      
      {/* Modal Dialog Box */}
      <div
        className="relative flex max-h-[92vh] w-full max-w-4xl flex-col rounded-xl border border-ink/20 bg-paper text-ink shadow-2xl"
        onClick={(e) => e.stopPropagation()}>
        
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-ink/10 px-6 py-4">
          <div className="min-w-0 pr-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/50">
              Verified Credential · {cert.credentialId}
            </span>
            <h2 id="cert-modal-title" className="truncate font-display text-lg sm:text-xl font-bold tracking-tight text-ink mt-0.5">
              {cert.title}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleRotate}
              title="Rotate Certificate 90°"
              className="flex items-center gap-1.5 rounded-sm border border-ink/20 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-ink/70 hover:bg-ink hover:text-paper transition-colors">
              <RotateCw className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Rotate</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close certificate preview"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border border-ink/20 text-ink/70 hover:bg-ink hover:text-paper transition-colors">
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Certificate Real Photo Container */}
        <div className="overflow-auto p-4 sm:p-6 flex-1 bg-ink/[0.03] flex items-center justify-center min-h-[300px]">
          <div className="relative max-w-full rounded-lg border border-ink/15 bg-white p-2 shadow-md">
            <img
              src={cert.image}
              alt={`${cert.title} official certificate`}
              style={{
                transform: `rotate(${rotation}deg)`,
                transition: 'transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)'
              }}
              className="max-h-[60vh] w-auto max-w-full object-contain mx-auto rounded"
            />
          </div>
        </div>

        {/* Footer Meta & Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-ink/10 p-4 sm:px-6">
          <div className="text-left w-full sm:w-auto">
            <p className="text-xs font-semibold text-ink">
              Issued by <span className="font-bold">{cert.issuer}</span>
            </p>
            <p className="font-mono text-[11px] text-ink/50">
              {cert.date}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto justify-end">
            <a
              href={cert.image}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-sm border border-ink/20 px-4 py-2 font-mono text-xs uppercase tracking-wider text-ink hover:bg-ink hover:text-paper transition-colors">
              <ImageIcon className="h-3.5 w-3.5" />
              <span>Full Size Image</span>
            </a>
            {cert.verifyUrl && (
              <a
                href={cert.verifyUrl}
                {...externalLinkProps}
                className="inline-flex items-center gap-1.5 rounded-sm border border-ink bg-ink px-4 py-2 font-mono text-xs uppercase tracking-wider text-paper hover:opacity-90 transition-opacity">
                <span>Issuer Verification</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
            <button
              type="button"
              onClick={onClose}
              className="rounded-sm border border-ink/20 px-4 py-2 font-mono text-xs uppercase tracking-wider text-ink hover:bg-ink/10 transition-colors">
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
