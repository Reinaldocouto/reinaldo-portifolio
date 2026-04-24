import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { site } from '../../data/site';

export function Hero() {
  return (
    <section id="top" className="section-padding relative overflow-hidden pb-20 pt-32 md:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
      <div className="container-tight relative grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="space-y-6"
        >
          <span className="inline-flex rounded-full border border-primary/35 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {site.availability}
          </span>
          <p className="text-sm uppercase tracking-[0.2em] text-muted">{site.hero.eyebrow}</p>
          <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-tight md:text-6xl">
            <span className="text-gradient">{site.hero.headline}</span>
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

          <div className="flex flex-wrap items-center gap-4">
            {site.hero.socialLinks.map((link) => (
              <a key={link.label} href={link.href} className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-text">
                {link.label}
                <ArrowUpRight size={15} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
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
