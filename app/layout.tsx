import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Allyson Alves — Backend Engineer',
  description:
    'Backend Engineer especializado em .NET, AWS e sistemas distribuídos. Experiência em ambiente bancário de alta criticidade no Itaú Unibanco.',
  authors: [{ name: 'Allyson Alves' }],
  keywords: [
    'backend engineer',
    '.NET',
    'AWS',
    'microsserviços',
    'serverless',
    'event-driven',
    'Kafka',
    'Kubernetes',
    'Terraform',
  ],
  openGraph: {
    title: 'Allyson Alves — Backend Engineer',
    description: 'Backend Engineer · .NET · AWS · Sistemas Distribuídos',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body
        style={{ fontFamily: "'DM Sans', system-ui, sans-serif", background: 'var(--bg)', color: 'var(--text-1)' }}
        className="antialiased"
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
