export default function SectionHeading({ label, title, subtitle, light = false }) {
  return (
    <div className="fade-in text-center mb-14">
      {label && (
        <p className={`text-xs font-semibold uppercase tracking-widest mb-3 ${light ? 'text-purple-300' : 'text-purple-600'}`}>
          {label}
        </p>
      )}
      <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${light ? 'text-white' : 'text-zinc-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg max-w-2xl mx-auto ${light ? 'text-zinc-400' : 'text-zinc-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
