"use client";
import { HamburgerMenu } from "amvasdev-ui";
import { Menu } from "lucide-react";
import ExampleBlock from "@/components/documentation/ExampleBlock";

const BasicUsageExample = () => (
  <ExampleBlock
    title="Basic Usage"
    preview={
      <HamburgerMenu icon={Menu}>
        <li>
          <a>Profile</a>
        </li>
        <li>
          <a>Settings</a>
        </li>
        <li>
          <a>Logout</a>
        </li>
      </HamburgerMenu>
    }
    code={`import { Menu } from "lucide-react";
  import { HamburgerMenu } from "amvasdev-ui";

  <HamburgerMenu icon={Menu}>
    <li><a>Profile</a></li>
    <li><a>Settings</a></li>
    <li><a>Logout</a></li>
  </HamburgerMenu>`}
  />
);

export default BasicUsageExample;
