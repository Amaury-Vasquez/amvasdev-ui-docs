"use client";
import { Input } from "amvasdev-ui";
import ExampleBlock from "@/components/documentation/ExampleBlock";

const BasicUsageExample = () => (
  <ExampleBlock
    title="Basic Usage"
    preview={<Input id="username" label="Username" />}
    code={`<Input id="username" label="Username" />`}
  />
);

export default BasicUsageExample;
