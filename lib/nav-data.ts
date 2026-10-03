export type NavColumn = { heading?: string; links: string[] }
export type NavItem = { label: string; href: string; columns: NavColumn[] }

export const navItems: NavItem[] = [
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

export const slugify = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
