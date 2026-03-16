import AboutHero from '../components/about/AboutHero'
import Values from '../components/about/Values'
import StaffGrid from '../components/about/StaffGrid'
import Testimonials from '../components/home/Testimonials'
import HomeCTA from '../components/home/HomeCTA'

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Values />
      <StaffGrid />
      <Testimonials />
      <HomeCTA />
    </>
  )
}
