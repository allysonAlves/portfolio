import { Github, Linkedin, Mail, Download } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'

interface Experience {
  role: string
  company: string
  context?: string
  period: string
  highlights: string[]
  stack: string[]
}

interface Project {
  title: string
  period: string
  github: string
  association?: string
  description: string
  highlights: string[]
  stack: string[]
}

const experiences: Experience[] = [
  {
    role: 'Desenvolvedor Backend',
    company: 'Itaú Unibanco',
    context: 'via CBYK Consultoria · IBM',
    period: 'Set/2025 – Jun/2026',
    highlights: [
      'Referência técnica do time: decisões de arquitetura e alinhamento com stakeholders.',
      'Sistema distribuído de enriquecimento de dados — mais de 100 mil arquivos processados, 15.000+ eventos/dia com 99,9% de disponibilidade por 3+ meses em produção.',
      'Redução de 60% em custos de infra (USD 2.000 → 800/mês) via decisões arquiteturais — DynamoDB no lugar de RDS entre outras escolhas.',
      'Pipeline event-driven: Kafka → Lambda → DynamoDB Streams → SNS/SQS, com rastreabilidade de ponta a ponta.',
      'Lambdas em Python e .NET Core: OCR, classificação de documentos via IA, macrocarteira e democratização de dados com Pandas + Athena.',
      'Observabilidade com Datadog APM e rastreamento distribuído em ambiente bancário de alta criticidade.'
    ],
    stack: ['.NET Core', 'Python', 'Kafka', 'AWS Lambda', 'DynamoDB', 'Kubernetes', 'Terraform', 'Datadog', 'Athena'],
  },
  {
    role: 'Desenvolvedor Full-Stack',
    company: 'Target Work',
    period: 'Jul/2023 – Set/2025',
    highlights: [
      'Principal referência técnica da empresa para viabilizar novos projetos: avaliar trade-offs e tecnologias necessárias, definir a arquitetura das soluções, conduzir code reviews e elaborou propostas técnicas apresentadas diretamente aos clientes.',
      'Elaboração e implementação de biblioteca padronizada de function calling para IA embarcada nos sistemas, com pacotes em .NET e React/React Native, acelerando a integração de recursos de IA entre os projetos.',
      'API .NET para mobilidade urbana com SignalR e Google Maps API — alta disponibilidade e baixa latência.',
      'Microsserviços com NestJS, autenticação JWT, RabbitMQ e integração AWS (S3, SES, SQS, DynamoDB).',
      'Sistema de comunicação em tempo real (voz/vídeo) com LiveKit e WebRTC.',
      '10 aplicativos React Native publicados na Play Store e App Store — CI/CD com EAS Build e Azure Pipelines.',
      'Configuração de pipelines CI/CD com Azure Pipelines e Docker para deploy em VPS, com orquestração de containers em Kubernetes e empacotamento via Helm.'
    ],
    stack: ['.NET', 'NestJS', 'React Native', 'RabbitMQ', 'TypeScript', 'AWS', 'Docker', 'SignalR'],
  },
]

const projects: Project[] = [
  {
    title: 'AI Document Classifier',
    period: 'Jun 2026',
    github: 'https://github.com/allysonAlves/ai-document-classifier',
    description:
      'API serverless que classifica documentos fiscais e jurídicos usando OCR + LLM, com suporte a dois providers de IA intercambiáveis: Ollama (local, gratuito) e Claude (Anthropic, produção).',
    highlights: [
      'Provider pattern — LLMProvider e OCRProvider são interfaces ABCs; trocar Ollama → Claude é uma variável de ambiente, sem alterar código de negócio',
      'Escalada automática: começa com Haiku (barato); se confiança < 0.7, reprocessa com Sonnet e registra o custo adicional separadamente',
      'Custo como feature — cada job registra custo em tempo real; /metrics compara qualidade e custo entre os dois providers lado a lado',
      'Arquitetura event-driven: API Gateway → Lambda → SQS → Processor Lambda → S3 + DynamoDB + SNS',
      '223 testes unitários, 96% de cobertura — AWS mockada com Moto, sem chamadas de rede reais',
    ],
    stack: ['Python', 'AWS Lambda', 'API Gateway', 'SQS', 'DynamoDB', 'S3', 'Claude API', 'Ollama', 'Terraform', 'Pytest'],
  },
  {
    title: 'ToggleMaster — EKS + Terraform',
    period: 'Mai–Jun 2026',
    github: 'https://github.com/allysonAlves/microservices-eks-k8s',
    association: 'FIAP',
    description:
      'Infraestrutura como código que provisiona e orquestra 5 microsserviços no Amazon EKS, com toda a stack AWS gerenciada via Terraform.',
    highlights: [
      'VPC, subnets, NAT Gateway, Security Groups; EKS 1.32 com node groups gerenciados e IAM roles com princípio de menor privilégio',
      '5 repositórios ECR, 3 instâncias RDS PostgreSQL, Redis ElastiCache, SQS e DynamoDB',
      'Nginx Ingress Controller + AWS Load Balancer provisionados via Helm; HPA configurado nos serviços críticos',
      'Infra reproduzível do zero em ~20 min — escalamento validado com 200 conexões simultâneas',
    ],
    stack: ['Terraform', 'AWS EKS', 'Kubernetes', 'Helm', 'RDS PostgreSQL', 'Redis', 'SQS', 'DynamoDB', 'ECR'],
  },
  {
    title: 'PayFlow — API de Pagamentos',
    period: 'Jun 2026',
    github: 'https://github.com/allysonAlves/pay-flow',
    description:
      'API de processamento de pagamentos em .NET 8 com Clean Architecture e DDD: agregado Payment com value objects tipados, máquina de estados e eventos de domínio, entrega assíncrona confiável via Outbox.',
    highlights: [
      'Clean Architecture em 4 camadas com dependências fluindo para dentro — o Domain não depende de nada externo',
      'CQRS com MediatR: escritas via agregado, leituras via DTOs com AsNoTracking',
      'Outbox pattern — OutboxMessage persiste na mesma transação do agregado; processor em background entrega os eventos de forma confiável',
      'Idempotência com Redis impede reprocessamento de eventos duplicados; gateway simulado configurável (rejeita valores ≥ 10.000)',
      'Segurança: autenticação por API Key com comparação em tempo constante e validação de webhook via HMAC-SHA256',
      '33 testes cobrindo domínio, aplicação, infraestrutura e API',
    ],
    stack: ['.NET 8', 'ASP.NET Core', 'PostgreSQL', 'Redis', 'EF Core', 'MediatR', 'FluentValidation', 'Docker', 'CQRS', 'DDD'],
  },
]

const stackGroups = [
  { category: 'Linguagens', items: ['C#', 'TypeScript', 'Python', 'JavaScript'] },
  { category: 'Backend', items: ['.NET Core', 'NestJS', 'REST', 'GraphQL', 'SignalR'] },
  { category: 'Cloud AWS', items: ['Lambda', 'DynamoDB', 'S3', 'SQS/SNS', 'EKS', 'MSK (Kafka)', 'Athena'] },
  { category: 'Mensageria', items: ['Apache Kafka', 'RabbitMQ', 'SQS', 'EventBridge'] },
  { category: 'DevOps', items: ['Kubernetes', 'Helm', 'Terraform', 'Docker', 'GitHub Actions'] },
  { category: 'Observabilidade', items: ['Datadog', 'APM', 'Rastreamento distribuído'] },
  { category: 'IA & Dados', items: ['Claude API', 'Ollama', 'Claude Code', 'OCR', 'Pandas', 'AWS Athena'] },
]

const mono = { fontFamily: "'JetBrains Mono', monospace" } as const

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        ...mono,
        fontSize: '0.6875rem',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: 'var(--text-3)',
        marginBottom: '1.75rem',
      }}
    >
      {children}
    </h2>
  )
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        ...mono,
        fontSize: '0.6875rem',
        color: 'var(--mono)',
        background: 'var(--bg)',
        border: '1px solid var(--border)',
        borderRadius: '4px',
        padding: '2px 8px',
        display: 'inline-block',
      }}
    >
      {children}
    </span>
  )
}

function ExperienceCard({ role, company, context, period, highlights, stack }: Experience) {
  return (
    <article className="exp-card" style={{ marginBottom: '2.5rem' }}>
      <div className="exp-dot" />

      <div style={{ marginBottom: '0.875rem' }}>
        <h3 style={{ fontSize: '0.9375rem', fontWeight: 500, color: 'var(--text-1)', marginBottom: '0.25rem', lineHeight: 1.3 }}>
          {role}
        </h3>
        <p style={{ ...mono, fontSize: '0.75rem', color: 'var(--text-3)' }}>
          <span style={{ color: 'var(--text-2)' }}>{company}</span>
          {context && <span> · {context}</span>}
          <span> · {period}</span>
        </p>
      </div>

      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {highlights.map((h, i) => (
          <li key={i} style={{ display: 'flex', gap: '0.625rem', fontSize: '0.875rem', color: 'var(--text-2)', lineHeight: 1.6 }}>
            <span style={{ color: 'var(--accent)', flexShrink: 0, fontSize: '0.8125rem', marginTop: '1px' }}>→</span>
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
        {stack.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </article>
  )
}

function ProjectCard({ title, period, github, association, description, highlights, stack }: Project) {
  return (
    <article className="proj-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '0.25rem' }}>
        <h3 style={{ fontSize: '0.9375rem', fontWeight: 500, color: 'var(--text-1)', lineHeight: 1.3 }}>
          {title}
        </h3>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
          aria-label={`Ver ${title} no GitHub`}
          style={{ flexShrink: 0, marginTop: '1px' }}
        >
          <Github size={15} />
        </a>
      </div>

      <p style={{ ...mono, fontSize: '0.6875rem', color: 'var(--text-3)', marginBottom: '0.875rem' }}>
        {period}
        {association && <span style={{ color: 'var(--accent)', opacity: 0.8 }}> · {association}</span>}
      </p>

      <p style={{ fontSize: '0.875rem', color: 'var(--text-2)', lineHeight: 1.65, marginBottom: '1rem' }}>
        {description}
      </p>

      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.125rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {highlights.map((h, i) => (
          <li key={i} style={{ display: 'flex', gap: '0.625rem', fontSize: '0.8125rem', color: 'var(--text-2)', lineHeight: 1.6 }}>
            <span style={{ color: 'var(--accent)', flexShrink: 0, fontSize: '0.75rem', marginTop: '2px' }}>→</span>
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
        {stack.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </article>
  )
}

export default function Home() {
  return (
    <>
      <div className="glow" aria-hidden="true" />
      <main style={{ minHeight: '100vh', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', padding: '5rem 1.5rem 6rem' }}>

          {/* Header */}
          <header
            className="rise d1"
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1.5rem', marginBottom: '4rem' }}
          >
            <div>
              <h1
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: '2.375rem',
                  fontWeight: 400,
                  color: 'var(--text-1)',
                  lineHeight: 1,
                  marginBottom: '0.5rem',
                  letterSpacing: '-0.01em',
                }}
              >
                Allyson Alves
              </h1>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-2)', letterSpacing: '0.005em' }}>
                Backend Engineer · AWS · Sistemas Distribuídos
              </p>
            </div>
            <nav style={{ display: 'flex', gap: '1rem', marginTop: '0.375rem', alignItems: 'center' }} aria-label="Links sociais">
              <ThemeToggle />
              <a href="https://github.com/allysonAlves" target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com/in/allyson-alves" target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="mailto:allysonalves.dev@gmail.com" className="icon-link" aria-label="Email">
                <Mail size={18} />
              </a>
            </nav>
          </header>

          {/* Bio */}
          <section className="rise d2" style={{ marginBottom: '3rem' }}>
            <p style={{ fontSize: '0.9375rem', color: 'var(--text-2)', lineHeight: 1.75, marginBottom: '2rem' }}>
              Desenvolvedor backend há mais de 3 anos, com foco em sistemas distribuídos e alta
              disponibilidade. No último ano, no Itaú Unibanco (via IBM/CBYK), atuei como referência
              técnica do time em ambiente bancário de alta criticidade: arquitetura event-driven na
              AWS com 15.000+ eventos/dia, decisões de design, code review e alinhamento com
              stakeholders. Histórico de reduzir 60% em custos operacionais sem perder resiliência.
            </p>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
              {[
                { value: '3+', label: 'anos em produção' },
                { value: '−60%', label: 'custo de infra' },
                { value: '15k+', label: 'eventos/dia' },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: '10px',
                    padding: '0.875rem',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      ...mono,
                      fontSize: '1.375rem',
                      fontWeight: 600,
                      color: 'var(--accent)',
                      marginBottom: '0.25rem',
                      lineHeight: 1,
                    }}
                  >
                    {value}
                  </div>
                  <div style={{ fontSize: '0.6875rem', color: 'var(--text-3)', letterSpacing: '0.02em' }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <hr className="divider" />

          {/* Experience */}
          <section className="rise d3">
            <SectionLabel>Experiência</SectionLabel>
            {experiences.map((exp) => (
              <ExperienceCard key={exp.company} {...exp} />
            ))}
          </section>

          <hr className="divider" />

          {/* Projects */}
          <section className="rise d4">
            <SectionLabel>Projetos</SectionLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </section>

          <hr className="divider" />

          {/* Stack */}
          <section className="rise d5">
            <SectionLabel>Stack</SectionLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {stackGroups.map(({ category, items }) => (
                <div key={category} style={{ display: 'flex', gap: '1.5rem', alignItems: 'baseline' }}>
                  <span
                    style={{
                      ...mono,
                      fontSize: '0.6875rem',
                      color: 'var(--text-3)',
                      width: '6.5rem',
                      flexShrink: 0,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {category}
                  </span>
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-2)' }}>
                    {items.join(' · ')}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <hr className="divider" />

          {/* Education */}
          <section className="rise d6">
            <SectionLabel>Formação</SectionLabel>
            {[
              {
                degree: 'Pós-graduação em DevOps e Arquitetura de Cloud',
                institution: 'FIAP',
                status: 'Em andamento',
                bordered: true,
              },
              {
                degree: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
                institution: 'Estácio de Sá',
                status: 'Concluído Jun/2025',
                bordered: false,
              },
            ].map(({ degree, institution, status, bordered }) => (
              <div
                key={degree}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  gap: '1rem',
                  padding: '0.875rem 0',
                  borderBottom: bordered ? '1px solid var(--border)' : 'none',
                }}
              >
                <div>
                  <p style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-1)', marginBottom: '0.125rem' }}>
                    {degree}
                  </p>
                  <p style={{ ...mono, fontSize: '0.6875rem', color: 'var(--text-3)' }}>
                    {institution}
                  </p>
                </div>
                <span style={{ ...mono, fontSize: '0.6875rem', color: 'var(--text-3)', whiteSpace: 'nowrap', flexShrink: 0 }}>
                  {status}
                </span>
              </div>
            ))}
          </section>

          <hr className="divider" />

          {/* CV */}
          <section className="rise d7" style={{ marginBottom: '4rem' }}>
            <SectionLabel>Currículo</SectionLabel>
            <a href="/curriculos/Curriculo_Allyson_Alves.pdf" download className="cv-link">
              <Download size={13} />
              Backend Engineer
            </a>
          </section>

          {/* Footer */}
          <footer className="rise d8">
            <p style={{ ...mono, fontSize: '0.6875rem', color: 'var(--text-3)' }}>
              Rio de Janeiro, RJ · allysonalves.dev@gmail.com
            </p>
          </footer>

        </div>
      </main>
    </>
  )
}
