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
  role: 'Desenvolvedor front-end para produto e operação',
  tagline: 'Interfaces claras para produtos que precisam rodar bem no dia a dia.',
  locale: 'pt-BR',
  availability: 'Disponível para novos projetos',
  hero: {
    eyebrow: 'Produto, operação e execução técnica no mesmo nível.',
    headlineTop: 'Reinaldo',
    headlineAccent: 'Couto',
    headlineBottom: 'Front-end com foco em produto e operação real.',
    description: 'Desenvolvo produtos web com leitura de contexto, fluxo limpo e entrega técnica consistente.',
    primaryCta: {
      label: 'Ver projetos',
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
      title: 'Resumo rápido',
      lines: ['Foco em sistemas web de operação', 'Da estratégia de produto à entrega em produção', 'Execução técnica com padrão visual consistente'],
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
      title: 'Projetos publicados',
      description: 'Cases com produto no ar, contexto real e decisões aplicadas.',
    },
    {
      title: 'Visão de produto',
      description: 'Interface conectada a operação, prioridade e resultado.',
    },
    {
      title: 'Execução consistente',
      description: 'Componentes claros, código escalável e evolução contínua.',
    },
    {
      title: 'Comunicação objetiva',
      description: 'Alinhamento frequente com foco em entrega previsível.',
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
