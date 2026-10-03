import type { Metadata, Viewport } from 'next'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://advisory.synthi-ai.org'
const siteName = 'SYNTHI-AI Advisory'
const description = 'SYNTHI-AI Advisory is a global business and technology transformation partner, helping organizations accelerate their dual transition to a digital and sustainable world — powered by AI.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'SYNTHI-AI Advisory — Make it real',
    template: '%s | SYNTHI-AI Advisory',
  },
  description,
  applicationName: siteName,
  generator: 'Next.js 16',
  keywords: [
    'SYNTHI-AI Advisory', 'business and technology transformation', 'artificial intelligence', 'generative AI',
    'cloud', 'cybersecurity', 'data and AI', 'digital sovereignty', 'sustainability', 'consulting', 'intelligent industry',
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: 'technology',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName,
    url: siteUrl,
    title: 'SYNTHI-AI Advisory — Make it real',
    description,
    locale: 'en_US',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'SYNTHI-AI Advisory — Make it real' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SYNTHI-AI Advisory — Make it real',
    description,
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  formatDetection: { email: false, telephone: false, address: false },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#111116' },
  ],
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteName,
  url: siteUrl,
  description,
  slogan: 'Make it real',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      </body>
    </html>
  )
}
