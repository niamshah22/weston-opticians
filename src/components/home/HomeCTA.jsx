import { Link } from 'react-router-dom'

export default function HomeCTA() {
  return (
    <section className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-900 via-purple-700 to-purple-600 px-8 py-16 sm:px-16 sm:py-20 text-center">
          {/* Decorative orbs */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight max-w-2xl mx-auto leading-tight">
              Ready to see the world more clearly?
            </h2>
            <p className="mt-5 text-lg text-purple-200 max-w-xl mx-auto">
              Book your comprehensive eye test today. It takes less than a minute, and your eyes will thank you.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-purple-700 font-bold rounded-xl hover:bg-purple-50 transition-colors duration-200 shadow-lg"
              >
                Book Your Eye Test
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors duration-200"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
