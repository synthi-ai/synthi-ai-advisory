import { ArrowUpRight, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'

const columns = [
  { title: 'Explore', links: [['Insights', '/insights'], ['Industries', '/industries'], ['Services', '/services'], ['Careers', '/careers'], ['News', '/news'], ['About us', '/about'], ['Contact us', '/contact'], ['Investors', '/investors']] },
  { title: 'Legal & policies', links: [['Accessibility', '/accessibility'], ['Cookie policy', '/cookies'], ['Cookie settings', '/cookies'], ['Privacy notice', '/privacy'], ['Security vulnerability notification', '/contact'], ['SpeakUp', '/contact'], ['Terms of use', '/privacy'], ['Fraud alert', '/contact']] },
  { title: 'Our brands', links: [['Capgemini Engineering', '/about'], ['Capgemini Invent', '/about'], ['Sogeti', '/about'], ['Frog Design', '/about']] },
]

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/capgemini/', Icon: Linkedin },
  { label: 'Instagram', href: 'https://www.instagram.com/capgemini/', Icon: Instagram },
  { label: 'Facebook', href: 'https://www.facebook.com/Capgemini/', Icon: Facebook },
  { label: 'YouTube', href: 'https://www.youtube.com/user/capgeminimedia', Icon: Youtube },
]

export function SiteFooter() {
  return (
    <footer className="global-footer">
      <div className="footer-top">
        <a className="logo footer-logo" href="/">Capgemini</a>
        <p>Get the future you want.<br />Technology, creativity and human ingenuity for a more inclusive and sustainable future.</p>
      </div>
      <div className="footer-columns">
        {columns.map((column) => (
          <div key={column.title}>
            <p className="footer-heading">{column.title}</p>
            {column.links.map(([label, href]) => (
              <a href={href} key={label}>{label}<ArrowUpRight size={13} /></a>
            ))}
          </div>
        ))}
      </div>
      <div className="footer-social">
        <span>Follow us</span>
        <div>
          {socials.map(({ label, href, Icon }) => (
            <a href={href} key={label} target="_blank" rel="noreferrer" aria-label={label}><Icon size={18} /></a>
          ))}
          <a href="https://www.glassdoor.com/Overview/Working-at-Capgemini" target="_blank" rel="noreferrer" className="footer-glassdoor">Glassdoor</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© Capgemini 2026. All rights reserved.</span>
        <span>Capgemini is a global business and technology transformation partner.</span>
      </div>
    </footer>
  )
}
