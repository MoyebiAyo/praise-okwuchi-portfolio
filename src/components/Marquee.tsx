export default function Marquee() {
  const items = [
    'Calendar Management',
    'Inbox Organisation',
    'Task Coordination',
    'Research & Reports',
    'Client Communication',
    'Project Support',
  ]

  return (
    <div className="bg-terracotta overflow-hidden whitespace-nowrap py-3.5">
      <div className="inline-block animate-marquee">
        {[...items, ...items].map((item, idx) => (
          <span key={idx} className="text-[11px] tracking-[0.14em] uppercase text-cream opacity-90 mx-9">
            {item}
            {idx < items.length * 2 - 1 && (
              <span className="inline-block w-1 h-1 rounded-full bg-cream opacity-50 align-middle mx-1"></span>
            )}
          </span>
        ))}
      </div>
    </div>
  )
}
