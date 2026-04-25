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
  technicalDeepDives?: Array<{
    title: string;
    problem: string;
    solution: string;
    impact: string;
  }>;
  automationFeatures?: string[];
  securityNotes?: string[];
  operationalImpacts?: string[];
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
    tagline: 'Plataforma operacional veterinária com fluxo clínico, comercial e financeiro integrado.',
    summary:
      'Sistema de gestão veterinária que conecta agenda, prontuário, vacinas, estoque, PDV e financeiro para reduzir atrito operacional e manter continuidade ponta a ponta.',
    cover: '/projects/togo.jpeg',
    demoUrl: 'https://togo-petcare-pro.vercel.app/',
    stack: ['React', 'TypeScript', 'shadcn/ui + Tailwind', 'Supabase', 'PostgreSQL', 'APIs REST', 'RLS'],
    tags: ['Sistema web', 'Gestão veterinária', 'Integração de módulos', 'Prontuário', 'OCR', 'Automação', 'Multi-tenant'],
    highlights: [
      'Fluxo clínico, comercial e financeiro no mesmo sistema',
      'OCR para carteirinhas de vacinação com revisão antes do registro',
      'Ditado clínico com padronização de linguagem para prontuário',
      'Dashboard operacional para rotina diária e tomada de decisão',
      'Segurança com autenticação, RLS e segregação por clínica',
    ],
    overview:
      'O TOGO foi desenhado para centralizar uma rotina antes fragmentada em ferramentas separadas. A clínica consegue operar atendimento, vacinação, venda e gestão no mesmo ambiente, com menos troca de contexto, continuidade de processo e maior previsibilidade diária.',
    problem:
      'Antes do sistema, havia perda de contexto entre atendimento e financeiro, retrabalho em cadastros e baixa padronização de registros clínicos. A operação gastava tempo excessivo com tarefas burocráticas e tinha rastreabilidade limitada para decisões de agenda, estoque e faturamento.',
    solution:
      'A solução foi modelada por fluxo operacional, não apenas por telas: agenda, prontuário, vacinas, estoque, PDV e financeiro compartilham dados e regras para manter continuidade. O objetivo foi reduzir fricção entre etapas clínicas e comerciais, com ações críticas rastreáveis do início ao fechamento.',
    role:
      'Atuei na estruturação do front-end em React/TypeScript, no desenho dos fluxos entre módulos e na integração com dados/serviços via Supabase (Auth, PostgreSQL, Storage e APIs). Também modelei a experiência para rotina clínica real, equilibrando velocidade de operação, consistência e legibilidade em fluxos densos.',
    productDecisions: [
      'Dashboard com leitura rápida para apoiar ação imediata em ocupação, faturamento, pendências e fila clínica.',
      'Módulos organizados por rotina operacional (cadastro, atendimento, vacinação, venda e gestão) sem quebrar continuidade.',
      'Integração entre prontuário, vacinas e PDV para reduzir retrabalho e preservar contexto entre clínica e cobrança.',
      'Priorização de tarefas críticas e estados claros para reduzir troca de contexto em dias de alta demanda.',
    ],
    technicalChallenges: [
      'Manter consistência de estados e regras entre módulos com ciclos diferentes (agenda, atendimento, vacinação, venda e financeiro).',
      'Lidar com formulários clínicos densos e sincronização de dados sem degradar legibilidade e fluidez de uso.',
      'Integrar OCR e ditado clínico ao fluxo de prontuário sem quebrar a experiência nem gerar registros imprecisos.',
      'Sustentar evolução de escopo preservando contratos de dados e integração com Supabase (banco, auth e storage).',
    ],
    tradeOffs: [
      'Menos personalização visual para preservar velocidade e previsibilidade de uso.',
      'Priorização de automações com impacto operacional direto, deixando análises avançadas para ciclos posteriores.',
      'Validação assistida em OCR e ditado antes de persistir dados para reduzir risco de erro em informação clínica.',
    ],
    technicalDeepDives: [
      {
        title: 'OCR aplicado à carteira de vacinação',
        problem: 'Digitação manual de carteirinhas consumia tempo e aumentava risco de erro humano na transcrição do histórico.',
        solution:
          'Implementação de fluxo com upload de imagem, processamento com Tesseract.js, extração estruturada e revisão do usuário antes de gravar no módulo de vacinação.',
        impact: 'Redução de tempo operacional, maior padronização de registros e histórico digital mais confiável.',
      },
      {
        title: 'Ditado clínico com padronização de linguagem',
        problem: 'Documentação manual do prontuário era lenta e variava bastante em terminologia.',
        solution:
          'Uso de Web Speech API para transcrição no navegador com preenchimento assistido e normalização de termos coloquiais para vocabulário clínico veterinário.',
        impact: 'Ganho de velocidade na documentação e melhora de consistência técnica no prontuário eletrônico.',
      },
      {
        title: 'Automação de orçamento conectada ao PDV',
        problem: 'Converter diagnóstico em cobrança exigia várias etapas manuais entre clínica e financeiro.',
        solution:
          'Automação para sugerir kits de produtos/serviços com base no diagnóstico e lançamento no fluxo de venda/PDV.',
        impact: 'Menos erro operacional, transição mais fluida entre atendimento e cobrança e maior rastreabilidade do fluxo.',
      },
    ],
    automationFeatures: [
      'OCR com extração assistida para transformar carteirinhas em registros estruturados.',
      'Ditado clínico com preenchimento assistido para acelerar documentação do prontuário.',
      'Sugestão de kits por diagnóstico para conectar conduta clínica ao fluxo comercial.',
    ],
    securityNotes: [
      'Autenticação integrada para controle de acesso por perfil de uso.',
      'Segregação de dados por clínica (multi-tenant) com políticas de RLS e filtro por clinic_id.',
      'Uso de Storage controlado com buckets privados para proteger anexos e documentos.',
      'Modelagem orientada à privacidade e alinhamento com boas práticas de segurança/LGPD.',
    ],
    operationalImpacts: [
      'Redução de burocracia e de retrabalho em tarefas clínicas e administrativas.',
      'Menor incidência de erro humano em registros de vacinação e documentação clínica.',
      'Mais velocidade na rotina com transição contínua entre atendimento, estoque, venda e financeiro.',
      'Aumento de rastreabilidade e visão operacional com dashboard e relatórios.',
    ],
    outcome:
      'O TOGO consolidou clínica e gestão em uma plataforma única, com mais rastreabilidade, menos ruído operacional e apoio real à decisão diária.',
    learnings: [
      'Modelagem de fluxo ponta a ponta é determinante para reduzir atrito em sistema operacional real.',
      'Automação útil precisa de validação humana em pontos críticos para preservar confiança do dado.',
      'Segurança multi-tenant deve ser tratada desde o desenho inicial da arquitetura de dados.',
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
      title: 'TOGO | Plataforma operacional veterinária com prontuário, OCR e automação',
      description:
        'Case TOGO: sistema web de gestão veterinária com prontuário eletrônico, integração entre módulos, OCR de vacinas, automações operacionais e segurança multi-tenant.',
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
