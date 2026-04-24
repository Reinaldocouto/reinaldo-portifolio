import { site } from '../../data/site';

export function Contact() {
  return (
    <section id="contato" className="section-padding">
      <div className="container-tight">
        <div className="glass-card space-y-8 p-8 md:p-10">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.24em] text-muted">Contato</p>
            <h2 className="text-3xl font-semibold md:text-4xl">{site.contact.title}</h2>
            <p className="max-w-3xl leading-relaxed text-muted">{site.contact.description}</p>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {site.contact.channels.map((channel) => {
              const isExternal = channel.href.startsWith('http') || channel.href.startsWith('mailto:');

              return (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noreferrer' : undefined}
                  className="rounded-xl border border-border/55 bg-bg/40 px-4 py-3 transition hover:border-primary/40 hover:bg-bg/65"
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
