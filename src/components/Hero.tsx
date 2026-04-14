'use client'

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const openWhatsApp = () => {
    const whatsappMessage = `Hi Praise!%0A%0AI'm interested in hiring you for your services.`
    const whatsappURL = `https://wa.me/2349036367106?text=${whatsappMessage}`
    window.open(whatsappURL, '_blank')
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[35vh] md:min-h-[80vh]">
      <div className="px-6 sm:px-8 md:px-12 lg:px-24 pt-12 md:pt-16 pb-8 md:pb-10 flex flex-col justify-start md:justify-center items-start md:items-center text-left md:text-center border-b md:border-b-0 md:border-r border-sand/50 bg-ivory order-2 md:order-1">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.08] tracking-tight text-ink mb-4 md:mb-6">
          Hi, I&apos;m Praise,
          <br />
          a Communication <em className="italic text-orange-400">Specialist</em>
        </h1>
        <p className="text-sm md:text-base lg:text-lg leading-relaxed text-ink max-w-[400px] md:max-w-[500px] mb-6 md:mb-8">
          Strategic Communication Specialist, Public Speaking Trainer, author, and development practitioner with 5 years of experience across corporate communications, NGO leadership, and policy advocacy.
        </p>
        <div className="flex items-center gap-4 md:gap-5">
          <button 
            onClick={openWhatsApp}
            className="inline-flex items-center gap-2.5 font-sans text-xs md:text-sm lg:text-base font-medium tracking-[0.08em] uppercase bg-ink text-ivory border-none px-6 md:px-8 py-3.5 md:py-4 rounded-sm cursor-pointer hover:bg-orange-500 transition-colors"
          >
            Hire Me
            <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5 md:w-4 md:h-4">
              <path d="M2 7h10M8 3l4 4-4 4" />
            </svg>
          </button>
          <a 
            href="https://drive.google.com/file/d/1T69kgaZLPZICwRNekE2k2yywz2LM8WIA/view?usp=drive_link" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs md:text-sm lg:text-base text-ink tracking-[0.04em] underline underline-offset-3 cursor-pointer hover:text-orange-400 transition-colors"
          >
            View CV
          </a>
        </div>
      </div>
      <div className="bg-ivory-2 relative order-1 md:order-2" style={{ minHeight: '400px' }}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 flex items-start justify-center pt-4">
            <img 
              src="/profile.png" 
              alt="Praise Oluebube Okwuchi" 
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center top', minHeight: '110%' }}
            />
          </div>
        </div>
        
        {/* Info card - mobile: on top of image with slight overflow downward */}
        <div className="md:hidden absolute bottom-[-5%] left-4 right-4 z-10">
          <div className="bg-ink p-3">
            <div className="flex gap-3">
              <div className="flex-1 text-center border-r border-ivory/20 pr-3">
                <span className="font-serif text-xl text-orange-400 block leading-none">15K+</span>
                <span className="text-[0.5rem] tracking-[0.12em] uppercase text-ivory/70 mt-1 block">Social Followers Grown for Client</span>
              </div>
              <div className="flex-1 text-center border-r border-ivory/20 pr-3">
                <span className="font-serif text-xl text-orange-400 block leading-none">₦7M+</span>
                <span className="text-[0.5rem] tracking-[0.12em] uppercase text-ivory/70 mt-1 block">Private sector support mobilised</span>
              </div>
              <div className="flex-1 text-center">
                <span className="font-serif text-xl text-orange-400 block leading-none">5+</span>
                <span className="text-[0.5rem] tracking-[0.12em] uppercase text-ivory/70 mt-1 block">Years Exp.</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Info card floating on profile picture - desktop only, outside overflow-hidden container */}
        <div className="hidden md:block absolute bottom-[2%] -left-[2%] bg-ink p-4 w-[200px] shadow-2xl z-10">
          <div className="mb-3 pb-3 border-b border-ivory/20">
            <span className="font-serif text-3xl text-orange-400 block leading-none">15K+</span>
            <span className="text-[0.6rem] tracking-[0.12em] uppercase text-ivory/70 mt-1 block">Social Followers Grown for Client</span>
          </div>
          <div className="mb-3 pb-3 border-b border-ivory/20">
            <span className="font-serif text-3xl text-orange-400 block leading-none">₦7M+</span>
            <span className="text-[0.6rem] tracking-[0.12em] uppercase text-ivory/70 mt-1 block">Private sector support mobilised</span>
          </div>
          <div>
            <span className="font-serif text-3xl text-orange-400 block leading-none">5+</span>
            <span className="text-[0.6rem] tracking-[0.12em] uppercase text-ivory/70 mt-1 block">Years Experience</span>
          </div>
        </div>
      </div>
    </section>
  )
}
