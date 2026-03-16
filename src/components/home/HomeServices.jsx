import { Link } from 'react-router-dom'

const highlights = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Eye Examinations',
    description: 'Thorough assessments using the latest diagnostic technology, catching issues before they become problems.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    title: 'Designer Frames',
    description: 'Hundreds of styles from Ray-Ban, Tom Ford, Gucci, Oakley, Prada and more — expertly fitted to your face.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
    title: 'Contact Lenses',
    description: 'Daily, monthly, toric, and multifocal options fitted by specialists. Free trial available for first-time wearers.',
  },
]

export default function HomeServices() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in text-center mb-14">
          <p className="text-xs font-semibold text-purple-600 uppercase tracking-widest mb-3">What We Offer</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
            Expert care for every eye
          </h2>
          <p className="mt-4 text-lg text-zinc-500 max-w-2xl mx-auto">
            From your first check-up to finding the perfect pair of frames, we cover everything your eyes need.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {highlights.map((item, i) => (
            <div
              key={item.title}
              className={`fade-in fade-in-delay-${i + 1} group p-7 rounded-2xl border border-zinc-100 hover:border-purple-200 hover:shadow-soft transition-all duration-300`}
            >
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-5 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-zinc-900 mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="fade-in text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-700 transition-colors"
          >
            See all our services
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
