import type { Metadata } from 'next'
import { UtilityPage } from '@/components/utility-page'

export const metadata: Metadata = {
  title: 'Investors',
  description: 'Explore SYNTHI-AI Advisory performance, strategy, governance and shareholder information.',
  alternates: { canonical: '/investors' },
}

export default function Page() { return <UtilityPage page="investors" /> }
