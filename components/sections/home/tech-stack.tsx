import { LogoStrip } from "@/components/common/logo-strip";
import { homeTechStrip } from "@/data/home.data";

export function HomeTechStack() {
  return <LogoStrip items={homeTechStrip} />;
}
