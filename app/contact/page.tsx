import type { Metadata } from 'next'
import { ContactView } from '@/components/contact-view'

export const metadata: Metadata = {
  title: 'Contact us',
  description: 'Get in touch with SYNTHI-AI Advisory. Tell us what you want to achieve and our teams will help.',
  alternates: { canonical: '/contact' },
}

export default function Page() { return <ContactView /> }
