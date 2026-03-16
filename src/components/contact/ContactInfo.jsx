const details = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: 'Address',
    value: '14 High Street, Weston, BS24 7AB',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: 'Phone',
    value: '01934 123 456',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: 'Email',
    value: 'hello@westonopticians.co.uk',
  },
]

const hours = [
  { day: 'Monday – Friday', time: '9:00am – 5:30pm' },
  { day: 'Saturday', time: '9:00am – 4:00pm' },
  { day: 'Sunday', time: 'Closed' },
]

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-bold text-zinc-900 mb-6">Find Us</h2>
        <div className="space-y-5">
          {details.map((d) => (
            <div key={d.label} className="flex items-start gap-4">
              <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                {d.icon}
              </div>
              <div>
                <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-0.5">{d.label}</p>
                <p className="text-sm text-zinc-700">{d.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold text-zinc-900 mb-4">Opening Hours</h2>
        <div className="space-y-2">
          {hours.map((h) => (
            <div key={h.day} className="flex justify-between items-center py-2.5 border-b border-zinc-100 last:border-0">
              <span className="text-sm text-zinc-600">{h.day}</span>
              <span className={`text-sm font-medium ${h.time === 'Closed' ? 'text-zinc-400' : 'text-zinc-900'}`}>
                {h.time}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Map placeholder */}
      <div className="rounded-2xl bg-zinc-100 h-48 flex items-center justify-center border border-zinc-200">
        <div className="text-center">
          <svg className="w-8 h-8 text-zinc-400 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          <p className="text-sm text-zinc-400">14 High Street, Weston</p>
        </div>
      </div>
    </div>
  )
}
