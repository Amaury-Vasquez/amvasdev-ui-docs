"use client";
import { Checkbox } from "amvasdev-ui";
import ExampleBlock from "@/components/documentation/ExampleBlock";

const ErrorMessageExample = () => (
  <ExampleBlock
    title="With Error Message"
    preview={
      <Checkbox
        id="terms-error"
        label="I agree to the terms and conditions"
        errorMessage="You must accept the terms"
        required
      />
    }
    code={`<Checkbox
  id="terms"
  label="I agree to the terms and conditions"
  errorMessage="You must accept the terms"
  required
/>`}
  />
);

export default ErrorMessageExample;
