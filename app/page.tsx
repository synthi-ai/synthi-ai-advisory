'use client'

import { FormEvent, useState } from 'react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

const CDN = 'https://www.capgemini.com/wp-content/uploads'

const highlights = [
  { tag: 'Public sector', title: 'Data and AI in government', image: `${CDN}/2026/07/Research-brief-Data-and-AI-in-Public-Sector_CommskitDotcom-banner-2880px-x-1800px.jpg?w=1200&quality=80` },
  { tag: 'Sustainability', title: 'A world in balance', image: `${CDN}/2026/09/CRI-Sustainability-Trends-2026-Banner.jpg?w=1200&quality=80` },
  { tag: 'Client story', title: 'Henkel Consumer Brands accelerates sustainability progress', image: `${CDN}/2026/09/Henkel-client-story-web-page-banner.jpg?w=1200&quality=80` },
]

const insights = [
  { tag: 'Report', title: 'World Payments Report 2027', image: `${CDN}/2026/09/Capcom-banner_2880x1800px-1.jpg?w=1200&quality=80` },
  { tag: 'Perspective', title: 'Open source: Key to reclaiming public sector digital sovereignty', image: `${CDN}/2026/09/Digital-Sovereignty-Services-page.jpg?w=1200&quality=80` },
  { tag: 'Research', title: 'Data-powered Innovation Review | Wave 12', image: `${CDN}/2026/06/DPIR12_Webbanner-2880X1800.jpg?w=1200&quality=80` },
]

const clientStories = [
  { tag: 'Sport', title: 'With AI, World Rugby leaves nothing on the field', image: `${CDN}/2026/04/World-Rugby-TryZone-IQ-client-story-web-page-banner.jpg?w=1200&quality=80` },
  { tag: 'Public sector', title: "Inspiring digital inclusion with Let's Get Digital Durham", image: `${CDN}/2026/06/Home-Office-Lets-Get-Digital-Durham-client-story-web-page-banner.jpg?w=1200&quality=80` },
  { tag: 'Energy', title: 'Accelerating the European battery industry', image: `${CDN}/2026/08/Verkor-client-story-web-page-banner.jpg?w=1200&quality=80` },
]

const insideStories = [
  { tag: 'Careers', title: 'The code for careers in tech', image: `${CDN}/2026/05/1634912046468.jpeg?w=1200&quality=80` },
  { tag: 'Innovation', title: 'DNA analysis for wildlife conservation', image: `${CDN}/2026/02/Gene-Genius-new.jpg?w=1200&quality=80` },
  { tag: 'Sustainability', title: 'Protecting water quality in reservoirs with AI', image: `${CDN}/2026/02/web-banner_algal-blooms.png?w=1200&quality=80` },
]

const news = [
  { date: '25 Sep 2026', title: 'Capgemini positioned as a Leader in generative AI services' },
  { date: '18 Sep 2026', title: 'Capgemini and partners expand digital sovereignty offering across Europe' },
  { date: '11 Sep 2026', title: 'Capgemini recognized for its commitment to sustainable IT' },
  { date: '04 Sep 2026', title: 'Capgemini reports first half 2026 results' },
]

function CardGrid({ items }: { items: { tag: string; title: string; image: string }[] }) {
  return (
    <div className="cards">
      {items.map((card, index) => (
        <article className="insight-card" key={card.title}>
          <div className="card-image" style={{ backgroundImage: `url(${card.image})` }}><span>0{index + 1}</span></div>
          <div className="card-body">
            <p>{card.tag}</p>
            <h3>{card.title}</h3>
            <a href="/insights">Read more <ArrowUpRight size={16} /></a>
          </div>
        </article>
      ))}
    </div>
  )
}

export default function Page() {
  const [cookieOpen, setCookieOpen] = useState(true)
  const [newsletterSent, setNewsletterSent] = useState(false)

  function submitNewsletter(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setNewsletterSent(true)
  }

  return (
    <main className="site">
      <SiteHeader />
      <section className="hero" id="top">
        <div className="hero-image" />
        <div className="hero-content"><p className="eyebrow reveal-up">DIGITAL SOVEREIGNTY</p><h1 className="reveal-up delay-1">Strategic autonomy<br />for a more <em>resilient</em> enterprise.</h1><p className="hero-copy reveal-up delay-2">We help organizations build the capabilities to control their technology, data and operations — and shape their future with confidence.</p><a className="outline-link reveal-up delay-3" href="/services/digital-sovereignty">Explore digital sovereignty <ArrowUpRight size={18} /></a></div>
        <div className="hero-caption"><span>Make it real</span><span>01 / 03</span></div>
        <div className="scroll-cue"><span>Scroll to explore</span><span className="scroll-line" /></div>
      </section>

      <section className="intro reveal-section" id="discover"><div className="section-label">WHO WE ARE</div><div><h2>Unlocking the value of technology to build a more <span>inclusive and sustainable world.</span></h2><a className="text-link" href="/about">Discover Capgemini <ArrowUpRight size={18} /></a></div></section>
      <section className="stats-strip"><div><strong>340,000+</strong><span>team members</span></div><div><strong>50+</strong><span>countries</span></div><div><strong>€22.5bn</strong><span>2024 revenue</span></div><div><strong>1967</strong><span>founded in Grenoble</span></div></section>

      <section className="insights reveal-section" id="highlights"><div className="insights-head"><div><p className="eyebrow dark-eyebrow">HIGHLIGHTS</p><h2>What&apos;s happening<br /><span>at Capgemini.</span></h2></div><a className="text-link" href="/insights">View all <ArrowUpRight size={18} /></a></div><CardGrid items={highlights} /></section>

      <section className="feature-grid reveal-section" id="services"><div className="feature-copy"><p className="eyebrow dark-eyebrow">OUR EXPERTISE</p><h2>Technology is the key to progress.</h2><p>At Capgemini, we combine the strength of our global teams with deep industry expertise to help businesses navigate complexity and create lasting impact.</p><a className="dark-link" href="/services">Explore our services <ArrowUpRight size={18} /></a></div><div className="feature-image" /></section>
      <section className="services-band"><p className="eyebrow dark-eyebrow">WHAT WE DO</p><div className="service-row"><a href="/services/cloud"><span>01</span><h3>Cloud</h3><ArrowUpRight /></a><a href="/services/data-and-artificial-intelligence"><span>02</span><h3>Data and artificial intelligence</h3><ArrowUpRight /></a><a href="/services/cybersecurity"><span>03</span><h3>Cybersecurity</h3><ArrowUpRight /></a><a href="/services/intelligent-industry"><span>04</span><h3>Intelligent industry</h3><ArrowUpRight /></a></div></section>

      <section className="insights reveal-section" id="insights"><div className="insights-head"><div><p className="eyebrow dark-eyebrow">LATEST INSIGHTS</p><h2>Ideas that move<br /><span>the world forward.</span></h2></div><a className="text-link" href="/insights">View all insights <ArrowUpRight size={18} /></a></div><CardGrid items={insights} /></section>

      <section className="insights reveal-section" id="client-stories"><div className="insights-head"><div><p className="eyebrow dark-eyebrow">RECENT CLIENT STORIES</p><h2>Transformation,<br /><span>made real.</span></h2></div><a className="text-link" href="/insights">View all stories <ArrowUpRight size={18} /></a></div><CardGrid items={clientStories} /></section>

      <section className="services-band" id="news"><p className="eyebrow dark-eyebrow">LATEST NEWS</p><div className="service-row">{news.map((item) => <a href="/news" key={item.title}><span>{item.date}</span><h3>{item.title}</h3><ArrowUpRight /></a>)}</div></section>

      <section className="insights reveal-section" id="inside-stories"><div className="insights-head"><div><p className="eyebrow dark-eyebrow">INSIDE STORIES</p><h2>The people behind<br /><span>the technology.</span></h2></div><a className="text-link" href="/insights">View all <ArrowUpRight size={18} /></a></div><CardGrid items={insideStories} /></section>

      <section className="newsletter"><div><p className="eyebrow">STAY CONNECTED</p><h2>Get the future<br /><em>you want.</em></h2></div><form onSubmit={submitNewsletter}>{newsletterSent ? <p className="newsletter-success">Thank you. You’re on the list.</p> : <><label htmlFor="email">Business email</label><div className="newsletter-input"><input id="email" type="email" required placeholder="you@company.com" /><button aria-label="Subscribe"><ArrowRight /></button></div><small>By subscribing, you agree to our privacy notice.</small></>}</form></section>
      <section className="cta"><p className="eyebrow">JOIN US</p><h2>Make it<br /><em>real.</em></h2><a className="outline-link" href="/careers">Explore careers <ArrowUpRight size={18} /></a></section>
      <SiteFooter />
      {cookieOpen && <div className="cookie-banner"><div><strong>Capgemini cares about your privacy</strong><p>We use cookies to enhance your experience on our website and to improve our services. Choose your preferences at any time.</p></div><div className="cookie-actions"><button onClick={() => setCookieOpen(false)}>Accept all</button><button onClick={() => setCookieOpen(false)}>Manage settings</button><button onClick={() => setCookieOpen(false)}>Decline all</button></div></div>}
    </main>
  )
}
