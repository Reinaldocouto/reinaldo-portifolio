import { site } from '../../data/site';

export function Stack() {
  return (
    <section id="stack" className="section-padding pt-4">
      <div className="container-tight space-y-8">
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.24em] text-muted">Stack</p>
          <h2 className="text-3xl font-semibold md:text-4xl">Tecnologia, integração e processo para entrega com padrão profissional.</h2>
        </header>

        <div className="grid gap-5 md:grid-cols-3">
          {site.stackGroups.map((group) => (
            <article key={group.title} className="glass-card p-6">
              <h3 className="text-lg font-semibold">{group.title}</h3>
              <ul className="mt-3 space-y-2">
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
