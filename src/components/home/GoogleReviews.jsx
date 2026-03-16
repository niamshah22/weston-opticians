import { Link } from 'react-router-dom'

const reviews = [
  {
    name: 'Laura P.',
    date: '2 weeks ago',
    text: "Absolutely brilliant service. My whole family has been coming here for years. The OCT scan picked up something my old opticians completely missed. Cannot recommend highly enough.",
    avatar: 'LP',
    color: 'bg-red-500',
  },
  {
    name: 'Mark D.',
    date: '1 month ago',
    text: "Found the most amazing Tom Ford frames here. The staff spent ages helping me choose and the varifocals are crystal clear. Best opticians in Weston, hands down.",
    avatar: 'MD',
    color: 'bg-blue-500',
  },
  {
    name: 'Helen T.',
    date: '3 weeks ago',
    text: "Took my 4-year-old for her first eye test and the team were so patient and gentle. She actually enjoyed it! We got her the cutest little glasses and she loves them.",
    avatar: 'HT',
    color: 'bg-green-600',
  },
  {
    name: 'David W.',
    date: '1 month ago',
    text: "Switched from Specsavers after 10 years and wish I'd done it sooner. The attention to detail here is on another level. Friendly, professional, and genuinely caring.",
    avatar: 'DW',
    color: 'bg-amber-500',
  },
]

function StarIcon({ filled = true }) {
  return (
    <svg className={`w-4 h-4 ${filled ? 'text-amber-400' : 'text-zinc-200'}`} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

export default function GoogleReviews() {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Google branding */}
        <div className="fade-in flex flex-col sm:flex-row items-center justify-between gap-6 mb-10">
          <div className="text-center sm:text-left">
            <p className="text-xs font-semibold text-purple-600 uppercase tracking-widest mb-3">Verified Reviews</p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-zinc-900 tracking-tight">
              Trusted by our community
            </h2>
          </div>

          {/* Google aggregate badge */}
          <div className="flex items-center gap-4 bg-white border border-zinc-200 rounded-2xl px-6 py-4 shadow-soft">
            <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-bold text-zinc-900">4.9</span>
                <div className="flex">
                  {[1,2,3,4,5].map(i => <StarIcon key={i} />)}
                </div>
              </div>
              <p className="text-xs text-zinc-500 mt-0.5">Based on 127 Google reviews</p>
            </div>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((review, i) => (
            <div
              key={review.name}
              className={`fade-in fade-in-delay-${i + 1} bg-white border border-zinc-100 rounded-2xl p-5 hover:border-purple-200 hover:shadow-soft transition-all duration-300`}
            >
              {/* Stars + Google icon */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(j => <StarIcon key={j} />)}
                </div>
                <svg className="w-4 h-4 opacity-40" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>

              {/* Review text */}
              <p className="text-sm text-zinc-600 leading-relaxed mb-4 line-clamp-4">
                "{review.text}"
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-2.5">
                <div className={`w-8 h-8 rounded-full ${review.color} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-[10px] font-bold text-white">{review.avatar}</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-800">{review.name}</p>
                  <p className="text-[10px] text-zinc-400">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to leave a review */}
        <p className="fade-in text-center text-sm text-zinc-400 mt-8">
          Love your experience?{' '}
          <a href="#" className="text-purple-600 font-medium hover:text-purple-700 transition-colors">
            Leave us a review on Google
          </a>
        </p>
      </div>
    </section>
  )
}
