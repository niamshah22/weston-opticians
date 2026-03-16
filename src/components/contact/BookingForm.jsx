import { useState } from 'react'
import { services } from '../../data/services'

const initialData = {
  name: '',
  email: '',
  phone: '',
  service: '',
  date: '',
  time: '',
  nhs: 'not-sure',
  notes: '',
}

function validate(data) {
  const errors = {}
  if (!data.name.trim()) errors.name = 'Please enter your name'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Please enter a valid email address'
  if (!data.service) errors.service = 'Please select a service'
  if (!data.date) errors.date = 'Please select a preferred date'
  if (!data.time) errors.time = 'Please select a preferred time'
  return errors
}

const today = new Date().toISOString().split('T')[0]

const inputClass = (hasError) =>
  `w-full px-4 py-3 border rounded-xl text-sm text-zinc-800 placeholder:text-zinc-300 focus:outline-none focus:ring-2 transition-all ${
    hasError
      ? 'border-red-400 focus:ring-red-500/20 focus:border-red-400'
      : 'border-zinc-200 focus:ring-purple-500/20 focus:border-purple-400'
  }`

export default function BookingForm() {
  const [formData, setFormData] = useState(initialData)
  const [touched, setTouched] = useState({})
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' })
    }
  }

  const handleBlur = (e) => {
    setTouched({ ...touched, [e.target.name]: true })
  }

  const fieldError = (name) => touched[name] && errors[name]

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate(formData)
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setTouched({ name: true, email: true, service: true, date: true, time: true })
      return
    }
    setStatus('submitting')
    setTimeout(() => setStatus('success'), 800)
  }

  if (status === 'success') {
    return (
      <div className="bg-white rounded-2xl border border-zinc-100 p-8 text-center shadow-soft">
        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-zinc-900 mb-2">Appointment request received</h3>
        <p className="text-sm text-zinc-500 leading-relaxed max-w-sm mx-auto">
          {formData.service
            ? `We'll confirm your ${formData.service} appointment by email within one working day.`
            : "We'll be in touch within one working day to confirm your appointment."}
        </p>
        <button
          onClick={() => { setStatus('idle'); setFormData(initialData); setTouched({}); setErrors({}) }}
          className="mt-6 text-sm text-purple-600 font-medium hover:text-purple-700 transition-colors"
        >
          Make another booking
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="bg-white rounded-2xl border border-zinc-100 p-7 shadow-soft space-y-5">
      <h2 className="text-xl font-bold text-zinc-900 mb-1">Book an Appointment</h2>
      <p className="text-sm text-zinc-500 mb-4">Fill in your details and we'll confirm your appointment within one working day.</p>

      {/* Name */}
      <div>
        <label className="block text-xs font-semibold text-zinc-700 mb-1.5" htmlFor="name">Full Name *</label>
        <input
          id="name" name="name" type="text" placeholder="Jane Smith"
          value={formData.name} onChange={handleChange} onBlur={handleBlur}
          className={inputClass(fieldError('name'))}
        />
        {fieldError('name') && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
      </div>

      {/* Email + Phone row */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold text-zinc-700 mb-1.5" htmlFor="email">Email Address *</label>
          <input
            id="email" name="email" type="email" placeholder="jane@example.com"
            value={formData.email} onChange={handleChange} onBlur={handleBlur}
            className={inputClass(fieldError('email'))}
          />
          {fieldError('email') && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-xs font-semibold text-zinc-700 mb-1.5" htmlFor="phone">Phone Number</label>
          <input
            id="phone" name="phone" type="tel" placeholder="07700 900000"
            value={formData.phone} onChange={handleChange} onBlur={handleBlur}
            className={inputClass(false)}
          />
        </div>
      </div>

      {/* Service */}
      <div>
        <label className="block text-xs font-semibold text-zinc-700 mb-1.5" htmlFor="service">Service Required *</label>
        <select
          id="service" name="service"
          value={formData.service} onChange={handleChange} onBlur={handleBlur}
          className={inputClass(fieldError('service')) + ' bg-white'}
        >
          <option value="">Select a service…</option>
          {services.map((s) => (
            <option key={s.id} value={s.title}>{s.title}</option>
          ))}
        </select>
        {fieldError('service') && <p className="text-xs text-red-500 mt-1">{errors.service}</p>}
      </div>

      {/* Date + Time row */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold text-zinc-700 mb-1.5" htmlFor="date">Preferred Date *</label>
          <input
            id="date" name="date" type="date" min={today}
            value={formData.date} onChange={handleChange} onBlur={handleBlur}
            className={inputClass(fieldError('date')) + ' bg-white'}
          />
          {fieldError('date') && <p className="text-xs text-red-500 mt-1">{errors.date}</p>}
        </div>
        <div>
          <label className="block text-xs font-semibold text-zinc-700 mb-1.5" htmlFor="time">Preferred Time *</label>
          <select
            id="time" name="time"
            value={formData.time} onChange={handleChange} onBlur={handleBlur}
            className={inputClass(fieldError('time')) + ' bg-white'}
          >
            <option value="">Select a time…</option>
            <option value="Morning (9am–12pm)">Morning (9am–12pm)</option>
            <option value="Afternoon (12pm–3pm)">Afternoon (12pm–3pm)</option>
            <option value="Late (3pm–5:30pm)">Late (3pm–5:30pm)</option>
          </select>
          {fieldError('time') && <p className="text-xs text-red-500 mt-1">{errors.time}</p>}
        </div>
      </div>

      {/* NHS eligibility */}
      <div>
        <p className="text-xs font-semibold text-zinc-700 mb-2">NHS Eligible?</p>
        <div className="flex flex-wrap gap-4">
          {[
            { value: 'yes', label: 'Yes' },
            { value: 'no', label: 'No' },
            { value: 'not-sure', label: "Not sure" },
          ].map((opt) => (
            <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio" name="nhs" value={opt.value}
                checked={formData.nhs === opt.value}
                onChange={handleChange}
                className="accent-purple-600"
              />
              <span className="text-sm text-zinc-600">{opt.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Notes */}
      <div>
        <label className="block text-xs font-semibold text-zinc-700 mb-1.5" htmlFor="notes">Additional Notes</label>
        <textarea
          id="notes" name="notes" rows={3} maxLength={500}
          placeholder="Any concerns, current prescription details, or accessibility needs…"
          value={formData.notes} onChange={handleChange}
          className={inputClass(false) + ' resize-none'}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full py-3.5 bg-purple-600 hover:bg-purple-700 disabled:opacity-60 text-white font-semibold rounded-xl transition-colors duration-200 shadow-sm"
      >
        {status === 'submitting' ? 'Sending…' : 'Request Appointment'}
      </button>
      <p className="text-xs text-zinc-400 text-center">We'll confirm within one working day. No payment required now.</p>
    </form>
  )
}
