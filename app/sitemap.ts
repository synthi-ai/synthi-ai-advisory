import type { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://advisory.synthi-ai.org'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const routes = [
    '', 'insights', 'industries', 'services', 'careers', 'news', 'about',
    'contact', 'investors', 'locations', 'privacy', 'cookies', 'accessibility',
  ]
  return routes.map((route) => ({
    url: `${siteUrl}/${route}`.replace(/\/$/, ''),
    lastModified: now,
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.7,
  }))
}
