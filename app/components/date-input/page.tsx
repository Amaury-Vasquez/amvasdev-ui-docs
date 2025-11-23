"use client";
import { DateInput } from "amvasdev-ui";
import { useState } from "react";
import { COMPONENTS_DATA } from "@/data/components";

const dateInputData = COMPONENTS_DATA["date-input"];

export default function DateInputPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">{dateInputData.name}</h1>
        <p className="text-lg text-base-content/80">
          {dateInputData.description}
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-3">Import</h2>
        <div className="mockup-code">
          <pre>
            <code>{dateInputData.importStatement}</code>
          </pre>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Examples</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">Basic Usage</h3>
            <div className="p-6 bg-base-200 rounded-lg mb-4">
              <DateInput
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                label="Birth Date"
                placeholder="Select your birth date"
              />
            </div>
            <div className="mockup-code">
              <pre>
                <code>
                  {`import { useState } from "react";
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
                </code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">With Validation</h3>
            <div className="p-6 bg-base-200 rounded-lg mb-4">
              <DateInput
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                label="Event Date"
                required
                errorMessage="Please select a date"
              />
            </div>
            <div className="mockup-code">
              <pre>
                <code>
                  {`<DateInput
    selectedDate={selectedDate}
    setSelectedDate={setSelectedDate}
    label="Event Date"
    required
    errorMessage="Please select a date"
  />`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {(dateInputData.sizes?.length ?? 0) > 0 ? (
        <div>
          <h2 className="text-2xl font-semibold mb-3">Available Sizes</h2>
          <div className="flex flex-wrap gap-2">
            {dateInputData.sizes?.map((size) => (
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

      {(dateInputData.notes?.length ?? 0) > 0 ? (
        <div>
          <h2 className="text-2xl font-semibold mb-3">Notes</h2>
          <ul className="list-disc list-inside space-y-2 text-base-content/70">
            {dateInputData.notes?.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
