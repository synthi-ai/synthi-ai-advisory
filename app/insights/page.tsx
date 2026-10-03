import type { Metadata } from 'next'
import { EditorialPage } from '@/components/editorial-page'

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Research, reports and expert perspectives shaping the future of business and technology.',
  alternates: { canonical: '/insights' },
}

export default function Page() { return <EditorialPage section="insights" /> }
