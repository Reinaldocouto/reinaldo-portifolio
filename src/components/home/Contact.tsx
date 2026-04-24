import { site } from '../../data/site';

export function Contact() {
  return (
    <section id="contato" className="section-padding">
      <div className="container-tight">
        <div className="rounded-3xl border border-primary/25 bg-gradient-to-br from-primary/12 via-panel/30 to-bg/70 p-8 md:p-10">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.24em] text-muted">Contato</p>
            <h2 className="max-w-4xl text-3xl font-semibold md:text-4xl">{site.contact.title}</h2>
            <p className="max-w-3xl leading-relaxed text-muted">{site.contact.description}</p>
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {site.contact.channels.map((channel) => {
              const isExternal = channel.href.startsWith('http') || channel.href.startsWith('mailto:');

              return (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noreferrer' : undefined}
                  className="rounded-xl border border-border/45 bg-bg/35 px-4 py-3 transition hover:border-primary/35 hover:bg-bg/60"
                >
                  <p className="text-xs uppercase tracking-[0.16em] text-muted">{channel.label}</p>
                  <p className="mt-1 text-sm font-medium text-text">{channel.value}</p>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
