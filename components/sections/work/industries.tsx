import { LogoStrip } from "@/components/common/logo-strip";
import { workIndustries } from "@/data/work.data";

export function WorkIndustries() {
  return <LogoStrip items={workIndustries} />;
}
