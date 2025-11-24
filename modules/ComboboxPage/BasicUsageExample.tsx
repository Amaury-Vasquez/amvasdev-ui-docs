"use client";
import { Combobox, IComboboxOption } from "amvasdev-ui";
import { useState } from "react";
import ExampleBlock from "@/components/documentation/ExampleBlock";

const OPTIONS: IComboboxOption[] = [
  { id: "1", text: "Apple" },
  { id: "2", text: "Banana" },
  { id: "3", text: "Cherry" },
  { id: "4", text: "Date" },
];

const BasicUsageExample = () => {
  const [value, setValue] = useState("");
  const [selectedOption, setSelectedOption] = useState<
    IComboboxOption | null | undefined
  >(null);

  return (
    <ExampleBlock
      title="Basic Usage"
      preview={
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
      }
      code={`import { useState } from "react";
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
    />
  );
};

export default BasicUsageExample;
