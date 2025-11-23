"use client";
import { Calendar } from "amvasdev-ui";
import { useState } from "react";
import { COMPONENTS_DATA } from "@/data/components";

const calendarData = COMPONENTS_DATA.calendar;

export default function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">{calendarData.name}</h1>
        <p className="text-lg text-base-content/80">
          {calendarData.description}
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-3">Import</h2>
        <div className="mockup-code">
          <pre>
            <code>{calendarData.importStatement}</code>
          </pre>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Examples</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">Basic Usage</h3>
            <div className="p-6 bg-base-200 rounded-lg mb-4">
              <Calendar
                selectedDate={selectedDate}
                onDateChange={setSelectedDate}
              />
            </div>
            <div className="mockup-code">
              <pre>
                <code>
                  {`import { useState } from "react";
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
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {(calendarData.notes?.length ?? 0) > 0 ? (
        <div>
          <h2 className="text-2xl font-semibold mb-3">Notes</h2>
          <ul className="list-disc list-inside space-y-2 text-base-content/70">
            {calendarData.notes?.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
