import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Seo } from '../components/seo/Seo';
import { getProjectBySlug, projects } from '../data/projects';
import { site } from '../data/site';

function EditorialSection({ title, body }: { title: string; body: string }) {
  return (
    <section className="space-y-2">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="leading-relaxed text-muted">{body}</p>
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
  const projectPath = project.seo.canonicalPath;
  const caseTitle = project.seo.title;
  const caseDescription = project.seo.description;

  return (
    <main className="min-h-screen bg-bg text-text">
      <Seo
        title={`${caseTitle} — ${site.name}`}
        description={caseDescription}
        url={projectPath}
        canonical={projectPath}
        image={project.seo.ogImage}
        type="article"
        jsonLd={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'CreativeWork',
              name: caseTitle,
              description: caseDescription,
              url: `${site.baseUrl}${projectPath}`,
              image: `${site.baseUrl}${project.seo.ogImage}`,
              inLanguage: site.locale,
              keywords: project.tags.join(', '),
              author: {
                '@type': 'Person',
                name: site.name,
                url: site.baseUrl,
              },
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: `${site.baseUrl}/`,
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Projetos',
                  item: `${site.baseUrl}/#projetos`,
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: project.name,
                  item: `${site.baseUrl}${projectPath}`,
                },
              ],
            },
          ],
        }}
      />

      <section className="section-padding pt-24 md:pt-28">
        <div className="container-tight space-y-11">
          <header className="flex flex-wrap items-center justify-between gap-3 border-b border-border/45 pb-4">
            <a href="/#projetos" className="story-link inline-flex items-center gap-2 text-sm">
              <ArrowLeft size={15} />
              Voltar para projetos
            </a>
            <div className="flex flex-wrap items-center gap-2">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border/55 bg-panel/25 px-3 py-2 text-sm"
              >
                Ver demo <ArrowUpRight size={14} />
              </a>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border/55 bg-panel/25 px-3 py-2 text-sm"
                >
                  GitHub <Github size={14} />
                </a>
              )}
            </div>
          </header>

          <article className="grid items-start gap-7 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted">Case completo</p>
                <h1 className="mt-3 text-4xl font-semibold md:text-5xl">{project.name}</h1>
                <p className="mt-4 text-lg text-slate-200">{project.tagline}</p>
                <p className="mt-4 max-w-3xl text-muted">{project.summary}</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-muted">Stack principal</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full border border-border/45 bg-panel/20 px-3 py-1 text-xs text-muted">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <ul className="grid gap-2 sm:grid-cols-2">
                {project.highlights.map((item) => (
                  <li key={item} className="rounded-lg border border-border/35 bg-bg/25 px-3 py-2 text-sm text-slate-200">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border/40 bg-panel/20 p-3">
              <img src={project.cover} alt={`Capa do projeto ${project.name}`} className="aspect-[4/3] w-full rounded-xl border border-border/35 object-cover" />
            </div>
          </article>

          <section className="grid gap-8 border-t border-border/40 pt-8 md:grid-cols-2">
            <EditorialSection title="Visão geral" body={project.overview} />
            <EditorialSection title="Problema" body={project.problem} />
            <EditorialSection title="Solução" body={project.solution} />
            <EditorialSection title="Minha atuação" body={project.role} />
          </section>

          <section className="grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl border border-border/38 bg-panel/20 p-5 md:p-6">
              <h2 className="text-lg font-semibold">Decisões de produto e arquitetura de fluxo</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
                {project.productDecisions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="glass-card p-5 md:p-6">
              <h2 className="text-lg font-semibold">Desafios técnicos</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
                {project.technicalChallenges.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="rounded-2xl border border-border/38 bg-panel/20 p-5 md:p-6">
              <h2 className="text-lg font-semibold">Trade-offs</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
                {project.tradeOffs.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </section>

          {(project.technicalDeepDives || project.automationFeatures || project.securityNotes || project.operationalImpacts) && (
            <section className="space-y-6 border-t border-border/40 pt-8">
              {project.technicalDeepDives && project.technicalDeepDives.length > 0 && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold">Aprofundamento técnico</h2>
                  <div className="grid gap-4 md:grid-cols-3">
                    {project.technicalDeepDives.map((item) => (
                      <article key={item.title} className="rounded-2xl border border-border/38 bg-panel/20 p-5 md:p-6">
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <p className="mt-3 text-sm text-muted">
                          <strong className="text-slate-200">Problema:</strong> {item.problem}
                        </p>
                        <p className="mt-2 text-sm text-muted">
                          <strong className="text-slate-200">Solução:</strong> {item.solution}
                        </p>
                        <p className="mt-2 text-sm text-muted">
                          <strong className="text-slate-200">Impacto:</strong> {item.impact}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid gap-4 md:grid-cols-3">
                {project.automationFeatures && project.automationFeatures.length > 0 && (
                  <article className="rounded-2xl border border-border/38 bg-panel/20 p-5 md:p-6">
                    <h2 className="text-lg font-semibold">Automação aplicada</h2>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
                      {project.automationFeatures.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                )}

                {project.securityNotes && project.securityNotes.length > 0 && (
                  <article className="rounded-2xl border border-border/38 bg-panel/20 p-5 md:p-6">
                    <h2 className="text-lg font-semibold">Segurança e dados</h2>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
                      {project.securityNotes.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                )}

                {project.operationalImpacts && project.operationalImpacts.length > 0 && (
                  <article className="rounded-2xl border border-border/38 bg-panel/20 p-5 md:p-6">
                    <h2 className="text-lg font-semibold">Impactos operacionais</h2>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
                      {project.operationalImpacts.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                )}
              </div>
            </section>
          )}

          <section className="grid gap-8 border-t border-border/40 pt-8 md:grid-cols-2">
            <EditorialSection title="Resultado" body={project.outcome} />
            <section className="space-y-2">
              <h2 className="text-xl font-semibold">Aprendizados</h2>
              <ul className="list-disc space-y-2 pl-5 text-muted">
                {project.learnings.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </section>

          <section className="space-y-5 border-t border-border/40 pt-8">
            <h2 className="text-2xl font-semibold">Galeria</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {project.gallery.map((item) => (
                <figure key={item.src} className="space-y-2.5">
                  <img src={item.src} alt={item.alt} className="aspect-[16/10] w-full rounded-xl border border-border/35 object-cover" />
                  <figcaption className="text-sm text-muted">{item.caption}</figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section className="space-y-4 border-t border-border/40 pt-8">
            <h2 className="text-2xl font-semibold">Outros cases</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {otherCases.map((item) => (
                <article key={item.slug} className="rounded-2xl border border-border/35 bg-panel/20 p-5">
                  <img src={item.cover} alt={`Capa do projeto ${item.name}`} className="aspect-[16/9] w-full rounded-lg border border-border/38 object-cover" />
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
