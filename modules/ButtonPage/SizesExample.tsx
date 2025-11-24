"use client";
import { Button } from "amvasdev-ui";
import ExampleBlock from "@/components/documentation/ExampleBlock";

const SizesExample = () => (
  <ExampleBlock
    title="Sizes"
    preview={
      <>
        <Button size="xs">Extra Small</Button>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </>
    }
    previewClassName="p-6 bg-base-200 rounded-lg mb-4 flex flex-wrap items-center gap-3"
    code={`<Button size="xs">Extra Small</Button>
  <Button size="sm">Small</Button>
  <Button size="md">Medium</Button>
  <Button size="lg">Large</Button>`}
  />
);

export default SizesExample;
