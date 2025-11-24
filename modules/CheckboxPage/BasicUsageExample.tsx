"use client";
import { Checkbox } from "amvasdev-ui";
import ExampleBlock from "@/components/documentation/ExampleBlock";

const BasicUsageExample = () => (
  <ExampleBlock
    title="Basic Usage"
    preview={<Checkbox id="terms" label="I agree to the terms and conditions" />}
    code={`<Checkbox id="terms" label="I agree to the terms and conditions" />`}
  />
);

export default BasicUsageExample;
