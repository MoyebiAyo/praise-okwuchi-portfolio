'use client'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-light-taupe/50 bg-cream px-6 sm:px-8 md:px-12 lg:px-24 xl:px-32 py-6 md:py-7 flex flex-col md:flex-row items-center justify-between gap-4">
      <span 
        onClick={scrollToTop}
        className="font-serif text-lg md:text-xl text-dark-brown cursor-pointer hover:text-terracotta transition-colors"
      >
        Dorcas
      </span>
      <span className="text-sm md:text-base text-warm-brown">© 2026 Funmiluyi Dorcas Ayomide</span>
      <span className="text-sm md:text-base text-terracotta">Built by Mouse Technologies</span>
    </footer>
  )
}
