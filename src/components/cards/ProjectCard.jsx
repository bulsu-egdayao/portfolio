import React from 'react';
import { externalLinkProps } from '../../utils/links';
import { PipeButton } from '../ui/PipeButton';

export function ProjectCard({ project }) {
  const { title, category, year, problem, solution, stack, image, liveUrl, filterTypes = [] } = project;

  return (
    <article className="group flex h-full flex-col border-4 border-black dark:border-white bg-white dark:bg-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] transition-all duration-200 hover:-translate-y-1">
      {/* Project Image */}
      <div className="relative aspect-[16/10] overflow-hidden border-b-4 border-black dark:border-white bg-neutral-100 dark:bg-neutral-800">
        <img
          src={image}
          alt={`${title} preview`}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
        />

        {/* Category tags (TG Style) */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {filterTypes.map((type) => (
            <span
              key={type}
              className="border-2 border-black dark:border-white bg-white dark:bg-black px-2.5 py-0.5 font-montserrat text-[10px] font-black uppercase tracking-widest text-black dark:text-white shadow-sm">
              {type}
            </span>
          ))}
        </div>

        <div className="absolute bottom-3 right-3 border-2 border-black dark:border-white bg-black dark:bg-white px-2.5 py-0.5 font-montserrat text-[10px] font-black uppercase tracking-widest text-white dark:text-black">
          {year}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <span className="font-montserrat text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
          {category}
        </span>
        <h3 className="mt-1 font-montserrat text-xl font-black uppercase tracking-tight text-black dark:text-white">
          {title}
        </h3>

        <div className="mt-4 space-y-2 text-xs sm:text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
          <p>
            <strong className="font-montserrat uppercase tracking-wider text-black dark:text-white">Problem: </strong>
            {problem}
          </p>
          <p>
            <strong className="font-montserrat uppercase tracking-wider text-black dark:text-white">Solution: </strong>
            {solution}
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="mt-5 flex flex-wrap gap-1.5" aria-label="Tech stack">
          {stack.map((tech) => (
            <span
              key={tech}
              className="border border-black dark:border-white bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 font-montserrat text-[10px] font-bold text-black dark:text-white">
              {tech}
            </span>
          ))}
        </div>

        {/* Pipe Action Button - Demo Only */}
        <div className="mt-auto pt-6">
          {liveUrl && (
            <PipeButton href={liveUrl} {...externalLinkProps} variant="dark" className="w-full text-center">
              Demo
            </PipeButton>
          )}
        </div>
      </div>
    </article>
  );
}
