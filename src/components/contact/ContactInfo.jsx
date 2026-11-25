import React from 'react';
import { profile } from '../../data/profile';
import { externalLinkProps } from '../../utils/links';
import { CopyButton } from '../ui/CopyButton';
import { SocialLinks } from '../ui/SocialLinks';

export function ContactInfo() {
  return (
    <div className="flex flex-col justify-between h-full border-4 border-black dark:border-white bg-white dark:bg-black p-6 sm:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
      <div>
        <h3 className="font-montserrat text-2xl font-black uppercase tracking-tight text-black dark:text-white">
          Contact Details
        </h3>
        <p className="mt-4 font-montserrat text-xs sm:text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
          Have an open role, need a custom web application, or want to collaborate on a full-stack system?
          Send a message or reach out through my direct contacts below.
        </p>

        {/* Status Pill */}
        <div className="mt-6 inline-flex items-center gap-2 border-2 border-black dark:border-white bg-[#D7D7D7] dark:bg-neutral-800 px-3.5 py-1.5 font-montserrat text-xs font-bold uppercase tracking-wider text-black dark:text-white">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
          {profile.availability}
        </div>

        <div className="mt-8 space-y-6">
          {/* Email Item */}
          <div className="border-l-4 border-black dark:border-white pl-4">
            <span className="font-montserrat text-[11px] font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 block">
              Email Address
            </span>
            <div className="mt-1 flex flex-wrap items-center justify-between gap-2">
              <a href={`mailto:${profile.email}`} className="font-montserrat text-xs sm:text-sm font-bold text-black dark:text-white hover:underline">
                {profile.email}
              </a>
              <CopyButton value={profile.email} label="Copy" />
            </div>
          </div>

          {/* Location Item */}
          <div className="border-l-4 border-black dark:border-white pl-4">
            <span className="font-montserrat text-[11px] font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 block">
              Location
            </span>
            <span className="font-montserrat text-xs sm:text-sm font-bold text-black dark:text-white block mt-1">
              {profile.address}
            </span>
          </div>

          {/* Phone / WhatsApp Item */}
          <div className="border-l-4 border-black dark:border-white pl-4">
            <span className="font-montserrat text-[11px] font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 block">
              Phone / WhatsApp
            </span>
            <div className="mt-1 flex items-center justify-between gap-2">
              <a href={profile.phoneHref} className="font-montserrat text-xs sm:text-sm font-bold text-black dark:text-white hover:underline">
                {profile.phone}
              </a>
              <a
                href={profile.whatsappUrl}
                {...externalLinkProps}
                className="border border-black dark:border-white bg-neutral-100 dark:bg-neutral-800 px-2.5 py-1 font-montserrat text-[11px] font-bold uppercase hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t-2 border-black dark:border-white">
        <span className="font-montserrat text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block mb-3">
          Social Networks:
        </span>
        <SocialLinks />
      </div>
    </div>
  );
}
