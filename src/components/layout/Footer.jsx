import React from 'react';
import { profile } from '../../data/profile';
import { externalLinkProps } from '../../utils/links';
import { Linkedin, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-paper py-14 transition-colors">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Col 1: Phone */}
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink/40 block">
              Phone
            </span>
            <a
              href={`tel:${profile.phone.replace(/[^0-9+]/g, '')}`}
              className="mt-2 block text-sm font-semibold text-ink hover:text-sun transition-colors">
              {profile.phone}
            </a>
          </div>

          {/* Col 2: Email */}
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink/40 block">
              Email
            </span>
            <a
              href={`mailto:${profile.email}`}
              className="mt-2 block text-sm font-semibold text-ink hover:text-sun transition-colors">
              {profile.email}
            </a>
          </div>

          {/* Col 3: Follow */}
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink/40 block mb-2">
              Follow Me
            </span>
            <div className="flex items-center gap-2.5">
              <a
                href={profile.socials.linkedin}
                {...externalLinkProps}
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-sm border border-ink/20 text-ink/70 hover:bg-ink hover:text-paper hover:border-ink transition-all">
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={profile.socials.github}
                {...externalLinkProps}
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-sm border border-ink/20 text-ink/70 hover:bg-ink hover:text-paper hover:border-ink transition-all">
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Col 4: Copyright */}
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink/40 block">
              Copyright
            </span>
            <p className="mt-2 text-xs text-ink/65 leading-relaxed">
              © {new Date().getFullYear()} Ezekiel Dayao. All rights reserved.
            </p>
            <p className="text-[11px] font-mono text-ink/40 mt-1">
              Built with React & Tailwind CSS.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
