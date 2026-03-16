const brands = [
  { name: 'Ray-Ban', logo: RayBanLogo },
  { name: 'Oakley', logo: OakleyLogo },
  { name: 'Tom Ford', logo: TomFordLogo },
  { name: 'Gucci', logo: GucciLogo },
  { name: 'Prada', logo: PradaLogo },
]

function RayBanLogo() {
  return (
    <svg viewBox="0 0 120 24" className="h-5 sm:h-6 w-auto fill-slate-400 group-hover:fill-slate-600 transition-colors">
      <text x="0" y="18" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="16" letterSpacing="1">RAY-BAN</text>
    </svg>
  )
}
function OakleyLogo() {
  return (
    <svg viewBox="0 0 100 24" className="h-5 sm:h-6 w-auto fill-slate-400 group-hover:fill-slate-600 transition-colors">
      <text x="0" y="18" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="16" letterSpacing="1">OAKLEY</text>
    </svg>
  )
}
function TomFordLogo() {
  return (
    <svg viewBox="0 0 130 24" className="h-5 sm:h-6 w-auto fill-slate-400 group-hover:fill-slate-600 transition-colors">
      <text x="0" y="18" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="16" letterSpacing="1">TOM FORD</text>
    </svg>
  )
}
function GucciLogo() {
  return (
    <svg viewBox="0 0 90 24" className="h-5 sm:h-6 w-auto fill-slate-400 group-hover:fill-slate-600 transition-colors">
      <text x="0" y="18" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="16" letterSpacing="1">GUCCI</text>
    </svg>
  )
}
function PradaLogo() {
  return (
    <svg viewBox="0 0 100 24" className="h-5 sm:h-6 w-auto fill-slate-400 group-hover:fill-slate-600 transition-colors">
      <text x="0" y="18" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="16" letterSpacing="1">PRADA</text>
    </svg>
  )
}

export default function SocialProof() {
  return (
    <section className="py-12 sm:py-16 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in text-center">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-8">
            Proud stockists of leading eyewear brands
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14">
            {brands.map((brand) => (
              <div key={brand.name} className="group cursor-default" title={brand.name}>
                <brand.logo />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
