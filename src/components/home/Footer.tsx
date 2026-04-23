import { site } from '../../data/site';

export function Footer() {
  return (
    <footer className="border-t border-border/80 py-8">
      <div className="container-tight flex flex-col gap-3 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <p>{site.footer.note}</p>
      </div>
    </footer>
  );
}
