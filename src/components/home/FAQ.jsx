import { useState } from 'react'
import { faqs } from '../../data/faqs'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section id="faq" className="py-20 sm:py-28 bg-zinc-50/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in text-center mb-14">
          <p className="text-xs font-semibold text-purple-600 uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
            Common questions, answered
          </h2>
          <p className="mt-4 text-lg text-zinc-500">
            Everything you need to know before your visit.
          </p>
        </div>

        <div className="fade-in space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-zinc-100 overflow-hidden hover:border-purple-100 transition-colors duration-200"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-sm sm:text-base font-semibold text-zinc-800 pr-4">
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    openIndex === idx
                      ? 'bg-purple-600 text-white rotate-45'
                      : 'bg-zinc-100 text-zinc-400'
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </span>
              </button>
              <div className={`accordion-content ${openIndex === idx ? 'open' : ''}`}>
                <p className="px-6 pb-5 text-sm text-zinc-500 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
