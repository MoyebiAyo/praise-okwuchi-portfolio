'use client'

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[35vh] md:min-h-[80vh]">
      <div className="px-6 sm:px-8 md:px-12 lg:px-24 pt-12 md:pt-16 pb-8 md:pb-10 flex flex-col justify-start md:justify-center items-start md:items-center text-left md:text-center border-b md:border-b-0 md:border-r border-light-taupe/50 bg-cream order-2 md:order-1">
        <p className="text-xs md:text-sm lg:text-base tracking-[0.12em] uppercase text-terracotta mb-4 md:mb-6">
          Virtual Assistant — Jos, Nigeria
        </p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.08] tracking-tight text-dark-brown mb-4 md:mb-6">
          Hi, I&apos;m Dorcas,
          <br />
          a Virtual <em className="italic text-terracotta">Assistant</em>
        </h1>
        <p className="text-sm md:text-base lg:text-lg leading-relaxed text-warm-brown max-w-[400px] md:max-w-[500px] mb-6 md:mb-8">
          I help CEOs, Founders, and HR professionals streamline operations, boost productivity, and reclaim their time through expert administrative support and AI-powered automation.
        </p>
        <div className="flex items-center gap-4 md:gap-5">
          <button 
            onClick={scrollToContact}
            className="inline-flex items-center gap-2.5 font-sans text-xs md:text-sm lg:text-base font-medium tracking-[0.08em] uppercase bg-dark-brown text-cream border-none px-6 md:px-8 py-3.5 md:py-4 rounded-sm cursor-pointer hover:bg-medium-brown transition-colors"
          >
            Work With Me
            <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5 md:w-4 md:h-4">
              <path d="M2 7h10M8 3l4 4-4 4" />
            </svg>
          </button>
          <a 
            href="/Funmi-Dorcas-VA-Resume.pdf" 
            download="Funmi-Dorcas-VA-Resume.pdf"
            className="text-xs md:text-sm lg:text-base text-warm-brown tracking-[0.04em] underline underline-offset-3 cursor-pointer hover:text-dark-brown transition-colors"
          >
            Download CV
          </a>
        </div>
      </div>
      <div className="bg-warm-beige relative overflow-hidden order-1 md:order-2" style={{ minHeight: '250px' }}>
        <div className="absolute inset-0 flex items-start justify-center pt-4">
          <img 
            src="/profile.png" 
            alt="Dorcas Ayomide" 
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center top', minHeight: '110%' }}
          />
        </div>
      </div>
    </section>
  )
}
