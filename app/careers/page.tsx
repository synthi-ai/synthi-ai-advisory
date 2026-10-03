import type { Metadata } from 'next'
import { EditorialPage } from '@/components/editorial-page'

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Build your career at SYNTHI-AI Advisory and help shape a more digital, sustainable and inclusive future.',
  alternates: { canonical: '/careers' },
}

export default function Page() { return <EditorialPage section="careers" /> }
