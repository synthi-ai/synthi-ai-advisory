import { notFound } from 'next/navigation'
import { UtilityPage } from '@/components/utility-page'

const serviceSlugs = ['cloud', 'data-ai', 'cybersecurity', 'customer-experience']
export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (!serviceSlugs.includes(slug)) notFound()
  return <UtilityPage page="services" />
}
