const testimonials = [
  {
    quote:
      "I've been coming to Weston Opticians for years and wouldn't go anywhere else. The team genuinely cares about your eye health, and they helped me find frames I actually love wearing every day.",
    name: 'Sarah Mitchell',
    role: 'Patient since 2019',
    avatar: 'SM',
    color: 'bg-primary-500',
  },
  {
    quote:
      "Booked a same-day appointment when I scratched my lens before a big presentation. They sorted me out within the hour — new lenses cut and fitted. Lifesavers, honestly.",
    name: 'James Thornton',
    role: 'Patient since 2021',
    avatar: 'JT',
    color: 'bg-amber-500',
  },
  {
    quote:
      "My daughter was nervous about her first eye test, but the staff were so patient and friendly. She left excited about her new glasses. Can't recommend them enough for families.",
    name: 'Priya Kaur',
    role: 'Patient since 2020',
    avatar: 'PK',
    color: 'bg-violet-500',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="fade-in text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary-600 uppercase tracking-widest mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Loved by patients across the community
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={t.name}
              className={`fade-in fade-in-delay-${idx + 1} bg-white rounded-2xl p-7 border border-slate-100 hover:shadow-soft-lg transition-all duration-300`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-amber-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-slate-600 leading-relaxed text-sm mb-6">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-50">
                <div
                  className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center text-white text-sm font-bold`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-800">{t.name}</div>
                  <div className="text-xs text-slate-400">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
