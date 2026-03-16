export default function TeamMemberCard({ member, delay }) {
  return (
    <div className={`fade-in ${delay ? `fade-in-delay-${delay}` : ''} bg-white rounded-2xl border border-zinc-100 p-7 hover:border-purple-200 hover:shadow-soft transition-all duration-300`}>
      {/* Avatar */}
      <div className={`w-16 h-16 rounded-2xl ${member.avatarColor} flex items-center justify-center mb-5`}>
        <span className="text-lg font-bold text-white">{member.initials}</span>
      </div>

      {/* Name + role */}
      <h3 className="text-base font-bold text-zinc-900">{member.name}</h3>
      <p className="text-sm text-zinc-500 mt-0.5 mb-3">{member.role}</p>

      {/* Credentials */}
      <span className="inline-block px-2.5 py-1 bg-purple-50 text-purple-700 text-xs font-medium rounded-full mb-4">
        {member.credentials}
      </span>

      {/* Bio */}
      <p className="text-sm text-zinc-500 leading-relaxed mb-4 line-clamp-3">
        {member.bio}
      </p>

      {/* Specialisms */}
      <div className="flex flex-wrap gap-2">
        {member.specialisms.map((spec) => (
          <span key={spec} className="px-2.5 py-1 bg-zinc-50 text-zinc-600 text-xs font-medium rounded-full border border-zinc-100">
            {spec}
          </span>
        ))}
      </div>
    </div>
  )
}
