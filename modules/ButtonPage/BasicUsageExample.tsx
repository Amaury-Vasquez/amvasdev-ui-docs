"use client";
import { Button } from "amvasdev-ui";
import ExampleBlock from "@/components/documentation/ExampleBlock";

const BasicUsageExample = () => (
  <ExampleBlock
    title="Basic Usage"
    preview={
      <Button id="basic-button-example" aria-label="Basic button example">
        Click me
      </Button>
    }
    code={`<Button>Click me</Button>`}
  />
);

export default BasicUsageExample;
