import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { site } from '../../data/site';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8">
      <div
        className={`mx-auto flex w-full max-w-6xl items-center justify-between rounded-2xl border px-4 py-2.5 transition-all md:px-6 ${
          isScrolled ? 'border-border/60 bg-panel/72 shadow-glow backdrop-blur-xl' : 'border-border/35 bg-panel/38 backdrop-blur-lg'
        }`}
      >
        <a href="#top" className="text-base font-semibold tracking-wide text-text">
          {site.brand}
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {site.navigation.map((item) => (
            <a key={item.label} href={item.href} className="text-sm text-muted transition-colors hover:text-text">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="hidden rounded-lg border border-primary/40 bg-primary/12 px-3.5 py-2 text-sm font-medium text-slate-100 transition hover:bg-primary/20 md:inline-flex"
        >
          Falar comigo
        </a>

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex rounded-lg border border-border/70 bg-panel/60 p-2 text-slate-100 md:hidden"
          aria-label="Abrir menu"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {isOpen && (
        <div className="mx-auto mt-2 w-full max-w-6xl rounded-2xl border border-border/70 bg-panel/90 p-4 shadow-glow backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-1.5">
            {site.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-md px-2 py-2 text-sm text-muted transition-colors hover:bg-bg/35 hover:text-text"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contato"
              className="mt-2 rounded-md border border-primary/45 bg-primary/12 px-3 py-2 text-center text-sm font-medium text-slate-100"
              onClick={closeMenu}
            >
              Falar comigo
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
