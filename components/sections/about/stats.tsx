import { StatCard } from "@/components/common/stat-card";
import { SectionContainer } from "@/components/ui/section-container";
import { aboutStats } from "@/data/about.data";

export function AboutStats() {
  return (
    <SectionContainer className="py-14 md:py-20">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {aboutStats.map((s) => (
          <StatCard key={s.label} value={s.value} label={s.label} />
        ))}
      </div>
    </SectionContainer>
  );
}
