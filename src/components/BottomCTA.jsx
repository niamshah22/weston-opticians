export default function BottomCTA() {
  return (
    <section className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 px-8 py-16 sm:px-16 sm:py-20 text-center">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight max-w-2xl mx-auto leading-tight">
              Ready to see the world more clearly?
            </h2>
            <p className="mt-5 text-lg text-primary-100 max-w-xl mx-auto">
              Book your comprehensive eye test today. It takes less than a minute, 
              and your eyes will thank you.
            </p>
            <div className="mt-9">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-700 font-bold rounded-xl hover:bg-primary-50 transition-all hover:shadow-xl active:scale-[0.98] text-base"
              >
                Book Your Eye Test
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
