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
      <section className="section-padding">
        <article className="container-tight glass-card space-y-6 p-8">
          <header className="space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Case inicial</p>
            <h1 className="text-4xl font-semibold">{project.name}</h1>
            <p className="text-lg text-muted">{project.summary}</p>
          </header>

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

          <footer className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-border px-3 py-1 text-sm text-muted">
                {tag}
              </span>
            ))}
          </footer>

          <Link to="/" className="story-link inline-flex">
            Voltar para home
          </Link>
        </article>
      </section>
    </main>
  );
}
