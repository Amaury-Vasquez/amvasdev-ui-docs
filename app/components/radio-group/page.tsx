import type { Metadata } from "next";
import { COMPONENTS_DATA } from "@/data/components";
import RadioGroupPage from "@/modules/RadioGroupPage";

const componentData = COMPONENTS_DATA["radio-group"];

export const metadata: Metadata = {
  title: `${componentData.name} | Amvasdev UI`,
  description: componentData.description,
};

export default function Page() {
  return <RadioGroupPage />;
}
