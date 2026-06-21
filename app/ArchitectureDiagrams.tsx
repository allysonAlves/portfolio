// Diagramas de arquitetura dos projetos — SVG inline, theme-aware (herdam as CSS vars
// do tema claro/escuro). Cada diagrama reflete a arquitetura REAL verificada no código:
//   - ai-document-classifier: Terraform + IAM policies (terraform/*.tf, iam.tf)
//   - microservices-eks-k8s:  Terraform (rds/ecr/elasticache/sqs/dynamodb/eks/helm/k8s.tf)
//   - pay-flow:               código C# (Outbox/OutboxProcessor.cs, CreatePaymentCommandHandler.cs)
import React from 'react'

const FONT = "'JetBrains Mono', monospace"

// Caixa (nó) com título e subtítulo opcional.
function Box({
  x, y, w, h, t, s,
}: { x: number; y: number; w: number; h: number; t: string; s?: string }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={6} fill="var(--bg)" stroke="var(--bord-hi)" />
      <text
        x={x + w / 2}
        y={s ? y + h / 2 - 5 : y + h / 2}
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily={FONT}
        fontSize={9.5}
        fill="var(--text-2)"
      >
        {t}
      </text>
      {s && (
        <text
          x={x + w / 2}
          y={y + h / 2 + 8}
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily={FONT}
          fontSize={7.5}
          fill="var(--text-3)"
        >
          {s}
        </text>
      )}
    </g>
  )
}

// Marcadores de seta: "flow" (fluxo principal, accent) e "io" (acesso a dados, neutro).
function Markers({ id }: { id: string }) {
  return (
    <defs>
      <marker id={`${id}-flow`} viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M0,0 L10,5 L0,10 z" fill="var(--accent)" />
      </marker>
      <marker id={`${id}-io`} viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="5.5" markerHeight="5.5" orient="auto">
        <path d="M0,0 L10,5 L0,10 z" fill="var(--text-3)" />
      </marker>
    </defs>
  )
}

// Aresta de fluxo principal (accent).
function Flow({ d, id }: { d: string; id: string }) {
  return <path d={d} fill="none" stroke="var(--accent)" strokeWidth={1.5} markerEnd={`url(#${id}-flow)`} />
}

// Aresta de acesso a dados / I/O (neutra, mais fina).
function IO({ d, id }: { d: string; id: string }) {
  return <path d={d} fill="none" stroke="var(--text-3)" strokeWidth={1.2} markerEnd={`url(#${id}-io)`} />
}

/* ──────────────────────────────────────────────────────────────────────────
   AI Document Classifier — pipeline serverless event-driven
   Fonte: terraform/{api_gateway,lambda,sqs,sns,s3,dynamodb,iam}.tf
   ────────────────────────────────────────────────────────────────────────── */
export function AiClassifierDiagram() {
  const id = 'aic'
  return (
    <svg viewBox="0 0 680 300" width="100%" role="img" style={{ display: 'block' }}
      aria-label="Pipeline serverless: API Gateway (HTTP API) com rotas POST /documents (upload_handler) e GET /jobs (query_handler); upload_handler grava em S3 documents e DynamoDB jobs e enfileira no SQS; SQS aciona o processor, que chama OCR/LLM (Textract, Claude/Ollama) e grava em S3 results, DynamoDB jobs e SNS; query_handler lê do DynamoDB jobs.">
      <Markers id={id} />

      {/* fluxo principal */}
      <Flow id={id} d="M124,148 H180 V52 H248" />
      <Flow id={id} d="M180,148 V244 H248" />
      <Flow id={id} d="M323,76 V94" />
      <Flow id={id} d="M323,134 V148" />

      {/* acesso a dados / chamadas externas */}
      <IO id={id} d="M398,46 H516 V38 H536" />
      <IO id={id} d="M398,60 H520 V82 H536" />
      <IO id={id} d="M398,168 H512 V126 H536" />
      <IO id={id} d="M398,178 H500 V90 H536" />
      <IO id={id} d="M398,184 H512 V170 H536" />
      <IO id={id} d="M398,188 H506 V218 H536" />
      <IO id={id} d="M398,244 H524 V96 H536" />

      <Box x={20} y={123} w={104} h={50} t="API Gateway" s="HTTP API" />

      <Box x={248} y={30} w={150} h={44} t="upload_handler" s="POST /documents" />
      <Box x={248} y={98} w={150} h={34} t="SQS" s="processing · DLQ" />
      <Box x={248} y={152} w={150} h={44} t="processor" />
      <Box x={248} y={222} w={150} h={44} t="query_handler" s="GET /jobs/{id}" />

      <Box x={536} y={22} w={120} h={32} t="S3" s="documents" />
      <Box x={536} y={66} w={120} h={32} t="DynamoDB" s="jobs" />
      <Box x={536} y={110} w={120} h={32} t="S3" s="results" />
      <Box x={536} y={154} w={120} h={32} t="SNS" s="job-complete" />
      <Box x={536} y={198} w={120} h={40} t="OCR + LLM" s="Textract · Claude/Ollama" />
    </svg>
  )
}

/* ──────────────────────────────────────────────────────────────────────────
   ToggleMaster — 5 microsserviços no Amazon EKS (Terraform)
   Fonte: terraform/{vpc,eks,ecr,rds,elasticache,sqs,dynamodb,helm,k8s}.tf
   ────────────────────────────────────────────────────────────────────────── */
export function ToggleMasterDiagram() {
  const id = 'tm'
  return (
    <svg viewBox="0 0 660 320" width="100%" role="img" style={{ display: 'block' }}
      aria-label="Internet → AWS NLB → Nginx Ingress → 5 serviços no EKS 1.32 (auth, flag, targeting, evaluation, analytics). auth/flag/targeting usam 3 RDS PostgreSQL; evaluation usa Redis e publica em SQS; SQS é consumida por analytics, que grava em DynamoDB. Imagens vêm de 5 repositórios ECR.">
      <Markers id={id} />

      {/* fronteira do cluster EKS */}
      <rect x={310} y={24} width={186} height={272} rx={10} fill="var(--surface)" stroke="var(--border)" />
      <text x={320} y={38} fontFamily={FONT} fontSize={8.5} fill="var(--text-3)" letterSpacing="0.06em">EKS 1.32</text>

      {/* wires */}
      <Flow id={id} d="M72,158 H90" />
      <Flow id={id} d="M182,158 H200" />
      {/* tronco + barra de distribuição: linhas SEM ponta (só as ramificações têm seta) */}
      <path d="M296,158 H308" fill="none" stroke="var(--accent)" strokeWidth={1.5} />
      <path d="M308,57 V241" fill="none" stroke="var(--accent)" strokeWidth={1.5} />
      <Flow id={id} d="M308,57 H322" />
      <Flow id={id} d="M308,103 H322" />
      <Flow id={id} d="M308,149 H322" />
      <Flow id={id} d="M308,195 H322" />
      <Flow id={id} d="M308,241 H322" />

      <IO id={id} d="M478,57 H536" />
      <IO id={id} d="M478,103 H536" />
      <IO id={id} d="M478,149 H536" />
      <IO id={id} d="M478,195 H536" />
      <IO id={id} d="M478,205 H512 V239 H536" />
      <IO id={id} d="M536,247 H478" />
      <IO id={id} d="M478,255 H512 V285 H536" />
      <IO id={id} d="M210,267 H310" />

      <Box x={8} y={140} w={64} h={36} t="Internet" />
      <Box x={90} y={134} w={92} h={48} t="AWS NLB" s="LoadBalancer" />
      <Box x={200} y={134} w={96} h={48} t="Nginx" s="Ingress" />

      <Box x={322} y={40} w={156} h={34} t="auth-service" />
      <Box x={322} y={86} w={156} h={34} t="flag-service" />
      <Box x={322} y={132} w={156} h={34} t="targeting-service" />
      <Box x={322} y={178} w={156} h={34} t="evaluation-service" />
      <Box x={322} y={224} w={156} h={34} t="analytics-service" />

      <Box x={536} y={42} w={114} h={30} t="RDS" s="auth_db" />
      <Box x={536} y={88} w={114} h={30} t="RDS" s="flags_db" />
      <Box x={536} y={134} w={114} h={30} t="RDS" s="targeting_db" />
      <Box x={536} y={180} w={114} h={30} t="ElastiCache" s="Redis" />
      <Box x={536} y={224} w={114} h={30} t="SQS" s="analytics-events" />
      <Box x={536} y={270} w={114} h={30} t="DynamoDB" s="analytics" />

      <Box x={90} y={250} w={120} h={34} t="ECR" s="5 repos" />
    </svg>
  )
}

/* ──────────────────────────────────────────────────────────────────────────
   PayFlow — Clean Architecture + Outbox (fluxo de escrita e processamento)
   Fonte: src/PayFlow.* (CreatePaymentCommandHandler.cs, Outbox/OutboxProcessor.cs)
   ────────────────────────────────────────────────────────────────────────── */
export function PayFlowDiagram() {
  const id = 'pf'
  return (
    <svg viewBox="0 0 660 300" width="100%" role="img" style={{ display: 'block' }}
      aria-label="Fluxo do PayFlow: Client → API (API Key e HMAC) → CreatePayment (MediatR + Validation) → Payment Aggregate → PostgreSQL persistindo Payment e Outbox na mesma transação. OutboxProcessor em background faz poll com FOR UPDATE SKIP LOCKED, checa idempotência no Redis e publica via MediatR para os Integration Handlers, que acionam o Payment Gateway e os Notifiers.">
      <Markers id={id} />

      {/* request síncrono (linha superior, L→R) */}
      <Flow id={id} d="M72,53 H92" />
      <Flow id={id} d="M196,53 H216" />
      <Flow id={id} d="M356,53 H376" />
      <Flow id={id} d="M516,53 H536" />

      {/* PostgreSQL → OutboxProcessor */}
      <Flow id={id} d="M594,76 V180" />

      {/* outbox assíncrono (linha inferior, R→L) */}
      <Flow id={id} d="M536,202 H486" />
      <Flow id={id} d="M336,202 H300" />

      <IO id={id} d="M594,224 V240" />
      <IO id={id} d="M411,224 V240" />

      {/* linha superior */}
      <Box x={8} y={30} w={64} h={46} t="Client" />
      <Box x={92} y={30} w={104} h={46} t="API" s="API Key · HMAC" />
      <Box x={216} y={30} w={140} h={46} t="CreatePayment" s="MediatR + Validation" />
      <Box x={376} y={30} w={140} h={46} t="Payment Aggregate" s="events · state machine" />
      <Box x={536} y={30} w={116} h={46} t="PostgreSQL" s="Payment + Outbox · 1 tx" />

      {/* linha inferior */}
      <Box x={536} y={180} w={116} h={44} t="OutboxProcessor" s="poll · retry/DLQ" />
      <Box x={536} y={240} w={116} h={26} t="Redis · idempotência" />
      <Box x={336} y={180} w={150} h={44} t="Integration Handlers" s="MediatR.Publish" />
      <Box x={336} y={240} w={150} h={26} t="Notifiers · cust/merch" />
      <Box x={150} y={180} w={150} h={44} t="Payment Gateway" s="ProcessPayment" />
    </svg>
  )
}
