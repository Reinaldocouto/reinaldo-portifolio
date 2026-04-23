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
  role: 'Desenvolvedor com visão de produto e operação',
  tagline: 'Sistemas web úteis, com contexto real de uso e execução consistente.',
  locale: 'pt-BR',
  availability: 'Disponível para novos projetos',
  hero: {
    eyebrow: 'Product-minded Web Developer',
    headline: 'Construo produtos web com clareza de negócio, operação real e execução técnica sólida.',
    description:
      'Atuo da estratégia ao front-end de produção, conectando contexto comercial, fluxo operacional e entrega com padrão de produto sério.',
    primaryCta: {
      label: 'Ver cases',
      href: '#projetos',
    },
    secondaryCta: {
      label: 'Falar comigo',
      href: '#contato',
    },
    socialLinks: [
      { label: 'GitHub', href: 'https://github.com/reinaldocouto' },
      { label: 'LinkedIn', href: 'https://linkedin.com/in/reinaldocouto' },
      { label: 'Currículo', href: '#' },
    ],
    profileCard: {
      title: 'profile.sys',
      lines: [
        'foco: produto + engenharia',
        'contexto: operação real',
        'stack: react · typescript',
        'entrega: front-end premium',
      ],
    },
  },
  navigation: [
    { label: 'Projetos', href: '#projetos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Stack', href: '#stack' },
    { label: 'Experiência', href: '#experiencia' },
    { label: 'Contato', href: '#contato' },
  ] satisfies NavItem[],
  highlights: [
    {
      title: 'Sistemas reais, sem vitrine vazia',
      description: 'Projetos guiados por contexto de uso, operação e resultado mensurável no dia a dia.',
    },
    {
      title: 'Visão de produto aplicada',
      description: 'Decisões de interface conectadas a prioridade, risco e impacto comercial.',
    },
    {
      title: 'Execução técnica integrada',
      description: 'Front-end moderno com arquitetura limpa, integração e consistência visual de produto.',
    },
    {
      title: 'Ritmo de entrega confiável',
      description: 'Planejamento objetivo, comunicação clara e evolução contínua sem ruído desnecessário.',
    },
  ] satisfies HighlightItem[],
  about: [
    {
      title: 'Quem sou',
      body: 'Sou desenvolvedor web com repertório de produto e operação. Meu trabalho combina visão sistêmica com execução prática para transformar demandas complexas em soluções utilizáveis e sustentáveis.',
    },
    {
      title: 'Diferencial',
      body: 'Além de construir interfaces, estruturo fluxos e prioridades com olhar de negócio. Isso reduz retrabalho, acelera decisões e entrega software que funciona no contexto real.',
    },
  ] satisfies AboutBlock[],
  stackGroups: [
    {
      title: 'Front-end',
      items: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Design System'],
    },
    {
      title: 'Back-end & dados',
      items: ['Node.js', 'APIs REST', 'Integrações', 'Modelagem de dados', 'SQL'],
    },
    {
      title: 'Produto & processo',
      items: ['Discovery orientado a contexto', 'Priorização', 'Documentação técnica', 'Execução incremental'],
    },
  ] satisfies StackGroup[],
  experience: [
    {
      title: 'Desenvolvimento de produtos web',
      period: 'Fase atual',
      summary:
        'Construção de soluções web orientadas a operação, com foco em clareza de fluxo, performance e experiência premium.',
    },
    {
      title: 'Consolidação e prática autoral',
      period: 'Evolução contínua',
      summary:
        'Criação de projetos próprios para aprofundar padrões de arquitetura, interface e comunicação de produto.',
    },
    {
      title: 'Contexto crítico anterior',
      period: 'Base estratégica',
      summary:
        'Vivência em ambientes de pressão e decisão que fortaleceu disciplina, leitura de cenário e capacidade de execução.',
    },
  ] satisfies ExperienceItem[],
  contact: {
    title: 'Vamos construir algo relevante?',
    description:
      'Aberto a projetos, posições e parcerias em produtos digitais que exigem visão de negócio, qualidade de execução e compromisso com resultado.',
    channels: [
      { label: 'WhatsApp', value: '+55 11 98999-0000', href: 'https://wa.me/5511989990000' },
      { label: 'E-mail', value: 'contato@reinaldocouto.dev', href: 'mailto:contato@reinaldocouto.dev' },
      { label: 'LinkedIn', value: '/in/reinaldocouto', href: 'https://linkedin.com/in/reinaldocouto' },
      { label: 'Telefone', value: '+55 11 98999-0000', href: 'tel:+5511989990000' },
    ],
  },
  footer: {
    note: 'Construído com foco em produto, clareza e execução.',
  },
  seo: {
    title: 'Reinaldo Couto — Product & Web Systems',
    description:
      'Portfólio profissional de Reinaldo Couto com foco em produto, operação e execução técnica em sistemas web.',
  },
} as const;
