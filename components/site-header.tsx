'use client'

import { useState } from 'react'
import { ArrowUpRight, ChevronDown, Globe2, Menu, Moon, Search, Sun, X } from 'lucide-react'
import { navItems, slugify as slug } from '@/lib/nav-data'

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
