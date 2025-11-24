import type { Metadata } from "next";
import ComponentsIndexPage from "@/modules/ComponentsIndexPage";

export const metadata: Metadata = {
  title: "Components | Amvasdev UI",
  description: "Explore all available components in the amvasdev-ui library.",
};

export default function Page() {
  return <ComponentsIndexPage />;
}
