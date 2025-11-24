import type { Metadata } from "next";
import { COMPONENTS_DATA } from "@/data/components";
import IconButtonPage from "@/modules/IconButtonPage";

const componentData = COMPONENTS_DATA["icon-button"];

export const metadata: Metadata = {
  title: `${componentData.name} | Amvasdev UI`,
  description: componentData.description,
};

export default function Page() {
  return <IconButtonPage />;
}
