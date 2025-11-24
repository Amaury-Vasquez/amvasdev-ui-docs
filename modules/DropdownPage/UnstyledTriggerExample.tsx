"use client";
import { Dropdown } from "amvasdev-ui";
import ExampleBlock from "@/components/documentation/ExampleBlock";

const UnstyledTriggerExample = () => (
  <ExampleBlock
    title="With Unstyled Trigger"
    preview={
      <Dropdown
        triggerElement={<span>Custom Trigger</span>}
        unstyledTrigger={true}
        position="right"
      >
        <li>
          <a>Option 1</a>
        </li>
        <li>
          <a>Option 2</a>
        </li>
      </Dropdown>
    }
    code={`<Dropdown
  triggerElement={<span>Custom Trigger</span>}
  unstyledTrigger={true}
  position="right"
>
  <li>
    <a>Option 1</a>
  </li>
  <li>
    <a>Option 2</a>
  </li>
</Dropdown>`}
  />
);

export default UnstyledTriggerExample;
