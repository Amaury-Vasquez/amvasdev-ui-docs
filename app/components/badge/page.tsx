import type { Metadata } from "next";
import { COMPONENTS_DATA } from "@/data/components";
import BadgePage from "@/modules/BadgePage";

const componentData = COMPONENTS_DATA.badge;

export const metadata: Metadata = {
  title: `${componentData.name} | Amvasdev UI`,
  description: componentData.description,
};

export default function Page() {
  return <BadgePage />;
}
