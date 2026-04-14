export default function YouTubeChannel() {
  return (
    <section className="border-t border-sand/50 bg-gradient-to-br from-red-50 via-ivory to-orange-50 py-16 md:py-24 px-6 sm:px-8 md:px-12 lg:px-24 xl:px-32">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="text-xs md:text-sm tracking-[0.1em] uppercase text-red-600 block mb-4 font-medium">
              YouTube Channel
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight text-ink mb-4 md:mb-6">
              Watch, Learn & <em className="italic text-red-600">Get Inspired</em>
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-warm-gray mb-6 md:mb-8">
              Subscribe to my YouTube channel for insights on strategic communication, public speaking tips, career development, and behind-the-scenes looks at impactful campaigns and projects.
            </p>
            
            {/* CTA Button */}
            <a
              href="https://youtube.com/@okwuchipraise2636?si=XohMMSUM1T8OZnSG"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-medium px-8 py-4 rounded-sm transition-colors shadow-lg hover:shadow-xl"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Subscribe on YouTube
            </a>
          </div>

          {/* Right - Image */}
          <div className="relative group">
            <div className="rounded-sm overflow-hidden shadow-xl">
              <img
                src="/youtube-channel-preview.jpg"
                alt="YouTube Channel Preview"
                className="w-full h-auto object-cover"
              />
              {/* Play Button Overlay */}
              <a
                href="https://youtube.com/@okwuchipraise2636?si=XohMMSUM1T8OZnSG"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-black/30 hover:bg-black/40 transition-colors flex items-center justify-center"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-red-600 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
