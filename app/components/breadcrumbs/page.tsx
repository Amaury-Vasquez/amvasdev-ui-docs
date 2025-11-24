import type { Metadata } from "next";
import { COMPONENTS_DATA } from "@/data/components";
import BreadcrumbsPage from "@/modules/BreadcrumbsPage";

const componentData = COMPONENTS_DATA.breadcrumbs;

export const metadata: Metadata = {
  title: `${componentData.name} | Amvasdev UI`,
  description: componentData.description,
};

export default function Page() {
  return <BreadcrumbsPage />;
}
