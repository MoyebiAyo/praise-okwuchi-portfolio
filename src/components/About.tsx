'use client'

const skills = [
  { label: 'Strategic Communications & Media Relations', level: 'Expert', percent: 95 },
  { label: 'Public Speaking & Moderation', level: 'Expert', percent: 95 },
  { label: 'Digital Advocacy & Social Media Strategy', level: 'Advanced', percent: 90 },
  { label: 'Research & Data Storytelling', level: 'Advanced', percent: 88 },
  { label: 'Project & Operations Management', level: 'Advanced', percent: 85 },
  { label: 'Branding & Content Creation', level: 'Advanced', percent: 85 },
  { label: 'Cross-cultural Collaboration & Leadership', level: 'Expert', percent: 92 },
]

const tools = [
  { name: 'Canva', icon: '/logos/canva_official.svg' },
  { name: 'CapCut', icon: '/logos/capcut_official.svg' },
  { name: 'Trello', icon: '/logos/trello.svg' },
  { name: 'Buffer', icon: '/logos/buffer.svg' },
  { name: 'Hootsuite', icon: '/logos/hootsuite.svg' },
  { name: 'Mailchimp', icon: '/logos/mailchimp.svg' },
  { name: 'Brevo', icon: '/logos/brevo.svg' },
  { name: 'Substack', icon: '/logos/substack.svg' },
  { name: 'SurveyMonkey', icon: '/logos/surveymonkey.svg' },
  { name: 'Slack', icon: '/logos/slack.svg' },
]

export default function About() {
  return (
    <section id="about" className="border-t border-sand/50 bg-ink grid grid-cols-1 md:grid-cols-2">
      <div className="px-6 sm:px-8 md:px-12 lg:px-24 xl:px-32 py-12 md:py-16 border-b md:border-b-0 md:border-r border-ink-soft">
        <p className="text-xs md:text-sm tracking-[0.1em] uppercase text-orange-400 mb-5 md:mb-6">02 — About</p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.3] text-ivory tracking-tight mb-5 md:mb-6">
          Translating Strategy
          <br />
          into Actionable <em className="italic text-orange-300">Impact.</em>
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-warm-gray mb-4">
          I&apos;m Praise Oluebube Okwuchi — a Strategic Communication Specialist, Public Speaking Trainer, author, and development practitioner based in Lagos, Nigeria. I hold a Bachelor&apos;s degree in French Language (Alex Ekwueme Federal University) and a Master&apos;s degree in Public Management (Babcock University).
        </p>
        <p className="text-base md:text-lg leading-relaxed text-warm-gray mb-4">
          I serve as Global Communication Executive at Mission Enablers International and Children Empowerment Funds, and am the Founder of Peridot School of Languages. I am President of Tamar&apos;s City, where I lead the Women Empowering Girls Program — a mentorship initiative for secondary school girls.
        </p>
        <p className="text-base md:text-lg leading-relaxed text-warm-gray">
          A Fellow of the Nigerian Prize for Leadership and YALI Alumni, I&apos;ve represented the Southeast at UN Model Assembly panels, appeared on Africa Independent Television (AIT), and presented at the Young Women Leaders Programme 2023 (LEAP Africa).
        </p>
        
        {/* Certificate */}
        <div className="mt-8 md:mt-10">
          <p className="text-xs tracking-[0.08em] uppercase text-orange-400 mb-4 font-medium">
            Certification
          </p>
          <div 
            className="relative bg-white rounded-sm overflow-hidden shadow-lg"
            onContextMenu={(e) => e.preventDefault()}
            style={{ userSelect: 'none' }}
          >
            <img
              src="/certificate-leap.png"
              alt="LEAP Africa EDC Certificate"
              className="w-full h-auto object-contain"
            />
            {/* Transparent overlay to prevent right-click save */}
            <div className="absolute inset-0 bg-transparent" />
          </div>
          <p className="text-sm text-warm-gray mt-4 italic">
            LEAP Africa Entrepreneurial Development Course (EDC) Certificate
          </p>
        </div>
      </div>
      <div className="px-6 sm:px-8 md:px-12 lg:px-24 xl:px-32 py-12 md:py-16 flex flex-col gap-6 md:gap-8">
        {skills.map((skill, idx) => (
          <div key={idx} className="flex flex-col gap-3">
            <div className="flex justify-between text-sm md:text-base text-ivory tracking-[0.04em]">
              <span>{skill.label}</span>
              <span className="text-orange-400 font-medium">{skill.level}</span>
            </div>
            <div className="h-2 md:h-2.5 bg-ink-soft rounded-sm overflow-hidden">
              <div className="h-full bg-orange-400 rounded-sm" style={{ width: `${skill.percent}%` }}></div>
            </div>
          </div>
        ))}

        {/* Tools & Software */}
        <div className="mt-8 md:mt-10 pt-8 md:pt-10 border-t border-ink-soft">
          <h3 className="text-sm md:text-base text-ivory tracking-[0.08em] uppercase mb-4 md:mb-6 font-medium">
            Tools & Software
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 md:gap-4">
            {tools.map((tool, idx) => (
              <div 
                key={idx} 
                className="flex flex-col items-center justify-center p-3 md:p-4 bg-ink-soft/50 rounded-sm hover:bg-ink-soft transition-colors group"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 mb-2 flex items-center justify-center">
                  <img 
                    src={tool.icon} 
                    alt={tool.name}
                    className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <span className="text-xs text-ivory/80 text-center leading-tight">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
