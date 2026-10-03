import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Cookie policy',
  description: 'How SYNTHI-AI Advisory uses cookies and similar technologies.',
  alternates: { canonical: '/cookies' },
}

export default function Page() { return <LegalPage page="cookies" /> }
