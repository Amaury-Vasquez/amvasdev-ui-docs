import type { Metadata } from "next";
import { COMPONENTS_DATA } from "@/data/components";
import SelectPage from "@/modules/SelectPage";

const componentData = COMPONENTS_DATA.select;

export const metadata: Metadata = {
  title: `${componentData.name} | Amvasdev UI`,
  description: componentData.description,
};

export default function Page() {
  return <SelectPage />;
}
