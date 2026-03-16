import { Link } from 'react-router-dom'

const hours = [
  { day: 'Monday – Friday', time: '9:00am – 5:30pm' },
  { day: 'Saturday', time: '9:00am – 4:00pm' },
  { day: 'Sunday', time: 'Closed' },
]

export default function OpeningHours() {
  return (
    <section className="py-16 sm:py-20 bg-zinc-50/50 border-y border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left — Map placeholder + address */}
          <div className="fade-in">
            <div className="bg-zinc-200 rounded-2xl h-64 lg:h-80 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-200 to-zinc-300" />
              <div className="relative text-center">
                <svg className="w-10 h-10 text-zinc-400 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <p className="text-sm font-semibold text-zinc-500">14 High Street, Weston</p>
                <p className="text-xs text-zinc-400">BS24 7AB</p>
              </div>
            </div>
            <p className="text-xs text-zinc-400 mt-3 text-center lg:text-left">
              Free on-street parking available nearby
            </p>
          </div>

          {/* Right — Hours + contact */}
          <div className="fade-in fade-in-delay-1">
            <p className="text-xs font-semibold text-purple-600 uppercase tracking-widest mb-3">Visit Us</p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-zinc-900 tracking-tight mb-6">
              Opening Hours
            </h2>

            <div className="space-y-0 mb-8">
              {hours.map((h) => (
                <div key={h.day} className="flex items-center justify-between py-3 border-b border-zinc-200 last:border-0">
                  <span className="text-sm font-medium text-zinc-700">{h.day}</span>
                  <span className={`text-sm font-semibold ${h.time === 'Closed' ? 'text-zinc-400' : 'text-zinc-900'}`}>
                    {h.time}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-colors duration-200 shadow-soft text-sm"
              >
                Book an Appointment
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="tel:01934123456"
                className="inline-flex items-center gap-2 px-5 py-3 border border-zinc-200 text-zinc-700 font-semibold rounded-xl hover:border-zinc-300 hover:bg-zinc-50 transition-all duration-200 text-sm"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                01934 123 456
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
