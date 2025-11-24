"use client";
import { DateInput } from "amvasdev-ui";
import { useState } from "react";
import ExampleBlock from "@/components/documentation/ExampleBlock";

const BasicUsageExample = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();

  return (
    <ExampleBlock
      title="Basic Usage"
      preview={
        <DateInput
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          label="Birth Date"
          placeholder="Select your birth date"
          className="max-w-56"
        />
      }
      code={`import { useState } from "react";
  import { DateInput } from "amvasdev-ui";

  function App() {
    const [selectedDate, setSelectedDate] = useState();

    return (
      <DateInput
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        label="Birth Date"
        placeholder="Select your birth date"
      />
    );
  }`}
    />
  );
};

export default BasicUsageExample;
