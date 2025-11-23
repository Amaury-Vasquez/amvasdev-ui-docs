"use client";
import { Combobox, IComboboxOption } from "amvasdev-ui";
import { useState } from "react";
import { COMPONENTS_DATA } from "@/data/components";

const comboboxData = COMPONENTS_DATA.combobox;

const OPTIONS: IComboboxOption[] = [
  { id: "1", text: "Apple" },
  { id: "2", text: "Banana" },
  { id: "3", text: "Cherry" },
  { id: "4", text: "Date" },
];

export default function ComboboxPage() {
  const [value, setValue] = useState("");
  const [selectedOption, setSelectedOption] = useState<
    IComboboxOption | null | undefined
  >(null);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">{comboboxData.name}</h1>
        <p className="text-lg text-base-content/80">
          {comboboxData.description}
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-3">Import</h2>
        <div className="mockup-code">
          <pre>
            <code>{comboboxData.importStatement}</code>
          </pre>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Examples</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">Basic Usage</h3>
            <div className="p-6 bg-base-200 rounded-lg mb-4">
              <Combobox
                id="fruits"
                name="fruits"
                label="Select a fruit"
                options={OPTIONS}
                value={value}
                onChange={setValue}
                selectedOption={selectedOption}
                onSelect={setSelectedOption}
                placeholder="Search fruits..."
                optionLimit={5}
              />
            </div>
            <div className="mockup-code">
              <pre>
                <code>
                  {`import { useState } from "react";
  import { Combobox } from "amvasdev-ui";

  function App() {
    const [value, setValue] = useState("");
    const [selectedOption, setSelectedOption] = useState(null);

    const options = [
      { id: "1", text: "Apple" },
      { id: "2", text: "Banana" },
      { id: "3", text: "Cherry" },
      { id: "4", text: "Date" },
    ];

    return (
      <Combobox
        id="fruits"
        name="fruits"
        label="Select a fruit"
        options={options}
        value={value}
        onChange={setValue}
        selectedOption={selectedOption}
        onSelect={setSelectedOption}
        placeholder="Search fruits..."
        optionLimit={5}
      />
    );
  }`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {(comboboxData.notes?.length ?? 0) > 0 ? (
        <div>
          <h2 className="text-2xl font-semibold mb-3">Notes</h2>
          <ul className="list-disc list-inside space-y-2 text-base-content/70">
            {comboboxData.notes?.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
