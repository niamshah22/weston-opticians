import { useState } from 'react'
import { categories, services } from '../../data/services'
import ServiceCard from './ServiceCard'

export default function ServiceGrid() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = services.filter(
    (s) => activeCategory === 'All' || s.category === activeCategory
  )

  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter pills */}
        <div className="fade-in flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* key causes remount + page-enter fade animation on filter change */}
        <div key={activeCategory} className="space-y-4 page-enter">
          {filtered.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
