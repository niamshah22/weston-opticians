import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function useScrollReveal() {
  const { pathname } = useLocation()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    // Small delay allows page content to mount before observing
    const timeout = setTimeout(() => {
      document.querySelectorAll('.fade-in').forEach((el) => {
        el.classList.remove('visible')
        observer.observe(el)
      })
    }, 50)

    return () => {
      clearTimeout(timeout)
      observer.disconnect()
    }
  }, [pathname])
}
