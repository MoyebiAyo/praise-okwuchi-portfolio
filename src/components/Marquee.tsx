export default function Marquee() {
  const items = [
    'Calendar Management',
    'Email & Inbox Organisation',
    'Travel Planning & Itineraries',
    'AI Automation (Zapier, Make)',
    'Project Coordination (Trello)',
    'CRM Management (Zoho)',
    'Data Entry & Documentation',
    'Online Research & Reports',
    'Canva Design & Formatting',
    'Google Workspace Expert',
  ]

  return (
    <div className="bg-terracotta overflow-hidden whitespace-nowrap py-4 md:py-5">
      <div className="inline-block animate-marquee">
        {[...items, ...items].map((item, idx) => (
          <span key={idx} className="text-xs md:text-sm tracking-[0.14em] uppercase text-cream opacity-90 mx-9">
            {item}
            {idx < items.length * 2 - 1 && (
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-cream opacity-50 align-middle mx-1"></span>
            )}
          </span>
        ))}
      </div>
    </div>
  )
}
