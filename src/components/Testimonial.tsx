export default function Testimonial() {
  return (
    <section className="border-t border-light-taupe/50 py-12 md:py-16 lg:py-20 px-6 sm:px-8 md:px-12 lg:px-24 xl:px-32 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-16 bg-cream">
      <span className="text-xs md:text-sm tracking-[0.1em] uppercase text-terracotta">Client feedback</span>
      <div>
        <p className="font-serif italic text-2xl md:text-3xl lg:text-4xl leading-[1.5] text-dark-brown mb-5 md:mb-6">
          &quot;Dorcas gave me back 10 hours a week. She understood what I needed before I even finished explaining it.&quot;
        </p>
        <p className="text-sm md:text-base text-warm-brown tracking-[0.04em] uppercase">— Ayodele O. M., CEO</p>
        <div className="flex gap-2 mt-5 md:mt-6">
          <div className="w-2 h-2 rounded-full bg-terracotta"></div>
          <div className="w-2 h-2 rounded-full bg-light-taupe"></div>
          <div className="w-2 h-2 rounded-full bg-light-taupe"></div>
        </div>
      </div>
    </section>
  )
}
