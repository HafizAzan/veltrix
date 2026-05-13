import { cn } from "@/lib/utils";
import { Small } from "@/components/ui/typography";

export type StatCardProps = {
  value: string;
  label: string;
  className?: string;
};

export function StatCard({ value, label, className }: StatCardProps) {
  return (
    <div className={cn("border-border-subtle bg-section-card/60 rounded-xl border p-6 text-center", className)}>
      <p className="text-accent-primary font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">{value}</p>
      <Small className="text-text-secondary mt-2 tracking-wide uppercase">{label}</Small>
    </div>
  );
}
