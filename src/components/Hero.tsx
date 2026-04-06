'use client'

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[30vh]">
      <div className="px-6 sm:px-8 md:px-12 lg:px-24 pt-16 md:pt-24 pb-10 md:pb-[68px] flex flex-col justify-start border-b md:border-b-0 md:border-r border-light-taupe/50 bg-cream order-2 md:order-1">
        <p className="text-xs md:text-sm tracking-[0.12em] uppercase text-terracotta mb-6 md:mb-8">
          Virtual Assistant — Jos, Nigeria
        </p>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight text-dark-brown mb-6 md:mb-8">
          Hi, I&apos;m Dorcas,
          <br />
          a Virtual <em className="italic text-terracotta">Assistant</em>
        </h1>
        <p className="text-base md:text-lg leading-relaxed text-warm-brown max-w-[400px] mb-8 md:mb-12">
          I help CEOs, Founders, and HR professionals stay organized and focused on what actually moves the needle.
        </p>
        <div className="flex items-center gap-5 md:gap-6">
          <button 
            onClick={scrollToContact}
            className="inline-flex items-center gap-2.5 font-sans text-sm font-medium tracking-[0.08em] uppercase bg-dark-brown text-cream border-none px-8 md:px-9 py-4 md:py-5 rounded-sm cursor-pointer hover:bg-medium-brown transition-colors"
          >
            Work With Me
            <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
              <path d="M2 7h10M8 3l4 4-4 4" />
            </svg>
          </button>
          <span className="text-sm text-warm-brown tracking-[0.04em] underline underline-offset-3 cursor-pointer hover:text-dark-brown transition-colors">
            Download CV
          </span>
        </div>
      </div>
      <div className="bg-warm-beige relative flex items-start justify-start overflow-hidden order-1 md:order-2">
        <div className="relative z-10 pl-4 md:pl-12" style={{ maxHeight: '60%' }}>
          <img 
            src="/profile.png" 
            alt="Dorcas Ayomide" 
            className="w-[350px] md:w-[650px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  )
}
