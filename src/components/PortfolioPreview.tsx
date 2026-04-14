import Link from 'next/link'

export default function PortfolioPreview() {
  return (
    <section className="border-t border-light-taupe/50 bg-warm-beige px-6 sm:px-8 md:px-12 lg:px-24 xl:px-32 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-8 md:mb-12 gap-4">
          <div>
            <span className="text-xs md:text-sm tracking-[0.1em] uppercase text-terracotta block mb-3 md:mb-4">
              04 — Portfolio
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight text-dark-brown">
              View My Work
            </h2>
          </div>
          <Link 
            href="/portfolio"
            className="inline-flex items-center gap-2 font-sans text-sm font-medium tracking-[0.08em] uppercase text-terracotta hover:text-dark-brown transition-colors underline underline-offset-3"
          >
            View All Samples
            <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
              <path d="M2 7h10M8 3l4 4-4 4" />
            </svg>
          </Link>
        </div>
        
        <p className="text-base md:text-lg lg:text-xl leading-relaxed text-warm-brown max-w-3xl mb-8 md:mb-12">
          Explore 14 real work samples showcasing my expertise in calendar management, email organization, AI automation, travel planning, and more. Each document demonstrates my commitment to quality, attention to detail, and professional excellence.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-white border border-light-taupe/50 p-6 rounded-sm hover:shadow-md transition-shadow">
            <div className="text-terracotta mb-4">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" className="w-8 h-8">
                <rect x="3" y="4" width="18" height="16" rx="2" />
                <path d="M8 2v4M16 2v4M3 10h18" />
              </svg>
            </div>
            <h3 className="font-serif text-lg md:text-xl text-dark-brown mb-2">Calendar Management</h3>
            <p className="text-sm text-warm-brown">Professional scheduling and time organization systems</p>
          </div>

          <div className="bg-white border border-light-taupe/50 p-6 rounded-sm hover:shadow-md transition-shadow">
            <div className="text-terracotta mb-4">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" className="w-8 h-8">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <h3 className="font-serif text-lg md:text-xl text-dark-brown mb-2">AI Automation</h3>
            <p className="text-sm text-warm-brown">Zapier workflows and intelligent automation setups</p>
          </div>

          <div className="bg-white border border-light-taupe/50 p-6 rounded-sm hover:shadow-md transition-shadow">
            <div className="text-terracotta mb-4">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" className="w-8 h-8">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" />
                <path d="m22 6-10 7L2 6" />
              </svg>
            </div>
            <h3 className="font-serif text-lg md:text-xl text-dark-brown mb-2">Email Management</h3>
            <p className="text-sm text-warm-brown">Inbox organization and correspondence management</p>
          </div>
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <Link 
            href="/portfolio"
            className="inline-flex items-center gap-3 font-sans text-sm font-medium tracking-[0.08em] uppercase bg-terracotta text-cream border-none px-8 py-4 rounded-sm cursor-pointer hover:bg-terracotta-light transition-colors"
          >
            Browse All 14 Work Samples
            <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
              <path d="M2 7h10M8 3l4 4-4 4" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
