import { SiteHeader } from './site-header'
import { SiteFooter } from './site-footer'

type Section = { heading: string; body: string[] }
type LegalKey = 'privacy' | 'cookies' | 'accessibility'

const content: Record<LegalKey, { eyebrow: string; title: string; intro: string; updated: string; sections: Section[] }> = {
  privacy: {
    eyebrow: 'LEGAL',
    title: 'Privacy notice',
    intro: 'SYNTHI-AI Advisory is committed to protecting your personal data and being transparent about how we collect, use and safeguard it.',
    updated: 'Last updated: September 2026',
    sections: [
      { heading: 'Who we are', body: ['This privacy notice applies to SYNTHI-AI Advisory SE and its group companies acting as data controllers. It explains how we process personal data collected through this website and our related services.'] },
      { heading: 'Data we collect', body: ['We may collect information you provide directly — such as your name, business email, company and the content of your enquiries — as well as technical data collected automatically, including your IP address, device type and interactions with our pages.'] },
      { heading: 'How we use your data', body: ['We use personal data to respond to your requests, provide and improve our services, send you information you have asked for, and meet our legal and regulatory obligations. We rely on your consent, our legitimate interests, or the performance of a contract as the legal basis for processing.'] },
      { heading: 'Your rights', body: ['Subject to applicable law, you have the right to access, correct, delete or restrict the processing of your personal data, to object to processing, and to data portability. You may also withdraw consent at any time.', 'To exercise your rights, contact our Data Protection Officer through the contact page.'] },
      { heading: 'Data retention and security', body: ['We keep personal data only for as long as necessary for the purposes described above, and we apply appropriate technical and organizational measures to protect it against unauthorized access, loss or misuse.'] },
    ],
  },
  cookies: {
    eyebrow: 'LEGAL',
    title: 'Cookie policy',
    intro: 'Learn how SYNTHI-AI Advisory uses cookies and similar technologies to make our digital experiences more useful, relevant and secure.',
    updated: 'Last updated: September 2026',
    sections: [
      { heading: 'What are cookies', body: ['Cookies are small text files stored on your device when you visit a website. They help the site function, remember your preferences, and understand how the site is used.'] },
      { heading: 'Categories we use', body: ['Strictly necessary cookies enable core functionality and cannot be switched off. Performance and analytics cookies help us understand how visitors use the site. Functional cookies remember your choices. Advertising cookies may be used to make marketing more relevant.'] },
      { heading: 'Managing your preferences', body: ['You can accept or decline non-essential cookies at any time using the cookie settings link in the footer, or through your browser settings. Declining some cookies may affect how parts of the site work.'] },
      { heading: 'Third-party cookies', body: ['Some cookies are set by third-party services that appear on our pages, such as video players or analytics providers. These providers are responsible for their own cookies under their respective policies.'] },
    ],
  },
  accessibility: {
    eyebrow: 'LEGAL',
    title: 'Accessibility statement',
    intro: 'We want everyone to be able to access and use our digital experiences, regardless of ability or technology.',
    updated: 'Last updated: September 2026',
    sections: [
      { heading: 'Our commitment', body: ['SYNTHI-AI Advisory is committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone and apply the relevant accessibility standards.'] },
      { heading: 'Conformance status', body: ['We aim to conform with the Web Content Accessibility Guidelines (WCAG) 2.1 at level AA. These guidelines explain how to make web content more accessible to people with a wide range of disabilities.'] },
      { heading: 'What we do', body: ['We provide text alternatives for meaningful images, ensure sufficient color contrast, support keyboard navigation, respect reduced-motion preferences, and structure content with clear, semantic headings.'] },
      { heading: 'Feedback and support', body: ['We welcome your feedback on the accessibility of this site. If you encounter a barrier or need information in an alternative format, please reach out through our contact page and we will do our best to help.'] },
    ],
  },
}

export function LegalPage({ page }: { page: LegalKey }) {
  const data = content[page]
  return (
    <main className="editorial-page">
      <SiteHeader />
      <section className="editorial-hero utility-hero">
        <p className="eyebrow">{data.eyebrow}</p>
        <h1>{data.title}</h1>
        <p>{data.intro}</p>
      </section>
      <section className="legal-body">
        <p className="legal-updated">{data.updated}</p>
        {data.sections.map((section, index) => (
          <article className="legal-section" key={section.heading}>
            <h2><span>{String(index + 1).padStart(2, '0')}</span>{section.heading}</h2>
            {section.body.map((paragraph, paragraphIndex) => <p key={paragraphIndex}>{paragraph}</p>)}
          </article>
        ))}
      </section>
      <SiteFooter />
    </main>
  )
}
