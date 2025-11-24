import type { Metadata } from "next";
import { COMPONENTS_DATA } from "@/data/components";
import TooltipPage from "@/modules/TooltipPage";

const componentData = COMPONENTS_DATA.tooltip;

export const metadata: Metadata = {
  title: `${componentData.name} | Amvasdev UI`,
  description: componentData.description,
};

export default function Page() {
  return <TooltipPage />;
}
