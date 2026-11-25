import React from 'react';

export function BoxedBadge({ title, className = '' }) {
  return (
    <div className={`inline-block border-[5px] border-black dark:border-white bg-white dark:bg-black px-8 sm:px-12 py-3 text-center ${className}`}>
      <h2 className="font-montserrat text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-[0.28em] text-black dark:text-white">
        {title}
      </h2>
    </div>
  );
}
