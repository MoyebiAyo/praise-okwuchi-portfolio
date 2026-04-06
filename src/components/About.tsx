const skills = [
  { label: 'Calendar & Scheduling', level: 'Expert', percent: 95 },
  { label: 'Email Management', level: 'Expert', percent: 90 },
  { label: 'Research & Reporting', level: 'Proficient', percent: 80 },
  { label: 'Project Coordination', level: 'Proficient', percent: 75 },
  { label: 'Client Communication', level: 'Expert', percent: 92 },
]

export default function About() {
  return (
    <section id="about" className="border-t border-light-taupe/50 bg-dark-brown grid grid-cols-1 md:grid-cols-2">
      <div className="px-6 sm:px-8 md:px-12 lg:px-24 xl:px-32 py-12 md:py-16 border-b md:border-b-0 md:border-r border-medium-brown">
        <p className="text-xs md:text-sm tracking-[0.1em] uppercase text-terracotta mb-5 md:mb-6">02 — About</p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.3] text-cream tracking-tight mb-5 md:mb-6">
          Organized so you
          <br />
          don&apos;t have to <em className="italic text-terracotta-light">be.</em>
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-soft-taupe">
          I&apos;m Dorcas — a Virtual Assistant helping busy professionals reclaim their time and headspace. Based in Jos, I work remotely with clients across Nigeria and beyond, stepping in so you can step back from the noise.
        </p>
      </div>
      <div className="px-6 sm:px-8 md:px-12 lg:px-24 xl:px-32 py-12 md:py-16 flex flex-col gap-6 md:gap-8">
        {skills.map((skill, idx) => (
          <div key={idx} className="flex flex-col gap-3">
            <div className="flex justify-between text-sm md:text-base text-soft-taupe tracking-[0.04em]">
              <span>{skill.label}</span>
              <span className="text-terracotta-light">{skill.level}</span>
            </div>
            <div className="h-1 md:h-1.5 bg-medium-brown rounded-sm overflow-hidden">
              <div className="h-full bg-terracotta rounded-sm" style={{ width: `${skill.percent}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
