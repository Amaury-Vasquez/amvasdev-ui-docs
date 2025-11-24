import type { Metadata } from "next";
import InstallationPage from "@/modules/InstallationPage";

export const metadata: Metadata = {
  title: "Installation | Amvasdev UI",
  description:
    "Get started with amvasdev-ui in your React project. Follow these steps to install and configure the library.",
};

export default function Page() {
  return <InstallationPage />;
}
