'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

const CDN = 'https://www.capgemini.com/wp-content/uploads'

const highlights = [
  { tag: 'Public sector', title: 'Data and AI in government', body: 'Building an AI-driven public sector', image: `${CDN}/2026/07/Research-brief-Data-and-AI-in-Public-Sector_CommskitDotcom-banner-2880px-x-1800px.jpg?w=1200&quality=80` },
  { tag: 'Sustainability', title: 'A world in balance', body: 'Strengthening resilience through sustainability', image: `${CDN}/2026/09/CRI-Sustainability-Trends-2026-Banner.jpg?w=1200&quality=80` },
  { tag: 'Client story', title: 'Henkel Consumer Brands accelerates sustainability progress', body: 'A vision becomes reality', image: `${CDN}/2026/09/Henkel-client-story-web-page-banner.jpg?w=1200&quality=80` },
]

const insights = [
  { tag: 'Report', title: 'World Payments Report 2027', image: `${CDN}/2026/09/Capcom-banner_2880x1800px-1.jpg?w=1200&quality=80` },
  { tag: 'Capgemini Research Institute', title: 'Open source: Key to reclaiming public sector digital sovereignty', image: `${CDN}/2026/09/Digital-Sovereignty-Services-page.jpg?w=1200&quality=80` },
  { tag: 'Report', title: 'Data-powered Innovation Review | Wave 12', image: `${CDN}/2026/06/DPIR12_Webbanner-2880X1800.jpg?w=1200&quality=80` },
]

const clientStories = [
  { title: 'With AI, World Rugby leaves nothing on the field', body: 'See how AI is surfacing new match insights in real time, giving fans a more complete and engaging view of the Rugby World Cup than ever before', image: `${CDN}/2026/04/World-Rugby-TryZone-IQ-client-story-web-page-banner.jpg?w=1200&quality=80` },
  { title: "Inspiring digital inclusion with Let's Get Digital Durham", body: 'A community-driven digital inclusion initiative delivered with the Home Office and Digital Unite, equipping volunteers and organizations with the skills to improve digital access and confidence across County Durham', image: `${CDN}/2026/06/Home-Office-Lets-Get-Digital-Durham-client-story-web-page-banner.jpg?w=1200&quality=80` },
  { title: 'Accelerating the European battery industry', body: 'Verkor and Capgemini develop a blueprint for digital solutions that will support the start-up and ramp-up of the low-carbon battery gigafactory in Dunkirk', image: `${CDN}/2026/08/Verkor-client-story-web-page-banner.jpg?w=1200&quality=80` },
]

const news = [
  { tag: 'Corporate news', title: 'Capgemini closes the sale of Capgemini Government Solutions', date: 'Sep 30, 2026' },
  { tag: 'Client news', title: "Capgemini plays a key role in enabling Sweden's next-generation emergency communications network", date: 'Sep 29, 2026' },
  { tag: 'Reports', title: 'Banks risk losing $230 billion in payments revenue as stablecoins and tokenized deposits go mainstream', date: 'Sep 24, 2026' },
  { tag: 'Client news', title: 'Capgemini contributes to EURO-3C, a European initiative advancing secure and interoperable digital infrastructure', date: 'Sep 17, 2026' },
]

const insideStories = [
  { tag: 'Inclusion', title: 'The code for careers in tech', body: 'Job-ready tech skills for a more inclusive future', image: `${CDN}/2026/05/1634912046468.jpeg?w=1200&quality=80` },
  { tag: 'Future-shaping projects', title: 'DNA analysis for wildlife conservation', body: 'Helping conservationists conduct genetic analysis in the field to protect vulnerable species', image: `${CDN}/2026/02/Gene-Genius-new.jpg?w=1200&quality=80` },
  { tag: 'Future-shaping projects', title: 'Protecting water quality in reservoirs with AI', body: 'An early detection system to monitor and remove harmful algal blooms', image: `${CDN}/2026/02/web-banner_algal-blooms.png?w=1200&quality=80` },
]

const promos = [
  { title: 'Discover our 2025 Integrated Annual Report', body: 'Capgemini is a global leader in business and technology transformation, powered by AI.', cta: 'Discover more', href: '/investors', image: `${CDN}/2021/08/Capgemini_Careers_Engineering-2-e1644505041921.jpg?w=1600&quality=80`, reverse: false },
  { title: 'Transforming sports', body: "Bringing expertise and passion for innovation and technology to Tour de France, the Ryder Cup, the America's Cup, rugby, and motorsport.", cta: 'Discover more', href: '/about', image: `${CDN}/2026/05/Capgemini_2800x1880-HP.jpg?w=1600&quality=80`, reverse: true },
  { title: 'Capgemini Research Institute', body: '#1 in the world six consecutive times – an industry first.', cta: 'Take a closer look', href: '/insights', image: `${CDN}/2022/11/Capgemini-Header-1440x900-1.png?w=1600&quality=80`, reverse: false },
  { title: 'Capgemini Invent', body: 'Our powerhouse of innovation, design and transformation.', cta: 'Find out more', href: '/about', image: `${CDN}/2022/04/Capgemini_CRI_hero-banner_V1.jpg?w=1600&quality=80`, reverse: true },
  { title: 'Capgemini Engineering', body: "Helping the world's largest innovators engineer the products and services of tomorrow", cta: 'Find out more', href: '/about', image: `${CDN}/2022/03/Capgemini_Services_Data-and-AI_2.jpg?w=1600&quality=80`, reverse: false },
]

type Card = { tag?: string; title: string; body?: string; image: string }

function CardGrid({ items, cta = 'Read more' }: { items: Card[]; cta?: string }) {
  return (
    <div className="cards">
      {items.map((card, index) => (
        <article className="insight-card reveal-section" key={card.title}>
          <div className="card-image" style={{ backgroundImage: `url(${card.image})` }}><span>0{index + 1}</span></div>
          <div className="card-body">
            {card.tag && <p className="card-tag">{card.tag}</p>}
            <h3>{card.title}</h3>
            {card.body && <p className="card-text">{card.body}</p>}
            <a href="/insights">{cta} <ArrowUpRight size={16} /></a>
          </div>
        </article>
      ))}
    </div>
  )
}

export default function Page() {
  const [cookieOpen, setCookieOpen] = useState(true)

  useEffect(() => {
    const root = document.documentElement
    root.classList.add('js')
    const targets = Array.from(document.querySelectorAll<HTMLElement>('.reveal-section'))
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 },
    )
    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="site">
      <SiteHeader />
      <section className="hero" id="top">
        <div className="hero-image" />
        <div className="hero-content">
          <h1 className="reveal-up delay-1">Digital<br /><em>sovereignty</em></h1>
          <p className="hero-copy reveal-up delay-2">Strategic autonomy for a more resilient enterprise.</p>
          <a className="outline-link reveal-up delay-3" href="/services/digital-sovereignty">Discover more <ArrowUpRight size={18} /></a>
        </div>
        <div className="hero-caption"><span>Make it real</span><span>01 / 03</span></div>
        <div className="scroll-cue"><span>Scroll to explore</span><span className="scroll-line" /></div>
      </section>

      <section className="insights reveal-section" id="highlights">
        <div className="insights-head"><h2>Highlights</h2></div>
        <CardGrid items={highlights} />
        <p className="section-statement reveal-section">We deliver real value through our people-centric approach and unique human-AI chemistry.</p>
      </section>

      <section className="insights reveal-section" id="insights">
        <div className="insights-head"><h2>Latest insights</h2><a className="text-link" href="/insights">More insights <ArrowUpRight size={18} /></a></div>
        <CardGrid items={insights} />
      </section>

      <section className="insights reveal-section" id="client-stories">
        <div className="insights-head"><h2>Recent client stories</h2></div>
        <CardGrid items={clientStories} />
      </section>

      <section className="news-section reveal-section" id="news">
        <div className="insights-head"><h2>Latest news</h2><a className="text-link" href="/news">See all news <ArrowUpRight size={18} /></a></div>
        <div className="news-list">
          {news.map((item) => (
            <a href="/news" key={item.title}>
              <span className="news-tag">{item.tag}</span>
              <h3>{item.title}</h3>
              <span className="news-date">{item.date}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="insights reveal-section" id="inside-stories">
        <div className="insights-head"><h2>Inside stories</h2><a className="text-link" href="/insights">View all <ArrowUpRight size={18} /></a></div>
        <CardGrid items={insideStories} />
      </section>

      {promos.map((promo) => (
        <section className={`promo-band reveal-section${promo.reverse ? ' reverse' : ''}`} key={promo.title}>
          <div className="promo-copy">
            <h2>{promo.title}</h2>
            <p>{promo.body}</p>
            <a className="dark-link" href={promo.href}>{promo.cta} <ArrowUpRight size={18} /></a>
          </div>
          <div className="promo-image" style={{ backgroundImage: `url(${promo.image})` }} />
        </section>
      ))}

      <SiteFooter />
      {cookieOpen && <div className="cookie-banner"><div><strong>Capgemini cares about your privacy</strong><p>We use cookies to enhance your experience on our website and to improve our services. Choose your preferences at any time.</p></div><div className="cookie-actions"><button onClick={() => setCookieOpen(false)}>Accept all</button><button onClick={() => setCookieOpen(false)}>Manage settings</button><button onClick={() => setCookieOpen(false)}>Decline all</button></div></div>}
    </main>
  )
}
