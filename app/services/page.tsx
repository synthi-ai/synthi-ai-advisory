import type { Metadata } from 'next'
import { EditorialPage } from '@/components/editorial-page'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Cloud, cybersecurity, data and AI, digital sovereignty, intelligent industry and more — delivered at scale.',
  alternates: { canonical: '/services' },
}

export default function Page() { return <EditorialPage section="services" /> }
