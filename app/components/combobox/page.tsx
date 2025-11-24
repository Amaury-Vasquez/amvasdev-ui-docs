import type { Metadata } from "next";
import { COMPONENTS_DATA } from "@/data/components";
import ComboboxPage from "@/modules/ComboboxPage";

const componentData = COMPONENTS_DATA.combobox;

export const metadata: Metadata = {
  title: `${componentData.name} | Amvasdev UI`,
  description: componentData.description,
};

export default function Page() {
  return <ComboboxPage />;
}
