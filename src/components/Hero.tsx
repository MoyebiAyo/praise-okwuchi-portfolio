'use client'

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[400px] md:min-h-[460px] max-w-7xl mx-auto">
      <div className="px-6 sm:px-8 md:px-12 lg:px-24 py-10 md:py-[68px] flex flex-col justify-center border-b md:border-b-0 md:border-r border-light-taupe/50 bg-cream">
        <p className="text-[10px] md:text-[11px] tracking-[0.12em] uppercase text-terracotta mb-4 md:mb-6">
          Virtual Assistant — Jos, Nigeria
        </p>
        <h1 className="font-serif text-4xl md:text-[52px] leading-[1.08] tracking-tight text-dark-brown mb-4 md:mb-6">
          Your time,
          <br />
          <em className="italic text-terracotta">reclaimed.</em>
        </h1>
        <p className="text-sm md:text-base leading-relaxed text-warm-brown max-w-[310px] mb-6 md:mb-10">
          I help CEOs, Founders, and HR professionals stay organized and focused on what actually moves the needle.
        </p>
        <div className="flex items-center gap-4 md:gap-5">
          <button 
            onClick={scrollToContact}
            className="inline-flex items-center gap-2.5 font-sans text-xs font-medium tracking-[0.08em] uppercase bg-dark-brown text-cream border-none px-6 md:px-7 py-3 md:py-3.5 rounded-sm cursor-pointer hover:bg-medium-brown transition-colors"
          >
            Work With Me
            <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5">
              <path d="M2 7h10M8 3l4 4-4 4" />
            </svg>
          </button>
          <span className="text-xs text-warm-brown tracking-[0.04em] underline underline-offset-3 cursor-pointer hover:text-dark-brown transition-colors">
            Download CV
          </span>
        </div>
      </div>
      <div className="bg-warm-beige relative flex flex-col items-center justify-center overflow-hidden min-h-[300px] md:min-h-0">
        <div className="w-[100px] md:w-[130px] h-[100px] md:h-[130px] rounded-full bg-terracotta-light opacity-20 absolute top-6 md:top-8 right-6 md:right-8"></div>
        <div className="w-16 md:w-20 h-16 md:h-20 rounded-full bg-terracotta opacity-15 absolute bottom-16 md:bottom-20 left-4 md:left-5"></div>
        <div className="flex flex-col items-center gap-2.5 z-10">
          <div className="w-[120px] md:w-[180px] h-[120px] md:h-[180px] rounded-full overflow-hidden border-4 border-terracotta/20">
            <img 
              src="/profile.jpg" 
              alt="Dorcas Ayomide" 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-[10px] md:text-[11px] tracking-[0.06em] text-warm-brown uppercase">Dorcas Ayomide</span>
        </div>
      </div>
    </section>
  )
}
