import type { Metadata } from "next";
import { COMPONENTS_DATA } from "@/data/components";
import CheckboxPage from "@/modules/CheckboxPage";

const componentData = COMPONENTS_DATA.checkbox;

export const metadata: Metadata = {
  title: `${componentData.name} | Amvasdev UI`,
  description: componentData.description,
};

export default function Page() {
  return <CheckboxPage />;
}
