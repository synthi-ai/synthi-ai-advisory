import type { Metadata } from 'next'
import { EditorialPage } from '@/components/editorial-page'

export const metadata: Metadata = {
  title: 'About us',
  description: 'SYNTHI-AI Advisory is a global business and technology transformation partner, powered by AI.',
  alternates: { canonical: '/about' },
}

export default function Page() { return <EditorialPage section="about" /> }
