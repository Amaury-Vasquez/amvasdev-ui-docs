import type { Metadata } from "next";
import ThemingPage from "@/modules/ThemingPage";

export const metadata: Metadata = {
  title: "Theming Guide | Amvasdev UI",
  description:
    "Learn how to customize and apply themes in amvasdev-ui. Built on DaisyUI's theming system, you can easily switch between pre-built themes or create your own custom themes.",
};

export default function Page() {
  return <ThemingPage />;
}
