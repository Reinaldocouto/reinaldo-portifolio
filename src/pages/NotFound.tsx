import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-bg px-6 text-text">
      <div className="glass-card max-w-xl space-y-5 p-8 text-center">
        <p className="text-xs uppercase tracking-[0.24em] text-muted">404</p>
        <h1 className="text-3xl font-semibold md:text-4xl">Página não encontrada</h1>
        <p className="text-muted">A rota acessada não existe nesta versão inicial do portfólio.</p>
        <Link to="/" className="story-link inline-flex">
          Voltar para home
        </Link>
      </div>
    </main>
  );
}
