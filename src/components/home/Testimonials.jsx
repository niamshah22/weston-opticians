const testimonials = [
  {
    quote: "I've been coming to Weston Opticians for years and wouldn't go anywhere else. The team genuinely cares about your eye health, and they helped me find frames I actually love wearing every day.",
    name: 'Sarah Mitchell',
    role: 'Patient since 2019',
    initials: 'SM',
    color: 'bg-purple-600',
  },
  {
    quote: "Booked a same-day appointment when I scratched my lens before a big presentation. They sorted me out within the hour — new lenses cut and fitted. Lifesavers, honestly.",
    name: 'James Thornton',
    role: 'Patient since 2021',
    initials: 'JT',
    color: 'bg-zinc-700',
  },
  {
    quote: "My daughter was nervous about her first eye test, but the staff were so patient and friendly. She left excited about her new glasses. Can't recommend them enough for families.",
    name: 'Priya Kaur',
    role: 'Patient since 2020',
    initials: 'PK',
    color: 'bg-purple-800',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in text-center mb-14">
          <p className="text-xs font-semibold text-purple-400 uppercase tracking-widest mb-3">Reviews</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            What our patients say
          </h2>
          <p className="mt-4 text-lg text-zinc-400 max-w-2xl mx-auto">
            Don't just take our word for it — here's what the people we care for have to say.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`fade-in fade-in-delay-${i + 1} flex flex-col p-7 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-purple-800 transition-colors duration-300`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-sm text-zinc-300 leading-relaxed flex-1 mb-6">
                "{t.quote}"
              </blockquote>

              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-xs font-bold text-white">{t.initials}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-zinc-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
