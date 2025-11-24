import type { Metadata } from "next";
import UtilitiesIndexPage from "@/modules/UtilitiesIndexPage";

export const metadata: Metadata = {
  title: "Utilities | Amvasdev UI",
  description:
    "Utility functions for generating class names and styling components with programmatic access to the styling system.",
};

export default function Page() {
  return <UtilitiesIndexPage />;
}
