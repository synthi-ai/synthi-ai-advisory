import { ArrowUpRight } from 'lucide-react'
import { SiteHeader } from './site-header'
import { SiteFooter } from './site-footer'

const content: Record<string, { eyebrow: string; title: string; intro: string; links: string[] }> = {
  insights: { eyebrow: 'INSIGHTS', title: 'Ideas that move the world forward.', intro: 'Explore research, perspectives and practical thinking from the people shaping the future of business and technology.', links: ['Artificial intelligence', 'Sustainability', 'The future of work', 'Technology trends'] },
  industries: { eyebrow: 'INDUSTRIES', title: 'Deep expertise for complex worlds.', intro: 'We bring sector knowledge, technology and imagination together to help organizations perform at their best.', links: ['Automotive', 'Consumer products', 'Financial services', 'Public sector'] },
  services: { eyebrow: 'SERVICES', title: 'Make technology work for your ambition.', intro: 'From strategy to scale, our teams help you turn transformation into measurable impact.', links: ['Cloud transformation', 'Data & AI', 'Cybersecurity', 'Customer experience'] },
  careers: { eyebrow: 'CAREERS', title: 'Your curiosity can shape what’s next.', intro: 'Join a diverse community of more than 350,000 people building a future that works for everyone.', links: ['Search opportunities', 'Students and graduates', 'Life at Capgemini', 'Meet our people'] },
  news: { eyebrow: 'NEWSROOM', title: 'The latest from Capgemini.', intro: 'Discover our latest announcements, stories and events from around the world.', links: ['Press releases', 'Company stories', 'Events', 'Media contacts'] },
  about: { eyebrow: 'ABOUT US', title: 'Technology is human at heart.', intro: 'We are a global business and technology transformation partner, helping organizations accelerate their dual transition to a digital and sustainable world.', links: ['Our purpose', 'Leadership', 'Our locations', 'Responsible business'] },
}

export function EditorialPage({ section }: { section: keyof typeof content }) {
  const page = content[section]
  return <main className="editorial-page"><SiteHeader /><section className="editorial-hero"><p className="eyebrow">{page.eyebrow}</p><h1>{page.title}</h1><p>{page.intro}</p></section><section className="editorial-links"><p className="eyebrow dark-eyebrow">EXPLORE THIS SECTION</p>{page.links.map((link, index) => { const slug = link.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''); return <a href={`/${section}#${slug}`} key={link} id={slug}><span>0{index + 1}</span><strong>{link}</strong><ArrowUpRight /></a> })}</section><section className="editorial-cta"><p className="eyebrow">MAKE IT REAL</p><h2>Ready to shape <em>what’s next?</em></h2><a className="outline-link" href="/contact">Start a conversation <ArrowUpRight /></a></section><SiteFooter /></main>
}
