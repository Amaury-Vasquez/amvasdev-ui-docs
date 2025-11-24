import type { Metadata } from "next";
import { COMPONENTS_DATA } from "@/data/components";
import ActionModalPage from "@/modules/ActionModalPage";

const componentData = COMPONENTS_DATA["action-modal"];

export const metadata: Metadata = {
  title: `${componentData.name} | Amvasdev UI`,
  description: componentData.description,
};

export default function Page() {
  return <ActionModalPage />;
}
