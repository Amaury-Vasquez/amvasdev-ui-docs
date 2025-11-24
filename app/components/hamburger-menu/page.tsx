import type { Metadata } from "next";
import { COMPONENTS_DATA } from "@/data/components";
import HamburgerMenuPage from "@/modules/HamburgerMenuPage";

const componentData = COMPONENTS_DATA["hamburger-menu"];

export const metadata: Metadata = {
  title: `${componentData.name} | Amvasdev UI`,
  description: componentData.description,
};

export default function Page() {
  return <HamburgerMenuPage />;
}
