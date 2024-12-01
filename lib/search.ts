export interface SearchResult {
  title: string
  description: string
  href: string
  category: string
  content?: string
}

export const searchableContent: SearchResult[] = [
  {
    title: 'Home',
    description: 'Welcome to Forever Knight Robotics',
    href: '/',
    category: 'Main',
    content: 'FTC robotics team community outreach STEM education innovation engineering'
  },
  {
    title: 'About Us',
    description: 'Learn about our mission and values',
    href: '/about-us',
    category: 'Main',
    content: 'Innovation Collaboration Impact Years of Excellence National Champions STEM education robotics program community values mission'
  },
  {
    title: 'Team',
    description: 'Meet our dedicated team members',
    href: '/team',
    category: 'Team',
    content: 'Active Members Subteams leadership engineering programming mechanical design outreach marketing'
  },
  {
    title: 'FTC Program',
    description: 'Our FIRST Tech Challenge journey',
    href: '/ftc',
    category: 'Programs',
    content: 'CENTERSTAGE POWERPLAY FREIGHT FRENZY robotics competition achievements awards technical excellence engineering design manufacturing control systems'
  },
  {
    title: 'Depth Lab',
    description: 'Community platform for FTC teams',
    href: '/depth-lab',
    category: 'Resources',
    content: 'collaboration knowledge sharing resources community platform tutorials guides technical documentation open source projects'
  },
  {
    title: 'Sponsors',
    description: 'Partner with our team',
    href: '/sponsors',
    category: 'Support',
    content: 'sponsorship partnership support funding robotics education STEM development innovation community impact'
  }
]

export function searchContent(query: string): SearchResult[] {
  const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0)
  
  if (searchTerms.length === 0) return []

  return searchableContent.filter(item => {
    const searchableText = [
      item.title,
      item.description,
      item.content,
      item.category
    ].join(' ').toLowerCase()

    return searchTerms.every(term => searchableText.includes(term))
  }).sort((a, b) => {
    // Prioritize title matches
    const aTitle = a.title.toLowerCase()
    const bTitle = b.title.toLowerCase()
    const queryInATitle = searchTerms.some(term => aTitle.includes(term))
    const queryInBTitle = searchTerms.some(term => bTitle.includes(term))

    if (queryInATitle && !queryInBTitle) return -1
    if (!queryInATitle && queryInBTitle) return 1
    return 0
  })
} 