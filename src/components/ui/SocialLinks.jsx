import React from 'react';
import { MailIcon } from 'lucide-react';
import { profile } from '../../data/profile';
import { externalLinkProps } from '../../utils/links';
import { GitHubIcon, LinkedInIcon } from './BrandIcons';

export function SocialLinks({ className = '', light = false }) {
  const linkClass = light
    ? 'grid h-10 w-10 place-items-center rounded-sm border border-white/30 bg-black text-white transition-all duration-200 hover:bg-white hover:text-black hover:-translate-y-0.5'
    : 'grid h-10 w-10 place-items-center rounded-sm border border-ink/20 bg-paper text-ink transition-all duration-200 hover:bg-ink hover:text-paper hover:border-ink hover:-translate-y-0.5';

  return (
    <ul className={`flex items-center gap-3 ${className}`} aria-label="Social links">
      <li>
        <a href={profile.socials.github} {...externalLinkProps} aria-label="GitHub (opens in new tab)" className={linkClass}>
          <GitHubIcon className="h-5 w-5" />
        </a>
      </li>
      <li>
        <a
          href={profile.socials.linkedin}
          {...externalLinkProps}
          aria-label="LinkedIn (opens in new tab)"
          className={linkClass}>
          <LinkedInIcon className="h-5 w-5" />
        </a>
      </li>
      <li>
        <a href={`mailto:${profile.email}`} aria-label={`Email ${profile.email}`} className={linkClass}>
          <MailIcon className="h-5 w-5" aria-hidden="true" />
        </a>
      </li>
    </ul>
  );
}
