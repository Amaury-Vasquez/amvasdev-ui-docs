import type { Metadata } from "next";
import { COMPONENTS_DATA } from "@/data/components";
import ButtonPage from "@/modules/ButtonPage";

const componentData = COMPONENTS_DATA.button;

export const metadata: Metadata = {
  title: `${componentData.name} | Amvasdev UI`,
  description: componentData.description,
};

export default function Page() {
  return <ButtonPage />;
}
