export default function PageHero({ label, title, subtitle }) {
  return (
    <section className="bg-zinc-950 pt-28 pb-16 sm:pt-36 sm:pb-20 relative overflow-hidden">
      {/* Decorative purple glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/10 rounded-full blur-3xl -z-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {label && (
          <p className="text-xs font-semibold text-purple-400 uppercase tracking-widest mb-4">
            {label}
          </p>
        )}
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-lg text-zinc-400 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
