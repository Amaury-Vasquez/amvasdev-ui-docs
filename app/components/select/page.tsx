"use client";
import { Select } from "amvasdev-ui";
import { useState } from "react";
import { COMPONENTS_DATA } from "@/data/components";

const selectData = COMPONENTS_DATA.select;

const OPTIONS = [
  { id: "1", text: "Option 1" },
  { id: "2", text: "Option 2" },
  { id: "3", text: "Option 3" },
];

export default function SelectPage() {
  const [selectedOption, setSelectedOption] = useState(OPTIONS[0]);
  const [selectedOption2, setSelectedOption2] = useState(OPTIONS[0]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">{selectData.name}</h1>
        <p className="text-lg text-base-content/80">{selectData.description}</p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-3">Import</h2>
        <div className="mockup-code">
          <pre>
            <code>{selectData.importStatement}</code>
          </pre>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Examples</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">Basic Usage</h3>
            <div className="p-6 bg-base-200 rounded-lg mb-4">
              <Select
                id="select"
                label="Choose an option"
                options={OPTIONS}
                onChange={setSelectedOption}
                value={selectedOption}
                placeholder="Select an option"
              />
            </div>
            <div className="mockup-code">
              <pre>
                <code>
                  {`import { useState } from "react";
  import { Select } from "amvasdev-ui";

  function App() {
    const [selectedOption, setSelectedOption] = useState();

    const options = [
      { id: "1", text: "Option 1" },
      { id: "2", text: "Option 2" },
      { id: "3", text: "Option 3" },
    ];

    return (
      <Select
        id="select"
        label="Choose an option"
        options={options}
        onChange={setSelectedOption}
        value={selectedOption}
        placeholder="Select an option"
      />
    );
  }`}
                </code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">With Validation</h3>
            <div className="p-6 bg-base-200 rounded-lg mb-4">
              <Select
                id="select2"
                label="Required field"
                options={OPTIONS}
                onChange={setSelectedOption2}
                value={selectedOption2}
                bordered={true}
                errorMessage="This field is required"
                required
              />
            </div>
            <div className="mockup-code">
              <pre>
                <code>
                  {`<Select
    id="select"
    label="Required field"
    options={options}
    onChange={setSelectedOption}
    value={selectedOption}
    bordered={true}
    errorMessage="This field is required"
    required
  />`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {(selectData.sizes?.length ?? 0) > 0 ? (
        <div>
          <h2 className="text-2xl font-semibold mb-3">Available Sizes</h2>
          <div className="flex flex-wrap gap-2">
            {selectData.sizes?.map((size) => (
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

      {(selectData.notes?.length ?? 0) > 0 ? (
        <div>
          <h2 className="text-2xl font-semibold mb-3">Notes</h2>
          <ul className="list-disc list-inside space-y-2 text-base-content/70">
            {selectData.notes?.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
