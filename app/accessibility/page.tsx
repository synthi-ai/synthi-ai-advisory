import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Accessibility statement',
  description: 'Our commitment to digital accessibility and WCAG 2.1 AA conformance.',
  alternates: { canonical: '/accessibility' },
}

export default function Page() { return <LegalPage page="accessibility" /> }
