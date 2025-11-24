import type { Metadata } from "next";
import HooksIndexPage from "@/modules/HooksIndexPage";

export const metadata: Metadata = {
  title: "Hooks | Amvasdev UI",
  description:
    "Custom React hooks provided by amvasdev-ui for common UI patterns and utilities.",
};

export default function Page() {
  return <HooksIndexPage />;
}
