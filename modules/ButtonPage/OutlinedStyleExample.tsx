"use client";
import { Button } from "amvasdev-ui";
import ExampleBlock from "@/components/documentation/ExampleBlock";

const OutlinedStyleExample = () => (
  <ExampleBlock
    title="Outlined Style"
    preview={
      <>
        <Button variant="primary" outlined>
          Outlined Primary
        </Button>
        <Button variant="error" outlined>
          Outlined Error
        </Button>
      </>
    }
    previewClassName="p-6 bg-base-200 rounded-lg mb-4 flex flex-wrap gap-3"
    code={`<Button variant="primary" outlined>Outlined Primary</Button>
  <Button variant="error" outlined>Outlined Error</Button>`}
  />
);

export default OutlinedStyleExample;
