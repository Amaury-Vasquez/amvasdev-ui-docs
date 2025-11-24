import type { Metadata } from "next";
import { HOOKS_DATA } from "@/data/hooks";
import UseClosableContainerPage from "@/modules/UseClosableContainerPage";

const hookData = HOOKS_DATA["use-closable-container"];

export const metadata: Metadata = {
  title: `${hookData.name} | Amvasdev UI`,
  description: hookData.description,
};

export default function Page() {
  return <UseClosableContainerPage />;
}
