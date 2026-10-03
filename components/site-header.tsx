'use client'

import { useState } from 'react'
import { ArrowUpRight, ChevronDown, Globe2, Menu, Moon, Search, Sun, X } from 'lucide-react'

type NavColumn = { heading?: string; links: string[] }
type NavItem = { label: string; href: string; columns: NavColumn[] }

const navItems: NavItem[] = [
  {
    label: 'Insights', href: '/insights', columns: [
      { heading: 'Hot topics', links: ['Reshape your future with AI', 'Leading sustainability', 'The future of technology', 'Marketing for customer experience'] },
      { heading: 'Explore', links: ['Conversations for tomorrow', 'The Scale Effect', 'Initiatives with the World Economic Forum', 'Our research library', 'Expert perspectives'] },
    ],
  },
  {
    label: 'Industries', href: '/industries', columns: [
      { links: ['Aerospace and defense', 'Automotive', 'Banking and capital markets', 'Consumer products', 'Energy and utilities'] },
      { links: ['Healthcare', 'High-tech', 'Hospitality and travel', 'Insurance', 'Life sciences'] },
      { links: ['Manufacturing', 'Media and entertainment', 'Public sector', 'Retail', 'Telecoms'] },
    ],
  },
  {
    label: 'Services', href: '/services', columns: [
      { links: ['Cloud', 'Customer first', 'Cybersecurity', 'Data and artificial intelligence'] },
      { links: ['Digital sovereignty', 'Enterprise management', 'Intelligent industry', 'Sustainable business'] },
    ],
  },
  {
    label: 'Careers', href: '/careers', columns: [
      { heading: 'Explore', links: ['Why join Capgemini', 'Life at Capgemini', 'Meet our people'] },
      { heading: 'Career paths', links: ['Students and graduates', 'Experienced professionals', 'Executives', 'Our professions', 'Careers at Capgemini Engineering', 'Careers at Capgemini Invent'] },
      { heading: 'Join us', links: ['Recruitment process', 'Interview tips', 'Job search'] },
    ],
  },
  {
    label: 'News', href: '/news', columns: [
      { links: ['Press releases', 'Analyst recognition', 'Client stories', 'Inside stories', 'Social media', 'Events'] },
    ],
  },
  {
    label: 'About us', href: '/about', columns: [
      { heading: 'Who we are', links: ['What we do', 'The way we work', 'Our innovation ecosystem', 'Values and Ethics', 'Our brands'] },
      { heading: 'Management and governance', links: ['Board of Directors', 'Executive committee', 'Responsible business', 'Policies'] },
      { heading: 'Corporate Social Responsibility', links: ['Digital inclusion', 'Diversity and inclusion', 'Environmental sustainability', 'Partnerships', 'Tech4Positive Futures'] },
      { heading: 'Transforming sports', links: ['Peugeot Sport', 'Rugby', 'Ryder Cup', 'Tour de France', "The America's Cup"] },
      { heading: 'More', links: ['Environment, Social & Governance', 'Technology partners', 'Locations'] },
    ],
  },
]

const slug = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [countryOpen, setCountryOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [activeNav, setActiveNav] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const [darkMode, setDarkMode] = useState(false)

  const active = navItems.find((item) => item.label === activeNav)

  return <>
    <header className="header site-header">
      <div className="utility-bar"><div className="utility-inner"><a href="/investors">Investors <ArrowUpRight size={12} /></a><a href="/contact">Contact us</a></div></div>
      <div className="main-bar">
        <a className="logo" href="/" aria-label="Capgemini home">Capgemini</a>
        <div className="nav-zone" onMouseLeave={() => setActiveNav(null)}>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item) => <div className="nav-item" key={item.label} onMouseEnter={() => setActiveNav(item.label)}><a href={item.href} aria-expanded={activeNav === item.label}>{item.label}<ChevronDown size={12} /></a></div>)}
          </nav>
          {active && <div className="nav-mega" onMouseEnter={() => setActiveNav(active.label)}>
            {active.columns.map((column, columnIndex) => <div className="nav-col" key={column.heading ?? columnIndex}>
              {column.heading && <p className="nav-col-head">{column.heading}</p>}
              {column.links.map((link) => <a key={link} href={`${active.href}#${slug(link)}`}>{link}<ArrowUpRight size={13} /></a>)}
            </div>)}
          </div>}
        </div>
        <div className="header-actions">
          <button className="search" onClick={() => setSearchOpen(true)} aria-label="Search"><Search size={18} /></button>
          <button className="theme-toggle" onClick={() => { setDarkMode((value) => { const next = !value; document.documentElement.classList.toggle('dark', next); return next }) }} aria-label="Toggle theme">{darkMode ? <Sun size={18} /> : <Moon size={18} />}</button>
          <button className="country-btn" onClick={() => setCountryOpen(true)}><Globe2 size={15} /> Global | EN</button>
        </div>
        <button className="mobile-menu" onClick={() => setMenuOpen(true)} aria-label="Open menu"><Menu /></button>
      </div>
    </header>
    {countryOpen && <><div className="panel-backdrop" onClick={() => setCountryOpen(false)} /><aside className="country-panel" aria-label="Country selector"><div><strong>Your location</strong><button onClick={() => setCountryOpen(false)} aria-label="Close country selector"><X size={18}/></button></div><input placeholder="Search country" aria-label="Search country" /><p>Worldwide</p><a href="/">Global | EN</a><p>Europe, Middle East & Africa</p><a href="/fr-fr">France | FR</a><a href="/uk-en">United Kingdom | EN</a><a href="/de-de">Germany | DE</a></aside></>}
    {searchOpen && <div className="search-overlay"><button onClick={() => setSearchOpen(false)} aria-label="Close search"><X /></button><p className="eyebrow">SEARCH CAPGEMINI</p><form action="/search"><input autoFocus name="q" placeholder="What are you looking for?" aria-label="Search" /><button aria-label="Submit search"><ArrowUpRight /></button></form><p className="search-hint">Try “generative AI”, “sustainability” or “careers”</p></div>}
    {menuOpen && <div className="mobile-panel"><button onClick={() => setMenuOpen(false)} aria-label="Close menu"><X /></button>{navItems.map(item => <div className="mobile-nav-group" key={item.label}><button className="mobile-nav-trigger" onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)} aria-expanded={mobileExpanded === item.label}>{item.label}<ChevronDown /></button>{mobileExpanded === item.label && <div className="mobile-subnav"><a href={item.href} onClick={() => setMenuOpen(false)}>Overview<ArrowUpRight size={16}/></a>{item.columns.map((column, columnIndex) => <div className="mobile-subcol" key={column.heading ?? columnIndex}>{column.heading && <p className="mobile-subhead">{column.heading}</p>}{column.links.map((link) => <a key={link} href={`${item.href}#${slug(link)}`} onClick={() => setMenuOpen(false)}>{link}<ArrowUpRight size={16}/></a>)}</div>)}</div>}</div>)}<a href="/contact" onClick={() => setMenuOpen(false)}>Contact us<ArrowUpRight size={18}/></a><a href="/investors" onClick={() => setMenuOpen(false)}>Investors<ArrowUpRight size={18}/></a><div className="mobile-utility-actions"><button onClick={() => { setMenuOpen(false); setSearchOpen(true) }}><Search size={17}/>Search</button><button onClick={() => { setMenuOpen(false); setCountryOpen(true) }}><Globe2 size={17}/>Global | EN</button><button onClick={() => { setDarkMode((value) => { const next = !value; document.documentElement.classList.toggle('dark', next); return next }); setMenuOpen(false) }}>{darkMode ? <Sun size={17}/> : <Moon size={17}/>} {darkMode ? 'Light' : 'Dark'}</button></div></div>}
  </>
}

export { navItems }
