"use client";
import { Select } from "amvasdev-ui";
import { useState } from "react";
import ExampleBlock from "@/components/documentation/ExampleBlock";

const OPTIONS = [
  { id: "1", text: "Option 1" },
  { id: "2", text: "Option 2" },
  { id: "3", text: "Option 3" },
];

const ValidationExample = () => {
  const [selectedOption, setSelectedOption] = useState(OPTIONS[0]);

  return (
    <ExampleBlock
      title="With Validation"
      preview={
        <Select
          id="select2"
          label="Required field"
          options={OPTIONS}
          onChange={setSelectedOption}
          value={selectedOption}
          bordered={true}
          errorMessage="This field is required"
          required
        />
      }
      code={`<Select
  id="select"
  label="Required field"
  options={options}
  onChange={setSelectedOption}
  value={selectedOption}
  bordered={true}
  errorMessage="This field is required"
  required
/>`}
    />
  );
};

export default ValidationExample;
