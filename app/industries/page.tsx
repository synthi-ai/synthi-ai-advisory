import type { Metadata } from 'next'
import { EditorialPage } from '@/components/editorial-page'

export const metadata: Metadata = {
  title: 'Industries',
  description: 'Deep sector expertise across 15 industries, from aerospace and automotive to public sector and telecoms.',
  alternates: { canonical: '/industries' },
}

export default function Page() { return <EditorialPage section="industries" /> }
