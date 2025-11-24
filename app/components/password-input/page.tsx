import type { Metadata } from "next";
import { COMPONENTS_DATA } from "@/data/components";
import PasswordInputPage from "@/modules/PasswordInputPage";

const componentData = COMPONENTS_DATA["password-input"];

export const metadata: Metadata = {
  title: `${componentData.name} | Amvasdev UI`,
  description: componentData.description,
};

export default function Page() {
  return <PasswordInputPage />;
}
