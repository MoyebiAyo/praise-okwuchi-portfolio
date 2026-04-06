const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M8 2v4M16 2v4M3 10h18" />
      </svg>
    ),
    name: 'Calendar Management',
    desc: 'Scheduling, rescheduling, and protecting your time so you focus on high-leverage work only.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" />
        <path d="m22 6-10 7L2 6" />
      </svg>
    ),
    name: 'Inbox & Correspondence',
    desc: 'Email triage, drafting responses, and keeping communications tight and professional.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
    name: 'Task & Project Support',
    desc: 'Tracking deliverables, chasing follow-ups, and keeping projects moving without your oversight.',
  },
]

export default function Services() {
  return (
    <section id="services" className="border-t border-light-taupe/50">
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between px-6 sm:px-8 md:px-12 lg:px-24 xl:px-32 pt-10 md:pt-14 pb-6 md:pb-8 gap-4">
        <span className="text-xs md:text-sm tracking-[0.1em] uppercase text-terracotta">01 — Services</span>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight text-dark-brown">What I do</h2>
        <span className="text-base md:text-lg text-warm-brown cursor-pointer underline underline-offset-3 hover:text-dark-brown transition-colors">
          View all →
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-light-taupe/50">
        {services.map((svc, idx) => (
          <div
            key={idx}
            className="px-6 sm:px-8 md:px-12 lg:px-24 xl:px-32 py-8 md:py-10 pb-9 md:pb-12 border-b md:border-b-0 md:border-r border-light-taupe/50 bg-cream hover:bg-warm-beige/50 transition-colors last:border-r-0 last:border-b-0"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 border border-light-taupe rounded-sm flex items-center justify-center mb-6 bg-warm-beige">
              <div className="w-5 h-5 md:w-6 md:h-6 stroke-terracotta">{svc.icon}</div>
            </div>
            <p className="text-base md:text-lg font-medium text-dark-brown mb-3">{svc.name}</p>
            <p className="text-sm md:text-base leading-relaxed text-warm-brown">{svc.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
