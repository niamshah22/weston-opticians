import { useState } from 'react'

const faqs = [
  {
    question: 'How often should I have an eye test?',
    answer:
      'We recommend an eye test every two years for most adults. However, if you wear glasses or contact lenses, have diabetes, are over 40 with a family history of glaucoma, or notice any changes in your vision, you should have one every year.',
  },
  {
    question: 'Do you accept NHS eye tests?',
    answer:
      "Yes! We're a registered NHS provider. If you're eligible — for example, if you're under 16, over 60, receiving certain benefits, or have specific medical conditions — your eye test is completely free. Our team can check your eligibility when you call or visit.",
  },
  {
    question: 'How long does an eye test take?',
    answer:
      'A standard eye test takes around 20-30 minutes. If you need additional tests, such as retinal imaging or a contact lens fitting, it may take a little longer. We never rush — your eye health is our priority.',
  },
  {
    question: 'Can I book an appointment online?',
    answer:
      'Absolutely. You can use the contact form on this page, call us directly, or pop into the practice. We also offer same-day and next-day appointments when available.',
  },
  {
    question: "Do you offer children's eye tests?",
    answer:
      "Yes, we love seeing young patients! We recommend children have their first eye test before they start school. Our optometrists are experienced with children and use fun, engaging techniques to keep little ones comfortable.",
  },
  {
    question: 'What brands of glasses do you stock?',
    answer:
      'We carry a wide range of designer and budget-friendly frames, including Ray-Ban, Oakley, Tom Ford, Gucci, Prada, and more. We also stock specialist sport and safety eyewear. Pop in to browse, or ask us about specific brands.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section id="faq" className="py-20 sm:py-28 bg-slate-50/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="fade-in text-center mb-14">
          <p className="text-sm font-semibold text-primary-600 uppercase tracking-widest mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Common questions, answered
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Everything you need to know before your visit.
          </p>
        </div>

        {/* Accordion */}
        <div className="fade-in space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-100 overflow-hidden transition-shadow hover:shadow-soft"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-sm sm:text-base font-semibold text-slate-800 pr-4">
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    openIndex === idx
                      ? 'bg-primary-600 text-white rotate-45'
                      : 'bg-slate-100 text-slate-400'
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </span>
              </button>
              <div
                className={`accordion-content ${openIndex === idx ? 'open' : ''}`}
              >
                <p className="px-6 pb-5 text-sm text-slate-500 leading-relaxed">
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
