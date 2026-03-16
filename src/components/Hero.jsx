export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/60 via-white to-white -z-10" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary-100/40 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-primary-50/50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left — Copy */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-50 border border-primary-100 rounded-full mb-6">
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
              <span className="text-xs font-semibold text-primary-700 tracking-wide uppercase">
                Now Accepting New Patients
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              Your Vision,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                Our Priority
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-500 leading-relaxed">
              Expert eye care from qualified optometrists on your high street. 
              From routine check-ups to designer frames — we make seeing clearly feel effortless.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all hover:shadow-xl hover:shadow-primary-600/20 active:scale-[0.98] text-base"
              >
                Book Your Eye Test
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-white border border-slate-200 text-slate-700 font-semibold rounded-xl hover:border-primary-200 hover:text-primary-700 transition-all text-base shadow-sm"
              >
                Learn More
              </a>
            </div>

            {/* Mini stats */}
            <div className="mt-10 flex gap-8">
              {[
                { number: '15+', label: 'Years Experience' },
                { number: '10k+', label: 'Happy Patients' },
                { number: '4.9', label: 'Google Rating' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-slate-800">{stat.number}</div>
                  <div className="text-xs font-medium text-slate-400 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary-100 to-primary-50 rounded-3xl -z-10 rotate-2" />
              <img
                src="/hero.png"
                alt="Opticians helping a customer find the perfect pair of glasses"
                className="w-full rounded-2xl shadow-soft-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
