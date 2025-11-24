"use client";
import { IconButton } from "amvasdev-ui";
import { Edit, Trash } from "lucide-react";
import ExampleBlock from "@/components/documentation/ExampleBlock";

const TooltipExample = () => (
  <ExampleBlock
    title="With Tooltip"
    preview={
      <div className="flex gap-4">
        <IconButton icon={<Edit size={18} />} tooltip="Edit item" />
        <IconButton
          icon={<Trash size={18} />}
          tooltip={{ content: "Delete", position: "left" }}
        />
      </div>
    }
    code={`import { Edit, Trash } from "lucide-react";
  import { IconButton } from "amvasdev-ui";

  <IconButton icon={<Edit size={18} />} tooltip="Edit item" />

  <IconButton
    icon={<Trash size={18} />}
    tooltip={{ content: "Delete", position: "left" }}
  />`}
  />
);

export default TooltipExample;
