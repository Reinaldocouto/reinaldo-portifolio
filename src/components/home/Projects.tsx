import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';

export function Projects() {
  const featured = projects.find((project) => project.featured) ?? projects[0];
  const secondary = projects.filter((project) => project.slug !== featured.slug).slice(0, 2);

  return (
    <section id="projetos" className="section-padding">
      <div className="container-tight space-y-8">
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.24em] text-muted">Projetos em destaque</p>
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
            Cases com profundidade de produto e execução orientada a resultado.
          </h2>
        </header>

        <div className="grid gap-5 lg:grid-cols-3">
          <article className="glass-card relative overflow-hidden p-6 lg:col-span-2">
            <div className="mb-5 aspect-[16/7] w-full rounded-xl border border-border bg-bg/80" />
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Projeto principal</p>
            <h3 className="mt-2 text-2xl font-semibold">{featured.name}</h3>
            <p className="mt-3 text-muted">{featured.summary}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {featured.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-border px-3 py-1 text-xs text-muted">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={featured.demoUrl} className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm">
                Ver demo <ArrowUpRight size={15} />
              </a>
              <Link to={`/projetos/${featured.slug}`} className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-bg">
                {featured.caseHint}
              </Link>
            </div>
          </article>

          <div className="grid gap-5">
            {secondary.map((project) => (
              <article key={project.slug} className="glass-card p-5">
                <div className="mb-4 aspect-[16/9] w-full rounded-lg border border-border bg-bg/80" />
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <p className="mt-2 text-sm text-muted">{project.summary}</p>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <a href={project.demoUrl} className="story-link inline-flex items-center gap-2 text-sm">
                    Ver demo <ArrowUpRight size={14} />
                  </a>
                  <Link to={`/projetos/${project.slug}`} className="text-sm text-muted underline-offset-4 hover:underline">
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
