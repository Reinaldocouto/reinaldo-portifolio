export type ProjectGalleryItem = {
  src: string;
  alt: string;
  caption: string;
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
};

export const projects: Project[] = [
  {
    slug: 'togo',
    name: 'TOGO',
    tagline: 'Gestão operacional de ponta a ponta para rotina clínica e comercial.',
    summary:
      'Sistema web de gestão com dashboard, agenda, cadastros, prontuário, estoque, PDV, financeiro e relatórios em um fluxo único.',
    cover: '/projects/togo.jpeg',
    demoUrl: 'https://togo-petcare-pro.vercel.app/',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Form handling', 'Arquitetura modular'],
    tags: ['React', 'TypeScript', 'Dashboard', 'Operação', 'PDV', 'Financeiro'],
    highlights: ['Agenda e prontuário no mesmo fluxo', 'Estoque, PDV e financeiro integrados', 'Painéis para leitura rápida da operação'],
    overview:
      'O projeto nasceu para substituir uma rotina fragmentada por um sistema único de operação. A proposta foi organizar a jornada diária em módulos conectados, reduzindo troca de contexto e melhorando previsibilidade.',
    problem:
      'A operação dependia de planilhas e ferramentas isoladas, o que gerava retrabalho, inconsistência de dados e dificuldade para acompanhar atendimento e faturamento no mesmo ritmo.',
    solution:
      'Estruturei uma aplicação web com navegação por módulos e ações críticas centralizadas. O fluxo foi desenhado para diminuir fricção entre agenda, prontuário, caixa e fechamento financeiro.',
    role:
      'Atuei no front-end ponta a ponta: definição de fluxo, arquitetura de componentes, implementação das interfaces principais e refinamento contínuo de UX conforme o uso.',
    productDecisions: [
      'Priorização de telas com maior impacto na rotina diária antes de módulos acessórios.',
      'Estrutura de navegação orientada por tarefas operacionais, não por área técnica.',
      'Painel inicial com indicadores de ação imediata para reduzir tempo de leitura.',
    ],
    technicalChallenges: [
      'Manter consistência visual e de interação em módulos com regras diferentes.',
      'Equilibrar densidade de informação sem perder velocidade de uso.',
      'Sustentar evolução de features sem quebrar componentes já consolidados.',
    ],
    tradeOffs: [
      'Optei por interface mais objetiva em vez de excesso de personalização visual.',
      'Alguns relatórios avançados ficaram para uma iteração posterior para preservar ritmo de entrega.',
    ],
    outcome:
      'A centralização dos fluxos críticos aumentou o controle operacional e reduziu ruído entre áreas. O produto passou a sustentar decisões com mais clareza e menos retrabalho.',
    learnings: [
      'Produto operacional exige decisões de UX orientadas por tempo e contexto de uso real.',
      'Padrão visual consistente acelera manutenção e reduz custo de evolução.',
      'Escopo incremental bem priorizado aumenta qualidade sem travar entrega.',
    ],
    gallery: [
      {
        src: '/projects/togo.jpeg',
        alt: 'Tela principal do TOGO com visão operacional integrada',
        caption: 'Visão geral do sistema com módulos conectados para operação diária.',
      },
    ],
    caseHint: 'Abrir case completo',
    featured: true,
    accent: 'blue',
  },
  {
    slug: 'estaciona-ai',
    name: 'Estaciona Aí',
    tagline: 'Busca e oferta de vagas com experiência orientada por localização.',
    summary: 'Plataforma web para busca e oferta de vagas com autenticação, mapas, geolocalização e fluxo de pagamento.',
    cover: '/projects/estacionaai.jpeg',
    demoUrl: 'https://estaciona-ai-hub.vercel.app/',
    stack: ['React', 'TypeScript', 'Mapas', 'Geolocalização', 'Fluxo de pagamento'],
    tags: ['React', 'Autenticação', 'Mapas', 'Geolocalização', 'Pagamentos'],
    highlights: ['Onboarding e autenticação', 'Mapa interativo para descoberta de vagas', 'Pagamento integrado ao fluxo'],
    overview:
      'O case foi desenvolvido para estruturar uma jornada de ponta a ponta entre quem busca vaga e quem oferta espaço. O foco foi reduzir atrito em descoberta, reserva e pagamento.',
    problem:
      'Usuários tinham dificuldade para encontrar vagas confiáveis em tempo hábil, enquanto ofertantes não possuíam um caminho simples para disponibilizar e monetizar espaços.',
    solution:
      'Modelei uma experiência centrada em localização, com mapa como eixo principal do fluxo, combinando filtros, detalhes de vaga e confirmação da ação em poucas etapas.',
    role:
      'Conduzi o desenvolvimento front-end da jornada principal, desde a estrutura de telas até os estados de interação e validação visual dos fluxos críticos.',
    productDecisions: [
      'Mapa como elemento principal da navegação para reduzir ambiguidade na busca.',
      'Fluxo de cadastro e login enxuto para não interromper intenção de uso.',
      'Priorização de sinais de confiança antes da confirmação de reserva.',
    ],
    technicalChallenges: [
      'Sincronizar estados entre lista de vagas, mapa e detalhes da seleção.',
      'Tratar cenários de localização e permissões com feedback claro para o usuário.',
      'Manter responsividade preservando leitura espacial da interface.',
    ],
    tradeOffs: [
      'Reduzi elementos informativos secundários para manter foco em localização e ação.',
      'Preferi fluxo de pagamento direto em vez de opções extensas para simplificar decisão.',
    ],
    outcome:
      'A experiência ficou mais previsível do início ao fim, com menos fricção na descoberta de vagas e maior clareza para quem oferta espaços.',
    learnings: [
      'Produtos com contexto geográfico pedem feedback visual constante ao usuário.',
      'Fluxos de decisão rápida exigem copy curta e hierarquia forte de informação.',
      'Menos passos com boa confirmação tende a elevar confiança de uso.',
    ],
    gallery: [
      {
        src: '/projects/estacionaai.jpeg',
        alt: 'Tela do Estaciona Aí com mapa e cards de vagas',
        caption: 'Fluxo de descoberta de vagas orientado por mapa e localização.',
      },
    ],
    caseHint: 'Abrir case completo',
    featured: false,
    accent: 'violet',
  },
  {
    slug: 'clima-safe',
    name: 'Clima Safe',
    tagline: 'Inteligência climática aplicada à navegação urbana em tempo real.',
    summary: 'Aplicação web com mapa interativo, geolocalização, dados climáticos em tempo real e alertas acionáveis.',
    cover: '/projects/clima.jpeg',
    demoUrl: 'https://urban-heat-safe-zones.vercel.app/',
    stack: ['React', 'TypeScript', 'APIs climáticas', 'Mapas', 'Dados em tempo real'],
    tags: ['React', 'APIs climáticas', 'Mapas', 'UX de contexto', 'Tempo real'],
    highlights: ['Leitura climática com foco em risco', 'Alertas acionáveis por localização', 'Navegação orientada por contexto urbano'],
    overview:
      'O produto foi criado para transformar dados climáticos em informação utilizável na rotina urbana. A interface prioriza leitura rápida de risco e apoio a decisões de deslocamento.',
    problem:
      'Sem informação geográfica contextualizada, pessoas e equipes não conseguiam antecipar riscos climáticos nem tomar decisões rápidas de deslocamento seguro.',
    solution:
      'Desenhei uma experiência baseada em mapa com camadas de clima e risco, combinando status visual direto, alertas e apoio à escolha de rotas mais seguras.',
    role:
      'Atuei na concepção e implementação do front-end, organizando estrutura de dados exibidos em mapa, componentes de alerta e hierarquia de leitura para diferentes cenários.',
    productDecisions: [
      'Destaque para status de risco com linguagem visual simples e direta.',
      'Mapa com camadas acionáveis para manter controle de contexto pelo usuário.',
      'Resumo imediato de condições locais antes de detalhes complementares.',
    ],
    technicalChallenges: [
      'Orquestrar atualização de dados sem comprometer fluidez da interface.',
      'Tornar informações climáticas técnicas compreensíveis em poucos segundos.',
      'Manter consistência entre estados de carregamento, erro e dados parciais.',
    ],
    tradeOffs: [
      'Priorização da leitura de risco em vez de visualizações climáticas avançadas.',
      'Conjunto inicial de camadas mais enxuto para preservar clareza e performance.',
    ],
    outcome:
      'A aplicação passou a oferecer leitura contextual de risco por região, com alertas que apoiam decisões imediatas de deslocamento mais seguro.',
    learnings: [
      'Em produtos de contexto crítico, clareza da informação vale mais que volume de dados.',
      'Bom design de estados reduz ansiedade em cenários de incerteza.',
      'Estrutura modular facilita evolução de fontes e regras de alerta.',
    ],
    gallery: [
      {
        src: '/projects/clima.jpeg',
        alt: 'Tela do Clima Safe com mapa e informações de risco climático',
        caption: 'Leitura de risco climático em mapa para suporte a deslocamento urbano.',
      },
    ],
    caseHint: 'Abrir case completo',
    featured: false,
    accent: 'emerald',
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
