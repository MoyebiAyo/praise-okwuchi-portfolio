import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const portfolioItems = [
  {
    id: 1,
    title: 'Calendar Management',
    description: 'Professional calendar scheduling and time management system demonstrating expert organization of appointments, meetings, and time blocking for optimal productivity.',
    category: 'Administrative Support',
    file: '/portfolio/Calender%20Management-Sample.pdf',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" className="w-6 h-6">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M8 2v4M16 2v4M3 10h18" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Email Management',
    description: 'Comprehensive email inbox organization system showcasing efficient email triage, response drafting, and correspondence management strategies.',
    category: 'Communication',
    file: '/portfolio/Email%20Management-Sample.pdf',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" className="w-6 h-6">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" />
        <path d="m22 6-10 7L2 6" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Travel Planning',
    description: 'Detailed travel itinerary creation and planning document demonstrating comprehensive trip coordination, booking management, and schedule optimization.',
    category: 'Planning & Coordination',
    file: '/portfolio/Travel%20Planning-Sample.pdf',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" className="w-6 h-6">
        <path d="M3 7l6-4 6 4-6 4-6-4zM3 7v10l6 4 6-4V7M3 7l6 4M9 11v10M21 7v10l-6 4" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Task Management - Trello',
    description: 'Project workflow management using Trello showcasing task organization, progress tracking, team collaboration, and deliverable management.',
    category: 'Project Management',
    file: '/portfolio/Task%20Management-Trello%20sample.pdf',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" className="w-6 h-6">
        <rect x="3" y="3" width="7" height="9" rx="1" />
        <rect x="14" y="3" width="7" height="5" rx="1" />
        <rect x="14" y="12" width="7" height="9" rx="1" />
        <rect x="3" y="16" width="7" height="5" rx="1" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Data Entry & Documentation',
    description: 'Accurate data entry and record-keeping sample demonstrating attention to detail, data organization, and documentation management skills.',
    category: 'Data Management',
    file: '/portfolio/Data%20entry-%20Sample.pdf',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" className="w-6 h-6">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Online Research',
    description: 'Comprehensive research report showcasing information gathering, data analysis, structured reporting, and actionable insights compilation.',
    category: 'Research & Analysis',
    file: '/portfolio/Online%20Research-Sample.pdf',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" className="w-6 h-6">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    ),
  },
  {
    id: 7,
    title: 'AI Automation - Zapier Setup',
    description: 'Workflow automation implementation using Zapier demonstrating trigger configuration, action setup, and multi-step automation flows.',
    category: 'AI & Automation',
    file: '/portfolio/Ai%20automation%20using%20zap%20Trigger%20set-up.pdf',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" className="w-6 h-6">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    id: 8,
    title: 'Automation Flow Design',
    description: 'Complete automation workflow design showcasing process mapping, integration setup, and efficiency optimization through automated systems.',
    category: 'AI & Automation',
    file: '/portfolio/Automation%20flow.pdf',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" className="w-6 h-6">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    id: 9,
    title: 'Agent Workflow Setup',
    description: 'AI agent workflow configuration demonstrating intelligent task routing, decision-making logic, and automated response systems.',
    category: 'AI & Automation',
    file: '/portfolio/Agent%20workflow%20(1).pdf',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" className="w-6 h-6">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
  },
  {
    id: 10,
    title: 'Advanced Agent Workflow',
    description: 'Complex AI agent implementation showcasing multi-step workflows, conditional logic, and advanced automation scenarios.',
    category: 'AI & Automation',
    file: '/portfolio/Agent%20workflow%20(2).pdf',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" className="w-6 h-6">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    id: 11,
    title: 'Action Configuration',
    description: 'Detailed action setup documentation demonstrating precise configuration of automated tasks and workflow triggers.',
    category: 'AI & Automation',
    file: '/portfolio/Action%20Set-up.pdf',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" className="w-6 h-6">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>
    ),
  },
  {
    id: 12,
    title: 'Scenario Setup',
    description: 'Automation scenario configuration demonstrating use case implementation, conditional workflows, and practical automation applications.',
    category: 'AI & Automation',
    file: '/portfolio/Scenario%20set-up.pdf',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" className="w-6 h-6">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
        <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
      </svg>
    ),
  },
  {
    id: 13,
    title: 'Agent Configuration',
    description: 'AI agent setup and configuration guide demonstrating intelligent assistant deployment and customization.',
    category: 'AI & Automation',
    file: '/portfolio/Agent%20(2).pdf',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" className="w-6 h-6">
        <path d="M12 2a10 10 0 1 0 10 10H12V2z" />
        <path d="M20.66 9A10 10 0 0014 2.05V9h6.66z" />
      </svg>
    ),
  },
  {
    id: 14,
    title: 'Advanced Agent Setup',
    description: 'Advanced AI agent implementation showcasing sophisticated automation logic and intelligent task management.',
    category: 'AI & Automation',
    file: '/portfolio/Agent%20(3).pdf',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" className="w-6 h-6">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
]

export default function Portfolio() {
  return (
    <main className="w-full min-h-screen bg-cream">
      <Navbar />
      
      {/* Hero Section */}
      <section className="border-b border-light-taupe/50 bg-warm-beige px-6 sm:px-8 md:px-12 lg:px-24 xl:px-32 pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="max-w-4xl">
          <p className="text-xs md:text-sm tracking-[0.12em] uppercase text-terracotta mb-4 md:mb-6">
            Portfolio — Work Samples
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.08] tracking-tight text-dark-brown mb-4 md:mb-6">
            My <em className="italic text-terracotta">Work</em>
          </h1>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed text-warm-brown">
            Explore real samples of my work across calendar management, email organization, AI automation, and more. Preview directly or download for detailed review.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="px-6 sm:px-8 md:px-12 lg:px-24 xl:px-32 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-light-taupe/50 rounded-sm overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* PDF Preview Area */}
              <div className="bg-warm-beige border-b border-light-taupe/50 relative" style={{ height: '280px' }}>
                <iframe
                  src={`${item.file}#page=1&toolbar=0&navpanes=0&scrollbar=0`}
                  className="w-full h-full border-0"
                  title={`${item.title} preview`}
                  style={{ pointerEvents: 'none' }}
                  loading="lazy"
                  sandbox="allow-same-origin"
                />
                {/* Overlay to prevent interaction and block download managers */}
                <div className="absolute inset-0 bg-transparent pointer-events-none"></div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <span className="text-xs tracking-[0.1em] uppercase text-terracotta mb-2 block">
                  {item.category}
                </span>
                <h3 className="font-serif text-xl md:text-2xl tracking-tight text-dark-brown mb-3">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base leading-relaxed text-warm-brown mb-6">
                  {item.description}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={item.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 font-sans text-xs md:text-sm font-medium tracking-[0.08em] uppercase bg-terracotta text-cream border-none px-4 py-3 rounded-sm cursor-pointer hover:bg-terracotta-light transition-colors"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    View Full Document
                  </a>
                  <a
                    href={item.file}
                    download
                    className="flex-1 inline-flex items-center justify-center gap-2 font-sans text-xs md:text-sm font-medium tracking-[0.08em] uppercase border border-terracotta text-terracotta bg-transparent px-4 py-3 rounded-sm cursor-pointer hover:bg-terracotta hover:text-cream transition-colors"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                      <path d="M12 15V3M6 9l6 6 6-6" />
                      <path d="M3 18h18v3H3z" />
                    </svg>
                    Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
