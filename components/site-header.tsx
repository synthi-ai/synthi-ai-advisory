'use client'

import { useState } from 'react'
import { ArrowUpRight, ChevronDown, Globe2, Menu, Moon, Search, Sun, X } from 'lucide-react'

const navItems = [
  { label: 'Insights', href: '/insights', items: ['Capgemini Research Institute', 'Artificial intelligence', 'Sustainability', 'Expert perspectives'] },
  { label: 'Industries', href: '/industries', items: ['Aerospace and defense', 'Automotive', 'Banking and capital markets', 'Energy and utilities', 'Public sector', 'Retail'] },
  { label: 'Services', href: '/services', items: ['Cloud', 'Customer first', 'Cybersecurity', 'Data and artificial intelligence', 'Digital sovereignty', 'Enterprise management', 'Intelligent industry', 'Sustainable business'] },
  { label: 'Careers', href: '/careers', items: ['Explore careers', 'Students and graduates', 'Experienced professionals', 'Our people'] },
  { label: 'News', href: '/news', items: ['Press releases', 'Client stories', 'Events'] },
  { label: 'About us', href: '/about', items: ['Who we are', 'Management and governance', 'Our brands', 'Locations'] },
]

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [countryOpen, setCountryOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [activeNav, setActiveNav] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const [lightMode, setLightMode] = useState(false)

  return <>
    <header className="header site-header">
      <a className="logo" href="/" aria-label="Capgemini home">Capgemini</a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map((item) => <div className="nav-item" key={item.label} onMouseEnter={() => setActiveNav(item.label)} onMouseLeave={() => setActiveNav(null)}><a href={item.href} aria-expanded={activeNav === item.label}>{item.label}<ChevronDown size={12} /></a>{activeNav === item.label && <div className="nav-dropdown">{item.items.map((sub) => <a key={sub} href={`${item.href}#${sub.toLowerCase().replaceAll(' ', '-')}`}>{sub}<ArrowUpRight size={14} /></a>)}</div>}</div>)}
      </nav>
      <div className="header-tools"><div className="top-links"><a href="/contact">Contact us</a><a href="/investors">Investors ↗</a><button onClick={() => setCountryOpen(true)}>Global | EN <Globe2 size={14} /></button></div><button className="search" onClick={() => setSearchOpen(true)} aria-label="Search"><span>Search</span><Search size={17} /></button><button className="theme-toggle" onClick={() => { setLightMode((value) => { const next = !value; document.documentElement.classList.toggle('light-mode', next); return next }) }} aria-label="Toggle theme">{lightMode ? <Moon size={17} /> : <Sun size={17} />}<span>{lightMode ? 'Dark' : 'Light'}</span></button></div>
      <button className="mobile-menu" onClick={() => setMenuOpen(true)} aria-label="Open menu"><Menu /></button>
    </header>
    {countryOpen && <><div className="panel-backdrop" onClick={() => setCountryOpen(false)} /><aside className="country-panel" aria-label="Country selector"><div><strong>Your location</strong><button onClick={() => setCountryOpen(false)} aria-label="Close country selector"><X size={18}/></button></div><input placeholder="Search country" aria-label="Search country" /><p>Worldwide</p><a href="/">Global | EN</a><p>Europe, Middle East & Africa</p><a href="/fr-fr">France | FR</a><a href="/uk-en">United Kingdom | EN</a><a href="/de-de">Germany | DE</a></aside></>}
    {searchOpen && <div className="search-overlay"><button onClick={() => setSearchOpen(false)} aria-label="Close search"><X /></button><p className="eyebrow">SEARCH CAPGEMINI</p><form action="/search"><input autoFocus name="q" placeholder="What are you looking for?" aria-label="Search" /><button aria-label="Submit search"><ArrowUpRight /></button></form><p className="search-hint">Try “generative AI”, “sustainability” or “careers”</p></div>}
    {menuOpen && <div className="mobile-panel"><button onClick={() => setMenuOpen(false)} aria-label="Close menu"><X /></button>{navItems.map(item => <div className="mobile-nav-group" key={item.label}><button className="mobile-nav-trigger" onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)} aria-expanded={mobileExpanded === item.label}>{item.label}<ChevronDown /></button>{mobileExpanded === item.label && <div className="mobile-subnav"><a href={item.href} onClick={() => setMenuOpen(false)}>Overview<ArrowUpRight size={16}/></a>{item.items.map((sub) => <a key={sub} href={`${item.href}#${sub.toLowerCase().replaceAll(' ', '-')}`} onClick={() => setMenuOpen(false)}>{sub}<ArrowUpRight size={16}/></a>)}</div>}</div>)}<a href="/contact" onClick={() => setMenuOpen(false)}>Contact us<ArrowUpRight size={18}/></a><a href="/investors" onClick={() => setMenuOpen(false)}>Investors<ArrowUpRight size={18}/></a><div className="mobile-utility-actions"><button onClick={() => { setMenuOpen(false); setSearchOpen(true) }}><Search size={17}/>Search</button><button onClick={() => { setMenuOpen(false); setCountryOpen(true) }}><Globe2 size={17}/>Global | EN</button><button onClick={() => { setLightMode((value) => { const next = !value; document.documentElement.classList.toggle('light-mode', next); return next }); setMenuOpen(false) }}>{lightMode ? <Moon size={17}/> : <Sun size={17}/>} {lightMode ? 'Dark' : 'Light'}</button></div></div>}
  </>
}

export { navItems }
