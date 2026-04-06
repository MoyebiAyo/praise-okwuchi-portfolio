import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import Services from '../components/Services'
import About from '../components/About'
import Testimonial from '../components/Testimonial'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <About />
      <Testimonial />
      <Contact />
      <Footer />
    </main>
  )
}
