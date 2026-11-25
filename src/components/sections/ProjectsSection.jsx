import React from 'react';
import { SectionReveal } from '../ui/SectionReveal';
import { CornerBrackets } from '../ui/CornerBrackets';
import { MinimalButton } from '../ui/MinimalButton';
import { projects } from '../../data/projects';
import { externalLinkProps } from '../../utils/links';
import { ArrowUpRight } from 'lucide-react';

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-16 border-t border-ink/10 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* Section Header */}
        <SectionReveal>
          <div className="pb-16 border-b border-ink/10">
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink/50">
              02 — PROJECTS
            </span>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl md:text-6xl">
              Selected work
            </h2>
            <p className="mt-3 text-base text-ink/65 max-w-2xl">
              Engineered for reliability, intuitive navigation, and high-performance operations.
            </p>
          </div>
        </SectionReveal>

        {/* Featured Projects List */}
        <div className="divide-y divide-ink/10">
          {projects.map((project, index) => {
            const figIndex = index + 2;
            const projectNumber = `P.0${index + 1} — ${project.year}`;
            const isReversed = index % 2 === 1;

            return (
              <SectionReveal key={project.title} delay={0.1}>
                <div className={`grid items-center gap-12 py-20 lg:grid-cols-2 lg:gap-16 ${isReversed ? 'lg:grid-flow-dense' : ''}`}>
                  
                  {/* Left Column: Homepage Cover Screenshot inside Framing Brackets */}
                  <div className={isReversed ? 'lg:col-start-2' : ''}>
                    <CornerBrackets>
                      <a
                        href={project.liveUrl}
                        {...externalLinkProps}
                        className="group block aspect-[16/10] w-full overflow-hidden rounded-md border border-ink/15 bg-paper shadow-sm">
                        <img
                          src={project.image}
                          alt={`${project.title} live homepage`}
                          loading="lazy"
                          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      </a>
                    </CornerBrackets>
                    <p className="mt-4 text-center font-mono text-[11px] uppercase tracking-[0.25em] text-ink/50">
                      Fig. 0{figIndex} — {project.title}, {project.category}
                    </p>
                  </div>

                  {/* Right Column: Project Information & Demo Action */}
                  <div className={isReversed ? 'lg:col-start-1' : ''}>
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink/50">
                      {projectNumber}
                    </span>
                    <h3 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-ink/60">
                      {project.category}
                    </p>

                    <div className="mt-6 space-y-3 text-sm leading-relaxed text-ink/75">
                      <p>
                        <strong className="font-mono text-xs uppercase tracking-wider text-ink">Challenge: </strong>
                        {project.problem}
                      </p>
                      <p>
                        <strong className="font-mono text-xs uppercase tracking-wider text-ink">Solution: </strong>
                        {project.solution}
                      </p>
                    </div>

                    {/* 2x2 Meta Grid (Zayn Style) */}
                    <div className="mt-8 grid grid-cols-2 gap-4 border-y border-ink/10 py-6 font-mono text-xs">
                      <div>
                        <span className="text-ink/40 uppercase tracking-widest block text-[10px]">Platform</span>
                        <span className="font-semibold text-ink mt-0.5 block">Web Application</span>
                      </div>
                      <div>
                        <span className="text-ink/40 uppercase tracking-widest block text-[10px]">Year</span>
                        <span className="font-semibold text-ink mt-0.5 block">{project.year}</span>
                      </div>
                      <div className="col-span-2">
                        <span className="text-ink/40 uppercase tracking-widest block text-[10px]">Tech Stack</span>
                        <div className="mt-1.5 flex flex-wrap gap-1.5 font-sans">
                          {project.stack.map((tech) => (
                            <span
                              key={tech}
                              className="rounded border border-ink/15 bg-ink/[0.03] px-2 py-0.5 text-xs text-ink/80">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Single Demo Button (No GitHub button per instruction) */}
                    <div className="mt-8">
                      <MinimalButton
                        href={project.liveUrl}
                        {...externalLinkProps}
                        variant="primary"
                        size="lg"
                        icon={ArrowUpRight}>
                        Visit Website
                      </MinimalButton>
                    </div>

                  </div>

                </div>
              </SectionReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
