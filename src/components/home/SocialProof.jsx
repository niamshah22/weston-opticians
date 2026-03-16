const brands = ['Ray-Ban', 'Oakley', 'Tom Ford', 'Gucci', 'Prada']

export default function SocialProof() {
  return (
    <section className="py-12 border-y border-zinc-100 bg-zinc-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-8">
          Trusted designer brands in stock
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {brands.map((brand) => (
            <span
              key={brand}
              className="text-zinc-400 hover:text-zinc-600 font-bold text-sm sm:text-base tracking-widest uppercase transition-colors duration-200 cursor-default"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
