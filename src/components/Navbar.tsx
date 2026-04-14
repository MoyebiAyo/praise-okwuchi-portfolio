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
    <nav className="flex items-center justify-between px-6 sm:px-8 md:px-12 lg:px-24 py-4 md:py-7 bg-ivory border-b border-sand/50 sticky top-0 z-50">
      <Link href="/" className="font-serif text-base md:text-lg text-ink tracking-tight hover:text-orange-400 transition-colors">
        Praise <em className="italic text-orange-400">Okwuchi</em>
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
          className="text-xs tracking-[0.08em] uppercase text-warm-gray cursor-pointer hover:text-orange-400 transition-colors flex items-center"
        >
          About
        </li>
        <li 
          onClick={() => {
            if (window.location.pathname !== '/') {
              window.location.href = '/#portfolio'
            } else {
              scrollToSection('portfolio')
            }
          }}
          className="text-xs tracking-[0.08em] uppercase text-warm-gray cursor-pointer hover:text-orange-400 transition-colors flex items-center"
        >
          Portfolio
        </li>
        <li 
          onClick={() => {
            if (window.location.pathname !== '/') {
              window.location.href = '/#skills'
            } else {
              scrollToSection('skills')
            }
          }}
          className="text-xs tracking-[0.08em] uppercase text-warm-gray cursor-pointer hover:text-orange-400 transition-colors flex items-center"
        >
          Skills
        </li>
        <li 
          onClick={() => {
            if (window.location.pathname !== '/') {
              window.location.href = '/#services'
            } else {
              scrollToSection('services')
            }
          }}
          className="text-xs tracking-[0.08em] uppercase text-warm-gray cursor-pointer hover:text-orange-400 transition-colors flex items-center"
        >
          Services
        </li>
        <li 
          onClick={() => {
            if (window.location.pathname !== '/') {
              window.location.href = '/#contact'
            } else {
              scrollToSection('contact')
            }
          }}
          className="text-xs tracking-[0.08em] uppercase text-warm-gray cursor-pointer hover:text-orange-400 transition-colors flex items-center"
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
        className="font-sans text-xs font-medium tracking-[0.08em] uppercase bg-orange-400 text-ivory border-none px-4 md:px-5 py-2 md:py-2.5 rounded-sm cursor-pointer hover:bg-orange-500 transition-colors"
      >
        Hire Me
      </button>
    </nav>
  )
}
