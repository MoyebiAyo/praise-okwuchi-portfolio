export default function Testimonial() {
  return (
    <section className="border-t border-light-taupe/50 py-8 md:py-13 px-6 sm:px-8 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-[180px_1fr] gap-6 md:gap-12 bg-cream max-w-7xl mx-auto">
      <span className="text-[10px] md:text-[11px] tracking-[0.1em] uppercase text-terracotta">Client feedback</span>
      <div>
        <p className="font-serif italic text-xl md:text-2xl leading-[1.5] text-dark-brown mb-4 md:mb-5">
          &quot;Dorcas gave me back 10 hours a week. She understood what I needed before I even finished explaining it.&quot;
        </p>
        <p className="text-xs text-warm-brown tracking-[0.04em] uppercase">— Chidi O., Founder · Lagos</p>
        <div className="flex gap-1.5 mt-4 md:mt-5">
          <div className="w-1.5 h-1.5 rounded-full bg-terracotta"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-light-taupe"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-light-taupe"></div>
        </div>
      </div>
    </section>
  )
}
