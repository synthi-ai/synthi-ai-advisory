'use client'

import { FormEvent, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { SiteHeader } from './site-header'
import { SiteFooter } from './site-footer'

const otherWays = [
  { label: 'Find a SYNTHI-AI Advisory office', href: '/locations' },
  { label: 'Investor relations', href: '/investors' },
  { label: 'Media and press', href: '/news' },
  { label: 'Explore careers', href: '/careers' },
]

export function ContactView() {
  const [sent, setSent] = useState(false)

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <main className="editorial-page">
      <SiteHeader />
      <section className="editorial-hero utility-hero">
        <p className="eyebrow">CONTACT US</p>
        <h1>Let’s make something real.</h1>
        <p>Tell us what you are trying to achieve. Our teams bring the right expertise, imagination and technology to the conversation.</p>
      </section>
      <section className="contact-section">
        <div className="contact-form-wrap">
          {sent ? (
            <div className="contact-success">
              <p className="eyebrow dark-eyebrow">THANK YOU</p>
              <h2>Your message is on its way.</h2>
              <p>A member of our team will get back to you shortly. In the meantime, feel free to explore our latest insights.</p>
              <a className="dark-link" href="/insights">Explore insights <ArrowUpRight size={18} /></a>
            </div>
          ) : (
            <form className="contact-form" onSubmit={submit}>
              <p className="eyebrow dark-eyebrow">SEND US A MESSAGE</p>
              <div className="field-row">
                <label>First name<input name="firstName" required autoComplete="given-name" /></label>
                <label>Last name<input name="lastName" required autoComplete="family-name" /></label>
              </div>
              <div className="field-row">
                <label>Business email<input name="email" type="email" required autoComplete="email" /></label>
                <label>Company<input name="company" autoComplete="organization" /></label>
              </div>
              <label>Country
                <select name="country" defaultValue="">
                  <option value="" disabled>Select a country</option>
                  <option>France</option>
                  <option>United Kingdom</option>
                  <option>Germany</option>
                  <option>United States</option>
                  <option>India</option>
                  <option>Other</option>
                </select>
              </label>
              <label>How can we help?<textarea name="message" rows={5} required /></label>
              <label className="field-consent"><input type="checkbox" required /><span>I agree to the processing of my data in accordance with the SYNTHI-AI Advisory privacy notice.</span></label>
              <button className="contact-submit" type="submit">Submit <ArrowUpRight size={18} /></button>
            </form>
          )}
        </div>
        <aside className="contact-aside">
          <p className="footer-heading">Other ways to connect</p>
          {otherWays.map((way) => <a href={way.href} key={way.label}>{way.label}<ArrowUpRight size={15} /></a>)}
          <div className="contact-hq">
            <p className="footer-heading">Head office</p>
            <p>SYNTHI-AI Advisory SE<br />11 rue de Tilsitt<br />75017 Paris, France</p>
          </div>
        </aside>
      </section>
      <SiteFooter />
    </main>
  )
}
