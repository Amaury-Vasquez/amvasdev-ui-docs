import type { Metadata } from "next";
import { COMPONENTS_DATA } from "@/data/components";
import ModalPage from "@/modules/ModalPage";

const componentData = COMPONENTS_DATA.modal;

export const metadata: Metadata = {
  title: `${componentData.name} | Amvasdev UI`,
  description: componentData.description,
};

export default function Page() {
  return <ModalPage />;
}
