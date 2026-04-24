import { site } from '../../data/site';

export function Experience() {
  return (
    <section id="experiencia" className="section-padding">
      <div className="container-tight space-y-8">
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.24em] text-muted">Experiência</p>
          <h2 className="text-3xl font-semibold md:text-4xl">Trajetória construída em execução consistente, contexto e responsabilidade técnica.</h2>
        </header>

        <div className="relative space-y-4 before:absolute before:bottom-4 before:left-[9px] before:top-4 before:w-px before:bg-border/70">
          {site.experience.map((item) => (
            <article key={item.title} className="glass-card relative ml-8 p-5 md:p-6">
              <span className="absolute -left-8 top-6 h-4 w-4 rounded-full border-2 border-primary bg-bg" />
              <p className="text-xs uppercase tracking-[0.18em] text-muted">{item.period}</p>
              <h3 className="mt-1 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
