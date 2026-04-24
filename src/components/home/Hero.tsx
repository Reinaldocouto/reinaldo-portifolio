import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin } from 'lucide-react';
import { site } from '../../data/site';

const socialIconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
} as const;

export function Hero() {
  return (
    <section id="top" className="section-padding hero-section relative overflow-hidden pb-20 pt-32 md:pt-40">
      <div className="hero-grid pointer-events-none absolute inset-0" />
      <div className="hero-glow pointer-events-none absolute -top-28 left-1/2 h-[420px] w-[620px] -translate-x-1/2 blur-3xl" />

      <div className="container-tight relative grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr]">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="space-y-7"
        >
          <span className="inline-flex rounded-full border border-primary/35 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {site.availability}
          </span>

          <p className="max-w-2xl text-sm uppercase tracking-[0.15em] text-muted">{site.hero.eyebrow}</p>

          <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-[1.05] md:text-6xl">
            <span className="block">{site.hero.headlineTop}</span>
            <span className="text-gradient block">{site.hero.headlineAccent}</span>
            <span className="mt-3 block text-2xl font-medium leading-tight text-slate-200 md:text-3xl">{site.hero.headlineBottom}</span>
          </h1>

          <p className="max-w-2xl text-lg text-muted">{site.hero.description}</p>

          <div className="flex flex-wrap gap-3">
            <a href={site.hero.primaryCta.href} className="rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-bg transition hover:bg-primary/90">
              {site.hero.primaryCta.label}
            </a>
            <a href={site.hero.secondaryCta.href} className="rounded-lg border border-border px-5 py-3 text-sm font-semibold transition hover:bg-panel/70">
              {site.hero.secondaryCta.label}
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-5">
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
                  <Icon size={16} />
                  {link.label}
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.12, ease: 'easeOut' }}
          className="glass-card relative overflow-hidden p-6"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-muted">{site.hero.profileCard.title}</p>
          <div className="space-y-3 font-mono text-sm text-slate-200">
            {site.hero.profileCard.lines.map((line) => (
              <p key={line} className="rounded-md border border-border/80 bg-bg/65 px-3 py-2">
                {line}
              </p>
            ))}
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
