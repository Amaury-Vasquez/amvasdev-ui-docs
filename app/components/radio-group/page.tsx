"use client";
import { RadioGroup, RadioOption } from "amvasdev-ui";
import { useState } from "react";
import { COMPONENTS_DATA } from "@/data/components";

const radioGroupData = COMPONENTS_DATA["radio-group"];

export default function RadioGroupPage() {
  const [selectedOption, setSelectedOption] = useState<RadioOption>();
  const [selectedOption2, setSelectedOption2] = useState<RadioOption>();

  const options = [
    { id: "yes", name: "Yes" },
    { id: "no", name: "No" },
    { id: "maybe", name: "Maybe", label: "Maybe Later" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">{radioGroupData.name}</h1>
        <p className="text-lg text-base-content/80">
          {radioGroupData.description}
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-3">Import</h2>
        <div className="mockup-code">
          <pre>
            <code>{radioGroupData.importStatement}</code>
          </pre>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Examples</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">Basic Usage</h3>
            <div className="p-6 bg-base-200 rounded-lg mb-4">
              <RadioGroup
                id="confirmation"
                options={options}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
                orientation="horizontal"
                size="md"
                variant="primary"
              />
            </div>
            <div className="mockup-code">
              <pre>
                <code>
                  {`import { useState } from "react";
  import { RadioGroup } from "amvasdev-ui";

  function App() {
    const [selectedOption, setSelectedOption] = useState();

    const options = [
      { id: "yes", name: "Yes" },
      { id: "no", name: "No" },
      { id: "maybe", name: "Maybe", label: "Maybe Later" },
    ];

    return (
      <RadioGroup
        id="confirmation"
        options={options}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        orientation="horizontal"
        size="md"
        variant="primary"
      />
    );
  }`}
                </code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Vertical Orientation</h3>
            <div className="p-6 bg-base-200 rounded-lg mb-4">
              <RadioGroup
                id="choice"
                options={options}
                selectedOption={selectedOption2}
                setSelectedOption={setSelectedOption2}
                orientation="vertical"
              />
            </div>
            <div className="mockup-code">
              <pre>
                <code>
                  {`<RadioGroup
    id="choice"
    options={options}
    selectedOption={selectedOption}
    setSelectedOption={setSelectedOption}
    orientation="vertical"
  />`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {(radioGroupData.variants?.length ?? 0) > 0 ? (
        <div>
          <h2 className="text-2xl font-semibold mb-3">Available Variants</h2>
          <div className="flex flex-wrap gap-2">
            {radioGroupData.variants?.map((variant) => (
              <code
                key={variant}
                className="px-3 py-1 bg-base-300 rounded-md text-sm font-mono"
              >
                {variant}
              </code>
            ))}
          </div>
        </div>
      ) : null}

      {(radioGroupData.sizes?.length ?? 0) > 0 ? (
        <div>
          <h2 className="text-2xl font-semibold mb-3">Available Sizes</h2>
          <div className="flex flex-wrap gap-2">
            {radioGroupData.sizes?.map((size) => (
              <code
                key={size}
                className="px-3 py-1 bg-base-300 rounded-md text-sm font-mono"
              >
                {size}
              </code>
            ))}
          </div>
        </div>
      ) : null}

      {(radioGroupData.notes?.length ?? 0) > 0 ? (
        <div>
          <h2 className="text-2xl font-semibold mb-3">Notes</h2>
          <ul className="list-disc list-inside space-y-2 text-base-content/70">
            {radioGroupData.notes?.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
