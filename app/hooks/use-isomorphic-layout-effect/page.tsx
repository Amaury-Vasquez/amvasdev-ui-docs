import type { Metadata } from "next";
import { HOOKS_DATA } from "@/data/hooks";
import UseIsomorphicLayoutEffectPage from "@/modules/UseIsomorphicLayoutEffectPage";

const hookData = HOOKS_DATA["use-isomorphic-layout-effect"];

export const metadata: Metadata = {
  title: `${hookData.name} | Amvasdev UI`,
  description: hookData.description,
};

export default function Page() {
  return <UseIsomorphicLayoutEffectPage />;
}
