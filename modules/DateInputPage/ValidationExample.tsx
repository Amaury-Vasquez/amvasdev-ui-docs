"use client";
import { DateInput } from "amvasdev-ui";
import { useState } from "react";
import ExampleBlock from "@/components/documentation/ExampleBlock";

const ValidationExample = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();

  return (
    <ExampleBlock
      title="With Validation"
      preview={
        <DateInput
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          label="Event Date"
          required
          errorMessage="Please select a date"
          className="max-w-56"
        />
      }
      code={`<DateInput
  selectedDate={selectedDate}
  setSelectedDate={setSelectedDate}
  label="Event Date"
  required
  errorMessage="Please select a date"
/>`}
    />
  );
};

export default ValidationExample;
