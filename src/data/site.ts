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
  role: 'Desenvolvedor full stack com foco crescente em back-end e integrações',
  tagline: 'Construo sistemas web com visão de produto, APIs e automações orientadas à operação real.',
  locale: 'pt-BR',
  baseUrl: 'https://reinaldo-portifolio.vercel.app',
  availability: 'Disponível para novos projetos',
  contactInfo: {
    email: 'reinaldocouto10@gmail.com',
    phone: '(11) 99538-4270',
    whatsappUrl: 'https://wa.me/5511995384270',
    githubUrl: 'https://github.com/Reinaldocouto',
    linkedinUrl: 'https://linkedin.com/in/reinaldo-couto',
    resumeUrl: '/reinaldo_couto_cv_db.pdf',
  },
  hero: {
    eyebrow: 'Sistemas web, APIs e automação com contexto de produto e operação.',
    headlineTop: 'Reinaldo',
    headlineAccent: 'Couto',
    headlineBottom: 'Desenvolvimento de sistemas, integrações e fluxos back-end para decisões mais rápidas e consistentes.',
    description:
      'Tenho base forte em front-end orientado a produto e avanço a atuação em back-end, integração entre serviços e automação de processos com bots/agentes de IA aplicados a casos reais.',
    primaryCta: {
      label: 'Ver cases',
      href: '#projetos',
    },
    secondaryCta: {
      label: 'Baixar currículo',
      href: '/reinaldo_couto_cv_db.pdf',
    },
    socialLinks: [
      { label: 'GitHub', href: 'https://github.com/Reinaldocouto' },
      { label: 'LinkedIn', href: 'https://linkedin.com/in/reinaldo-couto' },
      { label: 'WhatsApp', href: 'https://wa.me/5511995384270' },
    ],
    profileCard: {
      terminalLabel: '~/reinaldo --profile',
      role: 'Full stack developer (backend-oriented)',
      focus: ['back-end', 'integrações', 'automação'],
      stack: ['C#/.NET (foco atual)', 'Java', 'React + TypeScript'],
      building: 'sistemas web com APIs, fluxo claro e evolução técnica consistente',
      tags: ['C#', '.NET', 'Java', 'APIs REST', 'SQL', 'React'],
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
      title: 'Sistemas com fluxo real',
      description: 'Cases pensados para rotina operacional, conectando regras de negócio, dados e execução técnica.',
    },
    {
      title: 'Integrações úteis',
      description: 'Uso de APIs e serviços externos para reduzir retrabalho, consolidar informação e acelerar decisões.',
    },
    {
      title: 'Automação com responsabilidade',
      description: 'Interesse ativo em bots/agentes de IA para processos práticos, sem promessas irreais de maturidade.',
    },
    {
      title: 'Base front-end como suporte',
      description: 'Experiência em interface e produto aplicada para entregar sistemas completos com consistência ponta a ponta.',
    },
  ] satisfies HighlightItem[],
  about: [
    {
      title: 'Como eu enquadro problemas de sistema',
      body: 'Começo pela operação: quais regras governam o processo, onde há gargalo e que decisão precisa acontecer com segurança. A partir disso, organizo fluxo, dados e integração para sustentar evolução contínua.',
    },
    {
      title: 'Como transformo escopo em entrega',
      body: 'Traduzo necessidades de produto e negócio em incrementos técnicos claros, combinando front-end, consumo de APIs e estrutura de back-end em construção ativa, com foco profissional em C#/.NET e base relevante em Java.',
    },
  ] satisfies AboutBlock[],
  stackGroups: [
    {
      title: 'Back-end e integração de APIs',
      items: ['APIs REST', 'Integração entre sistemas', 'Autenticação e autorização', 'Modelagem de regras de negócio', 'Banco de dados SQL'],
    },
    {
      title: 'Automação e IA aplicada (foco atual)',
      items: [
        'Automação de processos operacionais',
        'Bots/agentes de IA para tarefas repetitivas',
        'Orquestração de serviços',
        'Padronização de fluxos e respostas',
        'Observabilidade e consistência de execução',
      ],
    },
    {
      title: 'Linguagens e entrega full stack',
      items: ['C# e .NET/ASP.NET Core (direção principal)', 'Java (conhecimento relevante)', 'React e TypeScript como apoio', 'Arquitetura modular', 'Versionamento e evolução incremental'],
    },
  ] satisfies StackGroup[],
  experience: [
    {
      title: 'Sistemas para operação corporativa e rotina crítica',
      period: 'Fase atual',
      summary: 'Atuação em soluções web voltadas a processos reais, conectando fluxo operacional, regras de negócio e clareza de uso para reduzir erro e retrabalho.',
    },
    {
      title: 'Evolução contínua em integração e estrutura técnica',
      period: 'Ciclo contínuo',
      summary: 'Desenvolvimento de cases end-to-end com foco em arquitetura de solução, consumo de APIs e organização de dados, reforçando transição para atuação back-end/full stack.',
    },
    {
      title: 'Base profissional em ambiente de alta responsabilidade',
      period: 'Fundação',
      summary: 'Experiência em contexto exigente de manutenção e evolução de software, fortalecendo disciplina de entrega, leitura de processo e capacidade de atuar sob pressão.',
    },
  ] satisfies ExperienceItem[],
  contact: {
    title: 'Se você precisa evoluir sistemas, integrações ou automações com clareza técnica, vamos conversar.',
    description:
      'Estou aberto a oportunidades em back-end júnior/pleno inicial, full stack com viés técnico, projetos com C#/.NET, Java, APIs, bots/agentes e melhoria de operação.',
    channels: [
      { label: 'E-mail', value: 'reinaldocouto10@gmail.com', href: 'mailto:reinaldocouto10@gmail.com' },
      { label: 'WhatsApp', value: '(11) 99538-4270', href: 'https://wa.me/5511995384270' },
      { label: 'LinkedIn', value: 'linkedin.com/in/reinaldo-couto', href: 'https://linkedin.com/in/reinaldo-couto' },
      { label: 'GitHub', value: 'github.com/Reinaldocouto', href: 'https://github.com/Reinaldocouto' },
      { label: 'Currículo', value: 'PDF atualizado', href: '/reinaldo_couto_cv_db.pdf' },
    ] satisfies ContactChannel[],
  },
  footer: {
    note: 'Portfólio com foco em sistemas web, integração de APIs e automação prática.',
  },
  seo: {
    siteName: 'Portfólio de Reinaldo Couto',
    defaultTitle: 'Reinaldo Couto — Full stack com foco em back-end, APIs e automação',
    defaultDescription:
      'Portfólio de Reinaldo Couto com projetos de sistemas web, integração de APIs e automação. Base forte em front-end e direção profissional em C#/.NET e Java.',
    homeTitle: 'Reinaldo Couto | Sistemas web, back-end, integrações e automação',
    homeDescription:
      'Desenvolvedor com visão de produto e operação, construindo soluções web com foco crescente em back-end, APIs, automação e uso aplicado de bots/agentes de IA.',
    ogImage: '/projects/togo.jpeg',
    twitterHandle: '@reinaldocouto',
  },
} as const;
