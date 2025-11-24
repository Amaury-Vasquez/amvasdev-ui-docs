"use client";
import { Badge } from "amvasdev-ui";
import ExampleBlock from "@/components/documentation/ExampleBlock";

const BasicUsageExample = () => (
  <ExampleBlock
    title="Basic Usage"
    preview={<Badge>Default</Badge>}
    code={`<Badge>Default</Badge>`}
  />
);

export default BasicUsageExample;
