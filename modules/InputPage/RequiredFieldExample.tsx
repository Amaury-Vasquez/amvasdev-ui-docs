"use client";
import { Input } from "amvasdev-ui";
import ExampleBlock from "@/components/documentation/ExampleBlock";

const RequiredFieldExample = () => (
  <ExampleBlock
    title="Required Field"
    preview={<Input id="required" label="Required Field" required />}
    code={`<Input id="required" label="Required Field" required />`}
  />
);

export default RequiredFieldExample;
