"use client";
import { Select, Tooltip } from "amvasdev-ui";
import { useState } from "react";
import { COMPONENTS_DATA } from "@/data/components";

const tooltipData = COMPONENTS_DATA.tooltip;

const POSITION_OPTIONS = [
  { id: "top", text: "Top" },
  { id: "down", text: "Down" },
  { id: "left", text: "Left" },
  { id: "right", text: "Right" },
];

export default function TooltipPage() {
  const [position, setPosition] = useState(POSITION_OPTIONS[0]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">{tooltipData.name}</h1>
        <p className="text-lg text-base-content/80">
          {tooltipData.description}
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-3">Import</h2>
        <div className="mockup-code">
          <pre>
            <code>{tooltipData.importStatement}</code>
          </pre>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Examples</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">Basic Usage</h3>
            <div className="p-6 bg-base-200 rounded-lg mb-4">
              <span className="relative">
                Look at me
                <Tooltip content="This is a helpful tooltip" position="top" />
              </span>
            </div>
            <div className="mockup-code">
              <pre>
                <code>
                  {`<span className="relative">
    Look at me
    <Tooltip content="This is a helpful tooltip" position="top" />
  </span>`}
                </code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Different Positions</h3>
            <div className="p-6 bg-base-200 rounded-lg mb-4 h-fit justify-start flex items-center gap-4">
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
            <div className="mockup-code">
              <pre>
                <code>
                  {`<span className="relative">
    Look at me
    <Tooltip content="${position.text} tooltip" position="${position.id}" />
  </span>`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {(tooltipData.notes?.length ?? 0) > 0 ? (
        <div>
          <h2 className="text-2xl font-semibold mb-3">Notes</h2>
          <ul className="list-disc list-inside space-y-2 text-base-content/70">
            {tooltipData.notes?.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
