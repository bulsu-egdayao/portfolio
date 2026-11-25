import React from 'react';
import { BoxedBadge } from '../ui/BoxedBadge';
import { SectionDivider } from '../ui/SectionDivider';
import { PipeButton } from '../ui/PipeButton';
import { PaletteIcon, Code2Icon, WrenchIcon, GraduationCapIcon } from 'lucide-react';
import { profile } from '../../data/profile';

const capabilities = [
  {
    title: 'DESIGN',
    icon: <PaletteIcon className="h-9 w-9 text-black dark:text-white" />,
    description:
      'Figma wireframing and prototyping. Creating intuitive layouts, user journeys, and responsive UI structures ready for frontend implementation.'
  },
  {
    title: 'DEVELOPMENT',
    icon: <Code2Icon className="h-9 w-9 text-black dark:text-white" />,
    description:
      'Full-stack and backend engineering using JavaScript, PHP, SQL, ReactJS, and HTML/CSS with Tailwind CSS, along with native Java Android mobile apps.'
  },
  {
    title: 'MAINTENANCE',
    icon: <WrenchIcon className="h-9 w-9 text-black dark:text-white" />,
    description:
      'Database management (SQL & Firebase), version control with Git & GitHub, deployment on Vercel and Render, and foundational Cisco networking troubleshooting.'
  }
];

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-white dark:bg-black py-20 px-5 md:py-28 md:px-8">
      <div className="mx-auto max-w-5xl text-center">
        
        {/* Tomasz Gajda Exact Boxed Badge */}
        <BoxedBadge title="ABOUT ME" />

        <p className="mx-auto mt-8 max-w-3xl font-montserrat text-xs sm:text-sm leading-relaxed text-neutral-800 dark:text-neutral-300">
          {profile.summary}
        </p>

        {/* Educational Background from Resume */}
        <div className="mx-auto mt-8 max-w-2xl border-4 border-black dark:border-white bg-[#D7D7D7] dark:bg-neutral-900 p-6 text-left shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] dark:shadow-[5px_5px_0px_0px_rgba(255,255,255,1)]">
          <div className="flex items-start gap-4">
            <div className="grid h-12 w-12 shrink-0 place-items-center border-2 border-black dark:border-white bg-black dark:bg-white text-white dark:text-black">
              <GraduationCapIcon className="h-6 w-6" />
            </div>
            <div>
              <span className="font-montserrat text-[11px] font-black uppercase tracking-[0.2em] text-neutral-600 dark:text-neutral-400 block">
                Educational Background
              </span>
              <h3 className="font-montserrat text-sm sm:text-base font-black uppercase text-black dark:text-white mt-0.5">
                {profile.education.degree}, {profile.education.expectedYear}
              </h3>
              <p className="font-montserrat text-xs font-semibold text-neutral-700 dark:text-neutral-300 mt-1">
                {profile.education.school}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <PipeButton href="#skills" variant="dark">
            Explore Skills
          </PipeButton>
        </div>

        {/* Top Geometric Divider */}
        <SectionDivider className="my-14" />

        {/* 3 Columns: DESIGN, DEVELOPMENT, MAINTENANCE */}
        <div className="grid gap-8 md:grid-cols-3 text-left">
          {capabilities.map((item) => (
            <div
              key={item.title}
              className="flex flex-col border-4 border-black dark:border-white bg-white dark:bg-neutral-900 p-7 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] transition-transform duration-200 hover:-translate-y-1">
              <div className="mb-5 inline-grid h-16 w-16 place-items-center border-2 border-black dark:border-white bg-[#D7D7D7] dark:bg-neutral-800">
                {item.icon}
              </div>
              <h3 className="font-montserrat text-lg font-black uppercase tracking-[0.2em] text-black dark:text-white">
                {item.title}
              </h3>
              <p className="mt-3 font-montserrat text-xs leading-relaxed text-neutral-700 dark:text-neutral-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Geometric Divider */}
        <SectionDivider className="my-14" />

      </div>
    </section>
  );
}
