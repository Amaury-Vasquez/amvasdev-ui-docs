import type { Metadata } from "next";
import { HOOKS_DATA } from "@/data/hooks";
import UseThemeChangePage from "@/modules/UseThemeChangePage";

const hookData = HOOKS_DATA["use-theme-change"];

export const metadata: Metadata = {
  title: `${hookData.name} | Amvasdev UI`,
  description: hookData.description,
};

export default function Page() {
  return <UseThemeChangePage />;
}
