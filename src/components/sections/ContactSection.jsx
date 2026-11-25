import React from 'react';
import { SectionReveal } from '../ui/SectionReveal';
import { InquiryForm } from '../contact/InquiryForm';
import { profile } from '../../data/profile';
import { externalLinkProps } from '../../utils/links';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-16 border-t border-ink/10 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        
        <div className="grid gap-14 lg:grid-cols-[1fr_360px] lg:gap-20">
          
          {/* Left Column: Header & Contact Form */}
          <SectionReveal>
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink/50">
                04 — CONTACT
              </span>
              <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
                Let's work together
              </h2>
              <p className="mt-3 text-base text-ink/65 max-w-xl pb-10">
                Have an engineering project in mind, need a full-stack developer, or want to discuss technical collaboration? Leave a message below.
              </p>

              <InquiryForm />
            </div>
          </SectionReveal>

          {/* Right Column: Direct Info & Availability Badge (Zayn Style) */}
          <SectionReveal delay={0.15}>
            <div className="space-y-10 lg:pt-16">
              
              {/* Direct Details */}
              <div className="space-y-5">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-ink/40 block">Email</span>
                  <a
                    href={`mailto:${profile.email}`}
                    className="mt-1 flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-sun">
                    <Mail className="h-4 w-4 text-ink/50" />
                    <span>{profile.email}</span>
                  </a>
                </div>

                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-ink/40 block">Phone</span>
                  <a
                    href={`tel:${profile.phone.replace(/[^0-9+]/g, '')}`}
                    className="mt-1 flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-sun">
                    <Phone className="h-4 w-4 text-ink/50" />
                    <span>{profile.phone}</span>
                  </a>
                </div>

                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-ink/40 block">Location</span>
                  <p className="mt-1 flex items-center gap-2 text-sm font-semibold text-ink">
                    <MapPin className="h-4 w-4 text-ink/50" />
                    <span>{profile.location}</span>
                  </p>
                </div>
              </div>

              {/* Follow Me Social Links */}
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-ink/40 block mb-3">
                  Follow Me
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={profile.socials.linkedin}
                    {...externalLinkProps}
                    aria-label="LinkedIn Profile"
                    className="flex h-10 px-3.5 items-center justify-center gap-2 rounded-sm border border-ink/20 font-mono text-xs text-ink/75 transition-all duration-200 hover:border-ink hover:bg-ink hover:text-paper hover:-translate-y-0.5">
                    <Linkedin className="h-4 w-4" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={profile.socials.github}
                    {...externalLinkProps}
                    aria-label="GitHub Profile"
                    className="flex h-10 px-3.5 items-center justify-center gap-2 rounded-sm border border-ink/20 font-mono text-xs text-ink/75 transition-all duration-200 hover:border-ink hover:bg-ink hover:text-paper hover:-translate-y-0.5">
                    <Github className="h-4 w-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

              {/* Availability Badge Card */}
              <div className="rounded-xl border border-ink/15 p-6 bg-ink/[0.02]">
                <div className="flex items-center gap-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-sun animate-pulse" />
                  <span className="font-display text-sm font-bold text-ink">
                    Currently available
                  </span>
                </div>
                <p className="mt-2.5 text-xs text-ink/65 leading-relaxed">
                  Open for full-stack developer roles, freelance software engineering, and technical collaborations.
                </p>
              </div>

            </div>
          </SectionReveal>

        </div>

      </div>
    </section>
  );
}
