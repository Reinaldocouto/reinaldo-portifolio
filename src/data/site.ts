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
  role: 'Desenvolvedor front-end para produto e operação',
  tagline: 'Interfaces claras para produtos que precisam rodar bem no dia a dia.',
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
      label: 'Baixar currículo',
      href: '/reinaldo_couto_cv.pdf',
    },
    socialLinks: [
      { label: 'GitHub', href: 'https://github.com/Reinaldocouto' },
      { label: 'LinkedIn', href: 'https://linkedin.com/in/reinaldo-couto' },
      { label: 'WhatsApp', href: 'https://wa.me/5511995384270' },
    ],
    profileCard: {
      title: 'Resumo profissional',
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
      description: 'Interface conectada à operação, prioridade e resultado.',
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
    title: 'Vamos colocar seu produto em produção com clareza e ritmo?',
    description:
      'Se você precisa transformar contexto complexo em interface confiável, posso contribuir com visão de produto e execução técnica de ponta a ponta.',
    channels: [
      { label: 'E-mail', value: 'reinaldocouto10@gmail.com', href: 'mailto:reinaldocouto10@gmail.com' },
      { label: 'WhatsApp', value: '(11) 99538-4270', href: 'https://wa.me/5511995384270' },
      { label: 'LinkedIn', value: 'linkedin.com/in/reinaldo-couto', href: 'https://linkedin.com/in/reinaldo-couto' },
      { label: 'GitHub', value: 'github.com/Reinaldocouto', href: 'https://github.com/Reinaldocouto' },
      { label: 'Currículo', value: 'PDF atualizado', href: '/reinaldo_couto_cv.pdf' },
    ] satisfies ContactChannel[],
  },
  footer: {
    note: 'Portfólio construído com foco em contexto real, execução sólida e evolução contínua.',
  },
  seo: {
    siteName: 'Portfólio de Reinaldo Couto',
    defaultTitle: 'Reinaldo Couto — Front-end para produto e operação',
    defaultDescription:
      'Portfólio de Reinaldo Couto com cases reais de produto digital, front-end em React e foco em clareza operacional.',
    homeTitle: 'Reinaldo Couto | Front-end para produto digital e operação',
    homeDescription:
      'Desenvolvedor front-end com foco em produto, operação e experiência consistente. Conheça cases completos com decisões, trade-offs e resultados.',
    ogImage: '/projects/togo.jpeg',
  },
} as const;
