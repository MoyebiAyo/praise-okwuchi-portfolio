const awards = [
  {
    title: 'Nigerian Prize for Leadership',
    role: 'Fellow · 2nd Best Performing Ambassador',
    icon: '🏆'
  },
  {
    title: 'Africa Independent Television',
    role: 'Featured Expert · Post-COVID Development',
    icon: '📺'
  },
  {
    title: 'McKinsey Forward Program',
    role: 'McKinsey & Company Alumni',
    icon: '🎓'
  }
]

export default function Awards() {
  return (
    <section className="border-t border-sand/50 bg-ivory-2/30 py-16 md:py-24 px-6 sm:px-8 md:px-12 lg:px-24 xl:px-32">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <span className="text-xs md:text-sm tracking-[0.1em] uppercase text-orange-400 block mb-4">
            Recognition
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight text-ink">
            Awards & <em className="italic text-orange-400">Fellowships</em>
          </h2>
        </div>

        {/* Single Rectangle Card */}
        <div className="bg-white rounded-sm shadow-lg border border-sand/30 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-sand/30">
            {awards.map((award, idx) => (
              <div 
                key={idx} 
                className="p-6 md:p-8 text-center hover:bg-orange-50/50 transition-colors group"
              >
                <span className="text-4xl md:text-5xl block mb-4 group-hover:scale-110 transition-transform">
                  {award.icon}
                </span>
                <h3 className="font-serif text-lg md:text-xl text-ink mb-2 leading-tight">
                  {award.title}
                </h3>
                <p className="text-orange-400 text-xs md:text-sm font-medium leading-relaxed">
                  {award.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
