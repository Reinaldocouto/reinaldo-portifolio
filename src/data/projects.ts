export type Project = {
  slug: string;
  name: string;
  summary: string;
  problem: string;
  outcome: string;
  tags: string[];
  cover: string;
  demoUrl: string;
  caseHint: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: 'operacao-pedidos-b2b',
    name: 'Operação de Pedidos B2B',
    summary: 'Painel web para reduzir ruído operacional e dar previsibilidade ao fluxo de pedidos.',
    problem: 'Equipe precisava consolidar status, prazos e bloqueios em um único ponto de decisão.',
    outcome: 'Ciclo operacional mais claro, com menos retrabalho e resposta mais rápida ao cliente.',
    tags: ['React', 'TypeScript', 'Operação', 'UX de fluxo'],
    cover: '/projects/operacao-pedidos-b2b.jpg',
    demoUrl: '#',
    caseHint: 'Abrir página de case completo',
    featured: true,
  },
  {
    slug: 'hub-atendimento-interno',
    name: 'Hub de Atendimento Interno',
    summary: 'Aplicação para organizar solicitações entre áreas com rastreabilidade do início ao fim.',
    problem: 'Demandas internas eram dispersas e sem padrão de priorização.',
    outcome: 'Governança de fila, SLA visível e tomada de decisão baseada em contexto.',
    tags: ['Produto', 'Processo', 'Front-end', 'Execução'],
    cover: '/projects/hub-atendimento-interno.jpg',
    demoUrl: '#',
    caseHint: 'Abrir página de case completo',
  },
  {
    slug: 'workspace-comercial-digital',
    name: 'Workspace Comercial Digital',
    summary: 'Interface para concentrar proposta, follow-up e histórico comercial em um único fluxo.',
    problem: 'Informações comerciais estavam fragmentadas e sem visibilidade compartilhada.',
    outcome: 'Maior clareza de funil, alinhamento entre áreas e ganho de velocidade nas negociações.',
    tags: ['Produto', 'CRM', 'Integrações', 'Interface'],
    cover: '/projects/workspace-comercial-digital.jpg',
    demoUrl: '#',
    caseHint: 'Abrir página de case completo',
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
