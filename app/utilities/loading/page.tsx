import type { Metadata } from "next";
import { UTILITIES_DATA } from "@/data/utilities";
import LoadingUtilitiesPage from "@/modules/LoadingUtilitiesPage";

const utilityData = UTILITIES_DATA.loading;

export const metadata: Metadata = {
  title: `${utilityData.name} | Amvasdev UI`,
  description: utilityData.description,
};

export default function Page() {
  return <LoadingUtilitiesPage />;
}
