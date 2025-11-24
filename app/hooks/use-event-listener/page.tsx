import type { Metadata } from "next";
import { HOOKS_DATA } from "@/data/hooks";
import UseEventListenerPage from "@/modules/UseEventListenerPage";

const hookData = HOOKS_DATA["use-event-listener"];

export const metadata: Metadata = {
  title: `${hookData.name} | Amvasdev UI`,
  description: hookData.description,
};

export default function Page() {
  return <UseEventListenerPage />;
}
