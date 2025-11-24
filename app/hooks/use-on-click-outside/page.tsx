import type { Metadata } from "next";
import { HOOKS_DATA } from "@/data/hooks";
import UseOnClickOutsidePage from "@/modules/UseOnClickOutsidePage";

const hookData = HOOKS_DATA["use-on-click-outside"];

export const metadata: Metadata = {
  title: `${hookData.name} | Amvasdev UI`,
  description: hookData.description,
};

export default function Page() {
  return <UseOnClickOutsidePage />;
}
