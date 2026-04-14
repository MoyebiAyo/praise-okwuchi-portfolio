'use client'

import { useState, useRef } from 'react'

export default function VideoTestimonial() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section className="border-t border-sand/50 bg-ink py-16 md:py-24 px-6 sm:px-8 md:px-12 lg:px-24 xl:px-32">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-xs md:text-sm tracking-[0.1em] uppercase text-orange-400 block mb-4">
            Video Testimonial
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ivory tracking-tight">
            Hear from <em className="italic text-orange-400">clients</em>
          </h2>
        </div>

        {/* Video Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Video Wrapper with decorative border */}
          <div className="relative bg-charcoal rounded-sm overflow-hidden shadow-2xl">
            {/* Video */}
            <video
              ref={videoRef}
              className="w-full aspect-video object-cover"
              src="/testimonial-ben-amonung.mp4"
              poster="/profile.png"
              onEnded={() => setIsPlaying(false)}
            />
            
            {/* Custom Play Button Overlay */}
            {!isPlaying && (
              <button
                onClick={togglePlay}
                className="absolute inset-0 flex items-center justify-center bg-ink/40 hover:bg-ink/30 transition-colors group"
              >
                <div className="relative">
                  {/* Outer ring */}
                  <div className="absolute inset-0 rounded-full bg-orange-400/20 animate-ping" />
                  {/* Play button */}
                  <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-orange-400 flex items-center justify-center group-hover:bg-orange-500 transition-colors shadow-xl">
                    <svg 
                      className="w-8 h-8 md:w-10 md:h-10 text-ivory ml-1" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </button>
            )}

            {/* Pause button (visible when playing) */}
            {isPlaying && (
              <button
                onClick={togglePlay}
                className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-ink/60 hover:bg-ink/80 flex items-center justify-center transition-colors backdrop-blur-sm"
              >
                <svg 
                  className="w-5 h-5 text-ivory" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              </button>
            )}
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-orange-400/30 pointer-events-none" />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-orange-400/30 pointer-events-none" />
        </div>

        {/* Attribution */}
        <div className="text-center mt-10 md:mt-12">
          <div className="inline-flex items-center gap-4 px-6 py-4 bg-ink-soft/50 rounded-sm">
            {/* Avatar */}
            <div className="w-12 h-12 rounded-full bg-orange-400 flex items-center justify-center text-ivory font-serif text-lg font-medium">
              BA
            </div>
            <div className="text-left">
              <p className="text-ivory font-medium text-sm md:text-base">Ben Amonung</p>
              <p className="text-warm-gray text-xs md:text-sm">Team Leader for Sports Friends; Ghana</p>
            </div>
          </div>
        </div>

        {/* Quote highlight */}
        <div className="mt-8 md:mt-12 text-center max-w-2xl mx-auto">
          <p className="font-serif italic text-lg md:text-xl text-ivory/80 leading-relaxed">
            &quot;A powerful testimonial about Praise&apos;s impact and professional excellence&quot;
          </p>
        </div>
      </div>
    </section>
  )
}
