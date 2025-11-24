import type { Metadata } from "next";
import { UTILITIES_DATA } from "@/data/utilities";
import ButtonUtilitiesPage from "@/modules/ButtonUtilitiesPage";

const utilityData = UTILITIES_DATA.button;

export const metadata: Metadata = {
  title: `${utilityData.name} | Amvasdev UI`,
  description: utilityData.description,
};

export default function Page() {
  return <ButtonUtilitiesPage />;
}
