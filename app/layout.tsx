import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'

const siteUrl = 'https://allysonalves.netlify.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Allyson Alves — Backend Engineer',
  description:
    'Backend Engineer especializado em .NET, AWS e sistemas distribuídos. 3+ anos construindo sistemas de alta disponibilidade em produção — do microsserviço ao pipeline event-driven com 15.000+ eventos/dia no Itaú Unibanco.',
  authors: [{ name: 'Allyson Alves', url: siteUrl }],
  keywords: [
    'backend engineer',
    'allyson alves',
    'C#',
    '.NET',
    'AWS',
    'Python',
    'sistemas distribuídos',
    'microsserviços',
    'serverless',
    'event-driven',
    'Kafka',
    'Kubernetes',
    'Terraform',
    'NestJS',
    'TypeScript',
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: 'Allyson Alves — Backend Engineer',
    description:
      'Backend Engineer especializado em .NET, AWS e sistemas distribuídos. 3+ anos em produção — pipelines event-driven, EKS, Terraform e ambiente bancário de alta criticidade.',
    url: siteUrl,
    siteName: 'Allyson Alves',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Allyson Alves — Backend Engineer · AWS · Sistemas Distribuídos',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Allyson Alves — Backend Engineer',
    description:
      'Backend Engineer especializado em .NET, AWS e sistemas distribuídos. 3+ anos em produção.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Allyson Alves',
  url: siteUrl,
  jobTitle: 'Backend Engineer',
  description:
    'Backend Engineer especializado em .NET, AWS e sistemas distribuídos com 3+ anos de experiência em produção.',
  knowsAbout: ['.NET', 'C#', 'AWS', 'Python', 'Kubernetes', 'Terraform', 'Kafka', 'NestJS', 'TypeScript'],
  sameAs: [
    'https://github.com/allysonAlves',
    'https://linkedin.com/in/allyson-alves',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        style={{ fontFamily: "'DM Sans', system-ui, sans-serif", background: 'var(--bg)', color: 'var(--text-1)' }}
        className="antialiased"
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
