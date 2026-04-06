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
    const whatsappMessage = `Hi Dorcas!%0A%0AName: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${message}`
    
    // Open WhatsApp with the message
    const whatsappURL = `https://wa.me/2347063406776?text=${whatsappMessage}`
    window.open(whatsappURL, '_blank')
  }

  return (
    <section id="contact" className="border-t border-light-taupe/50 grid grid-cols-1 md:grid-cols-2 bg-cream">
      <div className="px-6 sm:px-8 md:px-12 lg:px-24 xl:px-32 py-12 md:py-16 border-b md:border-b-0 md:border-r border-light-taupe/50 bg-warm-beige">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.18] tracking-tight text-dark-brown mb-5 md:mb-6">
          Ready to free up
          <br />
          your <em className="italic text-terracotta">time?</em>
        </h2>
        <p className="text-base md:text-lg text-warm-brown leading-relaxed mb-8 md:mb-10">
          Book a free 20-minute discovery call or drop a message. I usually respond within 24 hours.
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-4 text-sm md:text-base">
            <span className="text-xs tracking-[0.1em] uppercase text-terracotta w-20 flex-shrink-0 pt-1 font-medium">
              Email
            </span>
            <span className="text-dark-brown break-all">funmidorcas@zohomail.com</span>
          </div>
          <div className="flex items-start gap-4 text-sm md:text-base">
            <span className="text-xs tracking-[0.1em] uppercase text-terracotta w-20 flex-shrink-0 pt-1 font-medium">
              LinkedIn
            </span>
            <a 
              href="https://linkedin.com/in/dorcasayomide" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-dark-brown hover:text-terracotta transition-colors break-all"
            >
              linkedin.com/in/dorcasayomide
            </a>
          </div>
          <div className="flex items-start gap-4 text-sm md:text-base">
            <span className="text-xs tracking-[0.1em] uppercase text-terracotta w-20 flex-shrink-0 pt-1 font-medium">
              Location
            </span>
            <span className="text-dark-brown">Jos, Nigeria (Remote-first)</span>
          </div>
        </div>
        <button className="mt-8 md:mt-10 inline-flex items-center gap-2 font-sans text-sm font-medium tracking-[0.08em] uppercase border border-terracotta text-terracotta bg-transparent px-6 py-3 rounded-sm cursor-pointer hover:bg-terracotta hover:text-cream transition-colors">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 15V3M6 9l6 6 6-6" />
            <path d="M3 18h18v3H3z" />
          </svg>
          Download CV
        </button>
      </div>
      <div className="px-6 sm:px-8 md:px-12 lg:px-24 xl:px-32 py-12 md:py-16 flex flex-col gap-6">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs tracking-[0.1em] uppercase text-warm-brown">Your name</label>
            <input
              name="name"
              className="font-sans text-base md:text-lg px-4 py-3.5 bg-cream border border-light-taupe rounded-sm text-dark-brown outline-none w-full focus:border-terracotta transition-colors"
              type="text"
              placeholder="John Doe"
              required
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs tracking-[0.1em] uppercase text-warm-brown">Email address</label>
            <input
              name="email"
              className="font-sans text-base md:text-lg px-4 py-3.5 bg-cream border border-light-taupe rounded-sm text-dark-brown outline-none w-full focus:border-terracotta transition-colors"
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
            className="font-sans text-sm font-medium tracking-[0.08em] uppercase bg-terracotta text-cream border-none px-6 py-4 rounded-sm cursor-pointer w-full mt-2 hover:bg-terracotta-light transition-colors"
          >
            Send Message →
          </button>
        </form>
      </div>
    </section>
  )
}
