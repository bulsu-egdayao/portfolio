import React from 'react';
import { motion } from 'framer-motion';
import { CornerBrackets } from '../ui/CornerBrackets';
import { MinimalButton } from '../ui/MinimalButton';
import { profile } from '../../data/profile';
import { ArrowDownRight, ArrowUpRight, Download } from 'lucide-react';

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="relative flex min-h-[calc(100dvh-84px)] items-center">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-6 py-16 lg:grid-cols-2 lg:gap-14 lg:px-10">
        
        {/* Left Column: Avatar in Corner Framing Brackets */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-sm lg:max-w-md">
          
          <CornerBrackets>
            <div className="group relative aspect-square w-full overflow-hidden rounded-md border border-ink/20 bg-paper shadow-sm">
              {/* Coffee Photo */}
              <img
                src={profile.portrait}
                alt={`${profile.fullName} drinking coffee`}
                className="absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-500 ease-in-out group-hover:opacity-0"
              />
              {/* Typing Photo */}
              <img
                src={profile.portraitHover}
                alt={`${profile.fullName} typing on laptop`}
                className="absolute inset-0 h-full w-full object-cover object-center opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
              />
              {/* Subtle hover badge */}
              <div className="pointer-events-none absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-sm border border-ink/15 bg-paper/90 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-ink/80 backdrop-blur-sm">
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="group-hover:hidden">Dayao · Offline</span>
                  <span className="hidden group-hover:inline">Dayao · In The Flow</span>
                </span>
                <span className="text-ink/40 text-[9px]">Hover photo</span>
              </div>
            </div>
          </CornerBrackets>

          {/* Caption in IBM Plex Mono */}
          <p className="mt-6 text-center font-mono text-[11px] uppercase tracking-[0.25em] text-ink/50">
            Fig. 01 — Ezekiel Dayao, Full-Stack Developer, Bulacan
          </p>
        </motion.div>

        {/* Right Column: Hero Typography & Minimalist Rectangular Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center lg:text-left">
          
          <div className="inline-flex items-center gap-2 rounded-sm border border-ink/15 bg-ink/[0.03] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-ink/70 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-sun animate-pulse" />
            <span>Available for Roles & Projects</span>
          </div>

          <h1
            id="hero-heading"
            className="font-display text-6xl font-extrabold sm:text-7xl lg:text-[5.5rem] leading-[0.98] tracking-tight text-ink">
            Ezekiel Dayao
          </h1>

          <h2 className="mt-5 font-display text-2xl font-bold tracking-tight text-ink/90 sm:text-3xl">
            Building software systems that solve real problems.
          </h2>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-ink/75 sm:text-lg">
            Full-stack developer and software engineer specializing in responsive web applications, robust backend architectures, and certified Salesforce platform operations. Creator of the BJMP Region III Sentri recruitment portal and Wise Sole e-commerce.
          </p>

          {/* Minimalist Rectangular Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5">
            <MinimalButton
              href="#resume"
              variant="primary"
              size="lg"
              icon={ArrowDownRight}>
              Explore Resume
            </MinimalButton>

            <MinimalButton
              href="#projects"
              variant="outline"
              size="lg"
              icon={ArrowUpRight}>
              Selected Work
            </MinimalButton>

            <MinimalButton
              href="/Ezekiel_Dayao_CV.pdf"
              download="Ezekiel_Dayao_CV.pdf"
              variant="secondary"
              size="lg"
              icon={Download}>
              Download CV
            </MinimalButton>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
