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
      'Plataforma web com agenda, prontuário, estoque, PDV, financeiro e indicadores para leitura rápida da rotina.',
    cover: '/projects/togo.jpeg',
    demoUrl: 'https://togo-petcare-pro.vercel.app/',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Arquitetura modular', 'Form handling'],
    tags: ['React', 'TypeScript', 'Dashboard', 'Operação', 'PDV', 'Financeiro'],
    highlights: ['Agenda + prontuário no mesmo fluxo', 'Estoque, PDV e financeiro conectados', 'Painel de acompanhamento diário'],
    overview:
      'Projeto criado para substituir uma operação fragmentada por um sistema único, com foco em continuidade de trabalho e redução de perda de contexto.',
    problem:
      'A equipe alternava entre planilhas e ferramentas isoladas, gerando retrabalho, baixa rastreabilidade e atraso na tomada de decisão.',
    solution:
      'Estruturei a experiência por tarefas operacionais, centralizando ações críticas em poucos cliques e com leitura imediata de status.',
    role:
      'Responsável pelo front-end de ponta a ponta: desenho de fluxo, arquitetura de componentes, implementação e refinamento contínuo após validação.',
    productDecisions: [
      'Priorizar módulos de maior impacto diário antes de funcionalidades secundárias.',
      'Navegação orientada pela rotina da equipe, não pela estrutura interna do sistema.',
      'Dashboard inicial com indicadores acionáveis para reduzir tempo de interpretação.',
    ],
    technicalChallenges: [
      'Garantir consistência entre módulos com regras e densidades diferentes.',
      'Sustentar performance em telas com alto volume de dados operacionais.',
      'Evoluir funcionalidades sem quebrar contratos de componentes existentes.',
    ],
    tradeOffs: [
      'Menos personalização visual para preservar velocidade e previsibilidade de uso.',
      'Postergar relatórios avançados para manter o ciclo de entrega estável.',
    ],
    outcome:
      'O sistema elevou a previsibilidade operacional e reduziu ruído entre atendimento, caixa e acompanhamento financeiro.',
    learnings: [
      'Produto operacional exige hierarquia de informação orientada por tempo de decisão.',
      'Padrões de interface consistentes diminuem custo de manutenção.',
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
      title: 'TOGO | Case de front-end para gestão operacional',
      description:
        'Case TOGO: produto web para gestão clínica e comercial com foco em fluxo operacional, clareza de decisão e evolução contínua.',
      canonicalPath: '/projetos/togo',
      ogImage: '/projects/togo.jpeg',
    },
  },
  {
    slug: 'estaciona-ai',
    name: 'Estaciona Aí',
    tagline: 'Descoberta e reserva de vagas com jornada guiada por localização.',
    summary: 'Plataforma para quem busca e oferta vagas com autenticação, mapa interativo e pagamento integrado.',
    cover: '/projects/estacionaai.jpeg',
    demoUrl: 'https://estaciona-ai-hub.vercel.app/',
    stack: ['React', 'TypeScript', 'Mapas', 'Geolocalização', 'Fluxo de pagamento'],
    tags: ['React', 'Autenticação', 'Mapas', 'Geolocalização', 'Pagamentos'],
    highlights: ['Onboarding objetivo', 'Mapa como eixo principal', 'Reserva e pagamento em poucas etapas'],
    overview:
      'Case focado em reduzir atrito entre descoberta, comparação e reserva de vaga, mantendo confiança ao longo da jornada.',
    problem:
      'Usuários perdiam tempo para encontrar vagas confiáveis, enquanto ofertantes tinham baixa visibilidade e processo pouco padronizado.',
    solution:
      'Modelei o fluxo com mapa central, filtros diretos e confirmações claras, reduzindo ambiguidade e fricção na decisão.',
    role:
      'Conduzi desenvolvimento front-end da jornada principal, com foco em estados de interação, feedback visual e consistência responsiva.',
    productDecisions: [
      'Mapa como superfície principal para tornar busca e contexto espacial inseparáveis.',
      'Cadastro enxuto para preservar intenção do usuário no primeiro acesso.',
      'Sinais de confiança posicionados antes da confirmação da reserva.',
    ],
    technicalChallenges: [
      'Sincronizar estado de lista, mapa e detalhes sem perda de contexto.',
      'Tratar permissões de localização com feedback claro em cada cenário.',
      'Preservar legibilidade do mapa em diferentes tamanhos de tela.',
    ],
    tradeOffs: [
      'Redução de informações secundárias para priorizar ação de reserva.',
      'Fluxo de pagamento inicial mais direto para acelerar adoção.',
    ],
    outcome:
      'A jornada ficou mais previsível e curta, melhorando clareza de decisão para quem procura e para quem oferece vagas.',
    learnings: [
      'Produtos geográficos exigem confirmação visual constante de contexto.',
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
      title: 'Estaciona Aí | Case de UX com mapas e pagamento',
      description:
        'Case Estaciona Aí: plataforma web com geolocalização, reserva e pagamento para reduzir fricção na busca de vagas.',
      canonicalPath: '/projetos/estaciona-ai',
      ogImage: '/projects/estacionaai.jpeg',
    },
  },
  {
    slug: 'clima-safe',
    name: 'Clima Safe',
    tagline: 'Leitura climática aplicada a deslocamento urbano em tempo real.',
    summary: 'Aplicação com mapa, alertas e dados climáticos para apoiar decisões rápidas de rota e segurança.',
    cover: '/projects/clima.jpeg',
    demoUrl: 'https://urban-heat-safe-zones.vercel.app/',
    stack: ['React', 'TypeScript', 'APIs climáticas', 'Mapas', 'Dados em tempo real'],
    tags: ['React', 'APIs climáticas', 'Mapas', 'UX de contexto', 'Tempo real'],
    highlights: ['Risco por localização', 'Alertas acionáveis', 'Camadas de leitura rápida'],
    overview:
      'Produto concebido para transformar dados climáticos técnicos em sinais claros para decisões urbanas sob pressão de tempo.',
    problem:
      'Sem visão geográfica contextual, usuários não conseguiam antecipar risco e escolher rotas com segurança.',
    solution:
      'Estruturei um mapa com camadas de risco e alertas objetivos, priorizando entendimento imediato antes de detalhes avançados.',
    role:
      'Atuei na concepção e implementação front-end, organizando estados de dados, componentes de alerta e hierarquia de leitura.',
    productDecisions: [
      'Status de risco como informação principal acima de métricas secundárias.',
      'Camadas acionáveis para manter autonomia do usuário no mapa.',
      'Resumo local imediato para suportar decisão em poucos segundos.',
    ],
    technicalChallenges: [
      'Atualizar múltiplas fontes de dados sem comprometer fluidez da interface.',
      'Traduzir termos climáticos para linguagem operacional de uso diário.',
      'Manter consistência entre estados de carregamento, parcial e erro.',
    ],
    tradeOffs: [
      'Priorização de leitura de risco em vez de visualizações analíticas avançadas.',
      'Escopo inicial de camadas mais enxuto para garantir clareza e performance.',
    ],
    outcome:
      'A aplicação passou a oferecer suporte direto para deslocamento urbano com menor incerteza e resposta mais rápida.',
    learnings: [
      'Em cenários críticos, clareza de sinal importa mais que volume de dado.',
      'Estados bem projetados reduzem ansiedade em situações de incerteza.',
      'Arquitetura modular facilita expansão de regras de alerta.',
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
      title: 'Clima Safe | Case de produto com dados em tempo real',
      description:
        'Case Clima Safe: aplicação web para leitura de risco climático por localização com alertas e suporte à decisão de rota.',
      canonicalPath: '/projetos/clima-safe',
      ogImage: '/projects/clima.jpeg',
    },
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
