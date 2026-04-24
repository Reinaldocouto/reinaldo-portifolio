import { site } from '../../data/site';

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-8">
      <div className="container-tight flex flex-col gap-3 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a href={site.contactInfo.linkedinUrl} target="_blank" rel="noreferrer" className="hover:text-text">
            LinkedIn
          </a>
          <a href={site.contactInfo.githubUrl} target="_blank" rel="noreferrer" className="hover:text-text">
            GitHub
          </a>
          <a href={site.contactInfo.resumeUrl} target="_blank" rel="noreferrer" className="hover:text-text">
            Currículo
          </a>
        </div>
        <p>{site.footer.note}</p>
      </div>
    </footer>
  );
}
