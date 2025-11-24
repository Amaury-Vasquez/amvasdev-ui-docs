"use client";
import { Input } from "amvasdev-ui";
import ExampleBlock from "@/components/documentation/ExampleBlock";

const SizesExample = () => (
  <ExampleBlock
    title="Sizes"
    preview={
      <div className="space-y-4">
        <Input id="xs" label="Extra Small" size="xs" />
        <Input id="sm" label="Small" size="sm" />
        <Input id="md" label="Medium" size="md" />
        <Input id="lg" label="Large" size="lg" />
      </div>
    }
    code={`<Input id="xs" label="Extra Small" size="xs" />
<Input id="sm" label="Small" size="sm" />
<Input id="md" label="Medium" size="md" />
<Input id="lg" label="Large" size="lg" />`}
  />
);

export default SizesExample;
