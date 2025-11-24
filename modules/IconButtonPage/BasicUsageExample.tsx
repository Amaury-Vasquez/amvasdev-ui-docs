"use client";
import { IconButton } from "amvasdev-ui";
import { Settings } from "lucide-react";
import ExampleBlock from "@/components/documentation/ExampleBlock";

const BasicUsageExample = () => (
  <ExampleBlock
    title="Basic Usage"
    preview={
      <IconButton
        icon={<Settings size={20} />}
        id="basic-icon-button-example"
        aria-label="Settings button"
      />
    }
    code={`import { Settings } from "lucide-react";
  import { IconButton } from "amvasdev-ui";

  <IconButton icon={<Settings size={20} />} />`}
  />
);

export default BasicUsageExample;
