import { ArrowUpRight } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { getProjectBySlug } from '../data/projects';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <main className="min-h-screen bg-bg text-text">
      <section className="section-padding pt-28">
        <article className="container-tight glass-card space-y-6 p-8">
          <header className="space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Case inicial</p>
            <h1 className="text-4xl font-semibold">{project.name}</h1>
            <p className="text-lg text-slate-200">{project.tagline}</p>
            <p className="text-muted">{project.summary}</p>
          </header>

          <img src={project.cover} alt={`Capa do projeto ${project.name}`} className="aspect-[16/8] w-full rounded-xl border border-border object-cover" />

          <div className="grid gap-6 md:grid-cols-2">
            <section>
              <h2 className="text-lg font-semibold">Contexto / problema</h2>
              <p className="mt-2 text-muted">{project.problem}</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold">Resultado</h2>
              <p className="mt-2 text-muted">{project.outcome}</p>
            </section>
          </div>

          <section>
            <h2 className="text-lg font-semibold">Pontos-chave</h2>
            <ul className="mt-3 grid gap-2 md:grid-cols-3">
              {project.highlights.map((item) => (
                <li key={item} className="rounded-lg border border-border/80 bg-bg/65 px-3 py-2 text-sm text-slate-200">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <footer className="flex flex-wrap items-center gap-3">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-border px-3 py-1 text-sm text-muted">
                {tag}
              </span>
            ))}
            <a href={project.demoUrl} target="_blank" rel="noreferrer" className="story-link ml-auto inline-flex items-center gap-2 text-sm">
              Ver demo <ArrowUpRight size={14} />
            </a>
          </footer>

          <Link to="/" className="story-link inline-flex">
            Voltar para home
          </Link>
        </article>
      </section>
    </main>
  );
}
