# Reinaldo Portfólio

Portfólio profissional construído como produto digital: **home narrativa**, **cases reais com profundidade de decisão**, **dados centralizados**, **identidade visual autoral**, **SEO por rota** e foco explícito em **clareza, manutenção e evolução técnica**.

> Este repositório não foi estruturado como “cartão de visita” estático. A proposta é apresentar posicionamento profissional com critério de produto, arquitetura de front-end e documentação de decisões para leitura pública e uso em contexto de entrevista.

---

## 1) Visão geral do projeto

Este projeto foi criado para resolver um problema comum de portfólios técnicos: páginas visualmente boas, mas rasas em conteúdo e fracas para sustentar conversa técnica.

Aqui, a intenção foi diferente:

- construir uma apresentação profissional **autoral**;
- sustentar leitura tanto para recrutadores quanto para pessoas técnicas;
- mostrar projetos com **contexto, problema, solução, trade-offs e aprendizados**;
- unir narrativa de produto, design de interface e estrutura de código em um mesmo fluxo.

Em termos práticos, o portfólio funciona como uma camada de posicionamento profissional e como documentação viva de como decisões de produto e implementação foram conduzidas.

---

## 2) Objetivos do projeto

Os objetivos explícitos desta versão são:

1. Apresentar posicionamento profissional com clareza.
2. Exibir cases reais, em vez de cards genéricos.
3. Registrar decisões de produto e técnicas de forma consultável.
4. Sustentar navegação simples (home + páginas de case + fallback 404).
5. Manter arquitetura enxuta e escalável para novas seções/cases.
6. Facilitar manutenção de conteúdo via arquivos de dados centralizados.

---

## 3) Stack utilizada (com racional)

- **React**: composição modular da interface por seções e páginas.
- **TypeScript**: tipagem de dados (site/cases) para segurança de manutenção.
- **Vite**: setup e build rápidos para desenvolvimento iterativo.
- **Tailwind CSS**: velocidade na construção visual e consistência de estilo.
- **React Router DOM**: roteamento entre home, cases e página 404.
- **Framer Motion**: animações sutis de entrada e reforço de hierarquia visual.
- **Lucide React**: ícones leves e consistentes.
- **clsx + tailwind-merge**: utilitários para composição de classes quando necessário.

---

## 4) Arquitetura e organização do projeto

A organização prioriza separação de responsabilidade entre conteúdo, renderização e composição de páginas:

```text
src/
  components/
    home/
    seo/
  pages/
  data/
  index.css
public/
```

### Estrutura principal

- `src/components/home`: blocos da home (Navbar, Hero, Highlights, Projects etc.).
- `src/components/seo`: componente dedicado à gestão de metadados (`Seo.tsx`).
- `src/pages`: composição das rotas principais (`Index`, `ProjectDetail`, `NotFound`).
- `src/data`: conteúdo centralizado (`site.ts` e `projects.ts`).
- `src/index.css`: tokens visuais, classes utilitárias e base do tema.
- `public/`: assets públicos (brand, capas de projetos, currículo, favicon).

### Decisão arquitetural central

O projeto adota um modelo em que:

- **dados** ficam centralizados em arquivos tipados;
- **componentes** focam em renderização e semântica de UI;
- **páginas** compõem blocos e orquestram contexto;
- **SEO** fica isolado como responsabilidade própria.

Esse desenho simplifica evolução de conteúdo sem exigir refatorações grandes na camada visual.

---

## 5) Estrutura de navegação

Rotas atuais:

- `/` → home narrativa do portfólio.
- `/projetos/:slug` → páginas de case (case study completo por projeto).
- `/404` → fallback semântico para rota inexistente.

A separação entre home e case pages foi importante para evitar excesso de informação na página inicial e permitir aprofundamento técnico/editorial por projeto.

---

## 6) Seções da home e propósito de cada uma

### Navbar

A `Navbar` organiza acesso rápido aos blocos-chave da home e mantém CTA de contato visível. Também adapta o comportamento no scroll e em mobile para preservar legibilidade de navegação.

### Hero

O `Hero` atua como bloco de posicionamento profissional: combina proposta, foco técnico, disponibilidade, CTAs e links sociais em uma dobra com alta densidade informacional sem perder clareza.

### Highlights

`Highlights` resume pilares de atuação (sistemas reais, integração, automação com responsabilidade e base front-end) para orientar leitura inicial antes do detalhamento dos projetos.

### Projects

`Projects` apresenta os cases selecionados com destaque para contexto, impacto e acesso para leitura completa. O bloco foi estruturado para deixar explícito que há substância além de “capa bonita”.

### About

`About` registra forma de raciocínio para enquadrar problema, traduzir escopo e conectar produto com execução técnica. Serve como ponte entre narrativa e método de trabalho.

### Stack

`Stack` organiza competências em grupos de atuação (integração/back-end, automação/IA aplicada e entrega full stack), priorizando leitura por capacidade prática e não por lista extensa de tecnologias.

### Experience

`Experience` mostra evolução profissional por fases e reforça direção de crescimento técnico. A seção funciona como contexto de trajetória, sem inflar senioridade.

### Contact

`Contact` reduz fricção de contato ao concentrar canais essenciais com CTA claro para oportunidades alinhadas ao posicionamento descrito no portfólio.

### Footer

`Footer` fecha a narrativa com links institucionais e nota de posicionamento, mantendo consistência com o restante da página.

---

## 7) Hero — decisões visuais e narrativas

O Hero foi tratado como peça de posicionamento, não como elemento decorativo. As principais decisões foram:

- **Glow central ampliado** para criar foco imediato na área de mensagem principal.
- **Grid de fundo** para dar textura técnica sem competir com a leitura.
- **Badge de disponibilidade com animação sutil** para sinalizar status ativo de forma discreta.
- **Headline com hierarquia forte de nome/sobrenome** para reforçar reconhecimento e identidade.
- **Card lateral em formato terminal** para comunicar de forma objetiva foco, stack e direção técnica.
- **CTA principal** (“Ver cases”) para conduzir à prova prática.
- **CTA secundário** (currículo em PDF) para facilitar avaliação formal.
- **Links sociais** para continuidade da jornada fora da home.

### Racional específico

- O **card em formato terminal** reforça linguagem técnica e resume perfil em poucos segundos.
- O **glow maior** ajuda a concentrar atenção na proposta de valor da dobra inicial.
- A **hierarquia visual do nome** foi usada para memorabilidade e leitura rápida.
- A **animação da badge** foi mantida sutil para evitar ruído e preservar tom profissional.

---

## 8) Projetos reais e modelagem dos cases

Uma decisão central desta versão foi substituir projetos genéricos por três cases nomeados:

- **TOGO**
- **Estaciona Aí**
- **Clima Safe**

Isso eleva credibilidade porque desloca o foco de estética para raciocínio de produto, integração e execução técnica.

### Modelo de dados dos projetos

O arquivo `src/data/projects.ts` tipa os projetos e sustenta leitura de case study com campos como:

- `slug`
- `name`
- `tagline`
- `summary`
- `cover`
- `demoUrl`
- `stack`
- `tags`
- `highlights`
- `overview`
- `problem`
- `solution`
- `role`
- `productDecisions`
- `technicalChallenges`
- `tradeOffs`
- `outcome`
- `learnings`
- `gallery`
- `seo`

> Na prática, os projetos foram modelados como **case studies completos**, e não como cards decorativos de portfólio.

---

## 9) Página de case (`/projetos/:slug`)

A página de case foi desenhada para sustentar leitura estruturada de processo:

- visão geral;
- problema;
- solução;
- atuação/role;
- decisões de produto;
- desafios técnicos;
- trade-offs;
- resultado;
- aprendizados;
- galeria;
- outros cases relacionados.

Esse formato foi pensado para demonstrar **como** o projeto foi conduzido, não apenas **como ficou** visualmente.

---

## 10) SEO e Open Graph

A estratégia atual combina base estática com atualização por rota:

- `index.html` define metadados base (description, canonical, OG e Twitter).
- `Seo.tsx` aplica metadados específicos por rota em runtime.
- páginas (`Index`, `ProjectDetail`, `NotFound`) passam `title`, `description`, `canonical`, `image`, `type` e `jsonLd`.
- cases carregam dados de SEO pelo próprio modelo em `projects.ts`.

### Inclui atualmente

- title e description por rota;
- canonical por rota;
- Open Graph;
- Twitter Card;
- JSON-LD (home e cases).

### Limitações conhecidas da abordagem atual

Este projeto é uma **SPA (Single Page Application)** com React Router.

Isso significa que parte da atualização de metadados ocorre **no client-side** via `Seo.tsx`. A solução é organizada e funciona bem dentro da stack atual, mas **não equivale** a uma estratégia SSR/SSG completa em termos de renderização inicial para crawlers.

Essa limitação é conhecida e assumida como trade-off da arquitetura escolhida para esta fase do projeto.

---

## 11) Design system e linguagem visual

A linguagem visual foi construída com foco em consistência e legibilidade:

- tema dark com proposta premium;
- uso recorrente de `glass-card` para blocos de conteúdo;
- gradiente de texto em pontos de ênfase;
- glow e grid no Hero para profundidade visual;
- contraste alto para leitura confortável.

Houve preocupação explícita em:

- evitar aparência genérica de template;
- manter padrão visual entre seções e páginas;
- equilibrar sofisticação estética com clareza de conteúdo.

---

## 12) Posicionamento profissional refletido no projeto

O portfólio foi estruturado para comunicar, com honestidade:

- visão de produto aplicada a sistemas web;
- clareza de fluxo e organização de decisão;
- integração de APIs como capacidade prática;
- direção crescente para back-end;
- interesse profissional em **C#/.NET**;
- **Java** como conhecimento relevante;
- automação e agentes/bots como frente de evolução.

A comunicação evita inflar senioridade ou atribuir experiências não demonstradas.

---

## 13) Decisões importantes e trade-offs

Principais escolhas de arquitetura e produto desta versão:

1. **SPA em vez de SSR/SSG**
   - Ganho: simplicidade de stack, velocidade de iteração.
   - Custo: SEO bom dentro do contexto, mas não máximo possível.

2. **Conteúdo centralizado em arquivos de dados**
   - Ganho: manutenção mais simples e coerência editorial.
   - Custo: atualização depende de edição de código/versionamento.

3. **Clareza e manutenção acima de complexidade estrutural**
   - Ganho: evolução previsível da base.
   - Custo: menos “efeitos” arquiteturais avançados nesta fase.

4. **Poucos recursos visuais fortes, sem excesso de animação**
   - Ganho: leitura mais limpa e tom profissional.
   - Custo: menor apelo “showcase” para quem prioriza motion intenso.

5. **Equilíbrio entre front-end sólido e narrativa ampla de sistemas**
   - Ganho: posicionamento mais aderente a atuação full stack/back-end em evolução.
   - Custo: reduz foco exclusivo em microdetalhes de UI.

---

## 14) Como rodar localmente

### Pré-requisito

- Node.js instalado (versão LTS recomendada).

### Instalação e desenvolvimento

```bash
npm install
npm run dev
```

### Build de produção

```bash
npm run build
```

### Preview local do build

```bash
npm run preview
```

---

## 15) Estrutura de assets públicos

O diretório `public/` concentra assets estáticos utilizados pela aplicação:

- `public/brand` → identidade de marca (incluindo `favicon.svg`);
- `public/projects` → imagens de capa/galeria dos cases;
- `public/social` → reservado para assets de compartilhamento social (quando necessário);
- `public/reinaldo_couto_cv.pdf` → currículo para download;
- `public/favicon.ico` → fallback de favicon.

---

## 16) Deploy

O projeto está pronto para deploy em Vercel e já opera com URL base centralizada em `site.baseUrl` (`src/data/site.ts`) para geração de canonical/OG absolutos.

Essa configuração permite trocar o domínio atual por domínio final em etapa futura, ajustando a base de forma objetiva.

---

## 17) Possíveis evoluções futuras

Próximas melhorias realistas para o projeto:

- migração para domínio próprio;
- estratégia de SEO mais robusta com SSR/SSG;
- expansão de galeria e profundidade de evidências por case;
- refinamento contínuo de copy editorial;
- adição de novos cases conforme evolução profissional;
- experiências e automações com maior protagonismo de back-end/IA aplicada.

---

## 18) O que este portfólio procura demonstrar

Este projeto busca evidenciar, de forma objetiva:

- clareza de arquitetura;
- pensamento de produto;
- organização de conteúdo;
- preocupação com experiência de leitura e navegação;
- capacidade de estruturar cases completos;
- consciência de trade-offs técnicos;
- cuidado com apresentação pública profissional.

Em contexto de entrevista, ele funciona como apoio para discutir critérios de decisão, evolução técnica e maturidade de execução sem depender apenas de discurso.

---

## 19) Observações de escopo desta documentação

Para manter precisão, este README descreve apenas o que está implementado e versionado no repositório atual. Onde existem limitações (especialmente em SEO de SPA), elas foram registradas explicitamente em vez de mascaradas.
