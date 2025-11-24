"use client";
import { Input } from "amvasdev-ui";
import ExampleBlock from "@/components/documentation/ExampleBlock";

const VariantsExample = () => (
  <ExampleBlock
    title="Variants"
    preview={
      <div className="space-y-4">
        <Input id="primary" label="Primary" variant="primary" />
        <Input id="success" label="Success" variant="success" />
        <Input
          id="error"
          label="Error"
          variant="error"
          errorMessage="This field is required"
        />
      </div>
    }
    code={`<Input id="primary" label="Primary" variant="primary" />
<Input id="success" label="Success" variant="success" />
<Input
  id="error"
  label="Error"
  variant="error"
  errorMessage="This field is required"
/>`}
  />
);

export default VariantsExample;
