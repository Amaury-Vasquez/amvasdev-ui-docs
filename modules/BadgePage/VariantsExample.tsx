"use client";
import { Badge } from "amvasdev-ui";
import ExampleBlock from "@/components/documentation/ExampleBlock";

const VariantsExample = () => (
  <ExampleBlock
    title="Variants"
    preview={
      <div className="flex flex-wrap gap-3">
        <Badge variant="primary">Primary</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="error">Error</Badge>
      </div>
    }
    code={`<Badge variant="primary">Primary</Badge>
  <Badge variant="success">Success</Badge>
  <Badge variant="warning">Warning</Badge>
  <Badge variant="error">Error</Badge>`}
  />
);

export default VariantsExample;
