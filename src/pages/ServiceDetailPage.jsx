import { useParams, Link, Navigate } from 'react-router-dom'
import { services } from '../data/services'
import HomeCTA from '../components/home/HomeCTA'

export default function ServiceDetailPage() {
  const { serviceId } = useParams()
  const service = services.find((s) => s.id === serviceId)

  if (!service || !service.detail) return <Navigate to="/services" replace />

  const { detail } = service

  return (
    <>
      {/* Hero */}
      <section className="bg-zinc-950 pt-28 pb-16 sm:pt-36 sm:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-sm text-purple-400 hover:text-purple-300 transition-colors mb-6"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            All Services
          </Link>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="px-3 py-1 bg-purple-900/40 text-purple-300 text-xs font-semibold rounded-full">
              {service.category}
            </span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            {service.title}
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            {service.tagline}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800 text-zinc-300 text-sm font-medium rounded-full">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {service.duration}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-900/40 text-purple-300 text-sm font-medium rounded-full">
              {service.price}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro */}
          <div className="fade-in mb-12">
            <p className="text-lg text-zinc-600 leading-relaxed">{detail.intro}</p>
          </div>

          {/* Who is it for */}
          <div className="fade-in fade-in-delay-1 mb-12">
            <h2 className="text-xl font-display font-bold text-zinc-900 mb-4">Who is it for?</h2>
            <p className="text-sm text-zinc-600 leading-relaxed">{detail.whoIsItFor}</p>
          </div>

          {/* What to expect */}
          <div className="fade-in fade-in-delay-2 mb-12">
            <h2 className="text-xl font-display font-bold text-zinc-900 mb-4">What to expect</h2>
            <ul className="space-y-3">
              {detail.whatToExpect.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm text-zinc-600 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Brands (if present) */}
          {detail.brands && (
            <div className="fade-in mb-12">
              <h2 className="text-xl font-display font-bold text-zinc-900 mb-4">Brands we stock</h2>
              <div className="flex flex-wrap gap-3">
                {detail.brands.map((brand) => (
                  <span key={brand} className="px-4 py-2 bg-zinc-100 text-zinc-700 text-sm font-semibold rounded-full">
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* NHS info (if present) */}
          {detail.nhsInfo && (
            <div className="fade-in bg-purple-50 border border-purple-100 rounded-2xl p-6 mb-12">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
                <div>
                  <h3 className="text-sm font-bold text-purple-900 mb-1">NHS Information</h3>
                  <p className="text-sm text-purple-800 leading-relaxed">{detail.nhsInfo}</p>
                </div>
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="fade-in flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-colors duration-200 shadow-soft"
            >
              Book this service
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="tel:01934123456"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-zinc-200 text-zinc-700 font-semibold rounded-xl hover:border-zinc-300 hover:bg-zinc-50 transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Call us
            </a>
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="py-12 bg-zinc-50/50 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-display font-bold text-zinc-900 mb-6 text-center">Other services you might need</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {services
              .filter((s) => s.id !== service.id)
              .slice(0, 3)
              .map((s) => (
                <Link
                  key={s.id}
                  to={`/services/${s.id}`}
                  className="bg-white border border-zinc-100 rounded-xl p-5 hover:border-purple-200 hover:shadow-soft transition-all duration-200 group"
                >
                  <h3 className="text-sm font-bold text-zinc-900 group-hover:text-purple-600 transition-colors mb-1">
                    {s.title}
                  </h3>
                  <p className="text-xs text-zinc-500">{s.tagline}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <HomeCTA />
    </>
  )
}
