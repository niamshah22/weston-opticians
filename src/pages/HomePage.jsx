import Hero from '../components/home/Hero'
import SocialProof from '../components/home/SocialProof'
import HomeServices from '../components/home/HomeServices'
import GoogleReviews from '../components/home/GoogleReviews'
import OpeningHours from '../components/home/OpeningHours'
import HomeCTA from '../components/home/HomeCTA'
import FAQ from '../components/home/FAQ'

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProof />
      <HomeServices />
      <GoogleReviews />
      <OpeningHours />
      <HomeCTA />
      <FAQ />
    </>
  )
}
