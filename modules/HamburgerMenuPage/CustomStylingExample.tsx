"use client";
import { HamburgerMenu } from "amvasdev-ui";
import { Menu } from "lucide-react";
import ExampleBlock from "@/components/documentation/ExampleBlock";

const CustomStylingExample = () => (
  <ExampleBlock
    title="Custom Icon Size and Styling"
    preview={
      <HamburgerMenu
        icon={Menu}
        iconSize={24}
        iconButtonClassName="text-primary"
        menuClassName="min-w-48"
      >
        <li>
          <a>Dashboard</a>
        </li>
        <li>
          <a>Analytics</a>
        </li>
        <li>
          <a>Reports</a>
        </li>
      </HamburgerMenu>
    }
    code={`<HamburgerMenu
  icon={Menu}
  iconSize={24}
  iconButtonClassName="text-primary"
  menuClassName="min-w-48"
>
  <li><a>Dashboard</a></li>
  <li><a>Analytics</a></li>
  <li><a>Reports</a></li>
</HamburgerMenu>`}
  />
);

export default CustomStylingExample;
