import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';

const accentStyles = {
  blue: 'from-sky-500/14 via-sky-500/5 to-transparent border-sky-500/16',
  violet: 'from-violet-500/12 via-violet-500/5 to-transparent border-violet-500/16',
  emerald: 'from-emerald-500/12 via-emerald-500/5 to-transparent border-emerald-500/16',
} as const;

export function Projects() {
  const featured = projects.find((project) => project.featured) ?? projects[0];
  const secondary = projects.filter((project) => project.slug !== featured.slug).slice(0, 2);

  return (
    <section id="projetos" className="section-padding">
      <div className="container-tight space-y-9">
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.22em] text-muted">Projetos selecionados</p>
          <h2 className="max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">Cases com execução real, foco em produto e profundidade técnica.</h2>
          <p className="max-w-3xl text-muted">Cada projeto apresenta contexto, decisões e trade-offs para além da interface final.</p>
        </header>

        <div className="grid gap-5 lg:grid-cols-3">
          <article className={`glass-card relative overflow-hidden border bg-gradient-to-br p-6 md:p-7 lg:col-span-2 ${accentStyles[featured.accent]}`}>
            <img src={featured.cover} alt={`Capa do projeto ${featured.name}`} className="mb-7 aspect-[16/8] w-full rounded-xl border border-border/45 object-cover" />
            <p className="text-xs uppercase tracking-[0.18em] text-muted">Projeto principal</p>
            <h3 className="mt-2 text-3xl font-semibold">{featured.name}</h3>
            <p className="mt-2 text-base text-slate-200">{featured.tagline}</p>
            <p className="mt-3 text-muted">{featured.summary}</p>

            <ul className="mt-6 grid gap-2 md:grid-cols-3">
              {featured.highlights.map((item) => (
                <li key={item} className="rounded-lg border border-border/45 bg-bg/35 px-3 py-2 text-sm text-slate-200">
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {featured.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-border/55 bg-panel/35 px-3 py-1 text-xs text-muted">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={featured.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border/55 bg-panel/35 px-4 py-2 text-sm font-medium transition hover:bg-panel/60"
              >
                Ver demo <ArrowUpRight size={15} />
              </a>
              <Link to={`/projetos/${featured.slug}`} className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-bg transition hover:bg-primary/90">
                {featured.caseHint}
              </Link>
            </div>
          </article>

          <div className="grid gap-5">
            {secondary.map((project) => (
              <article key={project.slug} className={`rounded-2xl border bg-gradient-to-br p-5 ${accentStyles[project.accent]}`}>
                <img src={project.cover} alt={`Capa do projeto ${project.name}`} className="mb-4 aspect-[16/9] w-full rounded-lg border border-border/45 object-cover" />
                <h3 className="text-2xl font-semibold">{project.name}</h3>
                <p className="mt-2 text-sm text-slate-200">{project.tagline}</p>
                <p className="mt-2 text-sm text-muted">{project.summary}</p>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <a href={project.demoUrl} target="_blank" rel="noreferrer" className="story-link inline-flex items-center gap-2 text-sm">
                    Ver demo <ArrowUpRight size={14} />
                  </a>
                  <Link to={`/projetos/${project.slug}`} className="text-sm font-medium text-slate-200 underline underline-offset-4 hover:text-text">
                    {project.caseHint}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
