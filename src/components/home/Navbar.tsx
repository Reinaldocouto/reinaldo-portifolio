import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { site } from '../../data/site';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8">
      <div
        className={`mx-auto flex w-full max-w-6xl items-center justify-between rounded-2xl border px-4 py-3 transition-all md:px-6 ${
          isScrolled ? 'border-border bg-panel/85 shadow-glow backdrop-blur-xl' : 'border-transparent bg-transparent'
        }`}
      >
        <a href="#top" className="text-sm font-semibold tracking-wide text-text md:text-base">
          {site.name}
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {site.navigation.map((item) => (
            <a key={item.label} href={item.href} className="text-sm text-muted transition-colors hover:text-text">
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#contato" className="hidden rounded-lg border border-border bg-panel px-4 py-2 text-sm font-medium md:inline-flex">
          Falar comigo
        </a>

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex rounded-lg border border-border p-2 md:hidden"
          aria-label="Abrir menu"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {isOpen && (
        <div className="mx-auto mt-2 w-full max-w-6xl rounded-2xl border border-border bg-panel p-4 shadow-glow md:hidden">
          <nav className="flex flex-col gap-3">
            {site.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-md px-2 py-1 text-sm text-muted transition-colors hover:bg-bg/60 hover:text-text"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <a href="#contato" className="mt-2 rounded-md border border-border px-3 py-2 text-center text-sm font-medium" onClick={closeMenu}>
              Falar comigo
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
