import type { Metadata } from 'next'
import { UtilityPage } from '@/components/utility-page'

export const metadata: Metadata = {
  title: 'Locations',
  description: 'Find SYNTHI-AI Advisory around the world — local expertise with global scale.',
  alternates: { canonical: '/locations' },
}

export default function Page() { return <UtilityPage page="locations" /> }
