'use client'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-sand/50 bg-ivory px-6 sm:px-8 md:px-12 lg:px-24 xl:px-32 py-6 md:py-7 flex flex-col md:flex-row items-center justify-between gap-4">
      <span 
        onClick={scrollToTop}
        className="font-serif text-lg md:text-xl text-ink cursor-pointer hover:text-orange-400 transition-colors"
      >
        Praise
      </span>
      <span className="text-sm md:text-base text-warm-gray">© 2026 Praise Oluebube Okwuchi</span>
      <span className="text-sm md:text-base text-orange-400">Built by Mouse Technologies</span>
    </footer>
  )
}
