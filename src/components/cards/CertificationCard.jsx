import React from 'react';
import { CornerBrackets } from '../ui/CornerBrackets';
import { ArrowUpRight, Eye } from 'lucide-react';

export function CertificationCard({ certification, onVerify }) {
  const { title, issuer, date, credentialId, image, skills = [] } = certification;

  return (
    <article className="group flex h-full flex-col rounded-lg border border-ink/15 bg-paper p-5 transition-all duration-300 hover:border-ink/35 hover:shadow-md">
      
      {/* Real Certificate Photo Preview with Corner Brackets */}
      <div
        role="button"
        tabIndex={0}
        onClick={() => onVerify && onVerify(certification)}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onVerify && onVerify(certification)}
        aria-label={`View ${title} certificate image`}
        className="cursor-pointer">
        <CornerBrackets>
          <div className="relative aspect-[16/11] w-full overflow-hidden rounded-md border border-ink/15 bg-white dark:bg-neutral-900 p-1 flex items-center justify-center">
            <img
              src={image}
              alt={`${title} certificate preview`}
              loading="lazy"
              className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
            />
            {/* Hover overlay hint */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-200 group-hover:bg-black/25">
              <span className="flex items-center gap-1.5 rounded-sm border border-white/40 bg-black/80 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 shadow-sm backdrop-blur-sm">
                <Eye className="h-3 w-3" />
                View Photo
              </span>
            </div>
          </div>
        </CornerBrackets>
      </div>

      {/* Details */}
      <div className="mt-5 flex flex-1 flex-col">
        <div className="flex items-baseline justify-between gap-2">
          <span className="font-mono text-[11px] uppercase tracking-wider text-ink/50">
            {date}
          </span>
          <span className="font-mono text-[10px] text-ink/40">
            ID: {credentialId}
          </span>
        </div>

        <h3 className="mt-2 font-display text-lg font-bold tracking-tight text-ink">
          {title}
        </h3>

        <p className="mt-1 text-xs font-semibold text-ink/65">
          {issuer}
        </p>

        {/* Skills Pills */}
        <div className="mt-4 flex flex-wrap gap-1.5" aria-label="Skills validated">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded border border-ink/10 bg-ink/[0.03] px-2 py-0.5 font-mono text-[10px] text-ink/70">
              {skill}
            </span>
          ))}
        </div>

        <div className="flex-1 pt-6" aria-hidden="true" />
        
        {/* Card Footer: Minimalist Rectangular Verify Button */}
        <div className="border-t border-ink/10 pt-4 mt-auto">
          <button
            type="button"
            onClick={() => onVerify && onVerify(certification)}
            className="w-full inline-flex items-center justify-center gap-2 rounded-sm border border-ink/25 bg-ink/[0.02] py-2.5 px-4 font-mono text-[11px] uppercase tracking-[0.16em] font-semibold text-ink transition-all duration-200 hover:bg-ink hover:text-paper hover:border-ink hover:-translate-y-0.5 shadow-sm">
            <span>Verify Credential</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </div>

      </div>
    </article>
  );
}
