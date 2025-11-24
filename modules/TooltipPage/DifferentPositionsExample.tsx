"use client";
import { Select, Tooltip } from "amvasdev-ui";
import { useState } from "react";
import ExampleBlock from "@/components/documentation/ExampleBlock";

const POSITION_OPTIONS = [
  { id: "top", text: "Top" },
  { id: "down", text: "Down" },
  { id: "left", text: "Left" },
  { id: "right", text: "Right" },
];

const DifferentPositionsExample = () => {
  const [position, setPosition] = useState(POSITION_OPTIONS[0]);

  return (
    <ExampleBlock
      title="Different Positions"
      preview={
        <div className="flex items-center gap-4">
          <Select
            id="position-select"
            label="Choose tooltip position"
            options={POSITION_OPTIONS}
            value={position}
            onChange={setPosition}
            containerClassName="w-40"
            className="w-40"
          />
          <span className="relative">
            Look at me
            <Tooltip
              content={`${position.text} tooltip`}
              position={position.id as "top" | "down" | "left" | "right"}
            />
          </span>
        </div>
      }
      code={`<span className="relative">
  Look at me
  <Tooltip content="${position.text} tooltip" position="${position.id}" />
</span>`}
    />
  );
};

export default DifferentPositionsExample;
