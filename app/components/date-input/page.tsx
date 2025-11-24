import type { Metadata } from "next";
import { COMPONENTS_DATA } from "@/data/components";
import DateInputPage from "@/modules/DateInputPage";

const componentData = COMPONENTS_DATA["date-input"];

export const metadata: Metadata = {
  title: `${componentData.name} | Amvasdev UI`,
  description: componentData.description,
};

export default function Page() {
  return <DateInputPage />;
}
