export type Project = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  problem: string;
  outcome: string;
  tags: string[];
  highlights: string[];
  cover: string;
  demoUrl: string;
  caseHint: string;
  featured: boolean;
  accent: 'blue' | 'violet' | 'emerald';
};

export const projects: Project[] = [
  {
    slug: 'togo',
    name: 'TOGO',
    tagline: 'Gestão operacional de ponta a ponta para rotina clínica e comercial.',
    summary:
      'Sistema web de gestão com foco em operação, organização e escalabilidade, reunindo dashboard, agenda, cadastros, prontuário, estoque, PDV, financeiro e relatórios.',
    problem:
      'A operação dependia de múltiplas planilhas e ferramentas isoladas, gerando retrabalho, perda de contexto e baixa previsibilidade no atendimento e no faturamento.',
    outcome:
      'Centralização dos fluxos críticos em um único produto, com mais controle operacional, redução de ruído entre áreas e tomada de decisão baseada em dados.',
    tags: ['React', 'TypeScript', 'Dashboard', 'Operação', 'PDV', 'Financeiro'],
    highlights: ['Agenda e prontuário no mesmo fluxo', 'Módulos de estoque, PDV e financeiro integrados', 'Painéis para leitura rápida de operação'],
    cover: '/projects/togo.jpeg',
    demoUrl: 'https://togo-petcare-pro.vercel.app/',
    caseHint: 'Abrir case completo',
    featured: true,
    accent: 'blue',
  },
  {
    slug: 'estaciona-ai',
    name: 'Estaciona Aí',
    tagline: 'Busca e oferta de vagas com experiência orientada por localização.',
    summary:
      'Plataforma web para busca e oferta de vagas, com foco em experiência do usuário, autenticação, mapas, geolocalização e pagamentos.',
    problem:
      'Usuários tinham dificuldade para encontrar vagas confiáveis em tempo hábil, enquanto ofertantes não possuíam um fluxo simples para disponibilizar e monetizar espaços.',
    outcome:
      'Jornada digital completa para encontrar, ofertar e pagar vagas com menos fricção, aumentando a conversão e a confiança em todo o fluxo.',
    tags: ['React', 'Autenticação', 'Mapas', 'Geolocalização', 'Pagamentos'],
    highlights: ['Fluxo de onboarding e autenticação', 'Mapa interativo para descoberta de vagas', 'Camada de pagamento integrada ao produto'],
    cover: '/projects/estacionaai.jpeg',
    demoUrl: 'https://estaciona-ai-hub.vercel.app/',
    caseHint: 'Abrir case completo',
    featured: false,
    accent: 'violet',
  },
  {
    slug: 'clima-safe',
    name: 'Clima Safe',
    tagline: 'Inteligência climática aplicada à navegação urbana em tempo real.',
    summary:
      'Aplicação web com mapa interativo, geolocalização, dados climáticos em tempo real, alertas e navegação orientada por contexto.',
    problem:
      'Sem informação geográfica contextualizada, pessoas e equipes não conseguiam antecipar riscos climáticos nem tomar decisões rápidas de deslocamento seguro.',
    outcome:
      'Visualização contextual de clima e risco por região, com alertas e suporte a rotas mais seguras para decisões imediatas.',
    tags: ['React', 'APIs climáticas', 'Mapas', 'UX de contexto', 'Tempo real'],
    highlights: ['Leitura climática com foco em risco', 'Alertas acionáveis por localização', 'Navegação orientada por contexto urbano'],
    cover: '/projects/clima.jpeg',
    demoUrl: 'https://urban-heat-safe-zones.vercel.app/',
    caseHint: 'Abrir case completo',
    featured: false,
    accent: 'emerald',
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
