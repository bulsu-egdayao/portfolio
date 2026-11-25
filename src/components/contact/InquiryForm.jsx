import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckIcon, AlertCircleIcon, Loader2Icon, Send } from 'lucide-react';
import { useInquiryForm } from '../../hooks/useInquiryForm';
import { LIMITS } from '../../utils/validation';

export function InquiryForm() {
  const { values, errors, status, sentTo, handleChange, handleBlur, handleSubmit, reset } = useInquiryForm();
  const submitting = status === 'submitting';

  return (
    <div className="w-full">
      <AnimatePresence mode="wait" initial={false}>
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3 }}
            className="flex min-h-[340px] flex-col items-center justify-center rounded-xl border border-ink/15 bg-paper p-8 text-center shadow-sm"
            role="status">
            <div className="grid h-16 w-16 place-items-center rounded-full bg-pool text-ink shadow-md">
              <CheckIcon className="h-8 w-8" aria-hidden="true" />
            </div>
            <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-ink">
              Message Sent
            </h3>
            <p className="mt-2 max-w-sm text-sm text-ink/65 leading-relaxed">
              Thanks for reaching out! I will reply as soon as possible
              {sentTo ? ` to ${sentTo}` : ''}.
            </p>
            <div className="mt-8">
              <button
                type="button"
                onClick={reset}
                className="rounded-sm border border-ink/25 px-6 py-2.5 font-mono text-xs uppercase tracking-wider text-ink hover:bg-ink hover:text-paper transition-all">
                Send Another Message
              </button>
            </div>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            
            {/* Name & Email 2-column on sm+ */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block font-mono text-[11px] uppercase tracking-[0.25em] text-ink/60 mb-2">
                  Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  maxLength={LIMITS.name}
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Your Name"
                  disabled={submitting}
                  className="w-full rounded-lg border border-ink/20 bg-transparent px-4 py-3 text-sm text-ink placeholder:text-ink/40 transition-colors focus:border-ink focus:outline-none focus:ring-1 focus:ring-ink"
                />
                {errors.name && (
                  <p className="mt-1 flex items-center gap-1 font-mono text-xs text-signal">
                    <AlertCircleIcon className="h-3 w-3" />
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block font-mono text-[11px] uppercase tracking-[0.25em] text-ink/60 mb-2">
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  maxLength={LIMITS.email}
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="you@domain.com"
                  disabled={submitting}
                  className="w-full rounded-lg border border-ink/20 bg-transparent px-4 py-3 text-sm text-ink placeholder:text-ink/40 transition-colors focus:border-ink focus:outline-none focus:ring-1 focus:ring-ink"
                />
                {errors.email && (
                  <p className="mt-1 flex items-center gap-1 font-mono text-xs text-signal">
                    <AlertCircleIcon className="h-3 w-3" />
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block font-mono text-[11px] uppercase tracking-[0.25em] text-ink/60 mb-2">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={values.subject || ''}
                onChange={handleChange}
                placeholder="Project Inquiry, Full-Stack Opportunity, etc."
                disabled={submitting}
                className="w-full rounded-lg border border-ink/20 bg-transparent px-4 py-3 text-sm text-ink placeholder:text-ink/40 transition-colors focus:border-ink focus:outline-none focus:ring-1 focus:ring-ink"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block font-mono text-[11px] uppercase tracking-[0.25em] text-ink/60 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                maxLength={LIMITS.messageMax}
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Tell me about your project, timeline, or question..."
                disabled={submitting}
                className="w-full rounded-lg border border-ink/20 bg-transparent px-4 py-3 text-sm text-ink placeholder:text-ink/40 transition-colors focus:border-ink focus:outline-none focus:ring-1 focus:ring-ink"
              />
              {errors.message && (
                <p className="mt-1 flex items-center gap-1 font-mono text-xs text-signal">
                  <AlertCircleIcon className="h-3 w-3" />
                  {errors.message}
                </p>
              )}
            </div>

            {/* Minimalist Rectangular Send Button & Microcopy */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-5 pt-3 border-t border-ink/10">
              <button
                type="submit"
                disabled={submitting}
                className="group inline-flex items-center justify-center gap-3 rounded-sm border border-ink bg-ink px-8 py-3.5 font-mono text-xs uppercase tracking-[0.2em] font-medium text-paper shadow-sm transition-all duration-200 hover:bg-transparent hover:text-ink hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:pointer-events-none">
                {submitting ? (
                  <>
                    <Loader2Icon className="h-4 w-4 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </>
                )}
              </button>

              <p className="text-xs font-mono text-ink/50 max-w-xs leading-relaxed">
                Direct delivery to wiseydayao01@gmail.com
              </p>
            </div>

          </form>
        )}
      </AnimatePresence>
    </div>
  );
}
