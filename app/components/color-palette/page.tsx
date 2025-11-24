import type { Metadata } from "next";
import { COMPONENTS_DATA } from "@/data/components";
import ColorPalettePage from "@/modules/ColorPalettePage";

const componentData = COMPONENTS_DATA["color-palette"];

export const metadata: Metadata = {
  title: `${componentData.name} | Amvasdev UI`,
  description: componentData.description,
};

export default function Page() {
  return <ColorPalettePage />;
}
