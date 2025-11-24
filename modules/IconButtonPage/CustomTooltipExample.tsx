"use client";
import { IconButton } from "amvasdev-ui";
import { Trash } from "lucide-react";
import ExampleBlock from "@/components/documentation/ExampleBlock";

const CustomTooltipExample = () => (
  <ExampleBlock
    title="With Custom Tooltip Content"
    preview={
      <IconButton
        icon={<Trash size={18} />}
        tooltip={{
          content: (
            <div className="flex flex-col">
              <span className="font-bold">Delete</span>
              <span className="text-xs">Cannot be undone</span>
            </div>
          ),
          position: "down",
        }}
      />
    }
    code={`<IconButton
  icon={<Trash size={18} />}
  tooltip={{
    content: (
      <div className="flex flex-col">
        <span className="font-bold">Delete</span>
        <span className="text-xs">Cannot be undone</span>
      </div>
    ),
    position: "down",
  }}
/>`}
  />
);

export default CustomTooltipExample;
