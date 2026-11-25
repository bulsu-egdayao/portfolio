import React from 'react';

export function SectionHeading({ id, title, description }) {
  return (
    <div className="grid gap-4 md:grid-cols-[1fr_1fr] md:items-end md:gap-12">
      <h2 id={id} className="text-3xl font-semibold tracking-[-0.03em] text-ink md:text-4xl">
        {title}
      </h2>
      <p className="max-w-md text-base leading-relaxed text-mute md:justify-self-end">{description}</p>
    </div>
  );
}
