import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from '../components/navigation/Navbar'
import Footer from '../components/footer/Footer'
import { useScrollReveal } from '../components/shared/useScrollReveal'

export default function RootLayout() {
  const { pathname } = useLocation()

  useScrollReveal()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1 page-enter" key={pathname}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
