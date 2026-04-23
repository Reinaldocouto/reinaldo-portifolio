export type Project = {
  slug: string;
  name: string;
  summary: string;
  problem: string;
  outcome: string;
  tags: string[];
  cover: string;
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
  },
  {
    slug: 'hub-atendimento-interno',
    name: 'Hub de Atendimento Interno',
    summary: 'Aplicação para organizar solicitações entre áreas com rastreabilidade do início ao fim.',
    problem: 'Demandas internas eram dispersas e sem padrão de priorização.',
    outcome: 'Governança de fila, SLA visível e tomada de decisão baseada em contexto.',
    tags: ['Produto', 'Processo', 'Front-end', 'Execução'],
    cover: '/projects/hub-atendimento-interno.jpg',
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
