import type { Metadata } from "next";
import { HOOKS_DATA } from "@/data/hooks";
import UseTogglePage from "@/modules/UseTogglePage";

const hookData = HOOKS_DATA["use-toggle"];

export const metadata: Metadata = {
  title: `${hookData.name} | Amvasdev UI`,
  description: hookData.description,
};

export default function Page() {
  return <UseTogglePage />;
}
