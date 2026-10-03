'use client'

import { useEffect, useMemo, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { SiteHeader } from './site-header'
import { SiteFooter } from './site-footer'
import { navItems, slugify } from '@/lib/nav-data'

type Entry = { title: string; section: string; href: string }

const extra: Entry[] = [
  { title: 'World Payments Report 2027', section: 'Insights', href: '/insights' },
  { title: 'Data-powered Innovation Review | Wave 12', section: 'Insights', href: '/insights' },
  { title: 'With AI, World Rugby leaves nothing on the field', section: 'Client stories', href: '/insights' },
  { title: 'Accelerating the European battery industry', section: 'Client stories', href: '/insights' },
  { title: 'SYNTHI-AI Advisory Research Institute', section: 'Insights', href: '/insights' },
  { title: 'SYNTHI-AI Advisory Invent', section: 'About us', href: '/about' },
  { title: 'SYNTHI-AI Advisory Engineering', section: 'About us', href: '/about' },
  { title: 'Generative AI', section: 'Services', href: '/services' },
  { title: 'Sustainability', section: 'Insights', href: '/insights' },
]

const index: Entry[] = [
  ...navItems.flatMap((item) => [
    { title: item.label, section: item.label, href: item.href },
    ...item.columns.flatMap((column) => column.links.map((link) => ({ title: link, section: item.label, href: `${item.href}#${slugify(link)}` }))),
  ]),
  ...extra,
]

export function SearchView() {
  const [query, setQuery] = useState('')

  useEffect(() => {
    const initial = new URLSearchParams(window.location.search).get('q')
    if (initial) setQuery(initial)
  }, [])

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return []
    return index.filter((entry) => entry.title.toLowerCase().includes(q) || entry.section.toLowerCase().includes(q)).slice(0, 24)
  }, [query])

  return (
    <main className="editorial-page">
      <SiteHeader />
      <section className="editorial-hero utility-hero">
        <p className="eyebrow">SEARCH</p>
        <h1>Find the ideas you need.</h1>
        <p>Search across SYNTHI-AI Advisory insights, services, industries, news and careers.</p>
      </section>
      <section className="search-page">
        <div className="search-page-input">
          <input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="What are you looking for?" aria-label="Search SYNTHI-AI Advisory" />
        </div>
        {query.trim() === '' ? (
          <div className="search-suggestions">
            <p className="footer-heading">Popular searches</p>
            <div className="search-chips">
              {['Generative AI', 'Sustainability', 'Cybersecurity', 'Careers', 'Digital sovereignty'].map((chip) => (
                <button key={chip} onClick={() => setQuery(chip)}>{chip}</button>
              ))}
            </div>
          </div>
        ) : (
          <div className="search-results">
            <p className="search-count">{results.length} result{results.length === 1 ? '' : 's'} for “{query.trim()}”</p>
            {results.map((entry) => (
              <a className="search-result" href={entry.href} key={`${entry.section}-${entry.title}`}>
                <span className="search-result-section">{entry.section}</span>
                <strong>{entry.title}</strong>
                <ArrowUpRight size={16} />
              </a>
            ))}
            {results.length === 0 && <p className="search-empty">No matches. Try a different term such as “AI”, “cloud” or “careers”.</p>}
          </div>
        )}
      </section>
      <SiteFooter />
    </main>
  )
}
