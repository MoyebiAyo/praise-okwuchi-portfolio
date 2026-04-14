import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import PortfolioPreview from '../components/PortfolioPreview'
import About from '../components/About'
import VideoTestimonial from '../components/VideoTestimonial'
import CampaignStrategies from '../components/CampaignStrategies'
import YouTubeChannel from '../components/YouTubeChannel'
import Awards from '../components/Awards'
import Testimonial from '../components/Testimonial'
import Services from '../components/Services'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <PortfolioPreview />
      <CampaignStrategies />
      <VideoTestimonial />
      <Testimonial />
      <YouTubeChannel />
      <Awards />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}
