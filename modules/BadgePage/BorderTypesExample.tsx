"use client";
import { Badge } from "amvasdev-ui";
import ExampleBlock from "@/components/documentation/ExampleBlock";

const BorderTypesExample = () => (
  <ExampleBlock
    title="Border Types"
    preview={
      <div className="flex flex-wrap gap-3">
        <Badge borderType="outline" variant="primary">
          Outlined
        </Badge>
        <Badge borderType="dash" variant="secondary">
          Dashed
        </Badge>
        <Badge borderType="none">No Border</Badge>
      </div>
    }
    code={`<Badge borderType="outline" variant="primary">Outlined</Badge>
  <Badge borderType="dash" variant="secondary">Dashed</Badge>
  <Badge borderType="none">No Border</Badge>`}
  />
);

export default BorderTypesExample;
