"use client";
import { Button } from "amvasdev-ui";
import ExampleBlock from "@/components/documentation/ExampleBlock";

const VariantsExample = () => (
  <ExampleBlock
    title="Variants"
    preview={
      <>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button variant="error">Error</Button>
        <Button variant="ghost">Ghost</Button>
      </>
    }
    previewClassName="p-6 bg-base-200 rounded-lg mb-4 flex flex-wrap gap-3"
    code={`<Button variant="primary">Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="success">Success</Button>
  <Button variant="error">Error</Button>
  <Button variant="ghost">Ghost</Button>`}
  />
);

export default VariantsExample;
