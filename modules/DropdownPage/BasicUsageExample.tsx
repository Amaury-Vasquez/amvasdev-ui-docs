"use client";
import { Dropdown } from "amvasdev-ui";
import ExampleBlock from "@/components/documentation/ExampleBlock";

const BasicUsageExample = () => (
  <ExampleBlock
    title="Basic Usage"
    preview={
      <Dropdown triggerElement={<span>Menu</span>}>
        <li>
          <a>Profile</a>
        </li>
        <li>
          <a>Settings</a>
        </li>
        <li>
          <a>Logout</a>
        </li>
      </Dropdown>
    }
    code={`<Dropdown triggerElement={<span>Menu</span>}>
  <li>
    <a>Profile</a>
  </li>
  <li>
    <a>Settings</a>
  </li>
  <li>
    <a>Logout</a>
  </li>
</Dropdown>`}
  />
);

export default BasicUsageExample;
