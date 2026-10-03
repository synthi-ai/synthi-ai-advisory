import { ArrowUpRight } from 'lucide-react'
import { SiteHeader } from './site-header'
import { SiteFooter } from './site-footer'

const pages = {
  contact: { eyebrow: 'CONTACT US', title: 'Let’s make something real.', intro: 'Tell us what you are trying to achieve. Our teams are ready to bring the right expertise, imagination and technology to the conversation.', links: ['Talk to an expert', 'Find a Capgemini office', 'Media contacts'] },
  investors: { eyebrow: 'INVESTORS', title: 'Building lasting value.', intro: 'Explore our performance, strategy, governance and the progress we are making for our clients, people and shareholders.', links: ['Financial information', 'Shareholder information', 'Governance and leadership'] },
  locations: { eyebrow: 'LOCATIONS', title: 'Find us around the world.', intro: 'Our global network combines local knowledge with the scale and capabilities to help organizations transform wherever they are.', links: ['Americas', 'Asia Pacific', 'Europe, Middle East and Africa'] },
  privacy: { eyebrow: 'LEGAL', title: 'Privacy notice.', intro: 'We are committed to protecting your personal data and being transparent about how we collect, use and safeguard it.', links: ['Your rights', 'How we use data', 'Contact our privacy team'] },
  cookies: { eyebrow: 'LEGAL', title: 'Cookie policy.', intro: 'Learn how Capgemini uses cookies and similar technologies to make our digital experiences more useful and secure.', links: ['Cookie preferences', 'Essential cookies', 'Analytics and performance'] },
  accessibility: { eyebrow: 'LEGAL', title: 'Accessibility statement.', intro: 'We want everyone to be able to access and use our digital experiences. We continuously improve our accessibility practices.', links: ['Our commitment', 'Feedback and support', 'Accessibility resources'] },
  services: { eyebrow: 'SERVICES', title: 'Technology with purpose.', intro: 'From cloud and data to cybersecurity and customer experience, we turn complex transformation into meaningful progress.', links: ['Cloud transformation', 'Data & AI', 'Cybersecurity', 'Customer experience'] },
  search: { eyebrow: 'SEARCH', title: 'Find the ideas you need.', intro: 'Search Capgemini insights, services, industries, news and career opportunities.', links: ['Latest insights', 'Explore our services', 'Visit the newsroom'] },
} as const

export function UtilityPage({ page }: { page: keyof typeof pages }) {
  const content = pages[page]
  return <main className="editorial-page"><SiteHeader /><section className="editorial-hero utility-hero"><p className="eyebrow">{content.eyebrow}</p><h1>{content.title}</h1><p>{content.intro}</p></section><section className="editorial-links"><p className="eyebrow dark-eyebrow">EXPLORE THIS PAGE</p>{content.links.map((link, index) => <a href="/contact" key={link}><span>0{index + 1}</span><strong>{link}</strong><ArrowUpRight /></a>)}</section><section className="editorial-cta"><p className="eyebrow">MAKE IT REAL</p><h2>Ready to shape <em>what’s next?</em></h2><a className="outline-link" href="/contact">Start a conversation <ArrowUpRight /></a></section><SiteFooter /></main>
}
