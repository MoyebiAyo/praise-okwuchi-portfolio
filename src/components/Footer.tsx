'use client'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-light-taupe/50 bg-cream px-6 sm:px-8 md:px-12 lg:px-24 py-5 md:py-5.5 flex flex-col md:flex-row items-center justify-between gap-3 max-w-7xl mx-auto">
      <span 
        onClick={scrollToTop}
        className="font-serif text-base text-dark-brown cursor-pointer hover:text-terracotta transition-colors"
      >
        Dorcas
      </span>
      <span className="text-xs md:text-sm text-warm-brown">© 2026 Funmiluyi Dorcas Ayomide</span>
      <span className="text-xs md:text-sm text-terracotta">Built by Mouse Technologies</span>
    </footer>
  )
}
