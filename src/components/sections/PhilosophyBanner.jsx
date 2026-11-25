import React from 'react';
import { PipeButton } from '../ui/PipeButton';

export function PhilosophyBanner() {
  return (
    <section className="border-b-4 border-black dark:border-white bg-black py-16 px-6 text-center text-white">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-montserrat text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-[0.28em] text-white">
          IT BERRIES
        </h2>

        <p className="mx-auto mt-6 max-w-2xl font-montserrat text-xs sm:text-sm leading-relaxed text-neutral-300">
          I build full-stack web products with clean, tested architecture and security treated as a core feature.
          From reliable database schemas in PostgreSQL to responsive frontend interfaces in React and Tailwind CSS, I ship robust applications on schedule.
        </p>

        <div className="mt-8 flex justify-center">
          <PipeButton href="#about" variant="light">
            Read More
          </PipeButton>
        </div>
      </div>
    </section>
  );
}
