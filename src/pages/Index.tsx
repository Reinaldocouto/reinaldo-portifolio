import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { site } from '../data/site';

const sections = [
  'Navbar',
  'Hero',
  'Highlights',
  'Projects',
  'About',
  'Stack',
  'Experience',
  'Contact',
  'Footer',
];

export default function Index() {
  return (
    <main className="min-h-screen bg-bg text-text">
      <section className="section-padding">
        <div className="container-tight space-y-6">
          <p className="text-sm uppercase tracking-[0.24em] text-muted">Base inicial</p>
          <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-tight md:text-6xl">
            <span className="text-gradient">{site.role}</span>
          </h1>
          <p className="max-w-2xl text-lg text-muted">{site.tagline}</p>
        </div>
      </section>

      <section className="section-padding pt-0" id="projetos">
        <div className="container-tight grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.slug} className="glass-card p-6">
              <h2 className="text-2xl font-semibold">{project.name}</h2>
              <p className="mt-3 text-muted">{project.summary}</p>
              <Link to={`/projetos/${project.slug}`} className="story-link mt-5 inline-flex items-center gap-2">
                Ver estudo de caso <ArrowUpRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section-padding pt-0" id="roadmap">
        <div className="container-tight glass-card p-6 md:p-8">
          <h2 className="text-2xl font-semibold">Estrutura pronta para evolução</h2>
          <ul className="mt-4 grid gap-3 text-muted sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((section) => (
              <li key={section} className="rounded-md border border-border/80 bg-panel/50 px-4 py-3">
                {section}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
