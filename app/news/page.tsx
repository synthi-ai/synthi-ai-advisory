import type { Metadata } from 'next'
import { EditorialPage } from '@/components/editorial-page'

export const metadata: Metadata = {
  title: 'News',
  description: 'Press releases, client stories, analyst recognition and events from SYNTHI-AI Advisory.',
  alternates: { canonical: '/news' },
}

export default function Page() { return <EditorialPage section="news" /> }
