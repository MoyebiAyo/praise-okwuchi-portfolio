const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    name: 'Strategic Communication Consulting',
    desc: 'Develop comprehensive communication strategies that align with organizational goals, enhance brand visibility, and drive measurable impact across traditional and digital media platforms.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
        <path d="M19 10v1a7 7 0 01-14 0v-1M12 18v4M8 22h8" />
      </svg>
    ),
    name: 'Public Speaking Training',
    desc: 'Empower professionals and organizations with effective public speaking skills, presentation techniques, and confident communication strategies for maximum audience engagement.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <path d="M16 2v4M8 2v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
      </svg>
    ),
    name: 'Event Moderation / MC Services',
    desc: 'Professional event hosting and moderation with dynamic communication style, quick thinking, and exceptional ability to connect with diverse audiences and create engaging atmospheres.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
    name: 'Content Development & Copywriting',
    desc: 'Craft compelling, targeted content for digital and traditional media. From strategic messaging to stakeholder engagement materials that drive awareness and collaboration.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    name: 'Development Communication Advisory',
    desc: 'Leverage a decade of experience in NGO leadership, policy advocacy, and development practice to create impactful communication campaigns that advance organizational missions.',
  },
]

export default function Services() {
  return (
    <section id="services" className="border-t border-sand/50">
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between px-6 sm:px-8 md:px-12 lg:px-24 xl:px-32 pt-10 md:pt-14 pb-6 md:pb-8 gap-4">
        <span className="text-xs md:text-sm tracking-[0.1em] uppercase text-orange-400">04 — Services</span>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight text-ink">What I Offer</h2>
        <span className="text-base md:text-lg text-warm-gray cursor-pointer underline underline-offset-3 hover:text-orange-400 transition-colors">
          Book a Session →
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-sand/50">
        {services.map((svc, idx) => (
          <div
            key={idx}
            className="px-6 sm:px-8 md:px-12 lg:px-24 xl:px-32 py-8 md:py-10 pb-9 md:pb-12 border-b md:border-b-0 md:border-r border-sand/50 bg-ivory hover:bg-ivory-2/50 transition-colors last:border-r-0 last:border-b-0"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 border border-sand rounded-sm flex items-center justify-center mb-6 bg-ivory-2/30">
              <div className="w-5 h-5 md:w-6 md:h-6 stroke-orange-400">{svc.icon}</div>
            </div>
            <p className="text-base md:text-lg font-medium text-ink mb-3">{svc.name}</p>
            <p className="text-sm md:text-base leading-relaxed text-warm-brown">{svc.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
