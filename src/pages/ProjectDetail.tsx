import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react';
import { type ReactNode } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Seo } from '../components/seo/Seo';
import { getProjectBySlug, projects } from '../data/projects';
import { site } from '../data/site';

function SectionBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="glass-card p-6 md:p-7">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="mt-3 text-muted">{children}</div>
    </section>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  const otherCases = projects.filter((item) => item.slug !== project.slug).slice(0, 2);
  const projectPath = `/projetos/${project.slug}`;

  return (
    <main className="min-h-screen bg-bg text-text">
      <Seo
        title={`${project.name} | Case de produto e front-end — ${site.name}`}
        description={project.summary}
        url={projectPath}
        canonical={projectPath}
        image={project.cover}
        type="article"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: project.name,
          description: project.summary,
          url: `${site.baseUrl}${projectPath}`,
          image: `${site.baseUrl}${project.cover}`,
          inLanguage: site.locale,
          author: {
            '@type': 'Person',
            name: site.name,
          },
          keywords: project.tags.join(', '),
        }}
      />

      <section className="section-padding pt-24 md:pt-28">
        <div className="container-tight space-y-10">
          <header className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border/45 bg-panel/45 p-4 md:p-5">
            <a href="/#projetos" className="story-link inline-flex items-center gap-2 text-sm">
              <ArrowLeft size={15} />
              Voltar para projetos
            </a>
            <div className="flex flex-wrap items-center gap-2">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border/55 bg-panel/35 px-3 py-2 text-sm"
              >
                Ver demo <ArrowUpRight size={14} />
              </a>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border/55 bg-panel/35 px-3 py-2 text-sm"
                >
                  GitHub <Github size={14} />
                </a>
              )}
            </div>
          </header>

          <article className="grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
            <div className="glass-card p-7 md:p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-muted">Case completo</p>
              <h1 className="mt-3 text-4xl font-semibold md:text-5xl">{project.name}</h1>
              <p className="mt-4 text-lg text-slate-200">{project.tagline}</p>
              <p className="mt-4 text-muted">{project.summary}</p>

              <div className="mt-7">
                <p className="text-xs uppercase tracking-[0.16em] text-muted">Stack principal</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full border border-border/55 bg-panel/35 px-3 py-1 text-xs text-muted">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-7">
                <p className="text-xs uppercase tracking-[0.16em] text-muted">Highlights</p>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {project.highlights.map((item) => (
                    <li key={item} className="rounded-lg border border-border/45 bg-bg/35 px-3 py-2 text-sm text-slate-200">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="glass-card overflow-hidden p-3.5 md:p-4">
              <img src={project.cover} alt={`Capa do projeto ${project.name}`} className="aspect-[4/3] w-full rounded-xl border border-border/45 object-cover" />
            </div>
          </article>

          <div className="grid gap-5 md:grid-cols-2">
            <SectionBlock title="Visão geral">
              <p>{project.overview}</p>
            </SectionBlock>
            <SectionBlock title="Problema">
              <p>{project.problem}</p>
            </SectionBlock>
            <SectionBlock title="Solução">
              <p>{project.solution}</p>
            </SectionBlock>
            <SectionBlock title="Minha atuação">
              <p>{project.role}</p>
            </SectionBlock>
            <SectionBlock title="Decisões de produto/UX">
              <ul className="list-disc space-y-2 pl-5">
                {project.productDecisions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </SectionBlock>
            <SectionBlock title="Desafios técnicos">
              <ul className="list-disc space-y-2 pl-5">
                {project.technicalChallenges.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </SectionBlock>
            <SectionBlock title="Trade-offs">
              <ul className="list-disc space-y-2 pl-5">
                {project.tradeOffs.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </SectionBlock>
            <SectionBlock title="Resultado">
              <p>{project.outcome}</p>
            </SectionBlock>
            <SectionBlock title="Aprendizados">
              <ul className="list-disc space-y-2 pl-5">
                {project.learnings.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </SectionBlock>
          </div>

          <section className="glass-card p-6 md:p-7">
            <h2 className="text-xl font-semibold">Galeria</h2>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              {project.gallery.map((item) => (
                <figure key={item.src} className="space-y-2.5">
                  <img src={item.src} alt={item.alt} className="aspect-[16/10] w-full rounded-xl border border-border/45 object-cover" />
                  <figcaption className="text-sm text-muted">{item.caption}</figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section className="space-y-4 pt-1">
            <h2 className="text-2xl font-semibold">Outros cases</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {otherCases.map((item) => (
                <article key={item.slug} className="glass-card p-5">
                  <img src={item.cover} alt={`Capa do projeto ${item.name}`} className="aspect-[16/9] w-full rounded-lg border border-border/45 object-cover" />
                  <h3 className="mt-4 text-xl font-semibold">{item.name}</h3>
                  <p className="mt-2 text-sm text-slate-200">{item.tagline}</p>
                  <p className="mt-2 text-sm text-muted">{item.summary}</p>
                  <div className="mt-4 flex items-center justify-between gap-3">
                    <a href={item.demoUrl} target="_blank" rel="noreferrer" className="story-link inline-flex items-center gap-2 text-sm">
                      Ver demo <ArrowUpRight size={14} />
                    </a>
                    <Link to={`/projetos/${item.slug}`} className="text-sm font-medium text-slate-200 underline underline-offset-4 hover:text-text">
                      {item.caseHint}
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
