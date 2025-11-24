import type { Metadata } from "next";
import { UTILITIES_DATA } from "@/data/utilities";
import IconButtonUtilitiesPage from "@/modules/IconButtonUtilitiesPage";

const utilityData = UTILITIES_DATA["icon-button"];

export const metadata: Metadata = {
  title: `${utilityData.name} | Amvasdev UI`,
  description: utilityData.description,
};

export default function Page() {
  return <IconButtonUtilitiesPage />;
}
