import { ArrowUpRight } from 'lucide-react'
import { SiteHeader } from './site-header'
import { SiteFooter } from './site-footer'
import { navItems, slugify } from '@/lib/nav-data'

type SectionKey = 'insights' | 'industries' | 'services' | 'careers' | 'news' | 'about'

const meta: Record<SectionKey, { eyebrow: string; title: string; intro: string; navLabel: string }> = {
  insights: { eyebrow: 'INSIGHTS', title: 'Ideas that move the world forward.', intro: 'Explore research, perspectives and expert thinking from the people shaping the future of business and technology.', navLabel: 'Insights' },
  industries: { eyebrow: 'INDUSTRIES', title: 'Deep expertise for every sector.', intro: 'We combine industry knowledge, technology and human ingenuity to help organizations perform and transform.', navLabel: 'Industries' },
  services: { eyebrow: 'SERVICES', title: 'Make technology work for your ambition.', intro: 'From strategy to scale, our teams turn transformation into measurable impact.', navLabel: 'Services' },
  careers: { eyebrow: 'CAREERS', title: 'Get the future you want.', intro: 'Join our growing teams across Africa, building a more sustainable and inclusive future through technology.', navLabel: 'Careers' },
  news: { eyebrow: 'NEWS', title: 'The latest from SYNTHI-AI Advisory.', intro: 'Discover our press releases, client stories, analyst recognition and events from across Africa.', navLabel: 'News' },
  about: { eyebrow: 'ABOUT US', title: 'Africa’s business and technology transformation partner.', intro: 'SYNTHI-AI Advisory helps organizations across Africa accelerate their dual transition to a digital and sustainable world, powered by AI.', navLabel: 'About us' },
}

export function EditorialPage({ section }: { section: SectionKey }) {
  const page = meta[section]
  const nav = navItems.find((item) => item.label === page.navLabel)

  return (
    <main className="editorial-page">
      <SiteHeader />
      <section className="editorial-hero">
        <p className="eyebrow">{page.eyebrow}</p>
        <h1>{page.title}</h1>
        <p>{page.intro}</p>
      </section>
      <section className="editorial-explore">
        <p className="eyebrow dark-eyebrow">EXPLORE THIS SECTION</p>
        <div className="editorial-groups">
          {nav?.columns.map((column, columnIndex) => (
            <div className="editorial-group" key={column.heading ?? columnIndex}>
              {column.heading && <h3 className="editorial-group-head">{column.heading}</h3>}
              {column.links.map((link) => (
                <a href={`/${section}#${slugify(link)}`} id={slugify(link)} key={link}>{link}<ArrowUpRight size={15} /></a>
              ))}
            </div>
          ))}
        </div>
      </section>
      <section className="editorial-cta">
        <p className="eyebrow">MAKE IT REAL</p>
        <h2>Ready to shape <em>what’s next?</em></h2>
        <a className="outline-link" href="/contact">Start a conversation <ArrowUpRight /></a>
      </section>
      <SiteFooter />
    </main>
  )
}
