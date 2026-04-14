'use client'

import Link from 'next/link'

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="flex items-center justify-between px-6 sm:px-8 md:px-12 lg:px-24 py-4 md:py-7 bg-cream border-b border-light-taupe/50 sticky top-0 z-50">
      <Link href="/" className="font-serif text-base md:text-lg text-dark-brown tracking-tight hover:text-terracotta transition-colors">
        Dorcas <em className="italic text-terracotta">Ayomide</em>
      </Link>
      <ul className="hidden md:flex items-center gap-6 lg:gap-9 list-none">
        <li 
          onClick={() => {
            if (window.location.pathname !== '/') {
              window.location.href = '/#about'
            } else {
              scrollToSection('about')
            }
          }}
          className="text-xs tracking-[0.08em] uppercase text-warm-brown cursor-pointer hover:text-dark-brown transition-colors flex items-center"
        >
          About
        </li>
        <li 
          onClick={() => {
            if (window.location.pathname !== '/') {
              window.location.href = '/#services'
            } else {
              scrollToSection('services')
            }
          }}
          className="text-xs tracking-[0.08em] uppercase text-warm-brown cursor-pointer hover:text-dark-brown transition-colors flex items-center"
        >
          Services
        </li>
        <li className="flex items-center">
          <Link 
            href="/portfolio"
            className="text-xs tracking-[0.08em] uppercase text-warm-brown hover:text-dark-brown transition-colors"
          >
            Portfolio
          </Link>
        </li>
        <li 
          onClick={() => {
            if (window.location.pathname !== '/') {
              window.location.href = '/#contact'
            } else {
              scrollToSection('contact')
            }
          }}
          className="text-xs tracking-[0.08em] uppercase text-warm-brown cursor-pointer hover:text-dark-brown transition-colors flex items-center"
        >
          Contact
        </li>
      </ul>
      <button 
        onClick={() => {
          if (window.location.pathname !== '/') {
            window.location.href = '/#contact'
          } else {
            scrollToSection('contact')
          }
        }}
        className="font-sans text-xs font-medium tracking-[0.08em] uppercase bg-terracotta text-cream border-none px-4 md:px-5 py-2 md:py-2.5 rounded-sm cursor-pointer hover:bg-terracotta-light transition-colors"
      >
        Hire Me
      </button>
    </nav>
  )
}
