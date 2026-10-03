import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Privacy notice',
  description: 'How SYNTHI-AI Advisory collects, uses and safeguards your personal data.',
  alternates: { canonical: '/privacy' },
}

export default function Page() { return <LegalPage page="privacy" /> }
