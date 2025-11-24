"use client";
import { Badge } from "amvasdev-ui";
import ExampleBlock from "@/components/documentation/ExampleBlock";

const SoftStyleExample = () => (
  <ExampleBlock
    title="Soft Style"
    preview={
      <div className="flex flex-wrap gap-3">
        <Badge variant="success" soft>
          Soft Success
        </Badge>
        <Badge variant="warning" soft>
          Soft Warning
        </Badge>
      </div>
    }
    code={`<Badge variant="success" soft>Soft Success</Badge>
  <Badge variant="warning" soft>Soft Warning</Badge>`}
  />
);

export default SoftStyleExample;
