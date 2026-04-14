import Link from 'next/link'

export default function PortfolioPreview() {
  return (
    <section id="portfolio" className="border-t border-sand/50 bg-ivory-2/30 px-6 sm:px-8 md:px-12 lg:px-24 xl:px-32 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-8 md:mb-12 gap-4">
          <div>
            <span className="text-xs md:text-sm tracking-[0.1em] uppercase text-orange-400 block mb-3 md:mb-4">
              03 — Portfolio
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight text-ink">
              Featured Work
            </h2>
          </div>
          <span className="inline-flex items-center gap-2 font-sans text-sm font-medium tracking-[0.08em] uppercase text-orange-400 hover:text-ink transition-colors underline underline-offset-3">
            View All Projects
            <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
              <path d="M2 7h10M8 3l4 4-4 4" />
            </svg>
          </span>
        </div>
        
        <p className="text-base md:text-lg lg:text-xl leading-relaxed text-warm-brown max-w-3xl mb-8 md:mb-12">
          A showcase of strategic communication campaigns, speaking engagements, advocacy projects, and publications that demonstrate a decade of impact across corporate communications, NGO leadership, and policy advocacy.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-ivory border border-sand/50 p-6 rounded-sm hover:shadow-md transition-shadow">
            <div className="text-orange-400 mb-4">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" className="w-8 h-8">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3 className="font-serif text-lg md:text-xl text-ink mb-2">Communication Campaigns</h3>
            <p className="text-sm text-warm-brown">Strategic campaigns that grew social media following from 7,000 to 22,000 and increased partnerships by 20%</p>
          </div>

          <div className="bg-ivory border border-sand/50 p-6 rounded-sm hover:shadow-md transition-shadow">
            <div className="text-orange-400 mb-4">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" className="w-8 h-8">
                <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
                <path d="M19 10v1a7 7 0 01-14 0v-1M12 18v4M8 22h8" />
              </svg>
            </div>
            <h3 className="font-serif text-lg md:text-xl text-ink mb-2">Speaking Engagements</h3>
            <p className="text-sm text-warm-brown">UN Model Assembly panels, AIT appearances, and LEAP Africa presentations</p>
          </div>

          <div className="bg-ivory border border-sand/50 p-6 rounded-sm hover:shadow-md transition-shadow">
            <div className="text-orange-400 mb-4">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" className="w-8 h-8">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
              </svg>
            </div>
            <h3 className="font-serif text-lg md:text-xl text-ink mb-2">Advocacy Projects</h3>
            <p className="text-sm text-warm-brown">Women Empowering Girls Program and community development initiatives</p>
          </div>
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <span className="inline-flex items-center gap-3 font-sans text-sm font-medium tracking-[0.08em] uppercase bg-orange-400 text-ivory border-none px-8 py-4 rounded-sm cursor-pointer hover:bg-orange-500 transition-colors">
            Explore Full Portfolio
            <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
              <path d="M2 7h10M8 3l4 4-4 4" />
            </svg>
          </span>
        </div>
      </div>
    </section>
  )
}
