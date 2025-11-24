"use client";
import { Calendar } from "amvasdev-ui";
import { useState } from "react";
import ExampleBlock from "@/components/documentation/ExampleBlock";

const BasicUsageExample = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );

  return (
    <ExampleBlock
      title="Basic Usage"
      preview={
        <Calendar
          selectedDate={selectedDate}
          onDateChange={setSelectedDate}
          className="sm:max-w-80"
        />
      }
      code={`import { useState } from "react";
  import { Calendar } from "amvasdev-ui";

  function App() {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
      <Calendar
        selectedDate={selectedDate}
        onDateChange={setSelectedDate}
      />
    );
  }`}
    />
  );
};

export default BasicUsageExample;
