import { site } from '../../data/site';

export function Stack() {
  return (
    <section id="stack" className="section-padding pt-6 md:pt-10">
      <div className="container-tight space-y-8">
        <header className="max-w-4xl space-y-3">
          <p className="text-xs uppercase tracking-[0.24em] text-muted">Stack</p>
          <h2 className="text-3xl font-semibold md:text-4xl">Ferramentas e práticas para entregar com velocidade sem perder padrão.</h2>
        </header>

        <div className="grid gap-5 md:grid-cols-3">
          {site.stackGroups.map((group, index) => (
            <article key={group.title} className={index === 1 ? 'glass-card p-6 md:p-7' : 'rounded-2xl border border-border/35 bg-panel/20 p-6 md:p-7'}>
              <h3 className="text-lg font-semibold">{group.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
