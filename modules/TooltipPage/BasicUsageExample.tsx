"use client";
import { Tooltip } from "amvasdev-ui";
import ExampleBlock from "@/components/documentation/ExampleBlock";

const BasicUsageExample = () => (
  <ExampleBlock
    title="Basic Usage"
    preview={
      <span className="relative">
        Look at me
        <Tooltip content="This is a helpful tooltip" position="top" />
      </span>
    }
    code={`<span className="relative">
  Look at me
  <Tooltip content="This is a helpful tooltip" position="top" />
</span>`}
  />
);

export default BasicUsageExample;
