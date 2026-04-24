import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin } from 'lucide-react';
import { site } from '../../data/site';

const socialIconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
} as const;

export function Hero() {
  return (
    <section id="top" className="section-padding hero-section relative overflow-hidden pb-16 pt-28 md:pb-20 md:pt-36">
      <div className="hero-grid pointer-events-none absolute inset-0" />
      <div className="hero-glow pointer-events-none absolute -top-32 left-1/2 h-[380px] w-[580px] -translate-x-1/2 blur-3xl" />

      <div className="container-tight relative grid items-start gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="space-y-6"
        >
          <span className="inline-flex rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.17em] text-primary">
            {site.availability}
          </span>

          <p className="text-xs uppercase tracking-[0.16em] text-muted">{site.hero.eyebrow}</p>

          <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-[1.02] md:text-6xl">
            <span className="block">{site.hero.headlineTop}</span>
            <span className="text-gradient block">{site.hero.headlineAccent}</span>
            <span className="mt-3 block text-xl font-medium leading-snug text-slate-200 md:text-2xl">{site.hero.headlineBottom}</span>
          </h1>

          <p className="max-w-2xl text-base text-muted md:max-w-xl">{site.hero.description}</p>

          <div className="flex flex-wrap gap-3 pt-1">
            <a href={site.hero.primaryCta.href} className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-bg transition hover:bg-primary/90">
              {site.hero.primaryCta.label}
            </a>
            <a
              href={site.hero.secondaryCta.href}
              className="rounded-lg border border-border/70 bg-panel/40 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:bg-panel/70"
            >
              {site.hero.secondaryCta.label}
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-1">
            {site.hero.socialLinks.map((link) => {
              const Icon = socialIconMap[link.label as keyof typeof socialIconMap] ?? ArrowUpRight;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-text"
                >
                  <Icon size={15} />
                  {link.label}
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, x: 22 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.12, ease: 'easeOut' }}
          className="glass-card relative overflow-hidden p-5 md:p-6 lg:mt-5"
        >
          <p className="mb-3 text-[11px] uppercase tracking-[0.16em] text-muted">{site.hero.profileCard.title}</p>
          <div className="space-y-2.5 text-sm text-slate-200">
            {site.hero.profileCard.lines.map((line) => (
              <p key={line} className="rounded-md border border-border/50 bg-bg/40 px-3 py-2">
                {line}
              </p>
            ))}
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
