"use client";
import { Checkbox } from "amvasdev-ui";
import ExampleBlock from "@/components/documentation/ExampleBlock";

const VariantsAndSizesExample = () => (
  <ExampleBlock
    title="Variants and Sizes"
    preview={
      <div className="space-y-4">
        <Checkbox
          id="accept"
          label="Accept"
          variant="primary"
          size="lg"
        />
        <Checkbox
          id="confirm"
          label="Confirm"
          variant="success"
          size="md"
        />
      </div>
    }
    code={`<Checkbox id="accept" label="Accept" variant="primary" size="lg" />
  <Checkbox id="confirm" label="Confirm" variant="success" size="md" />`}
  />
);

export default VariantsAndSizesExample;
