import type { Metadata } from "next";
import { COMPONENTS_DATA } from "@/data/components";
import CalendarPage from "@/modules/CalendarPage";

const componentData = COMPONENTS_DATA.calendar;

export const metadata: Metadata = {
  title: `${componentData.name} | Amvasdev UI`,
  description: componentData.description,
};

export default function Page() {
  return <CalendarPage />;
}
