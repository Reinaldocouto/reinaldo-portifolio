import { site } from '../../data/site';

export function About() {
  return (
    <section id="sobre" className="section-padding">
      <div className="container-tight space-y-8">
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.24em] text-muted">Sobre</p>
          <h2 className="text-3xl font-semibold md:text-4xl">Posicionamento técnico com leitura de produto e operação.</h2>
        </header>

        <div className="grid gap-5 md:grid-cols-2">
          {site.about.map((block) => (
            <article key={block.title} className="glass-card p-6">
              <h3 className="text-xl font-semibold">{block.title}</h3>
              <p className="mt-3 text-muted">{block.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
