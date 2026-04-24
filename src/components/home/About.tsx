import { site } from '../../data/site';

export function About() {
  return (
    <section id="sobre" className="section-padding">
      <div className="container-tight space-y-9">
        <header className="max-w-4xl space-y-3">
          <p className="text-xs uppercase tracking-[0.24em] text-muted">Sobre</p>
          <h2 className="text-3xl font-semibold md:text-4xl">Visão de sistema: produto, integração e execução técnica no mesmo fluxo.</h2>
          <p className="text-muted">Atuo conectando regra de negócio, operação e software para transformar escopo em sistema utilizável e evolutivo.</p>
        </header>

        <div className="grid gap-5 md:grid-cols-2">
          {site.about.map((block, index) => (
            <article key={block.title} className={index === 0 ? 'rounded-2xl border border-border/35 bg-panel/22 p-6 md:p-7' : 'glass-card p-6 md:p-7'}>
              <h3 className="text-xl font-semibold">{block.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{block.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
