import { SectionHeader } from "@/components/common/section-header";
import { TeamMemberCard } from "@/components/common/team-member-card";
import { SectionContainer } from "@/components/ui/section-container";
import { aboutTeam } from "@/data/about.data";

export function AboutTeam() {
  return (
    <SectionContainer className="py-14 md:py-20">
      <SectionHeader title="Meet the Veltrix team" description="Small, senior, and accountable — extended with trusted specialists when domains require it." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {aboutTeam.map((m) => (
          <TeamMemberCard key={m.name} initials={m.initials} name={m.name} role={m.role} />
        ))}
      </div>
    </SectionContainer>
  );
}
