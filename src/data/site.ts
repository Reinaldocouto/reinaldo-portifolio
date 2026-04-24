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

type ContactChannel = {
  label: string;
  value: string;
  href: string;
};

export const site = {
  name: 'Reinaldo Couto',
  brand: 'reinaldo.',
  role: 'Desenvolvedor front-end para produto digital',
  tagline: 'Transformo requisitos complexos em interfaces que vendem, escalam e sustentam operação.',
  locale: 'pt-BR',
  baseUrl: 'https://reinaldo-portifolio.vercel.app',
  availability: 'Disponível para novos projetos',
  contactInfo: {
    email: 'reinaldocouto10@gmail.com',
    phone: '(11) 99538-4270',
    whatsappUrl: 'https://wa.me/5511995384270',
    githubUrl: 'https://github.com/Reinaldocouto',
    linkedinUrl: 'https://linkedin.com/in/reinaldo-couto',
    resumeUrl: '/reinaldo_couto_cv.pdf',
  },
  hero: {
    eyebrow: 'Front-end orientado a resultado de produto.',
    headlineTop: 'Reinaldo',
    headlineAccent: 'Couto',
    headlineBottom: 'Construo interfaces para decisões críticas, operação diária e crescimento de produto.',
    description:
      'Atuo no ponto em que negócio, UX e implementação precisam convergir com rapidez e qualidade técnica.',
    primaryCta: {
      label: 'Ver cases',
      href: '#projetos',
    },
    secondaryCta: {
      label: 'Baixar currículo',
      href: '/reinaldo_couto_cv.pdf',
    },
    socialLinks: [
      { label: 'GitHub', href: 'https://github.com/Reinaldocouto' },
      { label: 'LinkedIn', href: 'https://linkedin.com/in/reinaldo-couto' },
      { label: 'WhatsApp', href: 'https://wa.me/5511995384270' },
    ],
    profileCard: {
      terminalLabel: '~/reinaldo --profile',
      role: 'Front-end engineer',
      focus: ['produto', 'conversão', 'escala'],
      stack: ['React', 'TypeScript', 'Supabase'],
      building: 'experiências que reduzem atrito e aumentam previsibilidade',
      tags: ['React', 'TypeScript', 'Supabase', 'Tailwind', 'Mapbox', 'Postgres'],
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
      title: 'Produto em produção',
      description: 'Cases publicados com fluxo completo, critério de decisão e contexto real de uso.',
    },
    {
      title: 'Foco em impacto',
      description: 'Priorização por resultado: o que acelera operação, reduz erro e melhora leitura do usuário.',
    },
    {
      title: 'Execução confiável',
      description: 'Arquitetura de componentes e padrões que sustentam evolução sem perda de consistência.',
    },
    {
      title: 'Ritmo de entrega',
      description: 'Comunicação direta, alinhamento curto e ciclos contínuos de melhoria.',
    },
  ] satisfies HighlightItem[],
  about: [
    {
      title: 'Como eu enquadro o problema',
      body: 'Começo pela decisão que a interface precisa habilitar. A partir disso, organizo fluxo, estados críticos e informação essencial para evitar ruído e reduzir retrabalho.',
    },
    {
      title: 'Como eu conduzo o trabalho',
      body: 'Transformo escopo em entregas incrementais com critérios claros de qualidade. Isso mantém previsibilidade para o time e acelera validação com usuários.',
    },
  ] satisfies AboutBlock[],
  stackGroups: [
    {
      title: 'Construção de interface',
      items: ['React', 'TypeScript', 'Tailwind CSS', 'Arquitetura de componentes', 'Acessibilidade e responsividade'],
    },
    {
      title: 'Integração de produto',
      items: ['APIs REST', 'Autenticação', 'Modelagem de estado', 'Mapas e geolocalização', 'Sincronização de dados'],
    },
    {
      title: 'Entrega e governança',
      items: ['Priorização por impacto', 'Documentação objetiva', 'Refinamento orientado por uso', 'Padronização visual', 'Evolução incremental'],
    },
  ] satisfies StackGroup[],
  experience: [
    {
      title: 'Construção de produtos para rotinas críticas',
      period: 'Fase atual',
      summary: 'Desenvolvimento de interfaces para cenários com alta dependência operacional, priorizando clareza, velocidade de uso e estabilidade de fluxo.',
    },
    {
      title: 'Evolução por cases autorais completos',
      period: 'Ciclo contínuo',
      summary: 'Concepção e publicação de projetos end-to-end para aprofundar decisões de produto, arquitetura front-end e maturidade de entrega.',
    },
    {
      title: 'Base profissional em ambiente de pressão',
      period: 'Fundação',
      summary: 'Experiência em contexto exigente, reforçando responsabilidade, senso de prioridade e consistência na execução.',
    },
  ] satisfies ExperienceItem[],
  contact: {
    title: 'Se o seu produto precisa de mais clareza para vender e operar, vamos conversar.',
    description:
      'Me conte o cenário, os gargalos e o objetivo de negócio. Eu retorno com visão prática de caminho, riscos e oportunidades de implementação.',
    channels: [
      { label: 'E-mail', value: 'reinaldocouto10@gmail.com', href: 'mailto:reinaldocouto10@gmail.com' },
      { label: 'WhatsApp', value: '(11) 99538-4270', href: 'https://wa.me/5511995384270' },
      { label: 'LinkedIn', value: 'linkedin.com/in/reinaldo-couto', href: 'https://linkedin.com/in/reinaldo-couto' },
      { label: 'GitHub', value: 'github.com/Reinaldocouto', href: 'https://github.com/Reinaldocouto' },
      { label: 'Currículo', value: 'PDF atualizado', href: '/reinaldo_couto_cv.pdf' },
    ] satisfies ContactChannel[],
  },
  footer: {
    note: 'Portfólio com foco em resultado de produto, clareza de interface e execução técnica consistente.',
  },
  seo: {
    siteName: 'Portfólio de Reinaldo Couto',
    defaultTitle: 'Reinaldo Couto — Front-end para produto digital',
    defaultDescription:
      'Portfólio de Reinaldo Couto com cases de produto digital em React, foco em clareza de interface e impacto operacional.',
    homeTitle: 'Reinaldo Couto | Front-end para produto digital e operação',
    homeDescription:
      'Desenvolvedor front-end com foco em produto digital, conversão e confiabilidade operacional. Conheça cases com decisões, trade-offs e resultados.',
    ogImage: '/projects/togo.jpeg',
    twitterHandle: '@reinaldocouto',
  },
} as const;
