'use client'

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your message! Dorcas will get back to you within 24 hours.')
  }

  return (
    <section id="contact" className="border-t border-light-taupe/50 grid grid-cols-1 md:grid-cols-2 bg-cream max-w-7xl mx-auto">
      <div className="px-6 sm:px-8 md:px-12 lg:px-24 py-10 md:py-13 border-b md:border-b-0 md:border-r border-light-taupe/50 bg-warm-beige">
        <h2 className="font-serif text-3xl md:text-[34px] leading-[1.18] tracking-tight text-dark-brown mb-4">
          Ready to free up
          <br />
          your <em className="italic text-terracotta">time?</em>
        </h2>
        <p className="text-sm md:text-base text-warm-brown leading-relaxed mb-6 md:mb-9">
          Book a free 20-minute discovery call or drop a message. I usually respond within 24 hours.
        </p>
        <div className="flex flex-col gap-3">
          <div className="flex items-start gap-3 text-[13px]">
            <span className="text-[10px] tracking-[0.1em] uppercase text-terracotta w-16 flex-shrink-0 pt-px font-medium">
              Email
            </span>
            <span className="text-dark-brown break-all">funmidorcas@zohomail.com</span>
          </div>
          <div className="flex items-start gap-3 text-[13px]">
            <span className="text-[10px] tracking-[0.1em] uppercase text-terracotta w-16 flex-shrink-0 pt-px font-medium">
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
          <div className="flex items-start gap-3 text-[13px]">
            <span className="text-[10px] tracking-[0.1em] uppercase text-terracotta w-16 flex-shrink-0 pt-px font-medium">
              Location
            </span>
            <span className="text-dark-brown">Jos, Nigeria (Remote-first)</span>
          </div>
        </div>
        <button className="mt-6 md:mt-8 inline-flex items-center gap-2 font-sans text-xs font-medium tracking-[0.08em] uppercase border border-terracotta text-terracotta bg-transparent px-5 py-2.5 rounded-sm cursor-pointer hover:bg-terracotta hover:text-cream transition-colors">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 15V3M6 9l6 6 6-6" />
            <path d="M3 18h18v3H3z" />
          </svg>
          Download CV
        </button>
      </div>
      <div className="px-6 sm:px-8 md:px-12 lg:px-24 py-10 md:py-13 flex flex-col gap-5">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] tracking-[0.1em] uppercase text-warm-brown">Your name</label>
            <input
              className="font-sans text-sm md:text-base px-3.5 py-3 bg-cream border border-light-taupe rounded-sm text-dark-brown outline-none w-full focus:border-terracotta transition-colors"
              type="text"
              placeholder="John Doe"
              required
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] tracking-[0.1em] uppercase text-warm-brown">Email address</label>
            <input
              className="font-sans text-sm md:text-base px-3.5 py-3 bg-cream border border-light-taupe rounded-sm text-dark-brown outline-none w-full focus:border-terracotta transition-colors"
              type="email"
              placeholder="you@company.com"
              required
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] tracking-[0.1em] uppercase text-warm-brown">Message</label>
            <textarea
              className="font-sans text-sm md:text-base px-3.5 py-3 bg-cream border border-light-taupe rounded-sm text-dark-brown outline-none w-full h-[90px] resize-none focus:border-terracotta transition-colors"
              placeholder="Tell me what you need help with..."
              required
            />
          </div>
          <button 
            type="submit"
            className="font-sans text-xs font-medium tracking-[0.08em] uppercase bg-terracotta text-cream border-none px-5 py-3.5 rounded-sm cursor-pointer w-full mt-1 hover:bg-terracotta-light transition-colors"
          >
            Send Message →
          </button>
        </form>
      </div>
    </section>
  )
}
