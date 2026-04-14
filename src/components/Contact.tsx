'use client'

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Get form data
    const formData = new FormData(e.target as HTMLFormElement)
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const message = formData.get('message') as string
    
    // Create WhatsApp message
    const whatsappMessage = `Hi Praise!%0A%0AI would like to book a session.%0A%0AName: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${message}`
    
    // Open WhatsApp with the message
    const whatsappURL = `https://wa.me/2349036367106?text=${whatsappMessage}`
    window.open(whatsappURL, '_blank')
  }

  return (
    <section id="contact" className="border-t border-sand/50 grid grid-cols-1 md:grid-cols-2 bg-ivory">
      <div className="px-6 sm:px-8 md:px-12 lg:px-24 xl:px-32 py-12 md:py-16 border-b md:border-b-0 md:border-r border-sand/50 bg-ivory-2/30">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.18] tracking-tight text-ink mb-5 md:mb-6">
          Let&apos;s create
          <br />
          something <em className="italic text-orange-400">impactful.</em>
        </h2>
        <p className="text-base md:text-lg text-warm-brown leading-relaxed mb-8 md:mb-10">
          Book a consultation session or drop a message for strategic communication services, public speaking training, or event moderation. I usually respond within 24 hours.
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-4 text-sm md:text-base">
            <span className="text-xs tracking-[0.1em] uppercase text-orange-400 w-20 flex-shrink-0 pt-1 font-medium">
              Email
            </span>
            <a href="mailto:opraiseoluebube@gmail.com" className="text-ink hover:text-orange-400 transition-colors break-all">
              opraiseoluebube@gmail.com
            </a>
          </div>
          <div className="flex items-start gap-4 text-sm md:text-base">
            <span className="text-xs tracking-[0.1em] uppercase text-orange-400 w-20 flex-shrink-0 pt-1 font-medium">
              Phone
            </span>
            <a href="tel:+2349036367106" className="text-ink hover:text-orange-400 transition-colors">
              +234 903 636 7106
            </a>
          </div>
          <div className="flex items-start gap-4 text-sm md:text-base">
            <span className="text-xs tracking-[0.1em] uppercase text-orange-400 w-20 flex-shrink-0 pt-1 font-medium">
              LinkedIn
            </span>
            <a 
              href="https://www.linkedin.com/in/praise-okwuchi/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-ink hover:text-orange-400 transition-colors break-all"
            >
              linkedin.com/in/praise-okwuchi
            </a>
          </div>
          <div className="flex items-start gap-4 text-sm md:text-base">
            <span className="text-xs tracking-[0.1em] uppercase text-orange-400 w-20 flex-shrink-0 pt-1 font-medium">
              Instagram
            </span>
            <a 
              href="https://www.instagram.com/opraiseoluebube/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-ink hover:text-orange-400 transition-colors break-all"
            >
              @opraiseoluebube
            </a>
          </div>
          <div className="flex items-start gap-4 text-sm md:text-base">
            <span className="text-xs tracking-[0.1em] uppercase text-orange-400 w-20 flex-shrink-0 pt-1 font-medium">
              Location
            </span>
            <span className="text-ink">Globally Accessible</span>
          </div>
        </div>
        <a 
          href="https://drive.google.com/file/d/1T69kgaZLPZICwRNekE2k2yywz2LM8WIA/view?usp=drive_link" 
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 md:mt-10 inline-flex items-center gap-2 font-sans text-sm font-medium tracking-[0.08em] uppercase border border-orange-400 text-orange-400 bg-transparent px-6 py-3 rounded-sm cursor-pointer hover:bg-orange-400 hover:text-ivory transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          View CV
        </a>
      </div>
      <div className="px-6 sm:px-8 md:px-12 lg:px-24 xl:px-32 py-12 md:py-16 flex flex-col gap-6">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs tracking-[0.1em] uppercase text-warm-brown">Your name</label>
            <input
              name="name"
              className="font-sans text-base md:text-lg px-4 py-3.5 bg-ivory border border-sand rounded-sm text-ink outline-none w-full focus:border-orange-400 transition-colors"
              type="text"
              placeholder="John Doe"
              required
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs tracking-[0.1em] uppercase text-warm-brown">Email address</label>
            <input
              name="email"
              className="font-sans text-base md:text-lg px-4 py-3.5 bg-ivory border border-sand rounded-sm text-ink outline-none w-full focus:border-orange-400 transition-colors"
              type="email"
              placeholder="you@company.com"
              required
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs tracking-[0.1em] uppercase text-warm-brown">Message</label>
            <textarea
              name="message"
              className="font-sans text-base md:text-lg px-4 py-3.5 bg-cream border border-light-taupe rounded-sm text-dark-brown outline-none w-full h-[120px] resize-none focus:border-terracotta transition-colors"
              placeholder="Tell me what you need help with..."
              required
            />
          </div>
          <button 
            type="submit"
            className="font-sans text-sm font-medium tracking-[0.08em] uppercase bg-orange-400 text-ivory border-none px-6 py-4 rounded-sm cursor-pointer w-full mt-2 hover:bg-orange-500 transition-colors"
          >
            Send Message →
          </button>
        </form>
      </div>
    </section>
  )
}
