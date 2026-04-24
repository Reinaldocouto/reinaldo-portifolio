import { motion } from 'framer-motion';
import { ArrowUpRight, Download, Github, Linkedin, MessageCircle } from 'lucide-react';
import { site } from '../../data/site';

const socialIconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  WhatsApp: MessageCircle,
} as const;

export function Hero() {
  return (
    <section id="top" className="section-padding hero-section relative overflow-hidden pb-14 pt-32 md:pb-26 md:pt-48">
      <div className="hero-grid pointer-events-none absolute inset-0 z-0" />
      <div className="hero-glow animate-glow-pulse pointer-events-none absolute -top-48 left-1/2 z-10 h-[500px] w-[900px] -translate-x-1/2 blur-[120px]" />
      <div className="hero-glow-secondary animate-glow-pulse-soft pointer-events-none absolute -top-36 left-1/2 z-10 h-[380px] w-[680px] -translate-x-1/2 blur-[90px]" />

      <div className="container-tight relative z-20 grid items-start gap-8 md:grid-cols-12 lg:gap-11">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="space-y-7 md:col-span-7"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/22 bg-primary/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.17em] text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300/75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
            </span>
            {site.availability}
          </span>

          <p className="text-xs uppercase tracking-[0.16em] text-muted">{site.hero.eyebrow}</p>

          <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-[1.03] md:text-6xl">
            <span className="block md:whitespace-nowrap">
              {site.hero.headlineTop} <span className="text-gradient inline-block">{site.hero.headlineAccent}</span>
            </span>
            <span className="mt-4 block max-w-3xl text-xl font-medium leading-snug text-slate-200 md:text-2xl">{site.hero.headlineBottom}</span>
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-muted md:max-w-xl">{site.hero.description}</p>

          <div className="flex flex-wrap gap-3 pt-1">
            <a href={site.hero.primaryCta.href} className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-bg transition hover:bg-primary/90">
              {site.hero.primaryCta.label}
            </a>
            <a
              href={site.hero.secondaryCta.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border/60 bg-panel/35 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:bg-panel/60"
            >
              {site.hero.secondaryCta.label} <Download size={14} />
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 pt-1">
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

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.18 }}
          className="hidden md:col-span-5 md:block"
        >
          <aside className="glass-card shadow-elegant rounded-2xl p-6 lg:mt-5">
            <div className="mb-5 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
              <span className="ml-2 font-mono text-[11px] text-muted">{site.hero.profileCard.terminalLabel}</span>
            </div>

            <div className="space-y-1.5 font-mono text-[13px] leading-relaxed">
              <p>
                <span className="text-muted">const</span> <span className="text-primary">profile</span> = {'{'}
              </p>
              <p className="pl-4">
                <span className="text-accent">role:</span> "{site.hero.profileCard.role}",
              </p>
              <p className="pl-4">
                <span className="text-accent">focus:</span> ["{site.hero.profileCard.focus[0]}", "{site.hero.profileCard.focus[1]}", "{site.hero.profileCard.focus[2]}"],
              </p>
              <p className="pl-4">
                <span className="text-accent">stack:</span> ["{site.hero.profileCard.stack[0]}", "{site.hero.profileCard.stack[1]}", "{site.hero.profileCard.stack[2]}"],
              </p>
              <p className="pl-4">
                <span className="text-accent">building:</span> "{site.hero.profileCard.building}",
              </p>
              <p>{'};'}</p>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-2">
              {site.hero.profileCard.tags.map((tag) => (
                <span key={tag} className="rounded-md border border-border/55 bg-panel/38 px-2 py-1.5 text-center font-mono text-[11px] text-muted">
                  {tag}
                </span>
              ))}
            </div>
          </aside>
        </motion.div>
      </div>
    </section>
  );
}
