"use client";
import { HamburgerMenu } from "amvasdev-ui";
import { Menu } from "lucide-react";
import ExampleBlock from "@/components/documentation/ExampleBlock";

const CustomPositionExample = () => (
  <ExampleBlock
    title="With Custom Position"
    preview={
      <HamburgerMenu icon={Menu} position="right">
        <li>
          <a>Option 1</a>
        </li>
        <li>
          <a>Option 2</a>
        </li>
      </HamburgerMenu>
    }
    code={`<HamburgerMenu icon={Menu} position="right">
  <li><a>Option 1</a></li>
  <li><a>Option 2</a></li>
</HamburgerMenu>`}
  />
);

export default CustomPositionExample;
