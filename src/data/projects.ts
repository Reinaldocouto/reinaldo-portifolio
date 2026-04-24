export type ProjectGalleryItem = {
  src: string;
  alt: string;
  caption: string;
};

export type ProjectSeo = {
  title: string;
  description: string;
  canonicalPath: string;
  ogImage: string;
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  cover: string;
  demoUrl: string;
  githubUrl?: string;
  stack: string[];
  tags: string[];
  highlights: string[];
  overview: string;
  problem: string;
  solution: string;
  role: string;
  productDecisions: string[];
  technicalChallenges: string[];
  tradeOffs: string[];
  outcome: string;
  learnings: string[];
  gallery: ProjectGalleryItem[];
  caseHint: string;
  featured: boolean;
  accent: 'blue' | 'violet' | 'emerald';
  seo: ProjectSeo;
};

export const projects: Project[] = [
  {
    slug: 'togo',
    name: 'TOGO',
    tagline: 'Gestão clínica e comercial em um fluxo único de operação.',
    summary:
      'Sistema web para operação clínica/comercial com agenda, prontuário, estoque, PDV e financeiro integrados em um fluxo único.',
    cover: '/projects/togo.jpeg',
    demoUrl: 'https://togo-petcare-pro.vercel.app/',
    stack: ['React', 'TypeScript', 'APIs REST', 'Arquitetura modular', 'Modelagem de fluxo operacional'],
    tags: ['Sistema web', 'Integração de módulos', 'Operação', 'PDV', 'Financeiro', 'APIs'],
    highlights: ['Fluxo operacional ponta a ponta', 'Módulos conectados por regra de negócio', 'Leitura rápida para decisão diária'],
    overview:
      'Projeto criado para substituir uma operação fragmentada por um sistema único, com foco em continuidade de trabalho e redução de perda de contexto.',
    problem:
      'A equipe alternava entre planilhas e ferramentas isoladas, gerando retrabalho, baixa rastreabilidade e atraso na tomada de decisão.',
    solution:
      'Estruturei a solução por fluxo operacional, conectando módulos por regras de negócio e priorizando ações críticas com status rastreável.',
    role:
      'Responsável pela arquitetura da solução no front-end e pela modelagem de fluxo entre módulos, com integração de dados e refinamento contínuo após validação.',
    productDecisions: [
      'Priorizar módulos de maior impacto diário antes de funcionalidades secundárias.',
      'Navegação orientada pela rotina da equipe, não pela estrutura interna do sistema.',
      'Dashboard inicial com indicadores acionáveis para reduzir tempo de interpretação.',
    ],
    technicalChallenges: [
      'Garantir consistência de dados e comportamento entre módulos com regras distintas.',
      'Sustentar performance em telas com alto volume de dados e múltiplos estados de integração.',
      'Evoluir funcionalidades sem quebrar contratos de fluxo e componentes existentes.',
    ],
    tradeOffs: [
      'Menos personalização visual para preservar velocidade e previsibilidade de uso.',
      'Postergar relatórios avançados para manter o ciclo de entrega estável.',
    ],
    outcome:
      'O sistema aumentou a previsibilidade operacional e reduziu ruído entre atendimento, caixa, estoque e acompanhamento financeiro.',
    learnings: [
      'Produto operacional exige modelagem de fluxo orientada por tempo de decisão.',
      'Integração consistente entre módulos reduz custo de manutenção e retrabalho.',
      'Entrega incremental com prioridade clara mantém qualidade mesmo com escopo amplo.',
    ],
    gallery: [
      {
        src: '/projects/togo.jpeg',
        alt: 'Tela principal do TOGO com visão integrada de operação',
        caption: 'Painel central com acesso rápido aos módulos essenciais da rotina.',
      },
    ],
    caseHint: 'Ler case completo',
    featured: true,
    accent: 'blue',
    seo: {
      title: 'TOGO | Case de sistema web para operação e integração de fluxo',
      description:
        'Case TOGO: sistema web para gestão clínica e comercial com foco em fluxo operacional, integração entre módulos e clareza de decisão.',
      canonicalPath: '/projetos/togo',
      ogImage: '/projects/togo.jpeg',
    },
  },
  {
    slug: 'estaciona-ai',
    name: 'Estaciona Aí',
    tagline: 'Descoberta e reserva de vagas com jornada guiada por localização.',
    summary: 'Plataforma para descoberta e oferta de vagas com autenticação, integração de mapas e fluxo de reserva/pagamento.',
    cover: '/projects/estacionaai.jpeg',
    demoUrl: 'https://estaciona-ai-hub.vercel.app/',
    stack: ['React', 'TypeScript', 'APIs de mapa', 'Autenticação', 'Fluxo de pagamento'],
    tags: ['Sistema web', 'APIs', 'Autenticação', 'Mapas', 'Pagamentos'],
    highlights: ['Integração entre mapa, busca e detalhes', 'Autenticação e reserva com fluxo guiado', 'Pagamento integrado com menos atrito'],
    overview:
      'Case focado em reduzir atrito entre descoberta, comparação e reserva de vaga, mantendo confiança ao longo da jornada.',
    problem:
      'Usuários perdiam tempo para encontrar vagas confiáveis, enquanto ofertantes tinham baixa visibilidade e processo pouco padronizado.',
    solution:
      'Modelei o fluxo com mapa central, filtros diretos e confirmações claras, reduzindo ambiguidade e fricção na decisão.',
    role:
      'Conduzi o desenvolvimento da jornada principal, estruturando estados de interface e integração de serviços para manter contexto entre busca, reserva e pagamento.',
    productDecisions: [
      'Mapa como superfície principal para tornar busca e contexto espacial inseparáveis.',
      'Cadastro enxuto para preservar intenção do usuário no primeiro acesso.',
      'Sinais de confiança posicionados antes da confirmação da reserva.',
    ],
    technicalChallenges: [
      'Sincronizar lista, mapa e detalhes sem perda de contexto entre chamadas de serviço.',
      'Tratar permissões de localização e fallback de API com feedback claro em cada cenário.',
      'Preservar legibilidade do mapa em diferentes tamanhos de tela.',
    ],
    tradeOffs: [
      'Redução de informações secundárias para priorizar ação de reserva.',
      'Fluxo de pagamento inicial mais direto para acelerar adoção.',
    ],
    outcome:
      'A jornada ficou mais previsível e curta, melhorando clareza de decisão e consistência do fluxo entre descoberta, reserva e pagamento.',
    learnings: [
      'Produtos geográficos exigem integração estável entre contexto visual e dados de localização.',
      'Decisões rápidas dependem de copy curta e hierarquia forte.',
      'Menos passos com feedback claro aumenta confiança de uso.',
    ],
    gallery: [
      {
        src: '/projects/estacionaai.jpeg',
        alt: 'Tela do Estaciona Aí com mapa e vagas disponíveis',
        caption: 'Busca de vagas orientada por posição e disponibilidade em tempo real.',
      },
    ],
    caseHint: 'Ler case completo',
    featured: false,
    accent: 'violet',
    seo: {
      title: 'Estaciona Aí | Case de integração com mapas, autenticação e pagamento',
      description:
        'Case Estaciona Aí: plataforma web com APIs de localização, autenticação, reserva e pagamento para reduzir fricção na busca de vagas.',
      canonicalPath: '/projetos/estaciona-ai',
      ogImage: '/projects/estacionaai.jpeg',
    },
  },
  {
    slug: 'clima-safe',
    name: 'Clima Safe',
    tagline: 'Leitura climática aplicada a deslocamento urbano em tempo real.',
    summary: 'Aplicação com mapa, alertas e integração de dados climáticos para apoiar decisões rápidas de rota e segurança.',
    cover: '/projects/clima.jpeg',
    demoUrl: 'https://urban-heat-safe-zones.vercel.app/',
    stack: ['React', 'TypeScript', 'APIs climáticas', 'Mapas', 'Dados em tempo real'],
    tags: ['Sistema web', 'APIs climáticas', 'Mapas', 'Dados em tempo real', 'Regras de alerta'],
    highlights: ['Orquestração de fontes climáticas', 'Regras de alerta por localização', 'Camadas para decisão rápida'],
    overview:
      'Produto concebido para transformar dados climáticos técnicos em sinais claros para decisões urbanas sob pressão de tempo.',
    problem:
      'Sem visão geográfica contextual, usuários não conseguiam antecipar risco e escolher rotas com segurança.',
    solution:
      'Modelei um fluxo de dados com camadas de risco e alertas objetivos, priorizando entendimento imediato antes de detalhes avançados.',
    role:
      'Atuei na concepção e implementação da aplicação, organizando estados de dados, integração de APIs climáticas e componentes de alerta com leitura progressiva.',
    productDecisions: [
      'Status de risco como informação principal acima de métricas secundárias.',
      'Camadas acionáveis para manter autonomia do usuário no mapa.',
      'Resumo local imediato para suportar decisão em poucos segundos.',
    ],
    technicalChallenges: [
      'Orquestrar múltiplas fontes de dados climáticos sem comprometer fluidez da interface.',
      'Traduzir termos climáticos para linguagem operacional de uso diário.',
      'Manter consistência entre estados de carregamento, parcial e erro.',
    ],
    tradeOffs: [
      'Priorização de leitura de risco em vez de visualizações analíticas avançadas.',
      'Escopo inicial de camadas mais enxuto para garantir clareza e performance.',
    ],
    outcome:
      'A aplicação passou a oferecer suporte direto para deslocamento urbano com menor incerteza, usando dados integrados e regras de alerta mais claras.',
    learnings: [
      'Em cenários críticos, clareza de sinal importa mais que volume de dado.',
      'Estados bem projetados reduzem ansiedade em situações de incerteza.',
      'Arquitetura modular facilita expansão de regras de alerta e novas integrações de serviço.',
    ],
    gallery: [
      {
        src: '/projects/clima.jpeg',
        alt: 'Tela do Clima Safe com mapa e indicadores de risco',
        caption: 'Camadas climáticas com foco em tomada de decisão rápida.',
      },
    ],
    caseHint: 'Ler case completo',
    featured: false,
    accent: 'emerald',
    seo: {
      title: 'Clima Safe | Case de integração de APIs climáticas em tempo real',
      description:
        'Case Clima Safe: aplicação web com integração de APIs climáticas para leitura de risco por localização e suporte à decisão de rota.',
      canonicalPath: '/projetos/clima-safe',
      ogImage: '/projects/clima.jpeg',
    },
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
