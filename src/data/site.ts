export type NavItem = {
  label: string;
  href: string;
};

export type HighlightItem = {
  title: string;
  description: string;
};

export type AboutBlock = {
  title: string;
  body: string;
};

export type StackGroup = {
  title: string;
  items: string[];
};

export type ExperienceItem = {
  title: string;
  period: string;
  summary: string;
};

export const site = {
  name: 'Reinaldo Couto',
  brand: 'reinaldo.',
  role: 'Desenvolvedor front-end com visão de produto e operação',
  tagline: 'Produtos web com clareza estratégica, execução técnica e foco em resultado real.',
  locale: 'pt-BR',
  availability: 'Disponível para novos projetos e oportunidades estratégicas',
  hero: {
    eyebrow: 'Produto, operação e engenharia no mesmo nível de prioridade.',
    headlineTop: 'Reinaldo',
    headlineAccent: 'Couto',
    headlineBottom: 'Desenvolvedor front-end para produtos digitais de contexto real.',
    description:
      'Construo experiências web que conectam negócio, operação e usabilidade. Da decisão de produto à entrega em produção, foco em fluxo claro, estética premium e software que sustenta crescimento.',
    primaryCta: {
      label: 'Ver projetos reais',
      href: '#projetos',
    },
    secondaryCta: {
      label: 'Falar comigo',
      href: '#contato',
    },
    socialLinks: [
      { label: 'GitHub', href: 'https://github.com/reinaldocouto' },
      { label: 'LinkedIn', href: 'https://linkedin.com/in/reinaldocouto' },
    ],
    profileCard: {
      title: 'profile.overview',
      lines: [
        'especialidade: front-end para sistemas web',
        'foco: produto, operação e execução técnica',
        'entrega: interfaces robustas e orientadas a contexto',
        'disponibilidade: projetos com impacto real',
      ],
    },
  },
  navigation: [
    { label: 'Início', href: '#top' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Stack', href: '#stack' },
    { label: 'Contato', href: '#contato' },
  ] satisfies NavItem[],
  highlights: [
    {
      title: 'Projetos reais, com prova visual',
      description: 'Portfólio baseado em produtos publicados, fluxos completos e decisões aplicadas em cenário de uso.',
    },
    {
      title: 'Produto e operação como base',
      description: 'Cada interface nasce com leitura de contexto, prioridade de negócio e impacto no dia a dia da operação.',
    },
    {
      title: 'Execução técnica consistente',
      description: 'Arquitetura front-end limpa, componentes reutilizáveis e padrão visual coerente para evolução contínua.',
    },
    {
      title: 'Comunicação clara e ritmo',
      description: 'Condução objetiva de escopo, alinhamento frequente e entregas incrementais com previsibilidade.',
    },
  ] satisfies HighlightItem[],
  about: [
    {
      title: 'Atuação',
      body: 'Sou desenvolvedor front-end com repertório em produto digital. Estruturo experiências que resolvem problemas reais sem sacrificar clareza visual, desempenho ou manutenção.',
    },
    {
      title: 'Como penso',
      body: 'Antes de escrever código, organizo fluxo, contexto e critério de decisão. Isso reduz retrabalho, acelera validação e aumenta a confiança do time no produto entregue.',
    },
  ] satisfies AboutBlock[],
  stackGroups: [
    {
      title: 'Front-end de produto',
      items: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion (com moderação)', 'Arquitetura de componentes'],
    },
    {
      title: 'Integração e dados',
      items: ['APIs REST', 'Autenticação', 'Modelagem de estado', 'Mapas e geolocalização', 'Consumo de dados em tempo real'],
    },
    {
      title: 'Processo e qualidade',
      items: ['Leitura de contexto', 'Priorização por impacto', 'Documentação objetiva', 'Entrega incremental', 'Refinamento contínuo'],
    },
  ] satisfies StackGroup[],
  experience: [
    {
      title: 'Produtos web orientados à operação',
      period: 'Atuação atual',
      summary: 'Desenvolvimento de sistemas com foco em clareza de fluxo, confiabilidade e experiência premium em rotinas críticas.',
    },
    {
      title: 'Construção autoral de casos completos',
      period: 'Evolução contínua',
      summary: 'Criação e publicação de projetos próprios para aprofundar domínio técnico, narrativa de produto e validação de decisões.',
    },
    {
      title: 'Base de execução sob pressão',
      period: 'Fundação profissional',
      summary: 'Vivência em ambientes exigentes, fortalecendo disciplina, senso de prioridade e consistência na entrega.',
    },
  ] satisfies ExperienceItem[],
  contact: {
    title: 'Vamos tirar seu produto do rascunho e colocar em produção?',
    description:
      'Se você busca alguém para transformar contexto complexo em interface clara, posso contribuir com visão de produto e execução técnica de ponta a ponta.',
    channels: [
      { label: 'LinkedIn', value: '/in/reinaldocouto', href: 'https://linkedin.com/in/reinaldocouto' },
      { label: 'GitHub', value: 'github.com/reinaldocouto', href: 'https://github.com/reinaldocouto' },
    ],
  },
  footer: {
    note: 'Portfólio construído com foco em contexto real, execução sólida e evolução contínua.',
  },
  seo: {
    title: 'Reinaldo Couto — Front-end, Produto e Operação',
    description:
      'Portfólio de Reinaldo Couto com projetos reais, foco em produto digital e execução front-end para sistemas web de contexto operacional.',
  },
} as const;
