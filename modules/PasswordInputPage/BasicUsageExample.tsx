"use client";
import { PasswordInput } from "amvasdev-ui";
import ExampleBlock from "@/components/documentation/ExampleBlock";

const BasicUsageExample = () => (
  <ExampleBlock
    title="Basic Usage"
    preview={
      <PasswordInput
        id="password"
        label="Password"
        placeholder="Enter your password"
      />
    }
    code={`<PasswordInput
  id="password"
  label="Password"
  placeholder="Enter your password"
/>`}
  />
);

export default BasicUsageExample;
