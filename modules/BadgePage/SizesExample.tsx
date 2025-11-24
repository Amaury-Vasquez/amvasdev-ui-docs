"use client";
import { Badge } from "amvasdev-ui";
import ExampleBlock from "@/components/documentation/ExampleBlock";

const SizesExample = () => (
  <ExampleBlock
    title="Sizes"
    preview={
      <div className="flex flex-wrap items-center gap-3">
        <Badge size="xs">Extra Small</Badge>
        <Badge size="sm">Small</Badge>
        <Badge size="md">Medium</Badge>
        <Badge size="lg">Large</Badge>
        <Badge size="xl">Extra Large</Badge>
      </div>
    }
    code={`<Badge size="xs">Extra Small</Badge>
  <Badge size="sm">Small</Badge>
  <Badge size="md">Medium</Badge>
  <Badge size="lg">Large</Badge>
  <Badge size="xl">Extra Large</Badge>`}
  />
);

export default SizesExample;
