import React from 'react';
import { BoxedBadge } from '../ui/BoxedBadge';
import { SectionDivider } from '../ui/SectionDivider';
import { gajdaSkills } from '../../data/skills';

export function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="bg-[#D7D7D7] dark:bg-[#141414] py-20 px-5 md:py-28 md:px-8 border-t-4 border-black dark:border-white">
      <div className="mx-auto max-w-5xl">
        
        {/* Tomasz Gajda Exact Boxed Badge */}
        <div className="text-center">
          <BoxedBadge title="SKILLS" />
          <SectionDivider className="my-12" />
        </div>

        {/* Tier 1: USING NOW */}
        <div className="mb-14">
          <h3 className="font-montserrat text-sm sm:text-base font-black uppercase tracking-[0.25em] text-black dark:text-white border-l-4 border-black dark:border-white pl-3 mb-6">
            USING NOW:
          </h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {gajdaSkills.usingNow.map((skill) => (
              <div
                key={skill.name}
                className="group flex flex-col justify-between border-4 border-black dark:border-white bg-white dark:bg-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-transform duration-150 hover:-translate-y-1">
                <span className="font-montserrat text-xs sm:text-sm font-black uppercase tracking-wider text-black dark:text-white">
                  {skill.name}
                </span>
                <span className="mt-3 text-[10px] font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                  {skill.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tier 2: LEARNING */}
        <div className="mb-14">
          <h3 className="font-montserrat text-sm sm:text-base font-black uppercase tracking-[0.25em] text-black dark:text-white border-l-4 border-black dark:border-white pl-3 mb-6">
            LEARNING:
          </h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {gajdaSkills.learning.map((skill) => (
              <div
                key={skill.name}
                className="group flex flex-col justify-between border-4 border-black dark:border-white bg-white dark:bg-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-transform duration-150 hover:-translate-y-1">
                <span className="font-montserrat text-xs sm:text-sm font-black uppercase tracking-wider text-black dark:text-white">
                  {skill.name}
                </span>
                <span className="mt-3 text-[10px] font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                  {skill.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tier 3: OTHER SKILLS */}
        <div>
          <h3 className="font-montserrat text-sm sm:text-base font-black uppercase tracking-[0.25em] text-black dark:text-white border-l-4 border-black dark:border-white pl-3 mb-6">
            OTHER SKILLS:
          </h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3">
            {gajdaSkills.otherSkills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center justify-between border-4 border-black dark:border-white bg-white dark:bg-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                <span className="font-montserrat text-xs sm:text-sm font-black uppercase tracking-wider text-black dark:text-white">
                  {skill.name}
                </span>
                <span className="border-2 border-black dark:border-white bg-neutral-100 dark:bg-neutral-800 px-2.5 py-0.5 text-xs font-bold text-black dark:text-white">
                  {skill.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        <SectionDivider className="mt-16 mb-4" />

      </div>
    </section>
  );
}
