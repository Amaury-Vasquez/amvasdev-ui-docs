"use client";
import { RadioGroup, RadioOption } from "amvasdev-ui";
import { useState } from "react";
import ExampleBlock from "@/components/documentation/ExampleBlock";

const OPTIONS = [
  { id: "yes", name: "Yes" },
  { id: "no", name: "No" },
  { id: "maybe", name: "Maybe", label: "Maybe Later" },
];

const BasicUsageExample = () => {
  const [selectedOption, setSelectedOption] = useState<RadioOption>();

  return (
    <ExampleBlock
      title="Basic Usage"
      preview={
        <RadioGroup
          id="confirmation"
          options={OPTIONS}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          orientation="horizontal"
          size="md"
          variant="primary"
        />
      }
      code={`import { useState } from "react";
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
    />
  );
};

export default BasicUsageExample;
