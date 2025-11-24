"use client";
import { ColorPalette } from "amvasdev-ui";
import ExampleBlock from "@/components/documentation/ExampleBlock";

const BasicUsageExample = () => (
  <ExampleBlock
    title="Basic Usage"
    preview={<ColorPalette theme="emerald" />}
    code={`<ColorPalette theme="emerald" />`}
  />
);

export default BasicUsageExample;
