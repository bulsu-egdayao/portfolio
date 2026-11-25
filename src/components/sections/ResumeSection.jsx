import React from 'react';
import { motion } from 'framer-motion';
import { SectionReveal } from '../ui/SectionReveal';
import { MinimalButton } from '../ui/MinimalButton';
import { Download, ExternalLink } from 'lucide-react';

const EXPERIENCES = [
  {
    period: '2026 — NOW',
    role: 'Student Developer & System Tester',
    company: 'Bureau of Jail Management and Penology (BJMP Regional Office III)',
    description:
      'Engineered and pilot-tested SENTRI, a centralized web recruitment and applicant tracking portal. Implemented multi-stage progression tracking (physical, medical, neuro-psychiatric), role-based evaluation workflows, automated notification alerts, and audit logging for regional recruitment boards.'
  },
  {
    period: '2025 — PRESENT',
    role: 'Full-Stack Web Developer',
    company: 'Wise Sole & Independent Software Projects',
    description:
      'Built and deployed full-stack footwear catalog showcase on Vercel and Render with dynamic filtering, live pricing, high-resolution media galleries, and direct customer inquiry channels. Engineered custom database schemas and responsive UI components.'
  },
  {
    period: '2024 — 2025',
    role: 'Application Developer & Researcher',
    company: 'Bulacan State University',
    description:
      'Collaborated on campus systems including AGAP (integrated gate restriction with Android QR verification and Firebase real-time gate sync), energy estimation utilities, and student-centric software architectures.'
  }
];

const EDUCATION = [
  {
    period: '2022 — 2026',
    role: 'Bachelor of Science in Information Technology (BSIT)',
    school: 'Bulacan State University (Sarmiento Campus)',
    description:
      'Major in Web and Mobile Application Development. Dean’s list honoree, capstone student developer for BJMP Region III, and accredited certification holder across enterprise systems, cybersecurity, and cloud services.'
  }
];

const SKILLS = [
  { name: 'JavaScript / React.js', level: 95 },
  { name: 'PHP / Laravel REST APIs', level: 90 },
  { name: 'SQL / MySQL / Database Design', level: 88 },
  { name: 'Tailwind CSS / Responsive UI', level: 96 },
  { name: 'Salesforce Administration & Automation', level: 85 },
  { name: 'Git / Cloud Deployment (Vercel & Render)', level: 88 },
  { name: 'Android Application Development (Java)', level: 82 },
  { name: 'Network Fundamentals & Cybersecurity', level: 84 },
];

const BAR_COLORS = ['bg-sun', 'bg-signal', 'bg-pool'];

export function ResumeSection() {
  return (
    <section id="resume" className="scroll-mt-16 border-t border-ink/10 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* Section Header */}
        <SectionReveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 pb-16 border-b border-ink/10">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink/50">
                01 — RESUME
              </span>
              <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl md:text-6xl">
                Four years of architecting scalable applications
              </h2>
            </div>
            <div className="flex flex-wrap items-center gap-3 self-start">
              <MinimalButton
                href="/Ezekiel_Dayao_CV.pdf"
                download="Ezekiel_Dayao_CV.pdf"
                variant="primary"
                size="md"
                icon={Download}>
                Download PDF CV
              </MinimalButton>
              <MinimalButton
                href="/Ezekiel_Dayao_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="md"
                icon={ExternalLink}>
                View PDF
              </MinimalButton>
            </div>
          </div>
        </SectionReveal>

        {/* 01.1 — Experience */}
        <SectionReveal delay={0.1}>
          <div className="grid gap-10 py-16 lg:grid-cols-[280px_1fr] lg:gap-16 border-b border-ink/10">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink/50">
                01.1 — EXPERIENCE
              </span>
              <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                Where I’ve contributed
              </h3>
              <p className="mt-2 text-sm text-ink/60">
                Production-tested systems built for public agencies and client initiatives.
              </p>
            </div>

            <div className="divide-y divide-ink/10">
              {EXPERIENCES.map((exp) => (
                <article key={exp.period} className="py-7 first:pt-0 last:pb-0 sm:grid sm:grid-cols-[160px_1fr] gap-6">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink/50 sm:pt-1">
                    {exp.period}
                  </span>
                  <div>
                    <h4 className="font-display text-lg font-bold text-ink">
                      {exp.role}
                    </h4>
                    <p className="text-sm font-medium text-ink/60">
                      {exp.company}
                    </p>
                    <p className="mt-2.5 text-sm leading-relaxed text-ink/75 max-w-2xl">
                      {exp.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* 01.2 — Education */}
        <SectionReveal delay={0.15}>
          <div className="grid gap-10 py-16 lg:grid-cols-[280px_1fr] lg:gap-16 border-b border-ink/10">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink/50">
                01.2 — EDUCATION
              </span>
              <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                Academic foundation
              </h3>
              <p className="mt-2 text-sm text-ink/60">
                Formal training in computer science, software engineering, and systems development.
              </p>
            </div>

            <div className="divide-y divide-ink/10">
              {EDUCATION.map((edu) => (
                <article key={edu.period} className="py-7 first:pt-0 last:pb-0 sm:grid sm:grid-cols-[160px_1fr] gap-6">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink/50 sm:pt-1">
                    {edu.period}
                  </span>
                  <div>
                    <h4 className="font-display text-lg font-bold text-ink">
                      {edu.role}
                    </h4>
                    <p className="text-sm font-medium text-ink/60">
                      {edu.school}
                    </p>
                    <p className="mt-2.5 text-sm leading-relaxed text-ink/75 max-w-2xl">
                      {edu.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* 01.3 — Skills with Animated Progress Bars */}
        <SectionReveal delay={0.2}>
          <div className="grid gap-10 pt-16 lg:grid-cols-[280px_1fr] lg:gap-16">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink/50">
                01.3 — SKILLS
              </span>
              <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                Technical toolkit
              </h3>
              <p className="mt-2 text-sm text-ink/60">
                Technologies and frameworks utilized in current production and research environments.
              </p>
            </div>

            <div className="grid gap-x-12 gap-y-7 sm:grid-cols-2">
              {SKILLS.map((skill, index) => {
                const colorClass = BAR_COLORS[index % BAR_COLORS.length];
                return (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-ink">{skill.name}</span>
                      <span className="font-mono text-xs text-ink/50">{skill.level}%</span>
                    </div>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-sm bg-ink/10">
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: skill.level / 100 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.1 * index, ease: [0.22, 1, 0.36, 1] }}
                        className={`h-full rounded-sm origin-left ${colorClass}`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </SectionReveal>

      </div>
    </section>
  );
}
