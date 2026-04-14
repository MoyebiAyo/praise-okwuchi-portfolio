'use client'

import { useState, useRef } from 'react'

const testimonials = [
  {
    quote: "Praise demonstrated a remarkable ability to connect with the audience. Her engaging presence and dynamic communication style drew attendees in, creating an atmosphere of excitement and interest. Her quick thinking and ability to engage the crowd showcased her exceptional talent as a host.",
    name: "Esther Ajudeonu",
    role: "Convener, African Youth Mentorship Symposium"
  },
  {
    quote: "I had the pleasure of working with Praise Okwuchi at African International Trade and Commerce Research, where she served as an Administrative Assistant. Praise consistently demonstrated exceptional organizational skills, attention to detail, and a proactive approach to problem-solving. Her ability to manage multiple tasks efficiently and her dedication to supporting our team were invaluable. Praise's professionalism and positive attitude make her a standout colleague, and I am confident she will be a great asset in any future endeavors.",
    name: "Brendan Ugwu Esq.",
    role: "International Consultant: International Trade Centre"
  },
  {
    quote: "Ms. Okwuchi is an exceptional individual decked with values and virtues that make everything committed to her care productive. Praise is Multi talented and understands the dynamics of Corporate Communications and she is a very good add to any organisation she works.",
    name: "Moses Adelani",
    role: "Professional Colleague"
  }
]

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [startX, setStartX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, testimonials.length - 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  // Touch/Mouse handlers for sliding
  const handleStart = (clientX: number) => {
    setIsDragging(true)
    setStartX(clientX)
  }

  const handleMove = (clientX: number) => {
    if (!isDragging) return
    const diff = startX - clientX
    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentIndex < testimonials.length - 1) {
        nextTestimonial()
        setIsDragging(false)
      } else if (diff < 0 && currentIndex > 0) {
        prevTestimonial()
        setIsDragging(false)
      }
    }
  }

  const handleEnd = () => {
    setIsDragging(false)
  }

  const onTouchStart = (e: React.TouchEvent) => {
    handleStart(e.touches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX)
  }

  const onMouseDown = (e: React.MouseEvent) => {
    handleStart(e.clientX)
  }

  const onMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX)
  }

  return (
    <section className="border-t border-sand/50 py-12 md:py-16 lg:py-20 px-6 sm:px-8 md:px-12 lg:px-24 xl:px-32 bg-ivory">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-start gap-8 md:gap-16 mb-8 md:mb-12">
          <span className="text-xs md:text-sm tracking-[0.1em] uppercase text-orange-400 flex-shrink-0">Testimonials</span>
          
          <div 
            ref={containerRef}
            className="flex-1 relative overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={handleEnd}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="w-full flex-shrink-0 px-2">
                  <p className="font-sans text-base md:text-lg lg:text-xl leading-relaxed text-ink mb-5 md:mb-6 font-light">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <p className="text-xs md:text-sm text-warm-gray tracking-[0.08em] uppercase mb-1 font-medium">
                    — {testimonial.name}
                  </p>
                  <p className="text-xs text-sand-dark tracking-[0.04em] font-light">
                    {testimonial.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          <button 
            onClick={prevTestimonial}
            disabled={currentIndex === 0}
            className="w-10 h-10 rounded-full border border-sand flex items-center justify-center text-orange-400 hover:bg-orange-400 hover:text-ivory transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            ←
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  idx === currentIndex ? 'bg-orange-400' : 'bg-sand'
                }`}
              />
            ))}
          </div>
          <button 
            onClick={nextTestimonial}
            disabled={currentIndex === testimonials.length - 1}
            className="w-10 h-10 rounded-full border border-sand flex items-center justify-center text-orange-400 hover:bg-orange-400 hover:text-ivory transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}
