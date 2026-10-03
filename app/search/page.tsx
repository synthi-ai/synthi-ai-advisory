import type { Metadata } from 'next'
import { SearchView } from '@/components/search-view'

export const metadata: Metadata = {
  title: 'Search',
  description: 'Search SYNTHI-AI Advisory insights, services, industries, news and careers.',
  robots: { index: false, follow: true },
  alternates: { canonical: '/search' },
}

export default function Page() { return <SearchView /> }
