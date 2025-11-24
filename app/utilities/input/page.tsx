import type { Metadata } from "next";
import { UTILITIES_DATA } from "@/data/utilities";
import InputUtilitiesPage from "@/modules/InputUtilitiesPage";

const utilityData = UTILITIES_DATA.input;

export const metadata: Metadata = {
  title: `${utilityData.name} | Amvasdev UI`,
  description: utilityData.description,
};

export default function Page() {
  return <InputUtilitiesPage />;
}
