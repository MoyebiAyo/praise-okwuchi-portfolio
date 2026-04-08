const skills = [
  { label: 'Administrative Support', level: 'Expert', percent: 95 },
  { label: 'Project Coordination (Trello)', level: 'Advanced', percent: 90 },
  { label: 'CRM Management (Zoho)', level: 'Advanced', percent: 88 },
  { label: 'Google Workspace', level: 'Expert', percent: 95 },
  { label: 'AI Automation (Zapier, Make)', level: 'Intermediate', percent: 80 },
  { label: 'Canva Design', level: 'Advanced', percent: 85 },
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
        <p className="text-base md:text-lg leading-relaxed text-soft-taupe mb-4">
          I&apos;m Dorcas Ayomide Funmiluyi — a detail-oriented Virtual Assistant based in Jos, Plateau State. I hold a Bachelor of Education in Economics from the University of Ibadan and am certified in Virtual Assistance from TechCrush Bootcamp.
        </p>
        <p className="text-base md:text-lg leading-relaxed text-soft-taupe">
          I specialize in boosting productivity and operational efficiency through administrative management, project coordination, and AI-powered automation. My commitment is to deliver high-quality work promptly, enabling you to optimize workflow and achieve your business goals with greater ease.
        </p>
        
        {/* Certificate Display */}
        <div className="mt-6 md:mt-8">
          <p className="text-xs tracking-[0.1em] uppercase text-terracotta-light mb-3">Certified Virtual Assistant</p>
          <div className="relative overflow-hidden rounded-sm border border-medium-brown bg-cream/5">
            <img 
              src="/certification%20dorcas.jpeg" 
              alt="Virtual Assistant Certification"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
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
