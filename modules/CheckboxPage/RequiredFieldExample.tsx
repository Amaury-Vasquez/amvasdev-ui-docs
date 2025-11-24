"use client";
import { Checkbox } from "amvasdev-ui";
import ExampleBlock from "@/components/documentation/ExampleBlock";

const RequiredFieldExample = () => (
  <ExampleBlock
    title="Required Field"
    preview={
      <Checkbox
        id="terms-required"
        label="I agree to the terms and conditions"
        required
      />
    }
    code={`<Checkbox
  id="terms"
  label="I agree to the terms and conditions"
  required
/>`}
  />
);

export default RequiredFieldExample;
