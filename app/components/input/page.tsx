import type { Metadata } from "next";
import { COMPONENTS_DATA } from "@/data/components";
import InputPage from "@/modules/InputPage";

const componentData = COMPONENTS_DATA.input;

export const metadata: Metadata = {
  title: `${componentData.name} | Amvasdev UI`,
  description: componentData.description,
};

export default function Page() {
  return <InputPage />;
}
