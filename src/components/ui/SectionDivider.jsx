import React from 'react';

export function SectionDivider({ className = '', light = false }) {
  const lineBg = light ? 'bg-white' : 'bg-black dark:bg-white';
  const textColor = light ? 'text-white' : 'text-black dark:text-white';

  return (
    <div className={`flex items-center justify-center gap-3 my-8 select-none ${className}`}>
      <span className={`w-14 sm:w-24 h-[2px] ${lineBg}`}></span>
      <span className={`text-xs sm:text-sm font-black tracking-widest px-1 font-mono ${textColor}`}>
        / / /
      </span>
      <span className={`w-14 sm:w-24 h-[2px] ${lineBg}`}></span>
    </div>
  );
}
