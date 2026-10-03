import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { UtilityPage } from '@/components/utility-page'

const serviceSlugs = ['cloud', 'data-ai', 'cybersecurity', 'customer-experience']

const titleFromSlug = (slug: string) => slug.split('-').map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(' ')

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const name = titleFromSlug(slug)
  return {
    title: name,
    description: `${name} services from SYNTHI-AI Advisory — turning transformation into measurable impact.`,
    alternates: { canonical: `/services/${slug}` },
  }
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (!serviceSlugs.includes(slug)) notFound()
  return <UtilityPage page="services" />
}
