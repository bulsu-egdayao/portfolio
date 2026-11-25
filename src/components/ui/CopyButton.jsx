import React, { useEffect, useState } from 'react';
import { CheckIcon, CopyIcon } from 'lucide-react';

export function CopyButton({ value, label }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = value;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'absolute';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
    setCopied(true);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex h-8 items-center gap-1.5 rounded-md border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 px-2.5 text-xs font-medium text-neutral-700 dark:text-neutral-300 transition-colors hover:bg-neutral-200 dark:hover:bg-neutral-700">
      {copied ? <CheckIcon className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" /> : <CopyIcon className="h-3.5 w-3.5" />}
      <span>{copied ? 'Copied' : label}</span>
    </button>
  );
}
