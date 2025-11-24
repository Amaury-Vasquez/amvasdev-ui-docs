"use client";
import { RadioGroup, RadioOption } from "amvasdev-ui";
import { useState } from "react";
import ExampleBlock from "@/components/documentation/ExampleBlock";

const OPTIONS = [
  { id: "yes", name: "Yes" },
  { id: "no", name: "No" },
  { id: "maybe", name: "Maybe", label: "Maybe Later" },
];

const VerticalOrientationExample = () => {
  const [selectedOption, setSelectedOption] = useState<RadioOption>();

  return (
    <ExampleBlock
      title="Vertical Orientation"
      preview={
        <RadioGroup
          id="choice"
          options={OPTIONS}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          orientation="vertical"
        />
      }
      code={`<RadioGroup
  id="choice"
  options={options}
  selectedOption={selectedOption}
  setSelectedOption={setSelectedOption}
  orientation="vertical"
/>`}
    />
  );
};

export default VerticalOrientationExample;
