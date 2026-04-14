'use client'

const campaigns = [
  {
    type: 'Instagram Campaign',
    title: 'Girls Hygiene Project',
    description: 'A campaign focused on promoting hygiene awareness among young girls',
    url: 'https://www.instagram.com/reel/DDJcKjHNMVd/?igsh=MWxtc2t6NnRybGd5OA==',
    embedUrl: 'https://www.instagram.com/reel/DDJcKjHNMVd/embed',
    icon: '📸'
  },
  {
    type: 'Instagram Campaign',
    title: 'Love Drive Towards Education Campaign',
    description: 'Educational advocacy campaign driving community engagement',
    url: 'https://www.instagram.com/p/DU2vbQxDAAx/?igsh=ZHFpZGl1eWw3cDZj',
    embedUrl: 'https://www.instagram.com/p/DU2vbQxDAAx/embed',
    icon: '💝'
  }
]

const documentaries = [
  {
    type: 'Documentary',
    title: 'Benin Republic Mission Trip',
    description: 'Coordinated the documentary flow for Benin Republic Mission Trip',
    url: 'https://youtu.be/B7XGBaX-Zk4?si=IsI4ub65eus4rYGZ',
    videoId: 'B7XGBaX-Zk4',
    icon: '🎬'
  },
  {
    type: 'Anniversary Documentary',
    title: 'MEA 7th Year Anniversary',
    description: 'As the communications executive, I lead the team and ensured the idea was executed and well documented',
    url: 'https://youtu.be/eRuwssGxGCk?si=eck4S5vDTrOQLBsF',
    videoId: 'eRuwssGxGCk',
    icon: '🎥'
  }
]

export default function CampaignStrategies() {
  return (
    <section className="border-t border-sand/50 bg-ivory py-16 md:py-24 px-6 sm:px-8 md:px-12 lg:px-24 xl:px-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <span className="text-xs md:text-sm tracking-[0.1em] uppercase text-orange-400 block mb-4">
            04 — Campaign Strategies
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight text-ink">
            Campaigns & <em className="italic text-orange-400">Documentaries</em>
          </h2>
        </div>

        {/* Social Media Campaigns */}
        <div className="mb-16 md:mb-20">
          <h3 className="font-sans text-sm tracking-[0.08em] uppercase text-warm-gray mb-6 md:mb-8">
            Social Media Campaigns
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {campaigns.map((campaign, idx) => (
              <div key={idx} className="group bg-ivory-2 border border-sand/50 rounded-sm overflow-hidden hover:shadow-lg transition-all duration-300">
                {/* Instagram Embed */}
                <div className="relative bg-white">
                  <iframe
                    src={campaign.embedUrl}
                    title={campaign.title}
                    className="w-full border-0"
                    style={{ minHeight: '500px' }}
                    allowFullScreen
                  />
                </div>
                
                {/* Content */}
                <div className="p-5 md:p-6">
                  <span className="text-xs tracking-[0.08em] uppercase text-orange-400 font-medium">
                    {campaign.type}
                  </span>
                  <h4 className="font-serif text-xl md:text-2xl text-ink mt-2 mb-2">
                    {campaign.title}
                  </h4>
                  <p className="text-sm text-warm-gray leading-relaxed">
                    {campaign.description}
                  </p>
                  <a
                    href={campaign.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-sm text-orange-400 hover:text-orange-500 transition-colors font-medium"
                  >
                    View on Instagram
                    <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                      <path d="M2 7h10M8 3l4 4-4 4" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Documentaries */}
        <div>
          <h3 className="font-sans text-sm tracking-[0.08em] uppercase text-warm-gray mb-6 md:mb-8">
            Documentary Projects
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {documentaries.map((doc, idx) => (
              <div key={idx} className="group">
                {/* YouTube Embed - Always visible */}
                <div className="relative aspect-video bg-ink rounded-sm overflow-hidden shadow-xl">
                  <iframe
                    src={`https://www.youtube.com/embed/${doc.videoId}`}
                    title={doc.title}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                
                {/* Content */}
                <div className="p-5 md:p-6">
                  <span className="text-xs tracking-[0.08em] uppercase text-orange-400 font-medium">
                    {doc.type}
                  </span>
                  <h4 className="font-serif text-xl md:text-2xl text-ink mt-2 mb-2">
                    {doc.title}
                  </h4>
                  <p className="text-sm text-warm-gray leading-relaxed">
                    {doc.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
