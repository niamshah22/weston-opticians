import { team } from '../../data/team'
import TeamMemberCard from './TeamMemberCard'
import SectionHeading from '../shared/SectionHeading'

export default function StaffGrid() {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Team"
          title="The people behind your care"
          subtitle="Qualified, experienced, and genuinely passionate about eye health."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <TeamMemberCard
              key={member.id}
              member={member}
              delay={Math.min(i + 1, 4)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
