import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden bg-white">
      {/* Subtle purple background shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-50 rounded-full blur-3xl opacity-60 -z-0 translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-50 rounded-full blur-3xl opacity-40 -z-0 -translate-x-1/4 translate-y-1/4" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left — Copy */}
          <div className="max-w-xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-50 border border-purple-100 rounded-full">
                <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                <span className="text-xs font-semibold text-purple-700 tracking-wide uppercase">
                  Now Accepting New Patients
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-zinc-100 border border-zinc-200 rounded-full text-xs font-semibold text-zinc-600 tracking-wide">
                Est. 2009 &middot; Family-Run
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 leading-[1.1] tracking-tight mb-6">
              Expert Eye Care,{' '}
              <span className="text-purple-600">Personal&nbsp;Touch</span>
            </h1>

            <p className="text-lg text-zinc-500 leading-relaxed mb-8">
              Your family-run independent opticians on the high street. Thorough eye exams, designer frames, and genuine care — trusted by the Weston community for over 15&nbsp;years.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-colors duration-200 shadow-soft"
              >
                Book Your Eye Test
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-5 py-3 border border-zinc-200 text-zinc-700 font-semibold rounded-xl hover:border-zinc-300 hover:bg-zinc-50 transition-all duration-200"
              >
                Our Services
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8">
              {[
                { value: '15+', label: 'Years Experience' },
                { value: '10k+', label: 'Happy Patients' },
                { value: '4.9', label: 'Google Rating' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-zinc-900">{stat.value}</p>
                  <p className="text-xs text-zinc-500 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Image */}
          <div className="relative lg:flex justify-end hidden">
            <div className="relative w-full max-w-lg">
              {/* Card decoration */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-purple-100 rounded-3xl -z-10" />
              <img
                src="/hero.png"
                alt="Friendly optician helping a patient choose glasses"
                className="w-full rounded-3xl shadow-soft-xl object-cover"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-soft-lg px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-900">NHS Registered</p>
                  <p className="text-xs text-zinc-400">Free eligible tests</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
