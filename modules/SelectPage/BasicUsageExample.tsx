"use client";
import { Select } from "amvasdev-ui";
import { useState } from "react";
import ExampleBlock from "@/components/documentation/ExampleBlock";

const OPTIONS = [
  { id: "1", text: "Option 1" },
  { id: "2", text: "Option 2" },
  { id: "3", text: "Option 3" },
];

const BasicUsageExample = () => {
  const [selectedOption, setSelectedOption] = useState(OPTIONS[0]);

  return (
    <ExampleBlock
      title="Basic Usage"
      preview={
        <Select
          id="select"
          label="Choose an option"
          options={OPTIONS}
          onChange={setSelectedOption}
          value={selectedOption}
          placeholder="Select an option"
        />
      }
      code={`import { useState } from "react";
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
    />
  );
};

export default BasicUsageExample;
